import { Type as t } from '@sinclair/typebox'

export const AccountType = t.Union([t.Literal('ldap'), t.Literal('local')])

export const AccountSchema = t.Object({
  id: t.String(),
  tags: t.String({ maxLength: 50 }),
  type: AccountType,
  login: t.String({ maxLength: 100 }),
  password: t.String({ maxLength: 100 }),
})

export type TAccount = typeof AccountSchema.static
export type TAccountType = typeof AccountType.static
