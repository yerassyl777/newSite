// ===== Переводы =====
const T = {
  ru: {
    nav_halls:'Залы', nav_food:'Меню', nav_gallery:'Галерея', nav_calc:'Расчёт', nav_book:'Бронь', nav_contacts:'Контакты',
    hero_sub:'Той-хана в Алматы',
    hero_h1:'Той, о котором будут говорить годами',
    hero_lead:'Свадьбы, юбилеи, беташар, сүндет той. Зал и кухню берём на себя — вы встречаете гостей.',
    btn_calc:'Рассчитать стоимость', btn_book:'Забронировать',
    st1:'гостей в большом зале', st2:'зала', st3:'вида меню',
    halls_h:'Наши залы', halls_sub:'Выберите зал под количество гостей.',
    hn1:'Малый зал', hn2:'Большой зал', cap1:'до 90 гостей', cap2:'до 240 гостей',
    hd1:'Уютный зал для камерных праздников: беташар, сүндет той, семейные торжества.',
    hd2:'Просторный зал для больших свадеб и юбилеев.',
    food_h:'Меню', food_sub:'Три варианта меню на выбор.',
    perg:'/ гость', from150:'от 150 до 240 гостей',
    m1n:'Меню «Ас»', m2n:'Меню 2', m3n:'Меню 3',
    m1l:['3 вида салата','3 вида холодных закусок','Бешбармак (мясо конины), плов','Хлебная корзина (бауырсак, шелпек)','Конфеты','Фрукты','Сухофрукты','Курт, иримшик','Булочки','Чак-чак','Чай','Вода'],
    m2l:['4 вида салата','3 вида холодных закусок','2 вида горячих блюд','Хлебная корзина','Конфеты и пирожные','Фрукты','Чай в ассортименте','Напитки: вода, морс, Coca-Cola'],
    m3l:['3 вида салата','4 вида холодных закусок','2 вида горячих блюд','Хлебная корзина','Самса, бауырсаки','Конфеты и пирожные','Фрукты','Чай в ассортименте','Напитки','Спиртные напитки'],
    own2:'От вас: спиртные напитки', own3:'От вас: только хорошее настроение',
    gal_h:'Галерея', gal_sub:'Так проходят праздники в Royal Rose.',
    calc_h:'Сколько стоит ваш той', calc_sub:'Расчёт по меню. Аренду зала и доп. услуги уточняйте у менеджера.',
    l_hall:'Зал', l_menu:'Меню', l_guests:'Гостей',
    hall1:'Малый зал — до 90 гостей', hall2:'Большой зал — до 240 гостей',
    mo1:'Ас — 9 500 ₸ / гость', mo2:'Меню 2 — 15 500 ₸ / гость (от 150)', mo3:'Меню 3 — 19 500 ₸ / гость (от 150)',
    total:'Итого за меню',
    book_h:'Забронировать', book_sub:'Оставьте данные — заявка откроется в WhatsApp.',
    ph_name:'Ваше имя', ph_phone:'Телефон', btn_send:'Забронировать в WhatsApp',
    err_fill:'Заполните имя, телефон и дату.',
    cont_h:'Контакты', btn_map:'Открыть в 2ГИС',
    wa_text:'Здравствуйте! Хочу забронировать той-хану Royal Rose.', w_name:'Имя', w_phone:'Телефон', w_date:'Дата', w_guests:'Гостей', w_sum:'Сумма за меню'
  },
  kz: {
    nav_halls:'Залдар', nav_food:'Мәзір', nav_gallery:'Галерея', nav_calc:'Есептеу', nav_book:'Брондау', nav_contacts:'Байланыс',
    hero_sub:'Алматыдағы той-хана',
    hero_h1:'Жылдар бойы айтылатын той',
    hero_lead:'Үйлену тойы, мерейтой, беташар, сүндет той. Зал мен асханаға өзіміз жауап береміз — сіз қонақтарды қарсы аласыз.',
    btn_calc:'Құнын есептеу', btn_book:'Брондау',
    st1:'үлкен залдағы қонақ', st2:'зал', st3:'мәзір түрі',
    halls_h:'Біздің залдар', halls_sub:'Қонақ санына қарай залды таңдаңыз.',
    hn1:'Шағын зал', hn2:'Үлкен зал', cap1:'90 қонаққа дейін', cap2:'240 қонаққа дейін',
    hd1:'Шағын мерекелерге арналған жайлы зал: беташар, сүндет той, отбасылық мерекелер.',
    hd2:'Үлкен той мен мерейтойға арналған кең зал.',
    food_h:'Мәзір', food_sub:'Таңдауға үш мәзір нұсқасы.',
    perg:'/ қонақ', from150:'150-ден 240 қонаққа дейін',
    m1n:'«Ас» мәзірі', m2n:'2-мәзір', m3n:'3-мәзір',
    m1l:['3 түрлі салат','3 түрлі суық тағам','Бешбармақ (жылқы еті), палау','Нан себеті (бауырсақ, шелпек)','Кәмпиттер','Жемістер','Кептірілген жемістер','Құрт, ірімшік','Тоқаш','Шәкшәк','Шай','Су'],
    m2l:['4 түрлі салат','3 түрлі суық тағам','2 түрлі ыстық тағам','Нан себеті','Кәмпит пен тәттілер','Жемістер','Әртүрлі шай','Сусындар: су, морс, Coca-Cola'],
    m3l:['3 түрлі салат','4 түрлі суық тағам','2 түрлі ыстық тағам','Нан себеті','Самса, бауырсақ','Кәмпит пен тәттілер','Жемістер','Әртүрлі шай','Сусындар','Алкогольді сусындар'],
    own2:'Сізден: алкогольді сусындар', own3:'Сізден: тек жақсы көңіл-күй',
    gal_h:'Галерея', gal_sub:'Royal Rose-та мереке осылай өтеді.',
    calc_h:'Тойыңыз қанша тұрады', calc_sub:'Мәзір бойынша есеп. Зал жалдау мен қосымша қызметті менеджерден нақтылаңыз.',
    l_hall:'Зал', l_menu:'Мәзір', l_guests:'Қонақ саны',
    hall1:'Шағын зал — 90 қонаққа дейін', hall2:'Үлкен зал — 240 қонаққа дейін',
    mo1:'Ас — 9 500 ₸ / қонақ', mo2:'2-мәзір — 15 500 ₸ / қонақ (150-ден)', mo3:'3-мәзір — 19 500 ₸ / қонақ (150-ден)',
    total:'Мәзір бойынша барлығы',
    book_h:'Брондау', book_sub:'Деректерді қалдырыңыз — өтінім WhatsApp-та ашылады.',
    ph_name:'Атыңыз', ph_phone:'Телефон', btn_send:'WhatsApp-та брондау',
    err_fill:'Аты, телефон және күнді толтырыңыз.',
    cont_h:'Байланыс', btn_map:'2ГИС-те ашу',
    wa_text:'Сәлеметсіз бе! Royal Rose той-ханасын брондағым келеді.', w_name:'Аты', w_phone:'Телефон', w_date:'Күні', w_guests:'Қонақ саны', w_sum:'Мәзір сомасы'
  },
  en: {
    nav_halls:'Halls', nav_food:'Menu', nav_gallery:'Gallery', nav_calc:'Calculator', nav_book:'Booking', nav_contacts:'Contacts',
    hero_sub:'Banquet hall in Almaty',
    hero_h1:'A celebration people will talk about for years',
    hero_lead:'Weddings, anniversaries, family celebrations. We take care of the hall and the kitchen — you welcome your guests.',
    btn_calc:'Calculate the cost', btn_book:'Book now',
    st1:'guests in the large hall', st2:'halls', st3:'menu options',
    halls_h:'Our halls', halls_sub:'Choose the hall for your number of guests.',
    hn1:'Small hall', hn2:'Large hall', cap1:'up to 90 guests', cap2:'up to 240 guests',
    hd1:'A cozy hall for intimate celebrations: betashar, sundet toy, family events.',
    hd2:'A spacious hall for big weddings and anniversaries.',
    food_h:'Menu', food_sub:'Three menu options to choose from.',
    perg:'/ guest', from150:'from 150 to 240 guests',
    m1n:'“As” menu', m2n:'Menu 2', m3n:'Menu 3',
    m1l:['3 types of salad','3 types of cold appetizers','Beshbarmak (horse meat), plov','Bread basket (baursak, shelpek)','Sweets','Fruits','Dried fruits','Kurt, irimshik','Buns','Chak-chak','Tea','Water'],
    m2l:['4 types of salad','3 types of cold appetizers','2 hot dishes','Bread basket','Sweets and pastries','Fruits','Assorted tea','Drinks: water, mors, Coca-Cola'],
    m3l:['3 types of salad','4 types of cold appetizers','2 hot dishes','Bread basket','Samsa, baursak','Sweets and pastries','Fruits','Assorted tea','Drinks','Alcoholic drinks'],
    own2:'From you: alcoholic drinks', own3:'From you: just a good mood',
    gal_h:'Gallery', gal_sub:'This is how celebrations look at Royal Rose.',
    calc_h:'How much will your event cost', calc_sub:'Menu-based estimate. Hall rental and extra services are confirmed by the manager.',
    l_hall:'Hall', l_menu:'Menu', l_guests:'Guests',
    hall1:'Small hall — up to 90 guests', hall2:'Large hall — up to 240 guests',
    mo1:'As — 9 500 ₸ / guest', mo2:'Menu 2 — 15 500 ₸ / guest (from 150)', mo3:'Menu 3 — 19 500 ₸ / guest (from 150)',
    total:'Menu total',
    book_h:'Book now', book_sub:'Leave your details — the request opens in WhatsApp.',
    ph_name:'Your name', ph_phone:'Phone', btn_send:'Book via WhatsApp',
    err_fill:'Fill in your name, phone and date.',
    cont_h:'Contacts', btn_map:'Open in 2GIS',
    wa_text:'Hello! I would like to book Royal Rose banquet hall.', w_name:'Name', w_phone:'Phone', w_date:'Date', w_guests:'Guests', w_sum:'Menu total'
  }
};

let lang = 'ru';
try { lang = localStorage.getItem('lang') || 'ru'; } catch (e) {}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l === 'kz' ? 'kk' : l;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = T[l][el.dataset.i18n]);
  document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = T[l][el.dataset.i18nPh]);
  document.querySelectorAll('[data-list]').forEach(ul => ul.innerHTML = T[l][ul.dataset.list].map(i => `<li>${i}</li>`).join(''));
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  document.getElementById('err').textContent = '';
  try { localStorage.setItem('lang', l); } catch (e) {}
}
document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => setLang(b.dataset.lang));

// ===== Меню сайта =====
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
window.addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 50));
document.getElementById('burger').onclick = () => menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

// ===== Счётчики =====
document.querySelectorAll('[data-n]').forEach(el => {
  const end = +el.dataset.n;
  const step = Math.max(1, Math.round(end / 40));
  let cur = 0;
  const t = setInterval(() => {
    cur = Math.min(end, cur + step);
    el.textContent = cur;
    if (cur === end) clearInterval(t);
  }, 30);
});

// ===== Калькулятор =====
const hall = document.getElementById('hall');
const menuType = document.getElementById('menuType');
const guests = document.getElementById('guests');
const total = document.getElementById('total');

function calc() {
  const premium = +menuType.value > 9500;       // меню 2 и 3 — от 150 гостей
  guests.min = premium ? 150 : 30;
  guests.max = hall.value;                       // 90 или 240
  if (+guests.value > +guests.max) guests.value = guests.max;
  if (+guests.value < +guests.min) guests.value = guests.min;
  document.getElementById('gv').textContent = guests.value;
  total.textContent = (+menuType.value * +guests.value).toLocaleString('ru-RU') + ' ₸';
}
hall.addEventListener('change', () => { if (+hall.value === 90) menuType.selectedIndex = 0; calc(); });
menuType.addEventListener('change', () => { if (+menuType.value > 9500) hall.selectedIndex = 1; calc(); });
guests.addEventListener('input', calc);

// ===== Бронь через WhatsApp =====
const WA_NUMBER = '77081914150';
const dateInput = document.getElementById('date');
dateInput.min = new Date().toISOString().split('T')[0];

document.getElementById('send').onclick = () => {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date = dateInput.value;
  const err = document.getElementById('err');
  const t = T[lang];
  if (!name || !phone || !date) { err.textContent = t.err_fill; return; }
  err.textContent = '';
  const text = `${t.wa_text}\n${t.w_name}: ${name}\n${t.w_phone}: ${phone}\n${t.w_date}: ${date}\n${t.l_hall}: ${hall.selectedOptions[0].text}\n${t.l_menu}: ${menuType.selectedOptions[0].text}\n${t.w_guests}: ${guests.value}\n${t.w_sum}: ${total.textContent}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
};

// ===== Увеличение фото =====
const lb = document.getElementById('lb');
document.querySelectorAll('.gal img').forEach(img => img.onclick = () => { lb.querySelector('img').src = img.src; lb.classList.add('open'); });
lb.onclick = () => lb.classList.remove('open');

// ===== Появление блоков =====
const io = new IntersectionObserver(items => {
  items.forEach(i => { if (i.isIntersecting) { i.target.classList.add('show'); io.unobserve(i.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.card, .calc, .book').forEach(el => { el.classList.add('reveal'); io.observe(el); });

// ===== Автопоиск фото (сам подбирает окончание файла) =====
const EXTS = ['.jpg', '.jpeg', '.jpg.jpeg', '.jpeg.jpg', '.jpg.jpg', '.jpeg.jpeg', '.png', '.jpg.png', '.JPG', '.JPEG', '.webp'];
document.querySelectorAll('img[data-photo]').forEach(img => {
  let i = 0;
  const n = img.dataset.photo;
  const tryNext = () => {
    if (i >= EXTS.length) { img.style.visibility = 'hidden'; return; }
    img.src = 'img/photo' + n + EXTS[i++];
  };
  img.onerror = tryNext;
  tryNext();
});

setLang(lang);
calc();