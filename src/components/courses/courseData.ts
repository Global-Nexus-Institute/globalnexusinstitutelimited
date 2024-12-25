interface Course {
  title: string;
  description: string;
  duration: string;
  price: string;
  level: string;
  link: string;
  category: string;
  pdflink: string;
}

export const courses: Course[] = [
  {
    title: 'Professional Data Analytics',
    description: 'Master the basics of Python programming and its powerful data analysis Excel, Python, Mysql, and PowerBI.',
    duration: '8 weeks',
    price: '$100',
    level: 'Intermediate',
    category: 'Data Analysis',
    link: "https://canvas.instructure.com/register",
    pdfLink: "/images/professional.pdf"  // Correct placement of comma
  },
  {
    title: 'Power BI Business Intelligence',
    description: 'Learn to create powerful dashboards and reports using Microsoft Power BI for business insights.',
    duration: '6 weeks',
    price: '$70',
    level: 'Intermediate',
    category: 'Visualization/Business Intelligence',
    link: "https://canvas.instructure.com/register",
    pdfLink: "/assets/Power_BI_Content.pdf"  // Correct placement of comma
  },
  {
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning concepts, algorithms, and practical applications using Python.',
    duration: '6 weeks',
    price: '$80',
    level: 'Intermediate',
    category: 'AI & Machine Learning',
    link: "https://canvas.instructure.com/register",
    pdfLink: "/assets/Machine_Learning_Fundamentals_Content.pdf"  // Correct placement of comma
  },
  {
    title: 'Basics Python Programming',
    description: 'Learn fundamental Python program concepts, and pandas for data analysis.',
    duration: '6 weeks',
    price: '$50',
    level: 'Beginner',
    category: 'Data Science',
    link: "https://canvas.instructure.com/register",
    pdfLink: "/assets/Basics_Python_Programming_Content.pdf"  // Correct placement of comma
  },

  {
    title: 'SQL for Data Analysis',
    description: 'Learn SQL to query, aggregate, and analyze data, enabling effective decision-making and data-driven insights for analysis.',
    duration: '7 weeks',
    price: '$60',
    level: 'Beginner',
    category: 'Data Analysis',
    link: "https://canvas.instructure.com/register",
    pdfLink: "/assets/Data_Visualization_with_Tableau_Content.pdf"  // Correct placement of comma

  },
  {
    title: 'Data Science: Intermediate',
    description: 'Bridge the gap between data science and business strategy with practical applications and case studies.',
    duration: '10 weeks',
    price: '$120',
    level: 'Intermediate',
    category: 'Data Science',
    link: "https://canvas.instructure.com/register",
    pdfLink: "/assets/Data_Science_Intermediate_Content.pdf"  // Correct placement of comma
  },
];