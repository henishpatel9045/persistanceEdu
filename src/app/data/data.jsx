import I1 from "../assets/i1.jpg";
import I2 from "../assets/i2.jpg";
import I3 from "../assets/i3.jpg";

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


const SocialLinks = {
  fb: "https://facebook.com",
  yt: "https://youtube.com",
  map: "https://google.com",
};

export { SitePages, HomeCards, HomeCarouselImage, SocialLinks };
