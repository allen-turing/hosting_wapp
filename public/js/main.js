const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if( cityVal=== ""){
        city_name.innerText =  `Please write a name first!`; 
        data_hide.classList.add('data_hide');

     }
    else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&APPID=5468a8797a6d6ac779db4b799579a44a`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerText =  `${arrData[0].name},${arrData[0].sys.country} `; 
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            // condtion to check sunny ir cloudy
            if(tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            }
            else if(tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }
            else if(tempMood == "Fog") {
                temp_status.innerHTML = "<i class='fas fa-cloud-showers-heavy' style = 'color: #f1f2f6;'></i>";
            }
            else if(tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style = 'color: #a4b0b3;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            }
            data_hide.classList.remove('data_hide');

        }catch{
            city_name.innerText =  `Please write name fg properly`;
            // data_hide.classList.add('data_hide');
            
        }
    }
}

submitBtn.addEventListener('click',getInfo);