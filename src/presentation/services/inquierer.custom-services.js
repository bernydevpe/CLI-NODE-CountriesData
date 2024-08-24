import inquirer from "inquirer";

export const askCountry = async () => {
    const resp = await inquirer.prompt({
        type: 'input',
        name: 'country',
        message: 'Ingrese nombre del país y presione <Enter>: '
    });
    return resp.country;
};

export const askContinue = async () => {
    const resp = await inquirer.prompt({
        type: 'confirm',
        name: 'continuar',
        message: 'Desea continuar? '
    });
    return resp;
};

export const askDetails = async (arr) => {

    const res = await inquirer.prompt({
        type: 'rawlist',
        name: 'details',
        message: 'Seleccione un número de país para mostrar sus datos',
        choices: arr.map( c => c.name )
    }).then( answer => {return answer} );

    return res;

};