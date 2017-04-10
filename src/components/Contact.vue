<template>
    <div>
        <v-card>
            <v-card-title>
                <v-card-row :img="contactMe" height="200px">
                </v-card-row>
            </v-card-title>

            <v-alert error dismissible v-model="alert">
                {{alertMsg}}
            </v-alert>

            <form name="mail" class="mail-frm" action="https://formspree.io/ivan.martic.ri@gmail.com"
                method="POST">
                <v-card-text>
                    <v-content class="px-2">
                        <v-container fluid>

                            <v-row>
                                <v-col xs12 sm12 md12 lg6>
                                    <v-text-field label="Your E-mail *" name="email">
                                    </v-text-field>
                                </v-col>
                                <v-col xs12 sm12 md12 lg6>
                                    <v-text-field label="Subject *" name="_subject">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                            <v-text-field name="message" label="Message *" v-model="message" multi-line>
                            </v-text-field>

                            <span style="color:rgba(0,0,0,.38)">
                                * required fileds
                            </span>
                        
                        </v-container>
                    </v-content>
                </v-card-text>

                <input type="hidden" name="_next" value="" />
                <input type="text" name="_gotcha" style="display:none" />

                <v-card-row actions>
                    <v-btn block flat class="send" @click.native="checkInput"> <!--@click.native="sendMail"-->
                        Send
                        <v-icon right>send</v-icon>
                    </v-btn>
                </v-card-row>
            </form>
        </v-card>
    </div>
</template>

<script>
const contact_img = require('@/assets/contactme.jpg');

export default {
  name: 'contact',
  data () {
    return {
        title: 'Contact me',
        contactMe: contact_img,
        message:'',
        alert:false,
        alertMsg:''
    }
  },
  methods: {
    /*sendMail: function () {
        if(confirm('Send mail using your default E-mail application?')){
            var link = "mailto:ivan.martic.ri@gmail.com"
                + "?subject=" + escape("Hello!")
                + "&body=" + escape(this.message);

            window.location.href = link;
        }
    },*/
    checkInput: function () {
        if((document.mail.email.value === '') || (!this.validateEmail(document.mail.email.value))){
            this.alert = true;
            this.alertMsg = 'Please enter a valid e-mail address!';
            document.mail.email.focus();
            return;
        }
        if(document.mail._subject.value === ''){
            this.alert = true;
            this.alertMsg = 'Please enter a subject!';
            document.mail._subject.focus();
            return;
        }
        if(document.mail.message.value === ''){
            this.alert = true;
            this.alertMsg = 'Please enter your message!';
            document.mail.message.focus();
            return;
        }

        this.alert = false;
        this.alertMsg = '';
        document.mail.submit();
    },
    validateEmail: function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
  }
}
</script>

<style scoped>
    .card__title{padding:0;margin-bottom:15px}
    .send{color:#146}
    .card__title{margin-bottom:0}
    .alert{margin:0}
    .mail-frm{margin-top:10px}
</style>
