// 6: Siege field guide. Hash routes, no framework.
(function () {
  const S = SIEGE;
  const app = document.getElementById('app');
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const boxById = Object.fromEntries(S.boxes.map(b => [b.id, b]));
  const opById = Object.fromEntries(S.operators.map(o => [o.id, o]));
  const mapById = Object.fromEntries(S.maps.map(m => [m.id, m]));
  const modeById = Object.fromEntries(S.modes.map(m => [m.id, m]));
  const sideTag = o => `<span class="tag ${o.side === 'attacker' ? 'att' : 'def'}">${o.side}</span>`;
  const baseName = o => o.id.replace(/-alt$/, '');
  const variantLabel = o => o.variant === 'alternate' ? 'Alternate' : o.variant === 'recruit' ? 'Recruit' : '';
  const opTitle = o => o.variant === 'alternate' ? `${o.name} (alternate)` : o.variant === 'recruit' ? `Recruit ${o.id.slice(-1)}` : o.name;
  const vOrder = o => ['standard', 'alternate', 'recruit'].indexOf(o.variant);
  const DICE = { Y: 'var(--yellow)', O: 'var(--orange)', R: 'var(--red)' };
  const DESTROY = { yellow: 'var(--yellow)', orange: 'var(--orange)', red: 'var(--red)' };

  function die(code) {
    const col = DICE[code[0]] || '#999';
    const bolt = code.includes('!') ? '<path d="M13 4 7 13h4l-1 7 6-9h-4z" fill="#111"/>' : '';
    return `<svg class="die" viewBox="0 0 24 24" aria-label="${code[0] === 'Y' ? 'yellow' : code[0] === 'O' ? 'orange' : 'red'} die${bolt ? ' with lightning' : ''}"><path d="M12 1.5 21.5 7v10L12 22.5 2.5 17V7z" fill="${col}" stroke="rgba(0,0,0,.35)"/>${bolt}</svg>`;
  }
  const diceRow = arr => arr && arr.length ? arr.map(die).join('') : '<span class="muted">none</span>';
  const destroyChip = c => c ? `<span class="destroy-chip" style="background:${DESTROY[c]}"></span>${c}` : '<span class="muted">none</span>';

  // ---------- Theme and menu ----------
  $('#themeBtn').addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('siege-theme', next); } catch (e) { /* ignore */ }
  });
  const nav = $('#nav'), menuBtn = $('#menuBtn');
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });

  // ---------- Lightbox ----------
  const lb = $('#lightbox'), lbBody = $('.lb-body', lb), lbImg = $('img', lb);
  function openLightbox(src, alt) {
    lbImg.src = src; lbImg.alt = alt || '';
    lbBody.classList.add('fit');
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() { lb.hidden = true; lbImg.src = ''; document.body.style.overflow = ''; }
  $('.lb-close', lb).addEventListener('click', closeLightbox);
  lbImg.addEventListener('click', () => lbBody.classList.toggle('fit'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLightbox(); });
  app.addEventListener('click', e => {
    const z = e.target.closest('[data-zoom]');
    if (z) openLightbox(z.dataset.zoom, z.alt);
  });

  // ---------- Owned boxes ----------
  function ownedChips(kinds) {
    return S.boxes.filter(b => kinds.some(k => b.kind.includes(k))).map(b =>
      `<button type="button" class="chip" data-own="${b.id}" aria-pressed="${S.store.owns(b.id)}" title="${esc(b.name)}">${esc(b.short)}</button>`).join('');
  }
  function bindOwned(root, rerender) {
    $$('[data-own]', root).forEach(btn => btn.addEventListener('click', () => {
      S.store.toggleOwned(btn.dataset.own);
      rerender();
    }));
  }
  function visibleOps() {
    return S.operators.filter(o => S.store.owns(o.box)
      && (o.variant !== 'alternate' || S.store.get('includeAlternates'))
      && (o.variant !== 'recruit' || S.store.get('includeRecruits')));
  }

  // ---------- Views ----------
  const views = {};

  views.home = () => {
    const nOps = S.operators.filter(o => o.variant === 'standard').length;
    const nMaps = S.maps.length, nMissions = S.missions.length;
    app.innerHTML = `
      <section class="hero">
        <div>
          <h1>6: Siege field guide</h1>
          <p class="lead">A community guide to 6: Siege - The Board Game. Every operator board in one place, every map with its room names and missions, a match randomiser, and printable draw cards.</p>
          <p><a class="btn" href="#/operators">Browse operators</a> <a class="btn ghost" href="#/randomiser">Random match</a></p>
        </div>
        <img class="hero-img" src="assets/maps/preview/consulate.jpg" alt="Consulate game board">
      </section>
      <div class="tiles">
        <a class="tile" href="#/operators"><b>Operators</b><span>${nOps} operators plus alternates and recruits. Filter by side, role, box and stats.</span></a>
        <a class="tile" href="#/maps"><b>Maps</b><span>${nMaps} boards, official and fan-made. Official boards have room names.</span></a>
        <a class="tile" href="#/missions"><b>Missions</b><span>${nMissions} Bomb, Hostage and Control setups, split out of the mission books.</span></a>
        <a class="tile" href="#/randomiser"><b>Randomiser</b><span>Draw a map, mode and two squads from the boxes you own.</span></a>
        <a class="tile" href="#/cards"><b>Print cards</b><span>Fan-made draw cards as A4 sheets with crop marks.</span></a>
        <a class="tile" href="#/tips"><b>Tips</b><span>Advice for new and returning players.</span></a>
        <a class="tile" href="#/resources"><b>Resources</b><span>Living FAQ, solo AI chart, storage guide and links.</span></a>
      </div>
      <h2>My boxes</h2>
      <p class="muted small">Pick what you own. Operators, maps, the randomiser and print sheets only show these. Saved in this browser.</p>
      <div class="chips" id="own">${ownedChips(['operators', 'maps'])}</div>`;
    bindOwned(app, views.home);
  };

  // Operators list
  const opFilter = { side: 'all', q: '', roles: new Set(), sort: 'name' };
  views.operators = () => {
    const roles = Object.keys(S.roles);
    app.innerHTML = `
      <h1>Operators</h1>
      <div class="toolbar">
        <input class="search" type="search" id="q" placeholder="Search name or gadget" value="${esc(opFilter.q)}" aria-label="Search operators">
        <div class="chips" role="group" aria-label="Side">
          <button type="button" class="chip" data-side="all" aria-pressed="${opFilter.side === 'all'}">All</button>
          <button type="button" class="chip att" data-side="attacker" aria-pressed="${opFilter.side === 'attacker'}">Attackers</button>
          <button type="button" class="chip def" data-side="defender" aria-pressed="${opFilter.side === 'defender'}">Defenders</button>
        </div>
        <select id="sort" class="chip" aria-label="Sort">
          ${[['name', 'Name'], ['box', 'Box'], ['stamina', 'Stamina'], ['run', 'Run']].map(([v, l]) => `<option value="${v}" ${opFilter.sort === v ? 'selected' : ''}>Sort: ${l}</option>`).join('')}
        </select>
      </div>
      <details class="filters panel" ${opFilter.roles.size ? 'open' : ''}>
        <summary>Filters</summary>
        <div class="filter-group"><div class="label">Boxes</div><div class="chips">${ownedChips(['operators'])}</div></div>
        <div class="filter-group"><div class="label">Roles</div><div class="chips">${roles.map(r => `<button type="button" class="chip" data-role="${esc(r)}" aria-pressed="${opFilter.roles.has(r)}" title="${esc(S.roles[r])}">${esc(r)}</button>`).join('')}</div></div>
        <div class="filter-group"><div class="label">Include</div><div class="chips">
          <button type="button" class="chip" data-inc="includeAlternates" aria-pressed="${S.store.get('includeAlternates')}">Alternates</button>
          <button type="button" class="chip" data-inc="includeRecruits" aria-pressed="${S.store.get('includeRecruits')}">Recruits</button>
        </div></div>
      </details>
      <p class="count" id="count"></p>
      <div class="grid" id="list"></div>`;
    const draw = () => {
      const q = opFilter.q.trim().toLowerCase();
      let list = visibleOps().filter(o =>
        (opFilter.side === 'all' || o.side === opFilter.side)
        && (!opFilter.roles.size || [...opFilter.roles].every(r => o.roles.includes(r)))
        && (!q || [o.name, o.gadget.name, o.gadget.summary, ...(o.roles || [])].join(' ').toLowerCase().includes(q)));
      const order = S.boxes.map(b => b.id);
      const by = {
        name: (a, b) => a.name.localeCompare(b.name) || vOrder(a) - vOrder(b),
        box: (a, b) => order.indexOf(a.box) - order.indexOf(b.box) || a.name.localeCompare(b.name),
        stamina: (a, b) => b.stamina - a.stamina || a.name.localeCompare(b.name),
        run: (a, b) => (b.run || 0) - (a.run || 0) || a.name.localeCompare(b.name)
      };
      list.sort(by[opFilter.sort]);
      $('#count').textContent = `${list.length} operator${list.length === 1 ? '' : 's'}`;
      $('#list').innerHTML = list.length ? list.map(o => `
        <a class="card ${o.side === 'attacker' ? 'att' : 'def'}" href="#/operator/${o.id}">
          <img class="thumb" loading="lazy" src="assets/operators/thumbs/${o.file}.jpg" alt="">
          <div class="body">
            <div class="title"><span>${esc(opTitle(o))}</span><span class="tag">${esc(boxById[o.box].short)}</span></div>
            <div class="mini-stats"><span>Run ${o.run == null ? '-' : o.run}</span><span>Stamina ${o.stamina}</span>${o.shield ? '<span>Shield</span>' : ''}</div>
            <div class="muted small">${esc(o.gadget.name || 'No special gadget')}</div>
          </div>
        </a>`).join('') : '<div class="empty">No operators match. Check your boxes and filters.</div>';
    };
    $('#q').addEventListener('input', e => { opFilter.q = e.target.value; draw(); });
    $('#sort').addEventListener('change', e => { opFilter.sort = e.target.value; draw(); });
    $$('[data-side]').forEach(b => b.addEventListener('click', () => { opFilter.side = b.dataset.side; $$('[data-side]').forEach(x => x.setAttribute('aria-pressed', x === b)); draw(); }));
    $$('[data-role]').forEach(b => b.addEventListener('click', () => {
      const r = b.dataset.role; opFilter.roles.has(r) ? opFilter.roles.delete(r) : opFilter.roles.add(r);
      b.setAttribute('aria-pressed', opFilter.roles.has(r)); draw();
    }));
    $$('[data-inc]').forEach(b => b.addEventListener('click', () => {
      const k = b.dataset.inc; S.store.set(k, !S.store.get(k)); b.setAttribute('aria-pressed', S.store.get(k)); draw();
    }));
    $$('[data-own]').forEach(b => b.addEventListener('click', () => { S.store.toggleOwned(b.dataset.own); b.setAttribute('aria-pressed', S.store.owns(b.dataset.own)); draw(); }));
    draw();
  };

  // Operator detail
  views.operator = id => {
    const o = opById[id];
    if (!o) return notFound();
    const same = S.operators.filter(x => x.side === o.side).sort((a, b) => a.name.localeCompare(b.name) || vOrder(a) - vOrder(b));
    const i = same.indexOf(o), prev = same[(i - 1 + same.length) % same.length], next = same[(i + 1) % same.length];
    const related = S.operators.filter(x => x !== o && baseName(x) === baseName(o) && x.variant !== 'recruit');
    const tip = (S.tips.operatorNotes || []).find(n => n.operator.toLowerCase() === o.name.toLowerCase() && o.variant === 'standard');
    const g = o.gadget;
    app.innerHTML = `
      <p class="small"><a href="#/operators">&larr; All operators</a></p>
      <div class="op-head"><h1>${esc(opTitle(o))}</h1>${sideTag(o)}<span class="tag">${esc(boxById[o.box].name)}</span>${variantLabel(o) ? `<span class="tag">${variantLabel(o)}</span>` : ''}</div>
      <div class="detail">
        <div>
          <img class="board-img" src="assets/operators/${o.file}.jpg" data-zoom="assets/operators/${o.file}.jpg" alt="${esc(o.name)} operator board">
          <p class="muted small">Tap the board to zoom. Board art and wording are from the published game.</p>
        </div>
        <div>
          <div class="stat-row">
            <div class="stat"><b>${o.run == null ? '-' : o.run}</b><span>Run</span></div>
            <div class="stat"><b>${o.stamina}</b><span>Stamina</span></div>
            <div class="stat"><b style="font-size:1rem;padding:.3rem 0">${destroyChip(o.destroy)}</b><span>Destroy</span></div>
          </div>
          <table class="dice">
            <tr><th>Range 1-3</th><td>${diceRow(o.weapons.short)}</td></tr>
            <tr><th>Range 4-6</th><td>${diceRow(o.weapons.medium)}</td></tr>
            <tr><th>Range 7+</th><td>${diceRow(o.weapons.long)}</td></tr>
          </table>
          <dl class="dl">
            <dt>Special gadget</dt><dd>${g.name ? `<b>${esc(g.name)}</b>` : 'None'}</dd>
            ${g.summary ? `<dt>In short</dt><dd>${esc(g.summary)}</dd>` : ''}
            ${g.effects && g.effects.length ? `<dt>Effects</dt><dd>${[...new Set(g.effects)].map(esc).join(', ')}</dd>` : ''}
            ${g.keywords && g.keywords.length ? `<dt>Keywords</dt><dd>${g.keywords.map(esc).join(', ')}</dd>` : ''}
            ${g.charges ? `<dt>Charges</dt><dd>${g.charges}</dd>` : ''}
            ${o.shield ? '<dt>Shield</dt><dd>Permanent light protection</dd>' : ''}
            <dt>Roles</dt><dd>${o.roles.length ? o.roles.map(r => `<a href="#/operators" data-jump-role="${esc(r)}" title="${esc(S.roles[r] || '')}">${esc(r)}</a>`).join(', ') : '<span class="muted">Not on the official reference sheet</span>'}</dd>
            ${o.range ? `<dt>Best range</dt><dd>${esc(o.range)}</dd>` : ''}
          </dl>
          ${o.variant === 'recruit' ? '<div class="note" style="margin-bottom:.6rem">Recruit boards show two plain and two boxed dice per range. All four are listed here. Check the board for how the boxed dice work.</div>' : ''}
          ${tip ? `<div class="note"><b>Tip:</b> ${esc(tip.text)}</div>` : ''}
          ${related.length ? `<h3 style="margin-top:1rem">Other versions</h3><p>${related.map(r => `<a href="#/operator/${r.id}">${esc(opTitle(r))}</a>`).join(' · ')}</p>` : ''}
          ${o.card ? `<h3 style="margin-top:1rem">Fan draw card</h3><img src="assets/cards/${o.card}.jpg" data-zoom="assets/cards/${o.card}.jpg" alt="Fan-made draw card for ${esc(o.name)}" style="width:140px;border-radius:6px;cursor:zoom-in">` : ''}
        </div>
      </div>
      <div class="prevnext"><a class="btn ghost small" href="#/operator/${prev.id}">&larr; ${esc(opTitle(prev))}</a><a class="btn ghost small" href="#/operator/${next.id}">${esc(opTitle(next))} &rarr;</a></div>`;
    $$('[data-jump-role]').forEach(a => a.addEventListener('click', () => { opFilter.roles = new Set([a.dataset.jumpRole]); opFilter.side = o.side; }));
  };

  // Maps
  views.maps = () => {
    const own = S.maps.filter(m => S.store.owns(m.pack));
    app.innerHTML = `
      <h1>Maps</h1>
      <div class="toolbar"><div class="chips">${ownedChips(['maps'])}</div></div>
      <div class="grid wide">${own.map(m => `
        <a class="card" href="#/map/${m.id}">
          <img class="thumb" style="aspect-ratio:1.5;object-position:center" loading="lazy" src="assets/maps/preview/${m.image}.jpg" alt="">
          <div class="body">
            <div class="title"><span>${esc(m.name)}</span><span class="tag">${esc(boxById[m.pack].short)}</span></div>
            <div class="muted small">${esc([m.city, m.country].filter(Boolean).join(', '))}</div>
            <div class="small">${S.missions.filter(x => x.map === m.id).length} missions${m.fan ? ' · fan-made' : ''}</div>
          </div>
        </a>`).join('') || '<div class="empty">No maps for the boxes you picked.</div>'}</div>`;
    bindOwned(app, views.maps);
  };

  views.map = id => {
    const m = mapById[id];
    if (!m) return notFound();
    const missions = S.missions.filter(x => x.map === m.id);
    const hasRooms = !!m.roomsImage;
    app.innerHTML = `
      <p class="small"><a href="#/maps">&larr; All maps</a></p>
      <div class="op-head"><h1>${esc(m.name)}</h1><span class="tag">${esc(boxById[m.pack].name)}</span>${m.fan ? '<span class="tag">Fan-made</span>' : ''}</div>
      ${m.city || m.country ? `<p class="muted">${esc([m.city, m.country].filter(Boolean).join(', '))}</p>` : ''}
      ${m.blurb ? `<p>${esc(m.blurb)}</p>` : ''}
      ${hasRooms ? `<div class="seg" role="group" aria-label="Map view" style="margin-bottom:.6rem"><button type="button" data-view="board" aria-pressed="true">Board</button><button type="button" data-view="rooms" aria-pressed="false">Room names</button></div>` : ''}
      <figure class="map-figure" style="margin:0">
        <img id="mapImg" src="assets/maps/${m.image}.jpg" data-zoom="assets/maps/${m.image}.jpg" alt="${esc(m.name)} board">
      </figure>
      <p class="muted small">Tap to open full size, then tap again to zoom in.${m.lowRes ? ' Only a low-resolution scan is available for this board.' : ''}${m.credit ? ' ' + esc(m.credit) : ''}</p>
      ${m.download ? `<p><a class="btn ghost small" href="${m.download}" download>Download ${esc(m.downloadLabel || 'file')}</a></p>` : ''}
      ${m.rooms && m.rooms.length ? `<h2>Rooms</h2><ul class="cols">${m.rooms.map(r => `<li>${esc(r)}</li>`).join('')}</ul>` : ''}
      ${missions.length ? `<h2>Missions</h2>${missions.map(missionPanel).join('')}` : ''}`;
    if (hasRooms) {
      $$('[data-view]').forEach(b => b.addEventListener('click', () => {
        const rooms = b.dataset.view === 'rooms';
        const src = rooms ? `assets/rooms/${m.roomsImage}.jpg` : `assets/maps/${m.image}.jpg`;
        $('#mapImg').src = src; $('#mapImg').dataset.zoom = src;
        $$('[data-view]').forEach(x => x.setAttribute('aria-pressed', x === b));
      }));
    }
  };

  function squadLinks(names) {
    return (names || []).map(n => {
      const o = S.operators.find(x => x.variant === 'standard' && x.name.toLowerCase() === n.toLowerCase());
      return o ? `<a href="#/operator/${o.id}">${esc(o.name)}</a>` : esc(n);
    }).join(', ');
  }
  function missionPanel(x) {
    const m = mapById[x.map], mode = modeById[x.mode];
    const comps = Object.entries(x.components || {});
    const ref = x.book ? `${esc(S.books[x.book] || x.book)}${x.page ? ', p. ' + x.page : ''}` : '';
    return `<div class="panel mission ${x.mode}" id="m-${x.id}">
      <h3>${esc(m ? m.name : x.map)}: ${esc(mode ? mode.name : x.mode)}${x.starter ? ' <span class="tag">Starter</span>' : ''}${x.fan ? ' <span class="tag">Fan-made</span>' : ''}</h3>
      ${x.summary ? `<p>${esc(x.summary)}</p>` : ''}
      ${comps.length ? `<div class="label small muted">Components set up in the environment</div><div class="components">${comps.map(([k, v]) => `<span>${v} &times; ${esc(k)}</span>`).join('')}</div>` : ''}
      ${x.squads ? `<p class="small"><b>Suggested squads:</b> attackers ${squadLinks(x.squads.attackers)}; defenders ${squadLinks(x.squads.defenders)}.</p>` : ''}
      ${x.suggested ? `<p class="small">The mission book also gives a suggested defender deployment (p. ${x.suggested.page})${x.suggested.squads ? ` for attackers ${squadLinks(x.suggested.squads.attackers)} against defenders ${squadLinks(x.suggested.squads.defenders)}` : ''}.</p>` : ''}
      ${x.modules && x.modules.length ? `<p class="small">Optional module: ${x.modules.map(esc).join(', ')}</p>` : ''}
      ${ref ? `<p class="small muted">Full setup and board diagram: ${ref}.</p>` : ''}
    </div>`;
  }

  // Missions
  const misFilter = { mode: 'all' };
  views.missions = () => {
    const modes = S.modes;
    app.innerHTML = `
      <h1>Missions</h1>
      <p class="lead">Each environment has a Bomb, Hostage and Control setup. These pages summarise each one. The mission book has the exact board placement.</p>
      ${modes.map(md => `<details class="panel" style="margin-bottom:.6rem"><summary><b>${esc(md.name)}</b></summary><p style="margin-top:.5rem">${esc(md.summary)}</p></details>`).join('')}
      <div class="toolbar">
        <div class="chips">
          <button type="button" class="chip" data-mode="all" aria-pressed="${misFilter.mode === 'all'}">All modes</button>
          ${modes.map(md => `<button type="button" class="chip" data-mode="${md.id}" aria-pressed="${misFilter.mode === md.id}">${esc(md.name)}</button>`).join('')}
        </div>
        <div class="chips">${ownedChips(['maps'])}</div>
      </div>
      <div id="mlist"></div>`;
    const draw = () => {
      const list = S.missions.filter(x => mapById[x.map] && S.store.owns(mapById[x.map].pack) && (misFilter.mode === 'all' || x.mode === misFilter.mode));
      $('#mlist').innerHTML = list.length ? list.map(x => missionPanel(x).replace('<h3>', `<h3><a href="#/map/${x.map}" style="color:inherit">`).replace(/<\/h3>/, '</a></h3>')).join('') : '<div class="empty">No missions for this selection.</div>';
    };
    $$('[data-mode]').forEach(b => b.addEventListener('click', () => { misFilter.mode = b.dataset.mode; $$('[data-mode]').forEach(x => x.setAttribute('aria-pressed', x === b)); draw(); }));
    bindOwned(app, views.missions);
    draw();
  };

  // Randomiser
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function drawSquad(side, keep = []) {
    const pool = shuffle(visibleOps().filter(o => o.side === side));
    const out = keep.slice(), names = new Set(keep.map(baseName));
    for (const o of pool) {
      if (out.length >= 5) break;
      if (names.has(baseName(o))) continue;
      out.push(o); names.add(baseName(o));
    }
    return out;
  }
  let draw = null;
  views.randomiser = () => {
    const maps = S.maps.filter(m => S.store.owns(m.pack));
    const roll = () => {
      const map = shuffle(maps)[0];
      const ms = map ? S.missions.filter(x => x.map === map.id) : [];
      const mission = shuffle(ms)[0] || null;
      draw = { map, mission, att: drawSquad('attacker'), def: drawSquad('defender') };
    };
    if (!draw) roll();
    const slot = (o, side, i) => `<div class="slot">
        <img src="assets/operators/thumbs/${o.file}.jpg" alt="">
        <div class="grow"><a href="#/operator/${o.id}">${esc(opTitle(o))}</a><div class="muted small">${esc(o.roles.join(', ') || o.gadget.name || '')}</div></div>
        <button class="btn ghost small" type="button" data-reroll="${side}" data-i="${i}" aria-label="Redraw ${esc(o.name)}">Redraw</button>
      </div>`;
    const d = draw;
    const mode = d.mission ? modeById[d.mission.mode] : null;
    app.innerHTML = `
      <h1>Match randomiser</h1>
      <p class="muted">Draws from the boxes you own. Never puts an operator and their alternate in the same squad.</p>
      <div class="toolbar">
        <button class="btn" type="button" id="rollAll">Draw everything</button>
        <button class="btn ghost" type="button" id="rollMap">New map</button>
        <button class="btn ghost" type="button" id="rollSquads">New squads</button>
      </div>
      <details class="filters panel" style="margin-bottom:.9rem"><summary>Boxes and options</summary>
        <div class="filter-group"><div class="label">Boxes</div><div class="chips">${ownedChips(['operators', 'maps'])}</div></div>
        <div class="filter-group"><div class="label">Include</div><div class="chips">
          <button type="button" class="chip" data-inc="includeAlternates" aria-pressed="${S.store.get('includeAlternates')}">Alternates</button>
          <button type="button" class="chip" data-inc="includeRecruits" aria-pressed="${S.store.get('includeRecruits')}">Recruits</button>
        </div></div>
      </details>
      <div class="draw-head">
        <div class="panel">${d.map ? `<img src="assets/maps/preview/${d.map.image}.jpg" alt=""><div><div class="muted small">Map</div><a class="big" href="#/map/${d.map.id}">${esc(d.map.name)}</a></div>` : '<div>No maps in your boxes</div>'}</div>
        <div class="panel"><div><div class="muted small">Mode</div><div class="big">${mode ? esc(mode.name) : '-'}</div>${d.mission ? `<a class="small" href="#/map/${d.map.id}">Mission setup</a>` : ''}</div></div>
      </div>
      <div class="squads">
        <div class="panel"><h2 style="margin-top:0;color:var(--att)">Attackers</h2>${d.att.map((o, i) => slot(o, 'attacker', i)).join('') || '<p class="muted">No attackers available.</p>'}${d.att.length && d.att.length < 5 ? '<p class="small muted">Not enough attackers in your boxes for a full squad.</p>' : ''}</div>
        <div class="panel"><h2 style="margin-top:0;color:var(--def)">Defenders</h2>${d.def.map((o, i) => slot(o, 'defender', i)).join('') || '<p class="muted">No defenders available.</p>'}${d.def.length && d.def.length < 5 ? '<p class="small muted">Not enough defenders in your boxes for a full squad.</p>' : ''}</div>
      </div>`;
    $('#rollAll').addEventListener('click', () => { roll(); views.randomiser(); });
    $('#rollMap').addEventListener('click', () => { const keep = draw; roll(); draw.att = keep.att; draw.def = keep.def; views.randomiser(); });
    $('#rollSquads').addEventListener('click', () => { draw.att = drawSquad('attacker'); draw.def = drawSquad('defender'); views.randomiser(); });
    $$('[data-reroll]').forEach(b => b.addEventListener('click', () => {
      const side = b.dataset.reroll, key = side === 'attacker' ? 'att' : 'def', i = +b.dataset.i;
      const old = draw[key][i];
      const others = draw[key].filter((_, j) => j !== i);
      const names = new Set([...others.map(baseName), baseName(old)]);
      const pick = shuffle(visibleOps().filter(o => o.side === side && !names.has(baseName(o))))[0];
      if (pick) { draw[key][i] = pick; views.randomiser(); }
      else b.textContent = 'None left';
    }));
    $$('[data-inc]').forEach(b => b.addEventListener('click', () => { const k = b.dataset.inc; S.store.set(k, !S.store.get(k)); roll(); views.randomiser(); }));
    bindOwned(app, () => { roll(); views.randomiser(); });
  };

  // Printable fan cards
  let jspdfLoading = null;
  function loadJsPdf() {
    if (window.jspdf) return Promise.resolve();
    return jspdfLoading = jspdfLoading || new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'js/vendor/jspdf.umd.min.js'; s.onload = res; s.onerror = () => rej(new Error('Could not load the PDF library'));
      document.head.appendChild(s);
    });
  }
  const cardSel = { picked: null, backs: false };
  views.cards = () => {
    const opCards = S.operators.filter(o => o.card && S.store.owns(o.box));
    const extraAlts = S.cards.filter(c => c.kind === 'operator' && c.id.includes('-alt-') && !S.operators.some(o => o.card === c.id));
    const mapCards = S.cards.filter(c => c.kind === 'map');
    const other = S.cards.filter(c => c.kind === 'mode' || c.kind === 'role');
    const groups = [
      ['Attackers', opCards.filter(o => o.side === 'attacker').map(o => o.card)],
      ['Defenders', opCards.filter(o => o.side === 'defender').map(o => o.card)],
      ['Alternates without a board on this site', extraAlts.map(c => c.id)],
      ['Maps', mapCards.map(c => c.id)],
      ['Modes and roles', other.map(c => c.id)]
    ].filter(g => g[1].length);
    if (!cardSel.picked) cardSel.picked = new Set(groups.flatMap(g => g[1]));
    app.innerHTML = `
      <h1>Print draw cards</h1>
      <p class="lead">Fan-made cards for drawing operators, maps and modes at random. Print the A4 sheets at 100% (actual size) and cut along the crop marks. One cut separates two cards.</p>
      <div class="panel">
        <div class="toolbar" style="margin-top:0">
          <button class="btn" type="button" id="makePdf">Make PDF</button>
          <label class="chip" style="display:inline-flex;align-items:center;gap:.4rem"><input type="checkbox" id="backs" ${cardSel.backs ? 'checked' : ''}> Add backs for double-sided printing</label>
          <span class="count" id="pcount"></span>
        </div>
        <p class="muted small" id="pstatus">Cards are 63 x 85 mm, nine to a page. Operator cards follow your boxes on the home page. Backs are mirrored for long-edge flipping.</p>
      </div>
      ${groups.map(([title, ids], gi) => `
        <h2>${esc(title)} <button class="btn ghost small" type="button" data-all="${gi}">All</button> <button class="btn ghost small" type="button" data-none="${gi}">None</button></h2>
        <div class="card-pick" data-group="${gi}">${ids.map(id => `<label title="${esc(id)}"><input type="checkbox" value="${id}" ${cardSel.picked.has(id) ? 'checked' : ''}><img loading="lazy" src="assets/cards/${id}.jpg" alt="${esc(id)}"></label>`).join('')}</div>`).join('')}`;
    const visible = () => $$('.card-pick input').map(i => i.value);
    const count = () => {
      const n = visible().filter(id => cardSel.picked.has(id)).length;
      $('#pcount').textContent = `${n} cards, ${Math.ceil(n / 9)} page${Math.ceil(n / 9) === 1 ? '' : 's'}${cardSel.backs ? ' plus backs' : ''}`;
    };
    app.addEventListener('change', e => {
      if (e.target.matches('.card-pick input')) { e.target.checked ? cardSel.picked.add(e.target.value) : cardSel.picked.delete(e.target.value); count(); }
    });
    $('#backs').addEventListener('change', e => { cardSel.backs = e.target.checked; count(); });
    $$('[data-all],[data-none]').forEach(b => b.addEventListener('click', () => {
      const on = b.hasAttribute('data-all');
      const gi = b.dataset.all || b.dataset.none;
      $$(`[data-group="${gi}"] input`).forEach(i => { i.checked = on; on ? cardSel.picked.add(i.value) : cardSel.picked.delete(i.value); });
      count();
    }));
    $('#makePdf').addEventListener('click', async () => {
      const ids = visible().filter(id => cardSel.picked.has(id));
      if (!ids.length) { $('#pstatus').textContent = 'Pick at least one card.'; return; }
      const btn = $('#makePdf'); btn.disabled = true;
      try {
        $('#pstatus').textContent = 'Loading the PDF library...';
        await loadJsPdf();
        const doc = await S.print.buildPdf(ids, { backs: cardSel.backs, onProgress: (d, t) => { $('#pstatus').textContent = `Building: ${d} of ${t} cards`; } });
        doc.save('6siege-draw-cards.pdf');
        $('#pstatus').textContent = 'Done. Print at 100% (actual size), not "fit to page".';
      } catch (err) {
        $('#pstatus').textContent = 'Something went wrong: ' + err.message;
      } finally { btn.disabled = false; }
    });
    count();
  };

  // Tips
  views.tips = () => {
    const t = S.tips;
    const src = Object.fromEntries((t.sources || []).map(s => [s.id, s]));
    app.innerHTML = `
      <h1>Tips and strategy</h1>
      <p class="lead">Practical advice rewritten from Steamforged Games' crowdfunding updates. Follow the source links for the full articles.</p>
      ${t.sections.map(s => `<section class="panel"><h2 style="margin-top:0">${esc(s.title)}</h2>${s.tips.map(tp => `<div class="tip"><h3>${esc(tp.title)}</h3><p>${esc(tp.text)}</p></div>`).join('')}</section>`).join('')}
      ${t.operatorNotes && t.operatorNotes.length ? `<section class="panel"><h2 style="margin-top:0">Operator notes</h2><ul class="linklist">${t.operatorNotes.map(n => {
        const o = S.operators.find(x => x.name.toLowerCase() === n.operator.toLowerCase() && x.variant === 'standard');
        return `<li><span>${o ? `<a href="#/operator/${o.id}"><b>${esc(n.operator)}</b></a>` : `<b>${esc(n.operator)}</b>`}: ${esc(n.text)}</span></li>`;
      }).join('')}</ul></section>` : ''}
      <h2>Sources</h2>
      <ul class="linklist">${(t.sources || []).map(s => `<li><a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(s.title)}</a><span class="muted small">${esc(s.publisher || '')}</span></li>`).join('')}</ul>`;
  };

  // Resources
  views.resources = () => {
    const r = S.resources;
    const item = x => `<li><span><b>${esc(x.title)}</b>${x.by ? ` <span class="muted small">by ${esc(x.by)}</span>` : ''}<br><span class="small muted">${esc(x.text)}</span></span>${x.file ? `<a class="btn ghost small" href="${x.file}" download>Download PDF</a>` : `<a class="btn ghost small" href="${esc(x.url)}" target="_blank" rel="noopener">Open</a>`}</li>`;
    app.innerHTML = `
      <h1>Resources</h1>
      <h2>Community files</h2>
      <p class="muted small">Made by players and shared on Discord, BoardGameGeek and elsewhere. Hosted here so they are easy to find.</p>
      <div class="panel"><ul class="linklist">${r.fan.map(item).join('')}</ul></div>
      <h2>Official books</h2>
      <p class="muted small">Not hosted here. They come in the boxes, and the publisher handles digital copies. Page references on this site point to these books.</p>
      <div class="panel"><ul class="linklist">${r.books.map(b => `<li><span><b>${esc(b.title)}</b><br><span class="small muted">${esc(b.text)}</span></span><span class="tag">${esc(b.code)}</span></li>`).join('')}</ul></div>
      <h2>Links</h2>
      <div class="panel"><ul class="linklist">${r.links.map(item).join('')}</ul></div>`;
  };

  views.about = () => {
    app.innerHTML = `
      <h1>About</h1>
      <div class="panel">
        <p>This is a fan project. It gathers what the 6: Siege community has scattered across BoardGameGeek, Discord and crowdfunding pages into one place that works on a phone at the table.</p>
        <p>6: Siege - The Board Game was designed by Carlos Gomez Quintana, first published by Mythic Games and now published by Steamforged Games under licence from Ubisoft. Tom Clancy's Rainbow Six Siege is a trademark of Ubisoft. This site is not affiliated with or endorsed by any of them. Operator board art and map art belong to their owners.</p>
        <p>Community files are credited on the Resources page. The fan-made draw cards and fan maps belong to their creators.</p>
        <p>Your box selection and settings are saved in your browser only.</p>
        <p>Spotted a mistake or want your work credited differently? Email <a href="mailto:games@staroversky.com">games@staroversky.com</a>.</p>
        <p class="muted small">Part of <a href="https://skirmishgames.app">skirmishgames.app</a>.</p>
      </div>`;
  };

  function notFound() {
    app.innerHTML = '<div class="empty"><h1>Not found</h1><p><a href="#/">Back to the start</a></p></div>';
  }

  // ---------- Router ----------
  function route() {
    const [, name = '', arg] = (location.hash || '#/').split('/');
    const key = name || 'home';
    $$('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === key || (key === 'operator' && a.dataset.nav === 'operators') || (key === 'map' && a.dataset.nav === 'maps')));
    nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false');
    (views[key] || notFound)(arg && decodeURIComponent(arg));
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
