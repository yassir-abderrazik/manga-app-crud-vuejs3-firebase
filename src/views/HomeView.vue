<template>
  <div class="home">
    <div
      class="min-w-screen bg-gray-900 h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
    >
      <div class="absolute inset-0 z-0"></div>
      <div
        class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
      >
        <!--content-->
        <div class="">
          <!--body-->
          <div class="text-center p-5 flex-auto justify-center">
            <div class="flex justify-center">
              <img src="../assets/logo.png" alt="vuejs logo" />
            </div>
            <ul class="lg:flex hidden justify-center items-center space-x-10">
              <li
                class="text-lg text-red-500 font-semibold hover:text-red-700 transition duration-200 cursor-pointer"
              >
                <router-link to="/">Home</router-link>
              </li>
              <li
                class="text-lg text-red-500 font-semibold hover:text-red-700 transition duration-200 cursor-pointer"
              >
                <router-link to="/manga">Manga</router-link>
              </li>
              <li
                class="text-lg text-red-500 font-semibold hover:text-red-700 transition duration-200 cursor-pointer"
              >
                <router-link to="/about">About</router-link>
              </li>
            </ul>
          </div>
          <!--footer-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
