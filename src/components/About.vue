<template>
    <div>
        <v-card>
            <v-card-title>
                {{title}}
            </v-card-title>

            <v-card-text>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.</span>
            </v-card-text>

            <v-card-actions>

            </v-card-actions>
        </v-card>

        <Experience></Experience>
        <Education></Education>
    </div>
</template>

<script>
import Experience from '@/components/Experience'
import Education from '@/components/Education'

export default {
  name: 'about',
  data () {
    return {
      title: 'About me'
    }
  },
  methods: {

  },
  components:{
    Experience, Education
  }
}
</script>

<style scoped>

</style>
