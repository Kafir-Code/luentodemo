import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import * as presentController from "./controllers/presentController.js";

const router = new Router();

router.get("/", presentController.showMain);

export { router };