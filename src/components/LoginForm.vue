<template>
    <div class="login-form">
        <h1>Login</h1>
        <p>Insira suas credenciais e faça o login.</p>

        <div class="login-container">
            <v-form ref="loginForm" v-model="valid">
                <v-text-field label="Usuário" 
                            v-model="username"
                            :rules="txtRules"
                            outlined>
                </v-text-field>

                <v-text-field label="Senha" 
                            v-model="password"
                            :rules="txtRules"
                            type="password"
                            outlined>
                </v-text-field>
            </v-form>
        </div>

        <v-btn @click="validateLogin" :disabled="disableBtn" depressed dark color="#621055">Sign in</v-btn>

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
    name: 'login-form',
    data: () => ({
        valid: false,
        username: '',
        password: '',
        txtRules: [
            txt => !!txt || 'Campo obrigatório',
            txt => txt.length >= 4 || 'Min. 4 caracteres'
        ],
        snackbarTxt: '',
        snackbar: false,
        disableBtn: false
    }),
    methods: {
        validateLogin () {
            if (this.$refs.loginForm.validate()) {
                const username = this.username;
                const password = this.password;
                const app = this;
                this.disableBtn = true;

                this.axios.post('https://lab5-fatec.herokuapp.com/login', {username, password})
                .then(function (response){
                    const jwt = response.headers.authorization;
                    const jwtParsed = JSON.parse(atob(jwt.split('.')[1]));
                    localStorage.setItem('username', jwtParsed.sub);
                    localStorage.setItem('roles', jwtParsed.roles);
                    localStorage.setItem('token', jwt);

                    app.snackbarTxt = 'Login efetuado com sucesso!';
                    app.snackbar = true;
                    app.disableBtn = false;

                    app.$router.push('/dashboard');
                })
                .catch(function (error){
                    if ( error.response.status === 403 ) {
                        app.snackbarTxt = 'Credenciais inválida!';
                    } else {
                        app.snackbarTxt = 'Erro no sistema, aguarde e tente novamente';
                    }

                    app.snackbar = true;
                    app.disableBtn = false;
                });
            } else {
                this.snackbarTxt = 'Preencha todos os campos corretamente!';
                this.snackbar = true;
            }
        }
    }
}
</script>

<style scoped>
    .login-form {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .login-container {
        width: 350px;
        min-width: 50%;
        max-width: 90%;
        margin: 10px auto;
    }

    h1 {
        text-transform: uppercase;
        margin: 10px 0;
    }

    p {
        font-size: 18px;
        margin: 10px 0;
    }

    .error--text {
        color: red;
    }
</style>