export function validateMinMax(minInput, maxInput) {
    const minValue = parseInt(minInput.value, 10);
    const maxValue = parseInt(maxInput.value, 10);

    if (isNaN(minValue) || minValue < 0) {
        minInput.value = 0;
    }

    if (isNaN(maxValue) || maxValue < 0) {
        maxInput.value = 0;
    }

    if (minValue > maxValue) {
        alert("Valoarea minima nu are voie sa fie mai mare decat valoarea maxima!");
    }
}