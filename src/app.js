import express, {json} from 'express';
import index from './routes/index.js';
import db from './database/dbConnect.js';
import doadores from "./routes/projeto.js";

const app = express ();

app.use(json());
app.use("/",index);
app.use("/doadores", doadores);

db.on("error", console.log.bind(console, 'Erro de conexão') )
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});


export default app;

