function GetValueFromToggle(boxYes, boxNo) {
    if (boxYes.checked && boxNo.checked) {
        return null;
    }
    if (boxYes.checked) {
        return true;
    }
    return false;
}
function NullIfEmpty(x) {
    return x === "" ? null : x;
}
function DefaultIfEmpty(x, defaultValue) {
    return x === "" ? defaultValue : x;
}

export function buildFiltersFromUi() {
    const selectedYear = document.getElementById('selectAn').value;
    const selectedCountry = document.getElementById('selectCountry').value;
    const selectedAttackType = document.getElementById('selectAttack').value;
    const selectedTargetType = document.getElementById('selectTargetType').value;
    const selectedGroupName = document.getElementById('selectNameGroup').value;
    const minVictims = document.getElementById('min-value-nkill').value;
    const maxVictims = document.getElementById('max-value-nkill').value;
    const minWounded = document.getElementById('min-value-nwound').value;
    const maxWounded = document.getElementById('max-value-nwound').value;
    const successYes = document.getElementById('success-box-yes').checked;
    const successNo = document.getElementById('success-box-no').checked;
    const suicideYes = document.getElementById('suicide-box-yes').checked;
    const suicideNo = document.getElementById('suicide-box-no').checked;

    const filters = {
        year: NullIfEmpty(selectedYear),
        country: NullIfEmpty(selectedCountry),
        attackType: NullIfEmpty(selectedAttackType),
        targetType: NullIfEmpty(selectedTargetType),
        groupName: NullIfEmpty(selectedGroupName),
        success: GetValueFromToggle(successYes, successNo),
        suicide: GetValueFromToggle(suicideYes, suicideNo),
        minVictims: DefaultIfEmpty(minVictims, 0),
        maxVictims: DefaultIfEmpty(maxVictims, 900000),
        minWounded: DefaultIfEmpty(minWounded, 0),
        maxWounded: DefaultIfEmpty(maxWounded, 900000)
    };
    return filters;
}