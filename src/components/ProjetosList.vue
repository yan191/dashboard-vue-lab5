<template>
    <div class="projetos-list">
        <div class="display-1 mb-3">LISTA DE PROJETOS</div>
        <v-expansion-panels>
            <v-expansion-panel v-for="(projeto, index) in projetos" :key="index">
                <v-expansion-panel-header>{{ projeto.nome }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <progresso-dialog :projeto="projeto"></progresso-dialog>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import ProgressoDialog from '@/components/ProgressoDialog.vue'

export default {
    name: 'projetos-list',
    data() {
        return {
            projetos: []
        }
    },
    mounted () {
        const app = this;
        this.axios.get('https://lab5-fatec.herokuapp.com/projeto')
        .then(function (response) {
            app.projetos = response.data;
        });
    },
    components: {
        ProgressoDialog
    }
}
</script>

<style scoped>
    .projetos-list {
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

    .v-expansion-panels {
        width: 600px;
        max-width: 90vw;
        margin: auto;
    }
</style>