export const programs = {
    /* =========================
       B.A – Bachelor of Arts
    ========================= */
    ba: {
        title: "B.A Colleges in Pune",
        heroImage: "/images/department/ba.jpg",
        description:
            "A comprehensive Bachelor of Arts program designed to build strong analytical, communication, and critical thinking skills.",
        overview:
            "The Bachelor of Arts (B.A.) program offers a broad-based education in humanities and social sciences. It helps students develop intellectual depth, cultural awareness, research ability, and communication skills, preparing them for diverse career paths and higher studies.",
        eligibility: [
            "HSC (10+2) from any recognized board",
            "Students from Arts, Commerce, or Science streams are eligible",
        ],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "B.A (Bachelor of Arts)",
            duration: "3 Years (6 Semesters)",
            affiliation: "Savitribai Phule Pune University (SPPU)",
            approval: "NAAC Accredited Institution",
        },
        specializations: [
            "Economics",
            "Psychology",
            "Political Science",
            "Sociology",
            "History",
            "English Literature",
        ],
        curriculum: {
            "F.Y.B.A. (First Year)": [
                "Compulsory English",
                "Economics",
                "History",
                "Marathi OR Optional English",
                "Political Science",
                "Geography"
            ],
            "S.Y.B.A. (Second Year)": [
                "Compulsory English",
                "Special Level Subject (Choose one): Marathi, Economics, English, Political Science",
                "General Level Subjects (Choose two, excluding special): Geography/History, Economics/Politics, Marathi/English"
            ],
            "T.Y.B.A. (Third Year)": [
                "Compulsory English",
                "Special Level Subject (Continuation from S.Y.B.A.)",
                "General Level Subjects (Continuation from S.Y.B.A.)"
            ]
        },
        stats: [
            { value: "300+", label: "Students Placed" },
            { value: "50+", label: "Recruiting Organizations" },
        ],
        campusImage: "/images/art.jpg",
    },

    /* =========================
       B.Com – Bachelor of Commerce
    ========================= */
    bcom: {
        title: "B.Com Colleges in Pune",
        heroImage: "/images/BCom.jpg",
        description:
            "Great prospects in B.Com institutions in Pune with strong academic and industry exposure.",
        overview:
            "The B.Com program focuses on accounting, finance, taxation, and business management, equipping students with practical and professional skills for commerce-related careers.",
        eligibility: [
            "HSC (10+2) with English",
            "Diploma after SSC",
        ],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "B.Com (Bachelor of Commerce)",
            duration: "3 Years (6 Semesters)",
            affiliation: "Savitribai Phule Pune University (SPPU)",
            approval: "NAAC A Grade",
        },
        specializations: [
            "Accounting",
            "Finance",
            "Taxation",
            "Banking",
        ],
        curriculum: {
            "F.Y.B.Com Semester I": [
                "Major Subjects (Choose any one from each group):",
                "Subject-I: Financial Accounting-I, Basics of Cost and Management Accounting, Cost & Works Accounting, Modern Office Management-I, Business Administration, Fundamentals of Marketing-I, Business Environment and Entrepreneurship-I, Fundamentals of Banking-I, Indian Legal System and Legal Method-I, Statistical Decision Analysis-I",
                "Subject-II: Same as Subject-I (excluding chosen from Subject-I)",
                "Subject-III: Introduction to Behavioural Economics",
                "Generic Elective/Open Elective: To be selected from other Faculty Baskets",
                "Vocational and Skill Enhancement Courses (VSEC)",
                "Ability Enhancement Courses (AEC): English-I",
                "Value Education Courses (VEC): Environmental Science",
                "Indian Knowledge System (IKS): SPPU Basket"
            ],
            "S.Y.B.Com Semester III": [
                "Major Mandatory Subjects:",
                "Accountancy and Taxation: Corporate Accounting-I (4 Credits), Forensic Accounting and Fraud Detection-I (2 Credits)",
                "Cost and Management Accounting: Corporate Accounting-I (4 Credits), Methods of Costing-I (2 Credits)",
                "Business Administration: Corporate Accounting-I (4 Credits), Enterprise Management System-I (2 Credits)",
                "Marketing: Corporate Accounting-I (4 Credits), Services Marketing (2 Credits)",
                "Business Practices and Cooperation: Corporate Accounting-I (4 Credits), Entrepreneurship Scenario and Institutional Support (2 Credits)",
                "Banking, Finance and Insurance: Corporate Accounting-I (4 Credits), Indian Banking System-I (2 Credits)",
                "Business Laws: Corporate Accounting-I (4 Credits), Consumer Protection Law-I (2 Credits)",
                "Business Mathematics, Statistics and Analytics: Corporate Accounting-I (4 Credits), Operations Research-I (2 Credits)",
                "Minor Subject: Macro Economics (4 Credits)",
                "Generic/Open Elective: To be selected from OE Baskets",
                "Vocational and Skill Enhancement Courses (VSEC)",
                "Ability Enhancement Courses (AEC): Modern Indian Languages-I",
                "Indian Knowledge System (IKS): Major Related IKS",
                "Field Projects/Internship/Community Engagement"
            ]
        },
        stats: [
            { value: "500+", label: "Companies Visited" },
            { value: "21 LPA", label: "Highest Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       B.Sc (Plain)
    ========================= */
    bsc: {
        title: "B.Sc Colleges in Pune",
        heroImage: "/images/bsc.jpg",
        description:
            "A foundational science program focusing on core scientific principles and practical learning.",
        overview:
            "The B.Sc (Plain) program builds a strong base in science subjects with laboratory exposure, analytical skills, and research-oriented learning.",
        eligibility: ["HSC (10+2) with Science stream"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "B.Sc (Bachelor of Science)",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Physics",
            "Chemistry",
            "Mathematics",
            "Biology",
        ],
        stats: [
            { value: "200+", label: "Lab Projects" },
            { value: "100+", label: "Industry Tie-ups" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       B.Sc (C.A. / C.S.)
    ========================= */
    "bsc-ca": {
        title: "B.Sc (Computer Applications / Computer Science)",
        heroImage: "/images/department/bsc_ca.jpg",
        description:
            "A technology-driven program focusing on computing, programming, and software development.",
        overview:
            "This program develops strong programming, problem-solving, and software engineering skills aligned with current IT industry needs.",
        eligibility: ["HSC (10+2) with Mathematics"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "B.Sc (C.A. / C.S.)",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Programming",
            "Software Development",
            "Database Management",
            "Web Technologies",
        ],
        stats: [
            { value: "90%", label: "Placement Assistance" },
            { value: "150+", label: "IT Recruiters" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       B.Sc AI & Machine Learning
    ========================= */
    "bsc-ai": {
        title: "B.Sc AI & Machine Learning",
        heroImage: "/images/department/machine.jpg",
        description:
            "A future-focused program covering artificial intelligence, machine learning, and data-driven technologies.",
        overview:
            "The program emphasizes AI algorithms, ML models, Python, data analysis, and real-world applications across industries.",
        eligibility: ["HSC (10+2) with Mathematics"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "B.Sc AI & Machine Learning",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Artificial Intelligence",
            "Machine Learning",
            "Python Programming",
            "Deep Learning",
        ],
        stats: [
            { value: "120+", label: "AI Projects" },
            { value: "15 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       B.Sc Cyber & Digital Science
    ========================= */
    "bsc-cyber": {
        title: "B.Sc Cyber & Digital Science",
        heroImage: "/images/department/cyber.jpg",
        description:
            "A specialized program in cybersecurity, ethical hacking, and digital forensics.",
        overview:
            "Students gain hands-on experience in cyber defense, network security, and digital investigation techniques.",
        eligibility: ["HSC (10+2) with Mathematics"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "B.Sc Cyber & Digital Science",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Cyber Security",
            "Ethical Hacking",
            "Digital Forensics",
            "Network Security",
        ],
        stats: [
            { value: "100+", label: "Security Labs" },
            { value: "12 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       B.Sc Data Science
    ========================= */
    "bsc-ds": {
        title: "B.Sc Data Science",
        heroImage: "/images/department/data_science.jpg",
        description:
            "A data-centric program focusing on analytics, statistics, and data-driven decision making.",
        overview:
            "The curriculum covers data analysis, visualization, machine learning, and big data tools.",
        eligibility: ["HSC (10+2) with Mathematics"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "B.Sc Data Science",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Data Analytics",
            "Big Data",
            "Machine Learning",
            "Business Intelligence",
        ],
        stats: [
            { value: "130+", label: "Data Projects" },
            { value: "14 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       B.Sc Fashion Design
    ========================= */
    "bsc-fashion": {
        title: "B.Sc Fashion Design",
        heroImage: "/images/department/fashion.jpg",
        description:
            "A creative and industry-oriented fashion design program integrating art, technology, and business.",
        overview:
            "This program develops design skills, textile knowledge, garment construction expertise, and fashion entrepreneurship abilities.",
        eligibility: ["HSC (10+2) from any stream"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "B.Sc Fashion Design",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Fashion Design",
            "Textile Design",
            "Fashion Styling",
            "Merchandising",
        ],
        stats: [
            { value: "100+", label: "Fashion Shows & Events" },
            { value: "6 Months", label: "Internship" },
        ],
        campusImage: "/images/commerce_plain.jpg",
    },

    /* =========================
       BCA
    ========================= */
    bca: {
        title: "BCA Colleges in Pune",
        heroImage: "/images/department/BCA.jpg",
        description:
            "A professional program in computer applications and software development.",
        overview:
            "BCA prepares students for careers in software development, IT services, and system administration.",
        eligibility: ["HSC (10+2) with Mathematics"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "BCA (Bachelor of Computer Applications)",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Software Development",
            "Web Development",
            "Mobile Applications",
            "Cloud Computing",
        ],
        stats: [
            { value: "200+", label: "IT Recruiters" },
            { value: "10 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       BBA (Plain)
    ========================= */
    bba: {
        title: "BBA Colleges in Pune",
        heroImage: "/images/department/bba_plain.jpg",
        description:
            "A management-focused program for future business leaders.",
        overview:
            "BBA develops leadership, management, communication, and entrepreneurial skills.",
        eligibility: ["HSC (10+2) from any stream"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "BBA (Bachelor of Business Administration)",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Marketing",
            "Finance",
            "Human Resources",
            "Operations",
        ],
        stats: [
            { value: "180+", label: "Corporate Partners" },
            { value: "12 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       BBA (C.A.)
    ========================= */
    "bba-ca": {
        title: "BBA (Computer Applications)",
        heroImage: "/images/department/bba.jpg",
        description:
            "A unique blend of management and computer applications.",
        overview:
            "This program integrates business administration with IT and computing skills.",
        eligibility: ["HSC (10+2) from any stream"],
        applyLink: "https://apply.mitacsc.ac.in/",
        programInfo: {
            name: "BBA (Computer Applications)",
            duration: "3 Years",
            affiliation: "SPPU",
            approval: "UGC Approved",
        },
        specializations: [
            "Business Analytics",
            "Information Systems",
            "IT Management",
            "E-Commerce",
        ],
        stats: [
            { value: "160+", label: "Placement Drives" },
            { value: "11 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },
    ma: {
        title: "M.A. (Master of Arts)",
        slug: "ma",
        heroImage: "/images/department/ma.jpg",
        description:
            "A postgraduate program focused on humanities, social sciences, and advanced academic research.",
        overview:
            "The M.A. program enhances analytical thinking, research skills, and subject expertise. Students gain in-depth knowledge in literature, history, sociology, political science, and related disciplines, preparing them for academic, administrative, and professional careers.",
        eligibility: [
            "Bachelor’s degree in Arts or relevant discipline",
            "Minimum 45% aggregate marks (as per university norms)",
        ],
        applyLink: "https://apply.yourcollege.edu/",
        programInfo: {
            name: "Master of Arts (M.A.)",
            duration: "2 Years",
            affiliation: "Savitribai Phule Pune University (SPPU)",
            approval: "UGC Approved",
            level: "Post Graduate",
        },
        specializations: [
            "English Literature",
            "Marathi",
            "History",
            "Political Science",
            "Sociology",
        ],
        curriculum: {
            "M.A. Economics - Semester I": [
                "ECO 501 MJ - Micro Economic Analysis I [4T]",
                "ECO 502 MJ - Public Finance I [4T]",
                "ECO 503 MJ - International Economics I [4T]",
                "ECO 504 MJP - Modern Banking [2P]",
                "Electives (Choose one): Indian Economic Policy, Agricultural Economics, Foreign Exchange Market",
                "Research Methodology"
            ],
            "M.A. Economics - Semester II": [
                "ECO 551 MJ - Micro Economic Analysis II [4T]",
                "ECO 552 MJ - Public Finance II [4T]",
                "ECO 553 MJ - International Economics II [4T]",
                "ECO 554 MJP - Tools of Economics Analyses [2P]",
                "Electives (Choose one): Labour Economics, Industrial Economics, Statistical Techniques",
                "OJT - On Job Training"
            ],
            "M.A. Political Science - Semester I": [
                "Western Political Thought (4 Credits)",
                "Administrative Theory (4 Credits)",
                "Theories and Issues in International Politics (4 Credits)",
                "Indian Political Thought – Practical (2 Credits)",
                "Electives (Choose one): Modern Political Ideologies, Political Process in Maharashtra, Political Institutions in India, Party System in India",
                "Research Methodology (4 Credits)"
            ],
            "M.A. English - Semester I": [
                "ENG1.1: Background to English Literature Theory",
                "ENG1.2: English Literature-1 (The Renaissance Period and the Neoclassical Period)",
                "ENG1.3: Advanced Studies in English Language",
                "ENG1.4: Literary Criticism and Theory",
                "Electives (Choose one): Indian Writing in English Translation, Applied Linguistics-I, Critical Reading",
                "ENG1.6: Research Methodology"
            ],
            "M.A. English - Semester II": [
                "ENG2.1: Background to English Literature",
                "ENG2.2: English Literature-1 (The Renaissance Period and the Neoclassical Period)",
                "ENG2.3: Advanced Studies in English Language",
                "ENG2.4: Literary Criticism and Theory",
                "Electives (Choose one): Cultural Studies, Applied Linguistics II, Academic Writing",
                "ENG2.6: On Job Training"
            ]
        },
        stats: [
            { value: "10+", label: "Experienced Faculty" },
            { value: "95%", label: "Pass Percentage" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       M.COM
    ========================= */
    mcom: {
        title: "M.Com. (Master of Commerce)",
        slug: "mcom",
        heroImage: "/images/department/mcom.jpg",
        description:
            "An advanced commerce program designed to build expertise in finance, accounting, taxation, and business management.",
        overview:
            "The M.Com program develops strong analytical, financial, and managerial skills. Students gain deep knowledge in accounting, economics, business law, taxation, and corporate finance, enabling careers in banking, auditing, education, and corporate sectors.",
        eligibility: [
            "B.Com / BBA / BBS or equivalent degree",
            "Minimum 45% aggregate marks",
        ],
        applyLink: "https://apply.yourcollege.edu/",
        programInfo: {
            name: "Master of Commerce (M.Com.)",
            duration: "2 Years",
            affiliation: "Savitribai Phule Pune University (SPPU)",
            approval: "UGC Approved",
            level: "Post Graduate",
        },
        specializations: [
            "Advanced Accounting",
            "Banking & Finance",
            "Cost Accounting",
            "Taxation",
            "Business Analytics",
        ],
        curriculum: {
            "Semester I": [
                "Core: Management Accounting, Strategic Management",
                "Elective Groups (Choose one):",
                "  - Advanced Accounting & Taxation: Advanced Accounting, Income Tax",
                "  - Commercial Laws & Practices: Information system and E-Commerce Practices, Intellectual Property Laws",
                "  - Advanced Cost Accounting & Cost system: Advanced Cost Accounting, Costing Technique",
                "  - Co-operation & Rural Development: Co-operative Movement in India, Rural Development",
                "  - Business Practices & Environment: Organized Traders and Markets, Business Environment and Policy",
                "  - Business Administration: Production and Operation Management, Financial Management",
                "  - Advanced Banking & Finance: Legal Framework of Banking, Central Banking",
                "  - Advanced Marketing: Marketing Techniques, Consumer Behaviour"
            ],
            "Semester II": [
                "Core: Financial Analysis and Control, Industrial Economics OR Business Statistics",
                "Elective Groups (Choose one):",
                "  - Advanced Accounting & Taxation: Specialized Areas in Accounting, Business Tax Assessment & Planning",
                "  - Commercial Laws & Practices: E-Security & Cyber Laws, Laws Regulating to Copyrights & Design",
                "  - Advanced Cost Accounting & Cost system: Application Cost Accounting, Cost Control & Cost System",
                "  - Co-operation & Rural Development: International Co-operative Movement, Management of Co-operative Business",
                "  - Business Practices & Environment: Modern Business Practices, Business Environment Analysis",
                "  - Business Administration: Business Ethics & Professional Value, Elements of Knowledge Management",
                "  - Advanced Banking & Finance: Banking Law & Practices, Monetary Policy",
                "  - Advanced Marketing: Customer Relationship Management & Retailing, Services Marketing"
            ],
            "Semester III": [
                "Core: Business Finance, Research Methodology for Business",
                "Elective Groups (Choose one):",
                "  - Advanced Accounting & Taxation: Advanced Auditing, Specialized Auditing",
                "  - Commercial Laws & Practices: Laws Relating to International Business, WTO – Norms & Practices",
                "  - Advanced Cost Accounting & Cost system: Cost Audit, Management Audit",
                "  - Co-operation & Rural Development: Co-operative Credit System, Co-operative Banking System",
                "  - Business Practices & Environment: Entrepreneurial Behaviour, Entrepreneurship",
                "  - Business Administration: Human Resource Management, Organizational Behaviour",
                "  - Advanced Banking & Finance: Foreign Exchange, International Finance",
                "  - Advanced Marketing: International Marketing, Marketing Research"
            ],
            "Semester IV": [
                "Core: Capital Market and Financial Services, Industrial Economic Environment OR Operations Research",
                "Elective Groups (Choose one):",
                "  - Advanced Accounting & Taxation: Recent Advances in Accounting, Taxation, Taxation and Auditing, Project Work/ Case Studies",
                "  - Commercial Laws & Practices: Recent Advances in Commercial Laws and Practices, Project Work/Case Studies",
                "  - Advanced Cost Accounting & Cost system: Recent Advances in Cost Auditing and Cost System, Project Work/Case Studies",
                "  - Co-operation & Rural Development: Recent Advances in Co-operative and Rural Development, Project Work/Case Studies",
                "  - Business Practices & Environment: Recent Advances in Business Practices and Environment, Project Work/Case Studies",
                "  - Business Administration: Recent Advances in Business Administration, Project Work/Case Studies",
                "  - Advanced Banking & Finance: Recent Advances in Banking and Finance, Project Work/Case Studies",
                "  - Advanced Marketing: Recent Advances in Marketing, Project Work/Case Studies"
            ]
        },
        stats: [
            { value: "120+", label: "Placements" },
            { value: "8 LPA", label: "Highest Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       M.SC (C.A. / C.S.)
    ========================= */
    "msc-ca": {
        title: "M.Sc. (Computer Applications / Computer Science)",
        slug: "msc-ca",
        heroImage: "/images/department/msc.jpg",
        description:
            "A technology-driven postgraduate program focusing on software development, data science, and advanced computing.",
        overview:
            "The M.Sc. program equips students with advanced programming, system design, database management, cloud computing, and AI skills. It prepares graduates for careers in IT industry, research, and higher studies.",
        eligibility: [
            "B.Sc. (CS / IT / CA) or equivalent degree",
            "Mathematics at 10+2 level preferred",
            "Minimum 45% aggregate marks",
        ],
        applyLink: "https://apply.yourcollege.edu/",
        programInfo: {
            name: "M.Sc. (Computer Applications / Computer Science)",
            duration: "2 Years",
            affiliation: "Savitribai Phule Pune University (SPPU)",
            approval: "UGC Approved",
            level: "Post Graduate",
        },
        specializations: [
            "Artificial Intelligence",
            "Data Science",
            "Cloud Computing",
            "Cyber Security",
            "Software Engineering",
        ],
        stats: [
            { value: "150+", label: "IT Recruiters" },
            { value: "12 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       M.SC Cyber Security
    ========================= */
    "msc-cyber": {
        title: "M.Sc. (Cyber Security)",
        slug: "msc-cyber",
        heroImage: "/images/department/msc.jpg",
        description:
            "An advanced postgraduate program specializing in cybersecurity, network protection, and information security management.",
        overview:
            "The M.Sc. Cyber Security program provides comprehensive knowledge in cryptography, ethical hacking, network security, incident response, and security architecture. It prepares graduates for cybersecurity specialist roles across industries.",
        eligibility: [
            "B.Sc. (CS / IT / CA) or equivalent degree",
            "Mathematics at 10+2 level preferred",
            "Minimum 45% aggregate marks",
        ],
        applyLink: "https://apply.yourcollege.edu/",
        programInfo: {
            name: "M.Sc. (Cyber Security)",
            duration: "2 Years",
            affiliation: "Savitribai Phule Pune University (SPPU)",
            approval: "UGC Approved",
            level: "Post Graduate",
        },
        specializations: [
            "Network Security",
            "Cryptography",
            "Ethical Hacking",
            "Incident Response",
            "Security Architecture",
            "Penetration Testing",
        ],
        stats: [
            { value: "100+", label: "Security Recruiters" },
            { value: "15 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

    /* =========================
       M.SC Data Science
    ========================= */
    "msc-ds": {
        title: "M.Sc. (Data Science)",
        slug: "msc-ds",
        heroImage: "/images/department/msc.jpg",
        description:
            "A comprehensive postgraduate program focusing on data analytics, machine learning, and big data technologies.",
        overview:
            "The M.Sc. Data Science program equips students with expertise in statistical analysis, machine learning, data visualization, big data tools, and AI algorithms. Graduates are prepared for roles in data science, analytics, and AI development across industries.",
        eligibility: [
            "B.Sc. / B.Tech with Mathematics/Statistics",
            "B.Sc. (CS / IT / CA) or equivalent degree",
            "Minimum 45% aggregate marks",
        ],
        applyLink: "https://apply.yourcollege.edu/",
        programInfo: {
            name: "M.Sc. (Data Science)",
            duration: "2 Years",
            affiliation: "Savitribai Phule Pune University (SPPU)",
            approval: "UGC Approved",
            level: "Post Graduate",
        },
        specializations: [
            "Machine Learning",
            "Statistical Analysis",
            "Big Data Technologies",
            "Data Visualization",
            "Deep Learning",
            "Business Analytics",
        ],
        stats: [
            { value: "120+", label: "Data Recruiters" },
            { value: "18 LPA", label: "Top Package" },
        ],
        campusImage: "/images/commerce.jpg",
    },

};
