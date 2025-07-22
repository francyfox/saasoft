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

  return {
    records,
  }
})
