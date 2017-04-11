<template>
    <div>
        <v-row>
            <v-col xs12 sm12 md12 lg6 v-for="item in portfolio">
                <v-card hover raised>
                    <v-card-title>
                        {{item.title}}
                    </v-card-title>
                        
                    <v-card-text>
                        <div v-for="tech in item.tech" class="tech-used">{{tech}}</div>
                        <br/>
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
.card__title{
    padding-bottom:5px;
}
.card__text{
    padding-top:0;
}
.tech-used{
    border:1px solid #9ac;
    padding:0 3px 0 3px;
    margin:2px 4px 30px 0;
    display: inline-block;
}
</style>
