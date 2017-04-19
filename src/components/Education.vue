<template>
    <v-card>
        <v-card-title>
            {{title}}
            <v-spacer></v-spacer>
            <v-btn icon flat v-tooltip:left="{ html: sectionTooltip }" @click.native="section = !section">
                <v-icon>{{sectionIcon}}</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text id="section-text-edu">
            <ul class="about-list">
                <li class="about-list-item" v-for="(item, index) in education">
                    <v-row>
                        <!--<div class="edu-logo">
                            <img :src="item.logo" height="70" width="70">
                        </div>-->
                        <div class="about-header">
                            <div class="about-pos">{{item.degree}}</div>
                            <div class="about-title">{{item.title}}</div>
                            <div class="about-time">{{item.time}}</div>
                        </div>
                    </v-row>

                    <div class="about-text" v-html="item.text"></div>
                    <v-divider v-if="index !== (education.length-1)"></v-divider>
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'education',
  data () {
    return {
      title: 'Education',
      section: true,
      sectionIcon: 'expand_less',
      sectionTooltip: 'Hide section',
      education:[
        {
            title:'Polytechnic of Rijeka - Croatia',
            logo:'', 
            degree:'Bachelor of Engineering, Telematics',
            time:'Oct 2012 - Mar 2017',
            text:'Bachelor\'s degree in Telematics.<br/>' +
                'Software Development/Engineering (C++, Java, SQL), Automation, Telecommunications, ' +
                'Electrical engineering, System design,...' +
                '<br/>University website: <a href="https://www.veleri.hr/">https://www.veleri.hr</a>'
        },
        {
            title:'Technical University of Applied Sciences Wildau - Germany',
            logo:'', 
            degree:'Telematics',
            time:'Mar 2015 - Jul 2015',
            text:'Exchange semester at TH Wildau.<br/>' +
                'Software project (JavaFX) and German language.' +
                '<br/>University website: <a href="http://www.th-wildau.de/">http://www.th-wildau.de</a>'
        }
      ]
    }
  },
  methods: {

  },
  watch: {
    section: function() {
        if(!this.section){
            document.getElementById('section-text-edu').style.display = "none";
            this.sectionIcon = 'expand_more';
            this.sectionTooltip = 'Show section';
        }
        else{
            document.getElementById('section-text-edu').style.display = "block";
            this.sectionIcon = 'expand_less';
            this.sectionTooltip = 'Hide section';
        }
    }
  }
}
</script>

<style scoped>

</style>
