export interface SuccessStory {
  name: string;
  role: string;
  story: string;
  image: string;
  rating: number;
}

export const successStories: SuccessStory[] = [
  {
    name: 'Didier NGAMIJE',
    role: 'Data Analyst at Ganza Africa',
    story: 'The Data Science course completely transformed my career. Within 3 months of graduation, I landed my first job at Ganza Africa.',
    image: '/images/didier.jpeg',
    rating: 5,
  },
  {
    name: 'Samuelson MUKIZA',
    role: 'Student at University of Rwanda',
    story: 'I am excited to have completed the Python for Data Science course at GNI, gaining invaluable skills. I highly recommend this course to anyone passionate about data science',
    image: '/images/samuelson.jpg',
    rating: 5,
  },
  {
    name: 'Samuel KIPKOGEI',
    role: 'Data Analyst Intern',
    story: 'Thanks to the Data Analytics program, I transitioned from statistics to Data analyst role. The curriculum was comprehensive and up-to-date.',
    image: '/images/samuel.png',
    rating: 5,
  },
];