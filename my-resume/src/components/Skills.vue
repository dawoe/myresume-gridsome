<template>
    <section class="border-t-py-4 md:pr-4 print:pr-4">
            <h2 class="section">
              Skills
            </h2>
             <div class="flex mt-2" v-for="(group,$groupindex) in groupedSkills" :key="$groupindex">
                <div class="w-1/2 mr-2" v-for="(skill) in group" :key="skill.node.id">
                  <p class="font-bold">
                    {{skill.node.label}}:
                  </p>
                  <div class="flex" v-for="item in skill.node.skills" :key="item.label">
                      <label class="w-1/2">{{item.label}}</label>
                      <meter  class="w-1/2"  :value="item.level" min="0" max="5">{{item.level}} out of 5</meter>
                  </div>
                </div>
            </div>

          </section>
</template>

<script>
    export default {
      computed : {
        groupedSkills() {
          let index = 0
          const arrayLength =  this.$static.skills.edges.length

          let tempArray = [];

          for(index = 0; index< arrayLength; index +=2){
            let myChunk = this.$static.skills.edges.slice(index, index+2)

            tempArray.push(myChunk)
          }

          return tempArray

        }
      }
    }
</script>

<static-query>
query {
 skills :  allSkillsGroup(sortBy : "id", order :ASC) {
  edges {
    node {
      id,
      label,
      skills {
        label,
        level
      }
    }
  }
}
}
</static-query>