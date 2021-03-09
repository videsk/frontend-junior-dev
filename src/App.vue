<template>
  <div id="app" class="remove-this">
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  async mounted() {
    // Users
    const userResponse = await fetch('/api/users');
    const users = await userResponse.json();
    // Reports
    const reportResponse = await fetch('/api/reports');
    const reports = await reportResponse.json();
  }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
}

.remove-this {
  background-image: url('./assets/background.png');
  @apply bg-contain bg-no-repeat bg-center;
}
</style>
