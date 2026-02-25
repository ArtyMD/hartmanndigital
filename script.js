document.addEventListener('DOMContentLoaded', () => {

    /*=============================================================================
      Translations Dictionary
    =============================================================================*/
    const translations = {
        en: {
            nav_home: "Home",
            nav_expertise: "Expertise",
            nav_pricing: "Pricing",
            nav_process: "Process",
            nav_contact: "Contact",
            nav_cta: "Get a Free Audit",
            hero_badge: "Elite Performance Marketing",
            hero_title: 'Turn Clicks Into <br/><span class="gradient-text">High-Value Clients.</span>',
            hero_desc: "We engineer scalable growth using data-driven <strong>Google Ads</strong>, high-converting <strong>Meta Ads</strong>, and flawless <strong>GTM & Analytics Setup</strong> so you track every dollar.",
            hero_cta_primary: 'Start Scaling Now <i class="fa-solid fa-arrow-right"></i>',
            hero_cta_secondary: "Explore Services",
            stat_roas: "Avg. ROAS",
            stat_spend: "Ad Spend Managed",
            stat_accuracy: "Data Accuracy",
            badge_google: "Google Partner",
            badge_meta: "Meta Verified",
            badge_gtm: "GTM Certified",
            services_title: 'Our <span class="gradient-text">Core Expertise</span>',
            services_subtitle: "We don't do everything. We do three things with absolute mastery to drive exponential revenue growth.",
            service_google_name: "Google Ads",
            service_google_desc: "Dominate search intent. We deploy search, shopping, and performance max campaigns that capture users exactly when they are ready to buy.",
            service_google_f1: "Intent-based Search Campaigns",
            service_google_f2: "Performance Max Mastery",
            service_google_f3: "Advanced Bidding Strategies",
            service_meta_name: "Meta Ads",
            service_meta_desc: "Stop the scroll and drive demand. From compelling creatives to advanced funnel retargeting, we acquire customers profitably on FB & IG.",
            service_meta_f1: "High-converting Creatives",
            service_meta_f2: "Full-Funnel Retargeting",
            service_meta_f3: "Advantage+ Catalog Ads",
            service_gtm_name: "GTM & Tracking",
            service_gtm_desc: "Without proper tracking, you're flying blind. We implement server-side tracking, GTM, and GA4 to ensure 100% data integrity.",
            service_gtm_f1: "GA4 & GTM Clean Setup",
            service_gtm_f2: "Server-Side Tracking via CAPI",
            service_gtm_f3: "Custom Conversion Events",
            process_title: 'The <span class="gradient-text">Hartmann Blueprint</span>',
            process_subtitle: "How we turn your ad budget into a predictable revenue engine.",
            process_step1_title: "Audit & Strategy",
            process_step1_desc: "Deep dive into your existing accounts, identifying wasted spend and scalable opportunities.",
            process_step2_title: "Flawless Tracking (GTM/GA4)",
            process_step2_desc: "Before spending a dime, we bulletproof your data layer so algorithms learn faster.",
            process_step3_title: "Campaign Deployment",
            process_step3_desc: "Launching omni-channel structures across Google and Meta, tailored for high ROAS.",
            process_step4_title: "Scale & Optimize",
            process_step4_desc: "Continuous multivariate testing of creatives, audiences, and ad copy to lower CPA.",
            contact_title: 'Ready to Outpace the <span class="gradient-text">Competition?</span>',
            contact_desc: "Stop guessing and start scaling. Request your complimentary ad account audit and custom growth roadmap today. We only onboard 3 new clients per month to ensure quality.",
            contact_location: "Global Remote Agency",
            form_name: "Name",
            form_name_placeholder: "John Doe",
            form_email: "Work Email",
            form_email_placeholder: "john@company.com",
            form_budget: "Monthly Ad Budget",
            form_budget_option_default: "Select Budget",
            form_budget_option1: "Under €5k/mo",
            form_budget_option2: "€5k - €20k/mo",
            form_budget_option3: "€20k - €50k/mo",
            form_budget_option4: "€50k+/mo",
            form_goals: "Primary Goal",
            form_goals_placeholder: "Tell us what you want to achieve...",
            form_submit: 'Request Free Audit <i class="fa-solid fa-paper-plane"></i>',
            footer_desc: "The elite performance marketing agency for ambitious brands demanding rigorous tracking and high ROAS.",
            footer_services: "Services",
            footer_ss_tracking: "Server-Side Tracking",
            footer_company: "Company",
            footer_about: "About Us",
            footer_case_studies: "Case Studies",
            footer_careers: "Careers",
            footer_contact: "Contact",
            footer_connect: "Connect",
            footer_copyright: "© 2026 Hartmann Digital Agency. All rights reserved.",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Service",
            pricing_title: 'Tailored <span class="gradient-text">Growth Plans</span>',
            pricing_subtitle: "Transparent pricing designed to scale with your business. No hidden fees, just results.",
            price_essential_name: "Essential",
            price_performance_name: "Performance",
            price_scale_name: "Enterprise",
            price_custom_name: "Custom",
            price_period: "/mo",
            price_cta: "Select Plan",
            price_cta_contact: "Request Audit",
            price_popular: "Most Popular",
            price_custom_label: "Contact Us",
            price_f1: "Google OR Meta Ads Management",
            price_f2: "Standard GTM Setup",
            price_f3: "Monthly Performance Report",
            price_f4: "Multi-channel Strategy",
            price_f1_p: "Google + Meta Ads Management",
            price_f2_p: "Advanced GTM & GA4 Setup",
            price_f3_p: "Bi-weekly Strategy Calls",
            price_f4_p: "Creative Optimization",
            price_f1_s: "Full Omni-channel Management",
            price_f2_s: "Server-side Tracking (CAPI)",
            price_f3_s: "Unlimited Ad Spend Managed",
            price_f4_s: "Dedicated Account Manager",
            price_f1_c: "Custom Requirements",
            price_f2_c: "Complex GTM Migrations",
            price_f3_c: "Fractional CMO Consulting",
            price_f4_c: "Project-based Services",
            price_learn_more: "Learn More",
            price_show_less: "Show Less",
            price_benefits_title: "Why this plan?",
            price_includes_title: "What's included?",
            price_essential_benefit: "Perfect for startups and small businesses looking to establish a solid footprint on one major ad platform. We focus on efficiency and getting you the best ROAS for every euro spent.",
            price_essential_i1: "Keyword research & Competitor analysis",
            price_essential_i2: "Ad copy creation & multivariate testing",
            price_essential_i3: "Basic conversion tracking & GTM audit",
            price_performance_benefit: "The ultimate choice for growing brands. By combining Google and Meta, we create a powerful cross-platform synergy that drives users through a complete conversion funnel.",
            price_performance_i1: "Strategic multi-channel funnel design",
            price_performance_i2: "Advanced GA4 event tracking & custom dashboards",
            price_performance_i3: "Continuous A/B testing for landing page optimization",
            price_scale_benefit: "Built for high-volume advertisers who need absolute data precision and aggressive market capture. We leverage server-side tracking to beat cookie limitations and maximize signal quality.",
            price_scale_i1: "Full Server-Side CAPI implementation",
            price_scale_i2: "Unlimited campaign scaling & budget management",
            price_scale_i3: "Weekly deep-dive strategy & creative workshops",
            price_custom_benefit: "For brands with unique challenges, complex technical stacks, or those needing high-level strategic guidance without full-time agency management.",
            price_custom_i1: "Tailored scope of work & project milestones",
            price_custom_i2: "Technical architecture & data ecosystem design",
            price_custom_i3: "Strategic mentorship for in-house marketing teams"
        },
        ru: {
            nav_home: "Главная",
            nav_expertise: "Услуги",
            nav_pricing: "Цены",
            nav_process: "Процесс",
            nav_contact: "Контакт",
            nav_cta: "Бесплатный аудит",
            hero_badge: "Элитный перфоманс-маркетинг",
            hero_title: 'Превращаем клики в <br/><span class="gradient-text">высокочековых клиентов.</span>',
            hero_desc: "Мы строим масштабируемый рост, используя <strong>Google Ads</strong> на основе данных, высококонверсионную <strong>Meta Ads</strong> и безупречную настройку <strong>GTM и аналитики</strong>.",
            hero_cta_primary: 'Начать масштабирование <i class="fa-solid fa-arrow-right"></i>',
            hero_cta_secondary: "Наши услуги",
            stat_roas: "Средний ROAS",
            stat_spend: "Бюджет в управлении",
            stat_accuracy: "Точность данных",
            badge_google: "Партнер Google",
            badge_meta: "Meta Verified",
            badge_gtm: "GTM Сертифицирован",
            services_title: 'Наши <span class="gradient-text">ключевые компетенции</span>',
            services_subtitle: "Мы не делаем всё подряд. Мы мастерски владеем тремя инструментами для взрывного роста выручки.",
            service_google_name: "Google Ads",
            service_google_desc: "Доминируйте в поисковой выдаче. Мы запускаем поисковые, торговые и Performance Max кампании, которые находят клиентов в момент готовности к покупке.",
            service_google_f1: "Поисковые кампании по интенту",
            service_google_f2: "Мастерство Performance Max",
            service_google_f3: "Продвинутые стратегии ставок",
            service_meta_name: "Meta Ads",
            service_meta_desc: "Заставьте пользователя остановить скролл. От креативов до сложных воронок ретаргетинга — мы привлекаем клиентов прибыльно в FB и IG.",
            service_meta_f1: "Высококонверсионные креативы",
            service_meta_f2: "Ретаргетинг на всю воронку",
            service_meta_f3: "Каталожная реклама Advantage+",
            service_gtm_name: "GTM и Трекинг",
            service_gtm_desc: "Без правильного трекинга вы летите вслепую. Мы внедряем серверный трекинг, GTM и GA4 для 100% точности данных.",
            service_gtm_f1: "Чистая настройка GA4 и GTM",
            service_gtm_f2: "Серверный трекинг (CAPI)",
            service_gtm_f3: "Кастомные события конверсий",
            process_title: 'План <span class="gradient-text">Hartmann Blueprint</span>',
            process_subtitle: "Как мы превращаем ваш рекламный бюджет в предсказуемую машину выручки.",
            process_step1_title: "Аудит и стратегия",
            process_step1_desc: "Глубокий анализ текущих аккаунтов, поиск точек слива бюджета и возможностей масштабирования.",
            process_step2_title: "Безупречный трекинг",
            process_step2_desc: "Прежде чем тратить ни копейки, мы настраиваем уровень данных, чтобы алгоритмы обучались быстрее.",
            process_step3_title: "Запуск кампаний",
            process_step3_desc: "Запуск омниканальных структур в Google и Meta, адаптированных под высокий ROAS.",
            process_step4_title: "Масштаб и оптимизация",
            process_step4_desc: "Постоянное тестирование креативов, аудиторий и текстов для снижения стоимости лида.",
            contact_title: 'Готовы опередить <span class="gradient-text">конкурентов?</span>',
            contact_desc: "Хватит гадать, пора масштабироваться. Запросите бесплатный аудит и персональный план роста сегодня. Мы берем только 3 новых клиента в месяц.",
            contact_location: "Глобальное удаленное агентство",
            form_name: "Имя",
            form_name_placeholder: "Иван Иванов",
            form_email: "Рабочий Email",
            form_email_placeholder: "ivan@company.com",
            form_budget: "Месячный бюджет",
            form_budget_option_default: "Выберите бюджет",
            form_budget_option1: "До €5,000/мес",
            form_budget_option2: "€5,000 - €20,000/мес",
            form_budget_option3: "€20,000 - €50,000/мес",
            form_budget_option4: "€50,000+/мес",
            form_goals: "Основная цель",
            form_goals_placeholder: "Расскажите, чего вы хотите достичь...",
            form_submit: 'Запросить аудит <i class="fa-solid fa-paper-plane"></i>',
            footer_desc: "Элитное перфоманс-агентство для амбициозных брендов, требующих точного трекинга и высокого ROAS.",
            footer_services: "Услуги",
            footer_ss_tracking: "Серверный трекинг",
            footer_company: "Компания",
            footer_about: "О нас",
            footer_case_studies: "Кейсы",
            footer_careers: "Вакансии",
            footer_contact: "Контакт",
            footer_connect: "Социальные сети",
            footer_copyright: "© 2026 Агентство Hartmann Digital. Все права защищены.",
            footer_privacy: "Политика конфиденциальности",
            footer_terms: "Условия использования",
            pricing_title: 'Тарифные <span class="gradient-text">планы роста</span>',
            pricing_subtitle: "Прозрачное ценообразование для масштабирования вашего бизнеса. Никаких скрытых комиссий.",
            price_essential_name: "Базовый",
            price_performance_name: "Перфоманс",
            price_scale_name: "Энтерпрайз",
            price_custom_name: "Индивидуальный",
            price_period: "/мес",
            price_cta: "Выбрать тариф",
            price_cta_contact: "Связаться",
            price_popular: "Популярный",
            price_custom_label: "Договорная",
            price_f1: "Управление Google ИЛИ Meta Ads",
            price_f2: "Стандартная настройка GTM",
            price_f3: "Ежемесячный отчет",
            price_f4: "Мультиканальная стратегия",
            price_f1_p: "Управление Google + Meta Ads",
            price_f2_p: "Продвинутая настройка GTM и GA4",
            price_f3_p: "Двухнедельные созвоны",
            price_f4_p: "Оптимизация креативов",
            price_f1_s: "Полное мультиканальное управление",
            price_f2_s: "Серверный трекинг (CAPI)",
            price_f3_s: "Неограниченный бюджет",
            price_f4_s: "Персональный менеджер",
            price_f1_c: "Индивидуальные требования",
            price_f2_c: "Сложные миграции GTM",
            price_f3_c: "Консалтинг уровня CMO",
            price_f4_c: "Проектные услуги",
            price_learn_more: "Подробнее",
            price_show_less: "Свернуть",
            price_benefits_title: "Почему этот план?",
            price_includes_title: "Что включено?",
            price_essential_benefit: "Идеально для стартапов и малого бизнеса, стремящихся закрепиться на одной основной рекламной платформе. Мы фокусируемся на эффективности и лучшем ROAS.",
            price_essential_i1: "Исследование ключевых слов и анализ конкурентов",
            price_essential_i2: "Создание текстов объявлений и мультивариантное тестирование",
            price_essential_i3: "Базовый трекинг конверсий и аудит GTM",
            price_performance_benefit: "Лучший выбор для растущих брендов. Сочетая Google и Meta, мы создаем мощную синергию, которая ведет пользователей через всю воронку продаж.",
            price_performance_i1: "Стратегический дизайн мультиканальной воронки",
            price_performance_i2: "Продвинутый трекинг GA4 и кастомные дашборды",
            price_performance_i3: "Постоянное A/B тестирование посадочных страниц",
            price_scale_benefit: "Создано для рекламодателей с большими объемами, которым нужна абсолютная точность данных. Мы используем серверный трекинг для обхода ограничений cookies.",
            price_scale_i1: "Полное внедрение Server-Side CAPI",
            price_scale_i2: "Неограниченное масштабирование кампаний и бюджета",
            price_scale_i3: "Еженедельные глубокие стратегии и воркшопы",
            price_custom_benefit: "Для брендов с уникальными задачами, сложными техстеками или тех, кому нужно стратегическое руководство высокого уровня.",
            price_custom_i1: "Индивидуальный объем работ и этапы проекта",
            price_custom_i2: "Техническая архитектура и дизайн экосистемы данных",
            price_custom_i3: "Стратегическое наставничество для внутренних команд"
        },
        ro: {
            nav_home: "Acasă",
            nav_expertise: "Expertiză",
            nav_pricing: "Prețuri",
            nav_process: "Proces",
            nav_contact: "Contact",
            nav_cta: "Audit Gratuit",
            hero_badge: "Marketing de Performanță de Elită",
            hero_title: 'Transformă Click-urile în <br/><span class="gradient-text">Clienți Valoroși.</span>',
            hero_desc: "Construim creștere scalabilă folosind <strong>Google Ads</strong> bazat pe date, <strong>Meta Ads</strong> cu conversie ridicată și configurare impecabilă <strong>GTM și Analytics</strong>.",
            hero_cta_primary: 'Începe Scalarea Acum <i class="fa-solid fa-arrow-right"></i>',
            hero_cta_secondary: "Explorează Serviciile",
            stat_roas: "ROAS Mediu",
            stat_spend: "Buget Administrat",
            stat_accuracy: "Acuratețea Datelor",
            badge_google: "Partener Google",
            badge_meta: "Meta Verificat",
            badge_gtm: "Certificat GTM",
            services_title: 'Expertiza Noastră <span class="gradient-text">Principală</span>',
            services_subtitle: "Nu facem de toate. Facem trei lucruri cu măiestrie absolută pentru a genera creșteri exponențiale ale veniturilor.",
            service_google_name: "Google Ads",
            service_google_desc: "Domină intenția de căutare. Implementăm campanii de Search, Shopping și Performance Max care captează utilizatorii exact când sunt gata să cumpere.",
            service_google_f1: "Campanii Search bazate pe intenție",
            service_google_f2: "Măiestrie Performance Max",
            service_google_f3: "Strategii Avansate de Licitare",
            service_meta_name: "Meta Ads",
            service_meta_desc: "Oprește scroll-ul și generează cerere. De la creații convingătoare la retargeting avansat, achiziționăm clienți profitabil pe FB și IG.",
            service_meta_f1: "Creativitate de Înaltă Conversie",
            service_meta_f2: "Retargeting pe tot Funnel-ul",
            service_meta_f3: "Anunțuri Advantage+ Catalog",
            service_gtm_name: "GTM și Tracking",
            service_gtm_desc: "Fără tracking corect, zbori pe orb. Implementăm tracking server-side, GTM și GA4 pentru a asigura integritatea datelor 100%.",
            service_gtm_f1: "Configurare Curată GA4 și GTM",
            service_gtm_f2: "Tracking Server-Side prin CAPI",
            service_gtm_f3: "Evenimente de Conversie Personalizate",
            process_title: 'Planul <span class="gradient-text">Hartmann Blueprint</span>',
            process_subtitle: "Cum transformăm bugetul tău de publicitate într-un motor de venituri predictibil.",
            process_step1_title: "Audit și Strategie",
            process_step1_desc: "Analiză profundă a conturilor existente, identificând cheltuielile inutile și oportunitățile scalabile.",
            process_step2_title: "Tracking Impecabil",
            process_step2_desc: "Înainte de a cheltui un ban, securizăm stratul de date pentru ca algoritmii să învețe mai repede.",
            process_step3_title: "Lansarea Campaniilor",
            process_step3_desc: "Lansarea structurilor omni-channel pe Google și Meta, adaptate pentru un ROAS ridicat.",
            process_step4_title: "Scalare și Optimizare",
            process_step4_desc: "Testare continuă a creațiilor, audiențelor și textelor publicitare pentru a reduce CPA.",
            contact_title: 'Ești gata să depășești <span class="gradient-text">Concurența?</span>',
            contact_desc: "Nu mai ghici și începe să scalezi. Solicită astăzi auditul gratuit al contului de publicitate și planul de creștere personalizat. Acceptăm doar 3 clienți noi pe lună.",
            contact_location: "Agenție Globală Remote",
            form_name: "Nume",
            form_name_placeholder: "Ion Popescu",
            form_email: "Email de Lucru",
            form_email_placeholder: "ion@companie.ro",
            form_budget: "Buget Lunar",
            form_budget_option_default: "Selectează Bugetul",
            form_budget_option1: "Sub €5,000/lună",
            form_budget_option2: "€5,000 - €20,000/lună",
            form_budget_option3: "€20,000 - €50,000/lună",
            form_budget_option4: "€50,000+/lună",
            form_goals: "Obiectiv Principal",
            form_goals_placeholder: "Spune-ne ce vrei să obții...",
            form_submit: 'Solicită Audit Gratuit <i class="fa-solid fa-paper-plane"></i>',
            footer_desc: "Agenția de elită în marketing de performanță pentru branduri ambițioase care cer tracking riguros și ROAS ridicat.",
            footer_services: "Servicii",
            footer_ss_tracking: "Tracking Server-Side",
            footer_company: "Companie",
            footer_about: "Despre Noi",
            footer_case_studies: "Studii de Caz",
            footer_careers: "Cariere",
            footer_contact: "Contact",
            footer_connect: "Conectează-te",
            footer_copyright: "© 2026 Agenția Hartmann Digital. Toate drepturile rezervate.",
            footer_privacy: "Politică de Confidențialitate",
            footer_terms: "Termeni și Condiții",
            pricing_title: 'Planuri de <span class="gradient-text">creștere</span>',
            pricing_subtitle: "Prețuri transparente concepute pentru a scala odată cu afacerea ta. Fără taxe ascunse.",
            price_essential_name: "Esențial",
            price_performance_name: "Performanță",
            price_scale_name: "Enterprise",
            price_custom_name: "Personalizat",
            price_period: "/lună",
            price_cta: "Alege Planul",
            price_cta_contact: "Contactează-ne",
            price_popular: "Cel mai popular",
            price_custom_label: "Negociabil",
            price_f1: "Gestionare Google SAU Meta Ads",
            price_f2: "Configurare Standard GTM",
            price_f3: "Raport de Performanță Lunar",
            price_f4: "Strategie Multi-canal",
            price_f1_p: "Gestionare Google + Meta Ads",
            price_f2_p: "Configurare Avansată GTM și GA4",
            price_f3_p: "Apeluri de Strategie Bilunare",
            price_f4_p: "Optimizare Creativă",
            price_f1_s: "Gestionare Full Omni-channel",
            price_f2_s: "Tracking Server-side (CAPI)",
            price_f3_s: "Buget Administrat Nelimitat",
            price_f4_s: "Manager de Cont Dedicat",
            price_f1_c: "Cerințe Personalizate",
            price_f2_c: "Migrări GTM Complexe",
            price_f3_c: "Consultanță Fractional CMO",
            price_f4_c: "Servicii pe Bază de Proiect",
            price_learn_more: "Află Mai Multe",
            price_show_less: "Arată Mai Puțin",
            price_benefits_title: "De ce acest plan?",
            price_includes_title: "Ce este inclus?",
            price_essential_benefit: "Perfect pentru startup-uri și afaceri mici care doresc să stabilească o prezență solidă pe o platformă publicitară majoră. Ne concentrăm pe eficiență.",
            price_essential_i1: "Cercetare cuvinte cheie și analiză competitori",
            price_essential_i2: "Creare texte ad-uri și testare multivariată",
            price_essential_i3: "Tracking conversii de bază și audit GTM",
            price_performance_benefit: "Alegerea supremă pentru brandurile în creștere. Combinând Google și Meta, creăm o sinergie puternică ce conduce utilizatorii prin funnel-ul complet.",
            price_performance_i1: "Design strategic de funnel multi-canal",
            price_performance_i2: "Tracking avansat GA4 și dashboard-uri personalizate",
            price_performance_i3: "Testare continuă A/B pentru optimizarea paginilor",
            price_scale_benefit: "Creat pentru agenții de publicitate cu volum mare care au nevoie de precizie absolută a datelor. Utilizăm tracking server-side.",
            price_scale_i1: "Implementare completă Server-Side CAPI",
            price_scale_i2: "Scalare nelimitată a campaniilor și bugetului",
            price_scale_i3: "Deep-dive lunar în strategie și workshop-uri creative",
            price_custom_benefit: "Pentru branduri cu provocări unice, stack-uri tehnice complexe sau cei care au nevoie de îndrumare strategică la nivel înalt.",
            price_custom_i1: "Scopul lucrării și etapele proiectului personalizate",
            price_custom_i2: "Arhitectură tehnică și design de ecosistem de date",
            price_custom_i3: "Mentorat strategic pentru echipele interne de marketing"
        }
    };

    /*=============================================================================
      Pricing Card Expansion Logic (Accordion Style)
    =============================================================================*/
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        const btn = card.querySelector('.expand-btn');
        const btnText = btn.querySelector('span');

        card.addEventListener('click', (e) => {
            // Prevent interference with CTA buttons or links
            if (e.target.closest('a')) return;

            const isExpanded = card.classList.contains('expanded');

            // 1. If we are opening a new one, close all others first
            if (!isExpanded) {
                pricingCards.forEach(otherCard => {
                    otherCard.classList.remove('expanded');
                    const otherBtnSpan = otherCard.querySelector('.expand-btn span');
                    if (otherBtnSpan) {
                        otherBtnSpan.textContent = translations[localStorage.getItem('preferred-lang') || 'en'].price_learn_more || 'Learn More';
                    }
                });
            }

            // 2. Toggle current card
            card.classList.toggle('expanded');

            // 3. Update button text for current card
            if (card.classList.contains('expanded')) {
                btnText.textContent = translations[localStorage.getItem('preferred-lang') || 'en'].price_show_less || 'Show Less';
            } else {
                btnText.textContent = translations[localStorage.getItem('preferred-lang') || 'en'].price_learn_more || 'Learn More';
            }
        });

        // The expansion is handled by the card's click listener.
        // We only prevent default for the button to avoid accidental form submissions or jumps.
        btn.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    /*=============================================================================
      Language Switching Logic
    =============================================================================*/
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangText = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('.lang-dropdown a');

    // Toggle Dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    // Close on outside click
    document.addEventListener('click', () => langDropdown.classList.remove('show'));

    // Change Language
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });

    function setLanguage(lang) {
        // Update button text
        currentLangText.textContent = lang.toUpperCase();

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update all placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update active class in dropdown
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Save preference
        localStorage.setItem('preferred-lang', lang);
    }

    // Initialize with saved language or default English
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    setLanguage(savedLang);

    /*=============================================================================
      Header Scroll Effect
    =============================================================================*/
    const header = document.getElementById('site-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /*=============================================================================
      Intersection Observer for Scroll Animations
    =============================================================================*/
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    /*=============================================================================
      Dynamic Process Steps Interaction
    =============================================================================*/
    const processSteps = document.querySelectorAll('.process-step');

    processSteps.forEach(step => {
        // Handle click
        step.addEventListener('click', () => activateStep(step));

        // Handle keyboard navigation (Enter or Space)
        step.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateStep(step);
            }
        });
    });

    function activateStep(selectedStep) {
        // Remove active class from all steps
        processSteps.forEach(step => step.classList.remove('active'));
        // Add active class to clicked step
        selectedStep.classList.add('active');
    }

    /*=============================================================================
      Smooth Scrolling for Nav Links
    =============================================================================*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /*=============================================================================
      Mobile Menu Logic
    =============================================================================*/
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const mobileMenuIcon = mobileMenuBtn.querySelector('i');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');

            // Toggle Icon
            if (mainNav.classList.contains('active')) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-xmark');
                document.body.style.overflow = 'hidden'; // Lock scroll
            } else {
                mobileMenuIcon.classList.remove('fa-xmark');
                mobileMenuIcon.classList.add('fa-bars');
                document.body.style.overflow = ''; // Unlock scroll
            }
        });

        // Close menu on link click
        const navLinks = mainNav.querySelectorAll('.nav-link, .btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuIcon.classList.remove('fa-xmark');
                mobileMenuIcon.classList.add('fa-bars');
                document.body.style.overflow = '';
            });
        });
    }

    /*=============================================================================
      Form Submission Simulation
    =============================================================================*/
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            const originalText = submitBtn.innerHTML;

            // Visual feedback
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Audit Requested!';
                submitBtn.classList.remove('btn-primary');
                submitBtn.style.background = '#34a853'; // Google Green success
                submitBtn.style.boxShadow = '0 0 20px rgba(52, 168, 83, 0.4)';

                // Reset form
                leadForm.reset();

                // Revert button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.add('btn-primary');
                    submitBtn.style.background = '';
                    submitBtn.style.boxShadow = '';
                }, 3000);
            }, 1500);
        });
    }

});
