import express, {json} from 'express';
import index from './routes/index.js';
import db from './database/dbConnect.js';

const app = express ();

app.use(json());
app.use("/",index);

db.on("error", console.log.bind(console, 'Erro de conexão') )
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});


export default app;

