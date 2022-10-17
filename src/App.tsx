
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Chat from './pages/Chat';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Login />} />
        <Route path='/chat' element={<Chat />} />
      </Route>
    </Routes>
  )
}

export default App
