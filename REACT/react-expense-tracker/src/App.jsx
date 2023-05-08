import React from 'react'
import Header from './components/Header'
import { GlobalProvider } from './context/GlobalState'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance/>
      <TransactionForm />
    </GlobalProvider>
  )
}

export default App