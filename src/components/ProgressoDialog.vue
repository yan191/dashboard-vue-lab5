<template>
    <div class="progresso-dialog">
        <v-dialog v-model="dialog" width="500" v-if="!!apontamentos">
            <template v-slot:activator="{ on }">
                <v-btn class="ml-4" color="#621055" dark depressed v-on="on">
                    Progresso
                </v-btn>
            </template>

            <v-card color="#621055" dark>
                <v-card-title primary-title>
                    {{ projeto.nome }}
                    <v-spacer></v-spacer>
                    <v-btn color="#fff"
                            icon
                            @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text>
                    <v-sparkline :value="apontamentos"
                                color="#fff"
                                auto-draw>
                    </v-sparkline>
                    <div class="body-2">
                        Atual: {{ apontamentos.reduce((a, b) => a + b, 0) }}h
                    </div>
                    <div class="body-2">
                        Planejado: {{ projeto.horas_planejadas }}h
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'progresso-dialog',
    props: {
        projeto: Object
    },
    data() {
        return {
            dialog: false,
            apontamentos: null,
        }
    },
    mounted() {
        const app = this;

        this.axios.get('https://lab5-fatec.herokuapp.com/projeto/' + app.projeto.id + '/apontamento' )
        .then(function (response) {
            /* eslint-disable no-console */
            app.apontamentos = response.data.map(apontamento => apontamento.horas);
        });
    }
}
</script>

<style scoped>
    .progresso-dialog {
        display: inline;
    }
</style>