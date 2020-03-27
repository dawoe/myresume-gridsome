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
      description: `Senior Fullstack .NET developer with ${experienceYears} years experience. Specialized in Umbraco CMS implementations. Strong affinity with frontend technoligies`
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
      period : "July 2000 - January 2020",
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
  }

  api.loadSource(async store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    store.addMetadata('bgImage', Path.resolve(__dirname, `src/assets/background.jpg`))
    store.addMetadata('profileImage', Path.resolve(__dirname, `src/assets/me-large.jpg`))
    addPersonalData(store);
    addContactData(store);
    addSkills(store);
    addExperiences(store);
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
