import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormStatus: React.FC<Props> = (props: Props) => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state
  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { mainError && <span data-testid='main-error' className={Styles.error}>{mainError}</span> }
    </div>
  )
}

export default FormStatus
