import React from 'react'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeRemoteAddAccount, makeLocalSaveAccessToken } from '@/main/factories/usecases'

const SignUpView = React.lazy(async () => import('@/presentation/pages/signup/signup'))

export const makeSignUp: React.FC = () => {
  return (
    <SignUpView
      validation={makeSignUpValidation()}
      addAccount={makeRemoteAddAccount()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
