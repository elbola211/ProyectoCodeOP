<template>
    <div class="px-4 py-4 shadow-lg" v-if="opinion">
        <img src={{ opinion.foto }}/>
        <div class="flex w-[100vw] justify-around">
            <h6>Nombre:<br />{{ opinion.nombre }}</h6>
            <h6>Ciudad:<br />{{ opinion.ciudad }}</h6>
            <h6>Opinión comida:<br />{{ opinion.opinionComida }}</h6>
            <h6>Coste vida:<br />{{ opinion.costeVida }}</h6>
            <h6>Opinion general:<br />{{ opinion.opinionGeneral }}</h6>
        </div>
    </div>
    
</template>
  
<script>

</script>
  
<style></style>