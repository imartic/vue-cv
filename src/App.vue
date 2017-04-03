<template>
  <v-app id="cv">
    <main>
      <v-content class="main-content">

          <v-container fluid="fluid">
            <v-row>
              <v-col xs12 sm6 md5 lg4>
                <Profile></Profile>
              </v-col>
              <v-col xs12 sm6 md7 lg8>
                <v-card>
                  <router-view></router-view>
                </v-card>
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
    }
  },
  methods: {

  },
  components:{
    Profile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toggle-btn{
    padding-top:55px;
    padding-left:35px;
  }
  .nav-link:hover{
    cursor:pointer;
    background-color:#ddd;
  }
  .tb-subTitle{
    position:absolute;
    margin-top:45px;
    padding-left:10px;
  }
  .main-content {
    padding: 16px 55px 16px 55px;
    background-color: #fff;
    transform: translate3D(0,0,0);
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-delay: .2s;
  }
  @media (max-width:700px){
    .main-content{
      padding-left:10px !important;padding-right:10px !important
    }
  }
  @media (min-width:1500px){
    .main-content{
      padding-left:300px !important;padding-right:300px !important
    }
  }
</style>
