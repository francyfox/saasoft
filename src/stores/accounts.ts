import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TAccount } from '@/components/sa-record-list/sa-record-list.schema.ts'

export const useAccountsStore = defineStore('accounts', () => {
  const records = ref<TAccount[]>([
    {
      tags: 'XXX',
      type: 'local',
      login: 'fox',
      password: '123456',
    },
  ])
})
