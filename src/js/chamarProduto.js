import { Botoes } from "../models/Dashboard_Botoes.js";
import { Filtrar } from "../models/Dashboard_Filtrar.js";
import { Template } from "../models/Dashboard_Template.js";
async function chamar() {
    Template.template(await Filtrar.api())
    Botoes.adicionar()
    Botoes.Logout()
    Botoes.botoesMenu()
    Filtrar.filtrar()
}
chamar()