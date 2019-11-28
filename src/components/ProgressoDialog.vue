<template>
    <div class="progresso-dialog">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn class="ml-4" color="#ed6663" dark depressed v-on="on">
                    Progresso
                    <v-progress-circular class="ml-2" dark :value="45" :size="20"></v-progress-circular>
                </v-btn>
            </template>

            <v-card color="#ed6663" dark>
                <v-card-title primary-title>
                    Progresso do projeto
                    <v-spacer></v-spacer>
                    <v-btn color="#fff"
                            icon
                            @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text>

                    <v-card class="subcard">
                        <v-card-title>
                                <div class="caption grey--text text-uppercase">
                                    Atual
                                </div>
                                <div>
                                    <span
                                        class="display-2 font-weight-black black--text"
                                        v-text="'100'"
                                    ></span>
                                    <strong>h</strong>
                                </div>

                                <div class="caption grey--text text-uppercase">
                                    Restante
                                </div>
                                <div>
                                    <span
                                        class="display-2 font-weight-black black--text"
                                        v-text="'100'"
                                    ></span>
                                    <strong>h</strong>
                                </div>
                        </v-card-title>
                    </v-card>

                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'progresso-dialog',
    data() {
        return {
            dialog: false
        }
    }
}
</script>

<style scoped>
    .progresso-dialog {
        display: inline;
    }

    .subcard {
        background-color: #fff !important;
    }
</style>