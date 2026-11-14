window.SIEGE=window.SIEGE||{};
SIEGE.operators=[
{
"id": "ash",
"name": "Ash",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-ash",
"run": 5,
"destroy": "orange",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"R",
"R"
],
"medium": [
"Y",
"O",
"R",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "Breaching Rounds",
"effects": [
"action"
],
"keywords": [
"Line of sight"
],
"charges": 2,
"summary": "Fires breaching rounds that blow open the target space and one beside it."
},
"roles": [
"Breacher",
"Runner"
],
"range": "medium",
"card": "att-core-ash"
},
{
"id": "blitz",
"name": "Blitz",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-blitz",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": true,
"weapons": {
"short": [
"Y",
"Y",
"O",
"O"
],
"medium": [
"Y",
"Y",
"Y",
"O"
],
"long": [
"Y",
"Y",
"Y",
"O"
]
},
"gadget": {
"name": "Flash Shield Charges",
"effects": [
"action"
],
"keywords": [
"Deployable"
],
"charges": 2,
"summary": "Throws a flash that dazes everyone in the room except Blitz."
},
"roles": [
"Area Controller",
"Tank"
],
"range": "short",
"card": "att-core-blitz"
},
{
"id": "flores",
"name": "Flores",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-flores",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O",
"R"
],
"medium": [
"Y!",
"O",
"O",
"R"
],
"long": [
"Y",
"O",
"O"
]
},
"gadget": {
"name": "RCE-Ratero Drones",
"effects": [
"action"
],
"keywords": [
"Drone"
],
"charges": 2,
"summary": "Sends an explosive drone that detonates where it stops, wrecking nearby spaces and hurting occupants."
},
"roles": [
"Breacher",
"Intel Gatherer"
],
"range": "medium",
"card": "att-core-flores"
},
{
"id": "fuze",
"name": "Fuze",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-fuze",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"O",
"R"
],
"medium": [
"O!",
"O",
"R",
"R"
],
"long": [
"Y",
"Y",
"O",
"R"
]
},
"gadget": {
"name": "Cluster Charges",
"effects": [
"action"
],
"keywords": [
"Deployable",
"Vertical"
],
"charges": 2,
"summary": "Sets off cluster charges that destroy gadgets in a room and wound its occupants."
},
"roles": [
"Area Controller",
"Tank"
],
"range": "medium",
"card": "att-core-fuze"
},
{
"id": "glaz",
"name": "Glaz",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-glaz",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"R"
],
"medium": [
"R",
"R"
],
"long": [
"Y",
"O",
"R",
"R"
]
},
"gadget": {
"name": "Flip Sight",
"effects": [
"permanent",
"action"
],
"keywords": [
"Vertical"
],
"charges": 0,
"summary": "Sees through smoke and gas, and can expose a hidden operator token."
},
"roles": [
"Breacher",
"Marksman"
],
"range": "long",
"card": "att-core-glaz"
},
{
"id": "iq",
"name": "IQ",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-iq",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"O",
"O",
"R"
]
},
"gadget": {
"name": "Spectre Detector",
"effects": [
"action",
"reaction"
],
"keywords": [
"Wave",
"Vertical"
],
"charges": 2,
"summary": "Destroys electronic gadgets and lets her ignore gadget effects that cost extra actions."
},
"roles": [
"Intel Scrambler",
"Runner"
],
"range": "medium",
"card": "att-core-iq"
},
{
"id": "montagne",
"name": "Montagne",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-montagne",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": true,
"weapons": {
"short": [
"Y",
"R!",
"R"
],
"medium": [
"Y",
"Y",
"R"
],
"long": [
"R"
]
},
"gadget": {
"name": "'Le Roc' Shield",
"effects": [
"permanent",
"action"
],
"keywords": [],
"charges": 0,
"summary": "A big shield he can extend for heavy protection, cancelling extra hits when protected several ways."
},
"roles": [
"Tank"
],
"range": "short",
"card": "att-core-montagne"
},
{
"id": "att-recruit-1",
"name": "Recruit",
"side": "attacker",
"box": "core",
"variant": "recruit",
"file": "core-a-recruit1",
"run": 5,
"destroy": "orange",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"O",
"O"
],
"medium": [
"Y",
"O",
"O",
"R"
],
"long": [
"O",
"O!",
"R",
"R"
]
},
"gadget": {
"name": null,
"effects": [],
"keywords": [],
"charges": 0,
"summary": "Generic recruit with a rifle and no gadget."
},
"roles": [],
"range": null,
"card": "att-core-recruit-01"
},
{
"id": "att-recruit-2",
"name": "Recruit",
"side": "attacker",
"box": "core",
"variant": "recruit",
"file": "core-a-recruit2",
"run": null,
"destroy": "orange",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"O",
"O!",
"R",
"R"
],
"medium": [
"Y",
"O",
"O",
"R"
],
"long": [
"Y",
"Y",
"O",
"O"
]
},
"gadget": {
"name": null,
"effects": [],
"keywords": [],
"charges": 0,
"summary": "Generic recruit with a shotgun and no gadget."
},
"roles": [],
"range": null,
"card": "att-core-recruit-02"
},
{
"id": "sledge",
"name": "Sledge",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-sledge",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R",
"R"
],
"medium": [
"Y",
"Y",
"O",
"O"
],
"long": [
"Y",
"O",
"O"
]
},
"gadget": {
"name": "Tactical Breaching Hammer",
"effects": [
"permanent",
"action"
],
"keywords": [
"Deployable"
],
"charges": 3,
"summary": "Smashes through a space with his hammer, steps in, then can shoot or destroy next door."
},
"roles": [
"Breacher"
],
"range": "short",
"card": "att-core-sledge"
},
{
"id": "thatcher",
"name": "Thatcher",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-thatcher",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O",
"O",
"R"
],
"medium": [
"Y!",
"O",
"R",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "EMP Grenades",
"effects": [
"action"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Throws an EMP that disables every electronic gadget in the target room."
},
"roles": [
"Intel Scrambler"
],
"range": "medium",
"card": "att-core-thatcher"
},
{
"id": "thermite",
"name": "Thermite",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-thermite",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R"
],
"medium": [
"Y!",
"O",
"O",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Exothermic Charges",
"effects": [
"action"
],
"keywords": [
"Deployable"
],
"charges": 2,
"summary": "Burns through reinforced material, hitting the target space and the ones beside it."
},
"roles": [
"Hard Breacher"
],
"range": "medium",
"card": "att-core-thermite"
},
{
"id": "twitch",
"name": "Twitch",
"side": "attacker",
"box": "core",
"variant": "standard",
"file": "core-a-twitch",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y!",
"O",
"R",
"R"
],
"medium": [
"O!",
"R",
"R"
],
"long": [
"Y",
"R"
]
},
"gadget": {
"name": "Shock Drones",
"effects": [
"action"
],
"keywords": [
"Drone"
],
"charges": 2,
"summary": "Her drone rolls dice to zap electronic gadgets in the room it scans."
},
"roles": [
"Intel Scrambler",
"Intel Gatherer"
],
"range": "short",
"card": "att-core-twitch"
},
{
"id": "brava",
"name": "Brava",
"side": "attacker",
"box": "td",
"variant": "standard",
"file": "td-a-brava",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"R"
],
"medium": [
"Y",
"Y",
"O",
"O"
],
"long": [
"Y",
"R",
"R"
]
},
"gadget": {
"name": "Kludge Drone",
"effects": [
"action",
"permanent",
"reaction"
],
"keywords": [
"Drone"
],
"charges": 2,
"summary": "Hacks enemy electronics or reaction gadgets with a drone so she can use them herself."
},
"roles": [],
"range": null,
"card": null
},
{
"id": "grim",
"name": "Grim",
"side": "attacker",
"box": "td",
"variant": "standard",
"file": "td-a-grim",
"run": 5,
"destroy": "orange",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y!",
"R",
"R",
"R"
],
"medium": [
"Y!",
"O",
"O",
"R"
],
"long": [
"Y!",
"R",
"R"
]
},
"gadget": {
"name": "Kawan Hive Launcher",
"effects": [
"action",
"permanent",
"permanent"
],
"keywords": [
"Throwable"
],
"charges": 3,
"summary": "Drops a bee hive that marks nearby enemies and sticks them with a tracking swarm."
},
"roles": [],
"range": null,
"card": null
},
{
"id": "osa",
"name": "Osa",
"side": "attacker",
"box": "td",
"variant": "standard",
"file": "td-a-osa",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"O"
],
"medium": [
"Y",
"Y",
"Y",
"O"
],
"long": [
"Y",
"Y",
"O",
"O"
]
},
"gadget": {
"name": "Talon-8 Shield",
"effects": [
"permanent",
"action",
"action"
],
"keywords": [
"Deployable"
],
"charges": 2,
"summary": "Places transparent shields that give heavy protection, and can recover them for reuse."
},
"roles": [],
"range": null,
"card": null
},
{
"id": "sens",
"name": "Sens",
"side": "attacker",
"box": "td",
"variant": "standard",
"file": "td-a-sens",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y!",
"Y",
"O",
"R"
],
"medium": [
"Y!",
"Y",
"O",
"R"
],
"long": [
"Y!",
"O",
"R"
]
},
"gadget": {
"name": "Rou Projector",
"effects": [
"permanent",
"permanent",
"action"
],
"keywords": [
"Deployable"
],
"charges": 2,
"summary": "Places a projector whose light blocks line of sight in a row of spaces."
},
"roles": [],
"range": null,
"card": null
},
{
"id": "buck",
"name": "Buck",
"side": "attacker",
"box": "y1",
"variant": "standard",
"file": "y1-a-buck",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y!",
"O",
"R",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"R",
"R"
]
},
"gadget": {
"name": "Skeleton Key",
"effects": [
"action",
"permanent"
],
"keywords": [
"Line of sight",
"Vertical"
],
"charges": 3,
"summary": "Cuts holes in ceilings, turning spaces into upper-floor entryways."
},
"roles": [
"Area Controller",
"Breacher"
],
"range": "short",
"card": "att-y1-buck"
},
{
"id": "blackbeard",
"name": "Blackbeard",
"side": "attacker",
"box": "y1",
"variant": "standard",
"file": "y1-a-blackbeard",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O!",
"R"
],
"medium": [
"O!",
"R",
"R"
],
"long": [
"Y",
"O!",
"R",
"R"
]
},
"gadget": {
"name": "Rifle Shield",
"effects": [
"reaction"
],
"keywords": [],
"charges": 2,
"summary": "A rifle-mounted shield that negates two hits from shots aimed at him."
},
"roles": [
"Marksman",
"Tank"
],
"range": "long",
"card": "att-y1-blackbeard"
},
{
"id": "capitao",
"name": "Capitão",
"side": "attacker",
"box": "y1",
"variant": "standard",
"file": "y1-a-capitao",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"O",
"R"
],
"medium": [
"Y!",
"O",
"R",
"R"
],
"long": [
"Y",
"O",
"R"
]
},
"gadget": {
"name": "Tactical Crossbow",
"effects": [
"action",
"permanent"
],
"keywords": [
"Throwable",
"Fire overlay"
],
"charges": 3,
"summary": "Fires fire bolts that leave burning spaces which hurt anyone who enters or ends there."
},
"roles": [
"Area Controller",
"Runner"
],
"range": "medium",
"card": "att-y1-capitao"
},
{
"id": "hibana",
"name": "Hibana",
"side": "attacker",
"box": "y1",
"variant": "standard",
"file": "y1-a-hibana",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y!",
"Y",
"O"
],
"medium": [
"O!",
"O",
"R",
"R"
],
"long": [
"Y",
"O",
"R"
]
},
"gadget": {
"name": "X-Kairos Grenade Launcher",
"effects": [
"action"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Launches pellets that blast through reinforced material in the target space."
},
"roles": [
"Hard Breacher",
"Runner"
],
"range": "medium",
"card": "att-y1-hibana"
},
{
"id": "hibana-alt",
"name": "Hibana",
"side": "attacker",
"box": "y1",
"variant": "alternate",
"file": "y1-a-hibana-alt",
"run": 5,
"destroy": "orange",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"O!",
"O",
"R",
"R"
],
"medium": [
"Y!",
"Y",
"O",
"O"
],
"long": [
"Y",
"O"
]
},
"gadget": {
"name": "X-Kairos Grenade Launcher",
"effects": [
"action"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Launches pellets that blast through reinforced material in the target space."
},
"roles": [],
"range": null,
"card": "att-alt-hibana"
},
{
"id": "jackal",
"name": "Jackal",
"side": "attacker",
"box": "y2",
"variant": "standard",
"file": "y2-a-jackal",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"O!",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"Y!",
"Y",
"O",
"R"
]
},
"gadget": {
"name": "Eyenox MK3",
"effects": [
"permanent",
"action"
],
"keywords": [],
"charges": 3,
"summary": "Tags enemies using upper floors, and can shoot a located enemy from above."
},
"roles": [
"Breacher",
"Intel Gatherer"
],
"range": "long",
"card": "att-y2-jackal"
},
{
"id": "ying",
"name": "Ying",
"side": "attacker",
"box": "y2",
"variant": "standard",
"file": "y2-a-ying",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"R",
"R"
],
"medium": [
"Y",
"O!",
"R",
"R"
],
"long": [
"R",
"R"
]
},
"gadget": {
"name": "Candela Devices",
"effects": [
"action"
],
"keywords": [
"Deployable",
"Vertical"
],
"charges": 2,
"summary": "Sets off flashing candelas that daze everyone in the room except Ying."
},
"roles": [
"Area Controller"
],
"range": "medium",
"card": "att-y2-ying"
},
{
"id": "zofia",
"name": "Zofia",
"side": "attacker",
"box": "y2",
"variant": "standard",
"file": "y2-a-zofia",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"R",
"R"
],
"medium": [
"O!",
"O",
"R",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "KS79 Concussion Rounds",
"effects": [
"action"
],
"keywords": [
"Line of sight"
],
"charges": 2,
"summary": "Fires a concussion round that dazes and wounds the targeted operator."
},
"roles": [
"Area Controller",
"Breacher"
],
"range": "medium",
"card": "att-y2-zofia"
},
{
"id": "dokkaebi",
"name": "Dokkaebi",
"side": "attacker",
"box": "y2",
"variant": "standard",
"file": "y2-a-dokkaebi",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"R"
],
"medium": [
"Y!",
"Y",
"O",
"R"
],
"long": [
"Y",
"Y",
"R",
"R"
]
},
"gadget": {
"name": "Logic Bombs",
"effects": [
"action",
"action"
],
"keywords": [
"Wave",
"Vertical"
],
"charges": 2,
"summary": "Marks an enemy as located, or strips location marks from her squad in a room."
},
"roles": [
"Intel Scrambler",
"Intel Gatherer"
],
"range": "long",
"card": "att-y2-dokkaebi"
},
{
"id": "lion",
"name": "Lion",
"side": "attacker",
"box": "y3",
"variant": "standard",
"file": "y3-a-lion",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"O"
],
"medium": [
"Y",
"Y",
"O",
"R"
],
"long": [
"Y",
"O",
"R"
]
},
"gadget": {
"name": "EE-ONE-D Drones",
"effects": [
"action",
"permanent"
],
"keywords": [
"Drone"
],
"charges": 2,
"summary": "Deploys a scanning drone that marks enemies who move in its room."
},
"roles": [
"Intel Gatherer"
],
"range": "medium",
"card": "att-y3-lion"
},
{
"id": "finka",
"name": "Finka",
"side": "attacker",
"box": "y3",
"variant": "standard",
"file": "y3-a-finka",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O",
"R"
],
"medium": [
"O",
"O",
"R!",
"R"
],
"long": [
"O!",
"O",
"R"
]
},
"gadget": {
"name": "Adrenaline Shots",
"effects": [
"action",
"reaction"
],
"keywords": [
"Vertical",
"Wave"
],
"charges": 2,
"summary": "Heals wounds from an ally and can revive a fallen teammate."
},
"roles": [
"Support"
],
"range": "medium",
"card": "att-y3-finka"
},
{
"id": "maverick",
"name": "Maverick",
"side": "attacker",
"box": "y3",
"variant": "standard",
"file": "y3-a-maverick",
"run": 5,
"destroy": "orange",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y!",
"R",
"R"
],
"medium": [
"O",
"R",
"R"
],
"long": [
"Y!",
"R",
"R"
]
},
"gadget": {
"name": "Breaching Torch",
"effects": [
"action"
],
"keywords": [],
"charges": 2,
"summary": "Burns a hole through a wall, then shoots through it."
},
"roles": [
"Breacher",
"Runner"
],
"range": "medium",
"card": "att-y3-maverick"
},
{
"id": "nomad",
"name": "Nomad",
"side": "attacker",
"box": "y3",
"variant": "standard",
"file": "y3-a-nomad",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"R",
"R"
],
"medium": [
"Y",
"O!",
"R",
"R"
],
"long": [
"R",
"R"
]
},
"gadget": {
"name": "Airjab Launcher",
"effects": [
"action"
],
"keywords": [
"Throwable"
],
"charges": 3,
"summary": "Shoves an enemy into a neighbouring free space."
},
"roles": [
"Area Controller",
"Breacher"
],
"range": "medium",
"card": "att-y3-nomad"
},
{
"id": "gridlock",
"name": "Gridlock",
"side": "attacker",
"box": "y4",
"variant": "standard",
"file": "y4-a-gridlock",
"run": null,
"destroy": "orange",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"Y!",
"R",
"R"
],
"medium": [
"O!",
"O",
"R",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Trax Stingers",
"effects": [
"action",
"permanent"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Drops spiked strips that wound enemies and force them to stop."
},
"roles": [
"Breacher",
"Time-Waster",
"Tank"
],
"range": "medium",
"card": "att-y4-gridlock"
},
{
"id": "nokk",
"name": "Nøkk",
"side": "attacker",
"box": "y4",
"variant": "standard",
"file": "y4-a-nokk",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O",
"O",
"R"
],
"medium": [
"O",
"O",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Hel Presence Reducers",
"effects": [
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "She is never marked as located."
},
"roles": [
"Intel Scrambler"
],
"range": "medium",
"card": "att-y4-nokk"
},
{
"id": "amaru",
"name": "Amaru",
"side": "attacker",
"box": "y4",
"variant": "standard",
"file": "y4-a-amaru",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R!",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"R",
"R"
]
},
"gadget": {
"name": "Garra Hook",
"effects": [
"action"
],
"keywords": [],
"charges": 0,
"summary": "Hooks between entryway spaces on the main floor for a cheap relocation."
},
"roles": [
"Runner"
],
"range": "medium",
"card": "att-y4-amaru"
},
{
"id": "kali",
"name": "Kali",
"side": "attacker",
"box": "y4",
"variant": "standard",
"file": "y4-a-kali",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"Y"
],
"medium": [
"Y!",
"Y",
"R",
"R"
],
"long": [
"Y",
"O",
"R",
"R"
]
},
"gadget": {
"name": "LV Explosive Lances",
"effects": [
"action"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Throws explosive lances that wreck always-visible gadgets and barricades in a room."
},
"roles": [
"Breacher",
"Marksman"
],
"range": "long",
"card": "att-y4-kali"
},
{
"id": "nokk-alt",
"name": "Nøkk",
"side": "attacker",
"box": "y4",
"variant": "alternate",
"file": "y4-a-nokk-alt",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"O!",
"R",
"R"
],
"medium": [
"O!",
"R",
"R"
],
"long": [
"Y",
"R"
]
},
"gadget": {
"name": "Hel Presence Reducers",
"effects": [
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "She is never marked as located."
},
"roles": [],
"range": null,
"card": "att-alt-nokk"
},
{
"id": "iana",
"name": "Iana",
"side": "attacker",
"box": "y5",
"variant": "standard",
"file": "y5-a-iana",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R"
],
"medium": [
"Y!",
"Y",
"O",
"R"
],
"long": [
"Y",
"O",
"R"
]
},
"gadget": {
"name": "Gemini Replicator",
"effects": [
"reaction",
"reaction",
"reaction"
],
"keywords": [],
"charges": 3,
"summary": "Reactions let her dodge location marks, ignore extra-action effects and force attackers to drop a die."
},
"roles": [
"Intel Scrambler",
"Runner"
],
"range": "medium",
"card": "att-y5-iana"
},
{
"id": "ace",
"name": "Ace",
"side": "attacker",
"box": "y5",
"variant": "standard",
"file": "y5-a-ace",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"R"
],
"medium": [
"Y!",
"Y",
"R",
"R"
],
"long": [
"Y!",
"Y",
"R"
]
},
"gadget": {
"name": "S.E.L.M.A. Charges",
"effects": [
"action",
"action",
"permanent"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Throws charges that blast reinforced material or drop rubble over an entryway."
},
"roles": [
"Area Controller",
"Hard Breacher"
],
"range": "medium",
"card": "att-y5-ace"
},
{
"id": "zero",
"name": "Zero",
"side": "attacker",
"box": "y5",
"variant": "standard",
"file": "y5-a-zero",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"R",
"R"
],
"medium": [
"Y",
"Y",
"R",
"R"
],
"long": [
"Y",
"O",
"O"
]
},
"gadget": {
"name": "Argus Cameras",
"effects": [
"action",
"permanent"
],
"keywords": [
"Throwable",
"Vertical"
],
"charges": 2,
"summary": "Mounts cameras on heavy walls that locate and wound enemies in view."
},
"roles": [
"Area Controller",
"Intel Gatherer"
],
"range": "medium",
"card": "att-y5-zero"
},
{
"id": "ace-alt",
"name": "Ace",
"side": "attacker",
"box": "y5",
"variant": "alternate",
"file": "y5-a-ace-alt",
"run": null,
"destroy": "orange",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"O!",
"R",
"R"
],
"medium": [
"Y",
"O",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "S.E.L.M.A. Charges",
"effects": [
"action",
"action",
"permanent"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Throws charges that blast reinforced material or drop rubble over an entryway."
},
"roles": [],
"range": null,
"card": "att-alt-ace"
},
{
"id": "bandit",
"name": "Bandit",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-bandit",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y!",
"O",
"R",
"R"
],
"medium": [
"Y",
"Y",
"Y",
"O"
],
"long": [
"Y",
"Y",
"Y"
]
},
"gadget": {
"name": "CED-1 Shock Wires",
"effects": [
"setup",
"permanent",
"permanent"
],
"keywords": [
"Deployable",
"Drones"
],
"charges": 0,
"summary": "Sets up electrified wires that shock and wound enemies who step on or target them."
},
"roles": [
"Area Controller",
"Runner"
],
"range": "short",
"card": "def-core-bandit"
},
{
"id": "castle",
"name": "Castle",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-castle",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y!",
"Y",
"R",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Armor Panels",
"effects": [
"setup",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Places armour panels on doors and windows that act as fortified walls."
},
"roles": [
"Breacher",
"Time-Waster"
],
"range": "short",
"card": "def-core-castle"
},
{
"id": "doc",
"name": "Doc",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-doc",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R"
],
"medium": [
"Y",
"O",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "Stim Pistol",
"effects": [
"action",
"reaction"
],
"keywords": [
"Line of sight"
],
"charges": 2,
"summary": "Heals a targeted operator or revives a fallen teammate."
},
"roles": [
"Support",
"Tank"
],
"range": "short",
"card": "def-core-doc"
},
{
"id": "jager-alt",
"name": "Jäger",
"side": "defender",
"box": "core",
"variant": "alternate",
"file": "core-d-jager-alt",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R"
],
"medium": [
"O",
"O",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "Active Defense Systems",
"effects": [
"reaction"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Cancels throwable gadgets tossed into a room, unless the attacker pays an extra action."
},
"roles": [],
"range": null,
"card": "def-alt-jager"
},
{
"id": "jager",
"name": "Jäger",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-jager",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"R",
"R"
],
"medium": [
"Y",
"O",
"O"
],
"long": [
"Y",
"O",
"O"
]
},
"gadget": {
"name": "Active Defense Systems",
"effects": [
"reaction"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Negates throwable gadgets thrown into a room, unless the attacker pays an extra action."
},
"roles": [
"Time-Waster"
],
"range": "short",
"card": "def-core-jager"
},
{
"id": "kapkan",
"name": "Kapkan",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-kapkan",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y!",
"O",
"R",
"R"
],
"medium": [
"Y!",
"R",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Entry Denial Devices (EDD)",
"effects": [
"reaction"
],
"keywords": [],
"charges": 2,
"summary": "Booby-trapped doors and windows wound enemies who pass through them."
},
"roles": [
"Time-Waster"
],
"range": "short",
"card": "def-core-kapkan"
},
{
"id": "mute",
"name": "Mute",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-mute",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O",
"R",
"R"
],
"medium": [
"Y!",
"R",
"R"
],
"long": [
"O",
"O"
]
},
"gadget": {
"name": "Signal Disruptors",
"effects": [
"setup",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Blocks the attacker's electronic gadgets from rooms containing his jammers."
},
"roles": [
"Breacher",
"Intel Scrambler"
],
"range": "short",
"card": "def-core-mute"
},
{
"id": "pulse",
"name": "Pulse",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-pulse",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"R",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"Y",
"O",
"O"
]
},
"gadget": {
"name": "Heartbeat Sensor",
"effects": [
"action",
"action"
],
"keywords": [
"Wave",
"Vertical"
],
"charges": 3,
"summary": "Locates enemies with a heartbeat scan and can shoot a located target."
},
"roles": [
"Intel Gatherer",
"Runner"
],
"range": "short",
"card": "def-core-pulse"
},
{
"id": "def-recruit-1",
"name": "Recruit",
"side": "defender",
"box": "core",
"variant": "recruit",
"file": "core-d-recruit1",
"run": null,
"destroy": "orange",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"O",
"O"
],
"medium": [
"Y",
"O",
"O",
"R"
],
"long": [
"O",
"O!",
"R",
"R"
]
},
"gadget": {
"name": null,
"effects": [],
"keywords": [],
"charges": 0,
"summary": "Basic recruit with a rifle and no gadget."
},
"roles": [],
"range": null,
"card": "def-core-recruit-01"
},
{
"id": "def-recruit-2",
"name": "Recruit",
"side": "defender",
"box": "core",
"variant": "recruit",
"file": "core-d-recruit2",
"run": null,
"destroy": "orange",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"O",
"O!",
"R",
"R"
],
"medium": [
"Y",
"O",
"O",
"R"
],
"long": [
"Y",
"Y",
"O",
"O"
]
},
"gadget": {
"name": null,
"effects": [],
"keywords": [],
"charges": 0,
"summary": "Basic recruit with a shotgun and no gadget."
},
"roles": [],
"range": null,
"card": "def-core-recruit-02"
},
{
"id": "rook",
"name": "Rook",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-rook",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"O",
"R"
],
"medium": [
"O",
"R"
],
"long": [
"Y",
"O",
"R"
]
},
"gadget": {
"name": "Armor Plates",
"effects": [
"setup",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Gives three teammates armour plates that absorb a wound each."
},
"roles": [
"Support",
"Tank"
],
"range": "long",
"card": "def-core-rook"
},
{
"id": "smoke",
"name": "Smoke",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-smoke",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O!",
"R",
"R"
],
"medium": [
"Y",
"O!",
"R",
"R"
],
"long": [
"Y",
"O"
]
},
"gadget": {
"name": "Gas Grenades",
"effects": [
"action",
"permanent"
],
"keywords": [
"Throwable",
"Gas overlay"
],
"charges": 2,
"summary": "Throws gas that blocks sight and wounds anyone who enters or stays in it."
},
"roles": [
"Area Controller",
"Breacher"
],
"range": "medium",
"card": "def-core-smoke"
},
{
"id": "tachanka-alt",
"name": "Tachanka",
"side": "defender",
"box": "core",
"variant": "alternate",
"file": "core-d-tachanka-alt",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"Y!",
"O",
"R",
"R"
],
"medium": [
"R",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Shumikha Launcher",
"effects": [
"action",
"permanent"
],
"keywords": [
"Throwable",
"Fire overlay"
],
"charges": 3,
"summary": "Launches grenades that leave burning zones which hurt operators entering or staying in them."
},
"roles": [],
"range": null,
"card": "def-alt-tachanka"
},
{
"id": "tachanka",
"name": "Tachanka",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-tachanka",
"run": null,
"destroy": "orange",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"R",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"Y",
"R",
"R"
]
},
"gadget": {
"name": "Shumikha Launcher",
"effects": [
"action",
"permanent"
],
"keywords": [
"Throwable",
"Fire overlay"
],
"charges": 3,
"summary": "Fires grenades that create fire zones which burn operators in or entering them."
},
"roles": [
"Area Controller",
"Breacher",
"Tank"
],
"range": "medium",
"card": "def-core-tachanka"
},
{
"id": "thunderbird",
"name": "Thunderbird",
"side": "defender",
"box": "core",
"variant": "standard",
"file": "core-d-thunderbird",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"O!",
"O",
"R"
],
"medium": [
"O!",
"O",
"R",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "Kóna Stations",
"effects": [
"setup",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Healing stations let anyone in the room ignore a wound whenever they take hits."
},
"roles": [
"Runner",
"Support"
],
"range": "medium",
"card": "def-core-thunderbird"
},
{
"id": "azami",
"name": "Azami",
"side": "defender",
"box": "td",
"variant": "standard",
"file": "td-d-azami",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"O",
"R"
],
"medium": [
"Y",
"Y",
"R"
],
"long": [
"Y",
"Y",
"O"
]
},
"gadget": {
"name": "Kiba Barrier",
"effects": [
"permanent",
"setup",
"action",
"reaction"
],
"keywords": [
"Throwable"
],
"charges": 3,
"summary": "Places barriers that give heavy cover and block line of sight."
},
"roles": [],
"range": null,
"card": null
},
{
"id": "fenrir",
"name": "Fenrir",
"side": "defender",
"box": "td",
"variant": "standard",
"file": "td-d-fenrir",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R",
"R"
],
"medium": [
"Y!",
"Y",
"O!",
"O"
],
"long": [
"Y!",
"Y",
"O"
]
},
"gadget": {
"name": "F-NATT Dread Mine",
"effects": [
"reaction",
"permanent"
],
"keywords": [],
"charges": 2,
"summary": "Mines give enemies a Dread token that weakens their medium and long range weapons."
},
"roles": [],
"range": null,
"card": null
},
{
"id": "solis",
"name": "Solis",
"side": "defender",
"box": "td",
"variant": "standard",
"file": "td-d-solis",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"O",
"O"
],
"medium": [
"Y",
"Y",
"O",
"O"
],
"long": [
"Y",
"Y",
"O"
]
},
"gadget": {
"name": "SPEC-IO Electro Sensor",
"effects": [
"permanent",
"action",
"reaction"
],
"keywords": [],
"charges": 0,
"summary": "Solis stays hidden and gets free moves to avoid being located, powered by a flip token."
},
"roles": [],
"range": null,
"card": null
},
{
"id": "thorn",
"name": "Thorn",
"side": "defender",
"box": "td",
"variant": "standard",
"file": "td-d-thorn",
"run": 5,
"destroy": "orange",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R",
"R"
],
"medium": [
"Y",
"O",
"R"
],
"long": [
"O",
"O"
]
},
"gadget": {
"name": "Razorbloom Shell",
"effects": [
"reaction",
"permanent"
],
"keywords": [],
"charges": 2,
"summary": "Drops razor mines in rooms that wound anyone on or next to them."
},
"roles": [],
"range": null,
"card": null
},
{
"id": "frost",
"name": "Frost",
"side": "defender",
"box": "y1",
"variant": "standard",
"file": "y1-d-frost",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R"
],
"medium": [
"Y!",
"Y",
"R",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Welcome Mats",
"effects": [
"reaction"
],
"keywords": [],
"charges": 2,
"summary": "Hidden traps wound enemies who step next to an obstacle."
},
"roles": [
"Time-Waster"
],
"range": "medium",
"card": "def-y1-frost"
},
{
"id": "valkyrie",
"name": "Valkyrie",
"side": "defender",
"box": "y1",
"variant": "standard",
"file": "y1-d-valkyrie",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y!",
"Y",
"R",
"R"
],
"medium": [
"Y",
"Y",
"Y",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Black Eye Cameras",
"effects": [
"setup",
"action",
"permanent",
"permanent"
],
"keywords": [
"Throwable"
],
"charges": 2,
"summary": "Plants cameras on walls that locate enemies in the room they watch."
},
"roles": [
"Intel Gatherer"
],
"range": "short",
"card": "def-y1-valkyrie"
},
{
"id": "caveira",
"name": "Caveira",
"side": "defender",
"box": "y1",
"variant": "standard",
"file": "y1-d-caveira",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"O!",
"O!",
"R",
"R"
],
"medium": [
"Y",
"Y",
"Y",
"R"
],
"long": [
"Y",
"Y",
"Y"
]
},
"gadget": {
"name": "Questioning Knife",
"effects": [
"permanent",
"action"
],
"keywords": [],
"charges": 0,
"summary": "Locates remaining enemies after a kill and can shoot from the upper floor."
},
"roles": [
"Intel Gatherer",
"Runner"
],
"range": "short",
"card": "def-y1-caveira"
},
{
"id": "echo",
"name": "Echo",
"side": "defender",
"box": "y1",
"variant": "standard",
"file": "y1-d-echo",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"R",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"Y",
"O",
"R"
]
},
"gadget": {
"name": "Yokai Ultrasonic Drones",
"effects": [
"action"
],
"keywords": [
"Drone"
],
"charges": 2,
"summary": "Flies a drone that locates enemies in the room it scans."
},
"roles": [
"Intel Gatherer",
"Tank"
],
"range": "medium",
"card": "def-y1-echo"
},
{
"id": "mira",
"name": "Mira",
"side": "defender",
"box": "y2",
"variant": "standard",
"file": "y2-d-mira",
"run": null,
"destroy": "orange",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"Y!",
"O",
"R"
],
"medium": [
"O",
"R",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "Black Mirrors",
"effects": [
"setup",
"action"
],
"keywords": [],
"charges": 2,
"summary": "Installs one-way mirrors in walls so she can shoot through them."
},
"roles": [
"Breacher",
"Tank"
],
"range": "medium",
"card": "def-y2-mira"
},
{
"id": "lesion",
"name": "Lesion",
"side": "defender",
"box": "y2",
"variant": "standard",
"file": "y2-d-lesion",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"O",
"R"
],
"medium": [
"O",
"O",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "GU Mines",
"effects": [
"reaction"
],
"keywords": [],
"charges": 3,
"summary": "Mines at entryways locate and wound enemies who enter."
},
"roles": [
"Intel Gatherer",
"Time-Waster"
],
"range": "short",
"card": "def-y2-lesion"
},
{
"id": "ela",
"name": "Ela",
"side": "defender",
"box": "y2",
"variant": "standard",
"file": "y2-d-ela",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y!",
"Y",
"R",
"R"
],
"medium": [
"O!",
"R",
"R"
],
"long": [
"Y",
"Y",
"R"
]
},
"gadget": {
"name": "Grzmot Mines",
"effects": [
"reaction"
],
"keywords": [],
"charges": 3,
"summary": "Concussion mines that stun enemies crossing perimeters or entering entryways."
},
"roles": [
"Time-Waster",
"Runner"
],
"range": "short",
"card": "def-y2-ela"
},
{
"id": "vigil",
"name": "Vigil",
"side": "defender",
"box": "y2",
"variant": "standard",
"file": "y2-d-vigil",
"run": 5,
"destroy": "yellow",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"O",
"R"
],
"medium": [
"Y",
"Y",
"O",
"O"
],
"long": [
"Y",
"O",
"O"
]
},
"gadget": {
"name": "ERC-7 Rendering Cloak",
"effects": [
"permanent",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Cannot be located and weakens shots aimed at him."
},
"roles": [
"Intel Scrambler",
"Runner"
],
"range": "short",
"card": "def-y2-vigil"
},
{
"id": "lesion-alt",
"name": "Lesion",
"side": "defender",
"box": "y2",
"variant": "alternate",
"file": "y2-d-lesion-alt",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y!",
"O",
"R",
"R"
],
"medium": [
"R",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "GU Mines",
"effects": [
"reaction"
],
"keywords": [],
"charges": 3,
"summary": "Mines at entryways locate and wound enemies who enter."
},
"roles": [],
"range": null,
"card": "def-alt-lesion"
},
{
"id": "maestro",
"name": "Maestro",
"side": "defender",
"box": "y3",
"variant": "standard",
"file": "y3-d-maestro",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"Y",
"R!",
"R"
],
"medium": [
"O",
"R",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "Evil Eye Cameras",
"effects": [
"setup",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Armoured cameras locate enemies and wound them in the rooms they watch."
},
"roles": [
"Area Controller",
"Intel Gatherer",
"Tank"
],
"range": "medium",
"card": "def-y3-maestro"
},
{
"id": "alibi",
"name": "Alibi",
"side": "defender",
"box": "y3",
"variant": "standard",
"file": "y3-d-alibi",
"run": 5,
"destroy": "orange",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"O!",
"O",
"R",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"Y",
"O",
"O"
]
},
"gadget": {
"name": "Prisma Holograms",
"effects": [
"setup",
"permanent",
"action"
],
"keywords": [],
"charges": 0,
"summary": "Decoy holograms confuse the attacker, and a decoy can be revealed to run and locate."
},
"roles": [
"Breacher",
"Intel Gatherer",
"Runner"
],
"range": "short",
"card": "def-y3-alibi"
},
{
"id": "clash",
"name": "Clash",
"side": "defender",
"box": "y3",
"variant": "standard",
"file": "y3-d-clash",
"run": null,
"destroy": "yellow",
"stamina": 6,
"shield": true,
"weapons": {
"short": [
"Y",
"Y",
"O",
"O"
],
"medium": [
"Y",
"Y",
"O"
],
"long": [
"Y",
"O"
]
},
"gadget": {
"name": "CCE Shield Charges",
"effects": [
"permanent",
"action"
],
"keywords": [
"Deployable"
],
"charges": 2,
"summary": "Her shield charges stun and wound nearby enemies and let her cancel extra hits."
},
"roles": [
"Tank"
],
"range": "short",
"card": "def-y3-clash"
},
{
"id": "kaid",
"name": "Kaid",
"side": "defender",
"box": "y3",
"variant": "standard",
"file": "y3-d-kaid",
"run": null,
"destroy": "orange",
"stamina": 6,
"shield": false,
"weapons": {
"short": [
"R",
"R"
],
"medium": [
"O",
"R",
"R"
],
"long": [
"R",
"R"
]
},
"gadget": {
"name": "Rtila Electroclaws",
"effects": [
"setup",
"permanent",
"permanent"
],
"keywords": [
"Deployable",
"Drones"
],
"charges": 0,
"summary": "Electrified claws at entryways shock enemies and block drones."
},
"roles": [
"Breacher",
"Time-Waster",
"Tank"
],
"range": "medium",
"card": "def-y3-kaid"
},
{
"id": "maestro-alt",
"name": "Maestro",
"side": "defender",
"box": "y3",
"variant": "alternate",
"file": "y3-d-maestro-alt",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O",
"O",
"R"
],
"medium": [
"R",
"R"
],
"long": [
"O",
"O",
"R!"
]
},
"gadget": {
"name": "Evil Eye Cameras",
"effects": [
"setup",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Armoured cameras locate enemies and wound them in the rooms they watch."
},
"roles": [],
"range": null,
"card": "def-alt-maestro"
},
{
"id": "mozzie",
"name": "Mozzie",
"side": "defender",
"box": "y4",
"variant": "standard",
"file": "y4-d-mozzie",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O",
"R",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"Y",
"O",
"R"
]
},
"gadget": {
"name": "Pest",
"effects": [
"setup",
"permanent",
"action"
],
"keywords": [
"Drone"
],
"charges": 3,
"summary": "Hacks enemy drones and keeps their charges to launch his own drones."
},
"roles": [
"Intel Gatherer"
],
"range": "short",
"card": "def-y4-mozzie"
},
{
"id": "warden",
"name": "Warden",
"side": "defender",
"box": "y4",
"variant": "standard",
"file": "y4-d-warden",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"R",
"R"
],
"medium": [
"Y",
"R",
"R"
],
"long": [
"Y",
"R"
]
},
"gadget": {
"name": "Smart Glasses",
"effects": [
"permanent",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Immune to flashes and sees through smoke and gas."
},
"roles": [
"Breacher",
"Intel Gatherer"
],
"range": "short",
"card": "def-y4-warden"
},
{
"id": "goyo",
"name": "Goyo",
"side": "defender",
"box": "y4",
"variant": "standard",
"file": "y4-d-goyo",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y",
"O",
"R"
],
"medium": [
"Y!",
"O",
"O",
"R"
],
"long": [
"O",
"R"
]
},
"gadget": {
"name": "Volcán Shields",
"effects": [
"setup",
"reaction",
"permanent"
],
"keywords": [
"Fire overlay",
"Deployable"
],
"charges": 2,
"summary": "Deployable shields burst into fire zones when approached or destroyed."
},
"roles": [
"Area Controller",
"Breacher"
],
"range": "medium",
"card": "def-y4-goyo"
},
{
"id": "wamai",
"name": "Wamai",
"side": "defender",
"box": "y4",
"variant": "standard",
"file": "y4-d-wamai",
"run": 2,
"destroy": "yellow",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"Y!",
"R",
"R"
],
"medium": [
"Y!",
"Y",
"R",
"R"
],
"long": [
"Y!",
"Y",
"R"
]
},
"gadget": {
"name": "Mag-NET Systems",
"effects": [
"setup",
"permanent"
],
"keywords": [
"Throwable"
],
"charges": 0,
"summary": "Magnetic devices stop enemy throwables from entering the room."
},
"roles": [
"Time-Waster"
],
"range": "medium",
"card": "def-y4-wamai"
},
{
"id": "oryx",
"name": "Oryx",
"side": "defender",
"box": "y5",
"variant": "standard",
"file": "y5-d-oryx",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"O",
"O",
"R"
],
"medium": [
"Y",
"Y",
"R"
],
"long": [
"Y",
"Y",
"Y"
]
},
"gadget": {
"name": "Remah Tactical Gear",
"effects": [
"action",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Smashes through partitions while moving and ignores hazards, using a flip token."
},
"roles": [
"Breacher",
"Runner"
],
"range": "short",
"card": "def-y5-oryx"
},
{
"id": "melusi",
"name": "Melusi",
"side": "defender",
"box": "y5",
"variant": "standard",
"file": "y5-d-melusi",
"run": 5,
"destroy": "orange",
"stamina": 4,
"shield": false,
"weapons": {
"short": [
"Y",
"Y",
"O",
"R"
],
"medium": [
"Y",
"O",
"R"
],
"long": [
"Y",
"O",
"R"
]
},
"gadget": {
"name": "Banshee Sonic Defences",
"effects": [
"setup",
"permanent"
],
"keywords": [],
"charges": 0,
"summary": "Sonic devices make every step in their rooms cost enemies extra movement."
},
"roles": [
"Area Controller",
"Breacher",
"Runner"
],
"range": "short",
"card": "def-y5-melusi"
},
{
"id": "aruni",
"name": "Aruni",
"side": "defender",
"box": "y5",
"variant": "standard",
"file": "y5-d-aruni",
"run": 2,
"destroy": "orange",
"stamina": 5,
"shield": false,
"weapons": {
"short": [
"R"
],
"medium": [
"Y!",
"R",
"R"
],
"long": [
"Y",
"O",
"R",
"R"
]
},
"gadget": {
"name": "Surya Lasers",
"effects": [
"reaction"
],
"keywords": [],
"charges": 2,
"summary": "Laser gates near objectives locate and wound enemies passing through."
},
"roles": [
"Breacher",
"Time-Waster",
"Marksman"
],
"range": "long",
"card": "def-y5-aruni"
}
];
SIEGE.cards=[{"id": "att-alt-ace", "kind": "operator"}, {"id": "att-alt-ash", "kind": "operator"}, {"id": "att-alt-dokkaebi", "kind": "operator"}, {"id": "att-alt-hibana", "kind": "operator"}, {"id": "att-alt-maverick", "kind": "operator"}, {"id": "att-alt-nokk", "kind": "operator"}, {"id": "att-alt-sledge", "kind": "operator"}, {"id": "att-alt-zero-02", "kind": "operator"}, {"id": "att-core-ash", "kind": "operator"}, {"id": "att-core-blitz", "kind": "operator"}, {"id": "att-core-flores", "kind": "operator"}, {"id": "att-core-fuze", "kind": "operator"}, {"id": "att-core-glaz", "kind": "operator"}, {"id": "att-core-iq", "kind": "operator"}, {"id": "att-core-montagne", "kind": "operator"}, {"id": "att-core-recruit-01", "kind": "operator"}, {"id": "att-core-recruit-02", "kind": "operator"}, {"id": "att-core-sledge", "kind": "operator"}, {"id": "att-core-thatcher", "kind": "operator"}, {"id": "att-core-thermite", "kind": "operator"}, {"id": "att-core-twitch", "kind": "operator"}, {"id": "att-y1-blackbeard", "kind": "operator"}, {"id": "att-y1-buck", "kind": "operator"}, {"id": "att-y1-capitao", "kind": "operator"}, {"id": "att-y1-hibana", "kind": "operator"}, {"id": "att-y2-dokkaebi", "kind": "operator"}, {"id": "att-y2-jackal", "kind": "operator"}, {"id": "att-y2-ying", "kind": "operator"}, {"id": "att-y2-zofia", "kind": "operator"}, {"id": "att-y3-finka", "kind": "operator"}, {"id": "att-y3-lion", "kind": "operator"}, {"id": "att-y3-maverick", "kind": "operator"}, {"id": "att-y3-nomad", "kind": "operator"}, {"id": "att-y4-amaru", "kind": "operator"}, {"id": "att-y4-gridlock", "kind": "operator"}, {"id": "att-y4-kali", "kind": "operator"}, {"id": "att-y4-nokk", "kind": "operator"}, {"id": "att-y5-ace", "kind": "operator"}, {"id": "att-y5-iana", "kind": "operator"}, {"id": "att-y5-zero", "kind": "operator"}, {"id": "back-carte", "kind": "back"}, {"id": "back-mode-de-jeu", "kind": "back"}, {"id": "back-op-att", "kind": "back"}, {"id": "back-op-def", "kind": "back"}, {"id": "back-role", "kind": "back"}, {"id": "def-alt-caveira", "kind": "operator"}, {"id": "def-alt-jager", "kind": "operator"}, {"id": "def-alt-lesion", "kind": "operator"}, {"id": "def-alt-maestro", "kind": "operator"}, {"id": "def-alt-melusi", "kind": "operator"}, {"id": "def-alt-mozzie", "kind": "operator"}, {"id": "def-alt-tachanka", "kind": "operator"}, {"id": "def-core-bandit", "kind": "operator"}, {"id": "def-core-castle", "kind": "operator"}, {"id": "def-core-doc", "kind": "operator"}, {"id": "def-core-jager", "kind": "operator"}, {"id": "def-core-kapkan", "kind": "operator"}, {"id": "def-core-mute", "kind": "operator"}, {"id": "def-core-pulse", "kind": "operator"}, {"id": "def-core-recruit-01", "kind": "operator"}, {"id": "def-core-recruit-02", "kind": "operator"}, {"id": "def-core-rook", "kind": "operator"}, {"id": "def-core-smoke", "kind": "operator"}, {"id": "def-core-tachanka", "kind": "operator"}, {"id": "def-core-thunderbird", "kind": "operator"}, {"id": "def-y1-caveira", "kind": "operator"}, {"id": "def-y1-echo", "kind": "operator"}, {"id": "def-y1-frost", "kind": "operator"}, {"id": "def-y1-valkyrie", "kind": "operator"}, {"id": "def-y2-ela", "kind": "operator"}, {"id": "def-y2-lesion", "kind": "operator"}, {"id": "def-y2-mira", "kind": "operator"}, {"id": "def-y2-vigil", "kind": "operator"}, {"id": "def-y3-alibi", "kind": "operator"}, {"id": "def-y3-clash", "kind": "operator"}, {"id": "def-y3-kaid", "kind": "operator"}, {"id": "def-y3-maestro", "kind": "operator"}, {"id": "def-y4-goyo", "kind": "operator"}, {"id": "def-y4-mozzie", "kind": "operator"}, {"id": "def-y4-wamai", "kind": "operator"}, {"id": "def-y4-warden", "kind": "operator"}, {"id": "def-y5-aruni", "kind": "operator"}, {"id": "def-y5-melusi", "kind": "operator"}, {"id": "def-y5-oryx", "kind": "operator"}, {"id": "map-bank", "kind": "map"}, {"id": "map-border", "kind": "map"}, {"id": "map-chalet", "kind": "map"}, {"id": "map-clubhouse", "kind": "map"}, {"id": "map-coastline", "kind": "map"}, {"id": "map-consulate", "kind": "map"}, {"id": "map-dostoyevsky", "kind": "map"}, {"id": "map-oregon", "kind": "map"}, {"id": "mode-bomb", "kind": "mode"}, {"id": "mode-hostage", "kind": "mode"}, {"id": "mode-secure", "kind": "mode"}, {"id": "role-att", "kind": "role"}, {"id": "role-def", "kind": "role"}];
