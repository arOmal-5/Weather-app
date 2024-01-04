
import React, {  useState } from 'react';
import './App.css';
import search_icon from "./Assets/search.png"
import clear_icon from "./Assets/clear.png"
import cloud_icon from "./Assets/cloud.png"
import drizzle_icon from "./Assets/drizzle.png"
import humidity_icon from "./Assets/humidity.png"
import snow_icon from "./Assets/snow.png"
import wind_icon from "./Assets/wind.png"
import rain_icon from "./Assets/rain.png"


const App =()=> {

  const [wicon,setWicon]=useState(cloud_icon)
  const [temp,setTemp]=useState('')
  const [feels,setFeels]=useState('')
  const [location,setLocation]=useState('Location')
  const [max,setmax]=useState('')
  const [min,setmin]=useState('')
  const [desc,setDesc]=useState('cloudy')
  const [wind,setWind]=useState('')
  const [humidity,setHumidity]=useState('')
  let api_key="bb20c543cb46eea5fc8b9ea952dc8969"



  const search= async ()=>{
    const element=document.getElementsByClassName("cityInput")
    console.log(element[0].value);
    if(element[0].value===""){
      return alert("invalid data");
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
    
   await fetch(url)
   .then (res=>res.json())
   .then(data=>{
    setTemp(Math.floor(data.main.temp))
    setLocation(data.name)
    setmax(Math.floor(data.main.temp_max))
    setFeels(Math.floor(data.main.feels_like))
    setDesc(data.weather[0].description)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setmin(Math.floor(data.main.temp_min))
  

   

    // const humidity=document.getElementsByClassName("humidity-percentage")
    // const wind=document.getElementsByClassName("wind-rate")
    // const temperature=document.getElementsByClassName("weathertemp")
    // const Weatherminmax=document.getElementsByClassName("weatherminmax")
    // const wminmax=document.getElementsByClassName("minmax")
    // const location=document.getElementsByClassName("location")
    // const Feelslike=document.getElementsByClassName("feelslike")

    
   
  
  // humidity[0].innerHTML=data.main.humidity +"%"
  // temperature[0].innerHTML=Math.floor (data.main.temp) +"ºc"
  // Weatherminmax[0].innerHTML=data.weather[0].description
  // wind[0].innerHTML=data.wind.speed +"Km/hr"
  // location[0].innerHTML=data.name+","+data.sys.country
  // Feelslike[0].innerHTML=`Feels like  ${Math.floor(data.main.feels_like)}ºc`
  // wminmax[0].innerHTML=`${Math.floor(data.main.temp_max)}º/${Math.floor(data.main.temp_min)}º`
 
  
  
  

  if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n")  {
    setWicon(clear_icon)
  }else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n") {
    setWicon(cloud_icon)
  
  }else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n") {
    setWicon(drizzle_icon)
  }else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n") {
    setWicon(drizzle_icon)
  }else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n") {
    setWicon(rain_icon)
  }else if(data.weather[0].icon==="010d"||data.weather[0].icon==="010n") {
    setWicon(rain_icon)
  }else if(data.weather[0].icon==="013d"||data.weather[0].icon==="013n") {
    setWicon(snow_icon)
  }else{
    setWicon(clear_icon)

  }
})
}
  return (
    
    
      <>
     
        <div className="container">
       
      
      <div className="searchbar">
        <input type="text" className='cityInput' placeholder='Enter City Name' />
        <div className="searchicon">
       <img src={search_icon} alt="" onClick={search}  />
        </div>


      </div>

      <div className="image">
        <img src={wicon} alt="" style={{width:'150px', height:'150px'}} />
        <div>
        <h1 className="weathertemp" style={{fontSize:'75px'}} >{temp+"ºc"} </h1>
        <div>
        <h4 className="feelslike" style={{marginTop:'-50px'}} > {"feels like  " +  feels+"ºc"}</h4>
        </div>
        </div>
     
      
      </div>

      <div>
      <h1 className='location'>{location}</h1>
      </div>
      <div >
      <h3  className="weatherminmax" style={{marginTop:'-35px'}}> 
      {desc}</h3>
      <h3 className='minmax'>{max+"ºc/"}{min+'ºc'}</h3>
      </div>


      <div className='details'>
        <div>
          <img src={humidity_icon} alt="" />
        <div className='humidity-percentage' style={{color:'white'}}>{humidity+'%'}</div>
        
        </div>
 
      <div>
      <img src={wind_icon} alt="" />
      <div className='wind-rate'  style={{color:'white'}}>{wind+"Km/hr"}</div>
        
      </div>
        
      </div>


      <h3 style={{fontFamily:'monospace'}}>GOODBYE UNPREDICTABILITY|HELLO CLOUDBURST</h3>




   


      </div>
      
      </>
 

     
     
  
     
  
     
  
  );
  }

export default App;
