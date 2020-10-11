import { makeSignUpValidation } from './signup-validation-factory'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'
import { CompareFieldsValidation, EmailValidation, MinLengthValidation, RequiredFieldValidation } from '@/validation/validators'

describe('SignUpValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(new ValidationComposite([
      new RequiredFieldValidation('name'),
      new MinLengthValidation('name', 3),
      new RequiredFieldValidation('email'),
      new EmailValidation('email'),
      new RequiredFieldValidation('password'),
      new MinLengthValidation('password', 5),
      new RequiredFieldValidation('passwordConfirmation'),
      new MinLengthValidation('passwordConfirmation', 5),
      new CompareFieldsValidation('passwordConfirmation', 'password')
    ]))
  })
})
