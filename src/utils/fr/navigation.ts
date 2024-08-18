
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  //{ name: "Services", url: "/fr/services" },
  { name: "équipements de recyclage", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/fr/products" },
      { name: "Services de Construction", url: "/fr/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "https://www.recyclemachine.net/about-us" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carrières", url: "https://www.recyclemachine.net/contact-us" },
      { name: "Clients", url: "https://www.recyclemachine.net/privacy-policy" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/recycle.machinery/",
  x: "#",
  github: "https://github.com",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};