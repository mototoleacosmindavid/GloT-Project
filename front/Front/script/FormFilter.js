"use strict";
import { BackendApi } from "./BackendApi.js";
import { PopulateSelect } from "./PopulateSelect.js";
import { validateMinMax } from "./NumberValidator.js";
import { GetAttackCard } from "./AttackCard.js";
import { buildFiltersFromUi } from "./AttacksFilterBuilder.js";
import { buildPagination, isPageActive, makeActiveOnlyPageLink } from "./Pagination.js";
import { getBarChart, getLineChart, getRadarChart } from "./ChartMaker.js";
import {getMapChart} from "./MapCreating.js";

const cards = document.getElementById('statictics');
cards.classList.remove('cards');

const itemsDisplayState = {
    itemsPerPageMax: 40,
    itemsMatchingFiltersCount: 0,
    pageTotal: 0
};

document.addEventListener("DOMContentLoaded", () => {
    populateUiFilters();
    staticticsWithAllData();

    document
        .getElementById("buttonFilter")
        .addEventListener("click", buttonFilterOnClick);

    downloadStatisticsSetup();

    setExclusiveCheckboxes("success-box-yes", "success-box-no");
    setExclusiveCheckboxes("suicide-box-yes", "suicide-box-no");

    const minVictimsInput = document.getElementById('min-value-nkill');
    const maxVictimsInput = document.getElementById('max-value-nkill');
    const minWoundedInput = document.getElementById('min-value-nwound');
    const maxWoundedInput = document.getElementById('max-value-nwound');

    minVictimsInput.addEventListener(
        'input',
        () => validateMinMax(minVictimsInput, maxVictimsInput));
    maxVictimsInput.addEventListener(
        'input',
        () => validateMinMax(minVictimsInput, maxVictimsInput));
    minWoundedInput.addEventListener(
        'input',
        () => validateMinMax(minWoundedInput, maxWoundedInput));
    maxWoundedInput.addEventListener(
        'input',
        () => validateMinMax(minWoundedInput, maxWoundedInput));
});

function setExclusiveCheckboxes(checkbox1Id, checkbox2Id) {
    const checkbox1 = document.getElementById(checkbox1Id);
    const checkbox2 = document.getElementById(checkbox2Id);

    checkbox1.addEventListener("change", () => {
        if (checkbox1.checked) {
            checkbox2.checked = false;
        }
    });

    checkbox2.addEventListener("change", () => {
        if (checkbox2.checked) {
            checkbox1.checked = false;
        }
    });
}

async function populateUiFilters() {
    try {
        const backendApi = new BackendApi();

        const years = await backendApi.fetchYears();
        PopulateSelect(years, 'selectAn');
        const countries = await backendApi.fetchCountries();
        PopulateSelect(countries, 'selectCountry');
        const attackTypes = await backendApi.fetchAttackTypes();
        PopulateSelect(attackTypes, 'selectAttack');
        const targetTypes = await backendApi.fetchTargetTypes();
        PopulateSelect(targetTypes, 'selectTargetType');
        const groupNames = await backendApi.fetchGroupNames();
        PopulateSelect(groupNames, 'selectNameGroup');
    } catch (error) {
        console.log(error);
    }
}

function displayItems(itemsToDisplay) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = "";
    itemsToDisplay.forEach((item, index) => {
        const rowIndex = Math.floor(index / 4);
        let rowDiv = document.querySelector(`#row-${rowIndex}`);
        if (!rowDiv) {
            rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.id = `row-${rowIndex}`;
            dataContainer.appendChild(rowDiv);
        }
        const cardDiv = GetAttackCard(item);
        rowDiv.appendChild(cardDiv);
    });
}

function buttonFilterOnClick() {
    cards.classList.add('cards');

    const filters = buildFiltersFromUi();
    const chartFilters = { ...filters };
    filters.indexStart = 1;
    filters.indexEnd = itemsDisplayState.itemsPerPageMax;

    const backendApi = new BackendApi();
    const attacksFetchTask = backendApi.fetchAttacks(filters);
    const attacksFetchTaskCount = backendApi.fetchAttacksCount(filters);
    const chartAttacksFetchTask = backendApi.fetchAttacks(chartFilters);

    attacksFetchTaskCount.then(count => {
        itemsDisplayState.itemsMatchingFiltersCount = count;
        itemsDisplayState.pageTotal = Math.ceil(count / itemsDisplayState.itemsPerPageMax);
        const currentPage = 1;
        buildPagination(
            currentPage,
            "paginationNumbers",
            itemsDisplayState.pageTotal,
            pageLinkOnClick);
        document.getElementById("results").innerText =
            `Numărul total de atacuri care corespund filtrelor : ${count}`;
    });

    attacksFetchTask.then(data => {
        displayItems(data);
    });
    chartAttacksFetchTask.then(data => {
        getBarChart(data, 'barChart');
        getLineChart(data,'lineChart');
        getRadarChart(data, 'radarChart');
    })
}

function staticticsWithAllData() {

    const statsData = buildFiltersFromUi();
    const backendApi = new BackendApi();
    const statsAttacksFetchTask = backendApi.fetchAttacks(statsData);
    
    statsAttacksFetchTask.then(data => {
        getBarChart(data, 'barChart');
        getLineChart(data,'lineChart');
        getRadarChart(data,'radarChart');
        getMapChart(data, 'map');
    })
}

function pageLinkOnClick(pageNumber) {
    console.log("Clicked on page no : " + pageNumber);
    const noChangeNeededDueToClickOnAlreadyActivePage = isPageActive("paginationNumbers", pageNumber);
    if (noChangeNeededDueToClickOnAlreadyActivePage) {
        return;
    }
    console.log("Building pagination");
    buildPagination(pageNumber, "paginationNumbers", itemsDisplayState.pageTotal, pageLinkOnClick);

    const filters = buildFiltersFromUi();
    filters.indexStart = (pageNumber - 1) * itemsDisplayState.itemsPerPageMax + 1;
    filters.indexEnd = pageNumber * itemsDisplayState.itemsPerPageMax;

    const backendApi = new BackendApi();
    const attacksFetchTask = backendApi.fetchAttacks(filters);
    attacksFetchTask.then(data => {
        displayItems(data);
    });
}

function downloadStatisticsSetup() {
    const container = document.getElementById("downloadDropdown");
    const options = container.getElementsByTagName("a");
    for (let i = 0; i < options.length; i++) {
        const optionText = options[i].innerText.toLowerCase();
        options[i].addEventListener("click", () => {
            switch (optionText) {
                case 'csv':
                    downloadStatistics('csv');
                    break;
                case 'png a chart-ului de tip box':
                case 'svg a chart-ului de tip box':
                    downloadCardImage(optionText.split(' ')[0], 'barChart');
                    break;
                case 'png a chart-ului de tip linear':
                case 'svg a chart-ului de tip linear':
                    downloadCardImage(optionText.split(' ')[0], 'lineChart');
                    break;
                case 'png a chart-ului de tip radar':
                case 'svg a chart-ului de tip radar':
                    downloadCardImage(optionText.split(' ')[0], 'radarChart');
                    break;
                default:
                    break;
            }
        });
    }
}

function downloadCardImage(format, chartId) {
    const node = document.getElementById(chartId);
    let extension;
    switch (format) {
        case 'png':
            extension = 'png';
            htmlToImage.toPng(node)
                .then(function (dataUrl) {
                    const link = document.createElement('a');
                    link.download = `chart-${chartId}.${extension}`;
                    link.href = dataUrl;
                    link.click();
                })
                .catch(function (error) {
                    console.error(`Error generating PNG for ${chartId}:`, error);
                    alert(`Error generating PNG for ${chartId}.`);
                });
            break;
        case 'svg':
            extension = 'svg';
            htmlToImage.toSvg(node)
                .then(function (dataUrl) {
                    const link = document.createElement('a');
                    link.download = `chart-${chartId}.${extension}`;
                    link.href = dataUrl;
                    link.click();
                })
                .catch(function (error) {
                    console.error(`Error generating SVG for ${chartId}:`, error);
                    alert(`Error generating SVG for ${chartId}.`);
                });
            break;
        default:
            break;
    }
}

function downloadStatistics(optionValue) {
    const filters = buildFiltersFromUi();
    const formatForDownload = optionValue.toLowerCase();
    const backendApi = new BackendApi();

    try {
        backendApi.downloadAttacksHavingFileFormat(filters, formatForDownload);
        console.log('Download initiated for format:', filters);
    } catch (error) {
        console.log('Error initiating download:', error);
        alert("Nu s-a putut descărca fișierul.");
    }
}
