import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'
import { ValidationBuilder as Builder } from '@/validation/builder/validation-builder'

export const makeSignUpValidation = (): ValidationComposite => {
  return new ValidationComposite([
    ...Builder.field('name').required().min(3).build(),
    ...Builder.field('email').required().email().build(),
    ...Builder.field('password').required().min(5).build(),
    ...Builder.field('passwordConfirmation').required().min(5).sameAs('password').build()
  ])
}
