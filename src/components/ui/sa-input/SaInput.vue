<script setup lang="ts">
import { Eye, EyeOff } from 'lucide-vue-next'
import { computed, ref, useAttrs } from 'vue'

const model = defineModel()
const { type } = useAttrs()

const showEye = type === 'password'
const showPassword = ref(false)
const inputType = computed(() =>
  showEye ? (showPassword.value ? 'text' : 'password') : (type ?? 'text'),
)
</script>

<template>
  <div class="sa-input relative flex flex-col gap-1">
    <input
        v-bind="$attrs"
        :type="inputType"
        v-model="model"
        class="input"
    />
    <button
        v-if="showEye"
        type="button"
        class="absolute top-2 right-2 z-5"
        @click="showPassword = !showPassword"
    >
      <Eye v-if="!showPassword" />
      <EyeOff v-else />
    </button>
  </div>
</template>

<style scoped lang="postcss">

</style>