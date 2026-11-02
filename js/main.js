(function () {
  'use strict';

  var state = { lang: 'en', phase: 'idle', openId: null };
  var ppRoot, mainNav, idxList, shelf, overlayHost, ctIn;

  function T(v, L) { return (v && typeof v === 'object' && !Array.isArray(v)) ? v[L] : v; }
  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }
  function reducedMotion() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function focusSel(sel) { try { var el = document.querySelector(sel); if (el) el.focus({ preventScroll: true }); } catch (e) {} }
  function findBook(id) { for (var i = 0; i < BOOKS.length; i++) if (BOOKS[i].id === id) return BOOKS[i]; return null; }
  function bookButtonFor(id) { return shelf.querySelector('.b-' + id); }
  function setText(id, text) { var el = document.getElementById(id); if (el) el.textContent = text; }
  function setAttr(id, name, val) { var el = document.getElementById(id); if (el) el.setAttribute(name, val); }

  function renderChrome() {
    var L = state.lang, t = UI[L];
    ppRoot.setAttribute('lang', L);
    setAttr('lang-en', 'aria-pressed', L === 'en' ? 'true' : 'false');
    setAttr('lang-ru', 'aria-pressed', L === 'ru' ? 'true' : 'false');
    setAttr('lang-group', 'aria-label', t.langLabel);
    setText('kicker-link', t.kicker + ' · ' + t.city);
    setAttr('main-nav', 'aria-label', t.navLabel);
    setText('nav-about', t.navAbout);
    setText('nav-work', t.navWork);
    setText('nav-exp', t.navExp);
    setText('nav-contact', t.navContact);
    setAttr('hz-section', 'aria-label', t.heroLabel);
    setText('hz-script', t.script);
    setText('hz-intro', t.intro);
    setAttr('hz-photo', 'alt', t.photoAlt);
    setText('lib-meta', '(02) — ' + t.libMeta);
    setText('lib-h', t.libTitle);
    setText('lib-script', t.libScript);
    setText('hint-d', t.hintD);
    setText('hint-m', t.hintM);
    setText('pk-hint', t.pkHint);
    setAttr('shelf2', 'aria-label', t.shelfLabel);
    setText('ct-meta', '(03) — ' + t.ctMeta);
    setText('ct-title', t.ctTitle);
    setText('ct-script', t.ctScript);
    setText('ct-note', t.ctNote);
    setText('sc-email', t.email + ' ↗');
    setText('sc-resume-label', t.resume + ' — TBD');
    setAttr('sc-resume', 'aria-label', t.resumeAria);
    setText('ft-loc', t.loc);
    setText('ft-top', t.toTop + ' ↑');
    renderIdxList(t, L);
    updateBookAria(t, L);
    if (state.phase === 'open' && state.openId) renderOverlay(state.openId);
  }

  function renderIdxList(t, L) {
    idxList.innerHTML = '';
    BOOKS.forEach(function (b) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'idx';
      btn.innerHTML = '<span class="u">' + esc(b.roman) + '</span><span><span class="idx-t">' +
        esc(T(b.title, L)) + '</span><span class="idx-k u">' + esc(T(b.type, L)) + '</span></span>';
      btn.addEventListener('click', function () { openBook(b.id); });
      li.appendChild(btn);
      idxList.appendChild(li);
    });
  }

  function updateBookAria(t, L) {
    BOOKS.forEach(function (b) {
      var el = bookButtonFor(b.id);
      if (el) el.setAttribute('aria-label', t.open + T(b.title, L));
    });
    var pk = shelf.querySelector('.pk');
    if (pk) pk.setAttribute('aria-label', t.pkLabel);
  }

  function openBook(id) {
    if (state.phase !== 'idle') return;
    state.openId = id;
    state.phase = 'tilt';
    var btn = bookButtonFor(id);
    if (btn) { btn.classList.remove('is-out', 'is-return'); btn.classList.add('is-tilt'); }
    setTimeout(function () {
      state.phase = 'open';
      if (btn) { btn.classList.remove('is-tilt'); btn.classList.add('is-out'); }
      renderOverlay(id);
      setTimeout(function () { focusSel('.pp-close'); }, 120);
    }, reducedMotion() ? 10 : 700);
  }

  function closeBook() {
    if (state.phase !== 'open') return;
    var id = state.openId;
    state.phase = 'closing';
    var ov = overlayHost.querySelector('.ov');
    if (ov) ov.classList.add('is-closing');
    setTimeout(function () {
      state.phase = 'idle';
      state.openId = null;
      overlayHost.innerHTML = '';
      var btn = bookButtonFor(id);
      if (btn) {
        btn.classList.remove('is-out');
        btn.classList.add('is-return');
        btn.focus({ preventScroll: true });
      }
      setTimeout(function () { if (btn) btn.classList.remove('is-return'); }, 850);
    }, reducedMotion() ? 10 : 600);
  }

  function activeViewModel(a, L, t) {
    function items(x) { var v = T(x, L) || []; return v.map(function (s) { return { t: s }; }); }
    return {
      kicker: T(a.kicker, L), no: a.no, title: T(a.title, L), script: T(a.script, L), lead: T(a.lead, L),
      hasPortrait: !!a.portrait,
      h1: T(a.h1, L) || t.task, h2: T(a.h2, L) || t.did, h3: T(a.h3, L) || t.res, h4: T(a.h4, L) || t.gal,
      s1p: T(a.s1p, L) || '', hasS1p: !!a.s1p, s1items: items(a.s1items),
      s2p: T(a.s2p, L) || '', hasS2p: !!a.s2p, s2items: items(a.s2items),
      stats: (a.stats || []).map(function (x) { return { n: x.n, l: T(x.l, L) }; }),
      note: T(a.note, L) || '', hasNote: !!a.note,
      video: a.video || '', hasVideo: !!a.video, videoCap: T(a.videoCap, L) || '',
      images: (a.images || []).map(function (m, k) {
        return { src: m.src || '', has: !!m.src, tbd: !m.src, cap: T(m.cap, L) + (m.src ? '' : ' — TBD'), fig: t.fig + ' ' + (k + 1) };
      }),
      hasImages: !!(a.images && a.images.length), galCls: 'gal' + (a.wide ? ' wide' : ''),
      quotes: (a.quotes || []).map(function (q) { return { q: T(q.q, L), by: T(q.by, L) }; })
    };
  }

  function buildOverlayHTML(v, t) {
    var portrait = v.hasPortrait ? '<figure class="portrait"><img src="./assets/images/portrait.webp" alt="' + esc(t.photoAlt) + '"></figure>' : '';
    var s1p = v.hasS1p ? '<p>' + esc(v.s1p) + '</p>' : '';
    var s2p = v.hasS2p ? '<p>' + esc(v.s2p) + '</p>' : '';
    var s1items = v.s1items.map(function (it) { return '<li>' + esc(it.t) + '</li>'; }).join('');
    var s2items = v.s2items.map(function (it) { return '<li>' + esc(it.t) + '</li>'; }).join('');
    var stats = v.stats.map(function (s) {
      return '<div class="stat"><p class="stat-n">' + esc(s.n) + '</p><p class="stat-l u">' + esc(s.l) + '</p></div>';
    }).join('');
    var noteHtml = v.hasNote ? '<p class="note">' + esc(v.note) + '</p>' : '';
    var videoHtml = v.hasVideo ? (
      '<section class="blk"><h3 class="lbl u">' + esc(t.videoLbl) + '</h3><figure class="fig vid"><span class="mat">' +
      '<video src="' + esc(v.video) + '" controls muted playsinline loop preload="metadata"></video></span>' +
      '<figcaption class="u">' + esc(v.videoCap) + '</figcaption></figure></section>'
    ) : '';
    var imagesHtml = '';
    if (v.hasImages) {
      var figs = v.images.map(function (im) {
        var inner = im.has
          ? '<span class="mat"><img src="' + esc(im.src) + '" alt="' + esc(im.cap) + '" loading="lazy"></span>'
          : '<span class="tbd tbdf u">TBD</span>';
        return '<figure class="fig">' + inner + '<figcaption class="u">' + esc(im.fig) + ' — ' + esc(im.cap) + '</figcaption></figure>';
      }).join('');
      imagesHtml = '<section class="blk"><h3 class="lbl u">(04) ' + esc(v.h4) + '</h3><div class="' + v.galCls + '">' + figs + '</div></section>';
    }
    var quotesHtml = v.quotes.map(function (q) {
      return '<blockquote class="quote"><p>' + esc(q.q) + '</p><footer class="u">' + esc(q.by) + '</footer></blockquote>';
    }).join('');

    return (
      '<div class="ov" role="dialog" aria-modal="true" aria-label="' + esc(v.title) + '">' +
        '<div class="spread">' +
          '<button type="button" class="close pp-close" aria-label="' + esc(t.close) + '">' + esc(t.closeShort) + ' ✕</button>' +
          '<div class="page page-l"><div class="frame" aria-hidden="true"></div><div class="pg-scroll"><div class="pg-in">' +
            '<div class="pg-top"><span class="u">' + esc(v.kicker) + '</span><span class="u">p. ' + esc(v.no) + '</span></div>' +
            '<h2 class="sp-title o">' + esc(v.title) + '</h2>' +
            '<span class="sp-script s" aria-hidden="true">' + esc(v.script) + '</span>' +
            '<p class="sp-lead">' + esc(v.lead) + '</p>' +
            portrait +
            '<section class="blk"><h3 class="lbl u">(01) ' + esc(v.h1) + '</h3>' + s1p + '<ol class="list">' + s1items + '</ol></section>' +
            '<section class="blk"><h3 class="lbl u">(02) ' + esc(v.h2) + '</h3>' + s2p + '<ol class="list">' + s2items + '</ol></section>' +
          '</div></div></div>' +
          '<div class="page page-r"><div class="frame" aria-hidden="true"></div><div class="pg-scroll"><div class="pg-in">' +
            '<section class="blk"><h3 class="lbl u">(03) ' + esc(v.h3) + '</h3><div class="stats">' + stats + '</div>' + noteHtml + '</section>' +
            videoHtml + imagesHtml + quotesHtml +
          '</div></div></div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderOverlay(id) {
    var book = findBook(id), L = state.lang, t = UI[L];
    var v = activeViewModel(book, L, t);
    overlayHost.innerHTML = buildOverlayHTML(v, t);
    var ov = overlayHost.querySelector('.ov');
    var spread = overlayHost.querySelector('.spread');
    var closeBtn = overlayHost.querySelector('.pp-close');
    ov.addEventListener('click', function (e) { if (e.target === ov) closeBook(); });
    ov.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); closeBook(); } });
    spread.addEventListener('click', function (e) { e.stopPropagation(); });
    closeBtn.addEventListener('click', closeBook);
  }

  /* ---- reveal on scroll ---- */
  function initReveal() {
    var targets = [].slice.call(document.querySelectorAll('[data-rv]'));
    try {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.add('in');
          io.unobserve(en.target);
        });
      }, { threshold: 0.08 });
      targets.forEach(function (el) { io.observe(el); });
    } catch (e) {
      targets.forEach(function (el) { el.classList.add('in'); });
    }
    setTimeout(function () { targets.forEach(function (el) { el.classList.add('in'); }); }, 4000);
  }

  /* ---- pumpkin shatter effect (canvas physics) ---- */
  var Pumpkin = (function () {
    var fxCv, moImg, fctx, vw, vh, fp, forder, ft, g, sc, scTop, scroll0, scroll1, fxImg;
    var fxRun = false, fadeAsked = false, fxRaf = null;

    function initFx() {
      try {
        fxCv = document.querySelector('.fx');
        moImg = document.querySelector('.pk-atlas');
        window.addEventListener('resize', sizeFx);
        sizeFx();
      } catch (e) {}
    }
    function sizeFx() {
      if (!fxCv) return;
      var dpr = Math.min(2, window.devicePixelRatio || 1);
      vw = window.innerWidth; vh = window.innerHeight;
      fxCv.width = Math.round(vw * dpr); fxCv.height = Math.round(vh * dpr);
      fctx = fxCv.getContext('2d');
      fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function scroller() {
      var se = document.scrollingElement || document.documentElement;
      if (se.scrollHeight > se.clientHeight + 4) return se;
      var el = document.querySelector('.pp');
      while (el && el !== document.body) {
        var cs = getComputedStyle(el);
        if (/(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 4) return el;
        el = el.parentElement;
      }
      return se;
    }
    function goMail() {
      try {
        if (ctIn) ctIn.scrollIntoView({ block: 'start' });
        var m = document.querySelector('.mail');
        if (m) m.focus({ preventScroll: true });
      } catch (e) {}
    }
    function setPkGone(gone) {
      var btn = document.querySelector('.pk');
      if (btn) btn.classList[gone ? 'add' : 'remove']('is-gone');
    }
    function setFade(on) {
      if (fxCv) fxCv.classList[on ? 'add' : 'remove']('is-fade');
    }
    function breakPumpkin() {
      try { breakPumpkinInner(); } catch (e) { fxRun = false; setPkGone(false); setFade(false); goMail(); }
    }
    function breakPumpkinInner() {
      if (fxRun) return;
      var btn = document.querySelector('.pk'), tgt = ctIn;
      if (!btn || !tgt) { goMail(); return; }
      if (!fctx) initFx();
      if (!fctx) { goMail(); return; }
      var atlas = document.querySelector('.pk-atlas'), whole = btn.querySelector('img');
      var useAtlas = !!(atlas && atlas.complete && atlas.naturalWidth);
      var srcImg = useAtlas ? atlas : whole;
      if (!srcImg || !srcImg.complete || !srcImg.naturalWidth) { goMail(); return; }
      fxImg = srcImg;
      var wsc = useAtlas ? 1 : srcImg.naturalWidth / PK_BB.w;
      var parts = useAtlas
        ? MO.p.map(function (q) { return { s: [q[0], q[1], q[2], q[3]], px: q[4] - PK_BB.x0, py: q[5] - PK_BB.y0, w: q[2], h: q[3], stem: q[6] === 1 }; })
        : PK_GRID.map(function (c) { return { s: [c[0] * wsc, c[1] * wsc, c[2] * wsc, c[3] * wsc], px: c[0], py: c[1], w: c[2], h: c[3], stem: c[4] === 1 }; });
      sizeFx();
      sc = scroller();
      var sTop = sc === (document.scrollingElement || document.documentElement) ? 0 : sc.getBoundingClientRect().top;
      scTop = sTop;
      var r = btn.getBoundingClientRect(), sy = sc.scrollTop || 0;
      var s = r.width / PK_BB.w;
      var ox = r.left, oy = r.top - sTop + sy;
      var floor = tgt.getBoundingClientRect().top - sTop + sy - 8;
      var viewH = sc.clientHeight || vh;
      scroll0 = sy;
      scroll1 = Math.max(0, Math.min(sc.scrollHeight - viewH, floor - viewH * 0.42));
      var D = Math.max(200, floor - (oy + r.height / 2));
      g = Math.max(900, 2 * (D + 160) / (PK_FALL * PK_FALL));
      var rr = moRng(Math.floor(Math.random() * 100000));
      var cx = ox + r.width / 2, cy = oy + r.height * 0.62;
      var vwL = vw;
      fp = parts.map(function (o) {
        var w = o.w * s, h = o.h * s, q = o.s;
        var hx = ox + o.px * s + w / 2, hy = oy + o.py * s + h / 2;
        var dx = hx - cx, dy = hy - cy, d = Math.hypot(dx, dy) || 1, stem = o.stem;
        var sp = 140 + rr() * 280;
        return {
          q: q, w: w, h: h, hx: hx, hy: hy, x: hx, y: hy, ux: dx / d, uy: dy / d, stem: stem, scl: 1, rot: 0, grow: 1,
          vx: stem ? rr() * 40 - 20 : dx / d * sp * (vwL < 700 ? 0.45 : 0.75),
          vy: stem ? -280 : dy / d * sp * 0.5 - 120 - rr() * 220,
          w0: (rr() - 0.5) * (stem ? 3 : 12), ph: 0, ts: stem ? 2 : (3 + rr() * 9),
          land: floor - rr() * 40, flat: stem ? 0.8 : 0.4 + rr() * 0.3, bounces: 0, rest: false,
          crackK: 1 + 2 * Math.exp(-Math.pow((hx - cx) / (r.width * 0.15), 2)),
          delay: Math.min(0.3, Math.hypot(hx - cx, hy - oy) / (r.width * 2.5))
        };
      });
      forder = fp.slice().sort(function (a, b) { return a.land - b.land; });
      ft = 0; fxRun = true; fadeAsked = false;
      setPkGone(true); setFade(false);
      var last = null;
      var schedule = function () {
        var done = false;
        var go = function () {
          if (done) return; done = true;
          if (!fxRun) return;
          var now = performance.now();
          if (last === null) last = now;
          var dt = Math.min(0.033, (now - last) / 1000); last = now;
          try { stepFx(dt); drawFx(); } catch (e) { fxRun = false; setPkGone(false); setFade(false); goMail(); return; }
          if (fxRun) schedule();
        };
        try { fxRaf = requestAnimationFrame(go); } catch (e) {}
        setTimeout(go, 40);
      };
      schedule();
    }
    function stepFx(dt) {
      ft += dt;
      var t = ft, vwL = vw;
      if (t >= PK_TB) {
        var k = Math.min(1, (t - PK_TB) / PK_FALL);
        try { sc.scrollTop = scroll0 + (scroll1 - scroll0) * pkEase(k); } catch (e) {}
      }
      fp.forEach(function (p) {
        if (t < PK_TB) {
          var c = Math.max(0, Math.min(1, (t - PK_TC - p.delay) / (PK_TB - PK_TC - 0.2)));
          var off = c * c * 3 * p.crackK;
          p.x = p.hx + p.ux * off; p.y = p.hy + p.uy * off;
          p.rot = c * c * (p.w0 > 0 ? 0.05 : -0.05);
          return;
        }
        p.grow = 1 + 1.3 * Math.min(1, (t - PK_TB) / 1.6);
        if (!p.rest) {
          p.vy += g * dt; p.x += p.vx * dt; p.y += p.vy * dt;
          p.rot += p.w0 * dt; p.ph += p.ts * dt;
          p.scl = 0.18 + 0.82 * Math.abs(Math.cos(p.ph));
          var he = 0.5 * p.h * p.grow * p.scl;
          if (p.y + he >= p.land && p.vy > 0) {
            p.y = p.land - he; p.bounces++;
            p.vy = -p.vy * 0.22; p.vx *= 0.5; p.w0 *= 0.4; p.ts *= 0.35;
            if (p.bounces >= 2 || Math.abs(p.vy) < 90) { p.rest = true; p.vy = 0; }
          }
          if (p.x < 20) { p.x = 20; p.vx = Math.abs(p.vx) * 0.5; }
          if (p.x > vwL - 20) { p.x = vwL - 20; p.vx = -Math.abs(p.vx) * 0.5; }
        } else {
          p.vx *= Math.exp(-7 * dt); p.x += p.vx * dt;
          p.scl += (p.flat - p.scl) * Math.min(1, dt * 6);
          p.y = p.land - 0.5 * p.h * p.grow * p.scl;
        }
      });
      var endT = PK_TB + PK_FALL + 2.6;
      if (t > endT && !fadeAsked) { fadeAsked = true; setFade(true); }
      if (t > endT + 0.9) {
        fxRun = false;
        try { fctx.clearRect(0, 0, vw, vh); } catch (e) {}
        setPkGone(false); setFade(false);
        try { var m = document.querySelector('.mail'); if (m) m.focus({ preventScroll: true }); } catch (e) {}
      }
    }
    function drawFx() {
      var ctx = fctx, img = fxImg;
      if (!ctx || !img || !fp || !fxRun) return;
      ctx.clearRect(0, 0, vw, vh);
      var sy = sc ? sc.scrollTop : 0, top = scTop || 0;
      var list = ft >= PK_TB ? forder : fp;
      for (var i = 0; i < list.length; i++) {
        var p = list[i], q = p.q;
        var yy = p.y - sy + top;
        if (yy < -200 || yy > vh + 200) continue;
        ctx.save();
        ctx.translate(p.x, yy); ctx.rotate(p.rot); ctx.scale(p.grow, p.grow * p.scl);
        ctx.drawImage(img, q[0], q[1], q[2], q[3], -p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    }
    return { init: initFx, breakPumpkin: breakPumpkin };
  })();

  /* ---- init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    ppRoot = document.querySelector('.pp');
    mainNav = document.getElementById('main-nav');
    idxList = document.getElementById('idx-list');
    shelf = document.getElementById('shelf2');
    overlayHost = document.getElementById('overlay-host');
    ctIn = document.querySelector('.ct-in');

    document.getElementById('lang-en').addEventListener('click', function () { state.lang = 'en'; renderChrome(); });
    document.getElementById('lang-ru').addEventListener('click', function () { state.lang = 'ru'; renderChrome(); });
    document.getElementById('nav-about').addEventListener('click', function () { openBook('about'); });
    document.getElementById('nav-exp').addEventListener('click', function () { openBook('workexp'); });

    shelf.querySelectorAll('.bk2[data-id]').forEach(function (btn) {
      btn.addEventListener('click', function () { openBook(btn.getAttribute('data-id')); });
    });
    shelf.querySelector('.pk').addEventListener('click', function () { Pumpkin.breakPumpkin(); });

    renderChrome();
    initReveal();
    Pumpkin.init();
  });
})();
