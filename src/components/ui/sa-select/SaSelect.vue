<script setup lang="ts">
export interface SaSelectOption {
  name: string
  value: string
}

const props = defineProps<{
  options: SaSelectOption[]
}>()

const model = defineModel()
</script>

<template>
  <select v-model="model" class="select">
    <option
        v-for="(option) in props.options"
        :key="option.name"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped lang="postcss">

</style>