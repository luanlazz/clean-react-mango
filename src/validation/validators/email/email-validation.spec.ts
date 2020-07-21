import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (field: string = faker.random.word()): EmailValidation => {
  return new EmailValidation(field)
}

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.random.word()
    const sut = makeSut(field)
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(field))
  })

  test('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
