import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import faker from 'faker'
import Input from './input'
import Context from '@/presentation/contexts/form/form-context'

const makeSut = (fieldName): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
}

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBeTruthy()
  })

  test('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBeFalsy()
  })
})
