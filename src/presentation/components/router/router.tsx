import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Factory = {
  makeLogin: React.FC
  makeSignUp: React.FC
}

const Router: React.FC<Factory> = (factory: Factory) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path='/login' exact component={factory.makeLogin} />
          <Route path='/signup' exact component={factory.makeSignUp} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
