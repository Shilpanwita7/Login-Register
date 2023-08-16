import "./app.css"
import Login from "./Component/Login"
import Register from "./Component/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App