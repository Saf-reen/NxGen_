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
    }
};
