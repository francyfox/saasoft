import { Type as t } from '@sinclair/typebox'
import type { ValueError } from '@sinclair/typebox/value'

export const AccountType = t.Union([t.Literal('ldap'), t.Literal('local')])

export const AccountSchema = (type: 'local' | 'ldap') =>
  type === 'local' ? AccountSchemaLocal : AccountSchemaLDAP

export const AccountSchemaLDAP = t.Intersect([
  t.Object({
    tags: t.Union(
      [
        t.String({
          maxLength: 50,
        }),
        t.Null(),
      ],
      { errorMessage: 'Максимум 50 символов' },
    ),
  }),
  t.Required(
    t.Object({
      id: t.String(),
      type: AccountType,
      login: t.String({
        minLength: 1,
        maxLength: 100,
        errorMessage: 'Обязательно. Максимум 100 символов',
      }),
    }),
  ),
])
export const AccountSchemaLocal = t.Intersect([
  AccountSchemaLDAP,
  t.Required(
    t.Object({
      password: t.String({
        minLength: 1,
        maxLength: 100,
        errorMessage: 'Обязательно. Максимум 100 символов',
      }),
    }),
  ),
])

// ITS Global
export interface IFieldError {
  id: string
  errors: ValueError[]
}

export type TAccount = typeof AccountSchemaLDAP.static & { password?: string }
export type TAccountType = typeof AccountType.static
