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
                        <br/><br/><!-- todo: change span for tech-used... -->
                        <span>Technologies used:</span>
                        <span v-for="tech in item.tech" class="tech-used">{{tech}}</span>
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
            title:'Portfolio site', 
            thumbnail:'', 
            text:'This portfolio site was created with Vue.js.',
            tech:['Vue.js 2', 'Vuetify (Component framework)'],
            link:''
        },
        {
            title:'MyBiz', 
            thumbnail:'', 
            text:'A web application for creating and exporting business proposals.',
            tech:['C#', 'JavaScript/jQuery', 'HTML', 'CSS', 'Material Design Lite'],
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
.tech-used{
    border:1px solid #ccc;
    padding:3px;
    margin-right:5px;
}
</style>
