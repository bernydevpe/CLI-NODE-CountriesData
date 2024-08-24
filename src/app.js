import { askContinue, askCountry, askDetails } from './presentation/services/inquierer.custom-services.js';

import { getCountryByNameOrder } from './data/services/countryService.js'

const main = async () => {
    let countryName;
    
    do {

        countryName = await askCountry();

        const resArr = getCountryByNameOrder(countryName);

        if (resArr.length === 0) {
            console.log("Países encontrados: 0");
        } else {
            const resp = await askDetails(resArr);
            const result = await getCountryByNameOrder(resp.details);
            console.table(result);
        }

        const continuar = await askContinue();
        if(!continuar.continuar){
          console.log('Bye');
          break;  
        }
        console.clear();       
    } while(true);
};


main();