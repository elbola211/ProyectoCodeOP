<template>
    <nav class="shadow w-screen sticky top-0 z-50">
      <div class="md:flex md:items-center md:left bg-slate-100 ">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <img class="w-20 mr-12"  alt="Imagen1" src="../assets/logo/logo_img_text.jpg"/>
            </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 margin: 10px 10px">
          <li class="p-4">
              <h1 class="text-center text-xs font-semibold">
              </h1>
              <router-link to="/"> Inicio </router-link>
          </li>

          <li class="p-4">
              <h1 class="text-center text-xs font-semibold "></h1>
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
