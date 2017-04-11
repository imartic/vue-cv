<template>
  <v-app id="cv">
    <v-toolbar-side-icon class="toggle-btn" @click.native.stop="sidebar = !sidebar"/>
    <div class="in-progress">still in progress...</div>

    <v-sidebar drawer v-model="sidebar">
      <v-toolbar style="background-color:#146">
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
              <v-list-tile-title v-text="item.text" style="font-weight:400"/>
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

                <!-- modal -->
                <v-modal v-model="modal" class="cv-modal">

                  <v-btn flat block slot="activator" class="download-btn ">
                    <v-icon left>file_download</v-icon>
                    Download CV
                  </v-btn>

                  <v-card class="cv-modal-card">
                    <v-card-text>
                      <h2 class="title">Choose language of CV</h2>
                    </v-card-text>
                    <v-card-text>
                      <v-radio v-for="item in cv_langs" 
                        v-model="cv_lang" 
                        :label="item.text" 
                        :value="item.value" 
                        class="radio-cv-lang"/>
                    </v-card-text>
                    <v-card-row actions>
                      <v-btn flat block @click.native="downloadCV()" class="prim-col">Download</v-btn>
                    </v-card-row>
                  </v-card>

                </v-modal>
                <!-- modal -->

                <br/>
              </v-col>
              <v-col xs12 sm12 md7 lg8>
                <transition name="fade" mode="out-in">
                  <router-view></router-view>
                </transition>
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
      title: 'CV/Portfolio',
      sidebar: false,
      modal: false,
      menu:[
        {path:'/about', text:'About me', icon:'person'},
        {path:'/portfolio', text:'Portfolio', icon:'work'},
        {path:'/contact', text:'Contact me', icon:'mail'}
      ],
      cv_langs:[
        {text:'English', value:'en'},
        {text:'German', value:'de'},
        {text:'Croatian', value:'hr'},
      ],
      cv_lang:'en'
    }
  },
  methods: {
    getCurrentYear: function(){
      return new Date().getFullYear();
    },
    downloadCV: function(){
      this.modal = false;
      alert("CV's will be available shortly!");
    }
  },
  components:{
    Profile
  }
}
</script>

<style>
  /***** remove ******/
  .in-progress{
    position:absolute;
    top:19px;
    right:16px;
    color:#777;
  }
  /*******************/

  /* router-link transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  /*******************/

  #cv{
    background-color:#eeeff1
  }
  a{
    text-decoration:none;
  }
  .toggle-btn i{
    color:#146;
    padding:10px 5px 0 0;
  }
  .menu-footer{
    color:#999;
    font-weight:300;
    position: absolute;
    bottom: 30px;
    width: 100%;
  }
  .main-content {
    padding: 10px 55px 16px 55px;
    background-color:inherit !important;
    /*transform: translate3D(0,0,0);*/ /* removed bc of modal */
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-delay: .2s;
  }
  @media (max-width:1090px){
    .main-content{
      padding-left:10px !important;padding-right:10px !important
    }
  }
  @media (min-width:1600px){
    .main-content{
      padding-left:300px !important;padding-right:300px !important
    }
  }

  .prim-col{
    color:#146 !important;
  }

  .download-btn{
    margin-bottom:16px !important;
  }

  .card:not(.cv-modal-card){
    margin-bottom:16px;
  }

  .cv-modal, .modal__activator{
    width:100%;
  }

  .radio-cv-lang{
    margin:0 !important;
    color:#146;
  }

  .input-group--text-field.input-group--focused label{
    color: #146 !important;
  }
  .input-group__details:after{
    background-color: #146 !important;
  }
</style>
