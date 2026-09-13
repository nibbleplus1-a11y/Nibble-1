import nadeemsons from "../../assets/images/Projects/nadeemsons.png";
import earthstory from "../../assets/images/Projects/earthstory.png";
import horsepanels from "../../assets/images/Projects/horsepanels.png";
import golfbasket from "../../assets/images/Projects/golfbasket.png";
import ecomhabibi from "../../assets/images/Projects/ecomhabibi.png";
import codecanvas from "../../assets/images/Projects/codecanvas.png";
import flowingtoday from "../../assets/images/Projects/flowingtoday.png";
import militiachronicles from "../../assets/images/Projects/militiachronicles.png";
import waverii from "../../assets/images/Projects/waverii.png";
import mindfuel from "../../assets/images/Projects/mindfuel.png";
import fitsphere from "../../assets/images/Projects/fitsphere.png";
import rwood from "../../assets/images/Projects/rwood.png";
import murraytranslating from "../../assets/images/Projects/murraytranslating.png";
import murraycourt from "../../assets/images/Projects/murraycourt.png";
import hawthorne from "../../assets/images/Projects/hawthorne.png";
import quranapp from "../../assets/images/Projects/quranapp.png";
import claylite from "../../assets/images/Projects/claylite.png";

const projects = [
  {
    id: 1,
    title: "Nadeem Sons",
    category: "Corporate Website",
    image: nadeemsons,
    description:
      "A modern corporate website designed to showcase company services, products, and business information with a clean and professional interface.",
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    live: "http://nadeemsons.pk/",
    github: "",
    featured: false,
  },

  {
    id: 2,
    title: "Earth Story",
    category: "Environmental Platform",
    image: earthstory,
    description:
      "An engaging environmental awareness website focused on educating visitors through immersive storytelling and modern web design.",
    technologies: ["React", "Framer", "Responsive Design"],
    live: "https://plantz.io/earth-story/",
    github: "",
    featured: false,
  },

  {
    id: 3,
    title: "Horse Panels UK",
    category: "E-Commerce",
    image: horsepanels,
    description:
      "A responsive e-commerce website for premium horse panels and equestrian products with an intuitive browsing experience.",
    technologies: ["WordPress", "WooCommerce", "Responsive Design"],
    live: "https://www.horsepanelsuk.com/",
    github: "",
    featured: false,
  },

  {
    id: 4,
    title: "Golf Basket Hoops Play",
    category: "Sports Website",
    image: golfbasket,
    description:
      "A sports-focused website built to promote products and services with a modern, user-friendly interface.",
    technologies: ["React", "Responsive Design"],
    live: "https://golfbaskethoopsplay.com/",
    github: "",
    featured: false,
  },

  {
    id: 5,
    title: "Ecom Habibi",
    category: "Online Store",
    image: ecomhabibi,
    description:
      "An online shopping platform providing customers with a clean, fast, and responsive shopping experience.",
    technologies: ["Shopify", "Responsive Design"],
    live: "https://ecomhabibi.com/",
    github: "",
    featured: false,
  },

  {
    id: 6,
    title: "CodeCanvas",
    category: "Agency Portfolio",
    image: codecanvas,
    description:
      "A creative agency website showcasing modern design, animations, and premium web development services.",
    technologies: ["Framer", "UI Design"],
    live: "https://codecanvas.framer.website/",
    github: "",
    featured: false,
  },

  {
    id: 7,
    title: "Flowing Today",
    category: "Landing Page",
    image: flowingtoday,
    description:
      "A sleek business landing page built with smooth animations and an engaging user experience.",
    technologies: ["Framer", "Landing Page"],
    live: "https://flowing-today-201073.framer.app/",
    github: "",
    featured: false,
  },

  {
    id: 8,
    title: "Militia Chronicles",
    category: "History Platform",
    image: militiachronicles,
    description:
      "A military history website featuring informative content presented with a modern, responsive design.",
    technologies: ["React", "Content Website"],
    live: "https://militiachronicles.com/",
    github: "",
    featured: false,
  },

  {
    id: 9,
    title: "Waverii",
    category: "Travel & Surf Platform",
    image: waverii,
    description:
      "An all-in-one travel platform built for surf travel, connecting surfers worldwide with curated stays, guided experiences, and local surf services.",
    technologies: ["WordPress", "Custom Booking", "Responsive Design"],
    live: "https://waverii.com/",
    github: "",
    featured: true,
  },

  {
    id: 10,
    title: "Mind Fuel Official",
    category: "Wellness & Lifestyle",
    image: mindfuel,
    description:
      "A digital wellness publication providing expert articles and actionable insights on mental wellness, personal growth, motivation, and self-care.",
    technologies: ["WordPress", "RankMath SEO", "Editorial Design"],
    live: "https://mindfuelofficial.com/",
    github: "",
    featured: false,
  },

  {
    id: 11,
    title: "Official Fit Sphere",
    category: "Fitness & Training",
    image: fitsphere,
    description:
      "A dynamic health and fitness platform featuring personalized workout programs, expert trainer guidance, and a supportive community.",
    technologies: ["WordPress", "Elementor", "Responsive Design"],
    live: "https://officialfitsphere.com/",
    github: "",
    featured: false,
  },

  {
    id: 12,
    title: "Royal Wood Carpentry",
    category: "Carpentry & Joinery",
    image: rwood,
    description:
      "A premium UAE-based joinery and woodwork company showcasing bespoke architectural carpentry, custom furniture, and luxury commercial fit-outs.",
    technologies: ["WordPress", "Elementor", "Responsive Design"],
    live: "https://rwood.ae/",
    github: "",
    featured: false,
  },

  {
    id: 13,
    title: "Murray Translating Services",
    category: "Language & Translation",
    image: murraytranslating,
    description:
      "A veteran-owned professional agency offering certified legal translation, courtroom interpretation, and multi-language transcription across Florida.",
    technologies: ["WordPress", "Yoast SEO", "Corporate Website"],
    live: "https://murraytranslatingservices.com/",
    github: "",
    featured: false,
  },

  {
    id: 14,
    title: "Murray Court Reporting",
    category: "Court Reporting & Legal",
    image: murraycourt,
    description:
      "Tampa Bay's trusted court reporting agency delivering accurate stenographic depositions, legal videography, and litigation support services.",
    technologies: ["WordPress", "Legal Services", "Responsive Design"],
    live: "https://murraycourtreporting.com/",
    github: "",
    featured: false,
  },

  {
    id: 15,
    title: "Hawthorne Historical Society",
    category: "Heritage & Non-Profit",
    image: hawthorne,
    description:
      "A community-centered historical organization dedicated to preserving local heritage, managing museum archives, and organizing cultural events.",
    technologies: ["WordPress", "Donation Portal", "Non-Profit Design"],
    live: "https://hawthornehistoricalsociety.org/",
    github: "",
    featured: false,
  },

  {
    id: 16,
    title: "Al-Quran Kareem Mobile App",
    category: "Mobile Application (10K+ Downloads)",
    image: quranapp,
    description:
      "A production-ready Islamic mobile application built for Android with over 10,000+ active downloads on Google Play. Designed from the ground up for zero-latency recitation, intuitive navigation, and 100% offline accessibility.",
    technologies: ["React Native", "Android", "Mobile UI/UX", "Offline Storage", "SQL"],
    live: "https://play.google.com/store/apps/details?id=com.anonymous.quranapp&hl=en",
    github: "",
    featured: false,
    flagship: true,
    badge: "10,000+ Downloads on Google Play",
    stats: [
      { label: "Active Installs", value: "10,000+" },
      { label: "Store Rating", value: "4.8 ★" },
      { label: "Offline Access", value: "100%" },
    ],
    features: [
      "Complete 30 Juz & 114 Surahs with quick Para/Juz index navigation",
      "Instant Ayah search and seamless resume reading capability",
      "Smart bookmarks, personal notes & automated reading history",
      "100% offline architecture with zero latency or network dependency",
      "Tailored Islamic design aesthetic with calming typography & warm tones",
    ],
  },

  {
    id: 17,
    title: "Clay Lite - AI Sales & Lead Enrichment SaaS",
    category: "AI SaaS Platform",
    image: claylite,
    description:
      "A high-performance full-stack AI SaaS platform inspired by Clay.com, engineered to automate outbound prospecting, waterfall data enrichment, and email verification. Transforms raw company lists into verified, outreach-ready executive leads.",
    technologies: ["React", "Node.js", "AI Enrichment", "Web Scraping", "PostgreSQL", "OpenAI API"],
    live: "https://clay-dupe.chillkro.com/",
    github: "",
    featured: false,
    flagship: true,
    badge: "Autonomous AI Lead Intelligence",
    stats: [
      { label: "Prospects Enriched", value: "5,000+" },
      { label: "Email Accuracy", value: "95%+" },
      { label: "AI Response", value: "< 2s" },
    ],
    features: [
      "Multi-provider AI enrichment generating personalized outreach copy",
      "Interactive spreadsheet grid capable of manipulating thousands of leads",
      "Waterfall email verification ensuring deliverability and low bounce rates",
      "Automated sales triggers and webhook sync straight into CRM pipelines",
      "Custom web scraping and company domain intelligence extraction",
    ],
  },
];

export default projects;


