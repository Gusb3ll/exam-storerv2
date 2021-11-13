<template>
  <div class="flex h-screen">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500 certTitlefadein">
          Logs & Updates
        </h1>
      </div>
    </div>
    <div class="grid grid-cols-1 grid-flow-row gap-y-12 mt-16">
      <p>[11/13/2021 - 21:00:53]  [+] Socail & Science subject</p>
      <p>[11/13/2021 - 21:27:41]  [+] Logs page</p>
      <p>[11/13/2021 - 21:27:41]  [=] fix nav logging for mobile</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['pageGuard']
}
</script>
