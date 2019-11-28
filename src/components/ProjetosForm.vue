<template>
    <div class="projetos-form">
        <v-card class="form">
            <v-card-title primary-title>
                CADASTRAR PROJETO
            </v-card-title>

            <v-card-text>
                <v-form ref="projetoForm">
                    <v-text-field label="Nome"
                                outlined>
                    </v-text-field>
                    <v-text-field label="Horas planejadas"
                                outlined>
                    </v-text-field>
                </v-form>
            </v-card-text>
        </v-card>
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
            nome => nome.length < 4 || 'Min. 4 caracteres'
        ],
        horas_rules: [
            horas => !!horas || 'Campo obrigatório',
            horas => horas <= 0 || 'Deve ser maior que 0'
        ]
    })
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