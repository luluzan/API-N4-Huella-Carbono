
const API_KEY = "9FQN2Q69ZQMYBRJ1QTX3C3A2JM3D";
const url = "https://beta4.api.climatiq.io/estimate";
const estimationTable = document.querySelector('.estimationTable');

const fetchData = async () => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              emission_factor: "passenger_vehicle-vehicle_type_car-fuel_source_diesel-distance_na-engine_size_medium",
              parameters: {
                  distance: 300,
                  distance_unit: "km",
                  passengers: 1,
              },
            }),
        ;

        if (!response.ok) {
            throw new Error("Error al realizar la consulta.");
        }

        const data = await response.json();

        const newRow = estimationTable.insertRow();
        const activityCell = newRow.insertCell();
        const emissionsCell = newRow.insertCell();

        activityCell.textContent = "Trayecto en coche"; 
        emissionsCell.textContent = `${data.co2e} ${data.co2e_unit}`;

    } catch (error) {
        console.log(error.message);
    }
};

fetchData();
