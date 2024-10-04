let mapCreation;

async function getCoordinatesForRegion(region) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(region)}`);
    const data = await response.json();

    if (data.length > 0) {
        return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
    } else {
        return { lat: 0, lon: 0 };
    }
    
}

async function reuseMapContent(data) {
    const incidentCountsByRegionYear = data.reduce((acc, incident) => {
        const region = incident.region_txt;
        const year = incident.iyear;
        if (!acc[region]) {
            acc[region] = {};
        }
        if (!acc[region][year]) {
            acc[region][year] = 0;
        }
        acc[region][year]++;
        return acc;
    }, {});

    return incidentCountsByRegionYear;
}

export async function getMapChart(data, containerId) {
    mapCreation = L.map(containerId).setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapCreation);

    const incidentCountsByRegionYear = await reuseMapContent(data);

    for (const [region, years] of Object.entries(incidentCountsByRegionYear)) {
        const { lat, lon } = await getCoordinatesForRegion(region);

        for (const [year, count] of Object.entries(years)) {
            L.marker([lat, lon]).addTo(mapCreation)
                .bindPopup(`<b>Region:</b> ${region}<br><b>Year:</b> ${year}<br><b>Incidents:</b> ${count}`);
        }
    }
}