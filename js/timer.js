// Game timer: a two-sided chess clock built around the 6: Siege round structure.
// Time per operator by speed setting comes from Steamforged's "Can you handle the pressure?" update.
(function () {
  const S = window.SIEGE;
  const KEY = 'siege-timer-v1';
  const SPEEDS = { 1: { name: 'Beginner', sec: 120 }, 2: { name: 'Chill', sec: 90 }, 3: { name: 'Standard', sec: 60 }, 4: { name: 'Extreme', sec: 45 } };
  const PHASES = ['A', 'D', 'A', 'D'];
  const OTHER = { A: 'D', D: 'A' };
  const LABEL = { A: 'Attackers', D: 'Defenders' };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const defaults = () => ({
    v: 1, stage: 'setup',
    cfg: { names: { A: 'Attackers', D: 'Defenders' }, speed: { A: 3, D: 3 }, deploy: true, deployMin: 4, sound: true, vibrate: true, flip: true },
    ops: { A: 5, D: 5 }, round: 0, phase: 0, deployTurn: 'D',
    left: { A: 0, D: 0 }, running: null, since: 0, paused: false, reacting: null,
    out: { A: false, D: false }, lost: { A: 0, D: 0 }, warned: {}
  });
  let st = load();
  let root = null, timerId = null, audio = null, wakeLock = null;

  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.v === 1) return s; } catch (e) { /* ignore */ }
    return defaults();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* ignore */ } }

  // ---------- Clock maths ----------
  const now = () => Date.now();
  function remaining(side) {
    let ms = st.left[side];
    if (st.running === side && !st.paused) ms -= now() - st.since;
    return Math.max(0, ms);
  }
  function commit() {
    if (st.running && !st.paused) { st.left[st.running] = Math.max(0, st.left[st.running] - (now() - st.since)); }
    st.since = now();
  }
  function run(side) { commit(); st.running = side; st.since = now(); st.warned = {}; }
  const phaseSide = () => PHASES[st.phase];
  const perOp = side => SPEEDS[st.cfg.speed[side]].sec * 1000;
  function fmt(ms) {
    const s = Math.ceil(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  // ---------- Sound, vibration, screen ----------
  function beep(freq = 880, dur = 0.12, times = 1) {
    if (!st.cfg.sound || !audio) return;
    for (let i = 0; i < times; i++) {
      const t = audio.currentTime + i * (dur + 0.08);
      const o = audio.createOscillator(), g = audio.createGain();
      o.frequency.value = freq; o.type = 'square';
      g.gain.setValueAtTime(0.15, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g); g.connect(audio.destination); o.start(t); o.stop(t + dur);
    }
  }
  function buzz(pattern) { if (st.cfg.vibrate && navigator.vibrate) navigator.vibrate(pattern); }
  function unlockAudio() {
    try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); if (audio.state === 'suspended') audio.resume(); } catch (e) { audio = null; }
  }
  async function keepAwake() {
    try { if ('wakeLock' in navigator && !wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); } } catch (e) { /* not allowed */ }
  }
  window.addEventListener('pagehide', () => { if (st.running && !st.paused && ['deploy', 'round'].includes(st.stage)) { commit(); st.paused = true; save(); } });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && root && st.stage !== 'setup') keepAwake(); });

  // ---------- Game flow ----------
  function startGame() {
    unlockAudio(); keepAwake();
    st.ops = { A: 5, D: 5 }; st.round = 0; st.out = { A: false, D: false }; st.reacting = null; st.paused = false; st.running = null;
    if (st.cfg.deploy) {
      st.stage = 'deploy'; st.deployTurn = 'D';
      st.left = { A: st.cfg.deployMin * 60000, D: st.cfg.deployMin * 60000 };
      run('D');
    } else {
      st.stage = 'ready'; st.round = 1;
    }
    save(); draw();
  }
  function endDeploy() {
    commit();
    if (st.deployTurn === 'D') { st.deployTurn = 'A'; run('A'); }
    else { st.running = null; st.stage = 'ready'; st.round = 1; }
    save(); draw();
  }
  function startRound() {
    unlockAudio(); keepAwake();
    st.left = { A: st.ops.A * perOp('A'), D: st.ops.D * perOp('D') };
    st.out = { A: st.ops.A === 0, D: st.ops.D === 0 };
    st.lost = { A: 0, D: 0 }; st.reacting = null; st.paused = false; st.phase = 0; st.stage = 'round';
    st.running = null;
    startPhase();
  }
  function startPhase() {
    while (st.phase < 4 && st.out[phaseSide()]) st.phase++;
    if (st.phase >= 4) { commit(); st.running = null; st.stage = 'upkeep'; beep(660, 0.15, 2); }
    else run(phaseSide());
    save(); draw();
  }
  function endPhase() { commit(); st.reacting = null; st.phase++; startPhase(); }
  function react(side) { if (st.out[side]) return; st.reacting = side; run(side); save(); draw(); }
  function endReact() {
    commit(); st.reacting = null;
    if (st.out[phaseSide()]) { st.phase++; startPhase(); return; }
    run(phaseSide()); save(); draw();
  }
  function timeout(side) {
    commit(); st.left[side] = 0;
    beep(440, 0.4, 3); buzz([400, 150, 400]);
    if (st.stage === 'deploy') { endDeploy(); return; }
    st.out[side] = true;
    if (st.reacting === side) { endReact(); return; }
    st.phase++; st.reacting = null; startPhase();
  }
  function togglePause() { commit(); st.paused = !st.paused; st.since = now(); save(); draw(); }
  function adjust(side, deltaMs) {
    commit();
    st.left[side] = Math.max(0, st.left[side] + deltaMs);
    if (st.left[side] > 0 && st.stage === 'round') st.out[side] = false;
    if (st.left[side] === 0 && st.stage === 'round' && st.running !== side) st.out[side] = true;
    save(); draw();
  }
  function nextRound() {
    st.ops.A = Math.max(0, st.ops.A - st.lost.A); st.ops.D = Math.max(0, st.ops.D - st.lost.D);
    st.round++; st.stage = 'ready'; save(); draw();
  }
  function endGame() { commit(); st.running = null; st.stage = 'over'; save(); draw(); }
  function reset() { const cfg = st.cfg; st = defaults(); st.cfg = cfg; save(); }

  // ---------- Rendering ----------
  function panel(side) {
    const t = remaining(side);
    const inRound = st.stage === 'round';
    const active = st.running === side && st.stage !== 'over';
    const owner = inRound && phaseSide() === side;
    let status = '', btn = '';
    if (st.stage === 'deploy') {
      if (st.deployTurn === side) { status = 'Deploying'; btn = `<button class="tbtn" data-act="endDeploy">Done deploying</button>`; }
      else status = side === 'A' && st.deployTurn === 'D' ? 'Waiting for the defender' : 'Deployed';
    } else if (inRound) {
      if (st.out[side]) status = 'Out of time this round';
      else if (st.reacting === side) { status = 'Reacting'; btn = `<button class="tbtn" data-act="endReact">Done reacting</button>`; }
      else if (owner && !st.reacting) {
        status = `Activation phase ${st.phase < 2 ? 1 : 2}`;
        btn = `<button class="tbtn" data-act="endPhase">${st.phase === 3 ? 'Done, go to upkeep' : `Done, pass to ${esc(st.cfg.names[OTHER[side]])}`}</button>`;
      } else if (owner && st.reacting) status = 'Opponent is reacting';
      else { status = 'Waiting'; btn = `<button class="tbtn ghost" data-act="react" data-side="${side}">React</button>`; }
    } else if (st.stage === 'ready') status = `${st.ops[side]} operator${st.ops[side] === 1 ? '' : 's'} = ${fmt(st.ops[side] * perOp(side))}`;
    const low = active && !st.paused && t <= 10000 && t > 0;
    return `<section class="tpanel ${side === 'A' ? 'att' : 'def'} ${active ? 'on' : ''} ${low ? 'low' : ''} ${st.out[side] && inRound ? 'out' : ''} ${side === 'D' && st.cfg.flip ? 'flip' : ''}">
      <div class="tname">${esc(st.cfg.names[side])}</div>
      <div class="ttime" data-time="${side}">${st.stage === 'ready' ? fmt(st.ops[side] * perOp(side)) : fmt(t)}</div>
      <div class="tstatus">${status}</div>
      <div class="tmeta">${st.ops[side]} op${st.ops[side] === 1 ? '' : 's'} · ${SPEEDS[st.cfg.speed[side]].name}</div>
      ${btn}
    </section>`;
  }
  function centre() {
    let label = '';
    if (st.stage === 'deploy') label = 'Deployment';
    else if (st.stage === 'ready') label = st.round === 6 ? 'Overtime' : `Round ${st.round}`;
    else if (st.stage === 'round') label = `${st.round === 6 ? 'Overtime' : 'Round ' + st.round} · phase ${st.phase + 1} of 4`;
    else if (st.stage === 'upkeep') label = `Round ${st.round === 6 ? 'overtime' : st.round} upkeep`;
    else label = 'Game over';
    const canPause = st.stage === 'deploy' || st.stage === 'round';
    return `<div class="tbar">
      <button class="tbtn small ghost" data-act="menu" aria-label="Menu">Menu</button>
      <div class="tlabel">${label}${st.paused ? ' · paused' : ''}</div>
      ${st.stage === 'round' ? '<button class="tbtn small ghost" data-act="challenge">Challenge</button>' : ''}
      ${canPause ? `<button class="tbtn small" data-act="pause">${st.paused ? 'Resume' : 'Pause'}</button>` : ''}
    </div>`;
  }
  function sheet() {
    if (st.stage === 'ready') {
      return `<div class="tsheet"><h2>${st.round === 6 ? 'Overtime round' : 'Round ' + st.round}</h2>
        <p>Attacker moves the round tracker. Defender starts the attacker's clock.</p>
        <p class="small">Time this round: ${esc(st.cfg.names.A)} ${fmt(st.ops.A * perOp('A'))}, ${esc(st.cfg.names.D)} ${fmt(st.ops.D * perOp('D'))}.</p>
        <div class="trow"><button class="tbtn" data-act="startRound">Start ${st.round === 6 ? 'overtime' : 'round ' + st.round}</button><button class="tbtn ghost" data-act="menu">Menu</button></div></div>`;
    }
    if (st.stage === 'upkeep') {
      const step = side => `<div class="tstep"><span>${esc(st.cfg.names[side])} lost this round</span>
        <button class="tbtn small ghost" data-act="lost" data-side="${side}" data-d="-1" aria-label="One fewer">-</button>
        <b>${st.lost[side]}</b>
        <button class="tbtn small ghost" data-act="lost" data-side="${side}" data-d="1" aria-label="One more">+</button></div>`;
      const next = st.round < 5 ? '<button class="tbtn" data-act="nextRound">Next round</button>'
        : st.round === 5 ? '<button class="tbtn" data-act="nextRound">Play overtime</button>' : '';
      return `<div class="tsheet"><h2>Upkeep</h2>
        <p>Check the mission's victory conditions. Record operators eliminated this round: next round's time drops by their share.</p>
        ${step('A')}${step('D')}
        <div class="trow">${next}<button class="tbtn ghost" data-act="endGame">End game</button><button class="tbtn ghost" data-act="menu">Menu</button></div>
        ${st.round === 5 ? '<p class="small">Overtime only happens when the mission calls for it.</p>' : ''}</div>`;
    }
    if (st.stage === 'over') {
      return `<div class="tsheet"><h2>Game over</h2><p>${st.round ? `Ended in ${st.round === 6 ? 'overtime' : 'round ' + st.round}.` : ''}</p>
        <div class="trow"><button class="tbtn" data-act="newGame">New game</button><button class="tbtn ghost" data-act="exit">Exit</button></div></div>`;
    }
    return '';
  }
  function overlay(kind) {
    const o = document.createElement('div');
    o.className = 'toverlay';
    if (kind === 'challenge') {
      const opt = (w) => `<p><b>${esc(st.cfg.names[w])} won the challenge</b></p>
        <div class="trow"><button class="tbtn small" data-ch="${w}+">+30 s to ${esc(st.cfg.names[w])}</button><button class="tbtn small" data-ch="${w}-">-30 s from ${esc(st.cfg.names[OTHER[w]])}</button></div>`;
      o.innerHTML = `<div class="tsheet"><h2>Challenge</h2><p class="small">The clock is paused while you check the line of sight. The winner picks one.</p>${opt('A')}${opt('D')}<button class="tbtn ghost" data-ch="cancel">Cancel</button></div>`;
    } else {
      o.innerHTML = `<div class="tsheet"><h2>Menu</h2>
        <div class="trow"><button class="tbtn small ghost" data-adj="A+">${esc(st.cfg.names.A)} +30 s</button><button class="tbtn small ghost" data-adj="A-">${esc(st.cfg.names.A)} -30 s</button></div>
        <div class="trow"><button class="tbtn small ghost" data-adj="D+">${esc(st.cfg.names.D)} +30 s</button><button class="tbtn small ghost" data-adj="D-">${esc(st.cfg.names.D)} -30 s</button></div>
        <div class="trow">${st.stage === 'round' ? '<button class="tbtn small ghost" data-m="upkeep">Go to upkeep</button>' : ''}<button class="tbtn small ghost" data-m="end">End game</button><button class="tbtn small ghost" data-m="exit">Exit timer</button></div>
        <button class="tbtn" data-m="close">Back to the game</button></div>`;
    }
    return o;
  }
  function openOverlay(kind) {
    const wasPaused = st.paused;
    if (!st.paused && (st.stage === 'round' || st.stage === 'deploy')) togglePause();
    const o = overlay(kind);
    const screen = root.querySelector('.tscreen');
    screen.appendChild(o);
    const close = () => { o.remove(); if (!wasPaused && st.paused) togglePause(); };
    o.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) { if (e.target === o) close(); return; }
      if (b.dataset.ch) {
        if (b.dataset.ch !== 'cancel') { const w = b.dataset.ch[0], op = b.dataset.ch[1]; op === '+' ? adjust(w, 30000) : adjust(OTHER[w], -30000); }
        close();
      } else if (b.dataset.adj) {
        const s = b.dataset.adj[0]; adjust(s, b.dataset.adj[1] === '+' ? 30000 : -30000);
        o.remove(); openOverlay('menu');
      } else if (b.dataset.m === 'upkeep') { o.remove(); commit(); st.paused = false; st.running = null; st.reacting = null; st.stage = 'upkeep'; save(); draw(); }
      else if (b.dataset.m === 'end') { o.remove(); st.paused = false; endGame(); }
      else if (b.dataset.m === 'exit') { o.remove(); exitTimer(); }
      else close();
    });
  }

  function draw() {
    if (!root) return;
    if (st.stage === 'setup') { drawSetup(); return; }
    document.body.classList.add('timer-mode');
    root.innerHTML = `<div class="tscreen">${panel('D')}${centre()}${panel('A')}${sheet() ? `<div class="toverlay static">${sheet()}</div>` : ''}</div>`;
  }
  function tick() {
    if (!root || !['deploy', 'round'].includes(st.stage) || st.paused || !st.running) return;
    const side = st.running, t = remaining(side);
    const el = root.querySelector(`[data-time="${side}"]`);
    if (el) el.textContent = fmt(t);
    const p = el && el.closest('.tpanel');
    if (p) p.classList.toggle('low', t <= 10000 && t > 0);
    if (t <= 30000 && !st.warned[30]) { st.warned[30] = true; beep(880, 0.1, 1); }
    if (t <= 10000 && !st.warned[10]) { st.warned[10] = true; beep(988, 0.1, 2); buzz(200); }
    if (t <= 0) timeout(side);
  }

  function drawSetup() {
    document.body.classList.remove('timer-mode');
    const c = st.cfg;
    const inProgress = (() => { try { const s = JSON.parse(localStorage.getItem(KEY)); return s && s.stage && !['setup', 'over'].includes(s.stage); } catch (e) { return false; } })();
    const speedSel = side => `<select data-cfg="speed.${side}">${Object.entries(SPEEDS).map(([k, v]) => `<option value="${k}" ${+c.speed[side] === +k ? 'selected' : ''}>${k} - ${v.name} (${fmt(v.sec * 1000)} per operator)</option>`).join('')}</select>`;
    root.innerHTML = `
      <h1>Game timer</h1>
      <p class="lead">A two-sided clock for 6: Siege that follows the round structure: deployment, four activation phases, reactions, challenges and upkeep. Lay the phone between the players.</p>
      ${inProgress ? `<div class="panel" style="margin-bottom:.9rem"><b>Game in progress.</b> <button class="btn small" type="button" id="resume">Resume</button></div>` : ''}
      <div class="panel tsetup">
        <div class="tgrid">
          <label>Attacker name<input class="search" data-cfg="names.A" value="${esc(c.names.A)}" maxlength="24"></label>
          <label>Attacker speed${speedSel('A')}</label>
          <label>Defender name<input class="search" data-cfg="names.D" value="${esc(c.names.D)}" maxlength="24"></label>
          <label>Defender speed${speedSel('D')}</label>
        </div>
        <div class="tgrid">
          <label class="tcheck"><input type="checkbox" data-cfg="deploy" ${c.deploy ? 'checked' : ''}> Timed deployment</label>
          <label>Deployment time per side (minutes)<input class="search" type="number" min="1" max="20" step="0.5" data-cfg="deployMin" value="${c.deployMin}"></label>
          <label class="tcheck"><input type="checkbox" data-cfg="sound" ${c.sound ? 'checked' : ''}> Beeps</label>
          <label class="tcheck"><input type="checkbox" data-cfg="vibrate" ${c.vibrate ? 'checked' : ''}> Vibrate</label>
          <label class="tcheck"><input type="checkbox" data-cfg="flip" ${c.flip ? 'checked' : ''}> Turn the defender's half upside down (players sit opposite)</label>
        </div>
        <p><button class="btn" type="button" id="start">Start new game</button></p>
      </div>
      <h2>How it works</h2>
      <div class="panel small">
        <p>Each squad gets time per operator still in play, set by its speed: Beginner 2:00, Chill 1:30, Standard 1:00, Extreme 0:45. The time covers both of that squad's activation phases in the round. Time left over does not carry into the next round.</p>
        <p><b>Activation phases.</b> The attacker plays first. When you finish a phase, tap Done and the other squad's clock starts. After the defender's second phase the clock moves to upkeep.</p>
        <p><b>Reactions.</b> The waiting squad taps React before reacting. Their own clock runs while they decide, then Done reacting hands it back.</p>
        <p><b>Challenges.</b> Tap Challenge to pause while you check the line of sight. The winner adds 30 seconds to their clock or takes 30 from the opponent.</p>
        <p><b>Out of time.</b> A squad that runs out cannot activate more operators this round, and its remaining phase is skipped.</p>
        <p><b>Upkeep.</b> Enter the operators each squad lost. Next round's time is based on who is left. Round 5 can go to overtime when the mission calls for it.</p>
        <p class="muted">The official app sets deployment time by speed, but those values are not published, so set your own. The screen stays on while the timer runs on browsers that allow it. Keep the phone's ringer on for beeps.</p>
      </div>`;
    root.querySelectorAll('[data-cfg]').forEach(inp => inp.addEventListener('change', () => {
      const [k, sub] = inp.dataset.cfg.split('.');
      let v = inp.type === 'checkbox' ? inp.checked : inp.value;
      if (k === 'deployMin') v = Math.min(20, Math.max(1, parseFloat(v) || 4));
      if (k === 'speed') v = +v;
      if (k === 'names') v = String(v).trim() || LABEL[sub];
      if (sub) st.cfg[k][sub] = v; else st.cfg[k] = v;
      save();
    }));
    root.querySelector('#start').addEventListener('click', () => { const cfg = st.cfg; st = defaults(); st.cfg = cfg; startGame(); });
    const r = root.querySelector('#resume');
    if (r) r.addEventListener('click', () => { st = load(); unlockAudio(); keepAwake(); draw(); });
  }

  function onClick(e) {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    unlockAudio();
    const a = b.dataset.act;
    if (a === 'endDeploy') endDeploy();
    else if (a === 'startRound') startRound();
    else if (a === 'endPhase') endPhase();
    else if (a === 'react') react(b.dataset.side);
    else if (a === 'endReact') endReact();
    else if (a === 'pause') togglePause();
    else if (a === 'challenge') openOverlay('challenge');
    else if (a === 'menu') openOverlay('menu');
    else if (a === 'lost') { const s = b.dataset.side; st.lost[s] = Math.min(st.ops[s], Math.max(0, st.lost[s] + +b.dataset.d)); save(); draw(); }
    else if (a === 'nextRound') nextRound();
    else if (a === 'endGame') endGame();
    else if (a === 'newGame') { reset(); draw(); }
    else if (a === 'exit') exitTimer();
  }
  function exitTimer() {
    if (st.stage === 'over') reset();
    else { commit(); if (!st.paused && st.running) st.paused = true; save(); }
    location.hash = '#/timer';
    st.stage === 'setup' ? draw() : (document.body.classList.remove('timer-mode'), drawSetupKeep());
  }
  function drawSetupKeep() { const keep = st; st = Object.assign({}, keep, { stage: 'setup' }); drawSetup(); st = keep; }

  S.timer = {
    mount(el) {
      root = el;
      root.addEventListener('click', onClick);
      if (st.stage === 'setup' || st.stage === 'over') { if (st.stage === 'over') reset(); drawSetup(); }
      else { if (st.running && !st.paused) { commit(); st.paused = true; save(); } drawSetupKeep(); }
      clearInterval(timerId);
      timerId = setInterval(tick, 200);
    },
    unmount() {
      if (!root) return;
      root.removeEventListener('click', onClick);
      clearInterval(timerId); timerId = null; root = null;
      document.body.classList.remove('timer-mode');
      if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
    },
    _state: () => st
  };
})();
