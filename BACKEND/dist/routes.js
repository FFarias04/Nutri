"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const CreateNutritionController_1 = require("./controllers/CreateNutritionController");
function routes(fastify, option) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/teste", (request, reply) => {
            console.log("ROTA CHAMADA!!!!!!!");
            reply.send({ ko: true });
        });
        fastify.post("/create", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateNutritionController_1.CreateNutritionController().handle(request, reply);
        }));
    });
}
