<template>
  <v-card class="profile-card">
    <div class="profile-header">
      <div class="md-title info-heading">Ivan Martić</div>
      <div class="info-subheading">Software & Web Developer</div>
    </div>

    <div class="infos">
      <ul class="profile-list" v-for="item in profileList">
        <li>
            <span class="title" v-if="item.fa == ''"><v-icon>{{item.icon}}</v-icon></span>
            <span class="title" v-else><i :class="item.icon"></i></span>
            <span class="text">{{item.text}}</span>
        </li>
      </ul>
    </div>

    <div class="profile-menu">
      <router-link v-for="item in links" :to="item.path">
        <v-btn dark flat v-tooltip:bottom="{ html: item.text }">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </router-link>
    </div>

  </v-card>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      title: 'VUE',
      profileList:[
        {text:'ivan.martic.ri@gmail.com', icon:'mail', fa:''}, //fa:'' or null (no fa)..
        {text:'ivanmartic.com', icon:'language', fa:''},
        {text:'+385 91 200 8778', icon:'phone', fa:''},
        {text:'imartic14@skype.com', icon:'fa fa-skype', fa:'sykpe'},
        {text:'linkedin.com/ivanmartic', icon:'fa fa-linkedin', fa:'linkedin'}
      ],
      links:[
        {path:'/about', text:'About me', icon:'person'},
        {path:'/portfolio', text:'Portfolio', icon:'work'},
        {path:'/contact', text:'Contact me', icon:'mail'}
      ]
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-card{background-color:#156 !important;color:white;text-align:center;}
.profile-card .responsive-img{max-height:220px; margin-top:-105px;/*border:10px solid #156*/}

.profile-header{padding:35px 35px 19px 35px;}

.info-heading{font-size:26pt;font-weight:500;color:#fff;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29)}
.info-subheading{font-weight:400;font-size:12pt;color:#ccc;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29);margin-top:-10px}

.infos{padding:20px 0 50px 0}
.profile-list{list-style-type: none;padding:0}
.profile-list li{padding-bottom:8px}
.profile-list .title{color:#fff;display:inline-flex;vertical-align:middle;padding-bottom:4px}
.profile-list .title i{font-size:23px;padding-right:5px}
.profile-list .title .fa{padding-left:2px;}
.profile-list .text{font-size:16px;font-weight:400;line-height:20px;color:#fff;}
i{font-size:23px;padding-right:5px}
.fa{padding-left:3px;}

.profile-menu{border-top:1px solid rgba(150,175,185,.4)}

.router-link-active > button i{
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color:#156;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
</style>
