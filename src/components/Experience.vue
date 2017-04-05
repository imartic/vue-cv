<template>
    <v-card>
        <v-card-title>
            {{title}}
        </v-card-title>

        <v-card-text>
            <ul class="exp-list">
                <li class="exp-list-item" v-for="(item, index) in work" 
                :class="{notlast : index !== (work.length-1)}">
                    <v-row>
                        <div class="exp-logo">
                            <img :src="item.logo" height="70" width="70">
                        </div>
                        <div class="exp-header">
                            <div class="exp-title">{{item.title}}</div>
                            <div class="exp-pos">{{item.pos}}</div>
                            <div class="exp-time">{{item.time}}</div>
                        </div>
                    </v-row>
                    <v-divider></v-divider>
                    <div class="exp-text" v-html="item.text"></div>
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
            time:'November 2016 - present',
            text:'Working as Software Developer in Research & Development department at Alarm automatika d.o.o.' +
                '<br/>Company website: <a href="https://www.alarmautomatika.com/en">https://www.alarmautomatika.com</a>'
        },
        {
            title:'Impuls ing d.o.o.',
            logo:impuls_logo, 
            pos:'Junior Software Developer',
            time:'November 2015 - July 2016',
            text:'Worked as Junior Software Developer at Impuls ing d.o.o. ' +
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

<style scoped>
    .exp-list{list-style-type:none;padding:0;margin-top:7px}
    .notlast{margin-bottom:50px}
    .exp-logo{padding-left:7px;padding-right:10px}
    .exp-header{margin-bottom:15px;padding-left:7px}
    .exp-title{font-size:18px;font-weight:500;color:#424242;}
    .exp-pos{font-size:15px;font-weight:500;color:#333b}
    .exp-time{font-weight:400;color:#333b}
    .exp-text{padding-top:10px}
</style>
