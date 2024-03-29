import ONEY from "../assets/one-year.png"
import TWOY from "../assets/two-year.png"
import FOUND from "../assets/foundation.png"
import AR1 from "../assets/aResults-1.png"
import AR2 from "../assets/aResults-2.png"

/* -------------------------------------------------------------------------- */
/*                                   KEEPERS                                  */
/* -------------------------------------------------------------------------- */

const FORMSPREEURL = "https://formspree.io/xpzowdjy"

const SitePages = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About Us",
    href: "about",
  },
  {
    title: "Our Courses",
    href: "cources",
  },
  {
    title: "Results",
    href: "achievements",
  },
  // {
  //   title: "Inspiring Stories",
  //   href: "story",
  // },
  {
    title: "Students Testimonials",
    href: "testimonials",
  },
  {
    title: "Contact Us",
    href: "contact",
  },
  {
    title: "FAQ",
    href: "faq",
  },
];

const HomeCards = [
  {
    title: "Our topper in IIT-JEE (Advanced) Ankit Akash Jha AIR 110 (Gen)"
  },
  {
    title: "More than 100 IIT admissions and More than 150 NIT admissions."
  },
  {
    title: "100 % NEET qualification since 2016"
  },
]

const HomeCarouselImage = [
  {
    src: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/5554267/pexels-photo-5554267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];
/* -------------------------------------------------------------------------- */
/*                              CAME FROM SERVER                              */
/* -------------------------------------------------------------------------- */

const CriteriaData = [
  {
    title: "Who will be teaching you once you join the academy?",
    desc: "At Persistance we provide you with the list of the faculties who will be taking your lectures. Sometimes such a list is not even shown in the brochure & on the website!"
  },
  {
    title: "Expertise, experience and qualification of Faculty Team.",
    desc: "The most important criteria to judge the credibility of any educational institute is the competency of the faculty team. Branding and advertising should not affect your decision. At persistence you are taught by IIT Bombay Faculty."
  },
  {
    title: "Percent result of the institute.",
    desc: "Another extremely important factor, which is usually ignored, is the percentage of IITians produced which increases the morale of the student. At Persistence the core team has been consistent since the very beginning.At national level there happens 1 admission out of 20 but at PERSISTENCE we achived the remarkable feat of 1 admission out of 2 due to the combined efforts of our students."
  },
  {
    title: "Number of IIT rankers taught by faculty.",
    desc: "There may be institutes that have a long list of successful candidates in the past which was due to a set of faculty, who may not be working with them any more to teach you. It is basically the faculty team which is responsible for the results achieved by any institute and not the institute’s brand name.At PERSISTENCE ,same faculty has been teaching ever since its inception."
  },
  {
    title: "Commuting Time & institute infrastructure.",
    desc: "The self study slots which are unique to PERSISTENCE helps you to save enormous time which you would have spent on travelling."
  },
]


const CourceData = [
  {
    title: "One Year Program",
    content: ["One year course for Students who have recently passed class XII and are ambitious to clear IIT-JEE / MEDICAL after one year of passing class XII should enroll for this program. This is an intensive ten months classroom contact program in which the students will be trained rigorously for IIT-JEE / MEDICAL and other engineering competitive exams. The course curriculum will be in accordance with IIT-JEE / MEDICAL syllabus only. Students shall be called for 7 days of week.",
      "This course is specially designed for those who had made a wrong choice of coaching classes and / or had not been able to make it to the IIT or NIT with a good rank and want to attempt again. At this juncture, we offer you our focused guidance to boost your confidence, shape-up your ideas and strengthen your foundation to get into the top gear of JEE preparation. It is a do or die situation for such students and we, on our part, make every possible effort to help such students achieve their dreams by providing them extra individual attention and more strict discipline and testing norms."],
    image: ONEY
  },
  {
    title: "Two Year Program ",
    content: [
      "Students who have recently passed class X and are ambitious to clear IIT-JEE / MEDICAL with class XII should enroll for this program. This is an intensive twenty two months classroom contact program in which the students will be trained rigorously for IIT-JEE / MEDICAL and other engineering competitive exams. The course curriculum will be in pace with school studies so that the students are comfortable in school as well and perform well in their school exams also.",
      "This course follows a teaching methodology where the topics taken in this course are Synchronized with the respective school & college, so it gives students enough time to self study giving an edge at various competitive examination . In this course all the chapters are also covered at board level helping them not only to perform in competitive examinations but also board exams."
    ],
    image: TWOY
  },
  {
    title: "Foundation Program",
    content: [
      "Bright students who aspire to get into elite courses at IIT or AIIMS must attain a very high rank against some very tough competition which is getting tougher year after year. For example, to get admission into IIT Bombay (Computer Science) or AIIMS Delhi (Medical), one needs to have a rank in the top 60 and 36 respectively.For students having such aspirations, it's crucial and prudent to start early. Also, if a student is focused along with a clarity regarding his/her career, it's helpful and wise not to waste time till class 10th. The sooner you start, the better it is.",
      "Bright students who aspire to get into elite courses at IIT or AIIMS must attain a very high rank against some very tough competition which is getting tougher year after year. For example, to get admission into IIT Bombay (Computer Science) or AIIMS Delhi (Medical), one needs to have a rank in the top 60 and 36 respectively.For students having such aspirations, it's crucial and prudent to start early. Also, if a student is focused along with a clarity regarding his/her career, it's helpful and wise not to waste time till class 10th. The sooner you start, the better it is."
    ],
    image: FOUND
  },
]

const ProgramData = [
  {
    title: "One Year Program",
    desc: "One year course for Students who have recently passed class XII and are ambitious to clear IIT-JEE / MEDICAL after one year of passing class XII should enroll for this program."
  },
  {
    title: "Two Year Program",
    desc: "Students who have recently passed class X and are ambitious to clear IIT-JEE / MEDICAL with class XII should enroll for this program."
  },
  {
    title: "Foundation Program",
    desc: "In these sessions we prepare for NTSE and olympiads and cover the very basic fundamentals of maths and science of 11th standard primarily to bridge up the gap between differences in levels of school studies till class 10th and competitive exam requirements."
  },
]

const OurResultsData = [
  {
    title: "Out of 50 students 41 qualified JEE (Mains)"
  },
  {
    title: "Three students got more than 99%"
  },
  {
    title: "17 students out of 41 qualified got more than 95%"
  },
  {
    title: "Our 12 students cleared IIT-JEE (Advanced) 2019"
  },
  {
    title: "12 students appeared for NEET all qualified"
  },
  {
    title: "41 students qualified JEE (Mains) 2019 out of 50"
  },
  {
    title: "03 students qualified AIIMS in 2019"
  },
  {
    title: "Our NEET topper Shrishti Prasad scored 634 marks studying in Ram Manohar Lohia Medical College"
  },
]

const AchievementsData = [
  {
    "title": "Best Rank Ankit Jhaair - 110",
  },
  {
    "title": "Shreeya Singh Girls Topper Of Jharkhand",
  },
  {
    "title": "Prabhat Kumar Qualified IIT,AIIMS NEET Finally Studying In IIT Bombay",
  },
  {
    "title": "100% Qualification In NEET",
  },
  {
    "title": "Mohit Kumar Joined AIIMS Patana",
  },
  {
    "title": "Mentored More Than 1000 IITIANS",
  },
]

const AResultsData = [
  {
    title: "Top Performers of PERSISTENCE",
    subtitle: "The Best Percentage Result In Jharkhand Since 2009",
    data: [
      {
        image: AR1,
        name: "Shreeya",
        title: "IIT Bombay",
        subtitle: ""
      },
      {
        image: AR2,
        name: "Nitin Kumar",
        title: "IIT Kanpur",
        subtitle: "Mob: 735221076"
      },
      {
        image: AR1,
        name: "Akhil Amod",
        title: "IIT Kanpur",
        subtitle: "Mob: 8454952208"
      },
      {
        image: AR1,
        name: "Ankit Akash",
        title: "IIT Delhi",
        subtitle: "Mob: 9386588908"
      },
      {
        image: AR2,
        name: "Srishti Prasad",
        title: "Dr. RMLIMS Lucknow AIIMS, NEET & JEE MAINS Qlf.",
        subtitle: ""
      },
      {
        image: AR1,
        name: "Nitish Kumar",
        title: "IIT Kharangpur",
        subtitle: "Mob: 6201438013"
      },
      {
        image: AR1,
        name: "Devesh",
        title: "IIT Bombay",
        subtitle: "Mob: 8454953645"
      },
      {
        image: AR1,
        name: "Ayush Sahu",
        title: "IIT Bombay",
        subtitle: "Mob: 9102766677"
      }
    ]
  },
  {
    title: "11 Students Qualified out of 41 in JEE Advanced - 2019",
    subtitle: "",
    data: [
      {
        image: AR1,
        name: "Shreeya",
        title: "IIT Bombay",
        subtitle: ""
      },
      {
        image: AR2,
        name: "Nitin Kumar",
        title: "IIT Kanpur",
        subtitle: "Mob: 735221076"
      },
      {
        image: AR1,
        name: "Akhil Amod",
        title: "IIT Kanpur",
        subtitle: "Mob: 8454952208"
      },
      {
        image: AR1,
        name: "Ankit Akash",
        title: "IIT Delhi",
        subtitle: "Mob: 9386588908"
      },
      {
        image: AR2,
        name: "Srishti Prasad",
        title: "Dr. RMLIMS Lucknow AIIMS, NEET & JEE MAINS Qlf.",
        subtitle: ""
      },
      {
        image: AR1,
        name: "Nitish Kumar",
        title: "IIT Kharangpur",
        subtitle: "Mob: 6201438013"
      },
      {
        image: AR1,
        name: "Devesh",
        title: "IIT Bombay",
        subtitle: "Mob: 8454953645"
      },
      // {
      //   image: AR1,
      //   name: "Ayush Sahu",
      //   title: "IIT Bombay",
      //   subtitle: "Mob: 9102766677"
      // }
    ]
  },
  {
    title: "16 Students out of 50 got more than 95% in JEE Mains - 2019",
    subtitle: "",
    data: [
      {
        image: AR1,
        name: "Shreeya",
        title: "IIT Bombay",
        subtitle: ""
      },
      {
        image: AR2,
        name: "Nitin Kumar",
        title: "IIT Kanpur",
        subtitle: "Mob: 735221076"
      },
      {
        image: AR1,
        name: "Akhil Amod",
        title: "IIT Kanpur",
        subtitle: "Mob: 8454952208"
      },
      {
        image: AR1,
        name: "Ankit Akash",
        title: "IIT Delhi",
        subtitle: "Mob: 9386588908"
      },
      {
        image: AR2,
        name: "Srishti Prasad",
        title: "Dr. RMLIMS Lucknow AIIMS, NEET & JEE MAINS Qlf.",
        subtitle: ""
      },
      {
        image: AR1,
        name: "Nitish Kumar",
        title: "IIT Kharangpur",
        subtitle: "Mob: 6201438013"
      },
      {
        image: AR1,
        name: "Devesh",
        title: "IIT Bombay",
        subtitle: "Mob: 8454953645"
      },
      {
        image: AR1,
        name: "Ayush Sahu",
        title: "IIT Bombay",
        subtitle: "Mob: 9102766677"
      }
    ]
  }
]

const TestimonialData = [
  {
    image: AR1,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR1,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR2,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR1,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR2,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR1,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR2,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR2,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR1,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR2,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
  {
    image: AR1,
    name: "Pranjal Bharadwaj",
    subtitle: "IIT Bombay",
    content: "His tips and tricks always amazed me and often simplified the topics nightmare to others. He is exceptional at providing the necessary guidance."
  },
]

const SocialLinks = {
  fb: "https://www.facebook.com/persistenceranchi",
  yt: "https://www.youtube.com/channel/UCOEex53MPQT1vgkzEVbQs0A/featured",
  map: "https://goo.gl/maps/xjxFm2FDTpq3pnzV7",
  tel: "+917488408051",
  address: "Persistence Education Pvt Ltd.,\nNear Governor's House, \nKalibabu street, Ranchi, \nJharkhand - 834001,India",
  tel2: "+918235071441",
  mail: "persistenceranchi@gmail.com"
};

const FAQData = [
  {
    question: "Who are the teachers?",
    ans: "We are committed to provide quality education as there is no alternative to the best. We have IIT Bombay alumnus and qualified faculty.Expert faculties from different parts of the country also visit the institute regularly. Under the guidance of IIT alumnus all faculties are groomed in teaching students excellently."
  },
  {
    question: "Can I attend trial classes?",
    ans: "Yes. Of course. PERSISTENCE INSTITUTE believes in providing quality education and imparting knowledge to the satisfaction of students. So, you can attend the classes to check if we teach qualitatively or not."
  },
  {
    question: "What if students have doubts after the lectures?",
    ans: "Our faculty always waits after the lecture to solve the doubts. Also, as part of our Pedagogy, we have built-in-Doubt Solving sessions after the completion of every topic."
  },
  {
    question: "Will preparation for IIT JEE also help for other engineering entrance like the JEE main, BIT-SAT?",
    ans: "As is well known, the IIT JEE is one of the most difficult entrance examinations held in the country. The syllabus of JEE Main is similar to that of IIT JEE. Also, the syllabus of State enterance is exactly identical to that of the Std. XII Board Exam. As mentioned earlier, the IIT JEE also covers the syllabus of Std. XII. Therefore, our 2 Year Program IIT JEE will not only help our students to tackle the IIT JEE successfully, but will also help them to prepare better and more effectively for other All India Level Engineering Entrance Exams like the JEE Main at the same time excelling in Board Exams."
  },
  {
    question: "What type of study materials will be given to students?",
    ans: "Like any other coaching institute we do not charge hefty amount for package which contains the same set of questions, rather we solicit each student seperately analysing their strength and weakness and prescribe questions according to that. Custom care is provided to each students which produces outstanding results for our studnents."
  },
  {
    question: "Will there be any test series for students? How the performance will be judged?",
    ans: "There are weekly Test series, for engineering entrance examination and for Pre Medical examinations, developed by the group of IITians and experienced medical faculties. These test series offer carefully molded and structured tests covering the entire syllabus of the examinations. These tests help students analyze their understanding, structure their approach and enhance their test taking capability to succeed in the final examination. A detailed analysis of the performance of student based on different parameters is carried out to bring out students ‘weak as well as strong point. This in depth analysis which includes Topic Wise Analysis, Difficulty Level Analysis, Comparison with Toppers, and Time Based Analysis among other analyses helps our experts to provide proper guidance to the student for further improvement. This method helps in the growth of the student by focusing more on the concerned area."
  },
]

export {
  SitePages,
  TestimonialData,
  AResultsData,
  ProgramData,
  AchievementsData,
  CriteriaData,
  OurResultsData,
  CourceData,
  HomeCards,
  HomeCarouselImage,
  SocialLinks,
  FAQData,
  FORMSPREEURL
};

