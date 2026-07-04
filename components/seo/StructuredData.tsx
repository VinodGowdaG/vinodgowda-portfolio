export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Vinodgowda G",

    url: "https://vinodgowdag.com",

    image: "https://vinodgowdag.com/profile.jpg",

    jobTitle: "Creative Designer & Website Developer",

    description:
      "Creative Designer, Website Developer, Branding Expert and Digital Marketing Specialist.",

    email: "mailto:vinodgowdag351@gmail.com",

    sameAs: [
      "https://www.linkedin.com/in/YOUR-LINKEDIN",
      "https://github.com/YOUR-GITHUB",
      "https://www.instagram.com/YOUR-INSTAGRAM",
    ],

    knowsAbout: [
      "Website Development",
      "Next.js",
      "React",
      "UI/UX Design",
      "Graphic Design",
      "Branding",
      "SEO",
      "Digital Marketing",
      "Social Media Marketing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}