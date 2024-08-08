
const fetchJour = () => {
    return new Promise((resolve, reject) => (
    fetch("./date_json.json")
        .then(res => res.json())
        .then(data => resolve(data[0]))
        .catch(err => reject(err))
    ))
}

async function getDate() {
    const jour = await fetchJour()

    console.log("jour  : " + jour.substring(15,17));
    console.log("mois  : " + jour.substring(12,14));
    console.log("annee ; " + jour.substring(7,11));

    let mois = "";

    switch (jour.substring(12,14)) {
        case "01" : mois = "janvier"; break;
        case "02" : mois = "février"; break;
        case "03" : mois = "mars"; break;
        case "04" : mois = "avril"; break;
        case "05" : mois = "mai"; break;
        case "06" : mois = "juin"; break;
        case "07" : mois = "juillet"; break;
        case "08" : mois = "août"; break;
        case "09" : mois = "septembre"; break;
        case "10" : mois = "octobre"; break;
        case "11" : mois = "novembre"; break;
        case "12" : mois = "décembre"; break;
    }

    let datelib = "date de référence : " +
                    jour.substring(15,17) + " " +
                    mois + " " + jour.substring(7,11);
    
    console.log(datelib);

    const ZoneDate = document.querySelector(".ZoneDate");
    console.log(ZoneDate);
    ZoneDate.innerText = datelib;
    
    // window.addEventListener("load", (event) => {
    //     // console.log("page complètement chargée, insertion date...");
    //     ZoneDate.innerText = datelib;
    // });

    console.log(ZoneDate);
}

getDate()