const country = 'https://restcountries.com/v3.1/region/asia';
const select = document.querySelector('#select');
const div = document.querySelector('#div');


let dateAll = [];

fetch(country)
    .then(res => res.json())
    .then(data => {
        dateAll = data;
        select.innerHTML += data.map(country => {
            return `<option class="options" id="${country.name.common}">${country.name.common}</option>`;
        }).join('');
    })
    .catch(error => {
        console.error('Error fetching country names:', error);
    });

select.addEventListener('change', (e) => {
    const selectedOption = e.target.selectedOptions[0];
    console.log(selectedOption.id);
    dateAll.forEach((item) => {
        let array = Object.keys(item.languages);
        let cur = Object.keys(item.currencies);
        if (item.name.common === selectedOption.id) {
            div.innerHTML = `
                <img src="${item.flags.png}" alt="Flag of ${item.name.common}">
                <span>Country: ${item.name.common}</span>
                <span>Страна: ${item.translations.rus.common}</span>
                <span>Capital: ${item.capital}</span>
                <span>Languages: ${item.languages[array[0]]}</span>
                <span>Currencies: ${item.currencies[cur[0]].name}</span>
                <span>Population: ${item.population}</span>
                <div class="map">
                     <a class="url" href="${item.maps.googleMaps}" target="_blank">Map</a>
                </div>
                
                
                
            `;
        }
    });
});

