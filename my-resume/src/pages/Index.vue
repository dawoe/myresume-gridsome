<template>
  <Layout>
    <div class="md:w-1/3 print:w-1/3">
      <Profile />
      <Contact />
      <Skills />
      <Education />
    </div>
    <div class="border-gray-700 border-t pt-4 md:right-column print:right-column">
      <Experience />
      <Projects />
    </div>

    <!-- <g-image :src="$static.metadata.profileImage" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block object-cover" /> -->
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
  metaInfo: {
    title: "Hello, world!"
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
    profileImage (width : 358, height : 538)
  }
}
</static-query>
