const inquirer = require("inquirer");
const fs = require("fs");

class SistemaSolar {
    constructor(nombre, numeroDePlanetas, estrella, edad, distanciaAlaTierra) {
        this.nombre = nombre;
        this.numeroDePlanetas = numeroDePlanetas;
        this.estrella = estrella;
        this.edad = edad;
        this.distanciaAlaTierra = distanciaAlaTierra;
        this.planetas = [];
    }

    addPlaneta(planeta) {
        this.planetas.push(planeta);
    }
}

class Planeta {
    constructor(nombre, tipo, tamaño, numeroDeSatelites, distanciaAlSol, tieneAnillos, descubiertoEn, descubridor, tieneVida, fechaUltimaVisita) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.tamaño = tamaño;
        this.numeroDeSatelites = numeroDeSatelites;
        this.distanciaAlSol = distanciaAlSol;
        this.tieneAnillos = tieneAnillos;
        this.descubiertoEn = descubiertoEn;
        this.descubridor = descubridor;
        this.tieneVida = tieneVida;
        this.fechaUltimaVisita = fechaUltimaVisita;
    }
}

const preguntasSistemaSolar = [
    {
        name: "nombre",
        message: "Ingresa el nombre del sistema solar:"
    },
    {
        name: "numeroDePlanetas",
        message: "Ingresa el número de planetas del sistema solar:"
    },
    {
        name: "estrella",
        message: "Ingresa el nombre de la estrella del sistema solar:"
    },
    {
        name: "edad",
        message: "Ingresa la edad del sistema solar:"
    }
];

const preguntasPlaneta = [
    {
        name: "nombre",
        message: "Ingresa el nombre del planeta:"
    },
    {
        name: "tamaño",
        message: "Ingresa el tamaño del planeta:"
    },
    {
        name: "numeroDeSatelites",
        message: "Ingresa el número de satélites del planeta:"
    },
    {
        name: "distanciaAlSol",
        message: "Ingresa la distancia al sol del planeta:"
    },
    {
        name: "tieneAnillos",
        message: "¿El planeta tiene anillos? (Sí/No)",
        type: "confirm"
    },
    {
        name: "tieneVida",
        message: "¿El planeta tiene vida? (Sí/No)",
        type: "confirm"
    },
    {
        name: "fechaUltimaVisita",
        message: "Ingresa la fecha de la última visita al planeta (YYYY-MM-DD):",
        type: "input"
    }
];

async function respuestasPlaneta(sistemaSolar, numeroPlanetas){

    do{
        const respuestas = await inquirer
            .prompt(preguntasPlaneta)
            .then(respuestasPlaneta => {
                let planeta = new Planeta(
                    respuestasPlaneta.nombre,
                    respuestasPlaneta.tipo,
                    respuestasPlaneta.tamaño,
                    respuestasPlaneta.numeroDeSatelites,
                    respuestasPlaneta.distanciaAlSol,
                    respuestasPlaneta.tieneAnillos,
                    respuestasPlaneta.descubiertoEn,
                    respuestasPlaneta.descubridor,
                    respuestasPlaneta.tieneVida,
                    respuestasPlaneta.fechaUltimaVisita
                );

                const jsonPlaneta = JSON.stringify(planeta);
                console.log(jsonPlaneta);
                sistemaSolar.addPlaneta(jsonPlaneta);
            });
        numeroPlanetas--;
    }while (numeroPlanetas > 0)


}



async function usuario() {


    const usr = await inquirer
        .prompt([
            {
                type: "list",
                name: "opcion",
                message: "¿Qué deseas hacer?",
                choices: [
                    "Crear sistema solar y planetas",
                    "Leer sistemas solares y planetas",
                    "Actualizar sistema solar y planetas",
                    "Eliminar sistema solar y planetas",
                    "Salir"
                ]
            }
        ])
        .then(respuestas => {
            switch (respuestas.opcion) {
                case "Crear sistema solar y planetas":
                    inquirer
                        .prompt(preguntasSistemaSolar)
                        .then(respuestasSistemaSolar => {
                            let sistemaSolar = new SistemaSolar(
                                respuestasSistemaSolar.nombre,
                                respuestasSistemaSolar.numeroDePlanetas,
                                respuestasSistemaSolar.estrella,
                                respuestasSistemaSolar.edad,
                                respuestasSistemaSolar.distanciaAlaTierra
                            );

                            respuestasPlaneta(sistemaSolar, sistemaSolar.numeroDePlanetas);

                            fs.writeFileSync(
                                `${sistemaSolar.nombre}.json`,
                                JSON.stringify(sistemaSolar)
                            );
                            console.log(
                                `Sistema solar ${sistemaSolar.nombre} y planetas creados y guardados en archivo local.`
                            );
                        });

                    break;
                case "Leer sistemas solares y planetas":
                    fs.readdir("./", (err, files) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        files
                            .filter(file => file.endsWith(".json"))
                            .forEach(file => {
                                let sistemaSolar = JSON.parse(fs.readFileSync(file));
                                console.log(`Sistema Solar: ${sistemaSolar.nombre}`);
                                console.log("Planetas:");
                                sistemaSolar.planetas.forEach(planeta => {
                                    console.log(`- ${planeta.nombre}`);
                                });
                            });
                    });
                    break;
                case "Actualizar sistema solar y planetas":
                    inquirer
                        .prompt([
                            {
                                name: "nombreSistemaSolar",
                                message: "Ingresa el nombre del sistema solar a actualizar:"
                            },
                            {
                                type: "list",
                                name: "opcionActualizar",
                                message: "¿Qué deseas actualizar?",
                                choices: [
                                    "Información del sistema solar",
                                    "Información de un planeta"
                                ]
                            }
                        ])
                        .then(respuestasActualizar => {
                            let sistemaSolar = JSON.parse(
                                fs.readFileSync(`${respuestasActualizar.nombreSistemaSolar}.json`)
                            );
                            if (respuestasActualizar.opcionActualizar === "Información del sistema solar") {
                                inquirer
                                    .prompt(preguntasSistemaSolar)
                                    .then(respuestasNuevaInfo => {
                                        sistemaSolar.nombre = respuestasNuevaInfo.nombre;
                                        sistemaSolar.numeroDePlanetas = respuestasNuevaInfo.numeroDePlanetas;
                                        sistemaSolar.estrella = respuestasNuevaInfo.estrella;
                                        sistemaSolar.edad = respuestasNuevaInfo.edad;
                                        sistemaSolar.distanciaAlaTierra = respuestasNuevaInfo.distanciaAlaTierra;
                                        fs.writeFileSync(
                                            `${sistemaSolar.nombre}.json`,
                                            JSON.stringify(sistemaSolar)
                                        );
                                        console.log(`Información del sistema solar ${sistemaSolar.nombre} actualizada.`);
                                    });
                            } else {
                                inquirer
                                    .prompt([
                                        {
                                            name: "nombrePlaneta",
                                            message: "Ingresa el nombre del planeta a actualizar:"
                                        },
                                        ...preguntasPlaneta
                                    ])
                                    .then(respuestasNuevaInfo => {
                                        let planeta = sistemaSolar.planetas.find(
                                            planeta => planeta.nombre === respuestasNuevaInfo.nombrePlaneta
                                        );
                                        planeta.nombre = respuestasNuevaInfo.nombre;
                                        planeta.tipo = respuestasNuevaInfo.tipo;
                                        planeta.tamaño = respuestasNuevaInfo.tamaño;
                                        planeta.numeroDeSatelites = respuestasNuevaInfo.numeroDeSatelites;
                                        planeta.distanciaAlSol = respuestasNuevaInfo.distanciaAlSol;
                                        planeta.tieneAnillos = respuestasNuevaInfo.tieneAnillos;
                                        planeta.descubiertoEn = respuestasNuevaInfo.descubiertoEn;
                                        planeta.descubridor = respuestasNuevaInfo.descubridor;
                                        planeta.tieneVida = respuestasNuevaInfo.tieneVida;
                                        planeta.fechaUltimaVisita = respuestasNuevaInfo.fechaUltimaVisita;
                                        fs.writeFileSync(
                                            `${sistemaSolar.nombre}.json`,
                                            JSON.stringify(sistemaSolar)
                                        );
                                        console.log(`Información del planeta ${planeta.nombre} actualizada.`);
                                    });
                            }
                        });
                    break;
                case "Eliminar sistema solar y planetas":
                    inquirer
                        .prompt([
                            {
                                name: "nombreSistemaSolar",
                                message: "Ingresa el nombre del sistema solar a eliminar:"
                            },
                            {
                                type: "confirm",
                                name: "confirmacion",
                                message: "¿Estás seguro de que deseas eliminar el sistema solar y sus planetas?"
                            }
                        ])
                        .then(respuestasEliminar => {
                            if (respuestasEliminar.confirmacion) {
                                fs.unlinkSync(`${respuestasEliminar.nombreSistemaSolar}.json`);
                                console.log(`Sistema solar ${respuestasEliminar.nombreSistemaSolar} y planetas eliminados.`);
                            } else {
                                console.log("Operación cancelada.");
                            }
                        });
                    break;
                case "Salir":
                    console.log("Hasta luego!");
                    menuContinuar = false;
                    break;
            }
        });
}

usuario();


