import React from "react";
import styled from "styled-components";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
    sunset: "/react-weather-app/icons/temp.svg",
    sunrise: "/react-weather-app/icons/temp.svg",
    humidity: "/react-weather-app/icons/humidity.svg",
    wind: "/react-weather-app/icons/wind.svg",
    pressure: "/react-weather-app/icons/pressure.svg",
};
const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 22px;
  font-weight: bold;
`;
const Location1 = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 22px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherContainerMain=styled.div`
display:flex;
flex-direction:row;
width:300px;
`
const WeatherMain=styled.div`
margin-left:-300px;
margin-right:350px;
display:flex;
flex-direction:column;
`

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    // const isDay = weather?.list[0].weather[0].icon?.includes('d')
    // const isDay1 = weather?.list[1].weather[0].icon?.includes('d')
    // const isDay2= weather?.list[2].weather[0].icon?.includes('d')
    // const isDay3= weather?.list[3].weather[0].icon?.includes('d')
    // const getTime = (timeStamp) => {
    //     return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    // }
    return (
        <>
        <WeatherContainerMain>
          <WeatherMain>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.list[0].main.temp - 273)}°C`}</span>
                    {`  |  ${weather?.list[0].weather[0].description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather?.list[0].weather[0].icon]}/>
            </WeatherContainer>
            <Location>{`${weather?.city.name}, ${weather?.city.country}`}</Location>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={"humidity"} value={weather?.list[0].main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.list[0].wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.list[0].main?.pressure}/>
            </WeatherInfoContainer>
            </WeatherMain>
            <WeatherMain>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.list[1].main.temp - 273)}°C`}</span>
                    {`  |  ${weather?.list[1].weather[0].description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather?.list[1].weather[0].icon]}/>
            </WeatherContainer>
            <Location1>{`${weather?.city.name}, ${weather?.city.country}`}</Location1>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={"humidity"} value={weather?.list[1].main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.list[1].wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.list[1].main?.pressure}/>
            </WeatherInfoContainer>
            </WeatherMain>
            <WeatherMain>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.list[2].main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.list[2].weather[0].description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather?.list[2].weather[0].icon]}/>
            </WeatherContainer>
            <Location1>{`${weather?.city.name}, ${weather?.city.country}`}</Location1>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={"humidity"} value={weather?.list[2].main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.list[2].wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.list[2].main?.pressure}/>
            </WeatherInfoContainer>
            </WeatherMain>
            <WeatherMain>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.list[3].main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.list[3].weather[0].description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather?.list[3].weather[0].icon]}/>
            </WeatherContainer>
            <Location>{`${weather?.city.name}, ${weather?.city.country}`}</Location>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={"humidity"} value={weather?.list[3].main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.list[3].wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.list[3].main?.pressure}/>
            </WeatherInfoContainer>
            </WeatherMain>
            </WeatherContainerMain>

            
        </>
    );
};

export default WeatherComponent;
