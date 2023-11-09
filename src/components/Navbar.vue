<template>
  <nav class="shadow w-screen sticky top-0 z-50 mb-20">
    <div class="md:flex md:items-center md:left bg-slate-100 ">
      
      <span>
        <img class="w-20 mr-12" alt="LOGO"
          src="../assets/logo/logo_img_text.jpg" />
      </span>
      
      <ul
        class="flex flex-wrap items-center text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0 margin: 10px 10px">
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
          <router-link to="/destinos"> Destinos </router-link>
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
