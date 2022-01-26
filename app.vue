<script setup lang="ts">
import {useMeta} from "#meta";
import {useGithubUser} from "~/composables/github";

const user = await useGithubUser()

useMeta({
  title: "WiSoft.io"
})
</script>

<template>
  <AppContainer>
    <div>
      <h1 class="text-4xl flex gap-2">
        WiSoft.io <i class="i-carbon-chat"/>
      </h1>
      <NewMessage/>
      <User :user="user"/>
      <Message v-if="user"/>
    </div>
  </AppContainer>
</template>
