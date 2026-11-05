/* Концепты сайтов, нарисованные в SVG. У каждого — своя композиция, навигация и типографика. */
(function () {
  var F = "font-family='Inter, Segoe UI, -apple-system, Roboto, Arial, sans-serif'";
  var S = "font-family='Georgia, Times New Roman, serif'";

  function doc(w, h, bg, body) {
    return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 " + w + " " + h + "' width='" + w + "' height='" + h + "'>" +
      "<rect width='" + w + "' height='" + h + "' fill='" + bg + "'/>" + body + "</svg>";
  }
  function t(x, y, size, fill, text, extra) {
    return "<text x='" + x + "' y='" + y + "' " + F + " font-size='" + size + "' fill='" + fill + "' " + (extra || "") + ">" + text + "</text>";
  }
  function st(x, y, size, fill, text, extra) {
    return "<text x='" + x + "' y='" + y + "' " + S + " font-size='" + size + "' fill='" + fill + "' " + (extra || "") + ">" + text + "</text>";
  }
  function r(x, y, w, h, fill, extra) {
    return "<rect x='" + x + "' y='" + y + "' width='" + w + "' height='" + h + "' fill='" + fill + "' " + (extra || "") + "/>";
  }
  function c(cx, cy, rad, fill, extra) {
    return "<circle cx='" + cx + "' cy='" + cy + "' r='" + rad + "' fill='" + fill + "' " + (extra || "") + "/>";
  }
  var MID = "text-anchor='middle'", END = "text-anchor='end'";
  // Реальное фото внутри SVG: заполняет область целиком (как object-fit: cover)
  var P = window.PHOTOS || {};
  function photo(src, x, y, w, h, extra) {
    return "<image xlink:href='" + src + "' href='" + src + "' x='" + x + "' y='" + y + "' width='" + w + "' height='" + h + "' preserveAspectRatio='xMidYMid slice' " + (extra || "") + "/>";
  }


  /* ================= Полные страницы для секции ниже (800×1500) ================= */

  // A. Ресторан — editorial: огромный serif, меню с точками-лидерами, бронь формой
  var brasa = (function () {
    var fg = "#f2ebe3", red = "#b8432f", menu = "";
    [["Стейк рибай, 300 г", "2 400 ₽", "Мраморная говядина, соль, тимьян"], ["Тартар из говядины", "980 ₽", "Желток, каперсы, бриошь"],
     ["Осьминог на гриле", "1 650 ₽", "Печёный перец, кинза"], ["Тыква с углей", "690 ₽", "Козий сыр, тыквенные семечки"],
     ["Чизкейк с дымом", "590 ₽", "Карамель, морская соль"]].forEach(function (m, i) {
      var y = 890 + i * 66;
      menu += t(40, y, 20, fg, m[0], "font-weight='600'") +
        "<line x1='290' y1='" + (y - 5) + "' x2='650' y2='" + (y - 5) + "' stroke='" + fg + "' stroke-opacity='.3' stroke-width='2' stroke-dasharray='1 7' stroke-linecap='round'/>" +
        t(760, y, 20, fg, m[1], END + " font-weight='600'") + t(40, y + 24, 13, fg, m[2], "opacity='.5'");
    });
    return doc(800, 1500, "#141110",
      "<defs><clipPath id='bc'><rect x='40' y='320' width='720' height='400' rx='4'/></clipPath></defs>" +
      t(40, 36, 11, fg, "ВТ–ВС · 12:00–02:00", "letter-spacing='2' opacity='.6'") +
      t(400, 36, 11, fg, "МЕНЮ    ВИНО    БРОНЬ", MID + " letter-spacing='3' opacity='.6'") +
      t(760, 36, 11, fg, "+7 495 000-00-00", END + " opacity='.6'") +
      r(40, 52, 720, 1, fg, "opacity='.15'") +
      st(400, 220, 190, fg, "Brasa", MID + " font-style='italic' letter-spacing='-6'") +
      r(40, 252, 720, 1, fg, "opacity='.15'") +
      t(40, 280, 12, fg, "Гриль на углях", "font-weight='600'") + t(40, 298, 12, fg, "с 2016 года", "opacity='.5'") +
      t(300, 280, 12, fg, "120 вин", "font-weight='600'") + t(300, 298, 12, fg, "от нашего сомелье", "opacity='.5'") +
      t(760, 288, 12, "#d0634d", "Забронировать стол →", END + " font-weight='700'") +
      "<g clip-path='url(#bc)'>" + r(40, 320, 720, 400, "#1d1917") + photo(P.steak, 40, 320, 720, 400) + "</g>" +
      st(40, 830, 56, fg, "Меню") + t(760, 822, 11, fg, "СЕЗОН ЗИМА 2026", END + " letter-spacing='2' opacity='.5'") +
      menu +
      r(40, 1230, 720, 1, fg, "opacity='.15'") +
      st(40, 1300, 44, fg, "Забронировать") + st(40, 1350, 44, "#d0634d", "стол", "font-style='italic'") +
      t(420, 1272, 11, fg, "ИМЯ", "letter-spacing='2' opacity='.5'") + r(420, 1300, 340, 1, fg, "opacity='.35'") +
      t(420, 1330, 11, fg, "ДАТА И ВРЕМЯ", "letter-spacing='2' opacity='.5'") + r(420, 1358, 340, 1, fg, "opacity='.35'") +
      r(420, 1376, 340, 48, red, "rx='2'") + t(590, 1406, 13, "#fff", "Подтвердить бронь", MID + " font-weight='700'") +
      t(40, 1474, 11, fg, "BRASA © 2026", "opacity='.4'") + t(760, 1474, 11, fg, "Москва, ул. Огненная, 7", END + " opacity='.4'")
    );
  })();

  // B. Онлайн-школа — bento-сетка из плиток, навигация плавающей панелью снизу
  var shag = (function () {
    var ink = "#1b1838", vio = "#6b4eff", steps = "", checks = "";
    [["01", "Основы", "Композиция и цвет"], ["02", "Интерфейсы", "Figma и прототипы"], ["03", "Портфолио", "3 реальных проекта"], ["04", "Работа", "Помощь с наймом"]].forEach(function (s, i) {
      var x = 24 + i * 190, last = i === 3, fg = last ? "#fff" : ink;
      steps += r(x, 600, 178, 230, last ? vio : "#fff", "rx='24'") +
        t(x + 20, 656, 40, last ? "#fff" : vio, s[0], "font-weight='900' letter-spacing='-1'") +
        t(x + 20, 770, 17, fg, s[1], "font-weight='800'") + t(x + 20, 794, 12, fg, s[2], "opacity='.6'");
    });
    ["Все 120 уроков", "Личный наставник", "Проверка домашних заданий", "Сертификат и помощь с работой"].forEach(function (s, i) {
      var y = 1070 + i * 40;
      checks += c(72, y - 5, 11, "#b8f2d6") + "<path d='M66 " + (y - 5) + " l4 4 l8 -8' fill='none' stroke='" + ink + "' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/>" +
        t(96, y, 15, "#fff", s);
    });
    return doc(800, 1500, "#f4f3fb",
      r(24, 24, 452, 400, vio, "rx='28'") +
      t(52, 74, 22, "#fff", "stride.", "font-weight='900' letter-spacing='-1'") +
      t(448, 70, 11, "#fff", "Набор до 15.12", END + " opacity='.8' font-weight='600'") +
      t(52, 240, 40, "#fff", "Стань", "font-weight='800' letter-spacing='-1.5'") +
      t(52, 288, 40, "#fff", "веб-дизайнером", "font-weight='800' letter-spacing='-1.5'") +
      t(52, 336, 40, "#fff", "за 9 месяцев", "font-weight='800' letter-spacing='-1.5' opacity='.6'") +
      r(52, 360, 170, 44, "#fff", "rx='22'") + t(137, 388, 13, vio, "Начать бесплатно", MID + " font-weight='700'") +
      r(488, 24, 288, 190, "#ffd84d", "rx='28'") +
      t(512, 96, 52, ink, "4.9", "font-weight='900' letter-spacing='-2'") + t(512, 124, 13, ink, "средняя оценка курса", "opacity='.7'") +
      t(512, 188, 13, ink, "2 300 выпускников", "font-weight='700'") +
      r(488, 226, 138, 198, "#b8f2d6", "rx='28'") +
      t(508, 300, 40, ink, "120", "font-weight='900' letter-spacing='-1'") + t(508, 324, 12, ink, "уроков", "opacity='.7'") +
      c(557, 382, 20, ink) + "<path d='M552 373 l14 9 l-14 9z' fill='#b8f2d6'/>" +
      r(638, 226, 138, 198, ink, "rx='28'") +
      c(670, 270, 18, "#f4b27a") + c(696, 270, 18, "#8fa6ff", "stroke='" + ink + "' stroke-width='3'") + c(722, 270, 18, "#ffd84d", "stroke='" + ink + "' stroke-width='3'") +
      t(658, 370, 13, "#fff", "Наставник", "font-weight='700'") + t(658, 388, 13, "#fff", "на связи", "font-weight='700' opacity='.6'") +
      r(240, 440, 320, 48, ink, "rx='24'") + c(266, 464, 4, "#ffd84d") +
      t(278, 468, 11, "#fff", "Курсы", "font-weight='600'") + t(336, 468, 11, "#fff", "Цены", "opacity='.6'") + t(384, 468, 11, "#fff", "Отзывы", "opacity='.6'") +
      r(458, 446, 96, 36, "#ffd84d", "rx='18'") + t(506, 468, 11, ink, "Записаться", MID + " font-weight='700'") +
      t(24, 572, 34, ink, "Как устроено обучение", "font-weight='800' letter-spacing='-1'") +
      steps +
      r(24, 880, 752, 420, ink, "rx='32'") +
      c(640, 1170, 110, vio) + "<rect x='560' y='1060' width='90' height='90' rx='18' fill='#b8f2d6' transform='rotate(18 605 1105)'/>" +
      "<g transform='rotate(12 660 960)'>" + c(660, 960, 60, "#ffd84d") + t(660, 970, 26, ink, "−30%", MID + " font-weight='900'") + "</g>" +
      t(60, 940, 12, "#fff", "ТАРИФ «ПРОФИ»", "letter-spacing='2' opacity='.6' font-weight='600'") +
      t(60, 1012, 60, "#fff", "4 900 ₽", "font-weight='900' letter-spacing='-2'") + t(320, 1012, 18, "#fff", "/ мес", "opacity='.5'") +
      checks +
      r(60, 1224, 300, 52, "#ffd84d", "rx='26'") + t(210, 1256, 15, ink, "Записаться на курс", MID + " font-weight='700'") +
      t(24, 1390, 22, ink, "stride.", "font-weight='900' letter-spacing='-1'") +
      t(776, 1390, 12, ink, "Курсы · Блог · Вакансии · Контакты", END + " opacity='.55'")
    );
  })();

  // C. Ювелирный бренд — тихий минимализм: много воздуха, один предмет в центре, тонкая типографика
  var luna = (function () {
    var fg = "#1a1a1a", gold = "#b8975a", items = "";
    [["Серьги «Купол»", "38 000 ₽", P.earrings], ["Колье «Нить»", "52 000 ₽", P.necklace], ["Браслет «Орбита»", "46 000 ₽", P.bracelet]].forEach(function (p, i) {
      var x = 40 + i * 248, y = 670;
      items += r(x, y, 224, 280, "#ebe6dc") + photo(p[2], x, y, 224, 280) + st(x, 984, 17, fg, p[0]) + t(x, 1006, 11, fg, p[1], "letter-spacing='1' opacity='.55'");
    });
    return doc(800, 1500, "#f5f2ec",
      r(40, 40, 20, 1.5, fg) + r(40, 47, 14, 1.5, fg) + t(72, 48, 11, fg, "Меню", "letter-spacing='1'") +
      st(400, 52, 20, fg, "L U N A", MID + " letter-spacing='6'") +
      t(760, 48, 11, fg, "Корзина (0)", END + " letter-spacing='1'") +
      "<text transform='translate(46 340) rotate(-90)' " + F + " font-size='10' letter-spacing='3' fill='" + fg + "' opacity='.5'>КОЛЛЕКЦИЯ 2026</text>" +
      t(760, 260, 10, fg, "01 / 12", END + " letter-spacing='2' opacity='.5'") +
      "<defs><clipPath id='lr'><rect x='230' y='92' width='340' height='240' rx='2'/></clipPath></defs>" +
      r(230, 92, 340, 240, "#ebe6dc") + photo(P.ring, 230, 92, 340, 240, "clip-path='url(#lr)'") +
      st(400, 372, 22, fg, "Кольцо «Свет»", MID) +
      t(400, 398, 11, fg, "18K ЗОЛОТО · 64 000 ₽", MID + " letter-spacing='2' opacity='.55'") +
      t(400, 444, 11, fg, "СМОТРЕТЬ КОЛЛЕКЦИЮ", MID + " letter-spacing='3' font-weight='600'") + r(334, 452, 132, 1, fg) +
      t(40, 584, 10, fg, "НОВИНКИ", "letter-spacing='3' opacity='.5'") +
      st(40, 634, 38, fg, "Тонкие линии") +
      items +
      r(40, 1090, 720, 1, fg, "opacity='.15'") +
      st(400, 1196, 34, fg, "«Украшение должно", MID + " font-style='italic'") +
      st(400, 1242, 34, fg, "жить дольше моды»", MID + " font-style='italic'") +
      t(400, 1286, 10, fg, "— ОСНОВАТЕЛЬНИЦА LUNA", MID + " letter-spacing='3' opacity='.5'") +
      r(40, 1410, 720, 1, fg, "opacity='.15'") +
      t(40, 1454, 10, fg, "ДОСТАВКА · УХОД · ГАРАНТИЯ", "letter-spacing='2' opacity='.6'") +
      t(760, 1454, 10, fg, "© LUNA 2026", END + " letter-spacing='2' opacity='.5'")
    );
  })();

  // D. Клиника — split-screen: цветная половина с заголовком, вторая — интерфейс записи как в приложении
  var belyi = (function () {
    var ink = "#10302e", teal = "#1f8f84", cal = "", times = "", rows = "", docs = "";
    ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].forEach(function (d, i) { cal += t(452 + i * 46, 150, 10, ink, d, MID + " opacity='.45' font-weight='600'"); });
    for (var d = 1; d <= 22; d++) {
      var idx = d + 5, col = idx % 7, row = Math.floor(idx / 7), x = 452 + col * 46, y = 184 + row * 36, sel = d === 12;
      if (sel) cal += c(x, y - 5, 15, teal);
      cal += t(x, y, 12, sel ? "#fff" : ink, d, MID + (d < 4 ? " opacity='.3'" : "") + (sel ? " font-weight='700'" : ""));
    }
    ["10:00", "12:30", "15:00", "17:30"].forEach(function (tm, i) {
      var x = 440 + i * 82, on = i === 2;
      times += r(x, 334, 74, 32, on ? teal : "#eef5f4", "rx='16'") + t(x + 37, 355, 12, on ? "#fff" : ink, tm, MID + " font-weight='600'");
    });
    var y = 630;
    [["Лечение кариеса", "от 4 500 ₽"], ["Профессиональная гигиена", "6 900 ₽", 1], ["Имплантация", "от 38 000 ₽"], ["Отбеливание", "14 000 ₽"]].forEach(function (s) {
      rows += r(40, y, 720, 1, ink, "opacity='.12'") + t(40, y + 44, 20, ink, s[0], "font-weight='700'") +
        t(700, y + 44, 14, ink, s[1], END + " opacity='.6'") + t(760, y + 46, 24, teal, s[2] ? "−" : "+", END);
      if (s[2]) {
        rows += t(40, y + 82, 14, ink, "Ультразвук, Air Flow и полировка.", "opacity='.6'") +
          t(40, y + 104, 14, ink, "Около часа, без боли и дискомфорта.", "opacity='.6'") +
          r(40, y + 124, 110, 30, "#e8f4f2", "rx='15'") + t(95, y + 144, 11, teal, "60 минут", MID + " font-weight='700'") +
          r(160, y + 124, 140, 30, "#e8f4f2", "rx='15'") + t(230, y + 144, 11, teal, "Без анестезии", MID + " font-weight='700'");
        y += 180;
      } else y += 70;
    });
    rows += r(40, y, 720, 1, ink, "opacity='.12'");
    [["Анна К.", "Терапевт", P.doc1], ["Игорь Л.", "Ортодонт", P.doc2], ["Мария С.", "Имплантолог", P.doc3]].forEach(function (p, i) {
      var x = 40 + i * 250, yy = 1140;
      docs += "<clipPath id='dk" + i + "'><circle cx='" + (x + 110) + "' cy='" + (yy + 80) + "' r='56'/></clipPath>" +
        r(x, yy, 220, 240, "#f1f7f6", "rx='20'") + c(x + 110, yy + 80, 56, "#cfe6e3") +
        photo(p[2], x + 54, yy + 24, 112, 112, "clip-path='url(#dk" + i + ")'") +
        t(x + 110, yy + 170, 16, ink, p[0], MID + " font-weight='800'") + t(x + 110, yy + 192, 12, ink, p[1], MID + " opacity='.55'") +
        t(x + 110, yy + 218, 12, teal, "★ 4.9", MID + " font-weight='700'");
    });
    return doc(800, 1500, "#ffffff",
      r(0, 0, 400, 500, teal) +
      t(40, 58, 22, "#fff", "bright.", "font-weight='800' letter-spacing='-1'") +
      t(40, 200, 48, "#fff", "Лечим зубы", "font-weight='800' letter-spacing='-2'") +
      t(40, 254, 48, "#fff", "без страха", "font-weight='800' letter-spacing='-2' opacity='.6'") +
      t(40, 298, 14, "#fff", "Седация, современное оборудование", "opacity='.8'") +
      t(40, 318, 14, "#fff", "и честные цены без сюрпризов.", "opacity='.8'") +
      t(40, 432, 32, "#fff", "12", "font-weight='800'") + t(40, 454, 11, "#fff", "лет работы", "opacity='.7'") +
      t(140, 432, 32, "#fff", "18", "font-weight='800'") + t(140, 454, 11, "#fff", "врачей", "opacity='.7'") +
      t(240, 432, 32, "#fff", "4.9", "font-weight='800'") + t(240, 454, 11, "#fff", "рейтинг", "opacity='.7'") +
      r(616, 30, 104, 34, ink, "rx='17'") + t(668, 52, 12, "#fff", "Записаться", MID + " font-weight='700'") +
      r(736, 40, 24, 2, ink) + r(736, 47, 24, 2, ink) + r(736, 54, 24, 2, ink) +
      t(440, 118, 16, ink, "Ноябрь 2026", "font-weight='800'") + t(760, 118, 16, ink, "‹   ›", END + " opacity='.4'") +
      cal + times +
      r(440, 392, 320, 46, teal, "rx='23'") + t(600, 420, 13, "#fff", "Записаться на 12 ноября, 15:00", MID + " font-weight='700'") +
      t(40, 600, 11, ink, "УСЛУГИ И ЦЕНЫ", "letter-spacing='2' font-weight='700' opacity='.5'") +
      rows +
      t(40, 1110, 11, ink, "ВРАЧИ", "letter-spacing='2' font-weight='700' opacity='.5'") +
      docs +
      r(0, 1420, 800, 80, ink) +
      t(40, 1466, 12, "#fff", "bright. — Москва, ул. Тихая, 3", "opacity='.7'") +
      t(760, 1466, 12, "#fff", "Ежедневно 9:00–21:00", END + " opacity='.7'")
    );
  })();

  /* ================= Дополнительные страницы и мобильные версии ================= */

  // BRASA — главная, телефон
  var brasaM = (function () {
    var fg = "#f2ebe3", red = "#b8432f", menu = "";
    [["Стейк рибай, 300 г", "2 400 ₽", "Мраморная говядина, тимьян"], ["Тартар из говядины", "980 ₽", "Желток, каперсы, бриошь"],
     ["Осьминог на гриле", "1 650 ₽", "Печёный перец, кинза"], ["Тыква с углей", "690 ₽", "Козий сыр, семечки"],
     ["Чизкейк с дымом", "590 ₽", "Карамель, морская соль"]].forEach(function (m, i) {
      var y = 700 + i * 64;
      menu += t(20, y, 16, fg, m[0], "font-weight='600'") + t(370, y, 16, fg, m[1], END + " font-weight='600'") +
        t(20, y + 22, 12, fg, m[2], "opacity='.5'") + (i < 4 ? r(20, y + 40, 350, 1, fg, "opacity='.1'") : "");
    });
    return doc(390, 1360, "#141110",
      "<defs><clipPath id='bm'><rect x='20' y='250' width='350' height='250' rx='4'/></clipPath></defs>" +
      r(20, 28, 20, 1.5, fg) + r(20, 35, 20, 1.5, fg) + r(20, 42, 13, 1.5, fg) +
      t(195, 42, 10, fg, "ВТ–ВС · 12:00–02:00", MID + " letter-spacing='1.5' opacity='.55'") +
      t(370, 42, 12, "#d0634d", "Бронь", END + " font-weight='700'") +
      r(20, 62, 350, 1, fg, "opacity='.15'") +
      st(195, 180, 104, fg, "Brasa", MID + " font-style='italic' letter-spacing='-3'") +
      r(20, 206, 350, 1, fg, "opacity='.15'") +
      t(20, 232, 12, fg, "Гриль на углях · с 2016 года", "opacity='.6'") + t(370, 232, 12, fg, "120 вин", END + " opacity='.6'") +
      "<g clip-path='url(#bm)'>" + r(20, 250, 350, 250, "#1d1917") + photo(P.steak, 20, 250, 350, 250) + "</g>" +
      r(20, 520, 350, 52, red, "rx='2'") + t(195, 551, 14, "#fff", "Забронировать стол", MID + " font-weight='700'") +
      st(20, 650, 44, fg, "Меню") + t(370, 642, 10, fg, "ЗИМА 2026", END + " letter-spacing='2' opacity='.5'") +
      menu +
      r(20, 1010, 350, 1, fg, "opacity='.15'") +
      st(20, 1068, 36, fg, "Забронировать") + st(20, 1108, 36, "#d0634d", "стол", "font-style='italic'") +
      t(20, 1146, 10, fg, "ИМЯ", "letter-spacing='2' opacity='.5'") + r(20, 1172, 350, 1, fg, "opacity='.35'") +
      t(20, 1202, 10, fg, "ДАТА И ВРЕМЯ", "letter-spacing='2' opacity='.5'") + r(20, 1228, 350, 1, fg, "opacity='.35'") +
      r(20, 1248, 350, 50, red, "rx='2'") + t(195, 1278, 13, "#fff", "Подтвердить бронь", MID + " font-weight='700'") +
      t(20, 1340, 10, fg, "BRASA © 2026", "opacity='.4'") + t(370, 1340, 10, fg, "ул. Огненная, 7", END + " opacity='.4'")
    );
  })();

  // BRASA — страница брони, общие части
  var brasaSlots = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"], brasaBusy = [1, 4, 8];
  function brasaSlotGrid(x0, y0, w, h, gap) {
    var fg = "#f2ebe3", s = "";
    brasaSlots.forEach(function (tm, i) {
      var x = x0 + (i % 3) * (w + gap), y = y0 + Math.floor(i / 3) * (h + gap), sel = i === 3, busy = brasaBusy.indexOf(i) > -1;
      s += r(x, y, w, h, sel ? "#b8432f" : "none", "rx='2'" + (sel ? "" : " stroke='" + fg + "' stroke-opacity='" + (busy ? ".1" : ".3") + "'")) +
        t(x + w / 2, y + h / 2 + 5, 14, fg, tm, MID + (busy ? " opacity='.25' text-decoration='line-through'" : "") + (sel ? " font-weight='700'" : ""));
    });
    return s;
  }
  function brasaStepper(x, y, fg) {
    return r(x, y, 44, 44, "none", "rx='2' stroke='" + fg + "' stroke-opacity='.3'") + t(x + 22, y + 29, 20, fg, "−", MID) +
      t(x + 78, y + 30, 20, fg, "2", MID + " font-weight='700'") +
      r(x + 112, y, 44, 44, "none", "rx='2' stroke='" + fg + "' stroke-opacity='.3'") + t(x + 134, y + 29, 20, fg, "+", MID);
  }

  // BRASA — бронь, компьютер
  var brasaBook = (function () {
    var fg = "#f2ebe3", red = "#b8432f", acc = "#d0634d", cal = "";
    ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].forEach(function (d, i) { cal += t(76 + i * 44, 372, 11, fg, d, MID + " opacity='.45'"); });
    for (var d = 1; d <= 31; d++) {
      var col = d % 7, row = Math.floor(d / 7), x = 76 + col * 44, y = 410 + row * 40, sel = d === 12;
      if (sel) cal += c(x, y - 5, 17, red);
      cal += t(x, y, 14, sel ? "#fff" : fg, d, MID + (d < 5 ? " opacity='.25'" : "") + (sel ? " font-weight='700'" : ""));
    }
    return doc(800, 900, "#141110",
      t(40, 36, 11, fg, "ВТ–ВС · 12:00–02:00", "letter-spacing='2' opacity='.6'") +
      t(400, 36, 11, fg, "МЕНЮ    ВИНО", MID + " letter-spacing='3' opacity='.6'") + t(462, 36, 11, acc, "БРОНЬ", "letter-spacing='3' font-weight='700'") +
      t(760, 36, 11, fg, "+7 495 000-00-00", END + " opacity='.6'") +
      r(40, 52, 720, 1, fg, "opacity='.15'") +
      st(40, 190, 96, fg, "Бронь") + st(340, 190, 96, acc, "стола", "font-style='italic'") +
      t(40, 236, 14, fg, "Столы на 2–8 гостей. Для компаний больше — позвоните нам.", "opacity='.6'") +
      r(40, 290, 340, 330, "#1d1917", "rx='4'") +
      st(60, 334, 24, fg, "Декабрь 2026") + t(360, 330, 14, fg, "‹    ›", END + " opacity='.5'") + cal +
      t(40, 668, 12, fg, "Москва, ул. Огненная, 7", "opacity='.55'") + t(40, 690, 12, fg, "Вт–Вс · 12:00–02:00", "opacity='.55'") +
      t(420, 306, 10, fg, "ВРЕМЯ", "letter-spacing='2' opacity='.5'") + brasaSlotGrid(420, 320, 104, 40, 14) +
      t(420, 498, 10, fg, "ГОСТИ", "letter-spacing='2' opacity='.5'") + brasaStepper(420, 512, fg) +
      t(420, 600, 10, fg, "ИМЯ", "letter-spacing='2' opacity='.5'") + r(420, 628, 340, 1, fg, "opacity='.35'") +
      t(420, 662, 10, fg, "ТЕЛЕФОН", "letter-spacing='2' opacity='.5'") + r(420, 690, 340, 1, fg, "opacity='.35'") +
      r(420, 716, 340, 52, red, "rx='2'") + t(590, 747, 13, "#fff", "Подтвердить: 12 декабря, 19:30", MID + " font-weight='700'") +
      r(40, 830, 720, 1, fg, "opacity='.15'") +
      t(40, 866, 11, fg, "BRASA © 2026", "opacity='.4'") + t(760, 866, 11, fg, "Москва, ул. Огненная, 7", END + " opacity='.4'")
    );
  })();

  // BRASA — бронь, телефон
  var brasaBookM = (function () {
    var fg = "#f2ebe3", red = "#b8432f", acc = "#d0634d", days = "";
    [["Чт", 10], ["Пт", 11], ["Сб", 12], ["Вс", 13], ["Пн", 14]].forEach(function (d, i) {
      var x = 20 + i * 72, sel = i === 2;
      days += r(x, 300, 62, 70, sel ? red : "none", "rx='2'" + (sel ? "" : " stroke='" + fg + "' stroke-opacity='.3'")) +
        t(x + 31, 326, 11, fg, d[0], MID + " opacity='.6'") + t(x + 31, 354, 20, fg, d[1], MID + " font-weight='700'");
    });
    return doc(390, 960, "#141110",
      t(20, 42, 13, fg, "← Brasa", "opacity='.7'") + t(370, 42, 12, acc, "Меню", END + " font-weight='700'") +
      r(20, 62, 350, 1, fg, "opacity='.15'") +
      st(20, 150, 64, fg, "Бронь") + st(20, 206, 64, acc, "стола", "font-style='italic'") +
      t(20, 236, 10, fg, "ГОСТИ", "letter-spacing='2' opacity='.5'") + brasaStepper(214, 216, fg) +
      t(20, 290, 10, fg, "ДЕКАБРЬ", "letter-spacing='2' opacity='.5'") + days +
      t(20, 410, 10, fg, "ВРЕМЯ", "letter-spacing='2' opacity='.5'") + brasaSlotGrid(20, 424, 110, 44, 10) +
      t(20, 618, 10, fg, "ИМЯ", "letter-spacing='2' opacity='.5'") + r(20, 646, 350, 1, fg, "opacity='.35'") +
      t(20, 680, 10, fg, "ТЕЛЕФОН", "letter-spacing='2' opacity='.5'") + r(20, 708, 350, 1, fg, "opacity='.35'") +
      r(20, 740, 350, 52, red, "rx='2'") + t(195, 771, 13, "#fff", "Подтвердить: 12 декабря, 19:30", MID + " font-weight='700'") +
      t(195, 822, 12, fg, "Для компаний больше 8 гостей — позвоните нам", MID + " opacity='.5'") +
      r(20, 880, 350, 1, fg, "opacity='.15'") +
      t(20, 920, 10, fg, "BRASA © 2026", "opacity='.4'") + t(370, 920, 10, fg, "+7 495 000-00-00", END + " opacity='.4'")
    );
  })();

  // stride. — главная, телефон
  var shagM = (function () {
    var ink = "#1b1838", vio = "#6b4eff", steps = "", checks = "";
    [["01", "Основы", "Композиция и цвет"], ["02", "Интерфейсы", "Figma и прототипы"], ["03", "Портфолио", "3 реальных проекта"], ["04", "Работа", "Помощь с наймом"]].forEach(function (s, i) {
      var y = 690 + i * 84, last = i === 3, fg = last ? "#fff" : ink;
      steps += r(16, y, 358, 72, last ? vio : "#fff", "rx='20'") +
        t(36, y + 46, 26, last ? "#fff" : vio, s[0], "font-weight='900'") +
        t(92, y + 32, 16, fg, s[1], "font-weight='800'") + t(92, y + 52, 12, fg, s[2], "opacity='.6'");
    });
    ["Все 120 уроков", "Личный наставник", "Проверка домашних заданий", "Сертификат и помощь с работой"].forEach(function (s, i) {
      var y = 1186 + i * 32;
      checks += c(46, y - 5, 10, "#b8f2d6") + "<path d='M41 " + (y - 5) + " l3.5 3.5 l7 -7' fill='none' stroke='" + ink + "' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>" + t(66, y, 14, "#fff", s);
    });
    return doc(390, 1480, "#f4f3fb",
      t(20, 46, 22, ink, "stride.", "font-weight='900' letter-spacing='-1'") +
      c(352, 38, 20, ink) + r(344, 33, 16, 2, "#fff") + r(344, 38, 16, 2, "#fff") + r(344, 43, 16, 2, "#fff") +
      r(16, 72, 358, 380, vio, "rx='28'") +
      r(36, 96, 130, 28, "#fff", "rx='14' fill-opacity='.18'") + t(101, 115, 11, "#fff", "Набор до 15.12", MID + " font-weight='600'") +
      t(36, 220, 34, "#fff", "Стань", "font-weight='800' letter-spacing='-1'") +
      t(36, 262, 34, "#fff", "веб-дизайнером", "font-weight='800' letter-spacing='-1'") +
      t(36, 304, 34, "#fff", "за 9 месяцев", "font-weight='800' letter-spacing='-1' opacity='.6'") +
      r(36, 372, 190, 52, "#fff", "rx='26'") + t(131, 403, 14, vio, "Начать бесплатно", MID + " font-weight='700'") +
      r(16, 466, 173, 160, "#ffd84d", "rx='24'") + t(36, 540, 48, ink, "4.9", "font-weight='900' letter-spacing='-2'") + t(36, 570, 12, ink, "средняя оценка курса", "opacity='.7'") + t(36, 604, 12, ink, "2 300 выпускников", "font-weight='700'") +
      r(201, 466, 173, 160, "#b8f2d6", "rx='24'") + t(221, 540, 48, ink, "120", "font-weight='900' letter-spacing='-2'") + t(221, 570, 12, ink, "уроков", "opacity='.7'") +
      c(240, 600, 14, ink) + "<path d='M236 594 l10 6 l-10 6z' fill='#b8f2d6'/>" +
      t(20, 668, 24, ink, "Как устроено обучение", "font-weight='800' letter-spacing='-.8'") +
      steps +
      r(16, 1050, 358, 340, ink, "rx='28'") +
      "<g transform='rotate(12 320 1090)'>" + c(320, 1090, 34, "#ffd84d") + t(320, 1097, 18, ink, "−30%", MID + " font-weight='900'") + "</g>" +
      t(36, 1090, 11, "#fff", "ТАРИФ «ПРОФИ»", "letter-spacing='2' opacity='.6' font-weight='600'") +
      t(36, 1150, 46, "#fff", "4 900 ₽", "font-weight='900' letter-spacing='-2'") + t(226, 1150, 15, "#fff", "/ мес", "opacity='.5'") +
      checks +
      r(36, 1316, 318, 52, "#ffd84d", "rx='26'") + t(195, 1348, 15, ink, "Записаться на курс", MID + " font-weight='700'") +
      r(45, 1412, 300, 50, ink, "rx='25'") + c(70, 1437, 4, "#ffd84d") +
      t(82, 1441, 12, "#fff", "Курсы", "font-weight='600'") + t(136, 1441, 12, "#fff", "Цены", "opacity='.6'") + t(180, 1441, 12, "#fff", "Отзывы", "opacity='.6'") +
      r(240, 1419, 98, 36, "#ffd84d", "rx='18'") + t(289, 1442, 12, ink, "Записаться", MID + " font-weight='700'")
    );
  })();

  // stride. — программа курса, общие данные
  var shagLessons = [["Композиция и сетки", "24 мин"], ["Цвет и контраст", "31 мин"], ["Типографика", "28 мин"], ["Иконки и иллюстрации", "19 мин"], ["Практика: афиша", "45 мин"], ["Разбор работ с наставником", "60 мин"]];
  var shagModules = [["02", "Интерфейсы в Figma", "5 недель · 24 урока"], ["03", "Прототипы и анимация", "4 недели · 20 уроков"], ["04", "Адаптивный дизайн", "5 недель · 22 урока"], ["05", "Дизайн-система", "4 недели · 16 уроков"], ["06", "Портфолио и работа", "6 недель · 20 уроков"]];
  function shagModuleOpen(x, y, w) {
    var ink = "#1b1838", vio = "#6b4eff", s = r(x, y, w, 330, "#fff", "rx='24'") +
      t(x + 22, y + 44, 22, vio, "01", "font-weight='900'") + t(x + 70, y + 38, 18, ink, "Основы дизайна", "font-weight='800'") +
      t(x + 70, y + 58, 12, ink, "4 недели · 18 уроков", "opacity='.55'") + t(x + w - 22, y + 46, 24, ink, "−", END);
    shagLessons.forEach(function (l, i) {
      var yy = y + 102 + i * 37;
      s += r(x + 22, yy - 24, w - 44, 1, ink, "opacity='.08'") +
        c(x + 34, yy - 5, 11, i === 4 ? "#ffd84d" : "#efecfb") + "<path d='M" + (x + 31) + " " + (yy - 10) + " l8 5 l-8 5z' fill='" + (i === 4 ? ink : vio) + "'/>" +
        t(x + 56, yy, 14, ink, l[0], i === 4 ? "font-weight='700'" : "") + t(x + w - 22, yy, 12, ink, l[1], END + " opacity='.5'");
    });
    return s;
  }
  function shagModuleRow(x, y, w, m) {
    var ink = "#1b1838";
    return r(x, y, w, 62, "#fff", "rx='20'") + t(x + 22, y + 40, 22, "#6b4eff", m[0], "font-weight='900' opacity='.45'") +
      t(x + 70, y + 30, 16, ink, m[1], "font-weight='800'") + t(x + 70, y + 49, 12, ink, m[2], "opacity='.55'") + t(x + w - 22, y + 39, 22, ink, "+", END + " opacity='.5'");
  }

  // stride. — программа, компьютер
  var shagProg = (function () {
    var ink = "#1b1838", vio = "#6b4eff", rows = "";
    shagModules.forEach(function (m, i) { rows += shagModuleRow(290, 566 + i * 74, 486, m); });
    return doc(800, 1000, "#f4f3fb",
      t(24, 58, 22, ink, "stride.", "font-weight='900' letter-spacing='-1'") +
      r(240, 30, 320, 48, ink, "rx='24'") + c(266, 54, 4, "#ffd84d") +
      t(278, 58, 11, "#fff", "Курсы", "font-weight='600'") + t(336, 58, 11, "#fff", "Цены", "opacity='.6'") + t(384, 58, 11, "#fff", "Отзывы", "opacity='.6'") +
      r(458, 36, 96, 36, "#ffd84d", "rx='18'") + t(506, 58, 11, ink, "Записаться", MID + " font-weight='700'") +
      t(24, 156, 44, ink, "Программа курса", "font-weight='800' letter-spacing='-1.5'") +
      t(24, 190, 15, ink, "9 месяцев · 6 модулей · 120 уроков", "opacity='.6'") +
      r(24, 220, 250, 330, vio, "rx='28'") +
      t(48, 266, 22, "#fff", "Веб-дизайнер", "font-weight='800'") +
      t(48, 306, 13, "#fff", "Старт 15 декабря", "opacity='.85'") + t(48, 330, 13, "#fff", "Онлайн, в своём темпе", "opacity='.85'") + t(48, 354, 13, "#fff", "Наставник и проверка ДЗ", "opacity='.85'") +
      r(48, 380, 202, 1, "#fff", "opacity='.25'") +
      t(48, 432, 34, "#fff", "4 900 ₽", "font-weight='900' letter-spacing='-1'") + t(48, 456, 12, "#fff", "в месяц, тариф «Профи»", "opacity='.6'") +
      r(48, 482, 202, 46, "#ffd84d", "rx='23'") + t(149, 511, 13, ink, "Записаться", MID + " font-weight='700'") +
      shagModuleOpen(290, 220, 486) + rows +
      t(24, 970, 12, ink, "stride. · Курсы · Блог · Контакты", "opacity='.5'")
    );
  })();

  // stride. — программа, телефон
  var shagProgM = (function () {
    var ink = "#1b1838", vio = "#6b4eff", rows = "";
    shagModules.forEach(function (m, i) { rows += shagModuleRow(16, 600 + i * 70, 358, m); });
    return doc(390, 1110, "#f4f3fb",
      t(20, 46, 13, ink, "← stride.", "font-weight='700' opacity='.7'") +
      c(352, 38, 20, ink) + r(344, 33, 16, 2, "#fff") + r(344, 38, 16, 2, "#fff") + r(344, 43, 16, 2, "#fff") +
      t(20, 118, 36, ink, "Программа", "font-weight='800' letter-spacing='-1.5'") + t(20, 158, 36, ink, "курса", "font-weight='800' letter-spacing='-1.5' opacity='.45'") +
      r(20, 180, 104, 32, "#b8f2d6", "rx='16'") + t(72, 201, 12, ink, "9 месяцев", MID + " font-weight='700'") +
      r(132, 180, 104, 32, "#ffd84d", "rx='16'") + t(184, 201, 12, ink, "6 модулей", MID + " font-weight='700'") +
      r(244, 180, 112, 32, "#fff", "rx='16'") + t(300, 201, 12, ink, "120 уроков", MID + " font-weight='700'") +
      shagModuleOpen(16, 240, 358) + rows +
      r(16, 970, 358, 54, vio, "rx='27'") + t(195, 1003, 15, "#fff", "Записаться на курс", MID + " font-weight='700'") +
      t(195, 1070, 11, ink, "stride. · Курсы · Блог · Контакты", MID + " opacity='.5'")
    );
  })();

  // bright. — общие части
  var belyiDocs = [["Анна К.", "Терапевт", P.doc1], ["Игорь Л.", "Ортодонт", P.doc2], ["Мария С.", "Имплантолог", P.doc3]];
  function belyiTimes(x0, y, w, gap) {
    var s = "";
    ["10:00", "12:30", "15:00", "17:30"].forEach(function (tm, i) {
      var x = x0 + i * (w + gap), on = i === 2;
      s += r(x, y, w, 32, on ? "#1f8f84" : "#eef5f4", "rx='16'") + t(x + w / 2, y + 21, 12, on ? "#fff" : "#10302e", tm, MID + " font-weight='600'");
    });
    return s;
  }

  // bright. — главная, телефон
  var belyiM = (function () {
    var ink = "#10302e", teal = "#1f8f84", week = "", rows = "", docs = "", y = 710;
    [["Пн", 9], ["Вт", 10], ["Ср", 11], ["Чт", 12], ["Пт", 13], ["Сб", 14], ["Вс", 15]].forEach(function (d, i) {
      var x = 50 + i * 48, sel = d[1] === 12;
      if (sel) week += r(x - 19, 426, 38, 54, teal, "rx='19'");
      week += t(x, 446, 10, sel ? "#fff" : ink, d[0], MID + " opacity='" + (sel ? "1" : ".5") + "'") + t(x, 470, 15, sel ? "#fff" : ink, d[1], MID + " font-weight='700'");
    });
    [["Лечение кариеса", "от 4 500 ₽"], ["Проф. гигиена", "6 900 ₽", 1], ["Имплантация", "от 38 000 ₽"], ["Отбеливание", "14 000 ₽"]].forEach(function (s) {
      rows += r(20, y, 350, 1, ink, "opacity='.12'") + t(20, y + 36, 16, ink, s[0], "font-weight='700'") +
        t(336, y + 36, 13, ink, s[1], END + " opacity='.6'") + t(370, y + 38, 20, teal, s[2] ? "−" : "+", END);
      if (s[2]) {
        rows += t(20, y + 68, 13, ink, "Ультразвук, Air Flow и полировка.", "opacity='.6'") + t(20, y + 88, 13, ink, "Около часа, без боли.", "opacity='.6'") +
          r(20, y + 104, 96, 28, "#e8f4f2", "rx='14'") + t(68, y + 123, 11, teal, "60 минут", MID + " font-weight='700'") +
          r(124, y + 104, 120, 28, "#e8f4f2", "rx='14'") + t(184, y + 123, 11, teal, "Без анестезии", MID + " font-weight='700'");
        y += 150;
      } else y += 56;
    });
    rows += r(20, y, 350, 1, ink, "opacity='.12'");
    belyiDocs.forEach(function (p, i) {
      var x = 20 + i * 162;
      docs += "<clipPath id='dm" + i + "'><rect x='" + x + "' y='1130' width='150' height='170' rx='16'/></clipPath>" +
        r(x, 1130, 150, 170, "#f1f7f6", "rx='16'") + photo(p[2], x, 1130, 150, 170, "clip-path='url(#dm" + i + ")'") +
        t(x, 1324, 15, ink, p[0], "font-weight='800'") + t(x, 1344, 12, ink, p[1], "opacity='.55'");
    });
    return doc(390, 1460, "#ffffff",
      r(0, 0, 390, 400, teal) +
      t(20, 48, 22, "#fff", "bright.", "font-weight='800' letter-spacing='-1'") +
      r(350, 33, 22, 2, "#fff") + r(350, 40, 22, 2, "#fff") + r(350, 47, 22, 2, "#fff") +
      t(20, 150, 40, "#fff", "Лечим зубы", "font-weight='800' letter-spacing='-1.5'") +
      t(20, 196, 40, "#fff", "без страха", "font-weight='800' letter-spacing='-1.5' opacity='.6'") +
      t(20, 232, 14, "#fff", "Седация, современное оборудование", "opacity='.8'") + t(20, 252, 14, "#fff", "и честные цены без сюрпризов.", "opacity='.8'") +
      t(20, 316, 28, "#fff", "12", "font-weight='800'") + t(20, 336, 11, "#fff", "лет работы", "opacity='.7'") +
      t(130, 316, 28, "#fff", "18", "font-weight='800'") + t(130, 336, 11, "#fff", "врачей", "opacity='.7'") +
      t(240, 316, 28, "#fff", "4.9", "font-weight='800'") + t(240, 336, 11, "#fff", "рейтинг", "opacity='.7'") +
      r(16, 370, 358, 270, "#ffffff", "rx='24' stroke='#dbe9e7'") +
      t(36, 406, 16, ink, "Запись онлайн", "font-weight='800'") + t(354, 406, 13, ink, "Ноябрь", END + " opacity='.5'") +
      week + belyiTimes(32, 500, 74, 8) +
      r(32, 552, 326, 50, teal, "rx='25'") + t(195, 582, 13, "#fff", "Записаться на 12 ноября, 15:00", MID + " font-weight='700'") +
      t(20, 692, 11, ink, "УСЛУГИ И ЦЕНЫ", "letter-spacing='2' font-weight='700' opacity='.5'") + rows +
      t(20, 1112, 11, ink, "ВРАЧИ", "letter-spacing='2' font-weight='700' opacity='.5'") + docs +
      r(0, 1380, 390, 80, ink) + t(20, 1418, 12, "#fff", "bright. — ул. Тихая, 3", "opacity='.7'") + t(20, 1438, 12, "#fff", "Ежедневно 9:00–21:00", "opacity='.7'")
    );
  })();

  // bright. — страница врача, общие части
  function belyiDays(x0, y, w, gap) {
    var s = "";
    [["Чт", "12 ноя"], ["Пт", "13 ноя"], ["Сб", "14 ноя"]].forEach(function (d, i) {
      var x = x0 + i * (w + gap), on = i === 0;
      s += r(x, y, w, 44, on ? "#10302e" : "#fff", "rx='12'" + (on ? "" : " stroke='#dbe9e7'")) +
        t(x + w / 2, y + 19, 10, on ? "#fff" : "#10302e", d[0], MID + " opacity='.6'") + t(x + w / 2, y + 36, 13, on ? "#fff" : "#10302e", d[1], MID + " font-weight='700'");
    });
    return s;
  }
  var belyiDocServices = [["Консультация", "1 500 ₽"], ["Лечение кариеса", "от 4 500 ₽"], ["Лечение каналов", "от 9 000 ₽"], ["Реставрация зуба", "от 7 000 ₽"]];
  function belyiTags(x, y, ink, teal) {
    var s = "", xx = x;
    ["Лечение кариеса", "Реставрация", "Каналы"].forEach(function (g) {
      var w = g.length * 7 + 26;
      s += r(xx, y, w, 30, "#e8f4f2", "rx='15'") + t(xx + w / 2, y + 20, 12, teal, g, MID + " font-weight='700'");
      xx += w + 8;
    });
    return s;
  }

  // bright. — врач, компьютер
  var belyiDoc = (function () {
    var ink = "#10302e", teal = "#1f8f84", rows = "";
    belyiDocServices.forEach(function (s, i) {
      var y = 676 + i * 56;
      rows += r(40, y, 720, 1, ink, "opacity='.12'") + t(40, y + 36, 17, ink, s[0], "font-weight='700'") + t(760, y + 36, 15, ink, s[1], END + " opacity='.6'");
    });
    rows += r(40, 900, 720, 1, ink, "opacity='.12'");
    return doc(800, 1000, "#ffffff",
      "<defs><clipPath id='dd'><rect x='40' y='130' width='300' height='400' rx='24'/></clipPath></defs>" +
      t(40, 54, 22, teal, "bright.", "font-weight='800' letter-spacing='-1'") +
      t(330, 50, 12, ink, "Услуги", "opacity='.6'") + t(392, 50, 12, ink, "Врачи", "font-weight='700'") + t(448, 50, 12, ink, "Цены", "opacity='.6'") + t(498, 50, 12, ink, "Контакты", "opacity='.6'") +
      r(640, 30, 120, 34, ink, "rx='17'") + t(700, 52, 12, "#fff", "Записаться", MID + " font-weight='700'") +
      r(0, 84, 800, 1, ink, "opacity='.08'") +
      t(40, 114, 12, ink, "Врачи  /  Анна К.", "opacity='.5'") +
      r(40, 130, 300, 400, "#f1f7f6", "rx='24'") + photo(P.doc1, 40, 130, 300, 400, "clip-path='url(#dd)'") +
      t(380, 172, 38, ink, "Анна Ковалёва", "font-weight='800' letter-spacing='-1.2'") +
      t(380, 202, 15, ink, "Терапевт · стаж 9 лет", "opacity='.6'") + t(760, 202, 14, teal, "★ 4.9", END + " font-weight='700'") +
      t(380, 246, 15, ink, "Лечит кариес и его осложнения, восстанавливает", "opacity='.75'") +
      t(380, 268, 15, ink, "зубы после травм. Объясняет каждый шаг", "opacity='.75'") +
      t(380, 290, 15, ink, "до начала лечения.", "opacity='.75'") +
      belyiTags(380, 312, ink, teal) +
      r(380, 366, 380, 164, "#f1f7f6", "rx='20'") +
      t(400, 396, 15, ink, "Ближайшие окна", "font-weight='800'") +
      belyiDays(400, 410, 104, 10) + belyiTimes(400, 466, 80, 7) +
      r(380, 548, 380, 50, teal, "rx='25'") + t(570, 578, 13, "#fff", "Записаться к врачу на 12 ноября, 15:00", MID + " font-weight='700'") +
      t(40, 652, 11, ink, "УСЛУГИ ВРАЧА", "letter-spacing='2' font-weight='700' opacity='.5'") + rows +
      r(0, 940, 800, 60, ink) + t(40, 975, 12, "#fff", "bright. — Москва, ул. Тихая, 3", "opacity='.7'") + t(760, 975, 12, "#fff", "Ежедневно 9:00–21:00", END + " opacity='.7'")
    );
  })();

  // bright. — врач, телефон
  var belyiDocM = (function () {
    var ink = "#10302e", teal = "#1f8f84", rows = "";
    belyiDocServices.slice(0, 3).forEach(function (s, i) {
      var y = 966 + i * 54;
      rows += r(20, y, 350, 1, ink, "opacity='.12'") + t(20, y + 34, 15, ink, s[0], "font-weight='700'") + t(370, y + 34, 13, ink, s[1], END + " opacity='.6'");
    });
    rows += r(20, 1128, 350, 1, ink, "opacity='.12'");
    return doc(390, 1170, "#ffffff",
      "<defs><clipPath id='ddm'><rect x='16' y='104' width='358' height='300' rx='24'/></clipPath></defs>" +
      t(20, 48, 20, teal, "bright.", "font-weight='800' letter-spacing='-1'") +
      r(262, 26, 108, 32, ink, "rx='16'") + t(316, 47, 11, "#fff", "Записаться", MID + " font-weight='700'") +
      t(20, 88, 13, ink, "← Врачи", "opacity='.55'") +
      r(16, 104, 358, 300, "#f1f7f6", "rx='24'") + photo(P.doc1, 16, 104, 358, 300, "clip-path='url(#ddm)'") +
      t(20, 450, 28, ink, "Анна Ковалёва", "font-weight='800' letter-spacing='-1'") +
      t(20, 476, 14, ink, "Терапевт · стаж 9 лет", "opacity='.6'") + t(370, 476, 14, teal, "★ 4.9", END + " font-weight='700'") +
      t(20, 512, 14, ink, "Лечит кариес и его осложнения,", "opacity='.75'") +
      t(20, 533, 14, ink, "восстанавливает зубы после травм.", "opacity='.75'") +
      t(20, 554, 14, ink, "Объясняет каждый шаг до лечения.", "opacity='.75'") +
      belyiTags(20, 574, ink, teal) +
      r(16, 630, 358, 270, "#f1f7f6", "rx='22'") +
      t(36, 664, 15, ink, "Ближайшие окна", "font-weight='800'") +
      belyiDays(36, 680, 100, 9) + belyiTimes(36, 740, 74, 8) +
      r(36, 800, 318, 50, teal, "rx='25'") + t(195, 830, 13, "#fff", "Записаться на 12 ноября, 15:00", MID + " font-weight='700'") +
      t(20, 950, 11, ink, "УСЛУГИ ВРАЧА", "letter-spacing='2' font-weight='700' opacity='.5'") + rows
    );
  })();

  /* ================= Миниатюры для карточек первого экрана (120×120) ================= */
  var thumbSite = doc(120, 120, "#141417",
    r(14, 20, 92, 80, "#f4f3ef", "rx='8'") +
    c(23, 29, 2.5, "#121212", "opacity='.3'") + c(31, 29, 2.5, "#121212", "opacity='.3'") + c(39, 29, 2.5, "#121212", "opacity='.3'") +
    r(22, 42, 46, 7, "#121212", "rx='2'") + r(22, 53, 34, 7, "#121212", "rx='2' opacity='.3'") +
    r(22, 68, 24, 9, "#121212", "rx='4.5'") +
    r(74, 40, 24, 40, "#e8934a", "rx='4'") +
    r(22, 86, 76, 6, "#121212", "rx='3' opacity='.12'")
  );

  var thumbBot = doc(120, 120, "#0f1419",
    "<defs><radialGradient id='tb' cx='.8' cy='0' r='.9'><stop offset='0' stop-color='#54a9eb' stop-opacity='.35'/><stop offset='1' stop-color='#54a9eb' stop-opacity='0'/></radialGradient></defs>" +
    r(0, 0, 120, 120, "url(#tb)") +
    r(12, 18, 66, 20, "#1e2a36", "rx='10'") +
    r(12, 44, 26, 14, "#54a9eb", "rx='5' fill-opacity='.28'") + r(42, 44, 26, 14, "#54a9eb", "rx='5' fill-opacity='.28'") +
    r(52, 66, 56, 20, "#2b5278", "rx='10'") +
    r(12, 92, 74, 18, "#1e2a36", "rx='9'")
  );

  var thumbInfo = doc(120, 120, "#121110",
    "<defs><linearGradient id='ti' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#f4b27a'/><stop offset='1' stop-color='#f4b27a' stop-opacity='.25'/></linearGradient></defs>" +
    c(34, 34, 16, "none", "stroke='#f4b27a' stroke-width='7' stroke-dasharray='70 31' transform='rotate(-90 34 34)'") +
    r(62, 26, 44, 6, "#f5f5f6", "rx='3' opacity='.5'") + r(62, 38, 24, 6, "#f5f5f6", "rx='3' opacity='.25'") +
    [26, 40, 34, 52, 64].map(function (h, i) { return r(16 + i * 19, 104 - h, 13, h, "url(#ti)", "rx='3'" + (i < 4 ? " opacity='.5'" : "")); }).join("")
  );

  /* ================= Инфографика (600×800, формат 3:4) ================= */

  // 1. Карточка товара для маркетплейса — наушники: фото, выноски к деталям, строка цифр снизу
  var igSound = (function () {
    var ink = "#1b1f24", bg = "#b8b8b3", stats = "";
    function callout(dx, dy, lx, ly, title, sub) {
      return "<polyline points='" + dx + "," + dy + " " + (lx - 26) + "," + ly + " " + (lx - 8) + "," + ly + "' fill='none' stroke='" + ink + "' stroke-width='1.5'/>" +
        c(dx, dy, 6, "#fff", "stroke='" + ink + "' stroke-width='2'") +
        t(lx, ly + 6, 17, ink, title, "font-weight='800'") + t(lx, ly + 27, 13, ink, sub, "opacity='.65'");
    }
    [["30 ч", "без подзарядки"], ["10 мин", "зарядки = 3 часа"], ["250 г", "вес"]].forEach(function (k, i) {
      var x = 40 + i * 186;
      stats += (i ? r(x - 20, 690, 1, 64, ink, "opacity='.25'") : "") +
        t(x, 726, 34, ink, k[0], "font-weight='800' letter-spacing='-1'") + t(x, 752, 13, ink, k[1], "opacity='.65'");
    });
    return doc(600, 800, bg,
      "<defs><linearGradient id='f' x1='0' y1='0' x2='0' y2='1'>" +
        "<stop offset='0' stop-color='" + bg + "'/><stop offset='.3' stop-color='" + bg + "' stop-opacity='0'/>" +
        "<stop offset='.75' stop-color='" + bg + "' stop-opacity='0'/><stop offset='1' stop-color='" + bg + "'/></linearGradient></defs>" +
      photo(P.headphones, -50, 190, 650, 455) + r(0, 190, 600, 455, "url(#f)") +
      t(40, 68, 14, ink, "SONIQ", "font-weight='800' letter-spacing='3' opacity='.75'") +
      r(468, 46, 92, 32, ink, "rx='16'") + t(514, 67, 12, "#fff", "НОВИНКА", MID + " font-weight='700' letter-spacing='1'") +
      t(40, 132, 44, ink, "Беспроводные", "font-weight='800' letter-spacing='-1.5'") +
      t(40, 182, 44, ink, "наушники", "font-weight='800' letter-spacing='-1.5'") +
      t(40, 216, 17, ink, "Для работы, дороги и отдыха", "opacity='.65'") +
      callout(378, 408, 428, 340, "Складные", "убираются в чехол") +
      callout(400, 525, 428, 525, "Шумоподавление", "тишина в метро") +
      r(40, 668, 520, 1, ink, "opacity='.25'") + stats
    );
  })();

  // 2. Маршрут путешествия: извилистая дорога с остановками по дням
  var igRoute = (function () {
    var acc = "#ffcc4d", fg = "#ffffff", stops = "", waves = "";
    var pts = [
      [110, 730, "Иркутск", "дни 1–2 · город и набережная"],
      [470, 625, "Листвянка", "день 3 · смотровая и рынок"],
      [130, 520, "Ольхон", "день 4 · паром на остров"],
      [450, 415, "Мыс Хобой", "день 5 · север острова"],
      [150, 310, "Скала Шаманка", "день 6 · закат у Хужира"]
    ];
    pts.forEach(function (p, i) {
      var left = p[0] < 300, lx = left ? p[0] + 34 : p[0] - 34, anchor = left ? "" : END + " ";
      stops += c(p[0], p[1], 26, acc, "opacity='.18'") + c(p[0], p[1], 17, acc) +
        t(p[0], p[1] + 6, 16, "#0b2f45", i + 1, MID + " font-weight='800'") +
        t(lx, p[1] - 2, 20, fg, p[2], anchor + "font-weight='800' letter-spacing='-.3'") +
        t(lx, p[1] + 20, 13, fg, p[3], anchor + "opacity='.7'");
    });
    for (var i = 0; i < 6; i++) waves += "<path d='M-20 " + (330 + i * 90) + " q 40 -12 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0' fill='none' stroke='#fff' stroke-opacity='.05' stroke-width='2'/>";
    return doc(600, 800, "#0b3a5b",
      "<defs><linearGradient id='bk' x1='0' y1='0' x2='.6' y2='1'><stop offset='0' stop-color='#0b2f4a'/><stop offset='1' stop-color='#0e6f7c'/></linearGradient></defs>" +
      r(0, 0, 600, 800, "url(#bk)") + waves +
      t(40, 66, 13, fg, "ТУРКЛУБ «ВЕРШИНА»", "letter-spacing='3' font-weight='700' opacity='.6'") +
      t(40, 140, 72, fg, "Байкал", "font-weight='900' letter-spacing='-3'") +
      t(44, 186, 34, acc, "за 7 дней", "font-weight='800' letter-spacing='-1'") +
      t(40, 222, 16, fg, "Маршрут по главным местам озера", "opacity='.65'") +
      "<path d='M110 730 C 110 680, 470 700, 470 625 S 130 590, 130 520 S 450 480, 450 415 S 150 380, 150 310' fill='none' stroke='#fff' stroke-opacity='.85' stroke-width='3' stroke-dasharray='2 10' stroke-linecap='round'/>" +
      stops +
      t(560, 778, 13, fg, "день 7 — обратно в Иркутск", END + " opacity='.6'")
    );
  })();

  // 4. Пост для соцсетей — фото на фоне, слева лента шагов с крупными номерами
  var igPost = (function () {
    var ink = "#1d2b24", acc = "#2f6b45", bg = "#b4bfc4", steps = "";
    [["Свет", "без прямого солнца"], ["Полив", "когда почва сухая"], ["Влажность", "протирайте листья"], ["Опора", "подвяжите стебель"]].forEach(function (s, i) {
      var y = 300 + i * 116;
      steps += t(40, y + 26, 30, acc, "0" + (i + 1), "font-weight='800' letter-spacing='-1'") +
        t(100, y + 4, 21, ink, s[0], "font-weight='800'") + t(100, y + 28, 15, ink, s[1], "opacity='.7'") +
        (i < 3 ? r(57, y + 44, 2, 56, acc, "opacity='.35'") : "");
    });
    return doc(600, 800, bg,
      "<defs><linearGradient id='h' x1='0' y1='0' x2='1' y2='0'><stop offset='0' stop-color='" + bg + "'/><stop offset='1' stop-color='" + bg + "' stop-opacity='0'/></linearGradient></defs>" +
      photo(P.monstera, 260, 0, 600, 800) + r(260, 0, 60, 800, "url(#h)") +
      t(40, 66, 13, ink, "ЗЕЛЕНЬ · ДОМАШНИЕ РАСТЕНИЯ", "letter-spacing='2' font-weight='700' opacity='.6'") +
      t(40, 132, 40, ink, "Как ухаживать", "font-weight='800' letter-spacing='-1.5'") +
      t(40, 178, 40, acc, "за монстерой", "font-weight='800' letter-spacing='-1.5'") +
      r(40, 204, 140, 34, acc, "rx='17'") + t(110, 227, 14, "#fff", "4 простых шага", MID + " font-weight='700'") +
      steps +
      t(40, 772, 13, ink, "Сохраните, чтобы не забыть", "opacity='.55'")
    );
  })();

  // 3. Отчёт: показатели, график по месяцам и диаграмма
  var igReport = (function () {
    var fg = "#f5f5f6", acc = "#e8934a", kpi = "", bars = "", donut = "", legend = "";
    [["48 тыс.", "гостей за год"], ["320", "чашек в день"], ["12", "сортов зерна"]].forEach(function (k, i) {
      var x = 40 + i * 180;
      kpi += r(x, 200, 160, 108, "#1a1d24", "rx='16'") + t(x + 18, 250, 32, fg, k[0], "font-weight='800' letter-spacing='-1'") + t(x + 18, 280, 14, fg, k[1], "opacity='.55'");
    });
    var hs = [40, 44, 52, 58, 62, 70, 78, 74, 66, 60, 64, 92], m = "ЯФМАМИИАСОНД";
    hs.forEach(function (h, i) {
      var x = 44 + i * 43, bh = h * 1.6, peak = i === 11;
      bars += r(x, 540 - bh, 30, bh, peak ? acc : "#2c303a", "rx='6'") + t(x + 15, 564, 11, fg, m[i], MID + " opacity='.45'");
    });
    var C = 2 * Math.PI * 66, off = 0;
    [["Капучино", 40, acc], ["Латте", 30, "#6c8cff"], ["Эспрессо", 18, "#d9d9dc"], ["Другое", 12, "#4a4f5c"]].forEach(function (d, i) {
      var len = C * d[1] / 100;
      donut += c(130, 706, 66, "none", "stroke='" + d[2] + "' stroke-width='26' stroke-dasharray='" + (len - 3).toFixed(1) + " " + (C - len + 3).toFixed(1) + "' stroke-dashoffset='" + (-off).toFixed(1) + "' transform='rotate(-90 130 706)'");
      off += len;
      var y = 662 + i * 34;
      legend += c(262, y - 5, 7, d[2]) + t(280, y, 16, fg, d[0]) + t(560, y, 16, fg, d[1] + "%", END + " font-weight='700'");
    });
    return doc(600, 800, "#0f1115",
      "<defs><radialGradient id='r3' cx='1' cy='0' r='.8'><stop offset='0' stop-color='#e8934a' stop-opacity='.22'/><stop offset='1' stop-color='#e8934a' stop-opacity='0'/></radialGradient></defs>" +
      r(0, 0, 600, 800, "url(#r3)") +
      t(40, 70, 13, fg, "КОФЕЙНЯ «ЗЕРНО»", "letter-spacing='3' font-weight='700' opacity='.6'") +
      t(40, 132, 46, fg, "Итоги года", "font-weight='800' letter-spacing='-1.5'") +
      t(40, 170, 17, fg, "Гости, продажи и любимые напитки", "opacity='.55'") +
      kpi +
      t(40, 360, 12, fg, "ПРОДАЖИ ПО МЕСЯЦАМ", "letter-spacing='2' font-weight='700' opacity='.5'") +
      t(560, 382, 12, acc, "декабрь — пик", END + " font-weight='700'") + bars +
      t(40, 612, 12, fg, "ЛЮБИМЫЕ НАПИТКИ", "letter-spacing='2' font-weight='700' opacity='.5'") +
      donut + legend
    );
  })();

  var toUrl = function (s) { return URL.createObjectURL(new Blob([s], { type: "image/svg+xml;charset=utf-8" })); };

  window.CONCEPTS = {
    thumbs: { site: toUrl(thumbSite), bot: toUrl(thumbBot), info: toUrl(thumbInfo) },
    works: [
      { title: "LUNA", kind: "Ювелирный магазин · живой сайт", src: toUrl(luna), live: "luna/index.html",
        task: "Интернет-магазин украшений: показать изделия дорого и дать купить без лишних шагов.",
        solution: "Работающий магазин: каталог с фильтром и сортировкой, страница товара с выбором размера, корзина и оформление заказа." },
      { title: "BRASA", kind: "Ресторан · меню и бронь", src: toUrl(brasa),
        pages: [{ name: "Главная", desktop: toUrl(brasa), phone: toUrl(brasaM) }, { name: "Бронь", desktop: toUrl(brasaBook), phone: toUrl(brasaBookM) }],
        task: "Гости хотят посмотреть меню и забронировать стол, не звоня в ресторан.",
        solution: "Главная с атмосферой и меню, отдельная страница брони: дата, свободное время, число гостей и контакты." },
      { title: "stride.", kind: "Онлайн-школа · запись на курс", src: toUrl(shag),
        pages: [{ name: "Главная", desktop: toUrl(shag), phone: toUrl(shagM) }, { name: "Программа", desktop: toUrl(shagProg), phone: toUrl(shagProgM) }],
        task: "Быстро объяснить, как устроен курс и что входит в обучение.",
        solution: "Главная разбита на понятные блоки, а программа — на модули, которые раскрываются до списка уроков." },
      { title: "bright.", kind: "Стоматология · онлайн-запись", src: toUrl(belyi),
        pages: [{ name: "Главная", desktop: toUrl(belyi), phone: toUrl(belyiM) }, { name: "Врач", desktop: toUrl(belyiDoc), phone: toUrl(belyiDocM) }],
        task: "Чтобы пациенты записывались сами, без звонка.",
        solution: "Запись сразу на первом экране, услуги с ценами и страница каждого врача с ближайшими свободными окнами." }
    ],
    infographics: [
      { title: "Карточка товара", kind: "Наушники · для маркетплейса", src: toUrl(igSound) },
      { title: "Маршрут", kind: "Путешествие · схема по дням", src: toUrl(igRoute) },
      { title: "Отчёт", kind: "Итоги года · графики и цифры", src: toUrl(igReport) },
      { title: "Пост для соцсетей", kind: "Инструкция в 4 шага", src: toUrl(igPost) }
    ]
  };
})();
