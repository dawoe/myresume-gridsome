<template>
  <section class="pb-4 md:pr-4 print:pr-4">
    <h2 class="section">Profile</h2>
    <p class="paragraph">
      {{$static.metadata.personalData.description}}
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
    profileImage (width : 358, height : 538),
    personalData {
      description
    }
  }
}
</static-query>
