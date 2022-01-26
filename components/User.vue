<script setup lang="ts">
import {githubLogin, githubLogout} from "~/composables/github";

defineProps({
  user: {
    type: Object,
    required: true
  }
})

const login = githubLogin
const logout = githubLogout
</script>

<template>
  <div v-if="user"
       class="inline-flex items-center gap-2 p-5 bg-light-200">
    <img :src="user.avatar_url" alt=""
         class="rounded-full w-10 h-10 mr-2"/>
    <p>Welcome {{ user.login }}</p>
    <button @click="logout"
            class="border text-black border-tray-600 rounded pl-2 pr-2 hover:border-black">
      Logout
    </button>
  </div>
  <div v-else>
    <button @click="login"
            class="border rounded pl-2 pr-2">
      Login with GitHub
    </button>
  </div>
</template>

<style scoped>

</style>