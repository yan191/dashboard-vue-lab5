<template>
    <div class="projetos-form">
        <v-card class="form">
            <v-card-title primary-title>
                CADASTRAR PROJETO
            </v-card-title>

            <v-card-text>
                <v-form ref="projetoForm" v-model="valid">
                    <v-text-field label="Nome"
                                v-model="nome"
                                :rules="nome_rules"
                                outlined>
                    </v-text-field>
                    <v-text-field label="Horas planejadas"
                                v-model="horas_planejadas"
                                :rules="horas_rules"
                                type="number"
                                outlined>
                    </v-text-field>
                </v-form>

                <v-btn @click="criarProjeto" :disabled="disableBtn" depressed dark color="#621055">cadastrar</v-btn>
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
    name: 'projetos-form',
    data: () => ({
        valid: false,
        nome: '',
        horas_planejadas: 0,
        nome_rules: [
            nome => !!nome || 'Campo obrigatório',
            nome => nome.length >= 4 || 'Min. 4 caracteres'
        ],
        horas_rules: [
            horas => !!horas || 'Campo obrigatório',
            horas => horas > 0 || 'Deve ser maior que 0'
        ],
        snackbarTxt: '',
        snackbar: false,
        disableBtn: false
    }),
    methods: {
        criarProjeto () {
            if (this.$refs.projetoForm.validate()) {
                const nome = this.nome;
                const horas_planejadas = this.horas_planejadas;
                const app = this;
                this.disableBtn = true;
    
                this.axios.post('https://lab5-fatec.herokuapp.com/projeto', {nome, horas_planejadas})
                .then(function() {
                    app.snackbarTxt = 'Projeto cadastrado com sucesso';
                    app.snackbar = true;
                    app.nome = '';
                    app.horas_planejadas = 0;
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
    .projetos-form {
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