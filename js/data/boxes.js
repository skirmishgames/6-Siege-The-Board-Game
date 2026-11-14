window.SIEGE = window.SIEGE || {};
// Boxes and expansions. "kind" decides where the owned-box filter shows the box.
// "image" is the contents sheet in assets/boxes/.
SIEGE.boxes = [
  { id: 'core', name: 'Core box', short: 'Core', kind: 'operators+maps', image: 'core', text: 'The base game: 20 operators plus alternates and recruits, the double-sided Consulate and Clubhouse board, and the gadgets, tokens and standees.' },
  { id: 'y1', name: 'Year 1: Re-Enforce', short: 'Y1', kind: 'operators', image: 'y1', text: 'Eight operators from the first year of the video game, with their profiles and tokens.' },
  { id: 'y2', name: 'Year 2: High Impact', short: 'Y2', kind: 'operators', image: 'y2', text: 'Eight operators from the second year.' },
  { id: 'y3', name: 'Year 3: Hard Breach', short: 'Y3', kind: 'operators', image: 'y3', text: 'Eight operators from the third year.' },
  { id: 'y4', name: 'Year 4: Dark Horizon', short: 'Y4', kind: 'operators', image: 'y4', text: 'Eight operators from the fourth year.' },
  { id: 'y5', name: 'Year 5: Shadow Tactics', short: 'Y5', kind: 'operators', image: 'y5', text: 'Six operators from the fifth year, including Zero.' },
  { id: 'ss', name: 'Silent Strike', short: 'SS', kind: 'operators', image: 'silent-strike', family: 'Tactical Drop', text: 'Eight new operators made for Steamforged\'s pre-order by the original designer. Part of the Tactical Drop content.' },
  { id: 'zero', name: 'Zero (alternate)', short: 'Zero', kind: 'extra', image: 'zero', text: 'An alternate Zero profile and miniature. Requires the core box.' },
  { id: 'mp1', name: 'Concrete City (Map Pack 1)', short: 'MP1', kind: 'maps', text: 'Double-sided board with Kafe Dostoyevsky and Bank, and a mission guide.' },
  { id: 'mp2', name: 'Dead End (Map Pack 2)', short: 'MP2', kind: 'maps', text: 'Double-sided board with Oregon and Chalet, and a mission guide.' },
  { id: 'mp3', name: 'Sand and Dust (Map Pack 3)', short: 'MP3', kind: 'maps', text: 'Double-sided board with Coastline and Border, and a mission guide.' },
  { id: 'td', name: 'Tactical Drop map pack', short: 'TD', kind: 'maps', family: 'Tactical Drop', text: 'Skyscraper and The Villa, from Steamforged\'s Tactical Drop content.' },
  { id: 'fan', name: 'Fan-made maps', short: 'Fan', kind: 'maps', text: 'Boards made by players: House, Kanal and the Breacher VR Skyscraper.' }
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
