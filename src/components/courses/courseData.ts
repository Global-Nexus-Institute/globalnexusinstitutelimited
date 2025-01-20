// interface Course {
//   title: string;
//   description: string;
//   duration: string;
//   price: string;
//   level: string;
//   link: string;
//   category: string;
//   pdfLink: string; // PDF download link
// }

// export const courses: Course[] = [
//   {
//     title: 'Professional Data Analytics',
//     description: 'Master the basics of Python programming and its powerful data analysis Excel, Python, Mysql, and PowerBI.',
//     duration: '18 weeks',
//     price: '$250',
//     level: 'Intermediate',
//     category: 'Data Analysis',
//     link: "https://canvas.instructure.com/register",
//     pdfLink: "/images/professional.pdf"
//   },
//   {
//     title: 'Power BI Business Intelligence',
//     description: 'Learn to create powerful dashboards and reports using Microsoft Power BI for business insights.',
//     duration: '6 weeks',
//     price: '$70',
//     level: 'Intermediate',
//     category: 'Visualization/Business Intelligence',
//     link: "https://canvas.instructure.com/register",
//     pdfLink: "/assets/Power_BI_Content.pdf"
//   },
//   {
//     title: 'Machine Learning Fundamentals',
//     description: 'Introduction to machine learning concepts, algorithms, and practical applications using Python.',
//     duration: '6 weeks',
//     price: '$80',
//     level: 'Intermediate',
//     category: 'AI & Machine Learning',
//     link: "https://canvas.instructure.com/register",
//     pdfLink: "/assets/Machine_Learning_Fundamentals_Content.pdf"
//   },
//   {
//     title: 'Basics Python Programming',
//     description: 'Learn fundamental Python program concepts, and pandas for data analysis.',
//     duration: '6 weeks',
//     price: '$50',
//     level: 'Beginner',
//     category: 'Data Science',
//     link: "https://canvas.instructure.com/register",
//     pdfLink: "/assets/Basics_Python_Programming_Content.pdf"
//   },
//   {
//     title: 'SQL for Data Analysis',
//     description: 'Learn SQL to query, aggregate, and analyze data, enabling effective decision-making and data-driven insights for analysis.',
//     duration: '7 weeks',
//     price: '$60',
//     level: 'Beginner',
//     category: 'Data Analysis',
//     link: "https://canvas.instructure.com/register",
//     pdfLink: "/assets/SQL_for_Data_Analysis_Content.pdf"
//   },
//   {
//     title: 'Data Science: Intermediate',
//     description: 'Bridge the gap between data science and business strategy with practical applications and case studies.',
//     duration: '10 weeks',
//     price: '$120',
//     level: 'Intermediate',
//     category: 'Data Science',
//     link: "https://canvas.instructure.com/register",
//     pdfLink: "/assets/Data_Science_Intermediate_Content.pdf"
//   },
// ];
import { Download } from "lucide-react";
import React from "react";

// Define the structure of a course using a TypeScript interface
interface Course {
  title: string;       // The title of the course
  description: string; // A brief description of the course
  duration: string;    // The duration of the course
  price: string;       // The price of the course
  level: string;       // The skill level of the course (e.g., Beginner, Intermediate)
  link: string;        // The registration link for the course
  paymentLink: string; // The payment link for the course
  category: string;    // The category to which the course belongs
  pdfLink: string;     // A link to download the course PDF content
}

// Array of courses containing course details
export const courses: Course[] = [
  {
    title: "Professional Data Analytics",
    description:
      "Master the Advanced of Python programming and its powerful data analysis tools, Excel, VScode, MySQL, and PowerBI.",
    duration: "6 Months",
    price: "$400",
    level: "Intermediate",
    category: "Data Analysis",
    link: "https://canvas.instructure.com/register",
    paymentLink: "https://store.pesapal.com/dataanalyticsprogram",
    pdfLink: "/images/Professional_Data_Analytics.pdf",
  },
  {
    title: "Certificate in Business Analytics",
    description:
      "Learn to create powerful dashboards and reports using SQL, Python, and Power BI for business insights",
    duration: "6 Months",
    price: "$400",
    level: "Intermediate",
    category: "Visualization/Business Intelligence",
    link: "https://canvas.instructure.com/register",
    paymentLink: "https://store.pesapal.com/businessanalyticsprogram",
    pdfLink: "/assets/Certificate_in_Business_Analytics.pdf",
  },
  {
    title: "Certificate in Data Science",
    description:
      "Bridge the gap between data science and business strategy with practical applications and case studies.",
    duration: "7 Months",
    price: "$500",
    level: "Intermediate",
    category: "Data Science",
    link: "https://canvas.instructure.com/register",
    paymentLink: "https://store.pesapal.com/datascienceprogram",
    pdfLink: "/assets/Certificate_in_Data_Science.pdf",
  },
  {
    title: "Machine Learning ",
    description:
      "Introduction to machine learning concepts, algorithms, and practical applications using Python.",
    duration: "2 Months",
    price: "$150",
    level: "Intermediate",
    category: "AI & Machine Learning",
    link: "https://canvas.instructure.com/register",
    paymentLink: "https://store.pesapal.com/machinelearningprogram",
    pdfLink: "/assets/Machine_Learning_Fundamentals.pdf",
  },
  {
    title: "Python Data Analytics",
    description:
      "Learn the fundamental concepts of Python programming, including essential syntax, data types, and basics data analysis.",
    duration: "1.5 Months",
    price: "$50",
    level: "Beginner",
    category: "Data Science",
    link: "https://canvas.instructure.com/register",
    paymentLink: "https://store.pesapal.com/pythondataanalyticsprogram",
    pdfLink: "/assets/Python_Data_Analytics.pdf",
  },
  {
    title: "SQL for Data Analysis",
    description:
      "Learn SQL to query, aggregate, and analyze data, enabling effective decision-making and data-driven insights for analysis.",
    duration: "1.5 Months",
    price: "$100",
    level: "Intermediate",
    category: "Data Analysis",
    link: "https://canvas.instructure.com/register",
    paymentLink: "https://store.pesapal.com/sqlfordataanalysisprogram",
    pdfLink: "/assets/SQL_for_Data_Analysis.pdf",
  }
];
