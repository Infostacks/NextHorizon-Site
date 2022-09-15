import { FaCreditCard, FaBook, FaBriefcase, FaDatabase } from "react-icons/fa";
import { BsFileEarmarkBreak, BsCodeSquare } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { AiOutlineMobile } from "react-icons/ai";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import { SiDatacamp } from "react-icons/si";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { MdOutlineManageSearch } from "react-icons/md";
import { SiPlanet } from "react-icons/si";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { SiVlcmediaplayer } from "react-icons/si";
import { SiWikimediacommons } from "react-icons/si";

import { IoLogoNodejs } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { TbBrandReactNative } from "react-icons/tb";
import { SiSwift } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoBusinessOutline } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";

import { AiFillGithub } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

import { BsGearFill } from "react-icons/bs";
import { BsJournalCode } from "react-icons/bs";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

import { IoCalendarOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoCafeOutline } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";

// images import
import MobileDev from "../images/services/mobapp.png";
import WebDev from "../images/services/webapp.png";
import DevOps from "../images/services/devops-2-png.png";
import UIUX from "../images/services/uiux.png";
import QAServices from "../images/services/pngwing.com.png";
import Staff from "../images/services/img-staff.png";
import Startup from "../images/services/undraw_startup_life_re_8ow9.png";

import Alibaba from "../images/FlutterProjects/alibaba.png";
import ebay from "../images/FlutterProjects/ebay.png";
import Google from "../images/FlutterProjects/google.png";
import Grab from "../images/FlutterProjects/grab.png";
import Groupon from "../images/FlutterProjects/groupon.png";
import Square from "../images/FlutterProjects/square.png";

const ourRewards = [
  {
    img: "https://www.cleveroad.com/static/21c59d2202c772534ff7ba208c9679ae/af320/award1-top-1000-companies-global.webp",
    title: "Clutch",
    desc: "Top 1000 Service Providers, Global",
  },
  {
    img: "https://www.cleveroad.com/static/168bea2d35b112d24dbbf9810adfe2f4/af320/award4-top-b2b-companies-ukraine.webp",
    title: "Clutch",
    desc: "Top Development & IT Companies, Ukraine",
  },
  {
    img: "https://www.cleveroad.com/static/45a53d59e95684c0028ac02e630bec91/af320/award3-top-software-developers-global.webp",
    title: "Clutch",
    desc: "Top Software Development Companies",
  },
  {
    img: "https://www.cleveroad.com/static/05bf9fb2260b587edbd515f672cee2b8/af320/award1-top-1000-companies-global.webp",
    title: "Clutch",
    desc: "Top 1000 Companies, Global",
  },
  {
    img: "https://www.cleveroad.com/static/3d19cc8714e8cba43a527bed6d26d722/af320/img-goodfirms%402x.webp",
    title: "Goodfirm",
    desc: "Top Software Development Company",
  },
  {
    img: "https://www.cleveroad.com/static/09fc59dbcd85cc48a991a2cbdc8d7978/af320/img-wadline%402x.webp",
    title: "Wadlin",
    desc: "Top Web Developers, Global",
  },
];

const caseStudies = [
  {
    img: "https://www.cleveroad.com/images/portfolio/fbbefabd1663de666e733337513d20d0c23c4e9a4d2f7f076bbe74d1852f2bed.png",
    title: "Micro-investment platform",
    status: "Under NDA",
    review:
      "https://www.cleveroad.com/images/portfolio/f68522be9bd2cdad08bbd52c363bdf34387db3dd45c63d4243426d6d2b9b308c.png",
    desc: "A turnkey solution for managing micro-investments and savings for the Middle East market",
    country: "Saudi Arabia",
    flag: "https://www.cleveroad.com/assets/icons/flags/sa.svg",
    coreTech: "Flutter, .NET, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/bddb5a59070466585633a74c3ad1f97ee00429ca5dd7d6698c944d3638c2a8a2.png",
    title: "TMS for a logistics company",
    status: "Under NDA",
    review:
      "https://www.cleveroad.com/images/portfolio/f68522be9bd2cdad08bbd52c363bdf34387db3dd45c63d4243426d6d2b9b308c.png",
    desc: "Transportation management system with automatic route planning module.",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Node JS, Kotlin, Swift",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/5ee0a385ce3f8d3997bc3ef3623b7df67d3f84fe091fa3a9f4bc48977c7dda57.png",
    title: "Video-on-demand platform",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/f68522be9bd2cdad08bbd52c363bdf34387db3dd45c63d4243426d6d2b9b308c.png",
    desc: "A large online video streaming service offering thousands of movies and TV series.",
    country: "Denmark",
    flag: "https://www.cleveroad.com/assets/icons/flags/dk.svg",
    coreTech: "Node JS, Kotlin, Swift",
  },
  {
    img: "https://demo.themovation.com/stratus/wp-content/uploads/2020/12/Payments-3.jpg",
    title: "Easily validate customer orders and information",
    status: "",
    review: "",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum velit libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Node JS, Kotlin, Swift",
  },
  {
    img: "https://demo.themovation.com/stratus/wp-content/uploads/2020/12/Payments-0.jpg",
    title: "Smart, powerful APIs",
    status: "Under NDA",
    review: "",
    desc: "A large online video streaming service offering thousands of movies and TV series.",
    country: "Saudi Arabia",
    flag: "https://www.cleveroad.com/assets/icons/flags/sa.svg",
    coreTech: "Node JS, Kotlin, Swift",
  },
];

const industries = [
  {
    icon: <TbBuildingSkyscraper />,
    title: "Fintech",
    desc: `We are responsible to provide the set of evolving ideas, technologies, business practices, strategies, and services that enable consumers to interact with financial service providers in new ways.`,
  },
  {
    icon: <SiDatacamp />,
    title: "Data Science",
    desc: `We focus on working with complex, unstructured, user-generated data sets, a
    comprehensive, multidisciplinary curriculum drawn from the social sciences, 
    computer science, statistics, management, and coherent integration of the 
    full life cycle of data from identifying the right questions to retrieving, 
    cleaning, and modeling the data and communicating results.`,
  },
  {
    icon: <GiArtificialIntelligence />,
    title: "Artificial Intelligence",
    desc: `We provide a platform for every developer and data scientist with the ability 
    to build, train, and deploy machine learning models quickly.`,
  },
  {
    icon: <AiOutlineCloudServer />,
    title: "Cloud Computing",
    desc: `It’s proved to be an effect in order to store data in bulk quantity & make the 
    desired data readily available at the time of requirement.`,
  },
  {
    icon: <MdOutlineInventory2 />,
    title: "Logistics and Inventory",
    desc: `We Optimize the supplier network along with controlling costs and forecasting
    demand more in order to gain a fuller view of supply chains and help to 
    manage inventory, supplier relationships, and risk more effectively.`,
  },
  {
    icon: <TbBusinessplan />,
    title: "Customized Business Solutions",
    desc: `We always provide an opportunity to grow, flourish & complete assigned 
    tasks more precisely within budget, and ultimately opening a window for 
    financial growth.`,
  },
  {
    icon: <MdOutlineManageSearch />,
    title: "Booking Search Engine",
    desc: `As booking search engines continue developing, they are expected to focus 
    more on delivering precisely what the customer wants on any device they 
    choose.`,
  },
  {
    icon: <SiPlanet />,
    title: "Enterprise resource Planning",
    desc: `We facilitate coherent communication between different departments and 
    organizational functions.`,
  },
  {
    icon: <MdOutlineLocalGroceryStore />,
    title: "eCommerce",
    desc: `We cover all technology-related needs of an e-commerce business by assessing 
    digital experience and planning a website redesign strategy, reviewing the code, and 
    analyzing its impact on the website operation, revising and updating security patches.`,
  },
  {
    icon: <SiVlcmediaplayer />,
    title: "Media",
    desc: `We provide media and entertainment software development services that help business
    to achieve better audience engagement and higher efficiency in operations and find new
    revenue streams.`,
  },
  {
    icon: <SiWikimediacommons />,
    title: "Entertainment",
    desc: `Our company’s expertise in entertainment app development allows 
    us to create solutions with fast and smooth audio and video 
    streaming. We provide software services for sports and game 
    streaming, TV broadcast, and other entertainment industries.`,
  },
];

const faqs = [
  {
    question: "What is your pricing structure?",
    answer:
      "Mauris purus tortor, sodales at pulvinar id, faucibus at lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Mauris pulvinar risus lobortis.",
  },
  {
    question: "Do you have an education discount?",
    answer:
      "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Do you offer enterprise pricing?",
    answer:
      "Dolor sit amet, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nulla augue massa, posuere in consequat at, blandit sit amet dui.",
  },
  {
    question: "Do you charge fees for refunds or chargebacks?",
    answer:
      "Sit amet, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nulla augue massa, posuere in consequat at.",
  },
  {
    question: "What 3rd party apps to you integrate with?",
    answer:
      "Nec ullam corper mattis, pulvinar dapibus leo. consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nulla augue massa, posuere in consequat at, blandit sit amet dui.",
  },
  {
    question: "How do I know my information is secure?",
    answer:
      "Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nulla augue massa, posuere in consequat at, blandit sit amet dui.",
  },
  {
    question: "What support is included?",
    answer:
      "Lorem ipsum dolor sit amet, nulla augue massa, posuere in consequat at, blandit sit amet dui. Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const softwareDevelopmentFlow = [
  {
    question: "First contact",
    title: "First contact",
    desc: "After you leave a request on our website, it goes straight to our manager. After processing it, the manager contacts you within 24 hours to schedule a meeting for a more detailed conversation about the project. You describe your project requirements and business goals. After that, our specialist can provide you with rough estimate.",
    staff: ["Business development manager"],
  },
  {
    question: "Discovery phase",
    title: "Discovery phase",
    desc: "The main goal of our discovery phase is to collect your requirements—platforms you want to cover, features to include, third-party services to integrate (like Stripe or Google Maps), and more. With a Solution Architect, we design architecture from the ground up to make sure it goes along with your business goals from the early stages.",
    staff: [
      "Sales Manager",
      "Business Analyst",
      "Project Manager",
      "Solution Architect",
      "QA Engineers",
    ],
  },
  {
    question: "UI/UX design",
    title: "UI/UX design",
    desc: "Our UI/UX designers create wireframes, a style guide, and prepare all the screens and their possible conditions. If you approve our work, the UI/UX designer handles the project over to developers. We prepare a style guide containing all the information designers and developers may need, including colors, gradients, and typography.",
    staff: ["UI/UX Designers", "QA Engineers"],
  },
  {
    question: "Development process",
    title: "Development",
    desc: "The development team implements the required features. Depending on the project, you can cooperate with various tech experts like iOS, Android, or web developers (front-end and back-end). We create software in sprints — 2-week periods during which a development team has to complete a discussed amount of work.",
    staff: ["Software Developers"],
  },
  {
    question: "Quality assurance",
    title: "Quality Assurance",
    desc: "Developers implement features by sprints, while QA engineers test the product to find bugs. They test both back end and front end and create reports for software developers to fix issues. QA engineers take part in the project till release. That’s because their role here is to check the functionality developed during each sprint.",
    staff: ["Software Developers", "QA Engineers"],
  },
  {
    question: "Deployment",
    title: "Deployment",
    desc: "Before launching the project, QA engineers perform regression testing to ensure that everything works correctly. We help with the app release on AppStore or Google Play. In case of the web project, we move it to the live server on the release day. Once you’re satisfied with the result, the team passes all project materials to you.",
    staff: ["Project Manager", "Software Developers", "QA Engineer", "DevOps"],
  },
  {
    question: "Support and maintenance",
    title: "Support and maintenance",
    desc: "Our cooperation doesn’t end when the software is live. We can continue working on the software to add various tweaks based on feedback from users and maintain your solution with improvements and new features. Project maintenance stands for bug fixing, stability and performance improvements, and code optimization.",
    staff: [
      "Project Manager",
      "Developers",
      "QA engineers",
      "DevOps",
      "engineers",
    ],
  },
];

const clientsTestimonials = [
  {
    name: "Breanne Butler",
    img: "https://www.cleveroad.com/images/article-previews/af022ec0cf9ca8d01a138b7018fe392afb3030ef5fd0c707430f571f8473c136.png",
    designation: "Founder of el Tab",
    country: "United Kingdom",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/gb.svg",
    desc: "I was very happy with their overall performance. I was very pleased that the team would regularly come to me with suggestions of how to improve the app.",
    videURL: "https://youtu.be/Ml4AwDFHsQ0",
  },
  {
    name: "Henrik Loop",
    img: "https://www.cleveroad.com/images/article-previews/af022ec0cf9ca8d01a138b7018fe392afb3030ef5fd0c707430f571f8473c136.png",
    designation: "CTO at Blockbuster, TDC",
    country: "Denmark",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/dk.svg",
    desc: "“We’re very happy with Cleveroad. They seem to work in the way that we do, and we have a close collaboration with them. Every day we talk to the developers and outline what needs to be done.",
    videURL: "https://youtu.be/psAb2bL5iWQ",
  },
  {
    name: "Breanne Butler",
    img: "https://www.cleveroad.com/images/article-previews/af022ec0cf9ca8d01a138b7018fe392afb3030ef5fd0c707430f571f8473c136.png",
    designation: "Project manager of Prime Path Medtech™",
    country: "USA",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    desc: "‘‘We are quite satisfied with the Cleveroad and our collaboration so far. We especially appreciate how they maintained the communication. The team was constantly in touch with us and available at each project step.’’",
    videURL: "https://youtu.be/46Fw-GA6pXs",
  },
  {
    name: "Nicolai Altwegg",
    img: "https://www.cleveroad.com/images/article-previews/af022ec0cf9ca8d01a138b7018fe392afb3030ef5fd0c707430f571f8473c136.png",
    designation: "CEO at Ayoo AG",
    country: "Switzerland",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/ch.svg",
    desc: "“We feel like they’re a part of our company, rather than an outsourced partner.”",
    videURL: "",
  },
  {
    name: "John Salmon",
    img: "https://www.cleveroad.com/images/article-previews/92bcab1e21e46098e8fc98b826070a48a1377becab1f8f3572448c6f63ed15f2.png",
    designation: "Owner of MoveUp",
    country: "USA",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    desc: "“Cleveroad helped us build an app that's one of its kind–and they did it well.”",
    videURL: "",
  },
  {
    name: "Alex Levin",
    img: "https://www.cleveroad.com/images/article-previews/45bf7547432533517995c986ebbff1077f38e406cd64cc59c1e02d76fc6bd905.png",
    designation: "Project Manager of Virgin Atlantiс",
    country: "USA",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    desc: "The product, built by Cleveroad, complied with our corporate style and functional specifications. The team followed the agreed timeline and budget flawlessly despite.",
    videURL: "",
  },
  {
    name: "Neil Nedley",
    img: "https://www.cleveroad.com/images/article-previews/51300e372d335da2fa5e07cf235f300a3600fe4784ecd4d69695a8535a6cf54b.jpg",
    designation: "Founder of Nedley Health Solutions",
    country: "USA",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    desc: "It was a great experience for me to cooperate with Cleveroad. Its specialists have high level of professionalism, they have built a product considering all my requirements.",
    videURL: "",
  },
  {
    name: "David Argyle",
    img: "https://www.cleveroad.com/images/article-previews/64f95a674c41f54bfb23cf7359d78ed43b498a94ab2c21cf82957d8a094b4ed1.jpg",
    designation: "CEO & Co-Founder of Just Play",
    country: "Australia",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/au.svg",
    desc: "They were responsive, flexible, and proactive when it came to solving problems. We were impressed with Cleveroad’s technical competence and skills in being able to solve problems and execute what we wanted to do at a high level.",
    videURL: "",
  },
  {
    name: "Max Deutsch",
    img: "https://www.cleveroad.com/images/article-previews/174861c72093db21666d6a1512d63b509d3a060a5105d3123109ac991b01c0bf.jpeg",
    designation: "Founder of Openmind",
    country: "USA",
    flagIcon: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    desc: "We started with a small project, which went very well. Then, a slightly bigger project. We've now been working together for the past two years on all of my big projects.",
    videURL: "",
  },
];

const industryExperts = [
  {
    category: "Healthcare",
    catIcon: <MdOutlineHealthAndSafety />,
    img: "https://www.cleveroad.com/static/05af0105926af7b99ca9a6cee675bc95/30cf3/experts-healthcare%403x.webp",
    heading:
      "Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine",
    desc: "We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.",
  },
  {
    category: "Education",
    catIcon: <MdOutlineCastForEducation />,
    img: "https://www.cleveroad.com/static/bc72ff5343e97d4cca9081a1ea26f365/30cf3/experts-education%403x.webp",
    heading:
      "Educational platforms, LMS, AR/VR experience, and all the digitals to learn and teach",
    desc: "We help startups and organizations globally create solutions that solve the target audience’s problems and make education easy and exciting.",
  },
  {
    category: "Media",
    catIcon: <SiWikimediacommons />,
    img: "https://www.cleveroad.com/static/9674e7d3824f37ea57fcfcb681c764e9/30cf3/experts-marketplace%403x.webp",
    heading: "B2B, B2C, and C2C marketplaces of any complexity and focus",
    desc: "We create e-commerce products that help SMBs and big brands to achieve goals set and increase business value.",
  },
  {
    category: "Logistics",
    catIcon: <MdEmojiTransportation />,
    img: "https://www.cleveroad.com/static/a11c722569f936c3ce021d68f09091a1/30cf3/experts-logistics%403x.webp",
    heading: "LMS, TMS, SCM, ERP, and other software and mobile apps",
    desc: "Custom solutions to lower operational expenses, optimize supply chains, and improve workflows of warehousing, transportation, cargo delivery, etc.",
  },
  {
    category: "Marketplace",
    catIcon: <FaMapMarkedAlt />,
    img: "https://www.cleveroad.com/static/9674e7d3824f37ea57fcfcb681c764e9/30cf3/experts-marketplace%403x.webp",
    heading: "B2B, B2C, and C2C marketplaces of any complexity and focus",
    desc: "We create e-commerce products that help SMBs and big brands to achieve goals set and increase business value.",
  },
  {
    category: "Retail",
    catIcon: <IoLogoGooglePlaystore />,
    img: "https://www.cleveroad.com/static/892fc78681c7eb0a2729ec2910178273/30cf3/experts-retail%403x.webp",
    heading:
      "Complex CRM, POS, RMS, and other software for stores and large retail chains",
    desc: "We help our clients introduce effective workflows, improve back-office operations, and optimize performance on all levels.",
  },
  {
    category: "FinTech",
    catIcon: <IoBusinessOutline />,
    img: "https://www.cleveroad.com/static/3d6367a9ebb26db97ffaafbd2dfd5991/30cf3/experts-fintech%403x.webp",
    heading:
      "Turnkey digital solutions and mobile apps for established businesses and startups",
    desc: "We develop software that facilitates online payments, financial analytics, banking and ensures security, legal compliance, and data protection.",
  },
  {
    category: "Travel",
    catIcon: <MdTravelExplore />,
    img: "https://www.cleveroad.com/static/9c3ccfa4f415220db29ef03bd3c06529/30cf3/experts-travel%403x.webp",
    heading:
      "Booking platforms, HMS, and TMS software solutions for the industry of hospitality and tourism",
    desc: "We help companies and startups to optimize management, improve efficiency, and meet high customer service expectations.",
  },
];

const helpBusinesses = [
  {
    title: "Modern technologies",
    desc: "Our team uses a wide range of programming languages to build complex projects and be flexible to changes providing software development services.",
  },
  {
    title: "Full transparency",
    desc: "Using well-known project management tools and practices, we keep our processes transparent and catch you up to the latest updates.",
  },
  {
    title: "Established data protection",
    desc: "We sign an NDA agreement to protect your idea. It contains information about the procedure of data collection, project transfer, types of access, and more.",
  },
  {
    title: "Goal-oriented architecture",
    desc: "With a Solution Architect working on your product, we design architecture from the ground up to make sure it goes along with your business goals from the early stages",
  },
];

const certifications = [
  {
    img: "https://www.cleveroad.com/static/e936e6808e7b084be3c81c4503243030/75ed3/img-aws-cloud%402x.webp",
    title: "AWS",
    desc: "Solution Architect, Associate",
  },
  {
    img: "https://www.cleveroad.com/static/98dc0f3c53ded215cf9adee543458429/30a52/img-aws-security%402x.webp",
    title: "AWS",
    desc: "Security, Speciality",
  },
  {
    img: "https://www.cleveroad.com/static/5029f830840d9aceed56f475f4f8801b/62fe0/scrum-alliance.webp",
    title: "Scrum Alliance",
    desc: "Certified Scrum Product Owner®",
  },
  {
    img: "https://www.cleveroad.com/static/9f1405ad5b93652492af89ffc76d1508/5df9e/img-aws-sys-ops%402x.webp",
    title: "AWS",
    desc: "SysOps Administrator, Associate",
  },
  {
    img: "https://www.cleveroad.com/static/9c7bab65f349d10f5032a3a08583510c/681e1/img-blockchain%402x.webp",
    title: "Udacity",
    desc: "Blockchain developer",
  },
  {
    img: "https://www.cleveroad.com/static/bcc4853cf1aedd71e8bf3c289b2d335d/a3c24/linux-professional-institute.webp",
    title: "LPI",
    desc: "Linux professional certification",
  },
];

const featuredPartners = [
  "https://www.logolynx.com/images/logolynx/45/451aff5e8575b25234679410436e01d4.png",
  "https://www.logolynx.com/images/logolynx/23/239ad42f9be7a6f4fa0815df4e6e0d11.jpeg",
  "https://www.logolynx.com/images/logolynx/d2/d2f06c135b0823d605eabb999d7317e9.jpeg",
  "https://www.logolynx.com/images/logolynx/29/29afa474aea7c8dd6fbababf3e0866a8.jpeg",
  "https://www.logolynx.com/images/logolynx/59/593e4233118dd1b52cb50bea9bb57e0e.png",
  "https://www.logolynx.com/images/logolynx/b4/b4442c5e9d3567a011e6c65a17fce3e7.jpeg",
  "https://www.logolynx.com/images/logolynx/d4/d47301fbc902dcf808d4bad56907ed35.png",
  "https://www.logolynx.com/images/logolynx/3d/3d78a0bc89cab1870cfeca529870c183.jpeg",
];

const featuredPartners1 = [
  "https://www.logolynx.com/images/logolynx/5e/5e6bc01eabab32c9c02716e0835e9bca.jpeg",
  "https://www.logolynx.com/images/logolynx/0b/0b8576c7656720bfe7f6553de8fb5309.jpeg",
  "https://www.logolynx.com/images/logolynx/3f/3f6dfe02df047fab6a688cd9e25d7791.png",
  "https://www.logolynx.com/images/logolynx/d7/d7adeb77a809919af7d65586e5341978.jpeg",
  "https://www.logolynx.com/images/logolynx/8a/8afe739e4cb5842aeb2b831da7d4b912.png",
  "https://www.logolynx.com/images/logolynx/ce/ce964e0f8d34f7b00a09714ee9b23963.jpeg",
];

const featuredPartners2 = [
  "https://www.logolynx.com/images/logolynx/17/17bd78e8658bb47e7ccc062d024bcbc5.jpeg",
  "https://www.logolynx.com/images/logolynx/07/07dffc4842b20770fd3a175aa2e2c6e0.jpeg",
  "https://www.logolynx.com/images/logolynx/5e/5e6310ad479457c0391e0345f63f8deb.jpeg",
  "https://www.logolynx.com/images/logolynx/07/07dffc4842b20770fd3a175aa2e2c6e0.jpeg",
  "https://www.logolynx.com/images/logolynx/0b/0b8576c7656720bfe7f6553de8fb5309.jpeg",
  "https://www.logolynx.com/images/logolynx/d0/d06412adb5c9c756de4202283f7546de.png",
];

const webTechnologies = [
  {
    icon: <IoLogoNodejs />,
    title: "Node JS",
  },
  {
    icon: <SiTypescript />,
    title: "Type Script",
  },
  {
    icon: <SiDotnet />,
    title: ".NET",
  },
  {
    icon: <FaJava />,
    title: "Java",
  },
  {
    icon: <SiPython />,
    title: "Python",
  },
  {
    icon: <SiRubyonrails />,
    title: "Ruby",
  },
  {
    icon: <FaReact />,
    title: "React",
  },
  {
    icon: <SiAngular />,
    title: "Angular",
  },
  {
    icon: <SiVuedotjs />,
    title: "Vue JS",
  },
  {
    icon: <FaAws />,
    title: "AWS",
  },
];

const mobileTechnologies = [
  {
    icon: <SiSwift />,
    title: "Swift",
  },
  {
    icon: <SiFlutter />,
    title: "Flutter",
  },
  {
    icon: <TbBrandReactNative />,
    title: "React Native",
  },
  {
    icon: <FaJava />,
    title: "Java",
  },
  {
    icon: <TbBrandKotlin />,
    title: "Kotlin",
  },
];

const projectsData = [
  {
    img: "https://www.nhitechsolutions.com/assets/img/WEB.jpg",
    icon: <BsCodeSquare />,
    title: "Web Development",
    desc: "Next Horizon provides strategically engineered services to increase conversions & perfomance related to Web-services. On-Site Engagements or New technologies to embrace.",
  },
  {
    img: "https://www.nhitechsolutions.com/assets/img/MOBILE.jpg",
    icon: <AiOutlineMobile />,
    title: "Mobile Development",
    desc: "We offer mobile design, integration and management services. The company leads the entire mobile development process from ideation and concept to delivery.",
  },
  {
    img: "https://www.nhitechsolutions.com/assets/img/ui2.jpg",
    icon: <SiAffinitydesigner />,
    title: "UI/UX Design",
    desc: "With content and user-experience we can turn any complex concept or idea into beautiful, simple and user-friendly interfaces.",
  },
  {
    img: "https://www.nhitechsolutions.com/assets/img/13.jpg",
    icon: <FaDatabase />,
    title: "Data and Cloud Computing",
    desc: "Include edge computing as part of your innovation roadmap. Offer next-generation products and experiences. The Popular Choice. World Class Support.",
  },
  {
    img: "https://www.nhitechsolutions.com/assets/img/tech1122.png",
    icon: <MdOutlineSupportAgent />,
    title: "Tech Support",
    desc: "We help startups to thrive. Next Horizon solely has the expertise and experience to deliver a wide range of services. Empowering Startups. Leaders in Tech Workforce Development.",
  },
  {
    img: "https://www.nhitechsolutions.com/assets/img/it12.jpg",
    icon: <BsFileEarmarkBreak />,
    title: "IT Consultancy",
    desc: "Remember Next Horizon while considering IT Consultancy. We offer vibrant strategies to the startups seeking any sort of consultation.",
  },
];

const companiesList = [
  "https://www.nhitechsolutions.com/assets/img/clients/ibm.png",
  "https://www.nhitechsolutions.com/assets/img/clients/Cisco.png",
  "https://www.nhitechsolutions.com/assets/img/clients/Dellemc.png",
  "https://www.nhitechsolutions.com/assets/img/clients/baracuda.png",
  "https://www.nhitechsolutions.com/assets/img/clients/lenovo.png",
  "https://www.nhitechsolutions.com/assets/img/clients/news.png",
];

const technicalProcess = [
  {
    id: 0,
    category: "Development",
    icon: <MdDeveloperBoard />,
    img: "https://www.nhitechsolutions.com/assets/img/features-1.png",
    title: `Development Process`,
    desc1: "Utility and development engineering.",
    list: [
      "Review Requirements",
      "Impact Analysis",
      "Code Review and Sequence Diagram",
    ],
    desc2:
      "The product development process encompasses all steps needed to take a product from concept to market availability. This includes identifying a market need, researching the competitive landscape, conceptualizing a solution, developing a product roadmap, building a minimum viable product, etc.",
  },
  {
    id: 1,
    category: "Design",
    icon: <AiOutlineAntDesign />,
    img: "https://www.nhitechsolutions.com/assets/img/features-2.png",
    title: `Design Process`,
    desc1: `From Ideation to the best possible Design.

    4D Design Process:`,
    list: ["Discover", "Define", "Develop", "Deliver"],
    desc2: "",
  },
  {
    id: 2,
    category: "Data",
    icon: <AiOutlineDatabase />,
    img: "https://www.nhitechsolutions.com/assets/img/features-3.png",
    title: `Data Process`,
    desc1:
      "We have experts who work and process data to make it more refined and presentable. However, we embrace Client's menifestations to have best utility of data.",
    list: ["Planning", "Design", "Development", "Launch"],
    desc2: "",
  },
  {
    id: 3,
    category: "Support",
    icon: <MdOutlineSupportAgent />,
    img: "https://www.nhitechsolutions.com/assets/img/features-4.png",
    title: `Technical Support and outputs`,
    desc1:
      "Next Horizon is well known for its expert opinions over heat skills data and assistance to meet the mark of Guidance and Support provider.",
    list: ["Technical Support", "Expert Opinion", "Guidance over Ideation"],
    desc2: "",
  },
];

const services = [
  {
    icon: <BsLaptop />,
    title: "Development Support",
    desc: "Next Horizon provides in HAND support over multiple dimensions to have competitive advantage and ready-to-use integrated support",
  },
  {
    icon: <BsBarChart />,
    title: "Product Scope",
    desc: "The Product Scope is an intensive structured process designed to set your project up for success.",
  },
  {
    icon: <BsSun />,
    title: "UI/UX DESIGN",
    desc: "Let us Design you an engaging product that is easy-to-use, attractive and functional",
  },
  {
    icon: <BsBriefcase />,
    title: "MVP Builder",
    desc: "Go to market quickly with high-quality Market Viable Product",
  },
  {
    icon: <RiTeamLine />,
    title: "Dedicated Teams",
    desc: "NEXT HORIZON feels privilege providing team of like-minded developers to our clients.",
  },
  {
    icon: <BiTimeFive />,
    title: "CRM Solutions",
    desc: "Expand your business and let us bring you featured rich adaptable CRM",
  },
];

const servicesNew = [
  {
    icon: MobileDev,
    iconBGColor: "#32ccfe",
    title: "Mobile app development",
    desc: "Our mobile developers use well-proven agile practices and follow a client-oriented approach to develop custom mobile apps  that highlight your brand identity, bring customers, and solve everyday business challenges.",
    name1: "iOS app development",
    link1: "/services/mobile-development/ios",
    name2: "Android app development",
    link2: "/services/mobile-development/android",
    name3: "Flutter app development",
    link3: "/services/mobile-development/flutter",
    exploreMoreLink: "/services/mobile-development",
  },
  {
    icon: WebDev,
    iconBGColor: "#ffcc33",
    title: "Web app development",
    desc: "We’ve gained our experience in building web applications through cooperating with companies that follow various business models and operate in various business domains like FinTech and e-Commerce.",
    name1: "PWA development",
    link1: "",
    name2: "Website and web app creation",
    link2: "/services/web-application-development-services",
    name3: "Responsive design",
    link3: "",
    exploreMoreLink: "/services/web-development",
  },
  {
    icon: UIUX,
    iconBGColor: "#5855d6",
    title: "UI/UX design",
    desc: "Our UI/UX design team’s expertise and creativity will help you get the product you’ve pictured. We rely on established standards, proven tools and deep understanding of your business goals while designing your product.",
    name1: "Wireframing and prototyping",
    link1: "",
    name2: "UX consulting",
    link2: "",
    name3: "Product design",
    link3: "",
    exploreMoreLink: "/services/ui-ux-design",
  },
  {
    icon: QAServices,
    iconBGColor: "#ff9934",
    title: "QA services",
    desc: "We run manual and automated tests and use different approaches during the entire development life-cycle to eliminate problems and bugs, enhance performance, and improve business logic and design.",
    name1: "Software testing",
    link1: "",
    name2: "Functional testing",
    link2: "",
    name3: "Non-functional testing",
    link3: "",
    exploreMoreLink: "/services/qa-services",
  },
  {
    icon: DevOps,
    iconBGColor: "#34c85a",
    title: "DevOps services",
    desc: "Bring new code and features to your products painlessly with our experienced DevOps engineers. We’ll help you reduce time to market without sacrificing reliability, security, and compliance.",
    name1: "Cloud Infrastructure services",
    link1: "",
    name2: "CI/CD services",
    link2: "",
    name3: "Cloud cost optimization",
    link3: "",
    exploreMoreLink: "/services/devops-services",
  },
  {
    icon: Staff,
    iconBGColor: "#074edc",
    title: "Staff augmentation",
    desc: "We provide staff augmentation services to expand your team with qualified and experienced members. Acquire our iOS, Android, and Web developers, DevOps and QA engineers, UI/UX designers in no time.",
    name1: "Dedicated team",
    link1: "/services/dedicated-development-team-services",
    name2: "Team augmentation",
    link2: "",
    name3: "Flexible cooperation",
    link3: "",
    exploreMoreLink: "/services/staff-augmentation",
  },
  {
    icon: Startup,
    iconBGColor: "#07d2e0",
    title: "Startup services",
    desc: "If you’re a brave startup with an idea and you want to test waters, we’ll help you bring it to life. As a software engineering company, we have in-depth experience in creating MVP projects to reduce time to market.",
    name1: "Discovery phase",
    link1: "/services/discovery-phase-process",
    name2: "MVP development",
    link2: "/services/mvp-development-services",
    name3: "CTO as a service",
    link3: "/services/cto-as-a-services",
    exploreMoreLink: "/services/startup-services",
  },
];

const testimonial = [
  {
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwcG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Saul Methew",
    jonTitle: "Ceo & Founder",
    quote: `
    "Next Horizon has really great design resources; I’m very thrilled to be working with them.”
    `,
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "John Wilsson James",
    jonTitle: "Developer",
    quote: `
    "They're very consistent and provide steady good communication."
    `,
  },
  {
    img: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwcG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Steve Karlis",
    jonTitle: "Store Owner",
    quote: `
    "I really appreciate how quickly they move because they allow us to save time."
    `,
  },
  {
    img: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwcG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "W Clark J.",
    jonTitle: "Developer",
    quote: `
    "They always asked for feedback after every single milestone."
    `,
  },
  {
    img: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Larson Harry",
    jonTitle: "Techpreneur",
    quote: `
    "Their project management has been responsive and the team has been on top of all the details."
    `,
  },
];

const portfolioProjects = [
  {
    category: "Web",
    title: "Refine",
    desc: "A B2B food delivery admin Platform",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/refine.jpg",
  },
  {
    category: "Web",
    title: "Shop2Ship",
    desc: "A Business centered ecommerce platform to sell International products",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/ships.jpg",
  },
  {
    category: "Web",
    title: "CrewMama",
    desc: "A freelance production Crew Directory System",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/crew.jpg",
  },
  {
    category: "Web",
    title: "Clover",
    desc: "A standalon POS, Customer initial payments",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/clover.jpg",
  },
  {
    category: "Web",
    title: "Booking.com",
    desc: "World's Biggest booking Search Engin",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/bookin.jpg",
  },
  {
    category: "Web",
    title: "FLyWheel",
    desc: "Industry leading Ride Hailing",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/fly.jpg",
  },
  {
    category: "Mobile",
    title: "Seal Chat",
    desc: "A secure Chatting Mobile Application",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/seal.jpg",
  },
  {
    category: "Mobile",
    title: "Simply Scan",
    desc: "An Android app that lets you transfer Data blogging Fast",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/simply.jpg",
  },
  {
    category: "Mobile",
    title: "360 Plus",
    desc: "A Camera app that lets you capture 360` view smoothly",
    img: "https://www.nhitechsolutions.com/assets/img/portfolio/360.jpg",
  },
];

const team = [
  {
    img: "https://ca.slack-edge.com/T02T52NCX7S-U03S3KWSKEY-15609542076c-512",
    name: "Rizwan Asghar",
    designation: "Managing Director",
    linkedIn: "",
  },
  {
    img: "https://ca.slack-edge.com/T02T52NCX7S-U02SFAG0WM8-ead56282d50a-512",
    name: "Ali Raza",
    designation: "Director Management & Finance",
    linkedIn: "",
  },
  {
    img: "https://ca.slack-edge.com/T02T52NCX7S-U02S8L5D34N-4c9d6a07572a-512",
    name: "Faaiz Yasha",
    designation: "Director Sales & Technology",
    linkedIn: "",
  },
  {
    img: "https://ca.slack-edge.com/T02T52NCX7S-U02S8L5C4MU-f3fd4ed9a384-512",
    name: "Umar Ibrahim",
    designation: "Business Development Manager",
    linkedIn: "",
  },
  {
    img: "https://ca.slack-edge.com/T02T52NCX7S-U03AF1QV3PS-f03adf981077-512",
    name: "Noor ul Zaman",
    designation: "HR Manager",
    linkedIn: "",
  },
];

const Expertise = [
  {
    title: "Healthcare",
    link: "",
  },
  {
    title: "Logistics",
    link: "",
  },
  {
    title: "FinTech",
    link: "",
  },
  {
    title: "Marketplace",
    link: "",
  },
  {
    title: "Retail",
    link: "",
  },
  {
    title: "Travel",
    link: "",
  },
  {
    title: "Education",
    link: "",
  },
];

const ourServices = [
  {
    title: "iOS App Development",
    link: "/services/mobile-development/ios",
  },
  {
    title: "Android App Development",
    link: "/services/mobile-development/android",
  },
  {
    title: "Flutter App Development",
    link: "/services/mobile-development/flutter",
  },
  {
    title: "Web Development",
    link: "/services/web-development",
  },
  {
    title: "UI/UX Design",
    link: "/services/ui-ux-design",
  },
  {
    title: "Quality Assurance",
    link: "/services/qa-services",
  },
  {
    title: "DevOps Services",
    link: "/services/devops-services",
  },
];

const Insights = [
  {
    title: "App development cost",
    link: "",
  },
  {
    title: "How to build ridesharing",
    link: "",
  },
  {
    title: "How to build a fitness app",
    link: "",
  },
  {
    title: "Build a streaming app",
    link: "",
  },
  {
    title: "CRM for Agriculture",
    link: "",
  },
  {
    title: "How to build a CRM",
    link: "",
  },
  {
    title: "Web design process",
    link: "",
  },
];

const offices = [
  {
    flag: "https://cdn-icons-png.flaticon.com/512/555/555614.png",
    contact: "+38 066 489 6889",
    city: "Ukraine, Dnipro",
    adress: "Vokzalnaya square, 2d",
  },
  {
    flag: "https://cdn-icons-png.flaticon.com/512/555/555614.png",
    contact: "+38 066 332 5291",
    city: "Ukraine, Kharkiv",
    adress: "Vokzalnaya square, 2d",
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    contact: "+1 415 231 3721",
    city: "USA, Claymont, DE",
    adress: "2093 Philadelphia Pike #1655",
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    contact: "+47 80 02 50 37",
    city: "Norway, Oslo",
    adress: "Tordenskiolds gate 3",
  },
];

const connectOurTeams = [
  {
    heading: "Have a great idea?",
    email: "sales@cleveroad.com",
    desc: "Tell us more about your business idea to get consulted",
  },
  {
    heading: "Got questions to ask?",
    email: "info@cleveroad.com",
    desc: "Discuss your project with us. We’re open to questions",
  },
  {
    heading: "We are hiring!",
    email: "hr@cleveroad.com",
    desc: "We do more for your career. Come and join us.",
  },
];

const customMobileApps = [
  {
    category: "Taxi",
    desc: "On-demand taxi apps usually consist of two separate in-app roles or apps: Driver’s and Passenger’s. Besides basic functionality, taxi apps require map APIs (Google Maps, MapKit), payment gateways (Stripe, PayPal), and in-app calling feature integration (Twilio, Bandwith).",
    time: "2200 hours",
    duration: "6 months",
  },
  {
    category: "Streaming",
    desc: "When creating media streaming apps, we take care of seamless content delivery and work with trustful media processing platforms (Livestream, Brightcove). Streaming apps also require data storage (Cassandra, MySQL), geolocation (Google Maps, MapKit), etc.",
    time: "2300 hours",
    duration: "7 months",
  },
  {
    category: "Booking",
    desc: "Booking apps have to be data-driven and feature-rich to meet users' expectations. They should have a robust search engine (Elastic Search), flexible push notifications (Amazon SNS, Firebase Cloud Messaging), payment gateways (Stripe, Braintree), etc.",
    time: "1800 hours",
    duration: "4 months",
  },
  {
    category: "Delivery",
    desc: "Delivery applications usually consist of two separate apps: for customers and for couriers. Must-have features for delivery apps are geolocation (Google Maps, MapKit), email messaging (SendGrid), payments (Braintree, Stripe), analytics (Mixpanel), and others.",
    time: "2500 hours",
    duration: "7 months",
  },
  {
    category: "Fitness",
    desc: "Our engineers build any type of fitness applications: from nutrition to personal workout and activity tracking apps tailored to Android and iOS. Main features can be sync with native health services (HealthKit, GoogleFit), geolocation (Google Maps, MapKit), etc.",
    time: "1800 hours",
    duration: "4 months",
  },
  {
    category: "Marketplace",
    desc: "Marketplace apps usually act as intermediaries between two parties: buyer and seller of goods or services. These solutions should be lightning-fast and have robust analytics powered with machine learning (Amazon ML).",
    time: "1500 hours",
    duration: "4 months",
  },
];

const mobileTechstack = [
  {
    techCategory: "Language",
    techData: [
      {
        tool: "Java",
        icon: "",
        desc: "This general-purpose language can be applied for numerous tasks, including Android app development. The main advantages of Java are portability, scalability, and excellent performance, making it a perfect language for developing complex enterprise applications requiring room for growth.",
        text1Head: "3B",
        text1: "devices run Java",
        text2Head: "30%",
        text2: "more performant",
      },
      {
        tool: "Kotlin",
        icon: "",
        desc: "The new open-source programming language that Google uses to replace Java for building Android apps. It has clear syntax and can be compiled to JavaScript or JVM bytecode easily. Due to integration with all Java frameworks and libraries, the app development process goes faster and gives developers more tools to build native Android apps.",
        text1Head: "30%",
        text1: "More maintainable functionality",
        text2Head: "More maintainable functionality",
        text2: "of all app downloads in Google Play",
      },
      {
        tool: "Swift",
        icon: "",
        desc: "Swift is a robust programming language backed by Apple that allows creating top-notch and fast applications for all Apple operating systems. Safety, simplicity, and permanent performance enhancements make iOS app development with Swift an ideal solution for building iOS apps of any complexity.",
        text1Head: "2.6x",
        text1: "faster than Objective-C",
        text2Head: "8.4x",
        text2: "faster than Python",
      },
      {
        tool: "Objective-C",
        icon: "",
        desc: "This object-oriented programming language has been actively using for iOS app development for over 30 years. This fact alone makes Objective-C reliable as millions of lines of code are written on it. In addition, this code is backward compatible with C and C++ languages.",
        text1Head: "2M+",
        text1: "apps built",
        text2Head: "30%",
        text2: "apps built",
      },
    ],
  },
  {
    techCategory: "Database",
    techData: [
      {
        tool: "Firebase",
        icon: "",
        desc: "CoreData framework makes it possible to speed up the iOS application development process. CoreData simplifies memory management since developers load into memory only those objects they use at the moment. Integrating sorting of objects and optional automatic validation of property values help the app work with a database.",
        text1Head: "1M+",
        text1: "developers use Firebase",
        text2Head: "+30%",
        text2: "developers’ efficiency",
      },
      {
        tool: "SQLite",
        icon: "",
        desc: "It is a lightweight database geared toward getting rid of server-client architecture and storing all the app data directly on a mobile device. This DB is based on files, so it provides a wide range of capabilities for developers. Since SQLite doesn’t send requests to the server, it is much more powerful and faster.",
        text1Head: "11th",
        text1: "top database",
        text2Head: "35%",
        text2: "Faster Than The Filesystem",
      },
      {
        tool: "Realm",
        icon: "",
        desc: "Realm is a popular mobile database for every iOS app development platform and also for Android. It’s incredibly rapid (much more rapid than SQLite), cross-platform, thread-safe, and has an easy-to-use API. The developers call it a contemporary and reliable substitute for the native Apple’s databases.",
        text1Head: "+30%",
        text1: "app performance",
        text2Head: "75,921",
        text2: "apps worldwide",
      },
      {
        tool: "CoreData",
        icon: "",
        desc: "CoreData framework makes it possible to speed up the iOS application development process. CoreData simplifies memory management since developers load into memory only those objects they use at the moment. Integrating sorting of objects and optional automatic validation of property values help the app work with a database.",
        text1Head: "30%",
        text1: "faster data loading",
        text2Head: "+40%",
        text2: "developers’ efficiency",
      },
    ],
  },
  {
    techCategory: "Frameworks",
    techData: [
      {
        tool: "Roboelectric",
        icon: "",
        desc: "This open-source Android unit test framework allows QA specialists to launch tests for Android apps via local JVM. This Android app test type is similar to black-box testing, and the test can become more efficient for refactoring, and the app's behavior can be tested as well. The framework makes the testing process faster.",
        text1Head: "30%",
        text1: "Faster testing process",
        text2Head: "40%",
        text2: "Higher efficiency",
      },
      {
        tool: "RxJava",
        icon: "",
        desc: "RxJava is a specific implementation of reactive programming for Java and Android, an open-source library with Observer patterns and iterator patterns that help build good software with front-end and back-end parts. It offers developers intuitiveness, extensions, quick reaction to any changes.",
        text1Head: "20%",
        text1: "Faster compilation",
        text2Head: "10%",
        text2: "Faster performance",
      },
      {
        tool: "JUnit",
        icon: "",
        desc: "JUnit is an open-source unit testing framework in the Java language. It provides an incredible opportunity to write code and test it simultaneously! This framework can create test suites step by step to trace all possible side effects thoroughly. Thus, it is mighty, and its graphical interface makes the whole testing process simpler.",
        text1Head: "+30%",
        text1: "Faster testing",
        text2Head: "+40%",
        text2: "improved bug detection",
      },
      {
        tool: "Mockito",
        icon: "",
        desc: "It is a mocking framework for effective unit testing of Java applications. This tool facilitates creating mock objects and allows programmers to verify the system's behavior under test without establishing expectations beforehand. As a result, you will get a simpler test code that is much easier to read and edit.",
        text1Head: "7.2K",
        text1: "stars on GitHub",
        text2Head: "25%",
        text2: "faster testing process",
      },
      {
        tool: "Espresso",
        icon: "",
        desc: "Espresso is an automation tool created by Google. This framework is used to write concise and reliable UI tests and has many advantages for developers and QA engineers, so it dramatically accelerates the development process. It is easy to use within popular IDEs and provides useful testing annotations and assertions.",
        text1Head: "7.2K",
        text1: "stars on GitHub",
        text2Head: "25%",
        text2: "faster testing process",
      },
      {
        tool: "ReactiveCocoa",
        icon: "",
        desc: "ReactiveCocoa is a framework that allows using reactive functional programming techniques for custom iOS application development. It offers bindings and reactive extensions for the Cocoa Touch framework to make code much shorter. Tailored to Swift, the framework defines the interface for events, making it easier to filter and compose them.",
        text1Head: "20%",
        text1: "faster development",
        text2Head: "+30%",
        text2: "developers’ efficiency",
      },
      {
        tool: "Socket.io",
        icon: "",
        desc: "Socket.io framework enables real-time data exchange and communication. It improves and accelerates the integration of chats and video chats to iOS apps. Socket.io has many automated processes for easy communication feature integration. Flexible and simple customization helps iOS app development agency implement their task faster.",
        text1Head: "191k+",
        text1: "websites worldwide",
        text2Head: "40%",
        text2: "faster chat integration",
      },
      {
        tool: "Alamofire",
        icon: "",
        desc: "Alamofire is a well-tested and reliable library for all Apple platforms. It’s designed for working with HTTP requests. Alamofire significantly boosts developer productivity because it simplifies a number of routine tasks for iOS application development companies. It makes the code cleaner that helps to decrease the possibility of bugs.",
        text1Head: "-20%",
        text1: "bugs occurrence",
        text2Head: "10%",
        text2: "faster development",
      },
      {
        tool: "Moya",
        icon: "",
        desc: "Moya is a network abstraction library to work with network data and for quick project integration with RESTful API. Moya allows the iOS application development company to focus on main application features and speed up the implementation of networking data. Using Moya, developers extract network responses to perform unit tests efficiently.",
        text1Head: "40%",
        text1: "faster API manager integration",
        text2Head: "30%",
        text2: "development time optimization",
      },
    ],
  },
];

const faqsMobile = [
  {
    question:
      "How to manage product development & mobile application services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>If you choose Time and Material or Fixed price contact model, we provide an experienced Project Manager to watch over the process, report to you, and collect your feedback. <br><br> If you pick a Dedicated Team contract model, the team's management goes entirely on your side.</span>",
  },
  {
    question: "What are custom mobile app development services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>Custom app development stands for creating mobile apps with specific functionality as well as UI/UX design or enhancing the functionality of an existing app.</span>",
  },
  {
    question:
      "What services are covered under mobile app development services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>We provide full-cycle mobile app development services.<br><br>It means we conduct a business analysis, prepare UI/UX design, and develop your mobile app from idea to release on App Store or Google Play. Also, we provide further maintenance and scale-up on demand.</span>",
  },
  {
    question:
      "What are the technologies used for mobile application development services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 flex flex-col justify-center w-full}`>Programming languages we use for mobile app development:<ul className='list-disc'><li>Java</li><li>Kotlin</li><li>Swift</li><li>Objective-C</li></ul>Databases:<ul><li>Firebase</li><li>SQLite</li><li>Realm</li><li>CoreData</li></ul>Frameworks:<ul><li>Roboelectric</li><li>RXJava</li><li>ReactiveCocoa</li><li>Socket.io</li><li>Alamofire</li><li>Moya, etc.</li></ul></span>",
  },
  {
    question: "What are cross-platform mobile app development services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>Cross-platform development means building mobile apps for multiple platforms and devices with a single code base.<br><br>We use Google’s <a href={`https://www.cleveroad.com/blog/why-use-flutter`} className='text-[#D90429]'>Flutter</a> for cross-platform app development. Flutter helps us build apps for both iOS and Android faster (without affecting apps’ performance) and cut development costs.</span>",
  },
  {
    question: "What solutions are provided by mobile app development services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>Our mobile app development services include:<ul><li><b>Business analysis.</b> We gather and analyze all the project requirements and document them.</li><li><b>UI/UX design.</b> Create wireframes, design the app screen by screen, and make a prototype.</li><li><b>Development.</b> Build custom Android and/or iOS apps using platform-specific programming languages like Swift, Objective-C, Java, Kotlin.</li><li><b>Release.</b> Publish apps on the App Store and/or Google Play.</li><li><b>Maintenance.</b> Support or enhance existing products (if requested).</li></ul></span>",
  },
];

const blogs = [
  {
    id: "24312",
    category: "Technologies",
    title: "Full guide on creating location-based AR app",
    img: "https://www.cleveroad.com/images/article-previews/a598ce63f4b3a7e4f13968e966c506e2982cb124fe3c8614885ad4a7b84bc495.png",
    author: "Oleksandr Sh.",
    postDate: "Aug 18, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "13414",
    category: "UI/UX Design",
    title: "Instagram-like app development cost",
    img: "https://www.cleveroad.com/images/article-previews/939b97e476b95be9285b0da449f7af8f9c8cd4fb76883414a119372d3573ac29.png",
    author: "Diana Chabanovska",
    postDate: "Aug 11, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "12341",
    category: "Case Studies",
    title: "How to Build a Health Insurance Mobile App and Benefit From It",
    img: "https://www.cleveroad.com/images/article-previews/8909170efe223adeabbe06bb247bac159fa3157d0328ee6064c71c85b1f351c9.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Technologies",
    title: "A-CSPO Accreditation of Cleveroad",
    img: "https://www.cleveroad.com/images/article-previews/374305588654f3ba9aeadacdb3bdf0e806061e4812ef2f91cea3c206cc6c1248.png",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Client Guides",
    title: "How to Find a Technical Co-Founder For a Startup",
    img: "https://www.cleveroad.com/images/article-previews/8a74923ba907d8878f670ffd62a9e210654b8c78e5f1e9a1a55eeba71998049d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 15, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Client Guides",
    title: "How to hire a CTO for a startup",
    img: "https://www.cleveroad.com/images/article-previews/c50f0bc6f5ad1351b39b1733ba537e8f0855df7531a5c7f87e47d5d9b9879bc0.jpg",
    author: "Diana Chabanovska",
    postDate: "May 11, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Client Guides",
    title: "Why Companies Need a Solution Architect for Their Projects",
    img: "https://www.cleveroad.com/images/article-previews/e1bbfef278ba84f501a9449e8e273319b777b65d591627184e061ea7b6b3500d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 09, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "97768",
    category: "UI/UX Design",
    title: "How to Create an App for Your Business in 2022",
    img: "https://www.cleveroad.com/images/article-previews/fd6aa821252d39f64770c4f2ae31212d5d3832a5b0ab2c05e5f1bc8d5158852d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "45675",
    category: "Client Guides",
    title: "Benefits of Warehouse Inventory Management System",
    img: "https://www.cleveroad.com/images/article-previews/5249b89d23582287a1b288400f110c88c4d2e63dff5c3cdca01027ce4d09728b.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 22, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Next Horizon",
    title: "Tips to Build Mobile E-commerce App",
    img: "https://www.cleveroad.com/images/article-previews/2eb3cf03d767b198cbe1901885b377587d641bb6d8b542a8b38545571b10e2d1.jpg",
    author: "Diana Bestaieva",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Client Guides",
    title: "Big Data eCommerce system for retail business",
    img: "https://www.cleveroad.com/images/article-previews/AAAAAAA-1.jpg",
    author: "Daria R.",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Next Horizon",
    title: "How to build a eCommerce mobile app",
    img: "https://www.cleveroad.com/images/article-previews/from-ecommerce-to-mobile-commerce-shopping-at-a-high-tech-level-4.png",
    author: "Marina Ch.",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
];

const portfolio = [
  {
    img: "https://www.cleveroad.com/images/portfolio/b7a18c0d409b5e25ecaeca637659f31f60eceadb993773779c2bdc148618b6fd.png",
    title: "Quality Management System",
    status: "Under NDA",
    review:
      "https://www.cleveroad.com/images/portfolio/179a4f69d28aa9f231ff7bba9583af382ab07a8e0169284c3e58add640dc4745.png",
    desc: "SaaS solution streamlining the ISO certification of medical devices and their production",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "TypeScript, .NET, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/fbbefabd1663de666e733337513d20d0c23c4e9a4d2f7f076bbe74d1852f2bed.png",
    title: "Micro-investment platform",
    status: "Under NDA",
    review:
      "https://www.cleveroad.com/images/portfolio/f68522be9bd2cdad08bbd52c363bdf34387db3dd45c63d4243426d6d2b9b308c.png",
    desc: "A turnkey solution for managing micro-investments and savings for the Middle East market",
    country: "Saudi Arabia",
    flag: "https://www.cleveroad.com/assets/icons/flags/sa.svg",
    coreTech: "Flutter, .NET, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/bddb5a59070466585633a74c3ad1f97ee00429ca5dd7d6698c944d3638c2a8a2.png",
    title: "TMS for a logistics company",
    status: "Under NDA",
    review:
      "https://www.cleveroad.com/images/portfolio/f68522be9bd2cdad08bbd52c363bdf34387db3dd45c63d4243426d6d2b9b308c.png",
    desc: "Transportation management system with automatic route planning module.",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Node JS, Kotlin, Swift",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/5ee0a385ce3f8d3997bc3ef3623b7df67d3f84fe091fa3a9f4bc48977c7dda57.png",
    title: "Video-on-demand platform",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/f68522be9bd2cdad08bbd52c363bdf34387db3dd45c63d4243426d6d2b9b308c.png",
    desc: "A large online video streaming service offering thousands of movies and TV series.",
    country: "Denmark",
    flag: "https://www.cleveroad.com/assets/icons/flags/dk.svg",
    coreTech: "Node JS, Kotlin, Swift",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/2c44385e27f0d3a53e2b2611052342a8dffff7820591ef7095e3f549aaf9fb2b.png",
    title: "Telemedicine management system",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/d05636e94fc2ad1dcf7404c2e3bf57cd24cadc5d19182f63fb856cf4644d5f7d.png",
    desc: "An automated platform for managing appointments to UK-certified general practitioners and clinicians",
    country: "United Kingdom",
    flag: "https://www.cleveroad.com/assets/icons/flags/gb.svg",
    coreTech: "Flutter, Node JS, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/dd9bdaaba272944c38dc91323008f0ab56aa2b9fdfa07d9ffa0ec1d1bda64b59.png",
    title: "Location-based marketplace",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/2dd6f074a7e542396612ab0fcf3a6474bb18635e1714157d48eb6d5291385c64.png",
    desc: "Flutter app for subscribing to exclusive drink offers from London's bars and pubs",
    country: "United Kingdom",
    flag: "https://www.cleveroad.com/assets/icons/flags/gb.svg",
    coreTech: "Flutter, Node JS, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/e0d22d329349b25f3ed6d5277372af5adfe47237c63a6e105b9f57dcdff043b8.png",
    title: "IoT-Based System of Hydration Monitoring",
    status: "Under NDA",
    review: "",
    desc: "Software solution for a hardware IoT product that track the hydration level in a human organism",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Flutter, Kotlin, Swift",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/1954ffa3d19324b2f256d34d317bb92a64af291bc22df04d028666a9a6601781.png",
    title: "Social Media for Dancers",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/c6b6ccad8d87eb670321895c9ccbd8d6c329ca8dd8c48183f82f4f72ea2b33f5.png",
    desc: "Interactive video features take communication and entertainment to a new level.",
    country: "Switzerland",
    flag: "https://www.cleveroad.com/assets/icons/flags/ch.svg",
    coreTech: "C#, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/86bcfe3fbd12542f0522122dc490d75dd5367cb3eb09767d7d8d62145b0dd293.png",
    title: "eBanking software system",
    status: "Under NDA",
    review: "",
    desc: "Online Services Ecosystem for European Investment Bank that automates core internal business processes",
    country: "Switzerland",
    flag: "https://www.cleveroad.com/assets/icons/flags/ch.svg",
    coreTech: "C#, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/e925685aead908b081ee2f19afa18c55ae7c257b43415764b7cd69e5639693b3.png",
    title: "Sports Social Media Network",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/3c43fa3b8bb4e8d646a0f5e8ff32ddb114f12b2a046f7dc7b84a79cfaa1163ff.png",
    desc: "A cross-platform application for creators and spectators of sports activities",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: ".NET, React JS, Next.js",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/ac9d0dc77f2d5058a63c5a861b458e0ae132504e3a2ae76c0ced00b1c29d1c2b.png",
    title: "NFT marketplace",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/953712f159d008d8cf1ca5b267fd418b667ea97dcc21e83b870158c390790b4e.png",
    desc: "A web-based solution integrated with Decentralized Data Cloud for creating, distributing, and selling NFT collectibilities",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "React JS, Kotlin",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/1d54f6b27ea49a0328d5e114b703b677bc0cf723650c124a3fe96706ace44991.png",
    title: "SaaS Solution for Retail",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/4db253aa644238690f9ff0f04b013c565b0b85df6ba116f1fcefb482aa6d2547.png",
    desc: "A versatile SaaS platform for retail businesses offering WMS, IMS, PMS, and other solutions.",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "React JS, Kotlin",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/1951863f8a2e8b9ef03644d485565290b15ee95b77fd704b19375805366ad915.png",
    title: "Employment Application System",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/82f08174be24106c07b89d3f327bc7d3e6f41735b3c830643f02b1860311b82c.png",
    desc: "Solution that automates employment application form filling, job vacancies search, and certificate storing",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Flutter, React JS, C#",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/736d3af5d1343305f3879a9bc47faf4f71f7393d930e56fee5a2237ab2a43a30.png",
    title: "Digital Educational Platform for DJs",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/d09d07ad5835b52fe4410e562aa1879b78173ca1e4933c8a6ad328ad16927ca8.png",
    desc: "An educational platform with a training materials database",
    country: "United Kingdom",
    flag: "https://www.cleveroad.com/assets/icons/flags/gb.svg",
    coreTech: "React JS, Kotlin",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/5410dd839de9ed5a82a965c0627f6cf9b3deb5a9c53951386adb3dc030cc7211.png",
    title: "Mental Health App",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/f68340165132848b775cd6e1621bd9a28893b747fd1aafe87687b08c40411224.png",
    desc: "An app designed to help people get rid of depressions and sleep disorders.",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "TypeScript, Swift",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/29c6e29613e5e22b842f95a027b644e951828b5e0d3eaaea97ab4a068e3a4726.png",
    title: "Fitness Marketplace",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/2bac94cf9c2e145d5883d2c2950a1d6a1de2242a04d69bb088b08b7cc25c0737.png",
    desc: "This is the world's largest gym directory app that helps travelers find gyms across the globe.",
    country: "Denmark",
    flag: "https://www.cleveroad.com/assets/icons/flags/dk.svg",
    coreTech: "Node JS, Angular JS, Java",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/f6caa1bfc1dec15ea7778dc14aaaa472ef9e2d79f23f98c228507ed5edbb2d14.png",
    title: "School Community Software",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/2566fc712c1d65b7d023f5bcb919607053f756807fcfb18e7b09e4f011a5b480.png",
    desc: "An app that makes interaction with schools easier for pupils and their parents.",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Node JS, Java, Kotlin",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/8f027ba43ad0e9315cfe23674a077c746975ecd0f0e9e6d848164015b7c871fe.png",
    title: "Web Platform for Searching Travel Activities",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/5d5c270dd3bb739f3ff869bd6d132507bd30de905a86313a9fc522b1dc910993.png",
    desc: "An online platform for tourists and travel providers that allows users to find the activity or property",
    country: "Singapore",
    flag: "https://www.cleveroad.com/assets/icons/flags/sg.svg",
    coreTech: "Node JS, Express, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/dd4426744c62c92144edf6a1bc8e177a40b339640df2f8f6ad8e74148e98e4e2.png",
    title: "P2P Ridesharing Solution",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/a6d52317ee9df1eabf1ecafa4f6234a0c1edc2a31c755ab037f1773a6fdc0f94.png",
    desc: "Transportation app that connects drivers with riders having special needs in a particular area.",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Node JS, Express, Angular JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/a68006f38fdd679b8349b4b61f59bb76c9c1fd6fff783435b923a343975f7242.png",
    title: "Social Business Platform",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/e7e194bee6d222ed1023259c5c9e07821b3071e7067fb361f9d8a1ea6ca197cf.png",
    desc: "A P2P platform that allows to find and hire local specialists to do work matching their skills.",
    country: "Switzerland",
    flag: "https://www.cleveroad.com/assets/icons/flags/ch.svg",
    coreTech: "Node JS, Angular JS, Kotlin",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/fd150260c7dd92625412be8bd87aaa1f161dac2f19cddf089287486e6a16f1d7.png",
    title: "Global trading app",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/aa0890cf86fd2fed5dbb70b45542df1b07e3ca865b465ab88edb63429ccc2de3.png",
    desc: "A trading app that matches product sellers with buyers",
    country: "Saudi Arabia",
    flag: "https://www.cleveroad.com/assets/icons/flags/sa.svg",
    coreTech: "Flutter, .NET, React JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/e268989ffdc3682cc1ed2d5f98eb30b201bd7d762e347c46ec678edd093509e8.png",
    title: "Car Checking Platform",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/860d24f429aa1a3290232526810794ce92e5361f6e36f601106715553f926fc0.png",
    desc: "A service that helps buyers check a car's condition before purchase.",
    country: "France",
    flag: "https://www.cleveroad.com/assets/icons/flags/fr.svg",
    coreTech: "Node JS, Angular JS, Kotlin",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/9d31cfed03a90ef4d07034f15df1d3fe3926c6736c731280eaa3fb56d891d059.png",
    title: "Social Dating Platform",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/a851ccbf9a412af893930a81754822c44ccbb017fa33e35d9b2caee76eb6048f.png",
    desc: "A dating app built around the traffic light conception to help users find a soulmate.",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Node JS, Express, Angular JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/76645ac3f91c7894bcb15b99d42e281b6cf8b38b40b5c01b43211d25c7141228.png",
    title: "Live Wallpaper App",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/fc5590efae717672cf658edbf0bf7faaefa328fdee9f503fcc6cf545bfb0fe83.png",
    desc: "A playful wallpaper-making tool that turns best video moments into live wallpapers",
    country: "USA",
    flag: "https://www.cleveroad.com/assets/icons/flags/us.svg",
    coreTech: "Kotlin",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/fb3e69a828f14aed27c444c895e9bb8a74e0c6d29159afcc7d7c1aba0f7c57f8.png",
    title: "Designers and manufacturers community",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/cbf5b5bd29147ffb810491d767634faab738945266f8cd74b61e1c68aeb0ab0a.png",
    desc: "A platform that connects talented designers with manufacturers for creating great products.  ",
    country: "Spain",
    flag: "https://www.cleveroad.com/assets/icons/flags/es.svg",
    coreTech: "Node JS, TypeScript, Angular JS",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/89409274d748bd1d27f865bc8a96e2d8766a7ffaadb2b5a75855222416f80cd8.png",
    title: "Color changing app",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/20a1778ce9c1d601e2a3e67c5d7bc1aba08eb7e8fb36fdae9cec6b15f8410dcb.png",
    desc: "A computer vision-based app for changing the color of objects in the real-time mode using a smartphone’s camera.",
    country: "Ukraine",
    flag: "https://www.cleveroad.com/assets/icons/flags/ua.svg",
    coreTech: "Swift",
  },
  {
    img: "https://www.cleveroad.com/images/portfolio/493b0a3068252269848d92f994427c2105ac99149df83c54efcc9484ae33a889.png",
    title: "AR Face Detection App",
    status: "",
    review:
      "https://www.cleveroad.com/images/portfolio/ccbaffb3a8e8ca9e1777bb11e373217d74c7511b2ae2d22dfda639763b129598.png",
    desc: "An AR-based open-source project for face detection developed by Cleveroad",
    country: "Ukraine",
    flag: "https://www.cleveroad.com/assets/icons/flags/ua.svg",
    coreTech: "Kotlin",
  },
];

const webApplications = [
  {
    category: "Progressive web apps",
    desc: "Progressive Web Apps (PWA) are websites with additional benefits for mobile devices. PWAs run on various OS, offering native-app-like functionality — push notifications, last loading, full-screen user experience, and more. We create PWAs that are mobile-focused, available offline, and easy to install on a user’s home screen.",
    tools: ["React", "Cache API", "PRPL Pattern", "HTTP/2 + Server Push"],
  },
  {
    category: "Fast loading SPA",
    desc: "Single-page applications (SPA) update only required content and cache local data to improve the website’s speed. They take some time to load the first time; after that, they load instantly and quickly react to all user actions. SPAs we make are fast, responsive, and work across multiple browsers. No page reloads or too long waiting time.",
    tools: ["AJAX", "HTML5 & CSS 3", "React"],
  },
  {
    category: "Responsive websites",
    desc: "Responsive applications adjust their design to different screen sizes of smartphones, tablets, and other devices. Even if the window is changing in just one pixel, the page will swiftly rearrange its elements. By going responsive, you ensure a great experience for mobile users and save time and money on designing the iOS or Android version of the app.",
    tools: ["CSS Flexbox", "CSS Grid", "Bootstrap"],
  },
];

const webIndustriesExperts = [
  {
    industries: "Healthcare",
    projectsTitle: "The app designed to help people with depression",
    desc: "Web-based EHR/EMR, patient portals, and telehealth applications, secure and HIPAA compliant. To ensure security, we encrypt sensitive information, configure access rights in the database and a firewall, and use Big Data algorithms for data analysis.",
  },
  {
    industries: "Education",
    projectsTitle: "School community software for students and parents",
    desc: "Online course platforms to make education easier, school management systems for teachers, parents, students, and school admins. eLearning software is easy to integrate with any third-party product: from ERP to Google Calendar.",
  },
  {
    industries: "FinTech",
    projectsTitle: "Cryptocurrency app that tracks exchange rates",
    desc: "We meet the needs of FinTech enterprises by developing specialized CRMs that can store and operate customer information, track transactions and improve quality of service, increasing overall business efficiency and customer experience.",
  },
  {
    industries: "Logistics",
    projectsTitle: "A SaaS platform for warehouse management",
    desc: "Custom web apps for managing warehouses, transportation, and supply chain. With different access levels for staff and data protection, tailored to your company's workflow and meant to boost productivity.",
  },
  {
    industries: "Retail",
    projectsTitle: "GA retail platform for back-office management",
    desc: "E-commerce apps with clear interface design, third-party integrations, and payment gateways like Stripe, Braintree, or PayPal. Secure to protect users' data, scalable to expand the app as the business grows.",
  },
  {
    industries: "Travel",
    projectsTitle: "A global network of gyms for travelers",
    desc: "From HMS software to marketplaces for travelers and CRMs for travel agencies. We help to deliver travel apps that run fast, look good, and are easy to integrate with your OTAs (Expedia) and GDSs (Amadeus).",
  },
];

const webAppDevServices = [
  {
    title: "Software consulting",
    desc: "BAs assess your idea, outline features, provide detailed cost and time estimates. Solution Architects help to choose suitable architecture and infrastructure, consult on programming tools and approaches.",
  },
  {
    title: "Custom UI/UX design",
    desc: "We follow Material Design guidelines, ensure page load optimization, and create responsive apps that are easy to use on any device. We make wireframes first, develop 2-3 visual concepts, then design every app screen.",
  },
  {
    title: "Legacy web app modernization",
    desc: "Re-architect old software, migrate to the cloud, add new features, or change the old-fashioned interface to a clear UI. Solution Architects will study your existing software and help to choose the best tools to upgrade it.",
  },
  {
    title: "Custom web app development",
    desc: "Full-cycle web app development service: from getting acquainted with the idea to product release. Our development teams have every tech specialist you may need — developers, UI/UX designers, QA engineers, DevOps.",
  },
];

const webDevProcessAtNext = [
  {
    title: "01 Study the project",
    desc: "We analyze your requirements — project type, features, platforms — then create specification, design, and approve wireframes. In other cases, we study your already-made documentation and provide rough and detailed time & money estimates.",
    team: [
      "Business Analyst",
      "UI/UX designer",
      "QA engineer",
      "Project Manager",
      "Solution Architect",
    ],
  },
  {
    title: "02 Product design",
    desc: "UI/UX designers prepare 2-3 visual concepts to show you how some of the screens will look and let you choose the style. Then we create a style guide with logos, colors, fonts, and other elements and craft the final UI for each screen based on the wireframes made before.",
    team: ["Project Manager", "UI/UX designer"],
  },
  {
    title: "03 Development & testing",
    desc: "Front-end and back-end coding are done in two-week sprints. Software testing goes in parallel with the development: QA engineers do manual checks to make sure the app works as expected and run load and stress tests to see how it copes with high load.",
    team: ["Project Manager", "Web developers", "engineer"],
  },
  {
    title: "04 Launch",
    desc: "Moving software to a live web server and making it available online. DevOps engineers prepare a cloud hosting environment, deploy the web application, then give you access credentials.",
    team: ["Project Manager", "QA engineer", "Web developers", "DevOps"],
  },
  {
    title: "05 Maintenance (per request)",
    desc: "After the application goes online, the development team continues monitoring and improving the software — fixing bugs, adding new features, further scaling, and so on. We provide maintenance services per clients’ request.",
    team: [
      "Project Manager",
      "Developers",
      "UI/UX designer",
      "QA engineer",
      "DevOps",
    ],
  },
];

const webAppsDelivered = [
  {
    img: "https://www.cleveroad.com/static/af185a5a88c4a8154b42e7c6d69ab27a/fe637/web-dev-case-one.webp",
    title: "A platform for connecting designers and manufacturers",
    challange:
      "The client wanted to develop a platform for designers who wish to create their products and look for manufacturers to partner with. The app had to be flexible, with a reliable payment system and user-friendly design.",
    solution:
      "Used Angular 2 and Node.js for scalability, Amazon S3 for storing data. We integrated Stripe and PayPal SDKs for secure payments and used Elasticsearch for in-app search. To let designers and manufacturers chat and get quotations, integrated the Soket.io library.",
    techStack: "Angular, TypeScript, Node.js, MySQL",
    teamSize: "9",
    duration: "6 months",
  },
  {
    img: "https://www.cleveroad.com/static/2b3feb5f4441e0d1bd8fc549bd77053b/7051b/web-dev-case-two.webp",
    title: "A social P2P platform",
    challange:
      "Create a social business platform where everyone can find a specialist or offer their services. We had to adjust quick switching between customer-vendor roles, make intuitive UI/UX design, and remain within the MVP budget.",
    solution:
      "Used Stripe for payments, implemented a real-time tracking of incomes and expenses, and allowed users to make custom estimations with Swagger and EC2. In-app search engine powered by Socket.io and Elasticsearch memorize last requests made by vendors or customers.",
    techStack: "Angular, Node.js, MySQL, WebStorm",
    teamSize: "15 ",
    duration: "12 months",
  },
];

// ui/ux data
const mobileAndWebProducts = [
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/mobile-design.svg",
    title: "Mobile design",
    desc: "Creative and modern design for all screen sizes and platforms: iOS, Android, tablets, watches. We follow guidelines, provide native look and feel and ensure smooth interactions.",
  },
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/web-design.svg",
    title: "Web design",
    desc: "Client-centered web design for laptops, tablets and mobile devices in FullHD quality. We help your shape your Brand identity, ensure page load optimization, and responsiveness of your site.",
  },
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/product-design.svg",
    title: "Product design",
    desc: "We combine thorough trend research and in-depth brand analysis to prototype the future look of your product that will fully comply with your vision, corporate direction and brand design.",
  },
];

const designRecognition = [
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/logo-behance.svg",
    title: "Behance",
    desc: "5 mentions in the Interactive Design tops",
  },
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/logo-designrush.svg",
    title: "Designrush",
    desc: "Top Custom Software Development Company",
  },
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/logo-clutch.svg",
    title: "Clutch",
    desc: "Top 1000 Companies Global 2020",
  },
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/logo-dribbble.svg",
    title: "Dribbble",
    desc: "Top popular team, 5 800+ followers, 300+ shots",
  },
];

const uxuiTimeTestedApproach = [
  "Information architecture",
  "Competitive analysis",
  "Prototyping and testing",
  "Wireframing",
  "Interaction design",
  "Research",
];

const uxuiTimeTestedApproach1 = [
  "Ideate & Mood bord",
  "Branding & Graphics",
  "Colors & Accessibility",
  "Icons & Typography",
  "Layouts & Design system",
  "Visual design",
];

const uiuxDesignProcess = [
  {
    id: "01",
    img: "https://www.cleveroad.com/assets/images/services/design/research.png",
    title: "Research",
    desc: "<div className={`mt-4 leading-relaxed w-full}`><b>Immersion. </b>First off, designers immerse into your business and study its goals, revenue model, target audience, and other aspects.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`><b>Competition. </b>After those two steps, designers analyze similar products on the market and study their layouts, colors, and so on.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`><b>User behavior. </b>The next step is to study how users interact with similar products to increase retention rates and meet customer needs.</div>",
  },
  {
    id: "02",
    img: "https://www.cleveroad.com/assets/images/services/design/wireframing.png",
    title: "Wireframing",
    desc: "<div className={`mt-4 leading-relaxed w-full}`>Wireframing is one of the key parts of product design. Designers create a wireframe for each screen in the app and interconnect them to make a User Journey.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`>After that, they turn the User Journey into a clickable prototype so that customers could experience their app and suggest adjustments if needed.</div>",
  },
  {
    id: "03",
    img: "https://www.cleveroad.com/assets/images/services/design/visual-style.png",
    title: "Visual style",
    desc: "<div className={`mt-4 leading-relaxed w-full}`>Before designers get to the creation of the final UI, they craft two-three visual concepts of one of the screens to show customers how the app will look like and let them choose the style.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Those concepts may differ in colors, fonts, and other graphic elements. If customers have a brand book with a logo and color palette — it’s used for visual style creation.</div>",
  },
  {
    id: "04",
    img: "https://www.cleveroad.com/assets/images/services/design/design-delivery.png",
    title: "Design & Delivery",
    desc: "<div className={`mt-4 leading-relaxed w-full}`>The product design begins. Designers create a UI style guide that keeps logos, colors, fonts, and other design elements. It helps designers and developers follow the chosen style. After that, designers create the final UI for each screen based on the wireframes crafted before.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Once all screens are ready, they’re passed over to developers along with icons and other graphic elements used for design.</div>",
  },
];

const faqsUIUX = [
  {
    question: "What are the benefits of web design services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>By opting for web design services, you get a high-quality product tailored to your specific business needs. It's cost- effective, fast, and you get a great result: a client - centered web design, page load optimization, responsiveness, and many more.</span>",
  },
  {
    question: "Why do small businesses need web design services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>Because it's a good investment.A well- designed and mobile - friendly website will stand out and get more conversions, and that's how you can grow your business.</span>",
  },
  {
    question: "What is included in mobile design services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>Our mobile app design services include a user interface (UI) and user experience (UX) designing. We create the overall style of the app, including logo, colors, fonts, and other graphic elements.<br><br>First, we make <strong>wireframes</strong>, then develop <strong>2-3 visual concepts</strong>, design the app screen by screen, and create a <strong>clickable prototype</strong>.</span>",
  },
  {
    question: "Why do you need professional web design services?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>Because professional designers do the job better and faster. They have more experience, expertise, know possible pitfalls and how to avoid them. They can raise your web design quality, making your site more attractive and engaging.</span>",
  },
  {
    question: "What do web design services involve?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`><strong>First</strong>, we study your goals and gather requirements, analyze user behavior, and look through existing solutions on the market.<br><br><strong>Next</strong>, we create wireframes – layouts that show where elements are placed – in Sketch and InVision.<br><br><strong>Finally</strong>, we develop two or three visual concepts you can choose from, design the website screen by screen, and present its clickable prototype.</span>",
  },
  {
    question: "How much do mobile design services cost?",
    answer:
      "<span className={`mt-4 leading-relaxed text-gray-700 w-full}`>It depends on how complex your app is: how many features it has and how many screens we must design, whether you need native-made or custom design, want to include animation, and so on.<br><br>The best way to figure out the cost is to <a href={`/contact`}>contact</a> our BA team.</span>",
  },
];

const designInsights = [
  {
    id: "23565",
    category: "Client Guides",
    title: "A-CSPO Accreditation of Cleveroad",
    img: "https://www.cleveroad.com/images/article-previews/374305588654f3ba9aeadacdb3bdf0e806061e4812ef2f91cea3c206cc6c1248.png",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "97768",
    category: "Client Guides",
    title: "How to Create an App for Your Business in 2022",
    img: "https://www.cleveroad.com/images/article-previews/fd6aa821252d39f64770c4f2ae31212d5d3832a5b0ab2c05e5f1bc8d5158852d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "45675",
    category: "Client Guides",
    title: "Benefits of Warehouse Inventory Management System",
    img: "https://www.cleveroad.com/images/article-previews/5249b89d23582287a1b288400f110c88c4d2e63dff5c3cdca01027ce4d09728b.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 22, 2022",
    desc: "",
    linkToPost: "",
  },
];

const whatWeTest = [
  {
    title: "Mobile",
    desc: "Mobile testing refers to native and cross-platform mobile applications. QA engineers test User Interface, code logic, and compatibility with various devices",
  },
  {
    title: "Web",
    desc: "This type of testing covers web applications and other web-related solutions. QA engineers check User Interface, compatibility with various browsers and screen resolutions.",
  },
  {
    title: "Backend",
    desc: "QA engineers perform backend testing to check a backend or database. Backend testing also implies examining if business logic and third-party services work correctly.",
  },
];

const typesOfTesting = [
  {
    type: "Functional Testing",
    desc: "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Functional testing lets us analyze a separate part of the application within the context of the entire application. This testing ensures that the system does what users are expecting it to do.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`>In other words, we test the business logic of a product to make sure all the functional objectives are met, and the app or website performs the functionality it is supposed to.</div>",
  },
  {
    type: "Non-functional",
    desc: "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`>It includes user interface, performance, and usability testing.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`>This type of testing is performed to check the following: how well the product that is being implemented complies with design requirements, level of its usability compared to competitors, and how many users can interact with the product simultaneously.</div>",
  },
  {
    type: "Unit & Integration",
    desc: "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Unit testing is typically applied for small units of code representing individual functions. The main task of this testing type is to make sure that those code units are fit for use.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Integration testing is intended to identify how various components of the software interact with each other. For instance, it can show whether the payment system was integrated correctly into the product or not.</div>",
  },
  {
    type: "Usability testing",
    desc: "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`>It aims to compare the usability of the proposed design with designs of other similar apps or websites. Correspondingly, the main task of this testing is to find out the weak sides of the product’s usability.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`>To perform usability testing, our QA engineers compare the product’s usability with the biggest competitors in a niche this app or website belongs to.</div>",
  },
  {
    type: "Load & Performance",
    desc: "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Load testing is executed to find out how many users can interact with the system simultaneously. In other words, it identifies the maximum number of users the app or website can handle.</div><div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Performance testing includes various tests that are intended to check how the product behaves and performs. Those tests are written to examine stability, reliability, speed, and many other parameters.</div>",
  },
];

const testingProcess = [
  {
    id: "1",
    title: "Planning",
    desc1:
      "QA engineers analyze project requirements to eliminate any logic-related issues and identify inaccuracies. Such a revision helps us prevent our clients from spending extra money making changes to requirements during the development phase. Next, the functionality that will be implemented during the following sprint is picked by the entire development team.",
    percentage: "10%",
    desc2: "This stage takes from the overall testing time",
  },
  {
    id: "2",
    title: "Test Plan",
    desc1:
      "This stage involves defining the software testing objectives and drawing up a test specification. In simple terms, QA engineers plan out what they should test and how they should test it. Also, they determine criteria according to which a software is considered ready for the next development phase or sprint.",
    percentage: "10%",
    desc2: "This stage takes from the overall testing time",
  },
  {
    id: "3",
    title: "Software testing",
    desc1:
      "QA engineers get to work and start testing the functionality that was implemented during each sprint. The main task of this stage is to find bugs, create bug reports for developers, and revise the code once more time after the fixes are made. In other words, QA engineers make sure that all the project requirements are adequately met.",
    percentage: "60%",
    desc2: "This stage takes from the overall testing time",
  },
  {
    id: "4",
    title: "Regression, load, smoke testing",
    desc1:
      "Regression testing stands for an in-depth examination and is performed to ensure that new changes do not break anything in old functionality. What concerns the load testing, it is intended to find out how the software performs under normal conditions. Talking about smoke testing, it is performed to check the workability of the product’s most vital functions.",
    percentage: "20%",
    desc2: "This stage takes from the overall testing time",
  },
];

const faqsQA = [
  {
    question: "What is software testing as a service?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Testing as a service means you're delegating software testing activities to an outsourcing company. It means third-party contractors are responsible for checking the quality of your software, its usability, finding bugs, and so on.</div>",
  },
  {
    question: "What activities are included in software testing services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`><p>We perform seven types of software testing</p><ul>    <li><strong>Functional testing.</strong> Test the business logic to make sure that the app works as expected.</li><li><strong>Non-functional.</strong> Check how well the product complies with design requirements, its usability level, how many people can use the product at the same time.</li><li><strong>Unit testing.</strong> Test whether each function works as designed.</li><li><strong>Integration testing.</strong> Check how components interact with each other.</li><li><strong>Usability.</strong> Compare the proposed design with designs of other similar products.</li><li><strong>Load testing.</strong> Find out how many users can interact with the system at the same time.</li><li><strong>Performance.</strong> Check the product's speed, stability, reliability.</li></ul></div>",
  },
  {
    question: "What are the different types of software testing services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`>Software developers, even the most skilled ones, are people. They could miss a bug or forget about making some checks. That's why you need QA services: to make sure the product has no bugs, meets all requirements, copes with high loads, and so on. When software is tested, you feel confident to use it.</div>",
  },
  {
    question:
      "What type of software testing services are usually preferred - manual or automated?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`>They are both great and widely used. Manual testing works for any-size software, but if you're dealing with large-scale products with a high demand for quality, it's better to automate the testing process.</div>",
  },
  {
    question: "What is the importance of software testing services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full}`><div>Crucial. Software testing helps to point out the defects made during the development, uncover bugs, make sure the product works as it is supposed to, and many more.</div><br><div>Basically, no software should make it to the production server or app marketplaces without QA checking it.</div></div>",
  },
  {
    question:
      "What are the different tests involved in software testing services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}><div>QA tests are divided into manual and automated. <strong>Manual</strong> software testing works for the following tests:</div><ul><li>        Adhoc testing</li><li>Exploratory testing</li><li>Usability testing</li><ul><div>Tests that could be <strong>automated</strong> include:</div><ul><li>Regression testing</li><li>Stress/load testing</li><li>End-to-end testing</li></ul></ul></ul></div>",
  },
];

// DEVOPs data
const reliableDevOpsSevices = [
  {
    title: "Infrastructure as a Code",
    desc: [
      "Stay consistent with the unified infrastructure setup",
      "Onboard new staff with clear documentation reducing related risks",
      "Accelerate development with easily deployable architectures",
      "Save costs minimizing manual work of engineers",
    ],
  },
  {
    title: "Delivery Pipeline and CI/CD",
    desc: [
      "Accelerate release time recognizing issues in early stages",
      "Know exactly how much time you need to recover from failure with MTTR",
      "Convert more users into customers with a bug-free experience",
    ],
  },
  {
    title: "Monitoring and alerting",
    desc: [
      "Track system’s uptime and availability",
      "Build transparency over the product’s health for multiple teams and business units",
      "Avoid false alerts with well-configured, automated systems",
    ],
  },
  {
    title: "Cloud computing",
    desc: [
      "Build a cloud-based platform or infrastructure",
      "Get cloud consultancy",
      "Optimize cloud expenses",
      "Get help with cloud migration",
    ],
  },
  {
    title: "Configuration management",
    desc: [
      "Scale infrastructure and software systems, not staff to manage it",
      "Take a step back anytime an emergency happens with recoverable assets",
    ],
  },
  {
    title: "Secure infrastructure",
    desc: [
      "Stay on the safe side with Firewall as a Service",
      "Detect and prevent web attacks and intrusions",
      "Run security tests",
    ],
  },
];

const devOpsValues = [
  {
    title: "Speed",
    desc: "Accelerate time to market with best DevOps practices",
  },
  {
    title: "Updates",
    desc: "Inject new code and features on the fly to reduce release time",
  },
  {
    title: "Costs",
    desc: "Cut expenses avoiding unplanned engineering work",
  },
  {
    title: "Security",
    desc: "Adopt a security-first approach to predict and eliminate issues",
  },
  {
    title: "Time",
    desc: "Delegate routine tasks to DevOps to free up developers’ time",
  },
  {
    title: "Competition",
    desc: "Respond to market changes lightning-fast to win more users",
  },
];

const faqsDevOps = [
  {
    question: "What are DevOps services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>DevOps is an approach that combines different practices and tools to increase the overall organization’s efficiency in delivering apps and services faster. <br><br>Here are some types of DevOps services we provide at Cleveroad:<ul><li>DevOps consulting</li><li>AWS/GCP</li><li>CI/CD</li><li>Container management</li><li>Infrastructure as a Service</li></ul></div>",
  },
  {
    question: "What is the definition of DevOps services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>DevOps services are a combination of culture, practices, and tools. The main goal it follows is to increase an organization’s speed and efficiency in delivering services and applications.</div>",
  },
  {
    question: "What are the types of DevOps services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Here are some types of DevOps services we provide at Cleveroad:<ul><li>DevOps consulting</li><li>AWS/GCP</li><li>AWS managed services</li><li>CI/CD</li><li>Container management</li><li>Infrastructure as a Service</li><ul></ul></ul></div>",
  },
  {
    question: "What are DevOps managed services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>DevOps managed services are those services that help companies find out their vulnerable areas to improve code and improve their services continuously.</div>",
  },
  {
    question: "Why DevOps services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>With DevOps services, you can reduce the time needed for testing and updating your project. Thus, you cut the time to market time without sacrificing quality or reliability. DevOps also brings standardization of development environment which also affects the final product quality and development pace.</div>",
  },
  {
    question: "What services can be deployed using DevOps?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Here are some services the DevOps approach can bring to your project:<ul><li>Quality control</li><li>Accelerated development speed</li><li>Scalability</li><li>Continuous Integration/Continuous Development (CI/CD)</li></ul></div>",
  },
];

const devOpsInsights = [
  {
    id: "95656",
    category: "Client Guides",
    title: "Tips to Build Mobile E-commerce App",
    img: "https://www.cleveroad.com/images/article-previews/2eb3cf03d767b198cbe1901885b377587d641bb6d8b542a8b38545571b10e2d1.jpg",
    author: "Diana Bestaieva",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "45676",
    category: "Client Guides",
    title: "Big Data eCommerce system for retail business",
    img: "https://www.cleveroad.com/images/article-previews/AAAAAAA-1.jpg",
    author: "Daria R.",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "65687",
    category: "Client Guides",
    title: "How to build a eCommerce mobile app",
    img: "https://www.cleveroad.com/images/article-previews/from-ecommerce-to-mobile-commerce-shopping-at-a-high-tech-level-4.png",
    author: "Marina Ch.",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
];

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    title: "Photo caption 1",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    title: "Photo caption 2",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    title: "Photo caption 3",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    title: "Photo caption 4",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    title: "Photo caption 5",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    title: "Photo caption 6",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    title: "Photo caption 7",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    title: "Photo caption 8",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    title: "Photo caption 9",
    desc: "Donec luctus, risus a ornare ultrices, lacus ligula pellentesque massa, sit amet elementum libero ac ipsum. Nulla facilisi. Morbi nec mattis interdum augue nulla.",
    width: 4,
    height: 3,
  },
];

const iOSAppsExcel = [
  {
    category: "Rideshare",
    desc: "Ridesharing apps usually consist of two separate in-app roles or apps: Driver’s and Passenger’s. Besides basic functionality, ridesharing apps require map APIs (Google Maps, MapKit), payment gateways (Stripe, PayPal), and in-app calling feature integration (Twilio, Bandwith).",
    time: "2200 hours",
    duration: "6 months",
  },
  {
    category: "Streaming",
    desc: "When creating media streaming apps, we take care of seamless content delivery and work with trustful media processing platforms. Streaming apps require live video sharing (Livestream, Brightcove), in-app payments (PayPal, Stripe), local storage (Core Data, Storage), etc.",
    time: "2300 hours",
    duration: "7 months",
  },
  {
    category: "Marketplace",
    desc: "Marketplace apps usually act as intermediaries between two parties: buyer and seller of goods or services. Consider such features as in-app search (Elastic Search), instant messaging (Firebase), payment system integration (Stripe, PayPal, Braintree), and others.",
    time: "1500 hours",
    duration: "4 months",
  },
  {
    category: "Healthcare",
    desc: "Our software engineers build healthcare apps of any complexity: from nutrition apps to personal workout and activity tracking apps. Main features can be sync with Apple Health and Apple Watch (HealthKit), geolocation (Google Maps, MapKit), etc.",
    time: "1800 hours",
    duration: "4 months",
  },
  {
    category: "Education",
    desc: "We build innovative education iOS apps: from platforms for finding a mentor to iPad apps for educational institutions and more. To do this, we use the latest technologies like Augmented Reality (ARKit), Apple Pencil (UIKit), and other company inventions.",
    time: "1600 hours",
    duration: "4 months",
  },
];

const techForAdvanceIOSApps = [
  {
    title: "Big Data",
    desc: [
      "Big data architecture design",
      "Apache Spark and Hadoop",
      "HDFS, Hive, Pig, Impala, Oozie",
      "EMR, Redshift",
    ],
  },
  {
    title: "Media Expertise",
    desc: [
      "Live Streaming and OTT delivery",
      "Video Processing",
      "Content Distribution Networks",
      "Web RTC, FFMPEG, Wowza, DRM",
    ],
  },
  {
    title: "Apple Resources",
    desc: [
      "Frameworks: CarPlay, 3D Touch, Adaptivity",
      "App Services: Apple Pay, HealthKit, HomeKit, CloudKit",
      "Media and Web: MapKit JS, Live Photos, AVFoundation",
      "Graphics and Games: ARKit, SceneKit, OpenGL",
    ],
  },
  {
    title: "Computer vision",
    desc: [
      "Image processing",
      "Deep Learning OCR: Keras, Supervisely",
      "Face recognition: Eigenfaces, LEM, Facial morphology analysis",
      "Face Detection: HOG, SVM",
      "OpenCV, Kairos, Luxand Face",
    ],
  },
  {
    title: "ML & AI",
    desc: [
      "Self-taught algorithms recognize user activities",
      "Artificial neural networks",
      "NLP software development",
      "Azure ML, Google Cloud Prediction TensorFlow",
    ],
  },
  {
    title: "IoT Expertise",
    desc: [
      "Protocols: NFC, Wi-Fi, Bluetooth, LPWAN, IPv6 over LoWPAN",
      "Сommunication Security (TLS, DTLS) and Data Encryption",
      "Artik module, Raspberry Pi, Arduino",
      "AWS: Lambda, Kinesis, S3, SageMaker, Sumerian",
    ],
  },
];

const iOSTechstack = [
  {
    techCategory: "Languages",
    techData: [
      {
        tool: "Swift",
        icon: "",
        desc: "Swift is a robust programming language backed by Apple that allows creating top-notch and fast applications for all Apple operating systems. Safety, simplicity, and permanent performance enhancements make iOS app development with Swift an ideal solution for building iOS apps of any complexity.",
        text1Head: "2.6x",
        text1: "faster than Objective-C",
        text2Head: "8.4x",
        text2: "faster than Python",
      },
      {
        tool: "Objective-C",
        icon: "",
        desc: "This object-oriented programming language has been actively using for iOS app development for over 30 years. This fact alone makes Objective-C reliable as millions of lines of code are written on it. In addition, this code is backward compatible with C and C++ languages.",
        text1Head: "2M+",
        text1: "apps built",
        text2Head: "30%",
        text2: "apps built",
      },
    ],
  },
  {
    techCategory: "Databases",
    techData: [
      {
        tool: "CoreData",
        icon: "",
        desc: "CoreData framework makes it possible to speed up the iOS application development process. CoreData simplifies memory management since developers load into memory only those objects they use at the moment. Integrating sorting of objects and optional automatic validation of property values help the app work with a database.",
        text1Head: "30%",
        text1: "faster data loading",
        text2Head: "+40%",
        text2: "developers’ efficiency",
      },
      {
        tool: "Realm",
        icon: "",
        desc: "Realm is a popular mobile database for every iOS app development platform and also for Android. It’s incredibly rapid (much more rapid than SQLite), cross-platform, thread-safe, and has an easy-to-use API. The developers call it a contemporary and reliable substitute for the native Apple’s databases.",
        text1Head: "+30%",
        text1: "app performance",
        text2Head: "75,921",
        text2: "apps worldwide",
      },
      {
        tool: "Firebase",
        icon: "",
        desc: "This Backend-as-a-Service platform frees developers from such backend work as managing servers and writing APIs and lets them focus on building the top-notch user experience. Being almost an all-in-one backend solution, Firebase helps to speed up the iOS native app development.",
        text1Head: "1M+",
        text1: "developers use Firebase",
        text2Head: "+30%",
        text2: "developers’ efficiency",
      },
    ],
  },
  {
    techCategory: "FRP and networking",
    techData: [
      {
        tool: "RxSwift",
        icon: "",
        desc: "RxSwift library is based on top of Swift and simplifies the development of dynamic apps for iOS engineers. Among the main advantages of this library are asynchrony, clean code, architecture, etc. All it results in faster and more efficient iOS application development services and problem-solving.",
        text1Head: "14k+",
        text1: "stars on GitHub",
        text2Head: "+30%",
        text2: "developers’ efficiency",
      },
      {
        tool: "ReactiveCocoa",
        icon: "",
        desc: "ReactiveCocoa is a framework that allows using reactive functional programming techniques for custom iOS application development. It offers bindings and reactive extensions for the Cocoa Touch framework to make code much shorter. Tailored to Swift, the framework defines the interface for events, making it easier to filter and compose them.",
        text1Head: "20%",
        text1: "faster development",
        text2Head: "+30%",
        text2: "developers’ efficiency",
      },
      {
        tool: "Alamofire",
        icon: "",
        desc: "Alamofire is a well-tested and reliable library for all Apple platforms. It’s designed for working with HTTP requests. Alamofire significantly boosts developer productivity because it simplifies a number of routine tasks for iOS application development companies. It makes the code cleaner that helps to decrease the possibility of bugs.",
        text1Head: "-20%",
        text1: "bugs occurrence",
        text2Head: "10%",
        text2: "faster development",
      },
      {
        tool: "Moya",
        icon: "",
        desc: "Moya is a network abstraction library to work with network data and for quick project integration with RESTful API. Moya allows the iOS application development company to focus on main application features and speed up the implementation of networking data. Using Moya, developers extract network responses to perform unit tests efficiently.",
        text1Head: "40%",
        text1: "faster API manager integration",
        text2Head: "30%",
        text2: "development time optimization",
      },
      {
        tool: "Socket.io",
        icon: "",
        desc: "Socket.io framework enables real-time data exchange and communication. It improves and accelerates the integration of chats and video chats to iOS apps. Socket.io has many automated processes for easy communication feature integration. Flexible and simple customization helps iOS app development agency implement their task faster.",
        text1Head: "191k+",
        text1: "websites worldwide",
        text2Head: "40%",
        text2: "faster chat integration",
      },
    ],
  },
  {
    techCategory: "CI/CD",
    techData: [
      {
        tool: "Fabric",
        icon: "",
        desc: "This platform provides developers with smart solutions, helping them provide better iOS development services. Fabric facilitates dealing with crash reporting, deployment, beta distribution, and more. Put simply, this tool saves precious time and gives developers more control over their apps.",
        text1Head: "580K",
        text1: "developers use Fabric",
        text2Head: "10%",
        text2: "efficiency increase",
      },
      {
        tool: "Fastlane",
        icon: "",
        desc: "Fastlane facilitates the process of iOS apps deployment. This tool uploads a beta version of the app to the selected beta service. It automates the entire app store deployment process: Fastlane generates localized screenshots, uploads metadata, stores code signings, and automatically submits new versions of the iOS app.",
        text1Head: "65%",
        text1: "faster deployment process",
        text2Head: "30%",
        text2: "faster unit testing",
      },
    ],
  },
];

const faqsiOS = [
  {
    question: "How much do iOS app development services cost?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>It depends on your app’s complexity: custom UI/UX design, number of features, backend infrastructure, and so on. You can find a full list of factors in our <a href={`https://www.cleveroad.com/blog/how-much-does-it-cost-to-create-an-app`>guide</a>.<br><br>If you want to know how much your app is going to cost, please <a href={`/contact`}>contact</a> our Business Analysts, describing your idea.</div>",
  },
  {
    question: "How long do iOS development services take?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Again, it depends on your app’s complexity. A basic ecommerce app may take ~300h, while a complex Uber-like iOS app takes ~762h (numbers are <strong>approximate</strong>).<br><br>If you want to know how long it takes to build your app, please <a href={`/contact`}>contact</a> our Business Analysts.</div>",
  },
  {
    question:
      "Do you provide maintenance and support as a part of iOS development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>We guarantee that you are covered for all possible bugs and other malfunctions missed by our team.<br><br>We also offer extended maintenance periods that ensure you being covered after the project release.</div>",
  },
  {
    question: "What are the steps involved in iOS app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>We follow these steps:<ul><li><strong> Business analysis.</strong> We gather and analyze all the project requirements and document them.</li><li><strong> UI/UX design.</strong> Create wireframes, design the app screen by screen, and make a prototype.</li><li><strong>Development.</strong> Build custom iOS apps using programming languages like Swift and Objective-C.</li><li><strong>Release.</strong> Publish apps on the App Store.</li><li><strong>Maintenance.</strong> Support or enhance existing products (if requested).</li></ul></div>",
  },
  {
    question: "How to choose iOS application development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>When choosing an iOS app development service provider, pay attention to: <ul><li><strong>Expertise:</strong> portfolio, industries they work in, how long they’ve been working for.</li><li><strong>Reviews:</strong> on Clutch, GoodFirms, or similar services.</li><li><strong>Tech stack:</strong> it should include programming languages Objective-C and Swift, app-building tools (Fabric, Fastlane), databases (CoreData, Realm, Firebase), and so on. </li></ul></div>",
  },
  {
    question:
      "What services do the iOS application development services include?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Our iOS app development services include:<ul><li>Business analysis</li><li>UI/UX design</li><li>Development</li><li>Release</li><li>Maintenance (if requested)</li></ul></div>",
  },
];

const iOSDevInsignts = [
  {
    id: "97768",
    category: "UI/UX Design",
    title: "How to Create an App for Your Business in 2022",
    img: "https://www.cleveroad.com/images/article-previews/fd6aa821252d39f64770c4f2ae31212d5d3832a5b0ab2c05e5f1bc8d5158852d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "45675",
    category: "Client Guides",
    title: "Benefits of Warehouse Inventory Management System",
    img: "https://www.cleveroad.com/images/article-previews/5249b89d23582287a1b288400f110c88c4d2e63dff5c3cdca01027ce4d09728b.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 22, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Next Horizon",
    title: "Tips to Build Mobile E-commerce App",
    img: "https://www.cleveroad.com/images/article-previews/2eb3cf03d767b198cbe1901885b377587d641bb6d8b542a8b38545571b10e2d1.jpg",
    author: "Diana Bestaieva",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Client Guides",
    title: "Big Data eCommerce system for retail business",
    img: "https://www.cleveroad.com/images/article-previews/AAAAAAA-1.jpg",
    author: "Daria R.",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
];

const androidAppsBuilt = [
  {
    category: "Streaming",
    desc: "Live streaming and Video-on-demand applications should be focused on seamless content delivery. The integration of CDN and Brightcove enhances asset delivery while PayPal, Stripe, or Braintree handle payments.",
    time: "2300 hours",
    duration: "7 months",
  },
  {
    category: "Travel",
    desc: "Applications for travel and hospitality are data-driven and usually have a rich feature set to meet user preferences. They often have a search engine (Elastic Search), custom push notifications (Amazon SNS), and payments (Stripe, Braintree).",
    time: "1800 hours",
    duration: "4 months",
  },
  {
    category: "Agriculture",
    desc: "Our custom Android app development company creates mobile solutions for agribusiness. Such applications usually have GPS integration based on Beacons and Location services along with real-time access to USDA-NRCS, field monitoring, etc.",
    time: "2500 hours",
    duration: "6 months",
  },
  {
    category: "Retail",
    desc: "Android applications for retail can solve a range of problems. The proper development approach can turn any Android device into a POS system or MSR device. It means you can solve business problems with an easy-to-use mobile app.",
    time: "2000 hours",
    duration: "5 months",
  },
  {
    category: "Warehouse",
    desc: "Optimize warehouse workflows with applications tailored to your processes. Android devices can become a barcode scanner (EAN-13, EAN-8, UPC-A, UPC-E, QR) or a handheld device to manage your assets better.",
    time: "3500 hours",
    duration: "9 months",
  },
  {
    category: "Fitness",
    desc: "This wide category includes nutrition applications along with workout and activity tracking apps. Fitness applications typically support sync with Google Fit via its SDK, are adjusted for wearables, and have mapping features based on Google Maps Platform.",
    time: "1800 hours",
    duration: "4 months",
  },
];

const techForAdvanceAndroidApps = [
  {
    title: "Big Data",
    desc: [
      "Big data architecture design",
      "Apache Spark and Hadoop",
      "HDFS, Hive, Pig, Impala, Oozie",
      "EMR, Redshift",
    ],
  },
  {
    title: "Media Expertise",
    desc: [
      "Live Streaming and OTT delivery",
      "Video Processing",
      "Content Distribution Networks",
      "Web RTC, FFMPEG, Wowza, DRM",
    ],
  },
  {
    title: "Warehouse and inventory",
    desc: [
      "Indoor positioning: Wi-Fi RTT, Indoorway, Navizon",
      "Barcode: Google Vision API (Barcode API)",
      "Android Things: Cloud IoT Core, TensorFlow",
    ],
  },
  {
    title: "Computer vision",
    desc: [
      "Image processing",
      "Deep Learning OCR: Keras, Supervisely",
      "Face recognition: Eigenfaces, LEM, Facial morphology analysis",
      "Face Detection: HOG, SVM",
      "OpenCV, Kairos, Luxand Face",
    ],
  },
  {
    title: "Google Resources",
    desc: [
      "Architecture: Room, ViewModel, LiveData, and Lifecycle",
      "Media and Web: media-compat library, ExoPlayer, PWA",
      "Graphics and Games: Palette API, Glide, OpenGL ES",
      "Sensors, Multi-window mode, Conversational Actions",
    ],
  },
  {
    title: "IoT Expertise",
    desc: [
      "Protocols: NFC, Wi-Fi, Bluetooth, LPWAN, IPv6 over LoWPAN",
      "Сommunication Security (TLS, DTLS) and Data Encryption",
      "Artik module, Raspberry Pi, Arduino",
      "AWS: Lambda, Kinesis, S3, SageMaker, Sumerian",
    ],
  },
];

const androidTechstack = [
  {
    techCategory: "Languages",
    techData: [
      {
        tool: "Java",
        icon: "",
        desc: "This general-purpose language can be applied for numerous tasks, including Android app development. The main advantages of Java are portability, scalability, and excellent performance, making it a perfect language for developing complex enterprise applications requiring room for growth.",
        text1Head: "3B",
        text1: "devices run Java",
        text2Head: "30%",
        text2: "more performant",
      },
      {
        tool: "Kotlin",
        icon: "",
        desc: "The new open-source programming language that Google uses to replace Java for building Android apps. It has clear syntax and can be compiled to JavaScript or JVM bytecode easily. Due to integration with all Java frameworks and libraries, the app development process goes faster and gives developers more tools to build native Android apps.",
        text1Head: "30%",
        text1: "More maintainable functionality",
        text2Head: "2.08%",
        text2: "of all app downloads in Google Play",
      },
    ],
  },
  {
    techCategory: "Databases",
    techData: [
      {
        tool: "SQLite",
        icon: "",
        desc: "It is a lightweight database geared toward getting rid of server-client architecture and storing all the app data directly on a mobile device. This DB is based on files, so it provides a wide range of capabilities for developers. Since SQLite doesn’t send requests to the server, it is much more powerful and faster.",
        text1Head: "11th",
        text1: "top database",
        text2Head: "35%",
        text2: "Faster Than The Filesystem",
      },
      {
        tool: "Realm",
        icon: "",
        desc: "Realm is a popular mobile database for every iOS app development platform and also for Android. It’s incredibly rapid (much more rapid than SQLite), cross-platform, thread-safe, and has an easy-to-use API. The developers call it a contemporary and reliable substitute for the native Apple’s databases.",
        text1Head: "+30%",
        text1: "app performance",
        text2Head: "75,921",
        text2: "apps worldwide",
      },
      {
        tool: "Firebase",
        icon: "",
        desc: "This Backend-as-a-Service platform frees developers from such backend work as managing servers and writing APIs and lets them focus on building the top-notch user experience. Being almost an all-in-one backend solution, Firebase helps to speed up the iOS native app development.",
        text1Head: "1M+",
        text1: "developers use Firebase",
        text2Head: "+30%",
        text2: "developers’ efficiency",
      },
    ],
  },
  {
    techCategory: "Framework",
    techData: [
      {
        tool: "RxJava",
        icon: "",
        desc: "RxJava is a specific implementation of reactive programming for Java and Android, an open-source library with Observer patterns and iterator patterns that help build good software with front-end and back-end parts. It offers developers intuitiveness, extensions, quick reaction to any changes.",
        text1Head: "20%",
        text1: "Faster compilation",
        text2Head: "10%",
        text2: "Faster performance",
      },
      {
        tool: "Roboelectric",
        icon: "",
        desc: "This open-source Android unit test framework allows QA specialists to launch tests for Android apps via local JVM. This Android app test type is similar to black-box testing, and the test can become more efficient for refactoring, and the app's behavior can be tested as well. The framework makes the testing process faster.",
        text1Head: "30%",
        text1: "Faster testing process",
        text2Head: "40%",
        text2: "Higher efficiency",
      },
      {
        tool: "JUnit",
        icon: "",
        desc: "JUnit is an open-source unit testing framework in the Java language. It provides an incredible opportunity to write code and test it simultaneously! This framework can create test suites step by step to trace all possible side effects thoroughly. Thus, it is mighty, and its graphical interface makes the whole testing process simpler.",
        text1Head: "+30%",
        text1: "Faster testing",
        text2Head: "+40%",
        text2: "improved bug detection",
      },
      {
        tool: "Mockito",
        icon: "",
        desc: "It is a mocking framework for effective unit testing of Java applications. This tool facilitates creating mock objects and allows programmers to verify the system's behavior under test without establishing expectations beforehand. As a result, you will get a simpler test code that is much easier to read and edit.",
        text1Head: "7.2K",
        text1: "stars on GitHub",
        text2Head: "25%",
        text2: "faster testing process",
      },
      {
        tool: "Espresso",
        icon: "",
        desc: "Espresso is an automation tool created by Google. This framework is used to write concise and reliable UI tests and has many advantages for developers and QA engineers, so it dramatically accelerates the development process. It is easy to use within popular IDEs and provides useful testing annotations and assertions.",
        text1Head: "7.2K",
        text1: "stars on GitHub",
        text2Head: "25%",
        text2: "faster testing process",
      },
    ],
  },
];

const fAQsAndroid = [
  {
    question:
      "What are the steps involved in Android app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>We follow these steps:<ul><li><strong> Business analysis.</strong> We gather and analyze all the project requirements and document them.</li><li><strong> UI/UX design.</strong> Create wireframes, design the app screen by screen, and make a prototype.</li><li><strong>Development.</strong> Build custom Android app using programming languages like Java and Kotlin.</li><li><strong>Release.</strong> Publish apps on Google Play.</li><li><strong>Maintenance.</strong> Support or enhance existing products (if requested).</li></ul></div>",
  },
  {
    question:
      "What are the top things to note while choosing Android app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Top things to check when choosing a mobile app development company:<ol style={`list-style: decimal`}><li>Portfolio</li><li>Client reviews on platforms like Clutch, GoodFirms, or Upwork</li><li>Development methodology – Agile is today’s gold standard</li><li>Development tools and programming languages</li><li>GitHub</li><li>Project management tools</li></ol></div>",
  },
  {
    question:
      "What is the time duration required for Android app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>It depends on your app’s complexity and whether you have any specific requirements.<br><br>If you want to know how much time your Android app is going to take, please <a href={`/contact`}>contact</a> our Business Analytics, describing your idea.</div>",
  },
  {
    question: "What services are included in Android application development?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Android app development services include:<ul><li>Business analysis</li><li>UI/UX design</li><li>Development</li><li>Release</li><li>Maintenance (if requested)</li></ul></div>",
  },
  {
    question:
      "What should key factors be considered before selecting Android app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Before choosing a mobile app development company, make sure they have enough expertise:<ul><li>Check their portfolio</li><li>Talk to their previous clients and take their feedback</li><li>Make sure the company provides additional services like UI/UX design or QA testing</li><li>Check their tech stack </li></ul></div>",
  },
  {
    question: "Why are Android app development services necessary?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Because Android is the <a href={`https://www.statista.com/statistics/272698/global-market-share-held-by-mobile-operating-systems-since-2009/`}>most popular</a> mobile OS in the world. By opting for mobile app development for Android, you help your idea reach a wider audience.</div>",
  },
];

const androidDevInsignts = [
  {
    id: "24312",
    category: "Technologies",
    title: "Full guide on creating location-based AR app",
    img: "https://www.cleveroad.com/images/article-previews/a598ce63f4b3a7e4f13968e966c506e2982cb124fe3c8614885ad4a7b84bc495.png",
    author: "Oleksandr Sh.",
    postDate: "Aug 18, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "13414",
    category: "UI/UX Design",
    title: "Instagram-like app development cost",
    img: "https://www.cleveroad.com/images/article-previews/939b97e476b95be9285b0da449f7af8f9c8cd4fb76883414a119372d3573ac29.png",
    author: "Diana Chabanovska",
    postDate: "Aug 11, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "12341",
    category: "Case Studies",
    title: "How to Build a Health Insurance Mobile App and Benefit From It",
    img: "https://www.cleveroad.com/images/article-previews/8909170efe223adeabbe06bb247bac159fa3157d0328ee6064c71c85b1f351c9.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
];

const flutterProjectsCompanies = [Alibaba, ebay, Google, Grab, Groupon, Square];

const businessBenifits = [
  "Quicker time to market",
  "Fewer resources spent to validate ideas",
  "MVP development goes faster",
  "Native-like app experience for users",
  "Beautiful User Interface on any screen",
];

const techBenifits = [
  "Impressive performance",
  "Approximately 50% less time on testing",
  "One codebase for iOS and Android apps",
  "Support for Apple and Google design guidelines",
  "Faster production of new features",
];

const flutterExperience = [
  {
    title: "GitHub open-source library",
    icons: [
      {
        icon: <AiFillGithub />,
        title: "GitHub",
      },
    ],
    img: "https://www.cleveroad.com/static/d51a8dbbb9574d8fce30e1f911509e23/818e7/flutter-one.webp",
    desc: "<div className={`mt-4 leading-relaxed w-full}`><p>We’ve updated our warmly welcomed Sliding Tutorial library with 2,5K stars on GitHub to support Flutter.</p><p>This open-source library will help you create onboarding screens for iOS and Android using the parallax effect. The library was built with the support of Flutter elements in mind to look natural in design.</p></div>",
  },
  {
    title: "Сrowd-sourced review app for travelers",
    icons: [
      {
        icon: <AiFillApple />,
        title: "App Store",
      },
      {
        icon: <FaGooglePlay />,
        title: "Google Play",
      },
    ],
    img: "https://www.cleveroad.com/static/bb4f58718db4c1a493e367ef5626a339/b410d/flutter-two-phones.webp",
    desc: "<div className={`mt-4 leading-relaxed w-full}`><p>This Flutter app is called Travel Time. We’ve built it at Cleveroad to show you the Flutter’s performance and User Interface.</p><p>The app comes with a flexible search with filters and commenting options. It also allows iOS and Android users to log in using Facebook or other social networks.</p></div>",
  },
];

const faqsFlutter = [
  {
    question: "What is Flutter development?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Flutter development stands for developing mobile apps with a single codebase. One codebase means that a resulting app will work on both iOS and Android.<br><br>Given that you don’t need two separate developers, the development goes faster and is typically cheaper compared to native apps. It usually takes 40-50% less time to build apps with Flutter than developing a native solution for iOS and Android.</div>",
  },
  {
    question: "How does Flutter differ for app development?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Flutter lets developers build cross-platform, single-codebase apps that work on iOS and Android. It’s a great technology if you need to validate your idea or quickly launch new features.<br><br>The SDK has a set of ready-made widgets for faster UI coding and the hot reload function. Those are two of the many features that let developers code faster with Flutter.</div>",
  },
  {
    question: "Why will Flutter change mobile development for the best?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Flutter is one of the technologies pushing forward cross-platform app development. It already has a lot of fans and a strong community, which makes cross-platform solutions more widespread.</div>",
  },
  {
    question: "Who is a Flutter developer?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Flutter developer is a programmer working with Flutter to build a cross-platform app with one codebase available on Android and iOS.</div>",
  },
  {
    question: "Why do we need a Flutter developer for our startup MVP?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Flutter is great when it comes to MVPs. With its cross-platform capabilities, you’ll be able to get two apps (iOS and Android) spending 40-50% less development time compared to native development.<br><br>It means your MVP will be cost-effective, and you’ll have something to show to investors or release to gather user feedback.</div>",
  },
  {
    question: "Is Flutter good for MVP development?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Yes, it is. Flutter is very cost-effective when it comes to MVP development. You’ll have an app for iOS and Android built faster than using native Kotlin and Swift for each platform. It means that you can save 40-50% using Flutter.</div>",
  },
];

const flutterDevInsignts = [
  {
    id: "23565",
    category: "Technologies",
    title: "A-CSPO Accreditation of Cleveroad",
    img: "https://www.cleveroad.com/images/article-previews/374305588654f3ba9aeadacdb3bdf0e806061e4812ef2f91cea3c206cc6c1248.png",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "97768",
    category: "UI/UX Design",
    title: "How to Create an App for Your Business in 2022",
    img: "https://www.cleveroad.com/images/article-previews/fd6aa821252d39f64770c4f2ae31212d5d3832a5b0ab2c05e5f1bc8d5158852d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "45675",
    category: "Client Guides",
    title: "Benefits of Warehouse Inventory Management System",
    img: "https://www.cleveroad.com/images/article-previews/5249b89d23582287a1b288400f110c88c4d2e63dff5c3cdca01027ce4d09728b.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 22, 2022",
    desc: "",
    linkToPost: "",
  },
];

const webAppsToStartBusiness = [
  {
    category: "E-commerce",
    desc: "To build a great e-Commerce app, you should add payment functionality (PayPal, Stripe), in-app communication (Socket.IO), and cloud infrastructure (AWS, Azure). The security of your customers’ data is achieved by SOC 1,2, & 3, PCI DSS level 1, ISO 27001, FIPS 140-2.",
    time: "800 hours",
    duration: "4 months",
  },
  {
    category: "Media",
    desc: "Website development services related to media brands should provide them with today’s technology gains (AR/VR, gamification) and features like real-time communication (WebRTC), audio and video streams (FFMPEG), and digital media protection (DRM).",
    time: "3000 hours",
    duration: "7 months",
  },
  {
    category: "Marketplace",
    desc: "When building an online marketplace, we implement payment operations (PayPal, Stripe), mapping (Google Maps, MapKit), in-app chatting (Socket.IO), etc. Your product gets validation of a user’s identity, data privacy (e.g., GDPR in EU), and transactions (PCI DSS).",
    time: "2000 hours",
    duration: "5 months",
  },
  {
    category: "Enterprise",
    desc: "We provide web application development services to build flexible ERP, HRM, and CRM systems and meet your corporate needs. A secure, stable, and scalable (AWS) solution is a must, so we use proven technologies like Inspinia (admin template) to ensure the best performance.",
    time: "3500 hours",
    duration: "9 months",
  },
];

const techStackWebApps = [
  {
    techCategory: "Frontend",
    techData: [
      {
        tool: "AngularJS",
        icon: "",
        desc: "This framework is perfect for creating video streaming apps, user-generated content portals, and social apps. It’s a time-saving tool that lets developers write less code and achieve greater functionality based on the MVC architecture.",
        text1Head: "2.5M",
        text1: "websites",
        text2Head: "20%",
        text2: "faster delivery",
      },
      {
        tool: "React",
        icon: "",
        desc: "Advanced JS library for building UI with the ability to reuse system components, which significantly boosts productivity and facilitates further maintenance. React helps build high-load apps with stable code and continuous app performance.",
        text1Head: "SEO",
        text1: "friendly",
        text2Head: "20%",
        text2: "faster delivery",
      },
      {
        tool: "Javascript",
        icon: "",
        desc: "A programming language that makes it possible to turn static pages into interactive ones. Using JavaScript, it is possible to create dynamically updated content and animate images. JavaScript is very popular since it is an easy-to-use language and it is supported by almost all browsers.",
        text1Head: "92%",
        text1: "of websites",
        text2Head: "40%",
        text2: "more efficient",
      },
      {
        tool: "HTML5",
        icon: "",
        desc: "In general, HTML stands for Hypertext Markup Language used together with CSS to markup and tailor the look of pages. The fifth is the latest version of HTML, containing many enhancements that allow dealing with more engineering aspects.",
        text1Head: "74%",
        text1: "switched to it",
        text2Head: "#1",
        text2: "choice for web apps",
      },
      {
        tool: "CSS",
        icon: "",
        desc: "Cascading Style Sheets define how HTML elements will be displayed on a page. CSS is used to recreate user interfaces composed by designers. Put simply, the button you see on a website is an HTML element, but it was colored and centered by means of CSS.",
        text1Head: "96%",
        text1: "websites worldwide",
        text2Head: "#1",
        text2: "choice for web apps",
      },
      {
        tool: "LESS",
        icon: "",
        desc: "A CSS pre-processor that provides CSS with dynamic capabilities. This compiler is easy to use, possible to use variables. It can be used on the client’s side, new classes can be integrated. LESS simplifies the workflow process, gives developers more flexibility.",
        text1Head: "30%",
        text1: "faster web development",
        text2Head: "155k+",
        text2: "websites",
      },
      {
        tool: "SASS",
        icon: "",
        desc: "SASS is a CSS pre-processor that lets us make writing CSS much more powerful by using variables, loops, and other functionalities. Sass helps us write clean, easy, and less CSS in a programming construct. It is stable, robust, elegant and compatible with all versions of CSS.",
        text1Head: "30%",
        text1: "faster coding",
        text2Head: "65%",
        text2: "of developers use SASS",
      },
    ],
  },
  {
    techCategory: "Backend",
    techData: [
      {
        tool: "PHP",
        icon: "",
        desc: 'The abbreviation of PHP stands for "Personal Home Page." Originally, it was designed as a simple scripting language and then evolved into something more over time. Nowadays, this programming language is widely used for server-side programming.',
        text1Head: "79%",
        text1: "websites worldwide",
        text2Head: "4th",
        text2: "place in PYPL Index",
      },
      {
        tool: "C#",
        icon: "",
        desc: "An object-oriented language that allows developers to create various secure and reliable apps that run on .Net Framework. It is considered to be one of the most powerful and demanded languages. A unique language that is used to build native Windows apps, mobile apps, REST APIs, and other software.",
        text1Head: "4th",
        text1: "most popular language",
        text2Head: "40%",
        text2: "faster development",
      },
      {
        tool: "NodeJS",
        icon: "",
        desc: "NodeJS is an event-driven technology for creating real-time web applications. Node.js is perfect for creating data-heavy solutions as it is capable of handling traffic spikes. NodeJS has successfully applied for various website application development services.",
        text1Head: "10%",
        text1: "faster MVP delivery",
        text2Head: "20%",
        text2: "higher performance",
      },
    ],
  },
  {
    techCategory: "Frameworks",
    techData: [
      {
        tool: "Express.js",
        icon: "",
        desc: "It is a lightweight and open-source JavaScript-based framework for Node.js server environment. It is designed for building the server-side of web applications as well as APIs. Express.js is a part of the MEAN stack together with MongoDB and AngularJS.",
        text1Head: "800K",
        text1: "websites worldwide",
        text2Head: "10%",
        text2: "programming boost",
      },
      {
        tool: "Laravel",
        icon: "",
        desc: "Laravel is a PHP framework for developing scalable, feature-rich, and secure websites and apps. The projects are delivered in a short time. Laravel makes integration with third-party tools easier and helps to secure web apps efficiently.",
        text1Head: "Highly",
        text1: "scalable",
        text2Head: "235k",
        text2: "websites",
      },
      {
        tool: "YII2",
        icon: "",
        desc: "High-performance PHP framework that implements MVC pattern. Designed for fast development of large web apps. Due to a large number of possible tools, YII2 is used for building apps with high traffic flow. It is efficient and provides developers with detailed documentation.",
        text1Head: "45%",
        text1: "faster testing process",
        text2Head: "147k",
        text2: "websites",
      },
      {
        tool: "Symfony",
        icon: "",
        desc: "PHP framework that uses the MVC pattern. It includes a full set of tools that are required for quick web applications development. A developer can start building apps using Symfony distribution. It has flexible settings, scalability, and high stability. The framework is available for free.",
        text1Head: "46k+",
        text1: "websites",
        text2Head: "40%",
        text2: "faster web app development",
      },
      {
        tool: "ASP.net MVC",
        icon: "",
        desc: "The power of this framework is utilized by developers from all over the globe for building scalable and maintainable web applications. The Model-View-Controller architectural pattern at the heart of the framework enables an efficient development process.",
        text1Head: "100%",
        text1: "open source",
        text2Head: "20%",
        text2: "efficiency increase",
      },
    ],
  },
  {
    techCategory: "CMS",
    techData: [
      {
        tool: "OpenCart",
        icon: "",
        desc: "A free-to-use e-commerce platform that is designed for creating online shopping. This engine can be installed on any web server with MySQL and PHP support. It has a high functionality level, user-friendly interface, and it is easy to install. OpenCart allows you to create profitable e-commerce solutions.",
        text1Head: "20+",
        text1: "payment tools supported",
        text2Head: "385k",
        text2: "websites",
      },
      {
        tool: "WordPress",
        icon: "",
        desc: "WordPress is a cost-effective and SEO-friendly CMS for website creation. WordPress is a highly user-friendly platform. Its convenient administration panel makes it easy to implement changes to your website. Additional functionality is gained by plugins implementation.",
        text1Head: "27%",
        text1: "of all websites",
        text2Head: "20%",
        text2: "faster time-to-market",
      },
      {
        tool: "Joomla",
        icon: "",
        desc: "Joomla is the perfect CMS solution for multimedia, dynamic websites, which contain lots of content. It is easy to create an advanced SEO-friendly website using this platform. Joomla is compatible with all browsers and has many plugins and modules.",
        text1Head: "2.5m",
        text1: "websites",
        text2Head: "5.7%",
        text2: "of all websites",
      },
    ],
  },
  {
    techCategory: "Databases",
    techData: [
      {
        tool: "MySQL",
        icon: "",
        desc: "MySQL is a stable, reliable, and powerful database management system. It offers on-demand scalability and allows complete customization to eCommerce businesses. MySQL is designed to meet demanding requirements and ensure performance.",
        text1Head: "#1",
        text1: "Top databases",
        text2Head: "+30%",
        text2: "app performance Hire Developers",
      },
      {
        tool: "PostgreSQL",
        icon: "",
        desc: "The PostgreSQL relational database is distributed for free. What's more, its source code is available to all those wishing to utilize it. Any organization or private entity does not control the database, and each engineer can contribute to its development.",
        text1Head: "15%",
        text1: "better scalability",
        text2Head: "8%",
        text2: "richer indexing",
      },
      {
        tool: "MongoDB",
        icon: "",
        desc: "It is a free and open-source database focused on storing and managing document-oriented information. MongoDB keeps data in JSON-like documents that allow greater flexibility and opportunity to change data structure over time.",
        text1Head: "40M+",
        text1: "downloads",
        text2Head: "35K+",
        text2: "GitHub repositories",
      },
      {
        tool: "Elasticsearch",
        icon: "",
        desc: "This out-of-the-box solution provides a search and analytics engine capable of adapting to a variety of use cases. Put simply, software engineers spend much less time on implementing data search and analytics capabilities.",
        text1Head: "20%",
        text1: "faster deployment",
        text2Head: "40%",
        text2: "more stable code",
      },
      {
        tool: "Redis",
        icon: "",
        desc: "A non-relation database management system. It stores all data, and it is possible to access this data using a special key. Due to its high speed and simplicity, Redis is often used for mobile and web apps, e-commerce platforms, and so on. This DBMS is created for storing data from your software and can process it efficiently.",
        text1Head: "20%",
        text1: "higher performance",
        text2Head: "6GB",
        text2: "of storage capacity",
      },
    ],
  },
];

const techForAdvanceWebApps = [
  {
    title: "Big Data",
    desc: [
      "Big data architecture design",
      "Apache Spark and Hadoop",
      "Hadoop ecosystem: HDFS, Hive, Pig, Impala, Oozie",
      "Big Data Processing and Warehousing: EMR, Redshift",
    ],
  },
  {
    title: "Media Expertise",
    desc: [
      "Live Streaming and OTT delivery",
      "Video Processing",
      "Content Distribution Networks",
      "Web RTC, FFMPEG, Wowza, DRM",
    ],
  },
  {
    title: "Progressive web apps",
    desc: [
      "React / Angular",
      "Offline connectivity (Cache API)",
      "PRPL Pattern",
      "HTTP/2 + Server Push",
    ],
  },
  {
    title: "AWS Development Expertise",
    desc: [
      "EC2 / S3 / Lambda / Elastic Beanstalk",
      "Sealing and Security",
      "Horizontal / Vertical Scaling",
      "Serverless Architecture",
    ],
  },
  {
    title: "E-commerce Expertise",
    desc: [
      "AWS/Azure + .Net, JS, TypeScript",
      "B2B and B2C business models",
      "Payment Gateways (Stripe, Braintree, Adyen, PayPal)",
    ],
  },
  {
    title: "Blockchain solutions",
    desc: [
      "Frameworks: Ethereum, Hyperledger, R3 Corda",
      "Smart contracts using PoW consensus",
      "Byzantine fault-tolerant (BFT) algorithms",
    ],
  },
];

const faqsWebAppsServices = [
  {
    question: "What are web app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Web app development stands for creating custom web applications from scratch, including web design, user- and server-side development, and QA testing.</div>",
  },
  {
    question: "What kind of services does web app development offer?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Apart from creating custom web applications, we provide services like web designing, QA testing, support, and maintenance.</div>",
  },
  {
    question:
      "How to hire the best web application development service provider?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Always check your web developers' expertise and make sure they provide the services you need.<br><br>Check your tech vendors' portfolio to find similar projects, or go on the company's Clutch / GoodFirms page and look through their previous clients' reviews.<br><br>If you have a tech expert or CTO on your side, request a tech interview with selected software developers.</div>",
  },
  {
    question: "How to choose web app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Start with listing your requirements. For example, if you want a custom UI design, but have no in-house designers, look for companies that provide such services.<br><br>If you're making the web app from scratch, make sure your tech vendor has every specialist required. Usually, the team includes Business Analysts, Project Managers, front and back end developers, QA engineers, DevOps.</div>",
  },
  {
    question:
      "What should be included in the web application development service?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>We follow these steps:<ol><li><strong>Business analysis. </strong> We gather and analyze your project requirements and document them in a specification.</li><li><strong>UI/UX design. </strong> Create wireframes and screen-by-screen design for your web app.</li><li><strong>Development. </strong>Take care of both user and server-side development and testing.</li><li><strong>Release. </strong>Make your website go live.</li><li><strong>Maintenance. </strong>Support or enhance existing products (if requested).</li></ol></div>",
  },
  {
    question: "What is responsive web app design?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>In responsive design, the layout is shrinking or expanding according to users’ display width. Even if the window is changing in one pixel, the page will slightly rearrange its elements.<br><br>You save time and money on designing the mobile version, and your users enjoy a great experience on their smartphones and tablets.</div>",
  },
];

const faqsWebApps = [
  {
    question: "What are web app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Web app development stands for creating custom web applications from scratch, including web design, user- and server-side development, and QA testing.</div>",
  },
  {
    question: "What kind of services does web app development offer?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Apart from creating custom web applications, we provide services like web designing, QA testing, support, and maintenance.</div>",
  },
  {
    question:
      "How to hire the best web application development service provider?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Always check your web developers' expertise and make sure they provide the services you need.<br><br>Check your tech vendors' portfolio to find similar projects, or go on the company's Clutch / GoodFirms page and look through their previous clients' reviews.<br><br>If you have a tech expert or CTO on your side, request a tech interview with selected software developers.</div>",
  },
  {
    question: "How to choose web app development services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Start with listing your requirements. For example, if you want a custom UI design, but have no in-house designers, look for companies that provide such services.<br><br>If you're making the web app from scratch, make sure your tech vendor has every specialist required. Usually, the team includes Business Analysts, Project Managers, front and back end developers, QA engineers, DevOps.</div>",
  },
  {
    question:
      "What should be included in the web application development service?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>We follow these steps:<ol><li><strong>Business analysis. </strong> We gather and analyze your project requirements and document them in a specification.</li><li><strong>UI/UX design. </strong> Create wireframes and screen-by-screen design for your web app.</li><li><strong>Development. </strong>Take care of both user and server-side development and testing.</li><li><strong>Release. </strong>Make your website go live.</li><li><strong>Maintenance. </strong>Support or enhance existing products (if requested).</li></ol></div>",
  },
  {
    question: "What is responsive web app design?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>In responsive design, the layout is shrinking or expanding according to users’ display width. Even if the window is changing in one pixel, the page will slightly rearrange its elements.<br><br>You save time and money on designing the mobile version, and your users enjoy a great experience on their smartphones and tablets.</div>",
  },
];

const webDevInsignts = [
  {
    id: "23565",
    category: "Technologies",
    title: "A-CSPO Accreditation of Cleveroad",
    img: "https://www.cleveroad.com/images/article-previews/374305588654f3ba9aeadacdb3bdf0e806061e4812ef2f91cea3c206cc6c1248.png",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "97768",
    category: "UI/UX Design",
    title: "How to Create an App for Your Business in 2022",
    img: "https://www.cleveroad.com/images/article-previews/fd6aa821252d39f64770c4f2ae31212d5d3832a5b0ab2c05e5f1bc8d5158852d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 03, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "45675",
    category: "Client Guides",
    title: "Benefits of Warehouse Inventory Management System",
    img: "https://www.cleveroad.com/images/article-previews/5249b89d23582287a1b288400f110c88c4d2e63dff5c3cdca01027ce4d09728b.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 22, 2022",
    desc: "",
    linkToPost: "",
  },
];

const dedicatedDevTeam = [
  {
    icon: <BsGearFill />,
    text: "Acquire relevant tech expertise for your project",
  },
  {
    icon: <BsJournalCode />,
    text: "Establish an R&D center in the Ukrainian tech hub",
  },
  {
    icon: <FaExpandArrowsAlt />,
    text: "Expand in-house team with additional talents",
  },
  {
    icon: <FaHospitalUser />,
    text: "Receive flexible services for reasonable price",
  },
  {
    icon: <FaUsers />,
    text: "Assemble team for a new project or updating existing one",
  },
  {
    icon: <FaUserCog />,
    text: "Get full management control over developers",
  },
];

const strengthOfDedicatedTeam = [
  {
    title: "Relevant expertise",
    desc: "We’ll assemble a team according to your requirements, industry, and specific expertise you’re looking for.",
  },
  {
    title: "Ease of expanding",
    desc: "Dedicated development team’s size can be easily scaled up and down depending on the development state and work scope.",
  },
  {
    title: "Cost-effectiveness",
    desc: "With flexible payments, it’s easy to pick the most convenient model and distribute resources.",
  },
  {
    title: "Full control",
    desc: "Get full control over managing dedicated team developers and complete transparency of processes.",
  },
];

const howItWorks = [
  {
    id: "1",
    title: "Gathering requirements",
    desc1:
      "We hold a series of meetings to clarify the project’s details, requirements for the team, preliminary work schedule, and different organizational aspects.",
  },
  {
    id: "2",
    title: "Assembling a team",
    desc1:
      "We assemble a team of developers based on your requirements. After that, you interview all candidates and choose those talents you’d like to see on your dedicated development team.",
  },
  {
    id: "3",
    title: "Onboarding and development",
    desc1:
      "The dedicated team developers study the project, read the documentation to learn more about the product, get acquainted with the scope of tasks and deadlines. After that, the development process begins.",
  },
  {
    id: "4",
    title: "Scaling up and down",
    desc1:
      "Depending on the project’s state, the dedicated team can be scaled up and down. When the project is on the finish line, the number of developers can be decreased. If the scope of tasks is getting bigger, you can expand your team.",
  },
];

const whyChooseUs = [
  {
    img: "https://www.cleveroad.com/static/dbf57aa8feedfe5c891a35b33de3e535/1df7b/member-avatar09.webp",
    name: "Sergey Molchanov",
    designation: "Head of Business Development",
    email: "s.molchanov@cleveroad.com",
    linkedIn: "",
    qualities: [
      "Agile-oriented development team full of high-tier experts",
      "On-demand team scaling",
      "Fast integration into existing development workflows",
      "Strong technical expertise across six industries",
      "Huge talent pool to choose",
      "Experience with Jira-like corporate tools and ease of communication",
      "Sign a non-disclosure agreement on request",
      "Full management control",
    ],
  },
];

const whatWeOffer = [
  {
    category: "Development",
    desc: "Developers translate your ideas into lines of code and make the project work the way you mean it. You’re free to choose talents based on your goals and requirements — we’ll assemble the perfect dedicated development team that’ll deliver your requirements.",
    expertise: [
      "Mobile development",
      "Front-end development",
      "Back-end development",
    ],
  },
  {
    category: "Design",
    desc: "Thoughtful and delightful design is what makes digital solutions stand out from the crowd. We’ll assemble a team of the best UI/UX designers to help you create a unique look and feel for your project.",
    expertise: ["Mobile UI/UX design", "Web design"],
  },
  {
    category: "Operations",
    desc: "Except for developers and designers, we can help you with development operations to increase the overall team efficiency, setting up cloud infrastructure, optimizing cloud costs, and the product’s quality control.",
    expertise: ["Quality Assurance", "DevOps"],
  },
];

const whatWeNeed = [
  {
    title: "Time for planned meetings",
    desc: "It's vital to be present at meetings where we discuss requirements and gather information. We value your time and will provide you with a convenient schedule of meetings.",
  },
  {
    title: "Information and requirements",
    desc: "To assemble the perfect team, we must get acquainted with your project. Share your business goals, project needs, and requirements for the team's expertise.",
  },
  {
    title: "Management of development team",
    desc: "We take care of the hiring and team assembling process while you take responsibility for development overseeing and managing the dedicated development team.",
  },
];

const fAQsDedicatedDevTeams = [
  {
    question: "Why hiring a dedicated team of developers is a good choice?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Acquiring a dedicated development team will grant you significant benefits like:<ul><li>Reduced cost</li><li>Cooperation with talented specialists</li><li>Adapted taxation</li><li>Time-saving</li><li>High quality</li><li>Higher output</li></ul></div>",
  },
  {
    question: "How much do dedicated development team services cost?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>The cost of acquiring a dedicated development team depends on the vendor’s location, what developers you choose, and the number of employees you hire. You can find these dependencies in our recent <a href={`https://www.cleveroad.com/blog/hire-dedicated-development-team#where-to-hire-a-dedicated-development-team`}>article</a></div>",
  },
  {
    question:
      "How to choose a reliable dedicated development team services provider?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>When looking for a vendor, pay attention to reviews and ratings on various platforms, such as Clutch, GoodFirms, and many others. After that, it’s worth conducting in-depth research and learning about vendors’ previous projects, industries they work in, and their technical expertise.</div>",
  },
  {
    question: "Who are the dedicated development team members?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Depending on the project, a typical dedicated team can consist of:<ul><li>Mobile app developers</li><li>Web developers (front-end and back-end)</li><li>UI/UX designers</li><li>Quality assurance engineers</li><li>DevOps engineers</li></ul></div>",
  },
  {
    question: "What is a dedicated development team all about?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>The main idea of dedicated development team services is hiring remote workers to develop a software product. This cooperation model is an outstanding choice if you need extra developers to help your in-house developers or require a full project team.</div>",
  },
  {
    question: "Where can I find a dedicated development team services vendor?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>The easiest way to find a reliable IT vendor is to search through professional platforms that gather info about IT companies from all over the world. There are several of the most popular platforms to find dedicated development team services vendors:<ul><li>Clutch</li><li>GoodFirms</li><li>IT Firms</li></ul></div>",
  },
];

const discoveryPhaseProcess = [
  "Сhecking startup ideas",
  "Project's budget optimization",
  "Defining the solution scope",
  "Processes streamlining",
];

const discoveryPhaseValue = [
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/mobile-design.svg",
    title: "Precise Definition of Development Inputs",
    desc: "Gain a clear vision of the project, conduct a risk assessment, comply with the legislation and domain best practices for a smooth delivery, align business goals with user needs, and create a useful and financially successful product",
  },
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/web-design.svg",
    title: "Finding Software’s Growth Points",
    desc: "Reveal the outdated and ineffective aspects of the existing system, discover a field for upgrades, and ensure that the system meets the latest industry standards of security, usability, and interoperability",
  },
  {
    img: "https://www.cleveroad.com/assets/icons/services/services-design/product-design.svg",
    title: "Business Processes’ Clarification",
    desc: "First, define your business processes 'as is', analyze them, and improve the daily routine flow of actions and tasks — with your technology level 'as is'. Then, define the ways to automate manual processes to increase your business's efficiency and performance and propose the proper technical solution.",
  },
];

const productDiscoveryProcess = [
  {
    discoveryProcess: "Preparation",
    dayFrom: "Day 1",
    dayTo: "Day 3",
    dayDots: [<BsCircleFill />, <BsCircleFill />, <BsCircleFill />],
    duration: "Duration: 1-3 days",
    heading:
      "Initial requirements analysis by our team and preparation of the optimal Discovery plan",
    plansRequirements: [
      {
        bisunessIntelligence: [
          "Business environment exploration",
          "Market investigations and research",
          "A detailed plan for the Discovery implementation",
        ],
        solutionsArchitecture: [
          "Business goals and needs analysis",
          "Technology landscape research",
          "Initial list of the architecture limiting factors",
        ],
        uiUxDesign: [
          "Competitor Analysis",
          "Creation of mood board for future concept",
          "Enhancing discovery plan with UX activities",
        ],
      },
    ],
  },
  {
    discoveryProcess: "Deep dive",
    dayFrom: "Day 4",
    dayTo: "Day 10",
    dayDots: [
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
    ],
    duration: "Duration: 4-10 days",
    heading:
      "Close scrutiny: business, technical, and UI/UX analysis for better vision, prioritization, and success indicators’ formation",
    plansRequirements: [
      {
        bisunessIntelligence: [
          "Accurate business aims and vision",
          "Modeled business flows",
          "Functional decomposition",
          "Defined priorities",
          "Checked & collected feedbacks",
        ],
        solutionsArchitecture: [
          "Essential requirements analysis",
          "Limiting factors analysis",
          "Quality Attributes Workshop",
          "Architecture vision clarification",
          "Checking & collecting feedback",
        ],
        uiUxDesign: [
          "Wireframes for core user flows (depending on the project needs)",
          "Concept based on mood board and feature list",
          "Start of the Mind Map creation",
        ],
      },
    ],
  },
  {
    discoveryProcess: "Solution definition",
    dayFrom: "Day 10",
    dayTo: "Day 15",
    dayDots: [
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
      <BsCircleFill />,
    ],
    duration: "Duration: 10-15 days",
    heading:
      "We are working on the requirements and product design to better define the project implementation roadmap and the necessary expenses: this is an iterative process",
    plansRequirements: [
      {
        bisunessIntelligence: [
          "Functional decomposition",
          "Fitting business roadmap and estimations",
          "Crucial landmarks & priorities",
          "Business requirements for the Roadmap",
        ],
        solutionsArchitecture: [
          "Critical architecture views",
          "Finalized technology stack",
          "DevOps and Operations vision",
          "Implementation efforts estimated",
          "Finalized SAD (Software Architecture Document)",
        ],
        uiUxDesign: [
          "Wireframes or mindmap",
          "Finalized UX solution vision",
          "Defined visual constituents and style guides",
        ],
      },
    ],
  },
];

const discoveryPhaseDeliverable = [
  {
    phase: "Business Analysis",
    data: [
      {
        id: "1",
        title: "Feature breakdown list",
        desc: "During Discovery, we reveal different development aspects to create a detailed feature list with user stories and a rough estimation with specification based on it.",
      },
      {
        id: "2",
        title: "Impact Map",
        desc: "Impact Mapping enables decision-making about features to be built and incorporated into a product.",
      },
      {
        id: "3",
        title: "Activity/UML/BPMN diagrams/Flowcharts",
        desc: "Depending upon the project needs, we create diagram(s) in one of the notations for process visualization to represent a series of actions and flow control in a system.",
      },
      {
        id: "4",
        title: "Software Architecture Document (SAD)",
        desc: "The SAD BA part is updated according to the results of Discovery.",
      },
    ],
  },
  {
    phase: "Solution Architecture",
    data: [
      {
        id: "1",
        title: "Quality Attribute Scenarios",
        desc: "Quality attributes are a set of system functional and non-functional requirements that are used to evaluate the system performance. Quality Attribute Scenarios document describes quality attributes and possible scenarios of actions.",
      },
      {
        id: "2",
        title: "More precise estimation",
        desc: "The estimation is based on the feature breakdown list. This document includes team composition and a minimum and maximum time to develop the necessary features. Team Composition is the configuration of a team. It is based on the team's task and is defined individually for each project to reach the best possible results during the development.",
      },
      {
        id: "3",
        title: "Project Plan",
        desc: "A project plan defines project goals and objectives, specifies tasks and goals achievement, and identifies resources needed, associated budgets, and timelines for completion.",
      },
      {
        id: "4",
        title: "Architecture diagram",
        desc: "An architecture diagram stands for the system's outline and the relationships and boundaries between components. It provides the overall view of the physical deployment and its evolution roadmap.",
      },
    ],
  },
  {
    phase: "Design",
    data: [
      {
        id: "1",
        title: "Design concept",
        desc: "Design concept. Our Design team creates concepts for the necessary platforms based on design requirements. We make two of them for mobile development (to choose from), and one page with the most elements is for the web.",
      },
      {
        id: "2",
        title: "Mind Map",
        desc: "A mind map is a diagram used to visually organize information into a hierarchy, showing relationships among pieces of the whole. It can help you find better and more creative solutions to problems, improve information retention, facilitate more effective brainstorming sessions with your team, and deliver a serious boost to your productivity.",
      },
    ],
  },
];

const whyYouNeedDiscoveryPhase = [
  {
    title: "Clear requirements",
    desc: "The discovery phase is focused on clearing up your business and tech requirements. We single out features to fit your budget and follow industry standards.",
  },
  {
    title: "Architecture tailored to goals",
    desc: "With a Solution Architect working on your product, we design architecture from the ground up to make sure it goes along with your business goals from the early stages.",
  },
  {
    title: "Optimal development costs",
    desc: "The discovery phase is designed to define obstacles that may pop up during product development. Knowing all the risks, we can offer the solution that fits your budget.",
  },
  {
    title: "Minimized risks",
    desc: "Your product idea goes through accurate analysis and planning. It means that you get a detailed project estimate and minimize failed deadlines and overpayment.",
  },
];

const discoveryPhaseIncludes = [
  {
    id: "01",
    category: "Feature breakdown list",
    desc: "Business Analysts hold meetings with you to discuss business needs, user and functional requirements. After that, the Solution Architect checks the tech feasibility and suggests removing or keeping features to launch faster. You approve the final feature list before moving to the next stage.",
    staff: ["Project Manager", "Solution Architect", "Business Analyst"],
  },
  {
    id: "02",
    category: "Rough estimation",
    desc: "Developers, designers, and QA engineers estimate the feature list for the required platforms. Business Analyst prepares documents with rough estimation — minimum and maximum time needed to develop each feature. You should review the estimate to move on to the next stage.",
    staff: [
      "Sales Manager",
      "Business Analyst",
      "UI/UX Designers",
      "Software Engineers",
      "QA Engineers",
      "Solution Architect",
    ],
  },
  {
    id: "03",
    category: "Team composition",
    desc: "After getting the rough estimation, we compose the development team based on your requirements — developers, UI/UX designers, QA engineers.",
    staff: ["Sales Manager", "Project Manager", "Solution Architect"],
  },
  {
    id: "04",
    category: "Concept creation",
    desc: "Business Analyst gets design requirements, and Designers create concepts for the necessary platforms. We develop variants of several main screens, depending on project requirements. You should revise and pick the final version.",
    staff: ["Business Analyst", "UI/UX designers", "Solution Architect"],
  },
  {
    id: "05",
    category: "Specification",
    desc: "Business Analyst writes a specification to fulfil a backlog that is enough to start a project. The specification covers technical aspects and describes each feature in the form of user stories. As the entire team will be using the specification, the Quality Assurance engineer checks it for logical issues and guideline violations.",
    staff: ["Business Analyst", "Solution Architect", "QA engineer"],
  },
  {
    id: "06",
    category: "Wireframes",
    desc: "Once the specification is ready, designers start creating wireframes — a layout of a user interface. Designers arrange main elements like buttons and images on each screen. Business Analyst and QA engineer review and validate the wireframes. The QA engineer also checks the project requirements for testability.",
    staff: [
      "UI/UX Designers",
      "Business Analyst",
      "Solution Architect",
      "QA engineer",
    ],
  },
  {
    id: "07",
    category: "Detailed estimation",
    desc: "Our developers and designers estimate the product development cost for each platform. We estimate part of the project to start the development faster.",
    staff: [
      "UI/UX Designers",
      "Software Engineers",
      "Solution Architect",
      "Business Analyst",
      "Sales Manager",
    ],
  },
];

const fAQsDiscoveryPhase = [
  {
    question: "What is a discovery phase?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>The discovery phase helps you elicit, analyze, and prioritize features and finalize requirements. It allows clearing out tech aspects of the project and estimating the price.</div>",
  },
  {
    question: "Why do you need a discovery phase?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>The discovery phase helps reduce development costs and minimize risks since you’ve already defined possible obstacles and ways to avoid them. Analyzing your goals, we can tailor the appropriate architecture.</div>",
  },
  {
    question: "How do you do a discovery phase?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>There are several stages:<ul><li><strong>Project kick-off. </strong>Holding a kick-off meeting to get acquainted with the team and learn more about each member’s role.</li><li><strong>Feature breakdown. </strong>Business Analysts hold meetings with you to discuss user needs and functional requirements.</li><li><strong>Rough estimation. </strong>Developers, designers, and QA engineers estimate the feature list for the required platforms. You get a rough estimation — minimum and maximum time needed to develop each feature.</li><li><strong>Team composition. </strong>The Sales Manager collects the development team — developers, designers, and QA engineers. The Solution Architect and Project Manager validates the team.</li><li><strong>Concept creation. </strong>Designers create two visual concepts of the product for you to choose from.</li><li><strong>Specification. </strong>Business Analyst writes a specification covering tech aspects and describing each feature in the form of user stories.</li><li><strong>Wireframes. </strong>Designers start creating wireframes — a layout of a user interface.</li><li><strong>Final review. </strong>Quality Assurance engineers check each user story and wireframe for logic mistakes and guideline violations.</li><li><strong>Detailed estimation. </strong>Our developers and designers estimate the final product development cost for each platform.</li></ul></div>",
  },
  {
    question: "What do you get at the end of a discovery phase?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}><ul><li>Specification</li><li>Rough estimate</li><li>Detailed estimate</li><li>Wireframes</li><li>Activity diagram</li><li>Flow chart</li></ul></div>",
  },
];

const benifitsOfMVP = [
  {
    title: "Idea validation",
    desc: "Ensure idea viability without investing a lot of money in developing a full-fledged product.",
  },
  {
    title: "Quick time to market",
    desc: "Release your product faster than competitors adding just enough features to be usable by early customers.",
  },
  {
    title: "Market exploration",
    desc: "Launch the MVP on target markets to test waters, identify weak sides, and continue development, making informed decisions.",
  },
  {
    title: "Pitch effectively",
    desc: "Stand out from idea-only startups and get noticed by applying to investors with a working MVP.",
  },
];

const stepsMVPDevelopment = [
  {
    title: "Do market analysis",
    desc: "Ensure there’s a demand for your product on the market and identify your short-term and long-term goals.",
  },
  {
    title: "Formulate value",
    desc: "Gather and analyze all product ideas to make up the value proposition out of them.",
  },
  {
    title: "Determine user flow",
    desc: "Consider how customers are going to use your product to come up with an intuitive flow.",
  },
  {
    title: "List MVP features",
    desc: "Include only vital features to the list for MVP development and identify the ones to develop later on.",
  },
];

const mvpIndustryExpertise = [
  {
    id: "01",
    category: "Healthcare",
    recentProject: "Mental health app created to help people with depression.",
    desc: "The HealthTech industry is experiencing a startup boom. That’s why our team offers MVP development for startups to help them enter the market faster and achieve desired tech results.",
  },
  {
    id: "02",
    category: "Streaming",
    recentProject: "Video-on-demand platform for the Scandinavian market.",
    desc: "Streaming is a rather complex niche from a technological point. We’ve been assisting startups with MVP development of VoD, OTT, live broadcasting, and other solutions for years.",
  },
  {
    id: "03",
    category: "Logistics",
    recentProject: "Powerful SaaS platform for managing retail operations.",
    desc: "The transport and logistics sector has seen a dramatic increase in startup funding. With MVP development, startups are more likely to attract investments. We help startups build their SaaS ideas.",
  },
  {
    id: "04",
    category: "Travel",
    recentProject:
      "Gym directory helping travelers reserve workouts worldwide.",
    desc: "The impact of technologies is clearly seen in the travel and hospitality industry. With our MVP development services, startups can build booking platforms, HMS, and SaaS products.",
  },
  {
    id: "05",
    category: "Education",
    recentProject: "App connecting parents and schools for staying up-to-date.",
    desc: "EdTech startups are disrupting education. With high competition in this market, our MVP app development company is glad to help startup clients with launching products from scratch.",
  },
  {
    id: "06",
    category: "Social media",
    recentProject: "Interactive global social network for dance lovers.",
    desc: "Billions of people use social media apps daily. Startups must understand users and their needs to enter this market. We help our clients launch an MVP and assist with continuous development.",
  },
];

const mvpDevlopmentProcess = [
  {
    id: "1",
    title: "Discovery phase",
    desc: "This phase is designed to finalize requirements, identify pitfalls, and craft essential assets for a development team that’ll help you cut costs. It requires close cooperation with you for approving wireframes, a user journey, and reviewing functionality in the specification.",
    staff: [
      "Business Analyst",
      "Project Manager",
      "Solution Architect",
      "UI/UX designer",
      "QA engineer",
    ],
  },
  {
    id: "2",
    title: "Product design",
    desc: "Intuitive and captivating product design is halfway to success. Having immersed into your product strategy, we create several design concepts with business goals in mind. After you pick one, we start working on the prototype based on the wireframes.",
    staff: ["Project Manager", "UI/UX designer"],
  },
  {
    id: "3",
    title: "Development & testing",
    desc: "We follow the agile software development methodology to ensure transparency, quality, and flexibility to changes. Having chosen the optimal tech stack for your product, we’ll design, develop, and test your product adhering to the latest techniques and technologies.",
    staff: ["Project Manager", "Software Engineer", "QA engineer", "DevOps"],
  },
  {
    id: "4",
    title: "Launch",
    desc: "With years of experience releasing digital products, we’ll do all necessary final preparations to get your product up and running. Be it a submission process, server deployment, or cloud configuration — we’ll handle it quickly following the latest practices.",
    staff: ["Project Manager", "Software Engineer", "QA engineer", "DevOps"],
  },
  {
    id: "5",
    title: "Continuous development",
    desc: "MVP is not the final destination. We’ll help you roll out product updates and new features according to your tests, assumptions, and KPIs. Our main goal is to help you grab the biggest market share possible.",
    staff: [
      "Project Manager",
      "UI/UX designer",
      "Software Engineer",
      "QA engineer",
      "DevOps",
    ],
  },
];

const fAQsMVP = [
  {
    question: "What is MVP for a startup?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>MVP stands for a minimum viable product. It’s a product with just enough features to be usable by first customers.<br><br>For Uber-like apps, the MVP feature would be connecting drivers to riders in the area. According to this model, the app comes without handy features like arrival time estimation and cost-sharing just because they would take more time to develop and release.</div>",
  },
  {
    question: "When it’s the right time to build an MVP?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Whenever you have an idea for a startup that you want to pursue. Almost every big company you know today started with an MVP. Facebook, Airbnb, Twitter, Dropbox, Uber, Spotify, you name it.</div>",
  },
  {
    question: "Why should startups outsource MVP development?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Outsourcing is often the only option for idea-driven startups without a big budget.<br><br>First of all, outsourcing helps startup owners avoid long and costly hiring (not talking about office-related expenses).<br><br>Secondly, it helps to save money by choosing a company with affordable hourly rates. For example, in Ukraine, software development companies' average hourly rate is between $37 - $50. In the US, this rate ranges between $100 - $180.</div>",
  },
  {
    question: "Why is MVP important?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Because it helps you with the following:<ul><li>Validate idea without spending a fortune</li><li>Achieve quick time to market and spend less money</li><li>Collect feedback from early users to make informed decisions</li><li>See how the market responds to your startup to correct the strategy</li><li>Create effective pitches thanks to a working product</li></ul></div>",
  },
];

const benefitsCtoAsAService = [
  {
    benefit: "Tech expertise",
    desc: "With CTO as a Service, you’ll get a specialist with required tech expertise and in-depth knowledge of your business domain. Due to a fast-paced environment in outsourcing companies, CTOs for hire have worked on numerous projects, making them versatile specialists.",
  },
  {
    benefit: "Vision",
    desc: "As qualified tech experts, CTOs for hire look at a project from a programmer's perspective. They see the product’s strong and weak sides, know how to increase its performance, make the final product easy-to-use, and how to organize the team and prioritize tasks.",
  },
  {
    benefit: "Budget",
    desc: "CTO as a Service is an affordable option for companies on a budget searching for qualified talents. In-house CTOs usually cost a lot and don’t necessarily provide quality services. Besides, many companies simply don’t need a full-time CTO. Remote CTOs are 100% involved in your project and reaffirm their skills in practice.",
  },
  {
    benefit: "Strategy",
    desc: "A CTO isn’t just a one-sided programmer. They are tech executives that understand your business requirements and know issues you’re struggling with. Responsibilities of CTOs for hire include creating cost-effiicient, scalable software that satisfies customer needs and can be easily modified in the future.",
  },
];

const howCanCTOHelpBusiness = [
  {
    scope: "For Startups",
    abilities: [
      {
        title: "Design your product",
        desc: [
          "Cloud and on-premise systems deployment",
          "Architecture consulting",
          "App refactoring",
          "Quality assurance and control",
        ],
      },
      {
        title: "Create infrastructure",
        desc: [
          "Planning phase and fast prototyping",
          "Implementation of agile methodologies",
          "System failures prevention",
          "Strategic resource management",
        ],
      },
      {
        title: "Maintain culture",
        desc: [
          "Set company goals and values",
          "Hire employees with the right cultural fit",
          "Build a skilled and knowledgeable team",
          "Inspire trust among the team and stakeholders",
        ],
      },
    ],
  },
  {
    scope: "For Enterprises",
    abilities: [
      {
        title: "Cloud services",
        desc: [
          "Design fault tolerant cloud architecture",
          "Cloud migration",
          "Cloud architecture audit",
          "Securing cloud infrastructure",
        ],
      },
      {
        title: "Consulting Services",
        desc: [
          "Cost optimization consulting",
          "Drawing up architecture suggestions",
          "Software performance analysis",
          "HIPAA, GDPR, PCI DSS compliance consulting",
        ],
      },
      {
        title: "Team Leadership",
        desc: [
          "Leading certain development departments",
          "Project management",
          "Mentoring less experienced employees",
          "Aligning workflow with other departments",
        ],
      },
    ],
  },
];

const achieveBusinessGoals = [
  {
    title: "Software architecture",
    desc: "CTOs consult you and help to design a top-notch architecture covering your requirements and future needs.",
  },
  {
    title: "Team management",
    desc: "An experienced CTO will lead a development team to bring their knowledge and industry expertise to achieve better results.",
  },
  {
    title: "Quality assurance and control",
    desc: "CTOs take care of the architecture and manage the team to minimize the number of bugs and vulnerabilities to create reliable software that elevates user experience.",
  },
  {
    title: "Tech strategy",
    desc: "Skilled CTOs create a scalable tech strategy for a project to future-proof it and cover long-term objectives.",
  },
];

const typesOfCTOServices = [
  {
    title: "Full-time",
    desc: "Full-time CTOs act as ordinary CTOs inside the company. They manage the team, handle technical issues, create strategies, plan architectures, select candidates for the team.",
  },
  {
    title: "Fractional",
    desc: "Fractional CTOs focus on particular tasks set by the client and cooperate with in-house experts. Fractional CTOs are the best choice when you don’t have specific talents to solve particular issues.",
  },
  {
    title: "Part-time",
    desc: "Part-time CTO services combine full-time CTOs’ versatility and fractional CTOs’ affordability. They handle all CTO responsibilities but for a limited term, so clients don’t pay the price of a full-time CTO.",
  },
];

const ctoTechExpertise = [
  {
    id: "01",
    category: "Healthcare",
    recentProject: "Depression curing app",
    desc: "Healthcare is a sophisticated niche that requires careful data management and a convenient UI for users. Our CTOs for hire know how to comply with HIPAA and GDPR regulations and deliver an experience meeting user needs and business goals.",
  },
  {
    id: "02",
    category: "Streaming",
    recentProject: "Versatile video-on-demand platform",
    desc: "Video streaming software works with complicated real-time protocols and APIs. Having worked on large VoD projects, our specialists know how to apply the latest streaming technologies, solve latency issues, and eliminate other related problems.",
  },
  {
    id: "03",
    category: "FinTech",
    recentProject: "A P2P service provider with secure payments",
    desc: "FinTech software helps companies improve financial and analytical operations. CTO services help companies to comply with PCI DSS requirements to ensure safe operations. Our FinTech specialists integrate third-party payment gateways and develop standalone payment systems for purchases.",
  },
  {
    id: "04",
    category: "Education",
    recentProject: "School community software",
    desc: "Educational establishments, startups, and enterprises use eLearning apps to let customers use their services on the go and reduce operational costs. Hired CTOs can assist in MVP development, integrate third-party tools, and meet industry standards like SCORM, AICC, xAPI.",
  },
];

const faqsCTO = [
  {
    question: "What are CTOs’ responsibilities?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}><ul><li>Identify tech stack for the project</li><li>Create a software product</li><li>Verify product quality</li><li>Interview new candidates</li><li>Help junior developers</li><li>Share knowledge and experience</li></ul>Learn more in our guide on hiring <a href={`https://www.cleveroad.com/blog/how-to-hire-a-cto-for-a-startup`}>CTO as a Service</a>.</div>",
  },
  {
    question: "How to verify the CTO’s skills?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>To understand whether a candidate is a good fit for your project, you can:<ul><li>Browse through their CV</li><li>Get acquainted with their experience on GitHub</li><li>Ask for recommendations from previous projects</li></ul></div>",
  },
  {
    question: "When should a startup hire a CTO?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Various factors influence whether or not it’s time for your company to hire a CTO. The most widespread option is hiring a Chief Technology Officer if you need a high-level technical specialist to manage the development process.<br><br>Learn how to hire CTO as a service with <a href={`https://www.cleveroad.com/blog/how-to-hire-a-cto-for-a-startup`}>our recent guide</a>.</div>",
  },
  {
    question: "What is CTO as a Service?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Companies provide hired CTO services to startups and enterprises. CTO’s duties depend on the company’s goals and requirements.<br><br>CTOs of operational management type don’t have a considerable coding background. They have a bunch of non-technical skills like project management, finance, or mentoring.<br><br>As for the technical leadership type, those specialists deal with software development and lead a development team.</div>",
  },
  {
    question: "What are the benefits of CTO as a Service?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Chief Technology Officer or CTO helps startups and established companies to build a new product from scratch or improve existing tech solutions, meet deadlines, follow the budget, and manage the development team.</div>",
  },
  {
    question: "When should you use CTO services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}><ul><li>You don’t have tech expertise.</li><li>You want to go through digital transformation.</li><li>You need a leader for your development team.</li><li>You need to push your company forward.</li></ul></div>",
  },
];

const ctoDevInsights = [
  {
    id: "23565",
    category: "Client Guides",
    title: "How to Find a Technical Co-Founder For a Startup",
    img: "https://www.cleveroad.com/images/article-previews/8a74923ba907d8878f670ffd62a9e210654b8c78e5f1e9a1a55eeba71998049d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 15, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Client Guides",
    title: "How to hire a CTO for a startup",
    img: "https://www.cleveroad.com/images/article-previews/c50f0bc6f5ad1351b39b1733ba537e8f0855df7531a5c7f87e47d5d9b9879bc0.jpg",
    author: "Diana Chabanovska",
    postDate: "May 11, 2022",
    desc: "",
    linkToPost: "",
  },
  {
    id: "23565",
    category: "Client Guides",
    title: "Why Companies Need a Solution Architect for Their Projects",
    img: "https://www.cleveroad.com/images/article-previews/e1bbfef278ba84f501a9449e8e273319b777b65d591627184e061ea7b6b3500d.jpg",
    author: "Diana Chabanovska",
    postDate: "Aug 09, 2022",
    desc: "",
    linkToPost: "",
  },
];

const appModernizationServiceBenefits = [
  {
    title: "Cut operational cost",
    desc: "The maintenance of legacy systems is becoming more expensive every day due to the continuous attempts to make the outdated system meet modern security and business requirements.",
  },
  {
    title: "Prepare for scaling",
    desc: "Outdated systems can seriously hinder business development because they may not support new technologies and catch up with new business workflows vital for scaling.",
  },
  {
    title: "Increase agility",
    desc: "The more flexible business software is, the easier it’s for the business to adapt to the ever-changing market situation and restructure workflows to increase efficiency.",
  },
  {
    title: "Enhance security",
    desc: "Cyber threats never stand still and outdated systems are becoming their priority target. App modernization services can help you prevent breaches and avoid potential reputational losses.",
  },
];

const modernizationServicesWeProvide = [
  {
    title: "Upgrade consulting",
    desc: "Business analysts and solution architects conduct an in-depth analysis of the legacy system to provide a detailed report on the options you have to update your software.",
  },
  {
    title: "Cloud migration",
    desc: "Cut operational cost, improve availability, increase security and staff efficiency by migrating your outdated software architecture to the cloud.",
  },
  {
    title: "App reengineering",
    desc: "Our developers rebuild outdated software using modern technologies, add new features, modernize and optimize the code with your business goals and needs in mind.",
  },
  {
    title: "UI/UX improvements",
    desc: "Our UI/UX designers can refresh an outdated design following the latest methodologies to deliver your vision and improve user experience.",
  },
];

const modernizationChallenges = [
  {
    challenge: "Predictable results",
    desc: "The transparency of the modernization process is very important for product owners. We divide the software into several modules, which allows us to make changes gradually and easily present them to customers.",
  },
  {
    challenge: "Functional specification",
    desc: "Before modernization, we conduct an in-depth analysis of the legacy system, its architecture, and technologies. We also cooperate with the product owner's in-house employees to obtain more information about the system’s specifications.",
  },
  {
    challenge: "Downtimes",
    desc: "Downtimes are unacceptable for any business. To avoid such cases, we conduct rigorous Quality Assurance testing to identify and fix all bugs and malfunctions that can lead to downtimes or other errors.",
  },
];

const faqsAppModernization = [
  {
    question: "What is application modernization?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>App modernization services stand for updating outdated software systems by rewriting their functionality using modern programming languages, frameworks, and architectures. Besides that, modernization can be applied to the UI/UX part as well.</div>",
  },
  {
    question: "What are the strengths of app modernization services?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Application modernization can unlock new business opportunities, cut operational costs, increase business agility, provide scaling capabilities and top-notch security.</div>",
  },
  {
    question: "Who works on app modernization?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Modernization team may vary from project to project, but usually, app modernization team includes: business analysts, solution architects, UI/UX designers, software developers, QA engineers, DevOps engineers, Project Managers</div>",
  },
  {
    question: "How do application modernization services look like?",
    answer:
      "<div className={`mt-4 leading-relaxed text-gray-700 w-full`}>Modernization process consists of 5 consecutive steps: first contact, discovery phase, modernization, integration, support and maintenance.</div>",
  },
];

const perksAndBenifits = [
  {
    icon: <IoCalendarOutline />,
    title: "Flexible schedule",
    desc: "Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.",
  },
  {
    icon: <RiComputerLine />,
    title: "New Apple Computer",
    desc: "Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.",
  },
  {
    icon: <IoAirplaneOutline />,
    title: "Paid Holidays",
    desc: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.",
  },
  {
    icon: <IoCafeOutline />,
    title: "Open Cafeteria",
    desc: "Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.",
  },
  {
    icon: <HiOutlineCash />,
    title: "Competitive Salary",
    desc: "Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.",
  },
  {
    icon: <AiOutlineTeam />,
    title: "Team Building Camps",
    desc: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.",
  },
];

const careerOpportunities = [
  {
    jobId: "001",
    jobTitle: "Business Development Coordinator",
    jobLocation: "Vancouver, British Columbia",
  },
  {
    jobId: "002",
    jobTitle: "Full Stack Web Developer",
    jobLocation: "Vancouver, British Columbia",
  },
  {
    jobId: "003",
    jobTitle: "Social Media Marketing Manager",
    jobLocation: "San Francisco, California",
  },
  {
    jobId: "004",
    jobTitle: "Product Designer",
    jobLocation: "San Francisco, California",
  },
  {
    jobId: "005",
    jobTitle: "Mobile UX Designer",
    jobLocation: "San Francisco, California",
  },
];

export {
  perksAndBenifits,
  careerOpportunities,
  projectsData,
  companiesList,
  technicalProcess,
  services,
  testimonial,
  portfolioProjects,
  team,
  Expertise,
  Insights,
  offices,
  ourServices,
  ourRewards,
  caseStudies,
  industries,
  webTechnologies,
  mobileTechnologies,
  faqs,
  featuredPartners,
  featuredPartners1,
  featuredPartners2,
  servicesNew,
  softwareDevelopmentFlow,
  clientsTestimonials,
  industryExperts,
  helpBusinesses,
  certifications,
  connectOurTeams,
  customMobileApps,
  faqsMobile,
  mobileTechstack,
  blogs,
  portfolio,
  webApplications,
  webIndustriesExperts,
  webAppDevServices,
  webDevProcessAtNext,
  webAppsDelivered,
  mobileAndWebProducts,
  designRecognition,
  uxuiTimeTestedApproach,
  uxuiTimeTestedApproach1,
  uiuxDesignProcess,
  faqsUIUX,
  designInsights,
  whatWeTest,
  typesOfTesting,
  testingProcess,
  faqsQA,
  devOpsInsights,
  faqsDevOps,
  devOpsValues,
  reliableDevOpsSevices,
  photos,
  iOSAppsExcel,
  techForAdvanceIOSApps,
  iOSTechstack,
  faqsiOS,
  iOSDevInsignts,
  androidAppsBuilt,
  techForAdvanceAndroidApps,
  androidTechstack,
  fAQsAndroid,
  androidDevInsignts,
  flutterProjectsCompanies,
  techBenifits,
  businessBenifits,
  flutterExperience,
  faqsFlutter,
  flutterDevInsignts,
  webAppsToStartBusiness,
  techStackWebApps,
  techForAdvanceWebApps,
  faqsWebApps,
  faqsWebAppsServices,
  webDevInsignts,
  dedicatedDevTeam,
  strengthOfDedicatedTeam,
  howItWorks,
  whyChooseUs,
  whatWeOffer,
  whatWeNeed,
  fAQsDedicatedDevTeams,
  discoveryPhaseProcess,
  discoveryPhaseValue,
  productDiscoveryProcess,
  discoveryPhaseDeliverable,
  whyYouNeedDiscoveryPhase,
  discoveryPhaseIncludes,
  fAQsDiscoveryPhase,
  benifitsOfMVP,
  stepsMVPDevelopment,
  mvpIndustryExpertise,
  mvpDevlopmentProcess,
  fAQsMVP,
  benefitsCtoAsAService,
  howCanCTOHelpBusiness,
  achieveBusinessGoals,
  typesOfCTOServices,
  ctoTechExpertise,
  faqsCTO,
  ctoDevInsights,
  appModernizationServiceBenefits,
  modernizationServicesWeProvide,
  modernizationChallenges,
  faqsAppModernization,
};
