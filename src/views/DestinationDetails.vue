<template>
  <div class="px-4 py-4" v-if="destination">
    <img :src="destination.image" alt="Imagen de {{ destination.name }}" class="w-1/2 mb-2" />   
    <div v-if="weather">
      <h3>Weather in {{ destination.name }}</h3>
      <p>Temperature: {{ kelvinToCelsius(weather.main.temp) }}°C</p>
      <p>Description: {{ weather.weather[0].description }}</p>
      <p>Humidity: {{ weather.main.humidity }}%</p>
      <p>Wind: {{ weather.wind.speed }} m/s</p>
    </div>
  </div>

  <!-- Loading & Error Handling -->
  <div v-else>
    <p v-if="loading">Cargando...</p>
    <p v-if="error">Hubo un error al cargar los datos.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "DestinationDetails",
  data() {
    return {
      destination: null,
      loading: false,
      error: false,
      weather: null,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      this.loading = true;
      try {
        const response = await fetch("../../Server/destinations.json");        
        const data = await response.json();
        this.loading = false;
        this.destination = data[this.$route.params.id];
        this.loadWeatherData(this.destination.name); 
      } catch (error) {
        console.error('Error:', error); 
        this.loading = false;
        this.error = true;
      }
    },
    imageLoadError() {
      console.error("Error al cargar la imagen:", this.destination.image);
    },
    async loadWeatherData(city) {
      try {
        const apiKey = '0fc1f97fc35ae5c2fbfb17b51b0786ef';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        this.weather = response.data;
      } catch (error) {
        console.error('Error al obtener datos del tiempo:', error);
      }
    },
    kelvinToCelsius(kelvin) {
      return (kelvin - 273.15).toFixed(2);
    },
  },
}
</script>
<style></style>