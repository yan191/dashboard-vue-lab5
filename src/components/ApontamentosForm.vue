<template>
    <div class="apontamentos-form">
        <v-card class="form">
            <v-card-title primary-title>
                FAZER APONTAMENTO
            </v-card-title>

            <v-card-text>
                <v-form ref="apontamentosForm">
                    <v-select :items="projetos"
                            v-model="projeto"
                            :rules="projeto_rules"
                            item-value="id"
                            item-text="nome"
                            label="Projetos"
                            outlined>
                    </v-select>
                    <v-text-field label="Horas trabalhadas"
                                v-model="horas"
                                :rules="horas_rules"
                                type="number"
                                outlined>
                    </v-text-field>
                </v-form>
                <v-btn @click="apontar" :disabled="disableBtn" depressed dark color="#621055">apontar</v-btn>
            </v-card-text>
        </v-card>
        <v-snackbar v-model="snackbar"
                    color="#b52b65"
                    :timeout="3000"
                    :top="true">
                    {{ snackbarTxt }}
                    <v-btn dark
                            text
                            @click="snackbar = false">
                            Fechar
                    </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    name: 'apontamentos-form',
    data: () => ({
        projetos: [],
        projeto: null,
        valid: false,
        horas: 0,
        projeto_rules: [
            projeto => !!projeto || 'Campo obrigatório',
            projeto => projeto > 0 || 'Campo inválido'
        ],
        horas_rules: [
            horas => !!horas || 'Campo obrigatório',
            horas => horas > 0 || 'Deve ser maior que 0'
        ],
        snackbarTxt: '',
        snackbar: false,
        disableBtn: true
    }),
    mounted () {
        const app = this;
        this.axios.get('https://lab5-fatec.herokuapp.com/projeto')
        .then(function (response) {
            app.projetos = response.data;
            app.disableBtn = false;
        });
    },
    methods: {
        apontar() {
            if (this.$refs.apontamentosForm.validate()) {
                const projeto_id = this.projeto;
                const horas = this.horas;
                const app = this;
                this.disableBtn = true;

                this.axios.post('https://lab5-fatec.herokuapp.com/apontamento', {horas, projeto_id})
                .then(function() {
                    app.snackbarTxt = 'Projeto cadastrado com sucesso';
                    app.snackbar = true;
                    app.projeto = null;
                    app.horas = 0;
                    app.disableBtn = false;
                }).catch(function (){
                    app.snackbarTxt = 'Erro no sistema, aguarde e tente novamente';
                    app.snackbar = true;
                    app.disableBtn = false;
                });
            }
        }
    }
}
</script>

<style scoped>
    .apontamentos-form {
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

    .form {
        width: 600px;
        max-width: 90vw;
        margin: auto;
    }
</style>