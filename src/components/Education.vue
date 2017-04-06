<template>
    <v-card>
        <v-card-title>
            {{title}}
        </v-card-title>

        <v-card-text>
            <ul class="edu-list">
                <li class="edu-list-item" v-for="(item, index) in education" 
                :class="{notlast : index !== (education.length-1)}">
                    <v-row>
                        <!--<div class="edu-logo">
                            <img :src="item.logo" height="70" width="70">
                        </div>-->
                        <div class="edu-header">
                            <div class="edu-title">{{item.title}}</div>
                            <div class="edu-degree">{{item.degree}}</div>
                            <div class="edu-time">{{item.time}}</div>
                        </div>
                    </v-row>
                    <v-divider></v-divider>
                    <div class="edu-text" v-html="item.text"></div>
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
      education:[
        {
            title:'Polytechnic of Rijeka - Croatia',
            logo:'', 
            degree:'Bachelor of Engineering, Telematics',
            time:'October 2012 - March 2017',
            text:'Bachelor degree in Telematics.' +
                '<br/>University website: <a href="https://www.veleri.hr/">https://www.veleri.hr</a>'
        },
        {
            title:'Technical University of Applied Sciences Wildau - Germany',
            logo:'', 
            degree:'Telematics',
            time:'March 2015 - July 2015',
            text:'Exchange semester at TH Wildau.' +
                '<br/>University website: <a href="http://www.th-wildau.de/">http://www.th-wildau.de</a>'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
    .edu-list{list-style-type:none;padding:0;margin-top:7px}
    .notlast{margin-bottom:50px}
    .edu-logo{padding-left:7px;padding-right:10px}
    .edu-header{margin-bottom:10px;padding-left:7px}
    .edu-title{font-size:18px;font-weight:500;color:#424242;}
    .edu-degree{font-size:15px;font-weight:500;color:#333b}
    .edu-time{font-weight:400;color:#333b}
    .edu-text{padding-top:10px}
</style>
