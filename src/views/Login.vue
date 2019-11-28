<template>
    <div class="login">
        <div class="form">
            <login-form></login-form>
        </div>
        <div class="image">
            <div class="filter"></div>
        </div>
    </div>
</template>


<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
    name: 'Login',
    components: {
        LoginForm
    }
}
</script>

<style scoped>
    .login {
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    .form {
        flex-grow: 1;
    }

    .image {
        flex-grow: 3;
        background-color: grey;
        background-image: url('../assets/login-back.jpeg');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .filter {
        width: 100%;
        height: 100%;
        background-color: #621055;
        opacity: .5;
    }
</style>