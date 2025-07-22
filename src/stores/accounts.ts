import { defineStore } from 'pinia'
import { ref, useId } from 'vue'
import type { TAccount } from '@/components/shared/sa-record-list/sa-record-list.schema.ts'

export const useAccountsStore = defineStore('accounts', () => {
  const records = ref<TAccount[]>([
    {
      id: useId(),
      tags: 'XXX',
      type: 'local',
      login: 'fox',
      password: '123456',
    },
  ])

  function addRecord() {
    records.value.push({
      id: useId(),
      tags: null,
      type: 'local',
      login: null,
      password: null,
    })
  }

  function removeRecord(id: string) {
    records.value.splice(
      records.value.findIndex((i) => i.id === id),
      1,
    )
  }

  return {
    records,
    addRecord,
    removeRecord,
  }
})
