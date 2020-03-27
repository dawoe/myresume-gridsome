<template>
    <section>
            <h2 class="section">
              Experience
            </h2>

            <div v-for="experience in $static.experiences.edges" :key="experience.node.id">
              <p class="font-bold">
                {{experience.node.company}} - {{experience.node.location}}
              </p>
              <p class="flex justify-between">
                <span class="italic">{{experience.node.role}} &nbsp;</span>
                <span class="italic">{{experience.node.period}}</span>
              </p>
              <p class="paragraph mt-4">
                {{experience.node.description}}
              </p>

            </div>

          </section>
</template>

<script>
    export default {

    }
</script>

<static-query>
query  {
 experiences : allExperiences(sortBy : "id", order :DESC) {
  edges {
    node {
      id,
      period,
      description,
      company,
      location,
      role

      }
    }
  }
}
</static-query>