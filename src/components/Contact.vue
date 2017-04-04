<template>
    <div>
        <v-card>
            <v-card-title>
                <v-card-row img="/assets/contactme.jpg" height="100px">
                    {{title}}
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
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact me'
    }
  },
  methods: {

  }
}
</script>

<style>
.send{color:#156}

.input-group--text-field.input-group--focused label{
     color: #156 !important;
}
.input-group__details:after{
    background-color: #156;
}
</style>
