<template>
    <v-card>
        <v-card-title>
            {{title}}
        </v-card-title>

        <v-card-text>
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
const logo = require('@/assets/logo.png');
const aa_logo = require('@/assets/aa.jpg');
const impuls_logo = require('@/assets/impuls.png');

export default {
  name: 'experience',
  data () {
    return {
      title: 'Experience',
      work:[
        {
            title:'Alarm automatika d.o.o.',
            logo:aa_logo, 
            pos:'Software Developer',
            time:'Nov 2016 - Present',
            text:'Working as Software Developer in Research & Development department at Alarm automatika d.o.o.' +
                '<br/>Company website: <a href="https://www.alarmautomatika.com/en">https://www.alarmautomatika.com</a>'
        },
        {
            title:'Impuls ing d.o.o.',
            logo:impuls_logo, 
            pos:'Software Developer',
            time:'Nov 2015 - Jul 2016',
            text:'Worked as Software Developer at Impuls ing d.o.o. ' +
                'Responsible for the development of a module for an existing desktop application. ' +
                '' +
                '<br/>Product website: <a href="http://www.integracert.com">http://www.integracert.com</a>'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style>
    .about-list{list-style-type:none;padding:0;margin-top:7px}
    .about-logo{padding:4px 10px 0 7px}
    .about-header{margin-bottom:15px;padding-left:7px}
    .divider{margin-top:28px;margin-bottom:28px}
    .about-pos{font-size:20px;font-weight:400}
    .about-title{font-size:15px;font-weight:500;color:#333;margin-right:10px}
    .about-time{padding-top:2px;font-weight:400;color:#333}
</style>
