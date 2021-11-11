<template>
  <div class="user-card">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2 text-gray-800 dark:text-white">
        <template v-if="$store.state.auth.user">
          <EleProfileAvatar size="3rem" />
          <h2 class="text-sm">
            👋 Hi
            <b class="font-semibold">{{
              $store.state.auth.userprofile.display_name
            }}</b>
          </h2>
        </template>
        <template v-else>
          <h2 class="text-sm">
            👋 Hi
            <b class="font-semibold">Guest</b>
          </h2>
        </template>
      </div>
    </div>
    <div class="buttons">
      <template v-if="$store.state.auth.user">
        <nuxt-link to="/user/signout">
          <a
            class="
              nav-button
              !justify-center
              mt-2
              bg-red-400
              !text-white
              !hover:bg-red-500
            "
          >Logout</a>
        </nuxt-link>
      </template>
      <template v-else>
        <nuxt-link to="/user/signin">
          <a
            class="
              nav-button
              !justify-center
              mt-2
              bg-indigo-400
              !text-white
              !hover:bg-indigo-500
            "
          >Login</a>
        </nuxt-link>
        <nuxt-link to="/user/signup">
          <a
            class="
              nav-button
              !justify-center
              mt-2
              bg-indigo-400
              !text-white
              !hover:bg-indigo-500
            "
          >Register</a>
        </nuxt-link>
      </template>
    </div>
  </div>
</template>
