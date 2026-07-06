import { Project } from "@/types/project";
export const projects: Project[] = [
  {
  id: 1,
  slug: "mbs-properties",

  title: "MBS Properties",
  category: "Real Estate",
  filter: "Business",

  image: "/images/projects/mbs-properties.png",
  heroImage: "/images/projects/mbs-properties-banner.png",

  description: "MBS Properties needed a premium online presence to showcase layouts, attract genuine buyers, and establish trust in the real estate market.",
  overview:
  "MBS Properties needed a premium online presence to showcase layouts, attract genuine buyers, and establish trust in the real estate market.",

challenge:
  "The company had no modern website, inconsistent branding, limited search visibility, and relied mainly on offline marketing.",

solution:
  "Designed a modern website, created brochures, optimized Google Business Profile, implemented SEO, and developed a complete digital marketing strategy.",

  technologies: ["Next.js",
    "Tailwind CSS",
    "Figma",
    "SEO",
    "Branding",
    "Digital Marketing"
  ],


  result: "150+ Leads",

  gallery: [
    "/images/projects/mbs-properties-1.png",
    "/images/projects/mbs-properties-2.png",
    "/images/projects/mbs-properties-3.png",
    "/images/projects/mbs-properties-4.png",
  ],
  stats: [
  {
    icon: "🚀",
    value: 150,
    suffix: "+",
    label: "Qualified Leads",
  },
  {
    icon: "🌐",
    value: 48,
    suffix: "K+",
    label: "Website Visitors",
  },
  {
    icon: "⭐",
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
],

  testimonial: {
    name: "Managing Director",
    role: "Founder",
    company: "MBS Properties",
    quote: "Excellent work."
  },

  live: "https://mbsproperties.in"
}
,
 {
  id: 2,
  slug: "mbs-construction",
  title: "MBS Construction",
  category: "Construction",
  filter: "Business",

  image: "/images/projects/mbs-construction.png",

  heroImage: "/images/projects/mbs-construction-banner.png",

  overview: "MBS Construction required a strong digital presence to showcase their industrial construction projects, attract clients, and establish credibility in the market.",
  challenge: "The company lacked a professional website, consistent branding, and effective marketing materials to compete in the industrial construction sector.",
  solution: "Developed a modern website, designed brochures, created social media marketing campaigns, and established a cohesive brand identity.",

  gallery: [
    "/images/projects/mbs-construction-1.png",
    "/images/projects/mbs-construction-2.png",
    "/images/projects/mbs-construction-3.png",
    "/images/projects/mbs-construction-4.png",
  ],
  stats: [
  {
    icon: "🏗️",
    value: 35,
    suffix: "+",
    label: "Industrial Projects",
  },
  {
    icon: "📈",
    value: 65,
    suffix: "%",
    label: "Brand Growth",
  },
  {
    icon: "⭐",
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
  },
],
  testimonial: {
    name: "Managing Director",
    role: "Founder",
    company: "MBS Construction",
    quote: "Excellent work."
  },

  description:
    "Industrial construction website, brochures, social media marketing and project branding.",

  technologies: [
    "UI Design",
    "SEO",
    "Branding",
  ],

  result: "Corporate Identity",

  live: "https://mbsconstruction.in",
},

{
  id: 3,
  slug: "mbs-brightech",

  title: "MBS Brightech",

  category: "Construction Equipment",

  filter: "Business",

  image: "/images/projects/mbs-brightech.png",

  heroImage: "/images/projects/mbs-brightech-banner.png",

  description:
    "Product catalogue, website, social media creatives and digital campaigns.",

  overview:
    "Created a premium digital presence for construction equipment products through branding, catalogue design, and a modern website.",

  challenge:
    "The business needed professional branding and marketing materials to compete in the national construction equipment market.",

  solution:
    "Designed marketing creatives, product catalogues, SEO-friendly website, and digital campaigns.",

  technologies: [
    "UI Design",
    "Catalog Design",
    "Marketing",
    "Branding",
  ],

  result: "National Brand Presence",

  gallery: [
    "/images/projects/mbs-brightech-1.png",
    "/images/projects/mbs-brightech-2.png",
    "/images/projects/mbs-brightech-3.png",
    "/images/projects/mbs-brightech-4.png",
  ],

  stats: [
    {
      icon: "🚜",
      value: 30,
      suffix: "+",
      label: "Products Showcased",
    },
    {
      icon: "🌐",
      value: 20,
      suffix: "K+",
      label: "Website Visitors",
    },
    {
      icon: "📈",
      value: 60,
      suffix: "%",
      label: "Online Reach",
    },
  ],

  testimonial: {
    name: "Managing Director",
    role: "Founder",
    company: "MBS Brightech",
    quote:
      "The website and catalogue significantly improved our brand image and customer engagement.",
  },

  live: "https://brightechindia.com/",
},
{
  id: 4,

  slug: "pixelgrowth-studio",

  title: "PixelGrowth Studio",

  category: "Creative Agency",

  filter: "Branding",

  image: "/images/projects/pixelgrowthstudio.png",

  heroImage: "/images/projects/pixelgrowth-banner.png",

  description:
    "Designed and developed a modern creative agency website with premium UI and branding.",

  overview:
    "PixelGrowth Studio represents a modern creative agency focused on branding, websites, and digital marketing.",

  challenge:
    "Needed an eye-catching digital identity capable of attracting startups and business clients.",

  solution:
    "Created a premium website with modern animations, branding, SEO, and responsive design.",

  technologies: [
    "Next.js",
    "Figma",
    "Branding",
    "SEO",
    "Website Development",
    "Digital Marketing",
  ],

  result: "Complete Agency Identity",

  gallery: [
    "/images/projects/pixelgrowth-1.png",
    "/images/projects/pixelgrowth-2.png",
    "/images/projects/pixelgrowth-3.png",
    "/images/projects/pixelgrowth-4.png",
  ],

  stats: [
    {
      icon: "🎨",
      value: 40,
      suffix: "+",
      label: "Brand Projects",
    },
    {
      icon: "🚀",
      value: 15,
      suffix: "+",
      label: "Websites Delivered",
    },
    {
      icon: "⭐",
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ],

  testimonial: {
    name: "Creative Director",
    role: "Founder",
    company: "PixelGrowth Studio",
    quote:
      "The final website perfectly represents our creative vision and professionalism.",
  },

  live: "https://pixelgrowthstudio.com/",
},

{
  id: 5,

  slug: "hrck",

  title: "HRCK",

  category: "Riding Community",

  filter: "Community",

  image: "/images/projects/hrck.png",

  heroImage: "/images/projects/hrck-banner.png",

  description:
    "Branding, event creatives, merchandise design, and social media management for the riding community.",

  overview:
    "Developed a strong visual identity for one of Karnataka's active riding communities.",

  challenge:
    "The community required consistent branding across social media, merchandise, and events.",

  solution:
    "Created logos, posters, ride creatives, merchandise, and digital campaigns.",

  technologies: [
    "Photoshop",
    "Illustrator",
    "Branding",
    "Social Media Management",
  "Event Marketing",

  ],

  result: "Strong Community Presence",

  gallery: [
    "/images/projects/hrck-1.png",
    "/images/projects/hrck-2.png",
    "/images/projects/hrck-3.png",
    "/images/projects/hrck-4.png",
  ],

  stats: [
    {
      icon: "🏍️",
      value: 120,
      suffix: "+",
      label: "Community Rides",
    },
    {
      icon: "👥",
      value: 500,
      suffix: "+",
      label: "Active Members",
    },
    {
      icon: "⭐",
      value: 98,
      suffix: "%",
      label: "Community Engagement",
    },
  ],

  testimonial: {
    name: "Community Lead",
    role: "Founder",
    company: "HRCK",
    quote:
      "Our branding now reflects the spirit and passion of our riding community.",
  },

  live: "https://www.royalenfield.com/ph/en/motorcycles/himalayan/",
},
]