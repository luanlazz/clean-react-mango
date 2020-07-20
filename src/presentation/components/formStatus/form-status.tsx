import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormStatus: React.FC<Props> = (props: Props) => {
  const { state, errorState } = useContext(Context)

  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      { state.isLoading && <Spinner className={Styles.spinner} /> }
      {errorState.main && <span className={Styles.error}>{errorState.main}</span> }
    </div>
  )
}

export default FormStatus
