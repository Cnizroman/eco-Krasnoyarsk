// script.js — улучшенный UX/UI: тёмная тема, анимация счётчиков, мобильное меню, toast-уведомления, ripple + мультиязычность + раскрывающиеся новости

document.addEventListener('DOMContentLoaded', function() {
    // -------------------- ПЕРЕВОД (i18n) --------------------
    const translations = {
        ru: {
            tagline: "Мы беспокоимся за экологию нашего края",
            "nav.about": "О нас",
            "nav.problems": "Проблемы & Решения",
            "nav.initiatives": "Инициативы",
            "nav.help": "Как помочь",
            "nav.news": "Новости",
            "hero.title": "Красноярск дышит будущим",
            "hero.subtitle": "Объединяем жителей, эко-активистов и экспертов для решения экологических вызовов города. 40.000+ участников, 37 реализованных проектов.",
            "hero.button": "Узнать больше",
            "about.title": "🌱 О нас — экологическое сообщество",
            "about.text1": "<strong>«ЭкоКрасноярск»</strong> — Мы группа которая хочет создать сообщество экологов, урбанистов и активных жителей, которым не всё равно на качество воздуха, воду Енисея и зелёные зоны. Наш проект — ответ на ухудшающуюся экологическую обстановку в одном из крупнейших промышленных центров Сибири.",
            "about.text2": "Наша цель — системно решать экологические проблемы через диалог с бизнесом, властью и жителями. Мы проводим мониторинг выбросов, высаживаем деревья, внедряем раздельный сбор отходов и помогаем городу перейти к устойчивому развитию. Вместе мы — голос природы Красноярска.",
            "about.text3": "💚 <strong>Присоединяйтесь</strong> — каждый может внести вклад в здоровье нашего города.",
            "stats.volunteers": "тысяч, активных волонтёров",
            "stats.projects": "реализованных проектов направленных на защиту экологии",
            "stats.recycled": "тонн отходов на переработку за последний год",
            "stats.trees": "тысяч, высаженных деревьев за последний год",
            "problems.title": "⚠️ Экологические проблемы Красноярска и наши решения",
            "problems.sub": "Проблема → решение: конкретные шаги, которые мы можем реализовать или продвигать",
            "problem.air.title": "Загрязнение воздуха",
            "problem.air.desc": "Чёрное небо, превышение ПДК по бензапирену и взвешенным частицам. Основные источники — ТЭЦ, частный сектор с углём, автомобили.",
            "solution.air.title": "🌬️ Решение: «Чистый воздух — городу»",
            "solution.air.desc": "✅ Мониторинг в реальном времени (сеть датчиков).<br>✅ Перевод частных домов на экологичное отопление (биотопливо, электрокотлы).<br>✅ Зелёные пояса: высадка 5000 деревьев в промышленных районах.",
            "problem.waste.title": "Стихийные свалки & переработка",
            "problem.waste.desc": "Отсутствие культуры раздельного сбора, переполненные полигоны, нелегальные навалы мусора вблизи жилых массивов.",
            "solution.waste.title": "♻️ Решение: «Ноль отходов»",
            "solution.waste.desc": "✅ Сеть эко-пунктов приёма вторсырья в каждом районе.<br>✅ Ежемесячные субботники + рейды по ликвидации незаконных свалок.<br>✅ Образовательные лекции в школах и на предприятиях.",
            "problem.water.title": "Загрязнение реки Енисей",
            "problem.water.desc": "Неочищенные стоки, промышленные сбросы, ухудшение качества питьевой воды и гибель биоресурсов.",
            "solution.water.title": "💧 Решение: «Чистый Енисей»",
            "solution.water.desc": "✅ Мониторинг сбросов предприятий (общественный контроль).<br>✅ Модернизация очистных сооружений города (совместные петиции властям).<br>✅ Волонтёрские рейды по очистке береговой линии.",
            "problem.green.title": "Сокращение зелёных зон",
            "problem.green.desc": "Застройка парков, неконтролируемая вырубка, дефицит комфортных рекреаций.",
            "solution.green.title": "🌳 Решение: «Зелёный щит»",
            "solution.green.desc": "✅ Озеленение дворов и скверов: акции «Посади дерево».<br>✅ Юридическая защита особо охраняемых природных территорий.<br>✅ Создание народных экологических троп с информационными стендами.",
            "problem.auto.title": "Выбросы от автомобилей",
            "problem.auto.desc": "Автопарк Красноярска продолжает расти, доля устаревших машин высока. Выхлопные газы – основной источник оксидов азота, сажи и углеводородов в центре города.",
            "solution.auto.title": "🚗 Решение: «Экомобильность»",
            "solution.auto.desc": "✅ Стимулирование перехода на электротранспорт (зарядные станции, льготы).<br>✅ Развитие сети велодорожек и каршеринга электромобилей.<br>✅ Общественный контроль выхлопов: «Эко-такси» с замерами.<br>✅ Ежегодные акции «День без автомобиля» с перекрытием центральных улиц.",
            "problem.factory.title": "Выбросы от заводов",
            "problem.factory.desc": "Промышленные предприятия Красноярска (алюминиевый завод, ТЭЦ, машиностроение) выбрасывают тонны загрязнителей: диоксид серы, оксиды азота, тяжёлые металлы. Это одна из главных причин «чёрного неба».",
            "solution.factory.title": "🏭 Решение: «Экологизация промышленности»",
            "solution.factory.desc": "✅ Установка современных фильтров и систем газоочистки на заводах.<br>✅ Внедрение системы автоматического контроля выбросов (онлайн-доступ для жителей).<br>✅ Петиции и общественный мониторинг за соблюдением ПДВ (предельно допустимых выбросов).<br>✅ Стимулирование предприятий к переходу на наилучшие доступные технологии (НДТ).",
            "initiatives.title": "🌍 Наши инициативы — делаем вместе",
            "initiative1.title": "Субботники «Чистый город»",
            "initiative1.desc": "Ежемесячные уборки в парках, на набережной и в лесных массивах. Присоединяйтесь!",
            "initiative2.title": "Эко-сбор: макулатура и батарейки",
            "initiative2.desc": "В школах можно установить специальные сортировочные контейнеры.",
            "initiative3.title": "Экодежурный класс",
            "initiative3.desc": "Старшеклассники могли бы проводить уроки экологии в начальных школах, где рассказывали бы о раздельном сборе мусора.",
            "initiative4.title": "Мониторинг воздуха",
            "initiative4.desc": "Можно было бы установть специальные датчики воздуха по всему городу. И так же создать специальный сайт для мониторинга",
            "help.title": "💚 Как вы можете помочь",
            "help.volunteer.title": "Стань волонтёром",
            "help.volunteer.desc": "Присоединяйся к субботникам, эко-рейдам, посадкам деревьев.",
            "help.volunteer.btn": "Записаться",
            "help.map.title": "Раздельный сбор",
            "help.map.desc": "Используй карту пунктов приёма вторсырья. Каждая бутылка имеет значение.",
            "help.map.btn": "Смотреть карту",
            "help.checklist.title": "Эко-привычки",
            "help.checklist.desc": "Скачай чек-лист «10 простых шагов к экологичной жизни в городе».",
            "help.checklist.btn": "Скачать",
            "help.donate.title": "Поддержать проекты",
            "help.donate.desc": "Пожертвования идут на закупку саженцев, датчиков воздуха и эко-материалы.",
            "help.donate.btn": "Помочь рублём",
            "news.title": "📢 Последние новости и события",
            "news.readmore": "Подробнее →",
            "news1.title": "Начались масштабные проверки предприятий",
            "news1.short": "Минэкологии совместно с полицией проверяет предприятия на соблюдение новых экологических требований.",
            "news1.full": "Проверяют, как выполняется закон, запрещающий сжигать несортовой уголь и использовать котлы с ручной загрузкой. В Красноярске бизнес уже адаптировался к новым правилам. Для предпринимателей предусмотрены льготные кредиты до 5 млн рублей, а для крупных промышленных предприятий — до 20 млн рублей. Источник: Вести. Красноярск.",
            "news2.title": "В городе установили умные урны для раздельного сбора",
            "news2.short": "Для пластика, стекла и других отходов появились специальные цветные контейнеры.",
            "news2.full": "В Красноярске установили урны для раздельного сбора отходов. Для каждого вида мусора используются мешки определённого цвета: жёлтые — для пластика, зелёные — для стекла, красные — для прочего. Отходы везут на полигон, где на сортировочной линии они проходят досортировку. В мэрии надеются, что со временем у горожан появится новая экопривычка. Источник: Вести. Красноярск.",
            "news3.title": "Во время «чёрного неба» у трёх предприятий нашли нарушения",
            "news3.short": "Специалисты Минэкологии провели рейды в период НМУ и выявили предприятия без газоочистного оборудования.",
            "news3.full": "С 1 по 3 марта, в период действия режима неблагоприятных метеоусловий (НМУ), были проведены рейды в Красноярске, Канске, Ачинске, Минусинске и Лесосибирске. В краевом центре нарушения выявлены у трёх предприятий из шести: у двух отсутствовало газоочистное оборудование, а одно не было поставлено на учёт. С 1 марта 2026 года вступил в силу обновлённый порядок, позволяющий вводить ограничения точечно, а предприятия обязаны снижать нагрузку на воздух не менее чем на 20%. Источник: НИА-Красноярск.",
            "news4.title": "Молодёжь собрала более тонны макулатуры и открыла эко-мастерскую",
            "news4.short": "Бойцы трудового отряда главы города подвели итоги осеннего сбора вторсырья.",
            "news4.full": "За две недели ребята собрали свыше тонны макулатуры, около 190 кг батареек, 35 кг пластика и 10 кг просроченных лекарств. Точки приёма работают в каждом районе на базе молодёжных центров. Кроме того, в Железнодорожном районе в волонтёрском центре «Доброе дело» открылась экологическая мастерская «Кладовка» с оборудованием для переработки пластика в материал для 3D-печати. Источник: Вести. Красноярск.",
            "news5.title": "На берегу Енисея прошла генеральная уборка «Оберегай»",
            "news5.short": "Волонтёры, школьники и энергетики собрали около 50 мешков мусора на косе Орлиха.",
            "news5.full": "В Красноярске прошла экологическая акция «Оберегай». Это федеральный благотворительный волонтёрский проект группы компаний «РусГидро», который проводится ежегодно уже больше 10 лет. За все годы волонтёры вывезли тонны хлама. В этот раз на уборку потратили час и собрали около 50 мешков мусора. Источник: Вести. Красноярск.",
            "presentation.title": "Школьный проект по экологии Красноярска",
            "presentation.desc": "Данный сайт создан в рамках учебного проекта учеников 10А класса МАОУ СШ №91. Здесь собрана информация об экологических проблемах города и возможных путях их решения.",
            "presentation.button": "📑 Смотреть презентацию",
            "presentation.note": "(файл презентации будет добавлен перед защитой)",
            "footer.desc": "Объединяем тех, кому не всё равно. Вместе мы сможем изменить экологию города.",
            "footer.contacts": "Контакты",
            "footer.social": "Соцсети",
            "footer.copyright": "© {year} Зелёное сообщество Красноярска | Школьный проект",
            "toast.map": "🗺️ Карта пунктов приёма вторсырья появится в ближайшее время! Следите за новостями.",
            "toast.checklist": "📄 Скачайте чек-лист: 10 шагов к экологичной жизни. (ссылка будет добавлена)",
            "toast.donate": "💚 Спасибо за желание поддержать! Реквизиты для помощи: +7 (995) 074-32-24 (СБП)",
            "toast.presentation": "📁 Презентация проекта будет доступна перед защитой. Спасибо за интерес!",
            "modal.title": "🌿 Присоединяйтесь к движению",
            "modal.desc": "Оставьте email, чтобы получать новости и приглашения на мероприятия.",
            "modal.email_placeholder": "Ваш email",
            "modal.submit": "Отправить",
            "modal.note": "Мы не передаём данные третьим лицам.",
            "modal.success": "Спасибо, {email}! Вы подписаны на экологические новости Красноярска.",
            "modal.invalid_email": "Пожалуйста, введите корректный email."
        },
        en: {
            tagline: "We care about the ecology of our region",
            "nav.about": "About",
            "nav.problems": "Problems & Solutions",
            "nav.initiatives": "Initiatives",
            "nav.help": "Get Involved",
            "nav.news": "News",
            "hero.title": "Krasnoyarsk breathes the future",
            "hero.subtitle": "Uniting residents, eco-activists and experts to solve the city's environmental challenges. 40,000+ participants, 37 completed projects.",
            "hero.button": "Learn more",
            "about.title": "🌱 About us — ecological community",
            "about.text1": "<strong>EcoKrasnoyarsk</strong> — We are a group that wants to create a community of ecologists, urbanists and active residents who care about air quality, the Yenisei water and green areas. Our project is a response to the deteriorating environmental situation in one of the largest industrial centers of Siberia.",
            "about.text2": "Our goal is to systematically solve environmental problems through dialogue with business, government and residents. We monitor emissions, plant trees, introduce waste separation and help the city move towards sustainable development. Together we are the voice of Krasnoyarsk's nature.",
            "about.text3": "💚 <strong>Join us</strong> — everyone can contribute to the health of our city.",
            "stats.volunteers": "thousand active volunteers",
            "stats.projects": "projects implemented to protect the environment",
            "stats.recycled": "tons of waste recycled in the last year",
            "stats.trees": "thousand trees planted in the last year",
            "problems.title": "⚠️ Environmental challenges of Krasnoyarsk and our solutions",
            "problems.sub": "Problem → solution: concrete steps we are already implementing or promoting",
            "problem.air.title": "Air pollution",
            "problem.air.desc": "Black sky, exceeding maximum permissible concentrations of benzapyrene and particulate matter. Main sources: CHP plants, private sector with coal, vehicles.",
            "solution.air.title": "🌬️ Solution: 'Clean Air for the City'",
            "solution.air.desc": "✅ Real-time monitoring (sensor network).<br>✅ Conversion of private homes to eco-friendly heating (biofuel, electric boilers).<br>✅ Green belts: planting 5000 trees in industrial areas.",
            "problem.waste.title": "Illegal dumps & recycling",
            "problem.waste.desc": "Lack of waste separation culture, overflowing landfills, illegal waste piles near residential areas.",
            "solution.waste.title": "♻️ Solution: 'Zero Waste'",
            "solution.waste.desc": "✅ Network of eco-points for recyclables in every district.<br>✅ Monthly cleanups + raids to eliminate illegal dumps.<br>✅ Educational lectures in schools and enterprises.",
            "problem.water.title": "Pollution of the Yenisei River",
            "problem.water.desc": "Untreated wastewater, industrial discharges, deterioration of drinking water quality and death of bio-resources.",
            "solution.water.title": "💧 Solution: 'Clean Yenisei'",
            "solution.water.desc": "✅ Monitoring of industrial discharges (public control).<br>✅ Modernization of the city's treatment facilities (joint petitions to authorities).<br>✅ Volunteer raids to clean the shoreline.",
            "problem.green.title": "Reduction of green zones",
            "problem.green.desc": "Development of parks, uncontrolled logging, lack of comfortable recreation areas.",
            "solution.green.title": "🌳 Solution: 'Green Shield'",
            "solution.green.desc": "✅ Greening of courtyards and squares: 'Plant a tree' campaigns.<br>✅ Legal protection of specially protected natural areas.<br>✅ Creation of public ecological trails with information boards.",
            "problem.auto.title": "Vehicle emissions",
            "problem.auto.desc": "Krasnoyarsk's vehicle fleet continues to grow, with a high share of outdated cars. Exhaust gases are the main source of nitrogen oxides, soot and hydrocarbons in the city center.",
            "solution.auto.title": "🚗 Solution: 'Ecomobility'",
            "solution.auto.desc": "✅ Incentives for switching to electric transport (charging stations, benefits).<br>✅ Development of bike lanes and electric car sharing.<br>✅ Public emission control: 'Eco-taxi' with measurements.<br>✅ Annual 'Car-Free Day' events with central street closures.",
            "problem.factory.title": "Industrial emissions",
            "problem.factory.desc": "Krasnoyarsk's industrial plants (aluminum smelter, CHP plants, machine building) emit tons of pollutants: sulfur dioxide, nitrogen oxides, heavy metals. This is one of the main causes of 'black sky'.",
            "solution.factory.title": "🏭 Solution: 'Greening Industry'",
            "solution.factory.desc": "✅ Installation of modern filters and gas cleaning systems at factories.<br>✅ Implementation of automatic emission control systems (online access for residents).<br>✅ Petitions and public monitoring of compliance with maximum permissible emission limits.<br>✅ Incentivizing enterprises to adopt Best Available Technologies (BAT).",
            "initiatives.title": "🌍 Our initiatives — doing together",
            "initiative1.title": "Cleanups 'Clean City'",
            "initiative1.desc": "Monthly cleanups in parks, embankments and forests. Join us!",
            "initiative2.title": "Eco-collection: paper and batteries",
            "initiative2.desc": "Containers are installed in schools. We collect 3.2 tons of paper and 500 kg of batteries per year.",
            "initiative3.title": "Eco-duty class",
            "initiative3.desc": "High school students conduct ecology lessons in elementary school, teaching about waste separation.",
            "initiative4.title": "Air monitoring",
            "initiative4.desc": "Network of 15 air quality sensors with open data on the website.",
            "help.title": "💚 How you can help",
            "help.volunteer.title": "Become a volunteer",
            "help.volunteer.desc": "Join cleanups, eco-raids, tree planting.",
            "help.volunteer.btn": "Sign up",
            "help.map.title": "Waste separation",
            "help.map.desc": "Use the map of recycling collection points. Every bottle matters.",
            "help.map.btn": "View map",
            "help.checklist.title": "Eco-habits",
            "help.checklist.desc": "Download the checklist '10 simple steps to an eco-friendly life in the city'.",
            "help.checklist.btn": "Download",
            "help.donate.title": "Support projects",
            "help.donate.desc": "Donations go to purchase seedlings, air sensors and eco-materials.",
            "help.donate.btn": "Donate",
            "news.title": "📢 Latest news and events",
            "news.readmore": "Read more →",
            "news1.title": "Large-scale inspections of enterprises have begun",
            "news1.short": "The Ministry of Ecology and the police are checking enterprises for compliance with new environmental requirements.",
            "news1.full": "They are checking compliance with the law banning the burning of off-grade coal and the use of manually loaded boilers. In Krasnoyarsk, businesses have already adapted to the new rules. Preferential loans of up to 5 million rubles are available for entrepreneurs, and up to 20 million rubles for large industrial enterprises. Source: Vesti. Krasnoyarsk.",
            "news2.title": "Smart bins for separate waste collection installed in the city",
            "news2.short": "Special colored containers have appeared for plastic, glass and other waste.",
            "news2.full": "Bins for separate waste collection have been installed in Krasnoyarsk. Each type of waste uses bags of a specific color: yellow for plastic, green for glass, red for other waste. The waste is taken to a landfill, where it is further sorted on a sorting line. The mayor's office hopes that over time, citizens will develop a new eco-habit. Source: Vesti. Krasnoyarsk.",
            "news3.title": "Violations found at three enterprises during 'black sky' period",
            "news3.short": "Ministry of Ecology specialists conducted raids during the NMP period and identified enterprises without gas purification equipment.",
            "news3.full": "From March 1 to 3, during the period of unfavorable meteorological conditions (NMP), raids were conducted in Krasnoyarsk, Kansk, Achinsk, Minusinsk and Lesosibirsk. In the regional center, violations were identified at three out of six enterprises: two lacked gas purification equipment, and one was not registered. Since March 1, 2026, an updated procedure has come into force, allowing restrictions to be introduced pointwise, and enterprises are required to reduce the load on the air by at least 20%. Source: NIA-Krasnoyarsk.",
            "news4.title": "Youth collected over a ton of waste paper and opened an eco-workshop",
            "news4.short": "Fighters of the mayor's labor squad summed up the results of the autumn collection of recyclables.",
            "news4.full": "In two weeks, the guys collected over a ton of waste paper, about 190 kg of batteries, 35 kg of plastic and 10 kg of expired medicines. Collection points operate in every district at youth centers. In addition, in the Zheleznodorozhny district, the eco-workshop 'Closet' opened at the 'Good Deed' volunteer center with equipment for recycling plastic into material for 3D printing. Source: Vesti. Krasnoyarsk.",
            "news5.title": "General cleanup 'Oberegay' took place on the banks of the Yenisei",
            "news5.short": "Volunteers, schoolchildren and power engineers collected about 50 bags of garbage on the Orlikha spit.",
            "news5.full": "The 'Oberegay' environmental campaign took place in Krasnoyarsk. This is a federal charitable volunteer project of the RusHydro group of companies, which has been held annually for over 10 years. Over the years, volunteers have removed tons of garbage. This time, they spent an hour cleaning and collected about 50 bags of garbage. Source: Vesti. Krasnoyarsk.",
            "presentation.title": "School project on ecology of Krasnoyarsk",
            "presentation.desc": "This website was created as part of an educational project by 10A grade students of School No. 91. It contains information about the city's environmental problems and possible solutions.",
            "presentation.button": "📑 View presentation",
            "presentation.note": "(presentation file will be added before the defense)",
            "footer.desc": "Uniting those who care. Together we can change the city's ecology.",
            "footer.contacts": "Contacts",
            "footer.social": "Social media",
            "footer.copyright": "© {year} Green Community of Krasnoyarsk | School project",
            "toast.map": "🗺️ Map of recycling collection points will be available soon! Stay tuned.",
            "toast.checklist": "📄 Download the checklist: 10 steps to an eco-friendly life. (link will be added)",
            "toast.donate": "💚 Thank you for your support! Donation details: +7 (995) 074-32-24 (SBP)",
            "toast.presentation": "📁 The project presentation will be available before the defense. Thank you for your interest!",
            "modal.title": "🌿 Join the movement",
            "modal.desc": "Leave your email to receive news and invitations to events.",
            "modal.email_placeholder": "Your email",
            "modal.submit": "Submit",
            "modal.note": "We do not share data with third parties.",
            "modal.success": "Thank you, {email}! You are subscribed to Krasnoyarsk environmental news.",
            "modal.invalid_email": "Please enter a valid email address."
        }
    };

    let currentLang = localStorage.getItem('language') || 'ru';
    const langToggle = document.getElementById('langToggle');
    const langToggleText = document.getElementById('langToggleText');

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = (lang === 'ru') ? 'ru' : 'en';
        if (langToggleText) {
            langToggleText.textContent = (lang === 'ru') ? 'EN' : 'RU';
        }
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            let translation = translations[lang][key];
            if (translation) {
                if (key === 'footer.copyright') {
                    translation = translation.replace('{year}', new Date().getFullYear());
                }
                if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
                    el.placeholder = translation;
                } else if (el.tagName === 'BUTTON' && el.getAttribute('data-i18n') === 'help.volunteer.btn') {
                    el.textContent = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
        const heroBtn = document.getElementById('heroBtn');
        if (heroBtn) {
            heroBtn.innerHTML = translations[lang]['hero.button'] + ' <i class="fas fa-arrow-right"></i>';
        }

        // Обновление текста кнопок "Подробнее" с учётом состояния (развёрнуто/свёрнуто)
        document.querySelectorAll('.read-more').forEach(btn => {
            const card = btn.closest('.news-card');
            const isExpanded = card.querySelector('.news-full').style.display === 'block';
            if (isExpanded) {
                btn.textContent = currentLang === 'ru' ? 'Скрыть ↑' : 'Hide ↑';
            } else {
                btn.textContent = translations[currentLang]['news.readmore'];
            }
        });
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = (currentLang === 'ru') ? 'en' : 'ru';
            setLanguage(newLang);
        });
    }

    setLanguage(currentLang);

    // -------------------- ТЁМНАЯ ТЕМА --------------------
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            if (themeToggle) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                themeToggle.setAttribute('aria-label', 'Светлая тема');
            }
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            if (themeToggle) {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                themeToggle.setAttribute('aria-label', 'Тёмная тема');
            }
        }
    }
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-theme')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }
    
    // -------------------- МОБИЛЬНОЕ МЕНЮ --------------------
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true' ? false : true;
            this.setAttribute('aria-expanded', expanded);
            mobileNav.classList.toggle('open');
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // -------------------- КНОПКА НАВЕРХ --------------------
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // -------------------- АНИМАЦИЯ ЦИФР --------------------
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateNumbers() {
        if (animated) return;
        statNumbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'));
            if (isNaN(target)) return;
            let current = 0;
            const increment = target / 50;
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    el.innerText = Math.floor(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    el.innerText = target;
                }
            };
            updateNumber();
        });
        animated = true;
    }
    
    const statsSection = document.getElementById('statsSection');
    if (statsSection) {
        const observerStats = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observerStats.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        observerStats.observe(statsSection);
    }
    
    // -------------------- АНИМАЦИЯ КАРТОЧЕК --------------------
    const animatedElements = document.querySelectorAll('.eco-card, .project-card, .help-card, .news-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        card.style.transition = 'opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
        cardObserver.observe(card);
    });
    
    // -------------------- TOAST --------------------
    function showToast(message, duration = 3000) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, duration);
    }
    
    // -------------------- МОДАЛЬНОЕ ОКНО --------------------
    function showModal() {
        const existingModal = document.querySelector('.modal-overlay');
        if (existingModal) existingModal.remove();
        
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h3>${translations[currentLang]['modal.title']}</h3>
                <p>${translations[currentLang]['modal.desc']}</p>
                <form id="modal-form">
                    <input type="email" placeholder="${translations[currentLang]['modal.email_placeholder']}" required>
                    <button type="submit">${translations[currentLang]['modal.submit']}</button>
                </form>
                <p class="modal-note">${translations[currentLang]['modal.note']}</p>
            </div>
        `;
        document.body.appendChild(modal);
        
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        
        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape' && modal) {
                modal.remove();
                document.removeEventListener('keydown', escapeHandler);
            }
        });
        
        const form = modal.querySelector('#modal-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            if (email && email.includes('@')) {
                const successMsg = translations[currentLang]['modal.success'].replace('{email}', email);
                showToast(successMsg);
                modal.remove();
            } else {
                showToast(translations[currentLang]['modal.invalid_email'], 2000);
            }
        });
    }
    
    // -------------------- ОБРАБОТЧИКИ КНОПОК --------------------
    const joinButtons = document.querySelectorAll('#joinBtn, #heroBtn');
    joinButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();
        });
    });
    
    const volunteerBtn = document.querySelector('.volunteer-btn');
    if (volunteerBtn) {
        volunteerBtn.addEventListener('click', () => showModal());
    }
    
    const mapBtn = document.querySelector('.map-btn');
    if (mapBtn) {
        mapBtn.addEventListener('click', () => {
            showToast(translations[currentLang]['toast.map']);
        });
    }
    
    const checklistBtn = document.querySelector('.checklist-btn');
    if (checklistBtn) {
        checklistBtn.addEventListener('click', () => {
            showToast(translations[currentLang]['toast.checklist']);
        });
    }
    
    const donateBtn = document.querySelector('.donate-btn');
    if (donateBtn) {
        donateBtn.addEventListener('click', () => {
            showToast(translations[currentLang]['toast.donate']);
        });
    }
    
    // const presentationBtn = document.getElementById('presentationBtn');
    // if (presentationBtn) {
    //     presentationBtn.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         showToast(translations[currentLang]['toast.presentation']);
    //     });
    // }
    
    // -------------------- РАСКРЫТИЕ НОВОСТЕЙ --------------------
    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const newsCard = this.closest('.news-card');
            const fullTextDiv = newsCard.querySelector('.news-full');
            const shortText = newsCard.querySelector('.news-short');
            
            if (fullTextDiv.style.display === 'none' || fullTextDiv.style.display === '') {
                fullTextDiv.style.display = 'block';
                shortText.style.display = 'none';
                this.textContent = currentLang === 'ru' ? 'Скрыть ↑' : 'Hide ↑';
            } else {
                fullTextDiv.style.display = 'none';
                shortText.style.display = 'block';
                this.textContent = translations[currentLang]['news.readmore'];
            }
        });
    });
    
    // -------------------- ПЛАВНАЯ ПРОКРУТКА --------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const targetElem = document.querySelector(targetId);
            if (targetElem) {
                e.preventDefault();
                targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // -------------------- ПАРАЛЛАКС --------------------
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero && window.scrollY < window.innerHeight) {
            const offset = window.scrollY * 0.35;
            hero.style.backgroundPosition = `50% ${offset}px`;
        }
    });
    
    // -------------------- ГОД В ФУТЕРЕ --------------------
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // -------------------- RIPPLE ЭФФЕКТ --------------------
    const buttons = document.querySelectorAll('.btn-primary, .btn-outline, .header-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            let ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '0px';
            ripple.style.height = '0px';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.transition = 'width 0.5s, height 0.5s, opacity 0.5s';
            ripple.style.pointerEvents = 'none';
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            requestAnimationFrame(() => {
                ripple.style.width = '200px';
                ripple.style.height = '200px';
                ripple.style.opacity = '0';
            });
            setTimeout(() => ripple.remove(), 500);
        });
    });
});