import {Planeta} from "./Planeta";

export class SistemaSolar {
    constructor(nombre, numeroDePlanetas, estrella, edad, distanciaAlaTierra) {
        this.nombre = nombre;
        this.numeroDePlanetas = numeroDePlanetas;
        this.estrella = estrella;
        this.edad = edad;
        this.distanciaAlaTierra = distanciaAlaTierra;
        this.planetas = [];
    }

    aniadirPlaneta(planeta) {

        this.planetas.push(planeta);
    }




}