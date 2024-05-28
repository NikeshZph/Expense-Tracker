import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './Component/home'
import ExpensesTracker from './Component/expense';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/expense" element={<ExpensesTracker/>} />

    </Routes>
</BrowserRouter>

  )
}

export default App;
