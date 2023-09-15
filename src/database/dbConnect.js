import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:K3L8OP0CBkero69@cluster0.lfypkmv.mongodb.net/ehoje");

// A função connect guarda a string de conexão dentro dos parênteses.

let db = mongoose.connection;

// uma variável que guarda a ação de conectar nosso usuário com o mongoDB.

export default db;