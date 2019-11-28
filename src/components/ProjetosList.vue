<template>
    <div class="projetos-list">
        <div class="display-1 mb-3">LISTA DE PROJETOS</div>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>Projeto</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <funcionarios-dialog></funcionarios-dialog>
                    
                    <progresso-dialog></progresso-dialog>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import FuncionariosDialog from '@/components/FuncionariosDialog.vue'
import ProgressoDialog from '@/components/ProgressoDialog.vue'

export default {
    name: 'projetos-list',
    components: {
        FuncionariosDialog,
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