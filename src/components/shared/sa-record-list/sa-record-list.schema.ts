import { Type as t } from '@sinclair/typebox'
import type { ValueError } from '@sinclair/typebox/value'

export const AccountType = t.Union([t.Literal('ldap'), t.Literal('local')])

export const AccountSchema = t.Object({
  id: t.String(),
  tags: t.String({
    minLength: 1,
    maxLength: 50,
    errorMessage: 'Обязательно. Минимум 50 символов',
  }),
  type: AccountType,
  login: t.String({
    minLength: 1,
    maxLength: 100,
    errorMessage: 'Обязательно. Минимум 100 символов',
  }),
  password: t.String({
    minLength: 1,
    maxLength: 100,
    errorMessage: 'Обязательно. Минимум 100 символов',
  }),
})

// ITS Global
export interface IFieldError {
  id: string
  errors: ValueError[]
}

export type TAccount = typeof AccountSchema.static
export type TAccountType = typeof AccountType.static
