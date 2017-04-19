<template>
    <v-card>
        <v-card-title>
            {{title}}
            <v-spacer></v-spacer>
            <v-btn icon flat v-tooltip:left="{ html: sectionTooltip }" @click.native="section = !section">
                <v-icon>{{sectionIcon}}</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text id="section-text-exp">
            <ul class="about-list">
                <li class="about-list-item" v-for="(item, index) in work">
                    <v-row>
                        <div class="about-logo">
                            <img :src="item.logo" height="70" width="70">
                        </div>
                        <div class="about-header">
                            <div class="about-pos">{{item.pos}}</div>
                            <div class="about-title">{{item.title}}</div>
                            <div class="about-time">{{item.time}}</div>
                        </div>
                    </v-row>
                    
                    <div class="about-text" v-html="item.text"></div>
                    <v-divider v-if="index !== (work.length-1)"></v-divider>
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
const aa_logo = require('@/assets/aa.jpg');
const impuls_logo = require('@/assets/impuls.png');

export default {
  name: 'experience',
  data () {
    return {
      title: 'Experience',
      section: true,
      sectionIcon: 'expand_less',
      sectionTooltip: 'Hide section',
      work:[
        {
            title:'Alarm automatika d.o.o.',
            logo:aa_logo, 
            pos:'Software Developer',
            time:'Nov 2016 - Present',
            text:'Working as Software Developer in Research & Development department at Alarm automatika d.o.o. ' +
                'Worked on several different projects and the ones I worked most on are a self-ticketing cashier for parking lots and a web application ' +
                'for event management (ticketing system) and supervision. For development I mainly used C#, JavaScript/jQuery, ' +
                'HTML, CSS and Microsoft SQL Server.' +
                '<br/>Company website: <a href="https://www.alarmautomatika.com/en">https://www.alarmautomatika.com</a>'
        },
        {
            title:'Impuls ing d.o.o.',
            logo:impuls_logo, 
            pos:'Software Developer',
            time:'Nov 2015 - Jul 2016',
            text:'Worked as Software Developer at Impuls ing d.o.o. ' +
                'Responsible for the development of a module for an existing desktop application. ' +
                'Worked with C# and Microsoft SQL Server (Transact-SQL).' +
                '<br/>Product website: <a href="http://www.integracert.com">http://www.integracert.com</a>'
        }
      ]
    }
  },
  methods: {

  },
  watch: {
    section: function() {
        if(!this.section){
            document.getElementById('section-text-exp').style.display = "none";
            this.sectionIcon = 'expand_more';
            this.sectionTooltip = 'Show section';
        }
        else{
            document.getElementById('section-text-exp').style.display = "block";
            this.sectionIcon = 'expand_less';
            this.sectionTooltip = 'Hide section';
        }
    }
  }
}
</script>

<style scoped>

</style>
