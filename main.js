document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            /* nav */
            nav_about: "About",
            nav_skills: "Skills",
            nav_experience: "Experience",
            nav_projects: "Projects",
            nav_education: "Education",
            nav_contact: "Contact",

            /* hero */
            hero_name: "Jay Kachhadiya",
            hero_role_options: ["Data Analyst", "Data Engineer"],
            hero_tagline: "Passionate about transforming complex data into actionable insights and building robust data pipelines to drive business decisions.",
            hero_cv: "Download CV",
            hero_contact: "Contact Me",

            /* sections */
            about_heading: "About Me",
            about_subtitle: "I am currently pursuing a Master’s in E-Government at the University of Koblenz, specializing in turning raw data into actionable insights. Skilled in SQL, Python, Data Analytics Tools, and Machine Learning, complemented by hands-on experience with ETL processes and Cloud Platforms. Proven ability to uncover trends, identify opportunities, and drive data-driven decision-making. Looking to contribute to a dynamic team and make a meaningful impact.",

            skills_heading: "Technical Skills",
            skills_subtitle: "My toolbox for data wrangling, analysis, visualization, and modeling.",
            skills_ml: "Machine Learning",
            skills_sa: "Statistical Analysis",

            certs_heading: "Certificates & Credentials",
            certs_subtitle: "My commitment to continuous learning and professional development.",
            certs_slide1: "Data Analysis and Visualization with Power BI",
            certs_slide2: "Advanced Data Visualization with Tableau",
            certs_slide3: "Data Analysis with Python",
            certs_slide4: "Machine Learning with Python",
            certs_slide5: "BigQuery for Data Analysts",
            certs_slide6: "Getting Started with Data Analytics on AWS",
            certs_slide7: "Extract, Transform & Load Data in Power BI",
            certs_slide8: "Data Modeling in Power BI",
            certs_slide9: "Harnessing the Power of Data with Power BI",
            certs_slide10: "Preparing Data for Analysis with Microsoft Excel",
            certs_slide11: "Microsoft PL-300 Exam Preparation and Practice",
            skills_da: "Data Analysis",
            skills_st: "Storytelling",
            skills_a: "Analytics",

            exp_heading: "Professional Experience",
            exp_subtitle: "Where I've applied my skills to solve real-world problems.",
            exp1_title: "Business Intelligence Analyst",
            exp1_type: "Internship",
            exp1_location: "Surat, Gujarat, India",
            exp1_bullet1: "Built & maintained interactive Power BI dashboards tracking KPIs for real-time insights.",
            exp1_bullet2: "Cleaned, normalized, and validated large datasets using Python (Pandas) and advanced SQL.",
            exp1_bullet3: "Collaborated cross-functionally to capture requirements and ship analytical solutions.",
            exp1_bullet4: "Automated ETL steps to reduce manual effort and improve report consistency.",
            skills_dm: "Data Modeling",
            exp2_title: "Data Analyst",
            exp2_type: "Internship",
            exp2_location: "Junagadh, Gujarat, India",
            exp2_bullet1: "Cleaned & transformed large datasets with Python and SQL to produce reliable, analysis-ready data.",
            exp2_bullet2: "Performed EDA to uncover trends/outliers and turned results into practical recommendations.",
            exp2_bullet3: "Built dashboards and reports; applied visualization, statistics, and ML techniques to support decisions.",
            skills_viz: "Visualization",
            skills_rep: "Reporting",

            projects_heading: "Featured Projects",
            projects_subtitle: "A selection of projects that demonstrate my capabilities.",
            projects1_title: "INX Future Inc Employee Performance",
            projects2_title: "Customer Churn Business Case",
            projects3_title: "Zomato Restaurants Analysis using Power BI",
            projects4_title: "Skin Disorder Prediction",
            projects5_title: "Texas Salary Prediction",
            projects6_title: "Exploring Trends in the Automotive Industry Analysis using Tableau",
            projects1_desc: "Predicted employee salary levels using classification models (LogReg, RF, XGBoost) achieving 92.33% accuracy.",
            projects2_desc: "Built churn models (LogReg, Random Forest) with 91.33% accuracy; identified key drivers like contract type and tenure.",
            projects3_desc: "Power BI dashboards for 9,500+ restaurants across 15 countries: cuisine popularity, ratings, cost distributions.",
            projects4_desc: "Skin-disorder classification at 98.65% accuracy using RF, SVM, XGBoost; clean prep and clear visuals.",
            projects5_desc: "End to end salary prediction using ML, 99.99% accuracy with clear, decision ready visuals.",
            projects6_desc: "Tableau dashboard analyzing car sales by fuel type, ownership, and dealer to reveal pricing trends.",
            skills_stat: "Statistics",
            skills_dv: "Data Visualization",
            skills_dc: "Data Cleaning",
            projects_code: "View Code",
            projects_show_more: "Show more projects",
            projects_show_less: "Show fewer projects",

            edu_heading: "My Academic Journey",
            edu_subtitle: "Building a foundation in data and technology.",
            edu1_univ: "University of Koblenz",
            edu1_location: "Koblenz, Germany",
            edu1_desc: "Focusing on the intersection of technology, data, and public administration to drive digital transformation. Key coursework includes Data Science for Public Sector, Digital Service Design, and IT Governance.",
            skills_cs: "Computer Security",
            skills_ea: "Enterprise Architecture",
            edu2_location: "Junagadh, Gujarat, India",
            edu2_desc: "Gained a comprehensive foundation in computer science, including programming, database management, and software engineering. Specialized in data structures and algorithms.",
            skills_prog: "Programming",
            skills_ds: "Data Structures",
            skills_se: "Software Engineering",
            skills_cn: "Computer Networks",
            skills_os: "Operating Systems (OS)",
            skills_web: "Web Development",
            skills_ss: "Star Schema",
            skills_m: "Modeling",
            skills_c: "Collection",
            skills_dp: "Data Preparation",

            lang_heading: "Languages",
            lang_en_name: "English",
            lang_en_level: "Full Professional Proficiency",
            lang_de_name: "German",
            lang_de_level: "Limited Working Proficiency",

            contact_heading: "Get In Touch",
            contact_subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!",

            /* tooltips */
            tooltip_location: "Koblenz, Germany",
            tooltip_copy: "Copy to clipboard",
            tooltip_copied: "Copied!",
            tooltip_failed: "Failed to copy",
            contact_email: "Email",
            contact_phone: "Phone",
            contact_location: "Location",
            contact_compose: "Compose",
            contact_call: "Call",
            contact_whatsapp: "WhatsApp",
            contact_map: "Open Map",
            copyright: "All Rights Reserved."

        },

        de: {
            /* nav */
            nav_about: "Über mich",
            nav_skills: "Fähigkeiten",
            nav_experience: "Erfahrung",
            nav_projects: "Projekte",
            nav_education: "Ausbildung",
            nav_contact: "Kontakt",

            /* hero */
            hero_name: "Jay Kachhadiya",
            hero_role_options: ["Datenanalyst", "Dateningenieur"],
            hero_tagline: "Leidenschaftlich dabei, komplexe Daten in umsetzbare Erkenntnisse zu verwandeln und robuste Datenpipelines aufzubauen, um Geschäftsentscheidungen zu unterstützen.",
            hero_cv: "Lebenslauf herunterladen",
            hero_contact: "Kontakt aufnehmen",

            /* sections */
            about_heading: "Über mich",
            about_subtitle: "Ich studiere derzeit E-Government im Master an der Universität Koblenz und spezialisiere mich auf die Umwandlung von Rohdaten in umsetzbare Erkenntnisse. Ich verfüge über Kenntnisse in SQL, Python, Datenanalysetools und maschinellem Lernen, ergänzt durch praktische Erfahrung mit ETL-Prozessen und Cloud-Plattformen. Ich habe die Fähigkeit, Trends aufzudecken, Chancen zu identifizieren und datenbasierte Entscheidungen zu treffen. Ich möchte Teil eines dynamischen Teams werden und einen sinnvollen Beitrag leisten.",

            skills_heading: "Technische Fähigkeiten",
            skills_subtitle: "Mein Werkzeugkasten für Datenaufbereitung, Analyse, Visualisierung und Modellierung.",
            skills_ml: "Maschinelles Lernen",
            skills_sa: "Statistische Analyse",

            certs_heading: "Zertifikate & Nachweise",
            certs_subtitle: "Mein Engagement für kontinuierliches Lernen und berufliche Weiterentwicklung.",
            certs_slide1: "Datenanalyse und Visualisierung mit Power BI",
            certs_slide2: "Erweiterte Datenvisualisierung mit Tableau",
            certs_slide3: "Datenanalyse mit Python",
            certs_slide4: "Maschinelles Lernen mit Python",
            certs_slide5: "BigQuery für Datenanalysten",
            certs_slide6: "Einführung in die Datenanalyse auf AWS",
            certs_slide7: "Extrahieren, Transformieren und Laden von Daten in Power BI",
            certs_slide8: "Datenmodellierung in Power BI",
            certs_slide9: "Das Potenzial von Daten mit Power BI nutzen",
            certs_slide10: "Datenaufbereitung für die Analyse mit Microsoft Excel",
            certs_slide11: "Microsoft PL-300 Prüfungsvorbereitung und Praxis",
            skills_da: "Datenanalyse",
            skills_st: "Geschichtenerzählen",
            skills_a: "Analyse",
            skills_ss: "Sternschema",
            skills_m: "Modellierung",
            skills_c: "Sammlung",
            skills_dp: "Datenaufbereitung",

            exp_heading: "Berufserfahrung",
            exp_subtitle: "Wo ich meine Fähigkeiten in der Praxis eingesetzt habe.",
            exp1_title: "Business Intelligence Analyst",
            exp1_type: "Praktikum",
            exp1_location: "Surat, Gujarat, Indien",
            exp1_bullet1: "Erstellung und Pflege interaktiver Power BI-Dashboards zur Verfolgung von KPIs für Echtzeit-Einblicke.",
            exp1_bullet2: "Bereinigung, Normalisierung und Validierung großer Datensätze mit Python (Pandas) und fortgeschrittenem SQL.",
            exp1_bullet3: "Zusammenarbeit mit verschiedenen Abteilungen zur Erfassung von Anforderungen und Bereitstellung analytischer Lösungen.",
            exp1_bullet4: "Automatisierung von ETL-Schritten zur Reduzierung manueller Aufwände und Verbesserung der Berichtskonsistenz.",
            skills_dm: "Datenmodellierung",
            exp2_title: "Datenanalyst",
            exp2_type: "Praktikum",
            exp2_location: "Junagadh, Gujarat, Indien",
            exp2_bullet1: "Bereinigung und Transformation großer Datensätze mit Python und SQL zur Erstellung zuverlässiger, analysebereiter Daten.",
            exp2_bullet2: "Durchführung von EDA zur Aufdeckung von Trends/Ausreißern und Umsetzung der Ergebnisse in praktische Empfehlungen.",
            exp2_bullet3: "Erstellung von Dashboards und Berichten; Anwendung von Visualisierungs-, Statistik- und ML-Techniken zur Unterstützung von Entscheidungen.",
            skills_viz: "Visualisierung",
            skills_rep: "Berichterstattung",

            projects_heading: "Ausgewählte Projekte",
            projects_subtitle: "Eine Auswahl von Projekten, die meine Kompetenzen zeigen.",
            projects1_title: "INX Future Inc Mitarbeiterleistung",
            projects2_title: "Business Case zur Kundenabwanderung",
            projects3_title: "Zomato Restaurants Analyse mit Power BI",
            projects4_title: "Prognose von Hauterkrankungen",
            projects5_title: "Texas Gehaltsvorhersage",
            projects6_title: "Analyse von Trends in der Automobilindustrie mit Tableau",
            projects1_desc: "Mitarbeiterleistungsprognose mit 92.33% Genauigkeit unter Verwendung von Klassifikationsmodellen (LogReg, RF, XGBoost).",
            projects2_desc: "Churn-Modelle (LogReg, Random Forest) mit 91.33% Genauigkeit; Identifizierung von Schlüsselfaktoren wie Vertragstyp und Laufzeit.",
            projects3_desc: "Power BI-Dashboards für 9.500+ Restaurants in 15 Ländern: Küchenbeliebtheit, Bewertungen, Kostenverteilungen.",
            projects4_desc: "Hauterkrankungs-Klassifikation mit 98.65% Genauigkeit unter Verwendung von RF, SVM, XGBoost; saubere Vorbereitung und klare Visualisierungen.",
            projects5_desc: "End-to-End-Gehaltvorhersage mit ML, 99.99% Genauigkeit mit klaren, entscheidungsreifen Visualisierungen.",
            projects6_desc: "Tableau-Dashboard zur Analyse von Autoverkäufen nach Kraftstoffart, Besitzverhältnissen und Händler zur Aufdeckung von Preistrends.",
            skills_stat: "Statistik",
            skills_dv: "Datenvisualisierung",
            skills_dc: "Datenbereinigung",
            projects_code: "Code anzeigen",
            projects_show_more: "Mehr Projekte anzeigen",
            projects_show_less: "Weniger Projekte anzeigen",

            edu_heading: "Mein akademischer Werdegang",
            edu_subtitle: "Aufbau einer Grundlage in Daten und Technologie.",
            edu1_univ: "Universität Koblenz",
            edu1_location: "Koblenz, Deutschland",
            edu1_desc: "Der Schwerpunkt liegt auf der Schnittstelle zwischen Technologie, Daten und öffentlicher Verwaltung, um die digitale Transformation voranzutreiben. Zu den wichtigsten Lehrveranstaltungen gehören Data Science für den öffentlichen Sektor, Digital Service Design und IT-Governance.",
            skills_cs: "Computersicherheit",
            skills_ea: "Unternehmensarchitektur",
            edu2_location: "Junagadh, Gujarat, Indien",
            edu2_desc: "Umfassende Grundlagen der Informatik, einschließlich Programmierung, Datenbankmanagement und Softwareentwicklung. Spezialisierung auf Datenstrukturen und Algorithmen.",
            skills_prog: "Programmierung",
            skills_ds: "Datenstrukturen",
            skills_se: "Softwareentwicklung",
            skills_cn: "Computernetzwerke",
            skills_os: "Betriebssysteme (OS)",
            skills_web: "Webentwicklung",

            lang_heading: "Sprachen",
            lang_en_name: "Englisch",
            lang_en_level: "Professionelle Berufskompetenz",
            lang_de_name: "Deutsch",
            lang_de_level: "Eingeschränkte Berufskompetenz",

            contact_heading: "Kontaktieren Sie uns",
            contact_subtitle: "Ich freue mich über neue Projekte, Ideen oder Möglichkeiten. Melden Sie sich gern!",

            /* tooltips */
            tooltip_location: "Koblenz, Deutschland",
            tooltip_copy: "In die Zwischenablage kopieren",
            tooltip_copied: "Kopiert!",
            tooltip_failed: "Kopieren fehlgeschlagen",
            contact_email: "E-Mail",
            contact_phone: "Telefon",
            contact_location: "Standort",
            contact_compose: "Schreiben",
            contact_call: "Anrufen",
            contact_whatsapp: "WhatsApp",
            contact_map: "Karte öffnen",
            copyright: "Alle Rechte vorbehalten."

        }
    };

    const langEnBtn = document.getElementById('lang-en');
    const langDeBtn = document.getElementById('lang-de');

    function t(key, lang = (localStorage.getItem('language') || 'en')) {
        return (translations[lang] && translations[lang][key]) || translations.en[key] || key;
    }

    function applyTranslations(lang){
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        langEnBtn?.classList.toggle('active', lang === 'en');
        langDeBtn?.classList.toggle('active', lang === 'de');

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            const value = t(key, lang);

            // If element has a placeholder, translate that; else translate content.
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.hasAttribute('placeholder')) el.placeholder = value;
            } else {
                el.innerHTML = value;
            }
        });

        // Keep the footer year up-to-date
        const y = document.getElementById('copyright-year');
        if (y) y.textContent = new Date().getFullYear();
        startTypewriter(lang);
    }

    function setLanguage(lang){ 
        applyTranslations(lang);
    }

    langEnBtn?.addEventListener('click', () => setLanguage('en'));
    langDeBtn?.addEventListener('click', () => setLanguage('de'));

    // ========= Typewriter =========
    let typerInstance = null;

    function startTypewriter(lang = (localStorage.getItem('language') || 'en')) {
        const words = (translations[lang] && translations[lang].hero_role_options) || translations.en.hero_role_options;
        const out = document.getElementById('role-typed');
        if (!out || !words?.length) return;

        // stop previous
        if (typerInstance?.stop) typerInstance.stop();

        // fix min width to longest word to avoid layout shift
        const maxLen = Math.max(...words.map(w => w.length));
        out.parentElement.style.minWidth = `${maxLen + 1}ch`;

        typerInstance = makeTyper(out, words, {
            typeSpeed: 90,      // ms per character when typing
            deleteSpeed: 55,    // ms per character when deleting
            holdTime: 1200      // pause when a word is complete
        });
    }

    function makeTyper(el, words, {typeSpeed=80, deleteSpeed=50, holdTime=1000} = {}){
        let i = 0, idx = 0, deleting = false, stopped = false, current = words[0];

        function tick(){
            if (stopped) return;

            current = words[idx % words.length];
            const shown = el.textContent;

            if (!deleting) {
            // type forward
            el.textContent = current.slice(0, shown.length + 1);
            if (el.textContent === current) {
                setTimeout(() => { deleting = true; tick(); }, holdTime);
                return;
            }
            setTimeout(tick, typeSpeed);
            } else {
            // delete
            el.textContent = current.slice(0, shown.length - 1);
            if (el.textContent === "") {
                deleting = false;
                idx++;
                setTimeout(tick, typeSpeed);
                return;
            }
            setTimeout(tick, deleteSpeed);
            }
        }

        tick();
        return { stop(){ stopped = true; } };
    }

    // Initial language
    setLanguage(localStorage.getItem('language') || 'en');
    
    // --- THEME TOGGLE ---
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-icon-light');
    const darkIcon = document.getElementById('theme-icon-dark');

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    }

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        darkIcon.classList.toggle('hidden', !isDark);
        lightIcon.classList.toggle('hidden', isDark);
    });

    // --- SCROLL-REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
    
    // --- ACTIVE NAVIGATION LINK HIGHLIGHTING ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const updateActiveLink = () => {
        const scrollY = window.pageYOffset;
        let currentSectionId = '';

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            // Adjusting offset to trigger highlighting a bit earlier
            const sectionTop = current.offsetTop - 150; 
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = current.getAttribute('id');
            }
        });

        // Fallback for the top of the page
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // Scrolled to the bottom of the page
            currentSectionId = 'contact';
        } else if (currentSectionId === '' && scrollY < 200) {
            // At the very top, before any section is met
            currentSectionId = 'hero'; 
        }

        navLinks.forEach(link => {
            // Clear active class from all links
            link.classList.remove('active');
            // Add active class to the correct link
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };
    
    // Add event listener and call once on load
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Set initial state on page load
    
    // --- COPYABLE CHIPS ---
    document.querySelectorAll('.copy-chip').forEach(chip => {
        const tooltip = chip.nextElementSibling; // assumes <span class="tooltiptext"> immediately after the button

        chip.addEventListener('click', () => {
            const lang = localStorage.getItem('language') || 'en';
            navigator.clipboard.writeText(chip.dataset.copy).then(() => {
            tooltip.textContent = t('tooltip_copied', lang);
            setTimeout(() => { tooltip.textContent = t('tooltip_copy', lang); }, 2000);
            }).catch(() => {
            tooltip.textContent = t('tooltip_failed', lang);
            setTimeout(() => { tooltip.textContent = t('tooltip_copy', lang); }, 2000);
            });
        });

        // Optional: always reset label on hover (useful after a previous click)
        chip.addEventListener('mouseenter', () => {
            const lang = localStorage.getItem('language') || 'en';
            tooltip.textContent = t('tooltip_copy', lang);
        });
    });

    // --- CERTIFICATE SLIDER ---
    (() => {
    const slider = document.querySelector('.slider-container');
    if (!slider) return;
    const track = slider.querySelector('.slider-track');

    // One-time clone for seamless loop
    if (!track.dataset.cloned) {
        const originals = Array.from(track.children);
        originals.forEach(n => track.appendChild(n.cloneNode(true)));
        track.dataset.cloned = '1';
    }

    let halfWidth = track.scrollWidth / 2; // width of the original set
    let pos = 0;         // virtual x position
    let dir = 1;         // +1 = left, -1 = right (autoplay direction)
    let speed = 0.5;     // autoplay base speed (px per frame)
    let dragging = false;
    let hoverPause = false;
    let startX = 0, startPos = 0, moved = 0;
    let raf;

    // Keep measurements fresh (images / resize)
    const normalize = () => {
        if (halfWidth <= 0) return;
        if (pos >= halfWidth) pos -= halfWidth;
        if (pos < 0) pos += halfWidth;
    };
    const recalc = () => {
        halfWidth = track.scrollWidth / 2;
        normalize();
        track.style.transform = `translateX(${-pos}px)`;
    };
    new ResizeObserver(recalc).observe(track);
    window.addEventListener('load', recalc, { once: true });

    // Autoplay loop
    function tick(){
        if (!dragging && !hoverPause) {
        pos += speed * dir;
        normalize();
        track.style.transform = `translateX(${-pos}px)`;
        }
        raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    // Allow vertical scroll on touch; we handle horizontal ourselves
    slider.style.touchAction = 'pan-y';

    // ----- Pointer drag (mouse + touch) -----
    slider.addEventListener('pointerdown', (e) => {
        dragging = true;
        moved = 0;
        startX = e.clientX;
        startPos = pos;
        slider.classList.add('is-dragging');  // cursor -> grabbing
        slider.setPointerCapture(e.pointerId);
    });

    slider.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;    // >0 dragging right, <0 left
        moved = Math.max(moved, Math.abs(dx));
        pos = startPos - dx;              // follow finger/mouse
        normalize();
        track.style.transform = `translateX(${-pos}px)`;

        // Immediately reflect user intent in autoplay direction
        if (Math.abs(dx) > 2) dir = dx < 0 ? +1 : -1; // left swipe => move left, etc.
    });

    function endDrag(e){
        if (!dragging) return;
        dragging = false;
        slider.classList.remove('is-dragging'); // cursor back to grab
        try { slider.releasePointerCapture(e.pointerId); } catch {}
    }
    slider.addEventListener('pointerup', endDrag);
    slider.addEventListener('pointercancel', endDrag);
    slider.addEventListener('mouseleave', endDrag);

    // Prevent accidental link opens when it was a drag
    track.addEventListener('click', (e) => {
        if (moved > 6) { e.preventDefault(); e.stopPropagation(); }
        moved = 0;
    }, true);

    // ----- Hover pause (desktop only) -----
    slider.addEventListener('mouseenter', () => { hoverPause = true; });
    slider.addEventListener('mouseleave', () => { hoverPause = false; });

    // ----- Wheel / trackpad: scroll horizontally & set direction -----
    slider.addEventListener('wheel', (e) => {
        // Use dominant axis so vertical wheels still slide horizontally
        const d = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

        // We take control when hovered so prevent page scroll
        e.preventDefault();

        pos += d;                // wheel down/right => move left (natural feel)
        normalize();
        track.style.transform = `translateX(${-pos}px)`;

        // Reverse autoplay to match the scroll direction
        dir = d > 0 ? +1 : -1;
    }, { passive: false });
    })();
    
    document.querySelectorAll('.slide-title').forEach(el => {
        if (!el.hasAttribute('title')) el.setAttribute('title', el.textContent.trim());
    });
    document.querySelectorAll('.slide-card').forEach(card => {
        if (card.querySelector('.cert-badge')) return;
        const span = document.createElement('span');
        span.className = 'cert-badge';
        span.setAttribute('aria-label','Verified certificate');
        span.setAttribute('title','Verified certificate');
        span.innerHTML = `
        <!-- Rosette badge with ribbons (multicolor) -->
        <svg class="cert-badge" viewBox="0 0 128 128" role="img" aria-label="Certificate badge">
            <!-- ribbons -->
            <path d="M52 88 L28 124 L48 122 L56 126 L64 100 Z" fill="#ef5350"/>
            <path d="M76 88 L100 124 L80 122 L72 126 L64 100 Z" fill="#ef5350"/>

            <!-- scalloped rosette (12 lobes) -->
            <g>
                <defs>
                <!-- one lobe; we rotate it around (64,56) -->
                <circle id="lobe" cx="64" cy="28" r="18"/>
                </defs>
                <g fill="#fde47f">
                    <use href="#lobe"/>
                    <use href="#lobe" transform="rotate(30 64 56)"/>
                    <use href="#lobe" transform="rotate(60 64 56)"/>
                    <use href="#lobe" transform="rotate(90 64 56)"/>
                    <use href="#lobe" transform="rotate(120 64 56)"/>
                    <use href="#lobe" transform="rotate(150 64 56)"/>
                    <use href="#lobe" transform="rotate(180 64 56)"/>
                    <use href="#lobe" transform="rotate(210 64 56)"/>
                    <use href="#lobe" transform="rotate(240 64 56)"/>
                    <use href="#lobe" transform="rotate(270 64 56)"/>
                    <use href="#lobe" transform="rotate(300 64 56)"/>
                    <use href="#lobe" transform="rotate(330 64 56)"/>
                    <!-- outer core disc to smooth joins -->
                    <circle cx="64" cy="56" r="34"/>
                </g>

                <!-- inner disc -->
                <circle cx="64" cy="56" r="30" fill="#fbbf24"/>

                <!-- star -->
                <polygon fill="#ffe59d"
                points="64,36 69.9,47.6 83,49.5 73.5,58.1 75.9,70.9 64,64.8 52.1,70.9 54.5,58.1 45,49.5 58.1,47.6"/>
            </g>
        </svg>`;
        card.appendChild(span);
    });

    // after DOMContentLoaded
    const track = document.querySelector('#certificates .slider-track');
    if (track) {
        const clones = [...track.children].map(n => n.cloneNode(true));
        (window.requestIdleCallback || window.requestAnimationFrame)(() => {
            clones.forEach(c => {
            // lower priority of offscreen images
            c.querySelectorAll('img').forEach(img => { img.loading = 'lazy'; img.decoding = 'async'; });
            track.appendChild(c);
            });
        });
    }


    (function () {
        const toast = document.getElementById('contact-toast');

        function currentLang() {
            // prefer <html lang=""> that your applyTranslations sets
            return document.documentElement.lang || localStorage.getItem('language') || 'en';
        }

        function showToast(key) {
            if (!toast) return;
            // use your existing translator
            toast.textContent = (typeof t === 'function') ? t(key, currentLang()) : (window.translations?.[currentLang()]?.[key] || 'Copied!');
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 1300);
        }

        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
            const txt = btn.getAttribute('data-copy') || '';
            try {
                await navigator.clipboard.writeText(txt);
                showToast('tooltip_copied');
            } catch {
                showToast('tooltip_failed');
            }
            });
        });
    })();

    (function(){
        const grid = document.querySelector('.projects-grid');
        const btn  = document.getElementById('projects-toggle');
        if (!grid || !btn) return;

        function setBtnLabel(){
        const lang = localStorage.getItem('language') || 'en';
        const isAll = grid.classList.contains('show-all');
        btn.textContent = (typeof t === 'function')
            ? t(isAll ? 'projects_show_less' : 'projects_show_more', lang)
            : (isAll ? 'Show fewer projects' : 'Show more projects');
        }

        btn.addEventListener('click', () => {
        grid.classList.toggle('show-all');
        setBtnLabel();
        });

        // set initial label in current language
        setBtnLabel();

        // if your applyTranslations runs later, you can also re-run setBtnLabel() after language switches
        document.getElementById('lang-en')?.addEventListener('click', setBtnLabel);
        document.getElementById('lang-de')?.addEventListener('click', setBtnLabel);
    })();

    // --- DYNAMIC COPYRIGHT YEAR ---
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
});
