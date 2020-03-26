<template>
  <div :style="styles">
    <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

      <slot />

      <!-- Pin to top right corner -->
      <!-- <div class="absolute top-0 right-0 h-12 w-18 p-4">
		<button class="js-change-theme focus:outline-none">🌙</button>
      </div>-->
    </div>
  </div>
</template>

<script>
 export default {
   computed : {
     styles() {
       return {
         backgroundImage : `url(${this.$static.metadata.bgImage.src})`
       }
     }
   }
}
</script>

<static-query>
query {
  metadata {
    siteName,
    bgImage
  }
}
</static-query>
