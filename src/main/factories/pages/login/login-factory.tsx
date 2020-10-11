import React from 'react'
import { makeLoginValidation } from './login-validation-factory'
import { makeRemoteAuthentication, makeLocalSaveAccessToken } from '@/main/factories/usecases'

const LoginView = React.lazy(async () => import('@/presentation/pages/login/login'))

export const makeLogin: React.FC = () => {
  return (
    <LoginView
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
