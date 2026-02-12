// console.log('1');

// setTimeout(() => {
//     console.log('2');
// }, 0);

// console.log('3');
// const t = [11, 1, 2, 4]

// console.log(t.sort(
//     (a, b) => a-b
// ));

// const sensors = [
//     { id: "TEMP_01", type: "temperature", value: 22.5, status: "active" },
//     { id: "POLL_01", type: "pollution", value: 85, status: "active" },
//     { id: "HUM_01", type: "temperature", value: 45, status: "inactive" },
//     { id: "TEMP_02", type: "temperature", value: 31.0, status: "active" },
//     { id: "POLL_02", type: "pollution", value: 42, status: "active" },
//     { id: "TEMP_03", type: "temperature", value: -5.0, status: "faulty" }
// ]; 
// // Calculer la température moyenne de tous les capteurs de type "temperature" 
// // (uniquement ceux qui ne sont pas "faulty").
// const nonFaultyTemperatureSensors = sensors.filter(
//     (sensor) => sensor.type == 'temperature' && sensor.status != 'faulty'
// );
// //console.log(nonFaultyTemperatureSensors);

// const avgNonFaultyTemperatureSensors = nonFaultyTemperatureSensors.length ? nonFaultyTemperatureSensors.reduce((acc, element) => acc + element.value, 0)/nonFaultyTemperatureSensors.length : 0;

// console.log(avgNonFaultyTemperatureSensors);
// select ampoule 
const ampoule = document.querySelector('div');
setInterval(
    () => {
        ampoule.classList.toggle('close');
        ampoule.classList.toggle('open');
    }, 1500
);
const regions = ['Djerba', 'Tunis', 'Sousse', 'Sfax', 'Kasserine', 'Beja'];
const ol = document.querySelector('.regions');
let i = 0;
setInterval(
    () => {
        if(!(i % regions.length)) {
            // remet à jour la liste
            ol.innerHTML = '';
        }
        // nzid une région fel liste 
        const region = `<li>${regions[i % regions.length]}</li>`;
        i++;
        ol.innerHTML+= region;
    }, 1000
)