import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'
import { ValidationBuilder } from '@/validation/builder/validation-builder'

export const makeLoginValidation = (): ValidationComposite => {
  return new ValidationComposite([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
}
