<template>
    <div>
        <v-row>
            <v-col xs12 sm12 md12 lg6 v-for="item in portfolio">
                <v-card hover raised>
                    <v-card-title>
                        {{item.title}}
                    </v-card-title>
                        
                    <v-card-text>
                        {{item.text}}
                    </v-card-text>

                    <v-card-row actions>
                        <v-btn flat class="prim-col">View project</v-btn>
                    </v-card-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      title: 'Portfolio',
      portfolio:[
        {
            title:'Project One', 
            thumbnail:'', 
            text:'Portfolio project example',
            link:''
        },
        {
            title:'Project Two', 
            thumbnail:'', 
            text:'Another Portfolio project example',
            link:''
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
