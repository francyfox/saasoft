<script setup lang="ts">
import { Trash } from 'lucide-vue-next'
import type {
  IFieldError,
  TAccount,
} from '@/components/shared/sa-record-list/sa-record-list.schema.ts'
import SaInput from '@/components/ui/sa-input/SaInput.vue'
import SaSelect, {
  type SaSelectOption,
} from '@/components/ui/sa-select/SaSelect.vue'
import { getFieldError } from '@/utils/validate.ts'

const emit = defineEmits<{
  onRemove: [id: string]
  onSave: [account: TAccount]
}>()

const props = defineProps<{
  list: TAccount[]
  errors: IFieldError[]
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

const isLDAP = (account: TAccount): boolean => account.type === 'ldap'

function handleChangeType(i: TAccount) {
  const account = i
  account.password = null
  console.log(account)

  emit('onSave', account)

  if (isLDAP(i)) {
  }
}
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

    <div v-for="(i, index) in list"
         :key="i.id"
         class="record-list-item grid grid-cols-5 gap-2"
    >
      <SaInput
          v-model="i.tags"
          :error="getFieldError(i.id, 'tags', errors)"
          @blur="emit('onSave', i)"
      />

      <SaSelect
          v-model="i.type"
          :options="types"
          @change="handleChangeType(i)"
      />

      <SaInput
          v-model="i.login"
          :error="getFieldError(i.id, 'login', errors)"
          :class="{ 'col-span-2': isLDAP(i) }"
          @blur="emit('onSave', i)"
      />

      <SaInput
          v-if="i.type !== 'ldap'"
          v-model="i.password"
          type="password"
          :error="getFieldError(i.id, 'password', errors)"
          @blur="emit('onSave', i)"
      />

      <div class="col-span-1">
        <button
            type="button"
            class="btn"
            @click.prevent="emit('onRemove', i.id)"
        >
          <Trash />
        </button>
      </div>
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