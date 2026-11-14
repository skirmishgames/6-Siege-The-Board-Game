// Printable A4 sheets of the fan-made draw cards. Print at 100% (actual size).
(function () {
  const CARD_W = 63, CARD_H = 85;          // mm, keeps the 832 x 1121 art undistorted
  const COLS = 3, ROWS = 3, PAGE_W = 210, PAGE_H = 297;
  const GRID_W = CARD_W * COLS, GRID_H = CARD_H * ROWS;
  const X0 = (PAGE_W - GRID_W) / 2, Y0 = (PAGE_H - GRID_H) / 2;
  const MARK = 5, GAP = 1.5;

  function backFor(id) {
    if (id.startsWith('att-')) return 'back-op-att';
    if (id.startsWith('def-')) return 'back-op-def';
    if (id.startsWith('map-')) return 'back-carte';
    if (id.startsWith('mode-')) return 'back-mode-de-jeu';
    if (id.startsWith('role-')) return 'back-role';
    return null;
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Could not load ' + src));
      img.src = src;
    });
  }

  function cropMarks(doc) {
    doc.setDrawColor(0);
    doc.setLineWidth(0.2);
    for (let c = 0; c <= COLS; c++) {
      const x = X0 + c * CARD_W;
      doc.line(x, Y0 - GAP - MARK, x, Y0 - GAP);
      doc.line(x, Y0 + GRID_H + GAP, x, Y0 + GRID_H + GAP + MARK);
    }
    for (let r = 0; r <= ROWS; r++) {
      const y = Y0 + r * CARD_H;
      doc.line(X0 - GAP - MARK, y, X0 - GAP, y);
      doc.line(X0 + GRID_W + GAP, y, X0 + GRID_W + GAP + MARK, y);
    }
  }

  async function buildPdf(cardIds, opts = {}) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
    const cache = {};
    const img = async id => (cache[id] = cache[id] || await loadImage('assets/cards/' + id + '.jpg'));
    const perPage = COLS * ROWS;
    let first = true;
    for (let p = 0; p < cardIds.length; p += perPage) {
      const chunk = cardIds.slice(p, p + perPage);
      if (!first) doc.addPage();
      first = false;
      for (let i = 0; i < chunk.length; i++) {
        const c = i % COLS, r = Math.floor(i / COLS);
        doc.addImage(await img(chunk[i]), 'JPEG', X0 + c * CARD_W, Y0 + r * CARD_H, CARD_W, CARD_H, chunk[i]);
      }
      cropMarks(doc);
      doc.setFontSize(7);
      doc.setTextColor(120);
      doc.text('6: Siege fan-made draw cards. Print at 100% (actual size). Cards 63 x 85 mm.', PAGE_W / 2, PAGE_H - 8, { align: 'center' });
      if (opts.backs) {
        // Backs page, mirrored left to right for long-edge duplex printing.
        doc.addPage();
        for (let i = 0; i < chunk.length; i++) {
          const b = backFor(chunk[i]);
          if (!b) continue;
          const c = COLS - 1 - (i % COLS), r = Math.floor(i / COLS);
          doc.addImage(await img(b), 'JPEG', X0 + c * CARD_W, Y0 + r * CARD_H, CARD_W, CARD_H, b);
        }
        cropMarks(doc);
      }
      if (opts.onProgress) opts.onProgress(Math.min(p + perPage, cardIds.length), cardIds.length);
    }
    return doc;
  }

  SIEGE.print = { buildPdf, backFor, CARD_W, CARD_H };
})();
