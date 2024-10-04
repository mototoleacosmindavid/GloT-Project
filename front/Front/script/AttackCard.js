export function GetAttackCard(item) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const countryDiv = document.createElement('div');
    countryDiv.textContent = `Tara: ${item.country_txt}`;
    cardDiv.appendChild(countryDiv);

    const regionDiv = document.createElement('div');
    regionDiv.textContent = `Regiune: ${item.region_txt}`;
    cardDiv.appendChild(regionDiv);

    const yearDiv = document.createElement('div');
    yearDiv.textContent = `An: ${item.iyear}`;
    cardDiv.appendChild(yearDiv);

    const attacktypeDiv = document.createElement('div');
    attacktypeDiv.textContent = `Tipul atacului: ${item.attacktype1_txt}`;
    cardDiv.appendChild(attacktypeDiv);

    const targetTypeDiv = document.createElement('div');
    targetTypeDiv.textContent = `Tipul tintei: ${item.targtype1_txt}`;
    cardDiv.appendChild(targetTypeDiv);

    const numberKilledDiv = document.createElement('div');
    numberKilledDiv.textContent = `Numarul de victime: ${item.nkill}`;
    cardDiv.appendChild(numberKilledDiv);

    const numberWoundedDiv = document.createElement('div');
    numberWoundedDiv.textContent = `Numarul de raniti: ${item.nwound}`;
    cardDiv.appendChild(numberWoundedDiv);

    const successDiv = document.createElement('div');
    successDiv.textContent = `Succes: ${item.success === 1 ? 'Da' : 'Nu'} `;
    cardDiv.appendChild(successDiv);

    const suicideDiv = document.createElement('div');
    suicideDiv.textContent = `Sinucidere: ${item.suicide === 1 ? 'Da' : 'Nu'} `;
    cardDiv.appendChild(suicideDiv);

    const gnameDiv = document.createElement('div');
    gnameDiv.textContent = `Numele gruparii: ${item.gname}`;
    cardDiv.appendChild(gnameDiv);

    return cardDiv;
}