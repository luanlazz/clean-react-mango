import React from 'react'
import { cleanup, render, RenderResult } from '@testing-library/react'
import faker from 'faker'
import SignUp from './signup'
import { ValidationStub, Helper } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError

  const sut = render(
    <SignUp
      validation={validationStub}
    />
  )

  return {
    sut
  }
}

describe('SignUp Component', () => {
  afterEach(cleanup)

  test('Should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', 'Campo obrigatorio')
    Helper.testStatusForField(sut, 'password', 'Campo obrigatorio')
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo obrigatorio')
  })

  test('Should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.populateField(sut,'name')
    Helper.testStatusForField(sut, 'name', validationError)
  })
})
