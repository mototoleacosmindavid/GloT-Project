export function PopulateSelect(data, selectId) {
    const selectElement = document.getElementById(selectId);

    const anyOption = document.createElement('option');
    anyOption.value = "";
    anyOption.textContent = "Oricare";
    selectElement.appendChild(anyOption);

    data.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    });

    selectElement.addEventListener('change', function () {
        const selectedValue = selectElement.value;
        console.log(`Ai selectat: ` + selectedValue);
    });
}