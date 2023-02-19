import ONEY from "../assets/one-year.png"
import TWOY from "../assets/two-year.png"
import FOUND from "../assets/foundation.png"

/* -------------------------------------------------------------------------- */
/*                                   KEEPERS                                  */
/* -------------------------------------------------------------------------- */

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
    title: "Our Cources",
    href: "cources",
  },
  {
    title: "Achievements & Results",
    href: "achievements",
  },
  {
    title: "Students Testimonials",
    href: "testimonials",
  },
];


const HomeCards = [
  {
    txt: "Our topper in IIT-JEE (Advanced) Ankit Akash Jha AIR 110 (Gen)"
  },
  {
    txt: "More than 100 IIT admissions and More than 150 NIT admissions."
  },
  {
    txt: "100 % NEET qualification since 2016"
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
    content: "One year course for Students who have recently passed class XII and are ambitious to clear IIT-JEE / MEDICAL after one year of passing class XII should enroll for this program."
  },
  {
    title: "Two Year Program",
    content: "Students who have recently passed class X and are ambitious to clear IIT-JEE / MEDICAL with class XII should enroll for this program."
  },
  {
    title: "Foundation Program",
    content: "In these sessions we prepare for NTSE and olympiads and cover the very basic fundamentals of maths and science of 11th standard primarily to bridge up the gap between differences in levels of school studies till class 10th and competitive exam requirements."
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

const SocialLinks = {
  fb: "https://www.facebook.com/persistenceranchi",
  yt: "https://www.youtube.com/channel/UCOEex53MPQT1vgkzEVbQs0A/featured",
  map: "https://goo.gl/maps/xjxFm2FDTpq3pnzV7",
  tel: "+917488408051",
};

export { SitePages, ProgramData, OurResultsData, CourceData, HomeCards, HomeCarouselImage, SocialLinks };