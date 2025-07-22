import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  AccountSchema,
  type IFieldError,
  type TAccount,
} from '@/components/shared/sa-record-list/sa-record-list.schema.ts'
import { validateSchema } from '@/utils/validate.ts'

export const useAccountsStore = defineStore('accounts', () => {
  const records = ref<TAccount[]>([
    {
      id: 'v0',
      tags: 'XXX',
      type: 'local',
      login: 'fox',
      password: '123456',
    },
  ])

  const errors = ref<IFieldError[]>([])
  const hasErrors = computed(
    () => errors.value.filter((i) => i.errors.length > 0).length > 0,
  )

  function addRecord() {
    records.value.push({
      id: `v${records.value.length}`,
      tags: null,
      type: 'local',
      login: null,
      password: null,
    } as any)
  }

  function removeRecord(id: string) {
    records.value.splice(
      records.value.findIndex((i) => i.id === id),
      1,
    )
  }

  function patchRecord(v: TAccount) {
    const recordIndex = records.value.findIndex((i) => i.id === v.id)
    records.value[recordIndex] = v
  }

  function validate(v: TAccount) {
    const result = validateSchema(AccountSchema, v)
    const errorIndex = errors.value.findIndex((i) => i.id === v.id)
    console.log(errorIndex)

    if (errorIndex !== -1) {
      errors.value[errorIndex] = {
        id: v.id,
        errors: result,
      }
    } else {
      if (result.length !== 0) {
        errors.value.push({
          id: v.id,
          errors: result,
        })
      }
    }
  }

  return {
    hasErrors,
    errors,
    records,
    addRecord,
    removeRecord,
    patchRecord,
    validate,
  }
})
