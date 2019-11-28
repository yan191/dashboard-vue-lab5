<template>
    <div class="funcionarios-dialog">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn color="#621055" dark depressed v-on="on">
                    funcionários
                    <v-icon class="ml-2">mdi-account-supervisor-outline</v-icon>
                </v-btn>
            </template>

            <v-card color="#621055" dark>
                <v-card-title primary-title>
                    Funcionários do projeto
                    <v-spacer></v-spacer>
                    <v-btn color="#fff"
                            icon
                            @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text>
                    
                    <v-simple-table light>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center">Funcionário</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>teste</td>
                                </tr>
                                <tr>
                                    <td>teste</td>
                                </tr>
                                <tr>
                                    <td>teste</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'funcionarios-dialog',
    data() {
        return {
            dialog: false
        }
    }
}
</script>

<style scoped>
    .funcionarios-dialog {
        display: inline;
    }

    .theme--light.v-data-table {
        background-color: #621055;
        color: #fff;
    }

    .theme--light.v-data-table thead tr th {
        color: #fff;
    }

    .theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {
        background-color: #6e1660;
    }
</style>