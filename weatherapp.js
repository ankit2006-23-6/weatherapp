let inp = document.querySelector(".input_box");
let search_button = document.querySelector("#search");
let wimage = document.querySelector(".weather_img");
let temp = document.querySelector(".temprature");
let text = document.querySelector(".text");
let humidity = document.querySelector("#humidity");
let windspeed = document.querySelector("#windspeed");



let api_key = "7bea7787cb9ca7d2d581315c145d3ad5";


search_button.addEventListener("click",async   function(){
    let ans =  await checkweather(inp.value);
    humidity.innerText = `${ans.main.humidity}%`;
    console.log(ans.main.humidity);
    console.log(ans.wind.speed);
    windspeed.innerText = `${ans.wind.speed}km/h`;
    console.log(ans.weather[0].main)
    text.innerText = `${ans.weather[0].main}`;
    console.log(Math.round(ans.main.temp - 273.15));
    temp.innerHTML = `${Math.round(ans.main.temp - 273.15)} degree celsius`;
    switch(ans.weather[0].main){
        case 'Clouds':
            wimage.src = "cloudimg.png.png";
            break;
        case 'Clear':
            wimage.src = "clearimg.png.png";
            break;
        case 'Rain':
            wimage.src = "rainimg.png.png";
            break;
        case 'Snow':
            wimage.src = "snowimg.png.png";
            break;            
    }



    
})


function show_img(){

}


async function checkweather(city){
    let api_key = "7bea7787cb9ca7d2d581315c145d3ad5";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    let data = await axios.get(url);
    return data.data;
}

