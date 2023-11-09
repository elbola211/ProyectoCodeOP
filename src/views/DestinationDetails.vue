<template>
  <div class="px-4 py-4 w-3/4 align-center text-justify" v-if="destination">
  <div class="py-10">
    <p class="text-gray-600 text-xl">{{ destination.name }}</p>
    <img :src="destination.image" alt="Imagen de {{ destination.name }}" class="mb-2 py-4" />  
    <p class="text-gray-600 text-md">{{ destination.description }}</p>
  </div>
    <div v-if="weather">
      <h3>Tiempo en {{ destination.name }}</h3>
      <p>Temperatura: {{ kelvinToCelsius(weather.main.temp) }}°C</p>
      <p>Descripción: {{ weather.weather[0].description }}</p>
      <p>Humedad: {{ weather.main.humidity }}%</p>
      <p>Viento: {{ weather.wind.speed }} m/s</p>
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
        const apiKey = 'API_KEY'; 
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