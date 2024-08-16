// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  //{ name: "Services", url: "/services" },
  { name: "Recycling Equipment", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Recycling & Equipment", url: "/products" },
      { name: "Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "https://www.recyclemachine.net/about-us" },
      { name: "Blog", url: "https://www.recyclemachine.net/recycling-machines" },
      { name: "Contact US", url: "https://www.recyclemachine.net/contact-us" },
      { name: "Privacy Policy", url: "https://www.recyclemachine.net/privacy-policy" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/recycle.machinery/",
  x: "https://twitter.com/",
  github: "https://github.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
