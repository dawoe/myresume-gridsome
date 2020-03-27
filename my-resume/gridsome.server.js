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
    var experienceYears =  Math.abs(today.getUTCFullYear() - 2001)

    var personalData = {
      firstName : 'Dave',
      lastName : 'Woestenborghs',
      age,
      title : 'Senior Fullstack .NET developer',
      description : `Senior Fullstack .NET developer with ${experienceYears} years experience. Specialized in Umbraco CMS implementations. Strong affinity with frontend technoligies`
    }

    store.addMetadata('personalData', personalData)

  }

  const addContactData = (store) => {
    var contactData = {
      email : 'dave.woestenborghs@gmail.com',
      showEmail : true,
      phone : '+32497428408',
      showPhone : true,
      linkedIn : 'https://www.linkedin.com/in/davewoestenborghs/',
      twitter : 'https://twitter.com/dawoe21',
      github : 'https://github.com/dawoe'
    }

    store.addMetadata('contactData', contactData)
  }


  api.loadSource(async store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    store.addMetadata('bgImage', Path.resolve(__dirname, `src/assets/background.jpg`),)
    store.addMetadata('profileImage', Path.resolve(__dirname, `src/assets/me-large.jpg`),)
    addPersonalData(store);
    addContactData(store);
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
