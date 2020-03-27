<template>
    <section class="pb-4 md:pr-4 print:pr-4">
            <h2 class="section">
              Contact
            </h2>
            <div class="flex mt-2" v-if="$static.metadata.contactData.showEmail">
              <i
                class="fas fa-envelope text-black mr-1"
                data-fa-transform="shrink-2"
              ></i>
              <a v-if="emailVisible" class="icon-text" :href="emailLink"
                >{{$static.metadata.contactData.email}}</a
              >
              <a class="icon-text" href="" v-if="!emailVisible" @click="emailVisible = true">Show e-mail</a>
            </div>
            <div class="flex mt-2" v-if="$static.metadata.contactData.showPhone">
              <i
                class="fas fa-phone text-black mr-1"
                data-fa-transform="shrink-3"
              ></i>
              <a v-if="phoneVisible" :href="phoneLink" class="icon-text"
                >{{$static.metadata.contactData.phone}}</a
              >
               <a class="icon-text" href="" v-if="!phoneVisible" @click="phoneVisible = true">Show phonenumber</a>
            </div>

            <div class="flex mt-2">
              <i
                class="fab fa-linkedin text-black mr-1"
                data-fa-transform="shrink-1"
              ></i>
              <a
                class="icon-text"
                :href="$static.metadata.contactData.linkedIn"
                rel="noopener noreferrer"
                target="_blank"
                >LinkedIn</a
              >
            </div>

            <div class="flex mt-2">
              <i
                class="fab fa-github-alt text-black mr-1"
                data-fa-transform="shrink-1"
              ></i>
              <a
                class="icon-text"
                 :href="$static.metadata.contactData.github"
                rel="noopener noreferrer"
                target="_blank"
                >Github</a
              >
            </div>


            <div class="flex mt-2">
              <i
                class="fab fa-twitter text-black mr-1"
                data-fa-transform="shrink-1"
              ></i>
              <a
                class="icon-text"
                :href="$static.metadata.contactData.twitter"
                rel="noopener noreferrer"
                target="_blank"
                >Twitter</a
              >
            </div>
          </section>
</template>

<script>
    export default {
        data() {
            return {
                emailVisible : false,
                phoneVisible : false
            }
        },
        computed : {
            phoneLink () {
                return `tel:${this.$static.metadata.contactData.phone}`
            },
            emailLink () {
                return `mailto:${this.$static.metadata.contactData.email}`
            }
        }
    }
</script>

<static-query>
query {
  metadata {
    contactData {
      email,
      showEmail,
      phone,
      showPhone,
      linkedIn,
      twitter,
      github
    }
  }
}
</static-query>

