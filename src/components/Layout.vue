<template>
  <div class="layout phone-viewport">
    <md-button class="md-icon-button toggle-btn" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-small">
        <div class="md-toolbar-container">
          <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
            <md-icon>clear</md-icon>
          </md-button>
          <div class="md-title">{{title}}</div>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item class="nav-link" v-for="item in menu">
            <md-icon>{{item.icon}}</md-icon>
            <span>{{item.text}}</span>        
        </md-list-item>
      </md-list>
    </md-sidenav>

    <main class="main-content">
      <profile></profile>
      <content></content>
    </main>
    
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import Content from '@/components/Content'

export default {
  name: 'layout',
  data () {
    return {
      title: 'VUE',
      menu:[
        { text: 'Home', icon: 'home', link: '/' },
        { text: 'About', icon: 'person', link: '' },
        { text: 'Contact', icon: 'mail', link: '/contact' }
      ]
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  },
  components:{
    Profile, Content
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
    -ms-flex: 1;
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transform: translate3D(0,0,0);
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-delay: .2s;
  }
</style>
