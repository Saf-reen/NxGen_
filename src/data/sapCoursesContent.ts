export interface SAPCourseContent {
    id: string;
    whatIs: string;
    whyCourse: string;
    keyBenefits: string[];
    whyChooseNxGen: string[];
    careerOpportunities: string[];
    feesAndDuration: string;
    conclusion: string;
    keyTopics?: string[]; // Added key topics
    metaTitle?: string; // Added SEO meta title
    metaDescription?: string; // Added SEO meta description
    curriculum?: { module: string; topics: string[] }[]; // Added custom curriculum
}

const generateDefaultSAPContent = (title: string, id: string): SAPCourseContent => ({
    id,
    whatIs: `${title} is a critical module within the SAP ecosystem that helps organizations streamline their operations. It provides comprehensive tools tailored to optimize specific business processes efficiently and effectively. At NxGen Tech Academy, we understand the importance of this module in today's digital transformation journey.`,
    whyCourse: `The demand for ${title} professionals is rapidly growing as organizations globally undergo digital transformation. Certification in ${title} gives you a significant edge in the job market, offering exceptional job stability, attractive salary packages, and worldwide career opportunities.`,
    keyBenefits: [
        "Job Placement Assistance",
        "Expert-Led Classes",
        "Flexible Learning Schedule",
        "Practical Projects and First-Hand Experience"
    ],
    whyChooseNxGen: [
        "Personalized Learning Approach",
        "Experienced Trainers with Industry Knowledge",
        "100% Placement Guaranteed and Career Support",
        "Industry-Approved Course Content"
    ],
    keyTopics: [
        "Core Module Configuration",
        "Business Process Integration",
        "Standard Industry Workflows",
        "Real-time Project Scenarios",
        "Certification Preparation",
        "Best Practices & Standards"
    ],
    careerOpportunities: [
        `${title} Consultant`,
        "SAP Application Analyst",
        "SAP Project Manager",
        "Business Process Expert"
    ],
    feesAndDuration: `Our ${title} course is designed to be highly affordable while delivering world-class education. The program spans comprehensive modules covering all essential industry skills. For specific fee structures and starting dates, please reach out to our admissions team.`,
    conclusion: `Begin your journey to becoming a certified SAP professional today. Through our intensive ${title} training, you will build both a robust theoretical foundation and the practical expertise necessary to excel and advance your career.`
});

// Define the unique content for each SAP course here. 
// You can edit the text strings below for each course to completely customize their pages later!
export const sapCoursesContent: Record<string, SAPCourseContent> = {
    "sap-abap-s4hana": generateDefaultSAPContent("SAP ABAP on S/4HANA", "sap-abap-s4hana"),
    "sap-abap-rap": generateDefaultSAPContent("SAP ABAP with CDS, OData & RAP", "sap-abap-rap"),
    "sap-fiori": generateDefaultSAPContent("SAP Fiori & UI5", "sap-fiori"),
    "sap-fullstack": generateDefaultSAPContent("SAP Full Stack Development", "sap-fullstack"),

    "sap-sd-course-training": {
        id: "sap-sd-course-training",
        metaTitle: "SAP SD Course | Training with Placement – NxGen Tech Academy",
        metaDescription: "Join SAP SD course at NxGen Tech Academy. Learn sales order processing, billing, pricing, and SAP skills with expert training and placement support",
        whatIs: `
The SAP SD Course at NXGEN Tech Academy is designed to provide a complete understanding of sales processes, order management, pricing, shipping, and billing using SAP S/4HANA.
This SAP SD Course Curriculum covers the entire Order-to-Cash (O2C) business cycle, including sales order processing, delivery management, billing integration with finance, and advanced reporting. Through this structured SAP SD Course Curriculum, students gain both functional knowledge and hands-on SAP system experience.
`,
        whyCourse: `
The SAP SD Course Curriculum prepares learners for careers as SAP SD consultants, business analysts, and ERP professionals by focusing on real business scenarios and industry best practices.
Thousands of companies worldwide rely on SAP systems to manage their business processes. SAP SD professionals are highly valued because they help organizations manage their sales operations efficiently.
Professionals with SAP SD skills often receive attractive salary packages due to their specialized ERP knowledge and business process expertise.
`,
        keyBenefits: [
            "Configure enterprise structure and master data in SAP SD",
            "Manage sales orders, deliveries, and billing processes",
            "Implement pricing and credit management",
            "Integrate SAP SD with other modules such as MM, FI, and PP",
            "Analyze sales performance using reporting and analytics tools",
            "Master Order-to-Cash (O2C) business processes",
            "Hands-on SAP system practice with real-time projects",
            "Comprehensive certification and interview preparation"
        ],
        whyChooseNxGen: [
            "Live interactive training sessions",
            "Real-time projects and case studies",
            "Updated SAP S/4HANA curriculum",
            "Expert trainer guidance",
            "Mock interviews and career support",
            "Placement assistance",
            "Affordable course fees",
            "Hands-on SAP practice system access"
        ],
        keyTopics: [
            "Sales Order Processing",
            "Pricing and Condition Techniques",
            "Delivery and Shipping Management",
            "Billing and Invoice Processing",
            "Real-time business scenarios"
        ],
        careerOpportunities: [
            "SAP SD Consultant",
            "SAP Functional Analyst",
            "Order Management Specialist",
            "ERP Business Consultant",
            "SAP S/4HANA Sales Expert",
            "Business Process Analyst",
            "SAP SD Associate",
            "Senior ERP Specialist"
        ],
        feesAndDuration: `
The SAP SD Course typically takes between 10 and 12 weeks depending on the training schedule chosen.

Training options include weekday batches with a duration of 8–10 weeks, weekend batches designed for working professionals, and a fast-track program that can be completed in 4–6 weeks.

Flexible schedules allow students to complete the SAP SD Course while managing work or studies.

The course fee includes complete training sessions, study materials, SAP practice system access, real-time projects, and certification guidance. Flexible payment options are also available.
`,
        conclusion: "With this comprehensive SAP SD Course Curriculum, students gain both theoretical knowledge and practical SAP system experience required for real-world SAP implementation projects. Enrolling in an SAP SD Course at NxGen Tech Academy is a smart choice to build a successful career in ERP and business technology.",
        curriculum: [
            {
                module: "Introduction to SAP S/4HANA and SAP SD",
                topics: [
                    "Overview of SAP S/4HANA",
                    "Differences between SAP ECC and SAP S/4HANA",
                    "Introduction to SAP SD (Sales & Distribution)",
                    "Organizational structure overview",
                    "Integration of SD with SAP MM, FI, and PP modules",
                    "SAP Fiori overview for SAP SD users"
                ]
            },
            {
                module: "Enterprise Structure in SAP SD",
                topics: [
                    "Client structure",
                    "Company Code",
                    "Sales Organization",
                    "Distribution Channel",
                    "Division",
                    "Sales Area configuration",
                    "Organizational assignments and integrations"
                ]
            },
            {
                module: "Master Data in SAP SD",
                topics: [
                    "Customer Master Data configuration",
                    "Customer Account Groups",
                    "Partner Determination procedures",
                    "Material Master – Sales Views",
                    "Customer–Material Information Records",
                    "Condition Master Data"
                ]
            },
            {
                module: "Sales Document Configuration",
                topics: [
                    "Sales Document Types",
                    "Item Categories",
                    "Schedule Line Categories",
                    "Copy Control configuration",
                    "Text Determination procedures",
                    "Number Range assignments"
                ]
            },
            {
                module: "Pricing and Condition Technique",
                topics: [
                    "Pricing Procedures configuration",
                    "Condition Types",
                    "Access Sequences",
                    "Condition Records maintenance",
                    "Pricing control mechanisms",
                    "Taxes in SAP SD",
                    "Discounts and surcharges"
                ]
            },
            {
                module: "Sales Order Processing",
                topics: [
                    "Inquiry processing",
                    "Quotation creation",
                    "Sales Order processing",
                    "Availability Check (ATP)",
                    "Credit Management in SAP S/4HANA",
                    "Incompletion procedures"
                ]
            },
            {
                module: "Shipping and Delivery Processing",
                topics: [
                    "Delivery document creation",
                    "Picking and packing procedures",
                    "Post Goods Issue (PGI) process",
                    "Route determination",
                    "Shipping point determination",
                    "Output determination",
                    "Integration with WM and EWM"
                ]
            },
            {
                module: "Billing and Invoicing",
                topics: [
                    "Billing document types",
                    "Proforma invoices",
                    "Credit memo and debit memo processing",
                    "Invoice cancellation procedures",
                    "Billing document posting to SAP FI",
                    "Billing simplifications in SAP S/4HANA"
                ]
            },
            {
                module: "Credit Management in SAP S/4HANA",
                topics: [
                    "FSCM Credit Management overview",
                    "Credit Control Area configuration",
                    "Credit risk classes",
                    "Automatic credit checks",
                    "Credit limit management",
                    "Migration from classic credit management"
                ]
            },
            {
                module: "Output Management in SAP S/4HANA",
                topics: [
                    "Output management using BRF+",
                    "Output types configuration",
                    "Form determination procedures",
                    "Adobe Forms configuration",
                    "Email and print output settings"
                ]
            },
            {
                module: "Sales Returns and Complaints Management",
                topics: [
                    "Sales returns processing",
                    "Complaint management",
                    "Free-of-charge deliveries",
                    "Subsequent deliveries"
                ]
            },
            {
                module: "Intercompany and Third-Party Sales",
                topics: [
                    "Intercompany sales processes",
                    "Third-party sales processing",
                    "Individual purchase order handling",
                    "Billing and accounting integration"
                ]
            },
            {
                module: "Transportation and Logistics Integration",
                topics: [
                    "Transportation planning",
                    "Freight management integration",
                    "Logistics execution overview"
                ]
            },
            {
                module: "SAP SD Reporting and Analytics",
                topics: [
                    "Standard SAP SD reports",
                    "SAP Fiori applications for SD",
                    "Embedded analytics capabilities",
                    "Sales KPIs and performance dashboards"
                ]
            },
            {
                module: "SAP SD Migration to S/4HANA",
                topics: [
                    "Key SD changes in SAP S/4HANA",
                    "Business Partner concept",
                    "Customer Vendor Integration (CVI)",
                    "Data migration overview"
                ]
            },
            {
                module: "SAP SD Customization and Enhancements",
                topics: [
                    "User exits and enhancements",
                    "Business Add-Ins (BAdIs) in SD",
                    "IDocs and interfaces",
                    "Overview of important SAP SD tables"
                ]
            },
            {
                module: "SAP SD Project Lifecycle",
                topics: [
                    "Business blueprint preparation",
                    "System configuration",
                    "Testing processes (Unit Testing, Integration Testing, UAT)",
                    "Go-live preparation and activities",
                    "Support and maintenance phases"
                ]
            },
            {
                module: "Real-Time Business Scenarios and Case Studies",
                topics: [
                    "Order-to-Cash (O2C) process",
                    "End-to-end business scenarios",
                    "Issue resolution techniques",
                    "Best practices in SAP SD implementation"
                ]
            },
            {
                module: "Certification and Interview Preparation",
                topics: [
                    "SAP SD on S/4HANA certification overview",
                    "Real-time SAP SD interview questions",
                    "Resume preparation and job role guidance"
                ]
            }
        ]
    },

    "sap-fico-course-training": {
        id: "sap-fico-course-training",
        metaTitle: "SAP FICO Course | Certification & Placement – NxGen Tech Academy",
        metaDescription: "Learn SAP FICO with NxGen Tech Academy. Get hands-on SAP S/4HANA training, real-time projects, expert trainers, and placement assistance.",
        whatIs: `In today’s digital business environment, organizations rely heavily on advanced ERP systems to manage financial operations efficiently. SAP FICO (Financial Accounting and Controlling) plays a crucial role in helping companies manage accounting, financial reporting, and cost management processes.\n\nThe increasing adoption of SAP ERP and SAP S/4HANA across industries has created strong demand for skilled SAP FICO professionals who can implement, manage, and optimize financial systems.\n\nAt NXGEN Tech Academy, our SAP FICO training program is designed to equip students and professionals with the practical knowledge required to build a successful career in SAP finance.`,
        whyCourse: `SAP FICO is one of the most important modules in the SAP ecosystem because it helps organizations maintain accurate financial records and streamline accounting operations.\n\nBusinesses worldwide are adopting SAP ERP systems to manage financial processes. Digital transformation is increasing the demand for SAP finance professionals. SAP FICO consultants play a key role in financial system implementation and optimization. Organizations require experts to manage financial reporting, compliance, and cost control.\n\nBecause of these factors, companies actively seek certified SAP FICO professionals to manage their financial operations effectively.`,
        keyBenefits: [
            "Attractive salary packages",
            "Global career opportunities",
            "High job stability",
            "Faster career growth",
            "Opportunities to work in multiple industries"
        ],
        whyChooseNxGen: [
            "Personalized learning approach supporting all levels",
            "Experienced trainers actively working on real SAP projects",
            "Placement support and career guidance with tie-ups to 50+ companies",
            "Industry-approved, updated SAP FICO course curriculum",
            "Self-Paced learning support and Interactive live training"
        ],
        keyTopics: [
            "Financial Accounting Global Settings",
            "General Ledger Accounting (GL)",
            "Accounts Payable (AP) and Accounts Receivable (AR)",
            "Asset Accounting (AA) and Bank Accounting",
            "Cost Center and Profit Center Accounting",
            "Profitability Analysis (CO-PA)",
            "SAP S/4HANA Finance Innovations"
        ],
        careerOpportunities: [
            "SAP FICO Consultant",
            "Financial Analyst",
            "SAP Project Manager",
            "SAP End User",
            "ERP Functional Consultant",
            "SAP Project Consultant"
        ],
        feesAndDuration: `The SAP FICO course duration varies depending on the batch type. Typical duration includes regular batches requiring 2 to 3 months, or weekend and evening batches requiring 4 to 5 months. Flexible schedules allow students and working professionals to complete the training without affecting their daily responsibilities.\n\nAt NXGEN Tech Academy, the course fees are designed to be affordable while maintaining high-quality training standards. The course fee includes complete training sessions, study materials, access to SAP practice systems, and placement assistance.`,
        conclusion: `SAP FICO has become one of the most promising career paths in today’s digital economy. As companies continue to adopt SAP systems, the demand for skilled SAP finance professionals is increasing rapidly.\n\nAt NXGEN Tech Academy, our SAP FICO training program combines expert instruction, practical projects, and strong placement assistance to help students build successful careers.\n\nWith affordable course fees, flexible schedules, and industry-focused training, our program provides the ideal pathway to enter the SAP ecosystem. Enroll today in NXGEN Tech Academy’s SAP FICO Course and take the first step toward a successful career in SAP Finance.`,
        curriculum: [
            {
                module: "1. Introduction to ERP and SAP",
                topics: [
                    "Introduction to ERP (Enterprise Resource Planning)",
                    "Benefits of ERP systems in organizations",
                    "Overview of SAP ERP and architecture",
                    "Overview of SAP modules",
                    "SAP GUI navigation",
                    "SAP system landscape (Development, Quality, Production)"
                ]
            },
            {
                module: "2. Enterprise Structure in SAP",
                topics: [
                    "Client structure in SAP",
                    "Company and Company Code configuration",
                    "Business Area and Segment reporting",
                    "Controlling Area and Credit Control Area",
                    "Assignment of organizational units"
                ]
            },
            {
                module: "3. Financial Accounting Global Settings",
                topics: [
                    "Define and Assign Chart of Accounts",
                    "Account Groups and Retained Earnings Account",
                    "Fiscal Year and Posting Period Variants",
                    "Field Status Variant",
                    "Document Types and Number Range"
                ]
            },
            {
                module: "4. General Ledger Accounting (GL)",
                topics: [
                    "Creation of General Ledger accounts",
                    "Posting transactions, document parking, reversal",
                    "Recurring entries, accrual and deferral",
                    "Financial Statement Version creation",
                    "Trial balance, P&L, and Balance sheet generation"
                ]
            },
            {
                module: "5. Accounts Payable (AP)",
                topics: [
                    "Vendor account groups and master data",
                    "Vendor invoice and credit memo processing",
                    "Vendor down payment management",
                    "Automatic Payment Program (APP)",
                    "Vendor reporting and analysis"
                ]
            },
            {
                module: "6. Accounts Receivable (AR)",
                topics: [
                    "Customer account groups and master data",
                    "Customer invoice and incoming payment processing",
                    "Customer credit memo and Dunning process",
                    "Customer reports and analysis"
                ]
            },
            {
                module: "7. Asset Accounting (AA)",
                topics: [
                    "Asset classes and master record creation",
                    "Asset acquisition, depreciation, transfer, retirement",
                    "Asset accounting reports"
                ]
            },
            {
                module: "8. Bank Accounting",
                topics: [
                    "Bank master and House bank configuration",
                    "Manual and Electronic bank statement processing",
                    "Bank reconciliation process"
                ]
            },
            {
                module: "9. Taxes in SAP",
                topics: [
                    "Tax procedure configuration",
                    "Input tax, output tax, and Tax code creation",
                    "GST overview and implementation in SAP"
                ]
            },
            {
                module: "10. Introduction to Controlling (CO)",
                topics: [
                    "Overview of SAP Controlling module",
                    "Difference between FI and CO",
                    "Controlling Area configuration"
                ]
            },
            {
                module: "11. Cost Element Accounting",
                topics: [
                    "Primary and Secondary cost elements",
                    "Cost element categories"
                ]
            },
            {
                module: "12. Cost Center Accounting",
                topics: [
                    "Cost center creation and hierarchy",
                    "Cost center planning and Distribution process",
                    "Assessment cycles and reporting"
                ]
            },
            {
                module: "13. Internal Orders",
                topics: [
                    "Internal order types and creation",
                    "Budget planning, settlement, and reporting"
                ]
            },
            {
                module: "14. Profit Center Accounting",
                topics: [
                    "Profit center creation and hierarchy",
                    "Profit center postings and reporting"
                ]
            },
            {
                module: "15. Product Costing",
                topics: [
                    "Costing variants configuration",
                    "Cost component structure",
                    "Standard costing procedures"
                ]
            },
            {
                module: "16. Profitability Analysis (CO-PA)",
                topics: [
                    "Operating concern configuration",
                    "Value fields and Characteristics definition",
                    "Profitability reporting"
                ]
            },
            {
                module: "17. Integration with Other SAP Modules",
                topics: [
                    "MM–FI integration",
                    "SD–FI integration",
                    "Automatic account determination"
                ]
            },
            {
                module: "18. SAP S/4HANA Finance Innovations",
                topics: [
                    "Universal Journal (ACDOCA) and simplified data model",
                    "Business Partner concept (CVI)",
                    "New Asset Accounting in S/4HANA",
                    "SAP Fiori apps, Central Finance, and closing cockpit"
                ]
            },
            {
                module: "19. S/4HANA Finance Advanced Topics",
                topics: [
                    "S/4HANA Finance migration overview",
                    "Credit and Cash management in S/4HANA (FSCM)",
                    "Group reporting and embedded analytics"
                ]
            },
            {
                module: "20. Real-Time Business Scenarios",
                topics: [
                    "Procure-to-Pay (P2P) process",
                    "Order-to-Cash (O2C) process",
                    "Asset purchase lifecycle",
                    "Financial closing activities"
                ]
            },
            {
                module: "21. Training Add-ons and Career Support",
                topics: [
                    "Resume and interview preparation",
                    "Real-time project explanation",
                    "SAP certification guidance"
                ]
            }
        ]
    },
    "sap-pp-course": {
        id: "sap-pp-course",
        metaTitle: "SAP PP Course with Placement | SAP MM Training – NXGEN",
        metaDescription: "Join SAP PP Course at NXGEN Tech Academy. Learn production planning, MRP, capacity planning, and SAP S/4HANA with placement support.",
        whatIs: `In manufacturing industries such as automobiles, textiles, electronics, and food processing, production planning plays a crucial role in ensuring that products are manufactured on time, in the correct quantity, and with the right materials.\n\nTo manage these complex processes efficiently, organizations use SAP PP (Production Planning) — one of the core modules of the SAP ERP system.\n\nThe SAP PP Course at NXGEN Tech Academy helps students and professionals understand how production planning works in large organizations and how SAP systems streamline the entire manufacturing process.\n\nThis training program is designed for beginners, fresh graduates, and working professionals, enabling them to learn SAP Production Planning step by step with practical examples.`,
        whyCourse: `Learning SAP PP online training is a smart career choice because production planning is the backbone of every manufacturing organization.\n\nCompanies across industries rely on SAP PP to ensure smooth production operations and efficient supply chain management.`,
        keyBenefits: [
            "High demand for SAP PP professionals",
            "Opportunities in manufacturing and supply chain industries",
            "Competitive salary packages",
            "Global career opportunities",
            "Expertise in one of the most widely used ERP systems",
            "Understanding how companies plan and manage production",
            "Learning how to manage materials, machines, and manpower"
        ],
        whyChooseNxGen: [
            "Resume preparation and profile building",
            "Mock interview sessions",
            "Career guidance and job search support",
            "Access to job opportunities with hiring companies",
            "Expert training, practical learning, and career support",
            "Interactive live classes with trainers"
        ],
        careerOpportunities: [
            "SAP PP Consultant",
            "Production Planner",
            "SAP Functional Analyst",
            "Supply Chain Executive",
            "Manufacturing Analyst",
            "Supply Chain Analyst",
            "SAP Functional Consultant"
        ],
        feesAndDuration: `The SAP PP course fees at NXGEN Tech Academy are designed to be affordable and transparent with flexible payment options.\n\nThe course duration is structured to provide in-depth learning while remaining flexible. Most learners complete the course within 8–10 weeks on standard tracks with regular weekday classes. Weekend batches and fast-track programs (4–6 weeks) are also available.`,
        keyTopics: [
            "Introduction to SAP and ERP Systems",
            "Master Data Management (BOM, Work Centers, Routing)",
            "Material Requirements Planning (MRP)",
            "Capacity Planning",
            "Production Orders and Shop Floor Control"
        ],
        conclusion: `The SAP PP Course at NXGEN Tech Academy provides the knowledge and practical skills required to manage production planning processes using SAP ERP.\n\nWith experienced trainers, practical learning, flexible schedules, and placement support, our program helps students build successful careers in the SAP ecosystem. Enroll today in NXGEN Tech Academy’s SAP PP Training Program and take the first step toward a successful SAP career.`,
        curriculum: [
            {
                module: "1. Introduction to SAP PP and SAP S/4HANA Manufacturing",
                topics: [
                    "Overview of SAP ERP and manufacturing systems",
                    "Introduction to SAP Production Planning (PP) module",
                    "SAP system architecture and landscape",
                    "Overview of SAP S/4HANA manufacturing",
                    "Differences between SAP ECC PP and SAP S/4HANA PP",
                    "SAP Fiori applications for production planning",
                    "Role of SAP PP in manufacturing and supply chain management"
                ]
            },
            {
                module: "2. Master Data in SAP PP",
                topics: [
                    "Material Master configuration for production planning",
                    "Bill of Materials (BOM) creation and configuration",
                    "Routings (Task Lists) configuration and maintenance",
                    "Work Center configuration and usage in production planning",
                    "Production versions in SAP S/4HANA",
                    "Engineering change management overview"
                ]
            },
            {
                module: "3. Master Planning",
                topics: [
                    "Sales and Operations Planning (SOP) overview",
                    "Demand Management strategies",
                    "Planned Independent Requirements (PIR)",
                    "Long-Term Planning (LTP)"
                ]
            },
            {
                module: "4. Sales and Operations Planning (SOP)",
                topics: [
                    "Standard planning procedures",
                    "Planning using product groups",
                    "Planning with materials",
                    "Product group aggregation and disaggregation",
                    "Creation and management of planning versions",
                    "Transfer of planning data to Demand Management"
                ]
            },
            {
                module: "5. Material Requirements Planning (MRP)",
                topics: [
                    "Master Production Scheduling (MPS) procedures",
                    "Consumption-based planning (Reorder point, Forecast, Time-phased)",
                    "MRP run configuration and execution",
                    "MRP evaluation and analysis tools",
                    "MRP Live in SAP S/4HANA"
                ]
            },
            {
                module: "6. Batch Management in SAP PP",
                topics: [
                    "Condition tables and access sequences",
                    "Strategy types for batch determination",
                    "Batch search procedures in SAP PP",
                    "Batch status management",
                    "Characteristics and classification",
                    "Shelf Life Expiration Date (SLED) in batch management",
                    "Manual and automatic batch determination",
                    "Production order creation using batch management"
                ]
            },
            {
                module: "7. Variant Configuration in BOM and Production Planning",
                topics: [
                    "Characteristics and class creation",
                    "Classification settings in material master",
                    "Maintaining dependencies in configuration",
                    "Configurable material profiles"
                ]
            },
            {
                module: "8. Availability Check and Capacity Planning",
                topics: [
                    "Availability check using ATP (Available to Promise)",
                    "Availability check against planning",
                    "Capacity planning concepts",
                    "Capacity planning master data components",
                    "Scheduling parameters",
                    "Available capacity determination",
                    "Capacity evaluation and analysis"
                ]
            },
            {
                module: "9. Production Orders in SAP PP",
                topics: [
                    "Production order creation and scheduling",
                    "Production order components",
                    "Production Resources and Tools (PRT) management",
                    "Order confirmation process",
                    "Order settlement procedures"
                ]
            },
            {
                module: "10. Discrete Manufacturing",
                topics: [
                    "Planned order structure",
                    "Production order types",
                    "Material staging and withdrawal",
                    "Production confirmation process",
                    "Goods movement procedures",
                    "Goods receipt/issue with reference to production order",
                    "Restricting goods receipt until production confirmation",
                    "Order settlement"
                ]
            },
            {
                module: "11. Repetitive Manufacturing",
                topics: [
                    "Repetitive manufacturing master data",
                    "Planning procedures for repetitive manufacturing",
                    "Planning table usage",
                    "Pull list material staging",
                    "Backflushing process",
                    "REM backflushing procedures"
                ]
            },
            {
                module: "12. Reporting and Tools in SAP PP",
                topics: [
                    "Production planning reporting tools",
                    "MRP reporting and analysis",
                    "Mass change functions for master data maintenance",
                    "Production performance reports"
                ]
            },
            {
                module: "13. Integration with Other SAP Modules",
                topics: [
                    "Integration with SAP MM (Materials Management)",
                    "Integration with SAP SD (Sales and Distribution)",
                    "Integration with SAP QM (Quality Management)",
                    "Integration with SAP WM/EWM (Warehouse Management)",
                    "Integration with SAP FI (Financial Accounting)"
                ]
            },
            {
                module: "14. SAP S/4HANA Production Planning Innovations",
                topics: [
                    "MRP Live in SAP S/4HANA",
                    "Embedded analytics for production planning",
                    "Simplified data model in S/4HANA manufacturing",
                    "SAP Fiori apps for production management",
                    "Production planning dashboards",
                    "Real-time manufacturing reporting"
                ]
            },
            {
                module: "15. Real-Time Business Scenarios",
                topics: [
                    "Production planning lifecycle",
                    "End-to-end manufacturing process",
                    "MRP planning and production execution",
                    "Production reporting and monitoring"
                ]
            }
        ]
    },

    "sap-mm-course": {
        id: "sap-mm-course",
        metaTitle: "SAP MM Course with Placement | SAP MM Training – NXGEN",
        metaDescription: "Join SAP MM Course at NXGEN Tech Academy. Learn procurement, inventory management, SAP S/4HANA, and get placement support to start your SAP career.",
        whatIs: `
If you want to start a successful career in the SAP ecosystem, enrolling in an SAP MM Course is one of the best decisions you can make. SAP MM (Materials Management) is a key module in SAP ERP that helps organizations manage materials, inventory, procurement, and vendor management.

Businesses across industries rely on SAP MM to track materials, control inventory, and manage purchasing activities efficiently.

At NXGEN Tech Academy, we offer a comprehensive SAP MM training program designed for students, fresh graduates, and working professionals. The training is delivered in a simple, structured format so that even beginners can easily understand and master the concepts.

What is SAP MM and Why Learn It?
Every organization needs an efficient system to manage materials, procurement, and inventory. Without proper management, businesses may experience stock shortages, operational delays, or financial losses.
The SAP MM module helps companies streamline procurement processes, manage inventory effectively, and maintain strong vendor relationships.
`,
        whyCourse: `
Reasons to Learn SAP MM:
• High demand for SAP MM professionals across industries
• Opportunities in manufacturing, IT, retail, and logistics sectors
• Strong career growth and attractive salary packages
• Global career opportunities with SAP ERP systems

At NXGEN Tech Academy, our SAP MM course is designed for beginners and professionals who want to build a career in SAP.
`,
        keyBenefits: [
            "Learn from Anywhere – Attend classes from the comfort of your home",
            "Flexible Learning Schedule – Weekday, evening, and weekend batches",
            "Practical Learning Approach – Hands-on experience with real-world scenarios",
            "Access to Study Materials – Training materials and recorded sessions provided",
            "Expert Trainers – Learn from professionals with real industry experience",
            "Affordable Course Fees – High-quality training at competitive rates",
            "Strong Placement Assistance – Resume prep, mock interviews, and job search support"
        ],
        whyChooseNxGen: [
            "Expert trainers with real industry experience",
            "Flexible classes with multiple batch options",
            "Practical training with real-time scenarios and system demos",
            "Affordable course fees with flexible payment options",
            "Strong placement assistance and career guidance",
            "Comprehensive curriculum covering SAP ERP and SAP S/4HANA"
        ],
        keyTopics: [
            "Introduction to SAP and the SAP MM module",
            "Material Master and Vendor Master Data",
            "Procurement and Purchasing Process",
            "Inventory Management and Stock Control",
            "Invoice Verification and Payment Processing",
            "Reporting and Analytics in SAP MM"
        ],
        careerOpportunities: [
            "SAP MM Consultant",
            "SAP Procurement Specialist",
            "SAP Inventory Manager",
            "SAP Functional Analyst",
            "Supply Chain Analyst",
            "ERP Functional Consultant"
        ],
        feesAndDuration: `
The course typically takes 8 to 12 weeks to complete depending on the learning schedule.

Training Options:
1. Standard Track: 8–10 weeks (Regular weekday classes)
2. Weekend Batches: Designed for working professionals
3. Fast-Track Program: Intensive training completed within 4–6 weeks

At NXGEN Tech Academy, we offer affordable SAP MM training fees without compromising on quality. Factors affecting fees include recorded sessions, live interactive classes, placement support, and certification assistance. Flexible payment options and installment plans are available.
`,
        conclusion: `
If you are planning to build a career in ERP systems, enrolling in an SAP MM Course is a great starting point. Our goal is not only to teach SAP MM concepts but also to help students start successful careers in the SAP ecosystem.

With the right training and guidance, your journey toward becoming an SAP MM professional can begin today. Enroll in the SAP MM Training Program at NXGEN Tech Academy and take the first step toward a successful SAP career.
`,
        curriculum: [
            {
                module: "Introduction to SAP, SAP MM, and SAP S/4HANA",
                topics: [
                    "Introduction to ERP (Enterprise Resource Planning)",
                    "Overview of SAP ERP and enterprise systems",
                    "Introduction to SAP MM module",
                    "SAP system architecture and system landscape",
                    "Overview of SAP S/4HANA and difference from SAP ECC",
                    "Key features of SAP MM in S/4HANA",
                    "SAP Fiori overview for procurement users"
                ]
            },
            {
                module: "Organizational Structure and Master Data",
                topics: [
                    "Organizational structure in SAP MM",
                    "Plant and storage location configuration",
                    "Purchasing organization and purchasing group",
                    "Material master creation and maintenance",
                    "Vendor master data management",
                    "Purchasing info records",
                    "Source list and quota arrangement"
                ]
            },
            {
                module: "Procurement Process in SAP MM",
                topics: [
                    "Overview of procurement processes in SAP MM",
                    "Purchase requisition creation and management",
                    "Request for quotation (RFQ) process",
                    "Quotation comparison and vendor selection",
                    "Purchase order creation and processing",
                    "Goods receipt process",
                    "Invoice verification procedures",
                    "Document flow and integration with SAP FI and SD"
                ]
            },
            {
                module: "Inventory Management",
                topics: [
                    "Overview of inventory management concept",
                    "Material movement types",
                    "Stock types and stock management",
                    "Batch management and shelf-life expiration",
                    "Transfer postings and stock transfers",
                    "Inventory valuation and reporting"
                ]
            },
            {
                module: "Pricing Procedure and Conditions",
                topics: [
                    "Introduction to pricing procedures in SAP MM",
                    "Condition types and access sequences",
                    "Pricing procedure configuration",
                    "Maintaining condition records",
                    "Calculation schema for procurement pricing"
                ]
            },
            {
                module: "Release Procedure and Approval Workflow",
                topics: [
                    "Release strategies configuration",
                    "Release codes and release groups",
                    "Purchase requisition release procedures",
                    "Purchase order approval workflows",
                    "Notification and monitoring settings"
                ]
            },
            {
                module: "Material Requirements Planning (MRP)",
                topics: [
                    "Overview of Material Requirements Planning",
                    "MRP types and planning parameters",
                    "Running MRP planning cycles",
                    "Exception messages and MRP analysis",
                    "Integration with SAP Production Planning (PP)"
                ]
            },
            {
                module: "Physical Inventory Management",
                topics: [
                    "Physical inventory process in SAP MM",
                    "Creating inventory documents and counting sheets",
                    "Performing inventory counts",
                    "Reconciliation of inventory differences",
                    "Adjusting stock quantities and valuation"
                ]
            },
            {
                module: "Reporting and Analytics in SAP MM",
                topics: [
                    "Standard SAP MM reports",
                    "Ad-hoc reporting capabilities",
                    "Report customization and configuration",
                    "Introduction to SAP Business Intelligence tools"
                ]
            },
            {
                module: "Integration with Other SAP Modules",
                topics: [
                    "Integration with SAP FI (Financial Accounting)",
                    "Integration with SAP CO (Controlling)",
                    "Integration with SAP SD (Sales and Distribution)",
                    "Integration with SAP PP (Production Planning)",
                    "Integration with SAP WM (Warehouse Management)"
                ]
            },
            {
                module: "Batch Management and Serial Number Management",
                topics: [
                    "Introduction to batch management",
                    "Creating and managing batch numbers",
                    "Serial number management",
                    "Impact of batch and serial numbers on valuation"
                ]
            },
            {
                module: "Vendor Evaluation and Vendor Management",
                topics: [
                    "Vendor evaluation process in SAP MM",
                    "Defining vendor evaluation criteria",
                    "Performance measurement and ranking of vendors",
                    "Vendor relationship management strategies"
                ]
            },
            {
                module: "Contract Management",
                topics: [
                    "Overview of contract management in SAP MM",
                    "Creation and maintenance of procurement contracts",
                    "Scheduling agreements",
                    "Contract release procedures",
                    "Contract monitoring and reporting"
                ]
            },
            {
                module: "Logistics Invoice Verification (LIV)",
                topics: [
                    "Overview of logistics invoice verification",
                    "Creation and processing of LIV documents",
                    "Three-way match process (PO → GR → Invoice)",
                    "Handling invoice discrepancies",
                    "Workflow configuration for invoice verification"
                ]
            },
            {
                module: "Integration with Supply Chain Management (SCM)",
                topics: [
                    "Overview of supply chain management processes",
                    "Integration with SAP SCM modules",
                    "Advanced Planning and Optimization (APO)",
                    "Supplier Relationship Management (SRM)"
                ]
            },
            {
                module: "SAP S/4HANA Procurement Innovations",
                topics: [
                    "S/4HANA procurement overview",
                    "Business Partner concept for vendors",
                    "Simplified data model in S/4HANA",
                    "Embedded analytics for procurement",
                    "SAP Fiori apps for purchasing",
                    "Central procurement overview"
                ]
            },
            {
                module: "Advanced Reporting and Analytics",
                topics: [
                    "Advanced SAP reporting tools",
                    "Data visualization techniques",
                    "Dashboard design and analytics",
                    "SAP HANA and in-memory computing concepts"
                ]
            },
            {
                module: "Best Practices and Process Optimization",
                topics: [
                    "Best practices in SAP MM implementation",
                    "Procurement optimization strategies",
                    "Process improvement tools",
                    "Continuous improvement methodologies"
                ]
            },
            {
                module: "Real-Time Business Scenarios",
                topics: [
                    "Procure-to-Pay (P2P) process",
                    "Material procurement lifecycle",
                    "Vendor invoice processing",
                    "Inventory reconciliation",
                    "Procurement reporting and analysis"

                ]
            }
        ]
    },

    "sap-pm": generateDefaultSAPContent("SAP PM", "sap-pm"),
    "sap-qm-course": {
        id: "sap-qm-course",
        metaTitle: "SAP QM Course | SAP QM Training with Placement – NXGEN",
        metaDescription: "Learn SAP QM Course at NXGEN Tech Academy. Get hands-on SAP training, certification guidance, internship, and 100% job support to build a career in SAP Quality Management.",
        whatIs: `
Are you looking to build expertise in SAP Quality Management (SAP QM) and unlock high-paying career opportunities in the SAP ecosystem? The SAP QM Course at NXGEN Tech Academy is designed to help students and professionals gain industry-relevant skills in quality management processes using SAP ERP and SAP S/4HANA.

This comprehensive training program covers inspection planning, quality inspections, quality notifications, quality certificates, and integration with other SAP modules such as SAP MM, SAP PP, and SAP PM.

Through hands-on SAP practice, real-time project exposure, and expert trainer guidance, learners gain the skills required to become successful SAP QM Consultants, Quality Analysts, and SAP Functional Specialists.

Our SAP QM classes are flexible and accessible from anywhere, enabling students to learn at their own pace while preparing for SAP QM certification.

What is SAP QM and Why Should You Learn It?
SAP QM (Quality Management) is a core module in SAP ERP that helps organizations maintain high product and service quality throughout their business operations.
It enables companies to:
• Automate inspection processes
• Manage quality notifications and defect tracking
• Ensure compliance with international standards such as ISO and FDA
• Improve product quality and operational efficiency
`,
        whyCourse: `
Quality management plays a critical role in industries such as manufacturing, pharmaceuticals, automotive, and consumer goods.
SAP QM enables organizations to maintain consistent product quality by integrating quality checks throughout the production and procurement processes.
With knowledge gained from the SAP QM training program, professionals can:
• Identify and prevent quality issues early
• Maintain compliance with industry regulations
• Improve operational efficiency and productivity
• Enhance customer satisfaction and brand reputation

By enrolling in the SAP QM course, learners develop the ability to manage quality processes effectively, reduce defects, and enhance customer satisfaction.
`,
        keyBenefits: [
            "Automate inspection processes and defect tracking",
            "Manage quality notifications and root cause analysis",
            "Ensure compliance with international standards (ISO, FDA)",
            "Improve product quality and operational efficiency",
            "Identify and prevent quality issues early in production",
            "Enhance customer satisfaction and brand reputation",
            "Integrate quality checks across MM, PP, and PM modules"
        ],
        whyChooseNxGen: [
            "Comprehensive Training on Latest SAP S/4HANA Technologies",
            "Experienced SAP-Certified Trainers with Industry Experience",
            "Course Completion Certification from NXGEN Tech Academy",
            "Real-Time Project Implementation and Business Scenarios",
            "Flexible Learning with Weekday and Weekend Batches",
            "Lifetime Access to LMS (Recorded Lectures & Study Materials)",
            "100% Job Support (Resume, Interview Prep, Applications)",
            "Free Access to Live SAP Servers for Hands-on Practice",
            "Internship Opportunities to Gain Functional Experience"
        ],
        keyTopics: [
            "Material Master – Quality Management View",
            "Master Inspection Characteristics (MICs)",
            "Sampling Procedures and Sample Determination",
            "Defect recording and result recording",
            "Usage decision processing",
            "Quality Notifications management",
            "Quality certificates and COA",
            "Integration with SAP MM, PP, and PM",
            "Inspection lot creation and processing",
            "Incoming, In-process, and Final inspections"
        ],
        careerOpportunities: [
            "SAP QM Consultant",
            "Quality Analyst",
            "Quality Assurance Specialist",
            "SAP Functional Consultant",
            "Process Improvement Specialist",
            "Quality Management Expert",
            "SAP Functional Specialist"
        ],
        feesAndDuration: `
The SAP QM training program at NXGEN Tech Academy is designed to take learners from beginner level to advanced expertise. Our training methodology focuses on practical learning, real-time scenarios, and hands-on SAP system experience.

We offer flexible learning schedules with weekday and weekend batches suitable for both students and working professionals. Students benefit from training by SAP-certified instructors, practice on live SAP servers, and one-on-one mentoring support.

The course includes lifetime access to our Learning Management System (LMS), which contains recorded lectures, assignments, and updated study materials. After completion, students receive job support including resume preparation and interview guidance.
`,
        conclusion: `
Quality management plays a vital role in modern businesses, and professionals with SAP QM expertise are highly valued across industries. The SAP QM Course at NXGEN Tech Academy provides practical training, certification guidance, and career support to help learners build successful careers in SAP.

If you want to become a quality management expert and build a global SAP career, enrolling in the SAP QM training program at NXGEN Tech Academy is the right step. Start your SAP journey today and transform your future with NXGEN Tech Academy.
`,
        curriculum: [
            {
                module: "Introduction to SAP QM",
                topics: [
                    "Overview of SAP and ERP concepts",
                    "Introduction to SAP Quality Management (QM)",
                    "Role of QM in manufacturing and service industries",
                    "Integration of SAP QM with MM, PP, SD, and PM modules",
                    "End-user vs SAP QM consultant responsibilities"
                ]
            },
            {
                module: "Organizational Structure and Basic Configuration",
                topics: [
                    "QM organizational structure (Client, Company Code, Plant)",
                    "Assignment of QM to plant",
                    "QM control key and plant parameter configuration",
                    "Activation of inspection types",
                    "Number ranges and basic configuration settings"
                ]
            },
            {
                module: "Master Data in SAP QM",
                topics: [
                    "Material master – QM view configuration",
                    "Creating and maintaining Master Inspection Characteristics (MIC)",
                    "Qualitative MIC and Quantitative MIC",
                    "Catalogs and selected sets configuration",
                    "Inspection method creation",
                    "Sampling procedures and sample determination",
                    "Quality Info Record (QIR)"
                ]
            },
            {
                module: "Inspection Planning",
                topics: [
                    "Inspection plan creation",
                    "Routing and task list integration",
                    "Assigning MICs to inspection plans",
                    "Creating inspection points",
                    "Inspection plan status and version control"
                ]
            },
            {
                module: "Inspection Processing",
                topics: [
                    "Inspection lot creation",
                    "Goods Receipt (GR) inspection",
                    "In-process inspection",
                    "Final inspection",
                    "Source inspection",
                    "Recurring inspection",
                    "Result recording and Defect recording",
                    "Usage decision",
                    "Stock posting after usage decision"
                ]
            },
            {
                module: "Quality Notifications",
                topics: [
                    "Overview of quality notifications",
                    "Notification types and configuration",
                    "Creating quality notifications",
                    "Defect analysis and root cause identification",
                    "Corrective and Preventive Actions (CAPA)",
                    "Notification processing and closure"
                ]
            },
            {
                module: "Certificates and Documentation",
                topics: [
                    "Quality certificate management",
                    "Certificate of Analysis (COA)",
                    "Output determination for certificates",
                    "Certificate print and email configuration"
                ]
            },
            {
                module: "Integration of SAP QM with Other Modules",
                topics: [
                    "QM integration with SAP MM (Procurement)",
                    "QM integration with SAP PP (Production)",
                    "QM integration with SAP SD (Sales)",
                    "Movement types related to QM",
                    "Batch management integration"
                ]
            },
            {
                module: "Reporting and Analytics in SAP QM",
                topics: [
                    "Inspection lot reports",
                    "Quality level reports",
                    "Defect analysis reports",
                    "Vendor evaluation reports",
                    "KPI tracking and performance monitoring in SAP QM"
                ]
            },
            {
                module: "Real-Time Business Scenarios and Case Studies",
                topics: [
                    "End-to-end incoming inspection scenario",
                    "In-process quality control scenario",
                    "Final inspection with usage decision",
                    "Vendor quality management scenario",
                    "Customer complaint handling process"
                ]
            },
            {
                module: "Advanced Topics in SAP QM",
                topics: [
                    "Dynamic Modification Rule (DMR)",
                    "Quality levels management",
                    "Skip lot concept",
                    "Audit management overview",
                    "Introduction to SAP S/4HANA Quality Management"
                ]
            },
            {
                module: "Implementation and Interview Preparation",
                topics: [
                    "SAP QM implementation lifecycle",
                    "Configuration vs master data management",
                    "Testing phases (Unit Testing, Integration Testing, UAT)",
                    "Cutover activities during go-live",
                    "Support and issue resolution",
                    "Frequently asked SAP QM interview questions"
                ]
            }
        ]
    },
    "sap-scm": generateDefaultSAPContent("SAP SCM", "sap-scm"),
    "sap-ewm": generateDefaultSAPContent("SAP EWM", "sap-ewm"),

    "sap-basis": generateDefaultSAPContent("SAP Basis", "sap-basis"),
    "sap-hcm-successfactors": generateDefaultSAPContent("SAP HCM/SuccessFactors", "sap-hcm-successfactors"),

    // BTP Courses
    "sap-btp-appdev": generateDefaultSAPContent("SAP BTP Application Development", "sap-btp-appdev"),
    "sap-btp-automation": generateDefaultSAPContent("SAP Build Process Automation", "sap-btp-automation"),
    "sap-btp-integration": generateDefaultSAPContent("SAP Integration Suite", "sap-btp-integration"),
    "sap-btp-data": generateDefaultSAPContent("SAP BTP Data & Analytics", "sap-btp-data"),
    "sap-btp-ai": generateDefaultSAPContent("SAP Business AI", "sap-btp-ai"),
    "sap-btp-devops": generateDefaultSAPContent("SAP BTP DevOps", "sap-btp-devops"),

    // Additional specialized
    "sap-cds": generateDefaultSAPContent("SAP CDS Views", "sap-cds"),
    "sap-odata": generateDefaultSAPContent("SAP OData Services", "sap-odata"),
    "sap-rap": generateDefaultSAPContent("SAP RAP", "sap-rap"),
    "sap-alv": generateDefaultSAPContent("SAP ALV & Reports", "sap-alv"),
    "sap-debug": generateDefaultSAPContent("SAP Enhancements & Debugging", "sap-debug"),
    "sap-fiori-elements": generateDefaultSAPContent("SAP Fiori Elements", "sap-fiori-elements"),
};

export const getSapCourseContent = (id: string, title: string): SAPCourseContent => {
    if (sapCoursesContent[id]) {
        return sapCoursesContent[id];
    }
    // Fallback for any unknown sap course
    return generateDefaultSAPContent(title, id);
};
