// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const Path = require('path')

module.exports = function (api) {

  const addPersonalData = (store) => {

    var birthDay = new Date(1977, 1, 21)
    var ageDiffMs = Date.now() - birthDay.getTime()
    var ageDate = new Date(ageDiffMs)
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    var today = new Date();
    var experienceYears = Math.abs(today.getUTCFullYear() - 2001)

    var personalData = {
      firstName: 'Dave',
      lastName: 'Woestenborghs',
      age,
      title: 'Senior Fullstack .NET developer',
      description: `I am senior Fullstack .NET developer with over ${experienceYears} years experience. Although my main focus is on backend coding, I also have a strong affinity with frontend technology.`
            +  `<br><br> I'm a result driven, with a great attention for quality and performance. A big fan of the solid principles and software design patterns.`
            +  `<br><br> In my career I worked with a broad range of content management systems, but the last couple of years I specialized myself in Umbraco CMS`
            +  `<br>Because of my active presence in the community and Umbraco core contributions I got awarded with 5 consecutive MVP awards from 2016 to 2020.`
    }

    store.addMetadata('personalData', personalData)

  }

  const addContactData = (store) => {
    var contactData = {
      email: 'dave.woestenborghs@gmail.com',
      showEmail: true,
      phone: '+32497428408',
      showPhone: true,
      linkedIn: 'https://www.linkedin.com/in/davewoestenborghs/',
      twitter: 'https://twitter.com/dawoe21',
      github: 'https://github.com/dawoe'
    }

    store.addMetadata('contactData', contactData)
  }

  const addSkills = (store) => {
    var groups = store.addCollection("SkillsGroup");


    var language = groups.addNode({
      id: 1,
      label: "Languages",
      skills: [{
        label: 'Dutch',
        level: 5
      },
      {
        label: 'English',
        level: 5
      },
      {
        label: 'French',
        level: 3
      },
      {
        label: 'German',
        level: 2
      }]
    });

    var proglanguage = groups.addNode({
      id: 2,
      label: "Programming Languages",
      skills: [{
        label: 'C#',
        level: 5
      },
      {
        label: 'Javascript',
        level: 5
      },
      {
        label: 'HTML',
        level: 5
      },
      {
        label: '(S)CSS',
        level: 4
      },
      {
        label: 'SQL',
        level: 4
      },
      {
        label: 'Regular Expressions',
        level: 3
      }]
    });

    var frameworks = groups.addNode({
      id: 3,
      label: "Frameworks/Libraries",
      skills: [{
        label: 'ASP.NET',
        level: 5
      },
      {
        label: 'VueJS',
        level: 4
      },
      {
        label: 'jQuery',
        level: 4
      },
      {
        label: 'ReactJS',
        level: 4
      },
      {
        label: 'AngularJS',
        level: 4
      },
      {
        label: 'SQL',
        level: 4
      },
      {
        label: 'TailwindCss',
        level: 4
      },
      {
        label: 'Gridsome',
        level: 4
      },
      {
        label: 'NuxtJS',
        level: 4
      },     
      {
        label: 'Typescript',
        level: 3
      }]
    });

    var cms = groups.addNode({
      id: 4,
      label: "Content Management Systems",
      skills: [{
        label: 'Umbraco',
        level: 5
      },
      {
        label: 'Sitecore',
        level: 3
      },
      {
        label: 'Smartsite',
        level: 3
      },
      {
        label: 'Alterian CMS (Mediasurface Morello)',
        level: 2
      },
      {
        label: 'Dot Net Nuke',
        level: 2
      }]
    });

    var tools = groups.addNode({
      id: 5,
      label: "Other tools",
      skills: [{
        label: 'Gulp',
        level: 4
      },
      {
        label: 'Webpack',
        level: 3
      },
      {
        label: 'NodeJs',
        level: 3
      },
      {
        label: 'Grunt',
        level: 3
      },
      {
        label: 'Git',
        level: 3
      },
      {
        label: 'Unit testing frameworks',
        level: 3
      }]
    });
  }

  const addExperiences = (store) => {
    var experience = store.addCollection("Experiences");

    experience.addNode({
      id : 1,
      period : "September 2000 - July 2007",
      role : "Consultant",
      description : "Full stack web developer. Responsible for various web projects and the development of the inhouse CMS \"Web Vision\"",
      company : "IT Omni",
      location : "Herk-de-Stad(B)"
    })

    experience.addNode({
      id : 2,
      period : "July 2007 - January 2020",
      role : "Senior ASP.NET Developer",
      description : "Full stack .net developer. Lead developer on Umbraco CMS projects",
      company : "We Are You",
      location : "'s-Hertogenbosch (NL)"
    })

    experience.addNode({
      id : 3,
      period : "February 2020 - March 2020",
      role : "Senior ASP.NET Developer",
      description : "Senior Developer on various sitecore and Umbraco cms projects",
      company : "Conclusion Zuyd",
      location : "Heerlen"
    })
    
     experience.addNode({
      id : 4,
      period : "May 2020 - June 2020",
      role : "Senior ASP.NET Developer",
      description : "Senior Developer on various projects",
      company : "Mediaan",
      location : "Heerlen"
    })
    
    experience.addNode({
      id : 5,
      period : "August 2020 - February 2021",
      role : "Lead Developer",
      description : "Lead Developer on various Umbraco projects",
      company : "Nexwork",
      location : "Maastricht"
    })
    
    experience.addNode({
      id : 6,
      period : "March 2021 - Present",
      role : "Lead Developer",
      description : "Lead Umbraco developer",
      company : "dotControl",
      location : "Heerlen"
    })
  }

  const addProjects = (store) => {
    var projects = store.addCollection("Projects");

    projects.addNode({
      id:1,
      sortOrder : 10,
      name : 'New Heroes',
      url : 'https://www.newheroes.com',
      role : 'Lead developer',
      description : 'New Heroes is a online learning platform with more than 130 online courses including time management, leadership, and assertiveness. '
                     + 'This online learing platform built on top of the Umbraco CMS allows people to start a subscription to get access to the full course catalog. '
                     + ' The course progress is tracked for each user so they can pick up where they left off.',
      keyPoints : [
        'Hosted on Azure Web Apps, configured for autoscaling to handle large amounts of traffic',
        'Integration Adyen payment provider to handle creating and renewals of subscriptions',
        "Integration of Ziggeo Video platform for hosting course video's. Also video's recorded by users on the platform are stored in Ziggeo"
      ],
      skills : ['ASP.NET', 'SQL Server', 'Azure', 'Reddis Cache', 'Ziggeo Video Integration', 'jQuery', 'Umbraco CMS', 'LiveWords integration', 'Adyen integration']
    })

    projects.addNode({
      id:2,
      sortOrder : 5,
      name : 'Oypo',
      url : 'https://www.oypo.nl',
      role : 'Lead developer',
      description : "Oypo is a platform where photographers can upload photos and sell photo products"
                     + 'The platform is build so the photographer is in full control, from which products to sell, at which price and discounts.'
                     + 'This was a rebuild from a classic ASP website to ASP.NET backed by a CMS to manage the content. The backend for photographers was built in ReactJS'
                     + 'Over 25000 photographers have uploaded over 80 million photos',
      keyPoints : [
        'Umbraco CMS is used to manage content',
        'ReactJS is used to build the backend for photographers and the product catalog and shopping basket',
        "Complex price ruling (per photographer)"
      ],
      skills : ['ASP.NET', 'SQL Server', 'jQuery', 'Umbraco CMS', 'ReactJs', 'Flux', 'React SSR', 'NHibernate', 'MultisafePay']
    })

    projects.addNode({
      id:3,
      sortOrder : 1,
      name : 'Vesteda',
      url : '',
      role : 'Lead developer',
      description : " Vesteda is a Dutch residential investor that mainly focuses on the mid-rental segment."
                     + 'Their current website dates from 2004 and not up to date with present technologies. '
                     + 'The goal was rebuilding the website, making it repsonsive and future proof.'
                     + 'At the moment the website is waiting to go live',
      keyPoints : [
        'Umbraco CMS is used to manage content',
        'VueJs is used for the houses and appartment search',
        "Data for houses and appartments is imported in to the CMS database and served as virtual pages"
      ],
      skills : ['ASP.NET', 'SQL Server', 'VueJs', 'Umbraco CMS', 'Lucene', 'Spatial Search']
    })

    projects.addNode({
      id:4,
      sortOrder : 2,
      name : 'IXXI ',
      url : 'https://www.ixxiyourworld.com/',
      role : 'Lead developer',
      description : " With IXXI, you can easily create your own personal wall decoration in any size you want. This high-quality product consists of cards and connectors, offering endless possibilities in image, shape and size."
                     + 'We built the website where users can create a IXXI with their own pictures (upload, facebook, instagram, ...) or order a predefined ixxi',
      keyPoints : [
        'Umbraco CMS is used to manage content',
        'Teacommerce is used for handling orders',
        "Azure search is used to store product information managed in the CMS",
        'Buckaroo is used for handling payments',
        'iTextSharp is used for generating high resolution PDF files for the printing company'
      ],
      skills : ['ASP.NET', 'SQL Server', 'jQuery', 'Umbraco CMS', 'Azure Search', 'Buckaroo', 'Facebook', 'Instagram', 'iTextSharp', 'Teacommerce']
    })
  }

  api.loadSource(async store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    store.addMetadata('bgImage', Path.resolve(__dirname, `src/assets/background.jpg`))
    store.addMetadata('profileImage', Path.resolve(__dirname, `src/assets/me-large.jpg`))
    addPersonalData(store);
    addContactData(store);
    addSkills(store);
    addExperiences(store);
    addProjects(store);
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
