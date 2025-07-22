<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import SaRecordList from '@/components/shared/sa-record-list/SaRecordList.vue'
import type { TAccount } from '@/components/shared/sa-record-list/sa-record-list.schema.ts'
import { useAccountsStore } from '@/stores/accounts.ts'

const accountsStore = useAccountsStore()
const { records, errors, hasErrors } = storeToRefs(accountsStore)

function handleSave(v: TAccount) {
  accountsStore.validate(v)
  accountsStore.patchRecord(v)
}
</script>

<template>
  <section class="py-5">
    <div class="container mx-auto">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-5">
          <h1 class="text-4xl">Учетные записи</h1>
          <button
              type="button"
              class="btn"
              :disabled="hasErrors"
              @click.prevent="accountsStore.addRecord"
          >
            <Plus />
          </button>
        </div>

        <SaRecordList
            :list="records"
            :errors="errors"
            @onRemove="v => accountsStore.removeRecord(v)"
            @onSave="handleSave"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
