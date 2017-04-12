<template>
    <div>
        <!--<v-row>
            <v-col xs12 sm12 md12 lg6 >-->
                <v-card hover raised v-for="project in portfolio" class="project-card">
                    <v-card-title>
                        {{project.title}}
                    </v-card-title>
                        
                    <v-card-text>
                        <div class="tech-section">
                            <div v-for="tech in project.tech" class="tech-item">{{tech}}</div>                            
                        </div>

                        <div class="project-text">{{project.text}}</div>
                    </v-card-text>

                    <v-card-row actions>
                        <v-btn v-if="project.github !== ''" class="prim-col" icon="icon" 
                            v-tooltip:right="{ html: 'View on GitHub' }"
                            @click.native="openUrl(project.github)">
                            <v-icon><i class="fa fa-github"></i></v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <!--<router-link v-if="project.link !== ''" :to="project.link">-->
                            <v-btn flat class="prim-col">View project</v-btn>
                        <!--</router-link>-->
                    </v-card-row>
                </v-card>
            <!--</v-col>
        </v-row>-->
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
            tech:['Vue.js','Vuetify'],
            github:'https://github.com/imartic/vue-cv',
            link:''
        },
        {
            title:'MyBiz v1', 
            thumbnail:'', 
            text:'A web application for creating and exporting business proposals.',
            tech:['C#','MS SQL Server','JavaScript/jQuery','HTML','CSS','Material Design Lite'],
            github:'https://github.com/imartic/MyBiz',
            link:''
        },
        {
            title:'Example Project', 
            thumbnail:'', 
            text:'Project example.',
            tech:['Technologies used'],
            github:'',
            link:''
        }
      ]
    }
  },
  methods: {
    openUrl: function(url) {
        window.open(url, '_blank').focus();
    }
  }
}
</script>

<style scoped>
.card__title{
    padding-bottom:3px;
}
.card__text{
    padding-top:0;
}
.tech-section{
    margin-bottom:35px;
}
.tech-item{
    border:1px solid #9ac;
    border-radius:2px;
    color:#646769;
    font-size:13px;
    padding:0 3px 0 3px;
    margin:3px 4px 0 0;
    display: inline-block;
}
</style>
