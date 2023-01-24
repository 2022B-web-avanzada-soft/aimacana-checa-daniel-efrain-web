const inquirer = require("inquirer");
const fs = require("fs");

class SistemaSolar {
    constructor(id, nombre, numeroDePlanetas, estrella, edad) {
        this.id = id;
        this.nombre = nombre;
        this.numeroDePlanetas = numeroDePlanetas;
        this.estrella = estrella;
        this.edad = edad;
    }
}

class Planeta {
    constructor(id, idSistema, nombre, numeroDeSatelites, distanciaAlSol, tieneAnillos, tieneVida, fechaUltimaVisita) {
        this.id = id;
        this.idSistema = idSistema;
        this.nombre = nombre;
        this.numeroDeSatelites = numeroDeSatelites;
        this.distanciaAlSol = distanciaAlSol;
        this.tieneAnillos = tieneAnillos;
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


function leer(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (errorLeerArchivoTxt, contenidoArchivo) => {
            if (errorLeerArchivoTxt) {
                reject("Error al leer el archivo");
            } else {
                resolve(contenidoArchivo);
                return contenidoArchivo
            }
        });
    });
}


// CREAR SISTEMASOLAR
async function crearSistemaSolar(sistemaSolar) {
    fs.readFile('sistemas.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(sistemaSolar+'Datos entrantes\n')
        console.log(data+'datos leidos\n');
        let sistemasSolares = JSON.parse(data);
        console.log(sistemasSolares+'objetos leidos de dara\n')
        sistemasSolares.push(sistemaSolar);
        console.log(sistemasSolares+'objetos pero aumentado\n')
        fs.writeFile('sistemas.txt', JSON.stringify(sistemasSolares), (err) => {
            if (err) {
                throw err;
            }
            //console.log('La marca de relojes ha sido creada exitosamente.');
        });
    });


}

// Función para leer un sistema solar
async function readSistemaSolar(id) {
    fs.readFile('sistemas.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let sistemasSolares = JSON.parse(data);
        let sistemaSolar = sistemasSolares.find(wb => wb.id === id);
        if (sistemaSolar) {
            console.log(sistemaSolar);
            return sistemaSolar;
        } else {
            console.log('El sistema solar no existe.');
        }
    });
}

// Función para actualizar un sistema solar
async function actualizarSistemaSolar(id, updates) {
    await fs.readFile('sistemas.txt', (err, data) => {
        if (err) {
            throw err;
        }
        //Arreglo de objetos de sistemas solares
        let sistemasSolares = JSON.parse(data);
        // devuelve el indice del areglo de objetos, cuando el indice mandado por parametros se igual al indice de ese indice.
        let sistemaSolarIndice = sistemasSolares.findIndex(wb => wb.id === id);
        if (sistemaSolarIndice !== -1) {
            for (let key in updates) {
                sistemasSolares[sistemaSolarIndice][key] = updates[key];
            }
            fs.writeFile('sistemas.txt', JSON.stringify(sistemasSolares), (err) => {
                if (err) {
                    throw err;
                }

            });
        } else {
            console.log('')
        }
    });
}

// Función para eliminar un sistema solar
async function borrarSistemaSolar(id) {
    await fs.readFile('sistemas.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let sistemasSolares = JSON.parse(data);
        let sistemaSolarIndice = sistemasSolares.findIndex(wb => wb.id === id);
        if (sistemaSolarIndice !== -1) {
            sistemasSolares.splice(sistemaSolarIndice, 1);
            fs.writeFile('sistemas.txt', JSON.stringify(sistemasSolares), (err) => {
                if (err) {
                    throw err;
                }
                console.log('')
            });
        } else {
            console.log('')
        }
    });
}

// CRUD entidad Planeta

// CREAR PLANETA
async function crearPlaneta(planeta) {
    fs.readFile('planetas.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let planetas = JSON.parse(data);

        planetas.push(planeta);
        fs.writeFile('planetas.txt', JSON.stringify(planetas), (err) => {
            if (err) {
                throw err;
            }
            console.log('')
        });
    });
}

// LEER PLANETA
async function readPlaneta(id) {
    fs.readFile('planetas.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let planetas = JSON.parse(data);
        let planeta = planetas.find(w => w.id === id);
        if (planeta) {
            return planeta;
        } else {
            console.log('El planeta no existe.');
        }
    });
}

// ACTUALIZAR PLANETA
async function updatePlaneta(id, updates) {
    fs.readFile('planetas.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let planetas = JSON.parse(data);
        let planetaIndice = planetas.findIndex(w => w.id === id);
        if (planetaIndice !== -1) {
            for (let key in updates) {
                planetas[planetaIndice][key] = updates[key];
            }
            fs.writeFile('planetas.txt', JSON.stringify(planetas), (err) => {
                if (err) {
                    throw err;
                }
                console.log('')
            });
        } else {
            console.log('')
            console.log('El reloj no existe.');
        }
    });
}

// ELIMINAR PLANETA
async function borrarPlaneta(id) {
    fs.readFile('planetas.txt', (err, data) => {
        if (err) {
            throw err;
        }
        let planetas = JSON.parse(data);
        let planetaIndice = planetas.findIndex(w => w.id === id);
        if (planetaIndice !== -1) {
            planetas.splice(planetaIndice, 1);
            fs.writeFile('planetas.txt', JSON.stringify(planetas), (err) => {
                if (err) {
                    throw err;
                }
                console.log('El planeta ha sido eliminado exitosamente.');
            });
        } else {
            console.log('El planeta no existe.');
        }
    });
}

async function leerOpcion() {
    try {
        const respuesta = await inquirer
            .prompt([{
                type: 'input', name: 'opcion', message: '...'
            }])
        return respuesta['opcion'];
    } catch (e) {
        console.log(e);
    }
}

async function mainPlanetas() {
    let opcion;
    while (opcion != 5) {
        console.log('\t PLANETA');
        console.log('1.- Leer\n2.- Crear\n3.- Modificar\n4.- Eliminar\n5.- Salir');
        console.log('Ingresa la opción...')
        opcion = Number(await leerOpcion());
        let planetas = null;
        switch (opcion) {
            case 1 :



                /* this.id = id;
        this.idSistema = idSistema;
        this.nombre = nombre;
        this.numeroDeSatelites = numeroDeSatelites;
        this.distanciaAlSol = distanciaAlSol;
        this.tieneAnillos = tieneAnillos;
        this.tieneVida = tieneVida;
        this.fechaUltimaVisita = fechaUltimaVisita;*/

                planetas = JSON.parse(await leer('planetas.txt'));
                for (const planeta of planetas) {
                    console.log('Codigo del planeta en el sistema:', planeta['id']);
                    console.log('Sistema al que pertenece:', planeta['idSistema']);
                    console.log('Número de satélites:', planeta['numeroDeSatelites']);
                    console.log('Fecha de última visita:', planeta['fechaUltimaVisita'], '\n');
                }

                break;
            case 2 :
                let id = 0;
                try {
                    const respuesta = await inquirer
                        .prompt(preguntasPlaneta);

                    const planetass = JSON.parse(await leer('planetas.txt'));
                    planetass.forEach(planeta => {
                        if (id < planeta["id"]) {
                            id = planeta["id"];
                        }
                    });
                    id++;
                    let planet = new Planeta(id, respuesta['idSistema'], respuesta["nombre"], respuesta['numeroDeSatelites'], respuesta['distanciaAlSol'], respuesta['tieneAnillos'], respuesta['tieneVida'], respuesta['fechaUltimaVisita']);

                    await crearPlaneta(planet);
                    console.log('planet creado');


                } catch (e) {
                    console.log(e);
                }
                break;

            case 3 :
                console.log('Ingrese el id del planeta a modificar')
                let modificar = Number(await leerOpcion());

                try {
                    const respuesta = await inquirer
                        .prompt(preguntasPlaneta);
                    let planetaNuevo = new Planeta(modificar, respuesta['idSistema'], respuesta["nombre"], respuesta['numeroDeSatelites'], respuesta['distanciaAlSol'], respuesta['tieneAnillos'], respuesta['tieneVida'], respuesta['fechaUltimaVisita']);
                    await updatePlaneta(modificar, planetaNuevo)
                    console.log("Planeta actualizado"+planetaNuevo)

                } catch (e) {
                    console && console.log(e)
                }
                break;
            case 4 :
                console.log('Ingrese el id del planeta a eliminar')
                let eliminar = Number(await leerOpcion());
                await borrarPlaneta(eliminar)
                break;
            default :
                break;
        }
    }
}

async function main() {
    let opcion;
    while (opcion != 6) {
        console.log('\t SISTEMAS SOLARES');
        console.log('1.- Leer un sistema solar\n2.- Crear un sistema solar\n3.- Modificar un sistema solar\n4.- Eliminar un sistema solar\n5.- PLANETA\n6.- Salir');
        console.log('Ingresa la opción')
        opcion = Number(await leerOpcion());
        let sistemas = null;
        switch (opcion) {
            case 1 :

                /*this.id = id;
     this.nombre = nombre;
     this.numeroDePlanetas = numeroDePlanetas;
     this.estrella = estrella;
     this.edad = edad;*/

                sistemas = JSON.parse(await leer('sistemas.txt'));
                sistemas.forEach(sistema => {
                    console.log('Nombre del sistema:', sistema['nombre']);
                    console.log('Número de planetas:', sistema['numeroDePlanetas']);
                    console.log('Su estrella es:', sistema['estrella']);
                    console.log('Edad:', sistema['edad'], '\n');
                });

                break;
            case 2 :
                let id = 0;
                try {
                    const respuesta = await inquirer
                        .prompt(preguntasSistemaSolar);

                    const sistemas = JSON.parse(await leer('sistemas.txt'));
                    sistemas.forEach(sistema => {
                        if (id < sistema["id"]) {
                            id = sistema["id"];
                        }
                    });
                    id++;
                    let sistema = new SistemaSolar(id, respuesta['nombre'], respuesta['numeroDePlanetas'], respuesta['estrella'], respuesta['edad']);
                    await crearSistemaSolar(sistema);
                    console.log('Sistema solar creado')


                } catch (e) {
                    console.log(e);
                }
                break;
            case 3 :
                console.log('Ingrese el id del sistema a modificar')
                let modificar = Number(await leerOpcion());
                try {
                    const respuesta = await inquirer
                        .prompt(preguntasSistemaSolar);
                    let sistema = new SistemaSolar(modificar, respuesta['nombre'], respuesta['numeroDePlanetas'], respuesta['estrella'], respuesta['edad']);
                    await actualizarSistemaSolar(modificar, sistema)
                    console.log('Sistema solar actualizado')

                } catch (e) {
                    console && console.log(e)
                }
                break;
            case 4 :
                console.log('Ingrese el id del sistema solar a eliminar')
                let eliminar = Number(await leerOpcion());
                await borrarSistemaSolar(eliminar);
                break;
            case 5 :
                console.log('\n')
                console.log('\n')
                await mainPlanetas();
                break;
            default :
                break;
        }
    }
}

main()


