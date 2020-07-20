import React from 'react'
import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormStatus: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
