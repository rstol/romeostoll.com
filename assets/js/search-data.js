// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-articles",
          title: "Articles",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-github",
          title: "Github",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Travel pictures and videos",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-book-summaries",
          title: "Book Summaries",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "books-briefe-an-einen-jungen-dichter",
          title: 'Briefe an einen jungen Dichter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/briefe_an_einen_jungen_dichter/";
            },},{id: "projects-weingut-stoll-website",
          title: 'Weingut-Stoll Website',
          description: "Weingut Stoll Website Redesign for a Family Winery",
          section: "Projects",handler: () => {
              window.location.href = "/projects/weingut-stoll/";
            },},{id: "projects-steuerladen-website",
          title: 'Steuerladen Website',
          description: "Steuerladen GmbH Web Application",
          section: "Projects",handler: () => {
              window.location.href = "/projects/steuerladen/";
            },},{id: "projects-deepplaybook",
          title: 'DeepPlaybook',
          description: "Deep Learning-Based Basketball Playbook Analysis for Coaches",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deep-playbook/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%6F%6D%65%6F@%72%6F%6D%65%6F%73%74%6F%6C%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/romeo-stoll-276238171", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@hearsadifferentdrummer", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
