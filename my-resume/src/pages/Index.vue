<template>
  <Layout>
    <div class="md:w-1/3 print:w-1/3">
      <Profile />
      <Contact />

      <!-- <Education /> -->
    </div>
    <div class="border-gray-700 border-t pt-4 md:right-column print:right-column">
      <Experience />
       <Skills />
      <!-- <Projects /> -->
    </div>

  </Layout>
</template>

<script>
import Profile from "../components/Profile.vue";
import Contact from "../components/Contact.vue";
import Skills from "../components/Skills.vue";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default {
  metaInfo()  {
    return {
      titleTemplate: `${this.$static.metadata.personalData.firstName} ${this.$static.metadata.personalData.lastName} - ${this.$static.metadata.personalData.title}`
    }
  },
  components: {
    Profile,
    Contact,
    Skills,
    Education,
    Experience,
    Projects
  }
};
</script>

<static-query>
query {
  metadata {
    personalData  {
      firstName,
      lastName,
      title
    }
    bgImage
  }
}
</static-query>