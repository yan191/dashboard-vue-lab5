<template>
    <div class="dashboard">
        <v-app-bar fixed dark color="#621055" :elevate-on-scroll="true">
            <v-toolbar-title>Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn v-if="roles.includes('ROLE_ADMIN')" text href="projetos">
                Projetos
            </v-btn>

            <v-btn v-if="roles.includes('ROLE_USER')" text href="apontamentos">
                Apontamento
            </v-btn>

            <v-btn icon @click="logout">
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>

            <template v-slot:extension v-if="route !== 'dashboard'">
                <v-tabs v-model="tabs" dark background-color="#621055" v-if="route === 'projetos'">
                    <v-tab>
                        Lista
                    </v-tab>
                    <v-tab>
                        Novo
                    </v-tab>
                </v-tabs>
                
                <v-tabs v-model="tabs" dark background-color="#621055" v-if="route === 'apontamentos'">
                    <v-tab>
                        Novo
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-tabs-items v-if="route === 'projetos'" v-model="tabs">
            <v-tab-item>
                <projetos-list></projetos-list>    
            </v-tab-item>
            <v-tab-item>
                <projetos-form></projetos-form>
            </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-if="route === 'apontamentos'" v-model="tabs">
            <v-tab-item>
                <apontamentos-form></apontamentos-form>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import ProjetosList from '@/components/ProjetosList.vue'
import ProjetosForm from '@/components/ProjetosForm.vue'
import ApontamentosForm from '@/components/ApontamentosForm.vue'

export default {
    name: 'dashboard',
    data: () => ({
        roles: (localStorage.getItem('roles')).split(','),
        username: localStorage.getItem('username'),
        route: '',
        tabs: 0
    }),
    mounted() {
        this.route = this.$route.name;
    },
    methods: {
        logout () {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('roles');

            this.$router.push('/');
        }
    },
    components: {
        ProjetosList,
        ProjetosForm,
        ApontamentosForm
    }
}
</script>

<style scoped>
    .dashboard {
        padding-top: 150px;
    }
</style>