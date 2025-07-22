import { Value } from '@sinclair/typebox/value'
import type { IFieldError } from '@/components/shared/sa-record-list/sa-record-list.schema.ts'

export function validateSchema(schema: any, value: any) {
  console.log(value)
  return [...Value.Errors(schema, value)]
}

export function getFieldError(
  id: string,
  field: string,
  errors: IFieldError[],
) {
  return errors
    .find((i) => i.id === id)
    ?.errors.find((j) => j.path.replace('/', '') === field)?.message
}
