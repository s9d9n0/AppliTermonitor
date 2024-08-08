
function getTableHead(DataRef) {
    const column = Object.keys(DataRef[0]);
    // const column = Object.keys(Data[0]);
    const head = document.querySelector('thead');
    let tags = "<tr>";

    tags += `<th colspan=4  class="largeur1">Niveaux...</th>`;
    tags += `<th colspan=48 class="largeur2">Statut d'alerte par tranche de 30 min.</th>`;
    
    tags += "</tr><tr>";

    // tags += `<th rowspan=2 onclick="sortTable(0)">Zone</th>`;
    tags += `<th id="Brique" onclick="sortTable(1)">Brique/Quartier</th>`;
    tags += `<th id="Application" onclick="sortTable(2)">Application</th>`;
    tags += `<th id="Hote" onclick="sortTable(3)">H&ocirc;te&nbsp;&nbsp;</th>`;
    tags += `<th id="Service">Service</th>`;

    tags += `<th class="heure">00<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">01<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">02<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">03<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">04<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">05<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">06<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">07<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">08<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">09<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">10<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">11<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">12<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">13<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">14<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure"">15<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">16<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">17<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">18<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">19<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">20<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">21<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>
            <th class="heure">22<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th> 
            <th class="heure">23<sup>h</sup></th> <th class="heure"><sup>30</sup>--</th>`;

    tags += "</tr>";

    head.innerHTML = tags;
}

function getTableBody(DataRef){
    const body = document.querySelector('tbody');
    let tags = "";
    DataRef.map(d =>{

    //    <td>${d.zone}</td>
    tags += `<tr>
 
        <td>${d.Gr1}</td>
        <td>${d.Gr2}</td>
        <td>${d.name_host}</td>
        <td>${d.description}</td>`

    for (i = 0; i<d.status.length; i++){
        if (d.status[i]==0){
            tags += `<td class="transparent">${d.status[i]}</td>`
        }
        if (d.status[i]==1){
            tags += `<td style="background-color:orange;" class="transparent">${d.status[i]}</td>`
        }
        if (d.status[i]==2){
            tags += `<td style="background-color:red;" class="transparent">${d.status[i]}</td>`
        }
        if (d.status[i]==3){
            tags += `<td style="background-color:grey;" class="transparent">${d.status[i]}</td>`
        }
        if (d.status[i]==4){
            tags += `<td style="background-color:darkblue;" class="transparent">${d.status[i]}</td>`
        }
        if (d.status[i]==5){
            tags += `<td style="background-color:blue;" class="transparent">${d.status[i]}</td>`
        }
    }
    tags += `</tr>`
    })
    body.innerHTML = tags;
}