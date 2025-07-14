function updateCityTime(){
    let londonElement=document.querySelector("#london");
    let moscowElement=document.querySelector("#moscow");
    let brisbaneElement=document.querySelector("#brisbane");

    let londonDate=londonElement.querySelector(".date");
    let londonTime=londonElement.querySelector(".time");
    let moscowDate=moscowElement.querySelector(".date");
    let moscowTime=moscowElement.querySelector(".time");
    let brisbaneDate=brisbaneElement.querySelector(".date");
    let brisbaneTime=brisbaneElement.querySelector(".time");

    let london=moment().tz("Europe/London");
    londonDate.innerHTML=london.format("MMMM Do , YYYY");
    londonTime.innerHTML=london.format("h:mm:ss [<small>]A[<small>]");

    let moscow=moment().tz("Europe/Moscow");
    moscowDate.innerHTML=moscow.format("MMMM Do , YYYY");
    moscowTime.innerHTML=moscow.format("h:mm:ss [<small>]A[<small>]");

    let brisbane=moment().tz("Australia/Brisbane");
    brisbaneDate.innerHTML=brisbane.format("MMMM Do , YYYY");
    brisbaneTime.innerHTML=brisbane.format("h:mm:ss [<small>]A[<small>]");

}
setInterval(updateCityTime , 1000);

function updateSelectedCity(event){
    
    let cityTimeZone=event.target.value;
    if (cityTimeZone==="my-current-location"){
        cityTimeZone=moment.tz.guess();
    }
    let cityName=cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime=moment().tz(cityTimeZone);

    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML =`<div class="city">
                                <div>
                                    <h2>${cityName}</h2>
                                    <div class="date">${cityTime.format("MMMM Do , YYYY")}</div>
                                </div>
                                <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
                              </div>
                              <a href="index.html"><small>View All</small></a>`;

}
let citySelectElement=document.querySelector("#select-city");
citySelectElement.addEventListener("change",updateSelectedCity);
