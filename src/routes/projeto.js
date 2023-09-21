import  express  from "express";
import ProjetoController from "../controllers/projetoControllers.js";

const router = express.Router();

router
.get("/", ProjetoController.getAllProjetos)
.post("/", ProjetoController.createProjetos)
.put("/:id", ProjetoController.updateProjetos)
.delete("/:id", ProjetoController.deleteProjetos)
.get("/:id", ProjetoController.getById)

export default router;