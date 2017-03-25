<template>
  <div class="container">
    <md-card class="profile-card">
        <md-card-area md-inset>
            <md-card-header>
                <div class="md-title info-heading">Ivan Martić</div>
                <div class="info-subheading">Software & Web Developer</div>
            </md-card-header>

            <md-card-content>
                <!-- CONTACT INFO -->
                <div class="infos">
                    <ul class="profile-list">
                        <li>
                            <span class="title"><md-icon>email</md-icon></span>
                            <span class="content">ivan.martic.ri@gmail.com</span>
                        </li>
                        <li>
                            <span class="title"><md-icon>language</md-icon></span>
                            <span class="content">ivanmartic.com</span>
                        </li>
                        <li>
                            <span class="title"><md-icon>phone</md-icon></span>
                            <span class="content">+385 91 200 8778</span>
                        </li>
                        <li>
                            <span class="title"><i class="fa fa-skype"></i></span>
                            <span class="content">imartic14@skype.com</span>
                        </li>
                        <li>
                            <span class="title"><i class="fa fa-linkedin"></i></span>
                            <span class="content">imartic14@linkedin.com</span>
                        </li>
                    </ul>
                </div>
                <br>
                <!--LINKS-->
                <!--<div class="links">
                    <md-button class="md-fab md-primary md-mini">
                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                    </md-button>
                </div>-->
            </md-card-content>
        </md-card-area>
        

        <div class="profile-nav">
            <md-button>
                <md-icon>person</md-icon>
                <md-tooltip md-direction="bottom" class="nav-tooltip">About me</md-tooltip>
            </md-button>
            <md-button>
                <md-icon>description</md-icon>
                <md-tooltip md-direction="bottom" class="nav-tooltip">Curriculum Vitae</md-tooltip>
            </md-button>
            <md-button>
                <md-icon>work</md-icon>
                <md-tooltip md-direction="bottom" class="nav-tooltip">Portfolio</md-tooltip>
            </md-button>
            <md-button>
                <md-icon>mail</md-icon>
                <md-tooltip md-direction="bottom" class="nav-tooltip">Contact me</md-tooltip>
            </md-button>
        </div>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      title: 'VUE'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-card{background-color:#156 !important;color:white;text-align:center;max-width:600px;min-width:230px;}
.profile-card .responsive-img{max-height:220px; margin-top:-105px;/*border:10px solid #156*/}

@media (max-width:670px){.profile-card{width:100% !important;margin-left:auto !important;margin-right:auto !important}
}

.info-heading{font-size:26pt;font-weight:400;color:#fff;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29);margin-top:10px;}
.info-subheading{font-weight:300;margin-bottom:10px;font-size:11pt;color:#ccc;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29);}
    
.profile-list{list-style-type: none;padding:0}
.profile-list .title{color:#fff;display:inline-flex;vertical-align:middle;padding-bottom:5px}
.profile-list .title i{font-size:23px;padding-right:5px}
.profile-list .title .fa{padding-left:2px;}
.profile-list .content{font-size:15px;font-weight:300;line-height:20px;color:#fff;}
/*.links .social{color:white}
.links .social:hover{color:white}
.links .social i{font-size:20px;vertical-align:middle}*/

.profile-nav{}
.nav-tooltip{font-size:10pt;font-weight:300;background-color:#145;}
</style>
