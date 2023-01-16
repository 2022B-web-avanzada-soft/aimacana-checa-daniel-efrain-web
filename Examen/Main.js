const inquirer = require("inquirer");
const fs = require("fs");

const {SistemaSolar} = require("./Clases/SistemaSolar");


inquirer
    .prompt([
        {
            name: "sistemaSolarNombre",
            message: "Ingresa el nombre del sistema solar:",
            type: "input"
        },
        {
            name: "sistemaSolarNumeroDePlanetas",
            message: "Ingresa el número de planetas del sistema solar:",
            type: "input"
        },
        {
            name: "sistemaSolarEstrella",
            message: "Ingresa el nombre de la estrella del sistema solar:",
            type: "input"
        },
        {
            name: "sistemaSolarEdad",
            message: "Ingresa la edad del sistema solar:",
            type: "input"
        },
        {
            name: "sistemaSolarDistanciaAlaTierra",
            message: "Ingresa la distancia ala Tierra del sistema solar:",
            type: "input"
        }
    ])
    .then(answers => {
        console.log(answers);

        // for (let i = 0; i < sistemaSolar.numeroDePlanetas; i++) {
        //     inquirer
        //         .prompt([
        //             {
        //                 name: "planetaNombre",
        //                 message: "Ingresa el nombre del planeta:"
        //             },
        //             {
        //                 name: "planetaTipo",
        //                 message: "Ingresa el tipo de planeta:"
        //             },
        //             {
        //                 name: "planetaTamaño",
        //                 message: "Ingresa el tamaño del planeta:"
        //             },
        //             {
        //                 name: "planetaNumeroDeSatelites",
        //                 message: "Ingresa el número de satélites del planeta:"
        //             }
        //             ]
        //         )
        // }



        })