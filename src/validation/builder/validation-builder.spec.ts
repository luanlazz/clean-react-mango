import { ValidationBuilder } from './validation-builder'
import { RequiredFieldValidation } from './../validators/required-field/required-field-validation'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validations = ValidationBuilder.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })
})
