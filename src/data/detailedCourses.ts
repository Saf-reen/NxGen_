import { BookOpen, CheckCircle, Clock, Award, BarChart, Code, Database, Globe, Brain, PieChart, Layers, Terminal } from "lucide-react";

export interface DetailedCourse {
    id: string;
    title: string;
    tagline: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    lessons: number;
    projects: number;
    overview: string;
    outcomes: string[];
    curriculum: {
        module: string;
        topics: string[];
    }[];
    tools: {
        name: string;
        icon: any;
    }[];
    project: {
        title: string;
        description: string;
    };
    audience: string[];
    image: string;
}

export const detailedCourses: Record<string, DetailedCourse> = {
    "da-intro": {
        id: "da-intro",
        title: "Introduction to Data Analytics (Foundation)",
        tagline: "Understand the analytics lifecycle and business context.",
        level: "Beginner",
        duration: "2 Weeks",
        lessons: 12,
        projects: 1,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        overview: "This course introduces the fundamentals of data analytics and how data is used to solve real business problems. Learners will understand the complete analytics lifecycle and industry roles.",
        outcomes: [
            "Understand how data analytics supports business decisions",
            "Identify analytics roles and workflows",
            "Work with basic datasets confidently"
        ],
        curriculum: [
            { module: "Module 1: Foundations", topics: ["What is Data Analytics", "Analytics roles & workflow"] },
            { module: "Module 2: Data Lifecycle", topics: ["Collect → Clean → Explore → Interpret"] },
            { module: "Module 3: Data Types", topics: ["Structured vs Unstructured data"] },
            { module: "Module 4: Business Metrics", topics: ["KPIs, metrics & business questions"] },
            { module: "Module 5: Practical Skills", topics: ["Working with CSV & Excel files", "Introduction to data cleaning"] }
        ],
        tools: [
            { name: "Microsoft Excel", icon: BarChart }
        ],
        project: {
            title: "Explore a sales CSV dataset",
            description: "Explore a sales CSV dataset, identify KPIs and data quality issues."
        },
        audience: ["Students", "Fresh graduates", "Career switchers", "Business professionals"]
    },
    "da-excel": {
        id: "da-excel",
        title: "Excel & Fundamental Analytics",
        tagline: "Perform business analysis using spreadsheets and build professional dashboards.",
        level: "Beginner",
        duration: "3 Weeks",
        lessons: 15,
        projects: 1,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        overview: "This course focuses on performing business analysis using spreadsheets and building professional dashboards.",
        outcomes: [
            "Clean and analyze data using Excel",
            "Create reports and dashboards",
            "Perform descriptive analysis"
        ],
        curriculum: [
            { module: "Module 1: Data Preparation", topics: ["Data cleaning, sorting & filtering"] },
            { module: "Module 2: Formulas", topics: ["IF, VLOOKUP/XLOOKUP, INDEX-MATCH"] },
            { module: "Module 3: Pivot Tables", topics: ["Pivot Tables & Pivot Charts"] },
            { module: "Module 4: Analysis", topics: ["Descriptive statistics"] },
            { module: "Module 5: Visualization", topics: ["Dashboard design"] }
        ],
        tools: [
            { name: "Microsoft Excel", icon: BarChart }
        ],
        project: {
            title: "Sales Dashboard",
            description: "Create a complete sales dashboard in Excel."
        },
        audience: ["Beginners", "Business Analysts", "Operations Managers"]
    },
    "da-sql": {
        id: "da-sql",
        title: "SQL for Data Analytics",
        tagline: "Query, filter, and analyze data stored in databases using SQL.",
        level: "Intermediate",
        duration: "4 Weeks",
        lessons: 18,
        projects: 1,
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200",
        overview: "Learn how to query, filter, and analyze data stored in databases using SQL.",
        outcomes: [
            "Write efficient SQL queries",
            "Extract insights from databases",
            "Build KPI reports from raw data"
        ],
        curriculum: [
            { module: "Module 1: Concepts", topics: ["Database concepts & relational models", "Tables, keys & relationships"] },
            { module: "Module 2: Basic Queries", topics: ["SELECT, WHERE, GROUP BY, ORDER BY"] },
            { module: "Module 3: Advanced Queries", topics: ["JOINS (INNER, LEFT, RIGHT)", "Subqueries & aggregations"] },
            { module: "Module 4: Optimization", topics: ["Query optimization basics"] }
        ],
        tools: [
            { name: "MySQL", icon: Database }
        ],
        project: {
            title: "KPI Reporting",
            description: "Write analytical SQL queries and build KPI reports using database tables."
        },
        audience: ["Data Analysts", "Developers", "Database Administrators"]
    },
    "da-python": {
        id: "da-python",
        title: "Python for Data Analytics",
        tagline: "Perform EDA and data manipulation programmatically.",
        level: "Intermediate",
        duration: "5 Weeks",
        lessons: 20,
        projects: 1,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200",
        overview: "This course introduces Python for data analysis, focusing on EDA and data manipulation.",
        outcomes: [
            "Perform data cleaning using Python",
            "Conduct Exploratory Data Analysis",
            "Visualize insights programmatically"
        ],
        curriculum: [
            { module: "Module 1: Python Basics", topics: ["Python basics for analytics", "NumPy arrays"] },
            { module: "Module 2: Pandas", topics: ["Pandas DataFrames", "Data cleaning & transformation", "Handling missing values"] },
            { module: "Module 3: EDA", topics: ["EDA techniques"] },
            { module: "Module 4: Visualization", topics: ["Basic visualization using Matplotlib"] }
        ],
        tools: [
            { name: "Python", icon: Code },
            { name: "NumPy", icon: Code },
            { name: "Pandas", icon: Code },
            { name: "Matplotlib", icon: BarChart }
        ],
        project: {
            title: "End-to-End EDA",
            description: "Complete an end-to-end Exploratory Data Analysis project using Python."
        },
        audience: ["Data Scientists", "Analysts", "Programmers"]
    },
    "da-r": {
        id: "da-r",
        title: "R Programming for Analytics",
        tagline: "Statistical analysis and visualization using R.",
        level: "Intermediate",
        duration: "4 Weeks",
        lessons: 16,
        projects: 1,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        overview: "An optional track for learners interested in statistical analysis and visualization using R.",
        outcomes: [
            "Perform data analysis using R",
            "Create professional statistical visualizations"
        ],
        curriculum: [
            { module: "Module 1: Fundamentals", topics: ["R syntax & data structures"] },
            { module: "Module 2: Wrangling", topics: ["Data wrangling"] },
            { module: "Module 3: Statistics", topics: ["Statistical summaries"] },
            { module: "Module 4: Visualization", topics: ["Visual storytelling using ggplot2"] }
        ],
        tools: [
            { name: "R", icon: Code },
            { name: "ggplot2", icon: BarChart }
        ],
        project: {
            title: "Visual Storytelling",
            description: "Dataset visualization using ggplot2."
        },
        audience: ["Statisticians", "Researchers", "Data Analysts"]
    },
    "da-viz": {
        id: "da-viz",
        title: "Data Visualization & BI Tools",
        tagline: "Build interactive dashboards and communicate insights effectively.",
        level: "Intermediate",
        duration: "4 Weeks",
        lessons: 15,
        projects: 2,
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200",
        overview: "Learn to build interactive dashboards and communicate insights effectively to stakeholders.",
        outcomes: [
            "Design business dashboards",
            "Apply data modeling concepts",
            "Present insights visually"
        ],
        curriculum: [
            { module: "Module 1: Modeling", topics: ["Data modeling basics"] },
            { module: "Module 2: Reporting", topics: ["Visual creation & reporting", "DAX fundamentals"] },
            { module: "Module 3: Design", topics: ["Dashboard design principles"] },
            { module: "Module 4: Sharing", topics: ["Publishing & sharing dashboards"] }
        ],
        tools: [
            { name: "Power BI", icon: BarChart },
            { name: "Tableau", icon: BarChart }
        ],
        project: {
            title: "Interactive Dashboards",
            description: "Build interactive dashboards in Power BI and perform data storytelling using Tableau."
        },
        audience: ["BI Developers", "Data Analysts", "Consultants"]
    },
    "da-stats": {
        id: "da-stats",
        title: "Statistics & Probability for Analytics",
        tagline: "Validate insights and support decision-making with statistics.",
        level: "Intermediate",
        duration: "3 Weeks",
        lessons: 12,
        projects: 1,
        image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=1200",
        overview: "Build a strong foundation in statistics to validate insights and support decision-making.",
        outcomes: [
            "Apply statistical methods to data",
            "Interpret analytical results confidently"
        ],
        curriculum: [
            { module: "Module 1: Descriptives", topics: ["Mean, median, variance & standard deviation"] },
            { module: "Module 2: Probability", topics: ["Probability distributions"] },
            { module: "Module 3: Inference", topics: ["Hypothesis testing", "Confidence intervals"] },
            { module: "Module 4: Modeling", topics: ["Correlation vs Regression"] }
        ],
        tools: [
            { name: "Excel/Python", icon: BarChart }
        ],
        project: {
            title: "Statistical Analysis",
            description: "Perform statistical analysis on real datasets to validate hypotheses."
        },
        audience: ["Data Analysts", "Researchers", "Students"]
    },
    "da-predictive": {
        id: "da-predictive",
        title: "Predictive Analytics & ML Basics",
        tagline: "Note: Basic machine learning and predictive modeling.",
        level: "Advanced",
        duration: "4 Weeks",
        lessons: 16,
        projects: 1,
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200",
        overview: "Learn the basics of machine learning and predictive modeling for business use cases.",
        outcomes: [
            "Build basic predictive models",
            "Understand model evaluation concepts"
        ],
        curriculum: [
            { module: "Module 1: Regression", topics: ["Linear regression"] },
            { module: "Module 2: Classification", topics: ["Classification fundamentals"] },
            { module: "Module 3: Clustering", topics: ["Clustering (K-Means)"] },
            { module: "Module 4: Evaluation", topics: ["Model evaluation metrics", "Business forecasting"] }
        ],
        tools: [
            { name: "Python", icon: Code }
        ],
        project: {
            title: "Prediction Model",
            description: "Build a prediction model using Python for a business use case."
        },
        audience: ["Data Scientists", "Advanced Analysts", "Engineers"]
    },
    "da-bigdata": {
        id: "da-bigdata",
        title: "Big Data & Cloud Analytics (Advanced)",
        tagline: "Work with large-scale data using big data and cloud technologies.",
        level: "Advanced",
        duration: "4 Weeks",
        lessons: 12,
        projects: 1,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
        overview: "Understand how large-scale data is processed using big data and cloud technologies.",
        outcomes: [
            "Understand big data ecosystems",
            "Work conceptually with cloud data platforms"
        ],
        curriculum: [
            { module: "Module 1: Big Data", topics: ["Big data concepts"] },
            { module: "Module 2: Frameworks", topics: ["Spark & Hadoop fundamentals"] },
            { module: "Module 3: Cloud DWH", topics: ["Cloud data warehouses (AWS, GCP, Snowflake)"] },
            { module: "Module 4: Operations", topics: ["Querying large datasets"] }
        ],
        tools: [
            { name: "Spark", icon: Layers },
            { name: "Cloud Platforms", icon: Globe }
        ],
        project: {
            title: "Big Data Processing",
            description: "Work on sample big data processing scenarios."
        },
        audience: ["Data Engineers", "Architects", "Senior Analysts"]
    },
    "da-capstone": {
        id: "da-capstone",
        title: "Capstone & Real-World Project",
        tagline: "End-to-end analytics project to showcase skills and build a portfolio.",
        level: "Advanced",
        duration: "4 Weeks",
        lessons: 5,
        projects: 1,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200",
        overview: "A complete end-to-end analytics project to showcase skills and build a portfolio.",
        outcomes: [
            "Apply analytics skills in real scenarios",
            "Present insights professionally"
        ],
        curriculum: [
            { module: "Phase 1: Definition", topics: ["Business problem definition"] },
            { module: "Phase 2: Preparation", topics: ["Data cleaning (Excel / SQL / Python)"] },
            { module: "Phase 3: Analysis", topics: ["Analysis & visualization (Power BI / Tableau)"] },
            { module: "Phase 4: Delivery", topics: ["Insights & final presentation", "Portfolio-ready project", "Presentation deck"] }
        ],
        tools: [
            { name: "All Tools", icon: Brain }
        ],
        project: {
            title: "Portfolio Project",
            description: "Deliver a complete portfolio-ready project and presentation deck."
        },
        audience: ["All Learners", "Job Seekers"]
    },
    "dm-seo": {
        id: "dm-seo",
        title: "Search Engine Optimization (SEO)",
        tagline: "Master on-page, off-page, and technical SEO to rank higher on search engines.",
        level: "Intermediate",
        duration: "6 Weeks",
        lessons: 24,
        projects: 2,
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200",
        overview: "Learn comprehensive SEO strategies to improve website visibility, drive organic traffic, and rank higher on search engines. This course covers keyword research, on-page optimization, link building, technical SEO, and analytics.",
        outcomes: [
            "Conduct effective keyword research and competitor analysis",
            "Optimize website content and structure for search engines",
            "Build high-quality backlinks and implement off-page SEO strategies",
            "Perform technical SEO audits and fix common issues",
            "Track and analyze SEO performance using Google Analytics and Search Console"
        ],
        curriculum: [
            { module: "Module 1: SEO Fundamentals", topics: ["How search engines work", "SEO vs SEM", "Keyword research basics"] },
            { module: "Module 2: On-Page SEO", topics: ["Title tags, meta descriptions", "Header tags and content optimization", "Internal linking strategies"] },
            { module: "Module 3: Off-Page SEO", topics: ["Link building strategies", "Guest posting and outreach", "Social signals"] },
            { module: "Module 4: Technical SEO", topics: ["Site speed optimization", "Mobile optimization", "XML sitemaps and robots.txt", "Schema markup"] },
            { module: "Module 5: Local SEO", topics: ["Google My Business", "Local citations", "Reviews management"] },
            { module: "Module 6: SEO Analytics", topics: ["Google Analytics setup", "Search Console insights", "Rank tracking and reporting"] }
        ],
        tools: [
            { name: "Google Analytics", icon: BarChart },
            { name: "Search Console", icon: Globe },
            { name: "SEMrush/Ahrefs", icon: Terminal }
        ],
        project: {
            title: "Complete Website SEO Audit & Strategy",
            description: "Perform a comprehensive SEO audit of a real website and create an actionable optimization strategy."
        },
        audience: ["Marketing Professionals", "Business Owners", "Content Writers", "Entrepreneurs"]
    },
    "dm-social-media": {
        id: "dm-social-media",
        title: "Social Media Marketing (SMM)",
        tagline: "Create engaging campaigns across social platforms to build brand awareness.",
        level: "Beginner",
        duration: "5 Weeks",
        lessons: 20,
        projects: 2,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200",
        overview: "Master social media marketing across Facebook, Instagram, LinkedIn, Twitter, and other platforms. Learn to create engaging content, run campaigns, build communities, and measure social media ROI.",
        outcomes: [
            "Develop comprehensive social media strategies for brands",
            "Create engaging content tailored to each platform",
            "Run and optimize paid social media campaigns",
            "Build and manage online communities",
            "Analyze social media metrics and improve performance"
        ],
        curriculum: [
            { module: "Module 1: Social Media Fundamentals", topics: ["Platform overview", "Social media strategy", "Audience research"] },
            { module: "Module 2: Content Creation", topics: ["Content types and formats", "Visual design basics", "Copywriting for social media", "Content calendar planning"] },
            { module: "Module 3: Facebook & Instagram Marketing", topics: ["Page optimization", "Organic reach strategies", "Instagram Stories and Reels", "Facebook Ads Manager"] },
            { module: "Module 4: LinkedIn & Twitter Marketing", topics: ["LinkedIn company pages", "Professional networking", "Twitter engagement strategies"] },
            { module: "Module 5: Community Management", topics: ["Engagement strategies", "Crisis management", "Influencer collaboration"] },
            { module: "Module 6: Social Media Analytics", topics: ["Platform insights", "ROI measurement", "Reporting and optimization"] }
        ],
        tools: [
            { name: "Meta Business Suite", icon: Globe },
            { name: "Canva", icon: Code },
            { name: "Hootsuite", icon: Layers }
        ],
        project: {
            title: "Social Media Campaign Launch",
            description: "Plan and execute a complete social media campaign across multiple platforms with content calendar and analytics."
        },
        audience: ["Marketing Professionals", "Social Media Managers", "Entrepreneurs", "Content Creators"]
    },
    "dm-content": {
        id: "dm-content",
        title: "Content Marketing & Copywriting",
        tagline: "Craft compelling content that attracts, engages, and converts your audience.",
        level: "Intermediate",
        duration: "5 Weeks",
        lessons: 18,
        projects: 2,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200",
        overview: "Learn to create high-quality content that drives business results. Master content strategy, blog writing, copywriting, storytelling, and content distribution across channels.",
        outcomes: [
            "Develop data-driven content marketing strategies",
            "Write compelling blog posts and articles",
            "Master persuasive copywriting techniques",
            "Create content for different stages of the buyer journey",
            "Measure content performance and ROI"
        ],
        curriculum: [
            { module: "Module 1: Content Strategy", topics: ["Content marketing fundamentals", "Audience personas", "Content pillars and themes"] },
            { module: "Module 2: Copywriting Essentials", topics: ["Headline formulas", "Persuasive writing techniques", "Call-to-action optimization"] },
            { module: "Module 3: Blog Writing", topics: ["SEO-friendly blog posts", "Storytelling techniques", "Content structure"] },
            { module: "Module 4: Content Formats", topics: ["Ebooks and whitepapers", "Case studies", "Infographics", "Video scripts"] },
            { module: "Module 5: Content Distribution", topics: ["Content promotion strategies", "Email newsletters", "Social media distribution"] },
            { module: "Module 6: Content Analytics", topics: ["Performance metrics", "A/B testing", "Content optimization"] }
        ],
        tools: [
            { name: "WordPress", icon: Code },
            { name: "Grammarly", icon: BookOpen },
            { name: "Google Docs", icon: BookOpen }
        ],
        project: {
            title: "Content Marketing Campaign",
            description: "Create a complete content marketing campaign including blog posts, social content, and email newsletters."
        },
        audience: ["Content Writers", "Marketing Professionals", "Bloggers", "Business Owners"]
    },
    "dm-email": {
        id: "dm-email",
        title: "Email Marketing & Automation",
        tagline: "Design effective email campaigns and automation workflows to nurture leads.",
        level: "Beginner",
        duration: "4 Weeks",
        lessons: 16,
        projects: 2,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
        overview: "Master email marketing from strategy to execution. Learn to build email lists, create engaging campaigns, set up automation workflows, and optimize for conversions.",
        outcomes: [
            "Build and segment email lists effectively",
            "Design high-converting email campaigns",
            "Create automated email workflows",
            "Write compelling email copy",
            "Analyze email metrics and improve performance"
        ],
        curriculum: [
            { module: "Module 1: Email Marketing Basics", topics: ["Email marketing fundamentals", "List building strategies", "Email service providers"] },
            { module: "Module 2: Email Design", topics: ["Email templates", "Mobile optimization", "Design best practices"] },
            { module: "Module 3: Copywriting", topics: ["Subject line formulas", "Email body structure", "Call-to-action optimization"] },
            { module: "Module 4: Automation", topics: ["Welcome sequences", "Drip campaigns", "Behavioral triggers", "Lead nurturing workflows"] },
            { module: "Module 5: Segmentation", topics: ["List segmentation strategies", "Personalization techniques", "Dynamic content"] },
            { module: "Module 6: Analytics", topics: ["Open rates and click rates", "A/B testing", "Deliverability optimization"] }
        ],
        tools: [
            { name: "Mailchimp", icon: Globe },
            { name: "HubSpot", icon: Layers },
            { name: "ConvertKit", icon: Code }
        ],
        project: {
            title: "Email Automation Workflow",
            description: "Build a complete automated email sequence for lead nurturing with segmentation and personalization."
        },
        audience: ["Marketing Professionals", "Entrepreneurs", "Sales Teams", "E-commerce Managers"]
    },
    "dm-ppc": {
        id: "dm-ppc",
        title: "PPC & Paid Advertising (Google Ads, Facebook Ads)",
        tagline: "Plan, execute, and optimize paid advertising campaigns to maximize ROI.",
        level: "Intermediate",
        duration: "6 Weeks",
        lessons: 24,
        projects: 2,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        overview: "Master paid advertising across Google Ads and Facebook Ads platforms. Learn campaign setup, targeting, bidding strategies, ad creation, and optimization techniques to achieve maximum ROI.",
        outcomes: [
            "Set up and manage Google Ads campaigns",
            "Create high-performing Facebook and Instagram ad campaigns",
            "Implement advanced targeting and bidding strategies",
            "Design compelling ad creatives and copy",
            "Analyze campaign performance and optimize for ROI"
        ],
        curriculum: [
            { module: "Module 1: PPC Fundamentals", topics: ["PPC basics and terminology", "Campaign types overview", "Budget planning"] },
            { module: "Module 2: Google Ads Search", topics: ["Keyword research", "Ad groups structure", "Ad copywriting", "Quality Score optimization"] },
            { module: "Module 3: Google Display & Video", topics: ["Display network campaigns", "YouTube advertising", "Remarketing strategies"] },
            { module: "Module 4: Facebook Ads", topics: ["Campaign objectives", "Audience targeting", "Ad formats", "Facebook Pixel setup"] },
            { module: "Module 5: Instagram & LinkedIn Ads", topics: ["Instagram ad formats", "LinkedIn campaign manager", "B2B advertising strategies"] },
            { module: "Module 6: Optimization & Analytics", topics: ["Conversion tracking", "A/B testing", "Bid optimization", "ROI analysis"] }
        ],
        tools: [
            { name: "Google Ads", icon: Globe },
            { name: "Facebook Ads Manager", icon: Globe },
            { name: "Google Analytics", icon: BarChart }
        ],
        project: {
            title: "Multi-Platform PPC Campaign",
            description: "Launch and optimize a complete PPC campaign across Google Ads and Facebook Ads with conversion tracking."
        },
        audience: ["Marketing Professionals", "Business Owners", "PPC Specialists", "Entrepreneurs"]
    },
    "dm-analytics": {
        id: "dm-analytics",
        title: "Digital Marketing Analytics (Google Analytics & Tag Manager)",
        tagline: "Track, measure, and analyze marketing performance using data-driven insights.",
        level: "Intermediate",
        duration: "5 Weeks",
        lessons: 20,
        projects: 2,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        overview: "Master digital marketing analytics using Google Analytics 4, Google Tag Manager, and other analytics tools. Learn to track campaigns, measure ROI, and make data-driven marketing decisions.",
        outcomes: [
            "Set up and configure Google Analytics 4",
            "Implement tracking using Google Tag Manager",
            "Create custom reports and dashboards",
            "Analyze marketing campaign performance",
            "Make data-driven optimization decisions"
        ],
        curriculum: [
            { module: "Module 1: Analytics Fundamentals", topics: ["Digital analytics overview", "GA4 setup and configuration", "Data collection basics"] },
            { module: "Module 2: Google Tag Manager", topics: ["GTM setup", "Tags, triggers, and variables", "Event tracking implementation"] },
            { module: "Module 3: Traffic Analysis", topics: ["Traffic sources", "User behavior analysis", "Conversion funnel analysis"] },
            { module: "Module 4: Campaign Tracking", topics: ["UTM parameters", "Campaign attribution", "Multi-channel funnels"] },
            { module: "Module 5: Custom Reports", topics: ["Custom dimensions and metrics", "Dashboard creation", "Data visualization"] },
            { module: "Module 6: Advanced Analytics", topics: ["E-commerce tracking", "Goal setup", "Audience segmentation", "Predictive analytics"] }
        ],
        tools: [
            { name: "Google Analytics 4", icon: BarChart },
            { name: "Google Tag Manager", icon: Code },
            { name: "Data Studio", icon: PieChart }
        ],
        project: {
            title: "Complete Analytics Implementation",
            description: "Set up comprehensive tracking for a website including GA4, GTM, conversion tracking, and custom dashboards."
        },
        audience: ["Marketing Analysts", "Digital Marketers", "Business Analysts", "Data Analysts"]
    }
};
