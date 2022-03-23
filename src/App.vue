<template>
  <nav >
    <div
      class="flex justify-between items-center bg-gray-800 py-6 lg:px-40 md:px-20 px-10"
    >
      <div class="">
        <a href="#"
          ><img class="h-14 cursor-pointer" src="./assets/logo.png" alt="vuejs logo" 
        /></a>
      </div>
      <ul class="lg:flex hidden items-center space-x-10">
        <li
          class="text-lg text-gray-400 font-semibold hover:text-purple-500 transition duration-200 cursor-pointer"
        >
          <router-link to="/">Home</router-link>
        </li>
        <li
          class="text-lg text-gray-400 font-semibold hover:text-purple-500 transition duration-200 cursor-pointer"
        >
          <router-link to="/manga">Manga</router-link>
        </li>
        <li
          class="text-lg text-gray-400 font-semibold hover:text-purple-500 transition duration-200 cursor-pointer"
        >
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <div class="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  </nav>
  <router-view />
</template>
