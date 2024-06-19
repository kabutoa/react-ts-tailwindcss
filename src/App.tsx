import { BrowserRouter } from 'react-router-dom'
import RouterConfig from './router'
import Header from '@/components/header/index'
import viteLogo from '/vite.svg'

function App() {
  return (
    <BrowserRouter>
      <Header>
        <img src={viteLogo} className="ml-auto" alt="Vite logo" />
      </Header>
      <RouterConfig />
    </BrowserRouter>
  )
}

export default App
