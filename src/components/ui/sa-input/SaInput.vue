<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <div class="sa-input flex flex-col gap-1">
    <input
        v-model="model"
        type="text"
        class="input"
    />
  </div>
</template>

<style scoped lang="postcss">

</style>