<template>
  <section class="pb-4 md:pr-4 print:pr-4">
    <h2 class="section">Profile</h2>
    <p class="paragraph">
      Oscar is a social and driven software developer. His father has
      involved him in the computer from an early age and through proper
      guidance and training it has led to a passion for technology.
      Oscar has a broad field of interest and that can also be seen in
      the various techniques and technologies he has acquired over the
      years. During and after his studies, Oscar mainly developed in the
      field of web development. He has studied self-study into various
      technologies and software architectures. He can also be described
      as a social, enthusiastic and communicatively skilled software
      engineer. He has a passion for his profession, works hard and
      likes to contribute to a positive working atmosphere. His ambition
      is to work in a dynamic environment with an open culture and
      passionate employees. The ideal organization delivers an
      (innovative) product or service with real added value to the
      largest possible audience.
    </p>
    <g-image :src="$static.metadata.profileImage" class="mx-auto rounded-none lg:rounded-lg shadow-2xl  object-cover" />
  </section>
</template>

<script>
export default {};
</script>

<static-query>
query {
  metadata {
    profileImage (width : 358, height : 538)
  }
}
</static-query>
