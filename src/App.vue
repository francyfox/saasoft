<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import SaRecordList from '@/components/shared/sa-record-list/SaRecordList.vue'
import { useAccountsStore } from '@/stores/accounts.ts'

const accountsStore = useAccountsStore()
const { records } = storeToRefs(accountsStore)
</script>

<template>
  <section class="py-5">
    <div class="container mx-auto">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-5">
          <h1 class="text-4xl">Учетные записи</h1>
          <button type="button" class="btn">
            <Plus />
          </button>
        </div>

        <SaRecordList :list="records" />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
