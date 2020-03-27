<template>
  <div :style="styles">
    <div class="container mx-auto p-4 font-body  bg-white">
      <section class="mb-8">
        <section class="text-center">
          <h1
            class="font-header font-semibold text-red-500 text-3xl md:text-5xl print:text-5xl small-caps"
          >{{fullName}}</h1>
          <p class="text-xl">{{$static.metadata.personalData.title}}</p>
        </section>
      </section>
      <div class="md:flex print:flex">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    styles() {
      return {
        backgroundImage: `url(${this.$static.metadata.bgImage.src})`
      };
    },
    fullName() {
      return `${this.$static.metadata.personalData.firstName} ${this.$static.metadata.personalData.lastName}`;
    }
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
