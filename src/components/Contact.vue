<template>
    <div>
        <v-card>
            <v-card-title>
                <v-card-row :img="contactMe" height="200px">
                </v-card-row>
            </v-card-title>

            <v-card-text>
                <v-content class="px-2">
                    <v-container fluid>
                        <v-row>
                            <v-col xs12 sm12 md12 lg6>
                                <v-text-field name="name" label="Name">
                                </v-text-field>
                            </v-col>
                            <v-col xs12 sm12 md12 lg6>
                                <v-text-field name="email" label="E-mail *">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <!--<v-text-field name="subject" label="Subject *"></v-text-field>-->
                        <v-text-field name="message" label="Message *" multi-line>
                        </v-text-field>

                        <span style="color:rgba(0,0,0,.38)">
                            * required fileds
                        </span>
                    </v-container>
                </v-content>
            </v-card-text>

            <v-card-actions>
                <v-card-row actions>
                    <v-btn block flat class="send">
                        Send
                        <v-icon right>send</v-icon>
                    </v-btn>
                </v-card-row>
            </v-card-actions>
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
      contactMe: contact_img
    }
  },
  methods: {

  }
}
</script>

<style scoped>
    .card__title{padding:0;margin-bottom:15px}
    .send{color:#156}
</style>
