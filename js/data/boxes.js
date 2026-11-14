window.SIEGE = window.SIEGE || {};
// Boxes and expansions. "kind" decides where the filter shows the box.
SIEGE.boxes = [
  { id: 'core', name: 'Core box', short: 'Core', kind: 'operators+maps' },
  { id: 'y1', name: 'Year 1: Re-Enforce', short: 'Y1', kind: 'operators' },
  { id: 'y2', name: 'Year 2: High Impact', short: 'Y2', kind: 'operators' },
  { id: 'y3', name: 'Year 3: Hard Breach', short: 'Y3', kind: 'operators' },
  { id: 'y4', name: 'Year 4: Dark Horizon', short: 'Y4', kind: 'operators' },
  { id: 'y5', name: 'Year 5: Shadow Tactics', short: 'Y5', kind: 'operators' },
  { id: 'td', name: 'Tactical Drop', short: 'TD', kind: 'operators+maps' },
  { id: 'mp1', name: 'Concrete City (Map Pack 1)', short: 'MP1', kind: 'maps' },
  { id: 'mp2', name: 'Dead End (Map Pack 2)', short: 'MP2', kind: 'maps' },
  { id: 'mp3', name: 'Sand and Dust (Map Pack 3)', short: 'MP3', kind: 'maps' },
  { id: 'fan', name: 'Fan-made maps', short: 'Fan', kind: 'maps' }
];
SIEGE.roles = {
  'Area Controller': 'Restricts access to an area.',
  'Breacher': 'Destroys walls and barricades with lower strength ratings.',
  'Hard Breacher': 'Carries a gadget that can destroy every destructible element.',
  'Intel Gatherer': 'Finds and locates the opposing squad.',
  'Intel Scrambler': 'Disrupts the other side\'s attempts to locate your squad.',
  'Marksman': 'Weapon that does best at long range.',
  'Runner': 'Moves fast around the map.',
  'Support': 'Heals teammates or stops them being wounded.',
  'Tank': 'Takes a lot of punishment.',
  'Time-Waster': 'Sets traps that slow the attack.'
};
