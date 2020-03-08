const config = {
  siteTitle: "Jean-François Brodeur",
  siteTitleShort: "Jean-François Brodeur",
  siteTitleAlt: "Jean-François Brodeur",
  siteLogo: "/logos/logo-1024.png",
  siteUrl: "https://jifbrodeur.netlify.com",
  repo: "https://github.com/jifbrodeur/taniarascia.com",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription:
    "Jean-François Brodeur is a full stack software developer specializing in modern JavaScript.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-42068444-1",
  postDefaultCategoryID: "Tech",
  newsletter: "https://taniarascia.substack.com",
  newsletterEmbed: "https://taniarascia.substack.com/embed",
  userName: "JiFBrodeur",
  userEmail: "jifbrodeur@jbmlogic.com",
  userTwitter: "jifbrodeur",
  menuLinks: [
    {
      name: "About me",
      link: "/me/"
    },
    {
      name: "Articles",
      link: "/blog/"
    },
    {
      name: "Contact",
      link: "/contact/"
    }
  ],
  themeColor: "#3F80FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff"
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
