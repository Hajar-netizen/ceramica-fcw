/* ============================================================
   Ceramica Cleopatra FCW - Main Script
   ============================================================ */

"use strict";

/* ---------- DOM Element References ---------- */
const $ = (id) => document.getElementById(id);

const menuToggle = $("menuToggle");
const closeBtn = $("closeBtn");
const navDrawer = $("navDrawer");
const overlay = $("overlay");
const langSelect = $("langSelect");
const searchInput = $("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");

/* ---------- Drawer Menu Logic ---------- */
function openMenu() {
  navDrawer.classList.add("open");
  overlay.classList.add("visible");
}

function closeMenu() {
  navDrawer.classList.remove("open");
  overlay.classList.remove("visible");
}

if (menuToggle) menuToggle.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

/* ---------- Data: Coaches ---------- */
const coachesData = [
  { name: { en: "C. Ahmed Talaat", ar: "ك. أحمد طلعت" }, role: { en: "Head Coach", ar: "المدير الفني" }, image: "C. Ahmed Talaat.jpeg", cat: "tech" },
  { name: { en: "C. Abd El aziz", ar: "ك. عبد العزيز" }, role: { en: "General Coach", ar: "المدرب العام" }, image: "C. Abd El aziz.jpeg", cat: "tech" },
  { name: { en: "C. Ahmed Gamal", ar: "ك. أحمد جمال" }, role: { en: "Goalkeeping Coach", ar: "مدرب حراس المرمى" }, image: "C. Ahmed Gamal.jpeg", cat: "tech" },
  { name: { en: "Dr. Nourhan Ahmed", ar: "د. نورهان أحمد" }, role: { en: "Sports Therapist", ar: "أخصائي إصابات ملاعب وتأهيل" }, image: "Dr. Nourhan Ahmed.jpeg", cat: "med" },
  { name: { en: "Tamer Mahmoud Taha", ar: "تامر محمود طه" }, role: { en: "Team Manager", ar: "المدير الإداري" }, image: "Tamer Mahmoud Taha.jpeg", cat: "admin" },
  { name: { en: "Ahmed Yasser", ar: "أحمد ياسر" }, role: { en: "Team Administrator", ar: "إداري" }, image: "Ahmed Yasser.jpeg", cat: "admin" },
  { name: { en: "Mohamed Tag", ar: "محمد تاج" }, role: { en: "Team Administrator", ar: "إداري" }, image: "Mohamed Tag.jpeg", cat: "admin" }
];

/* ---------- Data: Players (fill with categories: gk, def, mid, fwd) ---------- */
const playersData = [
  // Example entry format:
  // {
  //   name: { en: "Player Name", ar: "اسم اللاعبة" },
  //   role: { en: "Midfielder", ar: "خط وسط" },
  //   image: "player.jpg",
  //   category: "mid"
  // }
];

/* ---------- Data: Clubs (logos) ----------
   Logo files live next to this file with the names below. */
const clubs = {
  ceramica: { name: { en: "Ceramica Cleopatra FCW", ar: "سيراميكا كليوباترا" }, logo: "logo.png", initial: "C" },
  sakkara:  { name: { en: "Sakkara SC", ar: "نادي سقارة" }, logo: "سقاره logo.jpeg", initial: "S" },
  senzo:    { name: { en: "Senzo SC", ar: "نادي سنزو" }, logo: "سينزو logo.jpeg", initial: "SE" },
  zayed:    { name: { en: "El Sheikh Zayed", ar: "الشيخ زايد" }, logo: "شيخ زايد logo.jpeg", initial: "Z" },
  qalyub:   { name: { en: "Qalyub SC", ar: "نادي قليوب" }, logo: "قليوب logo.jpeg", initial: "Q" }
};

/* ---------- Data: Fixtures (EFA Women's Third Division 2026/2027, Group 2) ---------- */
const fixturesData = [
  {
    month: { en: "October 2026", ar: "أكتوبر 2026" },
    games: [
      { home: "sakkara", away: "ceramica",
        date: "2026-10-24",
        day: { en: "SAT 24 OCT 2026", ar: "السبت 24 أكتوبر 2026" },
        time: "15:30", week: 1,
        venue: { en: "Al Nady Sheraton Club", ar: "نادي النادي شيراتون" } }
    ]
  },
  {
    month: { en: "November 2026", ar: "نوفمبر 2026" },
    games: [
      { home: "ceramica", away: "senzo",
        date: "2026-11-07",
        day: { en: "SAT 7 NOV 2026", ar: "السبت 7 نوفمبر 2026" },
        time: "14:30", week: 2,
        venue: { en: "Al Nady Sheraton Club", ar: "نادي النادي شيراتون" } },
      { home: "ceramica", away: "qalyub",
        date: "2026-11-15",
        day: { en: "SUN 15 NOV 2026", ar: "الأحد 15 نوفمبر 2026" },
        time: "14:30", week: 3,
        venue: { en: "Al Nady Sheraton Club", ar: "نادي النادي شيراتون" } },
      { home: "zayed", away: "ceramica",
        date: "2026-11-28",
        day: { en: "SAT 28 NOV 2026", ar: "السبت 28 نوفمبر 2026" },
        time: "14:30", week: 5,
        venue: { en: "El Sheikh Zayed Club", ar: "نادي الشيخ زايد" } }
    ]
  },
  {
    month: { en: "December 2026", ar: "ديسمبر 2026" },
    games: [
      { home: "ceramica", away: "sakkara",
        date: "2026-12-19",
        day: { en: "SAT 19 DEC 2026", ar: "السبت 19 ديسمبر 2026" },
        time: "14:30", week: 6,
        venue: { en: "Al Nady Sheraton Club", ar: "نادي النادي شيراتون" } },
      { home: "senzo", away: "ceramica",
        date: "2026-12-24",
        day: { en: "THU 24 DEC 2026", ar: "الخميس 24 ديسمبر 2026" },
        time: "14:30", week: 7,
        venue: { en: "Palm Hills New Cairo", ar: "بالم هيلز التجمع" } }
    ]
  },
  {
    month: { en: "January 2027", ar: "يناير 2027" },
    games: [
      { home: "qalyub", away: "ceramica",
        date: "2027-01-09",
        day: { en: "SAT 9 JAN 2027", ar: "السبت 9 يناير 2027" },
        time: "14:30", week: 8,
        venue: { en: "El Moassasa El Omalia Stadium", ar: "المؤسسة العمالية" } },
      { home: "ceramica", away: "zayed",
        date: "2027-01-29",
        day: { en: "FRI 29 JAN 2027", ar: "الجمعة 29 يناير 2027" },
        time: "14:30", week: 10,
        venue: { en: "Al Nady Sheraton Club", ar: "نادي النادي شيراتون" } }
    ]
  }
];

/* ---------- Translations ---------- */
const translations = {
  en: {
    // Nav & General
    home: "Home",
    logoTitle: "Ceramica Cleopatra FCW",
    coaches: "Coaches",
    players: "Players",
    aboutTeam: "About Team",
    media: "Media",
    fixtures: "Fixtures",
    announcement: "🔥 The 2026/27 season starts soon — follow us for fixture updates!",

    // Hero
    heroEyebrow: "Official Club Site",
    heroTitle: "Ceramica Cleopatra <span>FCW</span>",
    heroSubtitle: "Official Women's Football Team Page",
    viewPlayers: "Meet the Squad",
    viewFixtures: "View Fixtures",
    viewMedia: "Watch Highlights",

    // Stats
    statStaff: "Technical Staff",
    statPlayers: "Players",
    statDivisions: "League Divisions",
    statCommitment: "% Commitment",

    // Home content
    welcomeHeader: "Welcome to the Official Home",
    welcomeText: "Welcome to the official hub of Ceramica Cleopatra Women's Football Team. Competing in the Egyptian domestic competitions, our squad is built on hard work, dedication, and a strong drive to elevate the standards of women's football in Egypt.",
    newsHeader: "Latest Updates",
    newsTitle1: "League Preparations Underway",
    newsText1: "The technical staff and players are deep into training sessions, sharpening tactical awareness and physical conditioning ahead of the upcoming Egyptian Women's Third Division fixtures.",
    pillarsHeader: "Our Focus",
    pillar1Title: "Domestic Ambition",
    pillar1Text: "Competing fiercely week in and week out in the Egyptian league setup.",
    pillar2Title: "Talent Development",
    pillar2Text: "Providing a professional pathway for young female players to excel at the highest national level.",
    pillar3Title: "Team Spirit",
    pillar3Text: "Cultivating a united, disciplined squad culture dedicated to continuous improvement.",

    // Roster pages
    coachesHeader: "Coaches & Technical Staff",
    staffLead: "The passionate minds guiding our squad — from the touchline to the treatment room.",
    staffOfClub: "Proud member of the Ceramica Cleopatra FCW technical staff.",
    tabAll: "All",
    tabTech: "Coaches",
    tabMed: "Medical",
    tabAdmin: "Admin",
    playersHeader: "Players Roster",
    noPlayersTitle: "Squad Announcement Coming Soon",
    noPlayers: "Players will be announced soon.",
    searchPlaceholder: "Search players...",
    filterAll: "All",
    filterGK: "Goalkeepers",
    filterDEF: "Defenders",
    filterMID: "Midfielders",
    filterFWD: "Forwards",

    // Media
    mediaHeader: "Team Media Gallery",
    photos: "Photos",
    videos: "Videos",

    // Fixtures
    fixturesEyebrow: "Season 2026 / 2027",
    fixturesHeader: "Match Fixtures",
    fixturesLead: "Every Ceramica Cleopatra FCW match in the Egyptian Women's Third Division — dates, kick-off times and venues.",
    fixturesNote: "All times are Cairo local time. Schedule source: EFA Women's Third Division 2026/27.",
    competition: "Egyptian Women's Third Division",
    week: "Week",
    played: "Played",

    // Next match teaser
    nextMatch: "Next Match",
    kickoffToday: "Kick-off today!",
    daysLeft: "days left",
    viewAllFixtures: "View all fixtures",
    seasonDone: "All scheduled matches have been played — see you next season.",

    // About
    aboutHeader: "Our History",
    aboutText1: "Ceramica Cleopatra FCW was established to champion women's sports and provide a professional environment for female athletes in Egypt. Supported by the club's robust infrastructure, the team aims to become a dominant force in Egyptian and African women's football.",
    visionHeader: "Our Vision & Mission",
    visionText1: "Our mission is to empower young women through football, fostering talent, discipline, and teamwork. We envision a future where Egyptian women's football competes at the highest global standards, and Ceramica Cleopatra is at the forefront of that movement.",
    valuePassion: "Passion",
    valueUnity: "Unity",
    valueDrive: "Drive",
    valueExcellence: "Excellence"
  },
  ar: {
    // Nav & General
    home: "الرئيسية",
    logoTitle: "سيراميكا كليوباترا للسيدات",
    coaches: "المدربون",
    players: "اللاعبات",
    aboutTeam: "عن الفريق",
    media: "المركز الإعلامي",
    fixtures: "المباريات",
    announcement: "🔥 موسم 2026/27 يبدأ قريباً — تابعونا لمستجدات المباريات!",

    // Hero
    heroEyebrow: "الموقع الرسمي للنادي",
    heroTitle: "سيراميكا كليوباترا <span>FCW</span>",
    heroSubtitle: "الصفحة الرسمية لفريق كرة القدم النسائية",
    viewPlayers: "تعرف على الفريق",
    viewFixtures: "عرض المباريات",
    viewMedia: "شاهد اللقطات",

    // Stats
    statStaff: "الجهاز الفني",
    statPlayers: "اللاعبات",
    statDivisions: "أقسام الدوري",
    statCommitment: "% الالتزام",

    // Home content
    welcomeHeader: "مرحباً بكم في الصفحة الرسمية",
    welcomeText: "مرحباً بكم في الموقع الرسمي لفريق سيدات سيراميكا كليوباترا لكرة القدم. ينافس فريقنا في البطولات المحلية المصرية، وهو مبني على العمل الجاد والتفاني، والدافع القوي للارتقاء بمستوى كرة القدم النسائية في مصر.",
    newsHeader: "أحدث الأخبار",
    newsTitle1: "الاستعدادات للدوري جارية",
    newsText1: "يخوض الجهاز الفني واللاعبات تدريبات مكثفة، لرفع الوعي التكتيكي واللياقة البدنية استعداداً لمباريات الدوري المصري درجه ثالثة للسيدات القادمة.",
    pillarsHeader: "تركيزنا",
    pillar1Title: "الطموح المحلي",
    pillar1Text: "المنافسة بشراسة أسبوعاً بعد أسبوع في منظومة الدوري المصري.",
    pillar2Title: "تنمية المواهب",
    pillar2Text: "توفير مسار احترافي للاعبات الشابات للتألق على أعلى المستويات الوطنية.",
    pillar3Title: "روح الفريق",
    pillar3Text: "ترسيخ ثقافة الفريق الموحد والمنضبط، والمكرس للتطوير المستمر.",

    // Roster pages
    coachesHeader: "الجهاز الفني والإداري",
    staffLead: "العقول الشغوفة التي تقود فريقنا — من خط التماس إلى غرفة العلاج.",
    staffOfClub: "عضو فخور في الجهاز الفني لنادي سيراميكا كليوباترا للسيدات.",
    tabAll: "الكل",
    tabTech: "المدربون",
    tabMed: "الطاقم الطبي",
    tabAdmin: "الإداريون",
    playersHeader: "قائمة اللاعبات",
    noPlayersTitle: "الإعلان عن قائمة الفريق قريباً",
    noPlayers: "سيتم الإعلان عن اللاعبات قريباً.",
    searchPlaceholder: "ابحث عن اللاعبات...",
    filterAll: "الكل",
    filterGK: "حراسة المرمى",
    filterDEF: "خط الدفاع",
    filterMID: "خط الوسط",
    filterFWD: "خط الهجوم",

    // Media
    mediaHeader: "معرض وسائط الفريق",
    photos: "الصور",
    videos: "الفيديوهات",

    // Fixtures
    fixturesEyebrow: "موسم 2026 / 2027",
    fixturesHeader: "جدول المباريات",
    fixturesLead: "جميع مباريات سيراميكا كليوباترا للسيدات في الدوري المصري للسيدات بالدرجة الثالثة — المواعيد وأوقات البداية والملاعب.",
    fixturesNote: "جميع المواعيد بتوقيت القاهرة المحلي. مصدر الجدول: الاتحاد المصري لكرة القدم – دوري السيدات الدرجة الثالثة 2026/27.",
    competition: "الدوري المصري للسيدات – الدرجة الثالثة",
    week: "الأسبوع",
    played: "انتهت",

    // Next match teaser
    nextMatch: "المباراة القادمة",
    kickoffToday: "المباراة اليوم!",
    daysLeft: "يوم متبقٍ",
    viewAllFixtures: "عرض جميع المباريات",
    seasonDone: "انتهت جميع المباريات المجدولة — نراكم الموسم القادم.",

    // About
    aboutHeader: "تاريخنا",
    aboutText1: "تأسس فريق سيدات سيراميكا كليوباترا لدعم الرياضة النسائية وتوفير بيئة احترافية للرياضيات في مصر. بدعم من البنية التحتية القوية للنادي، يهدف الفريق إلى أن يصبح قوة مهيمنة في كرة القدم النسائية المصرية والأفريقية.",
    visionHeader: "رؤيتنا ومهمتنا",
    visionText1: "مهمتنا هي تمكين الشابات من خلال كرة القدم، ورعاية المواهب والانضباط والعمل الجماعي. نتطلع إلى مستقبل تنافس فيه كرة القدم النسائية المصرية على أعلى المعايير العالمية، وأن يكون نادي سيراميكا كليوباترا في طليعة هذه الحركة.",
    valuePassion: "شغف",
    valueUnity: "اتحاد",
    valueDrive: "دافع",
    valueExcellence: "تميز"
  }
};

/* ---------- Roster Rendering ---------- */
function renderRoster(lang, filter = "all", searchQuery = "") {
  const activeTab = document.querySelector(".staff-tab.active");
  renderCoaches(lang, activeTab ? activeTab.dataset.cat : "all");
  renderPlayers(lang, filter, searchQuery);
}

function renderCoaches(lang, cat = "all") {
  const list = $("coaches-list");
  if (!list) return;

  const shown = cat === "all" ? coachesData : coachesData.filter((c) => c.cat === cat);

  list.innerHTML = shown
    .map((coach) => {
      const parts = coach.name[lang].trim().split(/\s+/);
      const last = parts.length > 1 ? parts.pop() : "";
      const first = parts.join(" ");
      return `
        <article class="staff-card fade-in-up">
          <div class="staff-card-photo">
            <img src="${coach.image}" alt="${coach.name[lang]}" loading="lazy" onerror="this.onerror=null;this.src='https://via.placeholder.com/400?text=Staff'">
          </div>
          <div class="staff-card-body">
            ${first ? `<span class="staff-card-first">${first}</span>` : ""}
            <h3>${last || coach.name[lang]}</h3>
            <p>${coach.role[lang]}</p>
          </div>
        </article>
      `;
    })
    .join("");

  // observe new fade-in-up items
  observeFadeIns();
}

function renderPlayers(lang, filter, searchQuery) {
  const playersGrid = $("players-grid");
  const noPlayersMsg = $("no-players-msg");
  if (!playersGrid) return;

  if (playersData.length === 0) {
    playersGrid.innerHTML = "";
    if (noPlayersMsg) noPlayersMsg.style.display = "block";
    return;
  }

  if (noPlayersMsg) noPlayersMsg.style.display = "none";

  const filteredPlayers = playersData.filter((player) => {
    const matchesFilter = filter === "all" || player.category === filter;
    const matchesSearch = player.name[lang]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filteredPlayers.length === 0) {
    playersGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#666;">${translations[lang].noPlayers}</p>`;
    return;
  }

  playersGrid.innerHTML = filteredPlayers
    .map(
      (player) => `
      <div class="profile-card">
        <div class="profile-img-wrapper">
          <img src="${player.image}" alt="${player.name[lang]}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300?text=Player'">
        </div>
        <div class="profile-info">
          <h3>${player.name[lang]}</h3>
          <p>${player.role[lang]}</p>
        </div>
      </div>
    `
    )
    .join("");
}

/* ---------- Fixture Rendering (Chelsea-style cards, no tickets/watch) ---------- */
function clubBadge(key, lang) {
  const c = clubs[key];
  const img = c.logo
    ? `<img src="${c.logo}" alt="${c.name[lang]}" loading="lazy" onerror="this.remove()">`
    : "";
  return `<span class="club-badge"><i>${c.initial}</i>${img}</span>`;
}

function fixtureTeam(key, lang, side) {
  const c = clubs[key];
  const ours = key === "ceramica" ? " ours" : "";
  const badge = clubBadge(key, lang);
  const name = `<span class="fixture-name${ours}">${c.name[lang]}</span>`;
  return side === "home"
    ? `<div class="fixture-team home">${name}${badge}</div>`
    : `<div class="fixture-team away">${badge}${name}</div>`;
}

function renderFixtures(lang) {
  const list = $("fixtures-list");
  if (!list) return;

  const t = translations[lang];

  list.innerHTML = fixturesData
    .map(
      (group) => `
      <div class="fixture-month-group">
        <h3 class="fixture-month">${group.month[lang]}</h3>
        ${group.games
          .map((g) => {
            const isPast = kickoffOf(g).getTime() < Date.now() - 3 * 3600 * 1000;
            return `
          <article class="fixture-card fade-in-up${isPast ? " played" : ""}">
            <div class="fixture-top">
              <p class="fixture-date">${g.day[lang]}</p>
              <span class="fixture-week">${t.week} ${g.week}</span>
              ${isPast ? `<span class="fixture-played">${t.played}</span>` : ""}
            </div>
            <p class="fixture-comp">${t.competition}</p>
            <div class="fixture-teams">
              ${fixtureTeam(g.home, lang, "home")}
              <div class="fixture-time">${g.time}</div>
              ${fixtureTeam(g.away, lang, "away")}
            </div>
            <p class="fixture-venue">${g.venue[lang]}</p>
          </article>
        `;
          })
          .join("")}
      </div>
    `
    )
    .join("");

  observeFadeIns();
}

/* ---------- Next Match teaser (home page, auto from fixturesData) ---------- */
function kickoffOf(game) {
  const parts = game.time.split(":");
  return new Date(game.date + "T" + String(parts[0]).padStart(2, "0") + ":" + parts[1] + ":00");
}

function nextGame() {
  const now = new Date();
  const upcoming = [];
  fixturesData.forEach((group) => {
    group.games.forEach((g) => {
      if (kickoffOf(g).getTime() >= now.getTime() - 3 * 3600 * 1000) upcoming.push(g);
    });
  });
  upcoming.sort((a, b) => kickoffOf(a) - kickoffOf(b));
  return upcoming.length ? upcoming[0] : null;
}

function renderNextMatch(lang) {
  const slot = $("next-match");
  if (!slot) return;

  const t = translations[lang];
  const g = nextGame();

  if (!g) {
    slot.innerHTML = `<p class="next-match-empty">${t.seasonDone}</p>`;
    return;
  }

  const days = Math.max(0, Math.ceil((kickoffOf(g).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000));
  const when = days === 0 ? t.kickoffToday : days + " " + t.daysLeft;

  slot.innerHTML = `
    <article class="next-match-card fade-in-up">
      <span class="next-match-badge">${t.nextMatch}</span>
      <div class="fixture-teams">
        ${fixtureTeam(g.home, lang, "home")}
        <div class="fixture-time">${g.time}</div>
        ${fixtureTeam(g.away, lang, "away")}
      </div>
      <p class="next-match-when">${g.day[lang]} &bull; ${when}</p>
      <p class="fixture-venue">${g.venue[lang]}</p>
      <a class="btn btn-red btn-sm" href="fixtures.html">${t.viewAllFixtures}</a>
    </article>
  `;

  observeFadeIns();
}

/* ---------- Active nav highlight ---------- */
function markActiveNav() {
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".drawer-menu a, .footer-links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href && (href === page || (page === "" && href === "index.html"))) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });
}

/* ---------- Back to top ---------- */
function setupToTop() {
  const btn = $("toTop");
  if (!btn) return;

  const onScroll = () => btn.classList.toggle("show", window.scrollY > 600);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => {
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  });
}

/* ---------- Staff Tabs ---------- */
const staffTabs = document.querySelectorAll(".staff-tab");
staffTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    staffTabs.forEach((b) => b.classList.remove("active"));
    tab.classList.add("active");
    const lang = localStorage.getItem("preferredLang") || "en";
    renderCoaches(lang, tab.dataset.cat);
  });
});

/* ---------- Language Switcher ---------- */
function setLanguage(lang) {
  const mainContent = document.querySelector("main, .home-main");
  if (mainContent) mainContent.classList.add("lang-fading");

  setTimeout(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // elements that need inline markup preserved
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    const activeFilterBtn = document.querySelector(".filter-btn.active");
    const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
    const currentSearch = searchInput ? searchInput.value : "";

    renderRoster(lang, currentFilter, currentSearch);
    renderFixtures(lang);
    renderNextMatch(lang);

    if (mainContent) mainContent.classList.remove("lang-fading");
  }, 300);
}

if (langSelect) {
  langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("preferredLang", e.target.value);
  });
}

/* ---------- Player Search & Filter ---------- */
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const currentLang = localStorage.getItem("preferredLang") || "en";
    const activeFilter = document.querySelector(".filter-btn.active");
    const filter = activeFilter ? activeFilter.getAttribute("data-filter") : "all";
    renderRoster(currentLang, filter, e.target.value);
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");

    const currentLang = localStorage.getItem("preferredLang") || "en";
    const filter = e.target.getAttribute("data-filter");
    const searchQuery = searchInput ? searchInput.value : "";
    renderRoster(currentLang, filter, searchQuery);
  });
});

/* ---------- Photo Modal (Media Page) ---------- */
function setupPhotoModal() {
  const modal = $("photoModal");
  const modalImage = $("modalImage");
  const modalCaption = $("modalCaption");
  const modalClose = $("modalClose");
  if (!modal) return;

  document.querySelectorAll(".masonry-item img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalCaption.textContent = img.alt;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    });
  });

  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };
  if (modalClose) modalClose.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---------- Animated Counter (Home Stats) ---------- */
function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");

  const animate = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 1500;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };

  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* ---------- Scroll Reveal Animations ---------- */
let fadeObserver = null;

function observeFadeIns() {
  if (!fadeObserver) {
    fadeObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  }

  document.querySelectorAll(".fade-in-up:not(.is-visible)").forEach((el) => {
    fadeObserver.observe(el);
  });
}

/* ---------- Init ---------- */
function init() {
  setupPhotoModal();
  observeFadeIns();
  animateCounters();
  setupFooterYear();
  markActiveNav();
  setupToTop();
}

function setupFooterYear() {
  const yearEl = $("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);

/* ---------- Initial Load (language + roster) ---------- */
(function boot() {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  if (langSelect) langSelect.value = savedLang;
  setLanguage(savedLang);
})();
