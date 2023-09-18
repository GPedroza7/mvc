import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        dataNascimento: { type: String, required: true },
        cpf: { type: String, required: true },
        sexo: { type: String, required: true },
        peso: { type: String, required: true },
        tipoSanguineo: { type: String, required: true },
        endereco: { type: Object, required: true },
        telefone: { type: Array, required: true },
        email: { type: String, required: true },
        tatto: { type: Boolean, required: true },
        tempoTatto: { type: String, required: true },
        permissaoNotificacao: { type: Boolean, required: true },
        indicaAmigos: { type: Boolean, },


    }

)

const projetos = mongoose.model('projetos', projetoSchema);

export default projetos;
