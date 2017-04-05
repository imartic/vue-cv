<template>
  <v-app id="cv">
    <v-toolbar-side-icon class="toggle-btn" @click.native.stop="sidebar = !sidebar"/>

    <v-sidebar drawer v-model="sidebar">
      <v-toolbar style="background-color:#156">
        <v-btn icon="icon" @click.native.stop="sidebar = !sidebar">
            <v-icon>close</v-icon>
          </v-btn>
      </v-toolbar>

      <v-list>
        <router-link v-for="item in menu" :to="item.path">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.text" />
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>

      <div class="menu-footer text-xs-center">
        Copyright &copy; {{getCurrentYear()}}. Ivan Martić
      </div>
    </v-sidebar>

    <main>
      <v-content class="main-content">

          <v-container fluid="fluid">
            <v-row>
              <v-col xs12 sm12 md5 lg4>
                <Profile></Profile>
                <v-btn flat block>
                  <v-icon left>file_download</v-icon>
                  Download CV
                </v-btn>
                <br/>
              </v-col>
              <v-col xs12 sm12 md7 lg8>
                <router-view></router-view>
              </v-col>
            </v-row>
          </v-container>

      </v-content>
    </main>

  </v-app>
</template>

<script>
import Profile from '@/components/Profile'

export default {
  name: 'app',
  data () {
    return {
      title: 'VUE',
      sidebar: false,
      menu:[
        {path:'/about', text:'About me', icon:'person'},
        {path:'/portfolio', text:'Portfolio', icon:'work'},
        {path:'/contact', text:'Contact me', icon:'mail'},
        {path:'', text:'Download CV', icon:'file_download'}
      ]
    }
  },
  methods: {
    getCurrentYear: function(){
      return new Date().getFullYear();
    }
  },
  components:{
    Profile
  }
}
</script>

<style>
  #cv{
    background-color:#f2f2f2
  }
  a{
    text-decoration:none;
  }
  .toggle-btn i{
    color:#156;
    padding:10px 5px 0 0;
  }
  .menu-footer{
    color:#cccc;
    position: absolute;
    bottom: 30px;
    width: 100%;
  }
  .main-content {
    padding: 10px 55px 16px 55px;
    background-color:inherit !important;
    transform: translate3D(0,0,0);
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-delay: .2s;
  }
  @media (max-width:600px){
    .main-content{
      padding-left:10px !important;padding-right:10px !important
    }
  }
  @media (min-width:1500px){
    .main-content{
      padding-left:300px !important;padding-right:300px !important
    }
  }

  .card{
    margin-bottom:16px
  }

  .input-group--text-field.input-group--focused label{
    color: #156 !important;
  }
  .input-group__details:after{
    background-color: #156 !important;
  }
</style>
