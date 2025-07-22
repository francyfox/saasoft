<script setup lang="ts">
import { Trash } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import type { TAccount } from '@/components/shared/sa-record-list/sa-record-list.schema.ts'
import SaInput from '@/components/ui/sa-input/SaInput.vue'
import SaSelect, {
  type SaSelectOption,
} from '@/components/ui/sa-select/SaSelect.vue'

const props = defineProps<{
  list: TAccount[]
}>()

const headers = ['Метки', 'Тип записи', 'Логин', 'Пароль']
const types: SaSelectOption[] = [
  {
    name: 'LDAP',
    value: 'ldap',
  },
  {
    name: 'Локальная',
    value: 'local',
  },
]
</script>

<template>
  <div class="record-list flex flex-col gap-2">
    <div class="record-list-item grid grid-cols-5">
      <div v-for="i in headers"
           :key="i"
      >
        {{ i }}
      </div>
      
      <div class="max-w-[50px]"></div>
    </div>

    <div v-for="i in list"
         :key="i.id"
         class="record-list-item grid grid-cols-5 gap-2"
    >
      <SaInput
          v-model="i.tags"
      />

      <SaSelect v-model="i.type"
                :options="types"
      />

    </div>
  </div>
</template>

<style scoped lang="postcss">
.record-list {
  &-item {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>