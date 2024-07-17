import { Navbar } from "./componentes/navbar"
import { Section } from "./componentes/section"
import { Footer } from "./componentes/footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={
      <>
      <div>
        <h1>Home</h1>
      </div>
      </>
    } />

    <Route path="/login" element={
      <>
      <div>
        <h1>Login:</h1>
      </div>
      </>
    } />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App


function handleClick(i) {
  const newSquares = squares.slice();
  newSquares[i] = 'X';  // ou 'O', dependendo de quem for a vez
  setSquares(newSquares);
}