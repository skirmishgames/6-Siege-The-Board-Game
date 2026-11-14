// Small settings store in the browser. Nothing leaves the device.
(function () {
  const KEY = 'siege-settings-v1';
  const defaults = {
    owned: SIEGE.boxes.map(b => b.id),
    includeAlternates: true,
    includeRecruits: false
  };
  let state = Object.assign({}, defaults);
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = Object.assign({}, defaults, JSON.parse(raw));
    // Boxes added to the site after settings were saved start as owned.
    const known = new Set(state.known || ['core', 'y1', 'y2', 'y3', 'y4', 'y5', 'td', 'mp1', 'mp2', 'mp3', 'fan']);
    SIEGE.boxes.forEach(b => { if (!known.has(b.id) && !state.owned.includes(b.id)) state.owned.push(b.id); });
  } catch (e) { /* storage blocked: use defaults */ }
  state.known = SIEGE.boxes.map(b => b.id);

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  SIEGE.store = {
    get: k => state[k],
    set(k, v) { state[k] = v; save(); },
    owns: boxId => state.owned.includes(boxId),
    toggleOwned(boxId) {
      const s = new Set(state.owned);
      s.has(boxId) ? s.delete(boxId) : s.add(boxId);
      state.owned = SIEGE.boxes.map(b => b.id).filter(id => s.has(id));
      save();
    }
  };
})();
