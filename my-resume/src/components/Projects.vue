<template>
  <section>
    <h2 class="section">{{title}}</h2>
    <div v-for="project in projects" :key="project.node.id">
      <div class="flex">
        <p class="font-bold mt-2 underline text-md mb-1">{{project.node.name}}</p>
        <a v-if="project.node.url != ''"
          class="icon-text"
          :href="project.node.url"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fas fa-home text-black mr-1" data-fa-transform="shrink-1"></i>
        </a>
      </div>
      <p class="flex justify-between">
        <span class="italic">{{project.node.role}}</span>
      </p>
      <div class="mt-4">
        <p class="paragraph" v-html="project.node.description"></p>

        <ul class="ml-4 mb-2" v-for="(keypoint,$index) in project.node.keyPoints" :key="$index">
          <li>{{keypoint}}</li>
        </ul>
      </div>

      <p class="paragraph italic">
        <strong>Keywords</strong>:
        <span v-for="(skill,$index) in project.node.skills" :key="$index">{{skill}},</span>
      </p>
    </div>

  </section>
</template>

<script>
export default {
  props: {
    title: String,
    projects: Array
  }
};
</script>