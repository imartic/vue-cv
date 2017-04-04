<template>
  <v-card class="profile-card">
    <div class="profile-header">
      <div class="md-title info-heading">Ivan Martić</div>
      <div class="info-subheading">Software & Web Developer</div>
    </div>

    <div class="infos">
      <ul class="profile-list">
        <li>
            <span class="title"><v-icon>email</v-icon></span>
            <span>ivan.martic.ri@gmail.com</span>
        </li>
        <li>
            <span class="title"><v-icon>language</v-icon></span>
            <span>ivanmartic.com</span>
        </li>
        <li>
            <span class="title"><v-icon>phone</v-icon></span>
            <span>+385 91 200 8778</span>
        </li>
        <li>
            <span class="title"><i class="fa fa-skype"></i></span>
            <span>imartic14@skype.com</span>
        </li>
        <li>
            <span class="title"><i class="fa fa-linkedin"></i></span>
            <span>imartic14@linkedin.com</span>
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
.info-subheading{font-weight:400;font-size:11pt;color:#ccc;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29)}

.infos{padding:20px 0 55px 0}
.profile-list{list-style-type: none;padding:0}
.profile-list .title{color:#fff;display:inline-flex;vertical-align:middle;padding-bottom:4px}
.profile-list .title i{font-size:23px;padding-right:5px}
.profile-list .title .fa{padding-left:2px;}
.profile-list .content{font-size:15px;font-weight:300;line-height:20px;color:#fff;}
i{font-size:23px;padding-right:5px}
.fa{padding-left:3px;}

.profile-menu{border-top:1px solid rgba(150,175,185,.4)}
</style>
