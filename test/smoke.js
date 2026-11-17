// Playwright smoke test. Serve the site first: python3 -m http.server 8765
// Usage: node test/smoke.js [base url]
const { chromium } = require('playwright');
const base = process.argv[2] || 'http://localhost:8765/';
(async () => {
  const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  const check = async (hash, sel, label) => {
    await page.goto(base + hash);
    await page.waitForSelector(sel, { timeout: 5000 });
    console.log('ok', label);
  };
  await check('#/', '.tiles', 'home');
  await check('#/operators', '#list .card', 'operators');
  await check('#/operator/ash', '.board-img', 'operator detail');
  await check('#/maps', '.grid .card', 'maps');
  await check('#/map/bank', '#mapImg', 'map detail');
  await check('#/missions', '.mission', 'missions');
  await check('#/randomiser', '.slot', 'randomiser');
  await check('#/cards', '.card-pick input', 'cards');
  await check('#/tips', '.tip', 'tips');
  await check('#/resources', '.linklist li', 'resources');
  await check('#/about', '.panel', 'about');
  await check('#/faq', '.faq-item', 'faq');
  {
    const n = async () => (await page.$$('.faq-item')).length;
    const all = await n();
    await page.click('[data-src="official"]');
    const off = await n();
    await page.click('[data-src="community"]');
    const com = await n();
    if (!(off === 35 && com === 54 && all === off + com)) throw new Error('faq counts ' + all + '/' + off + '/' + com);
    await page.click('[data-src="all"]');
    const tags = await page.$$eval('.faq-q .tag.off, .faq-q .tag.com', els => els.length);
    if (tags !== all) throw new Error('faq source tags ' + tags);
    await page.fill('#fq', 'Gemini');
    if ((await n()) < 2) throw new Error('faq search');
    console.log('ok faq filters');
  }
  await check('#/boxes', '.grid .card', 'boxes');
  await check('#/box/y1', '.box-sheet', 'box detail');
  await check('#/operator/sledge', '.optips', 'operator tips');
  // Timer: run through deployment, a round with a reaction and a challenge, then upkeep.
  await page.goto(base + '#/timer');
  await page.waitForSelector('#start');
  await page.click('#start');
  await page.waitForSelector('.tscreen');
  await page.click('[data-act="endDeploy"]');
  await page.click('[data-act="endDeploy"]');
  await page.click('[data-act="startRound"]');
  await page.click('[data-act="react"]');
  await page.click('[data-act="endReact"]');
  await page.click('[data-act="challenge"]');
  await page.click('[data-ch="A+"]');
  for (let i = 0; i < 4; i++) await page.click('[data-act="endPhase"]');
  await page.waitForSelector('[data-act="nextRound"]');
  await page.click('[data-act="lost"][data-side="D"][data-d="1"]');
  await page.click('[data-act="nextRound"]');
  const txt = await page.textContent('.tsheet');
  if (!txt.includes('Round 2') || !txt.includes('4:00')) throw new Error('Round 2 time wrong: ' + txt);
  await page.click('.tsheet [data-act="menu"]'); await page.click('[data-m="exit"]');
  await page.waitForSelector('#resume');
  console.log('ok timer');
  // Build a small PDF
  await page.goto(base + '#/cards');
  await page.click('[data-none="0"]'); await page.click('[data-none="1"]');
  for (let g = 2; g < 5; g++) { const b = await page.$(`[data-none="${g}"]`); if (b) await b.click(); }
  await page.click('.card-pick label >> nth=0'); if (!(await page.isChecked('.card-pick input >> nth=0'))) throw new Error('card did not toggle');
  const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 15000 }), page.click('#makePdf')]);
  console.log('ok pdf', await dl.suggestedFilename());
  await browser.close();
  if (errors.length) { console.error('Console errors:\n' + errors.join('\n')); process.exit(1); }
  console.log('All checks passed');
})().catch(e => { console.error(e); process.exit(1); });
