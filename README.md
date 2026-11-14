# 6: Siege field guide

A fan-made guide to 6: Siege - The Board Game, built for phones at the table.

Live at https://6siege.skirmishgames.app

## What's in it

- Operators: every operator board from the core box, Years 1 to 5 and Tactical Drop, with Run, Stamina, Destroy rating, weapon dice, special gadget, roles, best range and play tips. Filter by side, role and box.
- Maps: the official boards and three fan-made boards, with room names for the official maps.
- Missions: the Bomb, Hostage and Control setups for each map, with component counts and the page in the mission book.
- Randomiser: draws a map, a mode and two squads of five from the boxes you own.
- Print cards: fan-made draw cards as A4 PDF sheets with crop marks, with optional backs for double-sided printing.
- Tips: advice rewritten from Steamforged Games' crowdfunding updates.
- Timer: a phone game clock that follows the round structure, with reactions, challenges and upkeep.
- Living FAQ: the community rulings from Discord as a searchable page, linked from each operator.
- Resources: the Hostile Tactical AI solo chart, the deluxe packaging guide and other community files.

The official rulebooks are not hosted here. The site gives book and page references instead.

## Running it locally

No build step. Serve the folder and open it in a browser:

```
python3 -m http.server 8765
```

Then open http://localhost:8765. Opening index.html straight from disk will not load the card images into the PDF.

## Updating

1. Edit the data in `js/data/`.
2. Run `node tools/stamp.js` to refresh the cache-busting version.
3. Run the smoke test with the site served on port 8765: `node test/smoke.js` (needs Playwright).
4. Commit and push. GitHub Pages deploys from `main`.

## Data

- `js/data/operators.js`: one record per operator board. Dice codes are Y, O and R for yellow, orange and red, with `!` for a lightning symbol.
- `js/data/maps.js`: maps, missions, mission types and book titles.
- `js/data/tips.js`: tips and the Resources page.
- `CHECK-LOG.md`: items that need checking against the physical game.

## Credits

6: Siege - The Board Game was designed by Carlos Gomez Quintana, first published by Mythic Games and now published by Steamforged Games under licence from Ubisoft. Tom Clancy's Rainbow Six Siege is a trademark of Ubisoft. This site is not affiliated with or endorsed by any of them.

Fan-made files belong to their creators.

Contact: games@staroversky.com
