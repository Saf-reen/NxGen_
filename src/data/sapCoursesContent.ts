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
        "Expert-Led Online Classes",
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

    "sap-sd-course-online-training": {
        id: "sap-sd-course-online-training",
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
    "sap-mm": generateDefaultSAPContent("SAP MM", "sap-mm"),
    "sap-fico": generateDefaultSAPContent("SAP FICO", "sap-fico"),
    "sap-pp": generateDefaultSAPContent("SAP PP", "sap-pp"),

    "sap-pm": generateDefaultSAPContent("SAP PM", "sap-pm"),
    "sap-qm": generateDefaultSAPContent("SAP QM", "sap-qm"),
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
