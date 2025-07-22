<script setup lang="ts">
import { Eye, EyeOff } from 'lucide-vue-next'
import { computed, ref, useAttrs } from 'vue'

const model = defineModel({
  set(value) {
    if (props.hasTags) {
      return value.split(';').map((i) => {
        return {
          text: i,
        }
      })
    }

    return value
  },
  get(value) {
    if (props.hasTags) {
      return value.map((i) => i.text).join(';')
    }
    return value
  },
})
const props = defineProps<{
  error?: string
  hasTags?: boolean
}>()
const { type } = useAttrs()

const showEye = type === 'password'
const showPassword = ref(false)
const dirty = ref(false)
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
        class="input w-full"
        :class="{ 'input-error': dirty && error }"
        @click="dirty = true"
    />

    <div class="min-h-[16px]">
      <div v-if="dirty && error" class="text-red text-xs">
        {{ error}}
      </div>
    </div>

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