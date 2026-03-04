export interface SAPCourseContent {
    id: string;
    whatIs: string;
    whyCourse: string;
    keyBenefits: string[];
    whyChooseNxGen: string[];
    careerOpportunities: string[];
    feesAndDuration: string;
    conclusion: string;
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

    "sap-sd": generateDefaultSAPContent("SAP SD", "sap-sd"),
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
