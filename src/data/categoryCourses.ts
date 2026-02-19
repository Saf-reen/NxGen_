
export interface CourseData {
    id: string;
    title: string;
    description?: string;
    categoryId: string;
    image: string; // "code-icon" or URL
    rating: number;
    price: string;
}

export const categoryConfig: Record<string, { title: string; description: string; parentCategory: string; outcomes: string[] }> = {
    "sap-technical": {
        title: "SAP Technical & Development",
        description: "Master ABAP & core development skills for SAP ecosystems.",
        parentCategory: "SAP Courses",
        outcomes: [
            "Master ABAP programming language fundamentals and advanced concepts",
            "Develop custom reports, interfaces, conversions, and enhancements (RICE)",
            "Understand the SAP system landscape and architecture",
            "Gain proficiency in debugging and performance tuning of ABAP code",
            "Learn to build modern SAP applications using ABAP on HANA"
        ]
    },
    "sap-specialized": {
        title: "SAP Specialized / Sub Courses",
        description: "Expert niche modules for advanced career growth in SAP.",
        parentCategory: "SAP Courses",
        outcomes: [
            "Deep dive into niche and specialized SAP modules",
            "Master advanced configuration settings for specific business needs",
            "Understand integration between specialized modules and core SAP components",
            "Gain industry-specific knowledge and best practices",
            "Prepare for specialized SAP certification exams"
        ]
    },
    "sap-functional": {
        title: "SAP Functional Modules",
        description: "Optimize business processes efficiently with SAP Functional training.",
        parentCategory: "SAP Courses",
        outcomes: [
            "Understand end-to-end business processes in SAP (e.g., Order to Cash, Procure to Pay)",
            "Configure SAP modules (SD, MM, FICO, etc.) to meet business requirements",
            "Integrate different functional modules for seamless data flow",
            "Generate and analyze standard SAP reports for decision making",
            "Gain hands-on experience with real-world functional scenarios"
        ]
    },
    "sap-admin": {
        title: "SAP Administration & HR",
        description: "Manage systems and human capital with SAP Admin modules.",
        parentCategory: "SAP Courses",
        outcomes: [
            "Perform SAP system installation, configuration, and maintenance",
            "Manage user administration, roles, and authorizations security",
            "Monitor system performance and troubleshoot technical issues",
            "Handle database administration, backups, and disaster recovery",
            "configure and manage SAP HCM/SuccessFactors for HR operations"
        ]
    },
    "python": {
        title: "Python Programming",
        description: "Learn comprehensive Python coding from basics to advanced.",
        parentCategory: "Python",
        outcomes: [
            "Master core Python syntax, data types, and control structures",
            "Apply Object-Oriented Programming (OOP) principles in Python",
            "Work with Python libraries and frameworks for various applications",
            "Handle file I/O, exceptions, and database connectivity",
            "Build real-world applications and scripts using Python"
        ]
    },
    "ai": {
        title: "Artificial Intelligence",
        description: "Build smart future-ready systems with AI training.",
        parentCategory: "AI",
        outcomes: [
            "Understand the history, foundations, and key concepts of AI",
            "Explore Neural Networks and Deep Learning architectures",
            "Learn about Natural Language Processing (NLP) and Computer Vision",
            "Implement AI algorithms using popular libraries like TensorFlow or PyTorch",
            "Address ethical considerations and future trends in Artificial Intelligence"
        ]
    },
    "aiml": {
        title: "AI & Machine Learning",
        description: "Data-driven predictive modelling and machine learning mastery.",
        parentCategory: "AIML",
        outcomes: [
            "Understand the difference between AI, Machine Learning, and Deep Learning",
            "Master Supervised, Unsupervised, and Reinforcement Learning algorithms",
            "Perform data preprocessing, feature engineering, and model validation",
            "Build and deploy predictive models for real-world problems",
            "Use industry-standard tools like Scikit-learn, Pandas, and NumPy"
        ]
    },
    "power-bi": {
        title: "Foundation Courses",
        description: "Visualize data for better insights with Power BI.",
        parentCategory: "Data Analytics",
        outcomes: [
            "Connect to various data sources and transform data using Power Query",
            "Create robust data models and relationships",
            "Write DAX formulas for complex calculations and measures",
            "Design interactive and visually appealing reports and dashboards",
            "Publish and share insights using the Power BI Service"
        ]
    },
    "sap-btp": {
        title: "SAP Business Technology Platform (BTP)",
        description: "Build, extend, and integrate applications with SAP's unified cloud platform.",
        parentCategory: "SAP Courses",
        outcomes: [
            "Understand the SAP BTP architecture and its key pillars",
            "Develop and extend SAP applications using Low-Code/No-Code and Pro-Code tools",
            "Integrate SAP and non-SAP systems using SAP Integration Suite",
            "Leverage data and analytics capabilities with SAP HANA Cloud and SAC",
            "Implement security, DevOps, and automation on the platform"
        ]
    },
    "digital-marketing": {
        title: "Digital Marketing",
        description: "Master online marketing strategies to grow brands and drive business results.",
        parentCategory: "Digital Marketing",
        outcomes: [
            "Develop comprehensive digital marketing strategies for businesses",
            "Master SEO techniques to improve organic search rankings",
            "Create and manage effective social media marketing campaigns",
            "Design content marketing strategies that engage and convert",
            "Execute successful PPC and paid advertising campaigns",
            "Analyze marketing data to optimize campaign performance"
        ]
    },
};

export const coursesData: CourseData[] = [
    // SAP Technical - UPDATED CONTENT
    {
        id: "sap-abap-s4hana",
        title: "SAP ABAP on S/4HANA",
        description: "Modern ABAP development with reports, enhancements, performance tuning, and S/4HANA best practices.",
        categoryId: "sap-technical",
        image: "code-icon",
        rating: 5,
        price: "₹30,000"
    },
    {
        id: "sap-abap-rap",
        title: "SAP ABAP with CDS, OData & RAP",
        description: "Build next-gen SAP applications using CDS Views, OData services, and the RAP framework.",
        categoryId: "sap-technical",
        image: "code-icon",
        rating: 5,
        price: "₹35,000"
    },
    {
        id: "sap-fiori",
        title: "SAP Fiori & UI5",
        description: "Front-end SAP application development using Fiori architecture, UI5, MVC, and OData integration.",
        categoryId: "sap-technical",
        image: "code-icon",
        rating: 5,
        price: "₹35,000"
    },
    {
        id: "sap-fullstack",
        title: "SAP Full Stack Development (ABAP + Fiori)",
        description: "End-to-end SAP development covering backend (ABAP, CDS, RAP) and frontend (Fiori, UI5) with real-time projects & internship.",
        categoryId: "sap-technical",
        image: "code-icon",
        rating: 5,
        price: "₹50,000"
    },

    // SAP Specialized - UPDATED CONTENT
    {
        id: "sap-cds",
        title: "SAP CDS Views (Core Data Services)",
        description: "Data modeling with basic, composite, and consumption views, associations, and annotations.",
        categoryId: "sap-specialized",
        image: "code-icon",
        rating: 5,
        price: "₹25,000"
    },
    {
        id: "sap-odata",
        title: "SAP OData Services",
        description: "Expose SAP data as REST APIs for Fiori and external integrations.",
        categoryId: "sap-specialized",
        image: "code-icon",
        rating: 5,
        price: "₹25,000"
    },
    {
        id: "sap-rap",
        title: "SAP RAP (RESTful ABAP Programming Model)",
        description: "Modern, cloud-ready ABAP development using managed and unmanaged RAP scenarios.",
        categoryId: "sap-specialized",
        image: "code-icon",
        rating: 5,
        price: "₹30,000"
    },
    {
        id: "sap-alv",
        title: "SAP ALV & Reports",
        description: "Classical and modern ALV reporting with interactive and performance-optimized layouts.",
        categoryId: "sap-specialized",
        image: "code-icon",
        rating: 5,
        price: "₹20,000"
    },
    {
        id: "sap-debug",
        title: "SAP Enhancements & Debugging",
        description: "User exits, BADIs, enhancements, real-time debugging, and performance analysis.",
        categoryId: "sap-specialized",
        image: "code-icon",
        rating: 5,
        price: "₹22,000"
    },
    {
        id: "sap-fiori-elements",
        title: "SAP Fiori Elements",
        description: "Template-based Fiori app development using CDS annotations for faster delivery.",
        categoryId: "sap-specialized",
        image: "code-icon",
        rating: 5,
        price: "₹28,000"
    },

    // SAP Functional - UPDATED CONTENT
    {
        id: "sap-sd",
        title: "SAP SD (Sales & Distribution)",
        description: "Sales order processing, pricing, delivery, billing, and SD–MM–FICO integration.",
        categoryId: "sap-functional",
        image: "code-icon",
        rating: 5,
        price: "₹28,000"
    },
    {
        id: "sap-mm",
        title: "SAP MM (Materials Management)",
        description: "Procurement, inventory management, vendor handling, and invoice verification.",
        categoryId: "sap-functional",
        image: "code-icon",
        rating: 5,
        price: "₹28,000"
    },
    {
        id: "sap-fico",
        title: "SAP FICO (Financial Accounting & Controlling)",
        description: "Financial accounting, cost control, asset accounting, and reporting.",
        categoryId: "sap-functional",
        image: "code-icon",
        rating: 5,
        price: "₹30,000"
    },
    {
        id: "sap-pp",
        title: "SAP PP (Production Planning)",
        description: "BOM, routing, MRP, production orders, and capacity planning.",
        categoryId: "sap-functional",
        image: "code-icon",
        rating: 5,
        price: "₹30,000"
    },
    {
        id: "sap-pm",
        title: "SAP PM (Plant Maintenance)",
        description: "Equipment maintenance, preventive maintenance, orders, and notifications.",
        categoryId: "sap-functional",
        image: "code-icon",
        rating: 5,
        price: "₹28,000"
    },
    {
        id: "sap-qm",
        title: "SAP QM (Quality Management)",
        description: "Quality planning, inspections, notifications, and compliance management.",
        categoryId: "sap-functional",
        image: "code-icon",
        rating: 5,
        price: "₹28,000"
    },
    {
        id: "sap-scm",
        title: "SAP SCM (Supply Chain Management)",
        description: "End-to-end supply chain planning, demand & distribution optimization.",
        categoryId: "sap-functional",
        image: "code-icon",
        rating: 5,
        price: "₹35,000"
    },
    {
        id: "sap-ewm",
        title: "SAP EWM (Extended Warehouse Management)",
        description: "Advanced warehouse operations, picking strategies, RF framework, and labor management.",
        categoryId: "sap-functional",
        image: "code-icon",
        rating: 5,
        price: "₹35,000"
    },

    // SAP Administration & HR - UPDATED CONTENT
    {
        id: "sap-basis",
        title: "SAP Basis",
        description: "SAP system administration, monitoring, transports, authorizations, and S/4HANA basics.",
        categoryId: "sap-admin",
        image: "code-icon",
        rating: 5,
        price: "₹30,000"
    },
    {
        id: "sap-hcm-successfactors",
        title: "SAP HCM / SuccessFactors",
        description: "HR processes including payroll, recruitment, time management, and talent management.",
        categoryId: "sap-admin",
        image: "code-icon",
        rating: 5,
        price: "₹35,000"
    },

    // SAP BTP - Comprehensive Modules (Based on Architecture)
    {
        id: "sap-btp-appdev",
        title: "SAP BTP Application Development (CAP & Fiori)",
        description: "Develop enhancements and cloud-native apps. Covers Low-Code (Build Apps), Pro-Code (BAS, CAP Model), and Runtimes (Cloud Foundry, Kyma).",
        categoryId: "sap-btp",
        image: "code-icon",
        rating: 5,
        price: "₹40,000"
    },
    {
        id: "sap-btp-automation",
        title: "SAP Build Process Automation (RPA & Workflow)",
        description: "Master SAP Build Process Automation. Learn Workflow Management, Decisions, Rules, RPA, and Process Visibility.",
        categoryId: "sap-btp",
        image: "code-icon",
        rating: 5,
        price: "₹35,000"
    },
    {
        id: "sap-btp-integration",
        title: "SAP Integration Suite & Event Mesh",
        description: "Connect processes and data. In-depth training on SAP Integration Suite, API Management, and Advanced Event Mesh.",
        categoryId: "sap-btp",
        image: "code-icon",
        rating: 5,
        price: "₹38,000"
    },
    {
        id: "sap-btp-data",
        title: "SAP BTP Data & Analytics (HANA Cloud & SAC)",
        description: "Unleash data potential with SAP HANA Cloud, Analytics Cloud (SAC), Datasphere, and Master Data Governance.",
        categoryId: "sap-btp",
        image: "code-icon",
        rating: 5,
        price: "₹42,000"
    },
    {
        id: "sap-btp-ai",
        title: "SAP Business AI & Core Service",
        description: "Implement intelligent solutions using SAP AI Core, AI Launchpad, and AI Business Services.",
        categoryId: "sap-btp",
        image: "code-icon",
        rating: 5,
        price: "₹45,000"
    },
    {
        id: "sap-btp-devops",
        title: "SAP BTP DevOps & Administration",
        description: "Manage the cloud lifecycle. Covers CICD, Transport Management, Alert Notification, and Automation Pilot.",
        categoryId: "sap-btp",
        image: "code-icon",
        rating: 5,
        price: "₹30,000"
    },

    // Python - CORE & ADVANCED
    { id: "python-core", title: "Core Python Programming", description: "Master Python fundamentals, data structures, and algorithms.", categoryId: "python", image: "https://via.placeholder.com/150", rating: 5, price: "₹15,000" },
    { id: "python-advanced", title: "Advanced Python", description: "Deep dive into decorators, generators, and advanced libraries.", categoryId: "python", image: "https://via.placeholder.com/150", rating: 5, price: "₹20,000" },

    // AI - UPDATED CONTENT
    { id: "ai-fundamentals", title: "Fundamentals of Artificial Intelligence", description: "Build a strong conceptual foundation in Artificial Intelligence.", categoryId: "ai", image: "https://via.placeholder.com/150", rating: 5, price: "₹20,000" },
    { id: "ai-search", title: "Problem Solving & Search Techniques", description: "Master the algorithms that power AI decision making.", categoryId: "ai", image: "https://via.placeholder.com/150", rating: 5, price: "₹22,000" },
    { id: "ai-knowledge", title: "Knowledge Representation & Reasoning", description: "Learn how AI systems store knowledge and reason with it.", categoryId: "ai", image: "https://via.placeholder.com/150", rating: 5, price: "₹25,000" },
    { id: "ai-intel-basics", title: "Machine Intelligence Basics", description: "A foundational overview of machine learning concepts within AI.", categoryId: "ai", image: "https://via.placeholder.com/150", rating: 5, price: "₹20,000" },
    { id: "ai-nlp-vision", title: "Natural Language & Vision Systems", description: "Introduction to AI's ability to see and speak.", categoryId: "ai", image: "https://via.placeholder.com/150", rating: 5, price: "₹28,000" },
    { id: "ai-ethics", title: "AI Applications, Ethics & Deployment", description: "Understanding the impact, responsibility, and lifecycle of AI.", categoryId: "ai", image: "https://via.placeholder.com/150", rating: 5, price: "₹18,000" },

    // AIML - UPDATED CONTENT
    { id: "aiml-python", title: "Python for AI & ML", description: "Learn Python programming and libraries required for AI & ML development.", categoryId: "aiml", image: "https://via.placeholder.com/150", rating: 5, price: "₹25,000" },
    { id: "aiml-math", title: "Mathematics & Statistics for ML", description: "Understand the mathematical foundation behind ML algorithms.", categoryId: "aiml", image: "https://via.placeholder.com/150", rating: 5, price: "₹25,000" },
    { id: "aiml-core-ml", title: "Core Machine Learning", description: "Build predictive models using fundamental ML algorithms.", categoryId: "aiml", image: "https://via.placeholder.com/150", rating: 5, price: "₹30,000" },
    { id: "aiml-advanced-ml", title: "Advanced Machine Learning", description: "Explore complex ML algorithms used in industry.", categoryId: "aiml", image: "https://via.placeholder.com/150", rating: 5, price: "₹35,000" },
    { id: "aiml-deep-learning", title: "Deep Learning & Neural Networks", description: "Build advanced AI systems using neural networks.", categoryId: "aiml", image: "https://via.placeholder.com/150", rating: 5, price: "₹40,000" },
    { id: "aiml-nlp", title: "Natural Language Processing", description: "Develop AI systems that understand human language.", categoryId: "aiml", image: "https://via.placeholder.com/150", rating: 5, price: "₹35,000" },
    { id: "aiml-cv", title: "Computer Vision & AI Systems", description: "Teach machines to understand images and videos.", categoryId: "aiml", image: "https://via.placeholder.com/150", rating: 5, price: "₹35,000" },
    { id: "aiml-mlops", title: "MLOps & AI Deployment", description: "Deploy AI models into production environments.", categoryId: "aiml", image: "https://via.placeholder.com/150", rating: 5, price: "₹30,000" },

    // Data Analytics & Power BI - UPDATED CONTENT
    {
        id: "da-intro",
        title: "Introduction to Data Analytics (Foundation)",
        description: "Outcome: Understand the analytics lifecycle and business context. Topics: Data lifecycle, types of data, KPIs, cleaning, CSV/Excel.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹15,000"
    },
    {
        id: "da-excel",
        title: "Excel & Fundamental Analytics",
        description: "Outcome: Perform business analysis using spreadsheets. Topics: Formulas (IF, VLOOKUP), Pivot Tables, Dashboards, and Descriptive statistics.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹18,000"
    },
    {
        id: "da-sql",
        title: "SQL for Data Analytics",
        description: "Outcome: Query and prepare data from databases. Topics: SELECT, JOINS, Subqueries, aggregations, and query optimization.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹20,000"
    },
    {
        id: "da-python",
        title: "Python for Data Analytics",
        description: "Outcome: Perform EDA and data manipulation programmatically. Topics: NumPy, Pandas, Handling missing data, EDA, and basic visualization.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹22,000"
    },
    {
        id: "da-r",
        title: "R Programming for Analytics (Optional Track)",
        description: "Outcome: Statistical analysis and visualization in R. Topics: R syntax, Data wrangling, ggplot2, and Statistical summaries.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹20,000"
    },
    {
        id: "da-viz",
        title: "Data Visualization & BI Tools",
        description: "Outcome: Build interactive dashboards for stakeholders. Topics: Power BI, Tableau, DAX basics, and Dashboard design principles.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹25,000"
    },
    {
        id: "da-stats",
        title: "Statistics & Probability for Analytics",
        description: "Outcome: Validate insights with statistical reasoning. Topics: Mean, median, standard deviation, Hypothesis testing, and Correlation.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹18,000"
    },
    {
        id: "da-predictive",
        title: "Predictive Analytics & ML Basics",
        description: "Outcome: Build simple predictive models. Topics: Regression, Classification basics, Clustering (K-Means), and Business forecasting.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹28,000"
    },
    {
        id: "da-bigdata",
        title: "Big Data & Cloud Analytics (Advanced)",
        description: "Outcome: Work with large-scale and cloud data. Topics: Spark/Hadoop, Cloud data warehouses (AWS/GCP), and Querying large datasets.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹30,000"
    },
    {
        id: "da-capstone",
        title: "Capstone & Real-World Project",
        description: "Outcome: End-to-end analytics project. Topics: Problem statement, Data cleaning, Analysis & visualization, and Final presentation.",
        categoryId: "power-bi",
        image: "code-icon",
        rating: 5,
        price: "₹40,000"
    },

    // Digital Marketing Courses
    {
        id: "dm-job-guarantee",
        title: "Job Guarantee Digital Marketing Courses",
        description: "Comprehensive training program designed to get you hired. Master SEO, SMM, PPC, and Content Marketing with 100% placement assistance and career support.",
        categoryId: "digital-marketing",
        image: "code-icon",
        rating: 5,
        price: "₹35,000"
    },
    {
        id: "dm-online-offline",
        title: "Online / Offline Digital Marketing Courses",
        description: "Flexible learning options to suit your schedule. Learn Digital Marketing through live online sessions or immersive classroom training with hands-on projects.",
        categoryId: "digital-marketing",
        image: "code-icon",
        rating: 5,
        price: "₹25,000"
    }
];
