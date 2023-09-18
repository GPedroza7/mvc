import  express  from "express";
import ProjetoController from "../controllers/projetoControllers";

const router = express.Router;

router
.get(ProjetoController.getAllProjetos)
.post(ProjetoController.createProjetos)

export default router;