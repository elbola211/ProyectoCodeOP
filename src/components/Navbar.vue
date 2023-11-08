<template>

    <nav class="m-4 rounded-lg shadow w-screen border-solid border-2 border-indigo-600">
      <div class="p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <img class="w-20"  alt="Imagen1" src="../assets/logo/logo_img_text.jpg"/>
            </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 margin: 10px 10px">
          <li class="p-4">
              <h1 class="text-center text-xs font-semibold">
              </h1>
              <router-link to="/"> Inicio </router-link>
          </li>

          <li class="p-4">
              <h1 class="text-center text-xs font-semibold hover:bg-sky-700"></h1>
              <router-link to="/opiniones"> Opiniones </router-link>
          </li>

          <li class="p-4">
              <h1 class="text-center text-xs font-semibold"></h1>
              <router-link to="/contacto"> Contacto </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Navbar",  
};
</script>
