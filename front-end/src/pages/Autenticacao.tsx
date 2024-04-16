import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Rotas />
        </BrowserRouter>
    );
}

function Rotas() {
    return (
        <Routes>
            <Route path="*" element={<Erro />} />
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/principal" element={<Principal />} />
        </Routes>
    );
}

function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = function () {
        if (usuario === "tiago" && senha === "123") {
            navigate("/principal");
        } else {
            alert("usuario incorreto");
        }
    };

    return (
        <div>
            <div>
                <input className='border border-black' type="text" onChange={(e) => setUsuario(e.target.value)} />
            </div>
            <div>
                <input className='border border-black' type="password" onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div>
                <button onClick={handleLogin}>ENVIAR</button>
            </div>
        </div>
    );
}

function Principal() {
    return (
        <p>PÁGINA PRINCIPAL</p>
    );
}

function Erro() {
    return (
        <p>CAMINHO NÃO ENCONTRADO</p>
    );
}

export default App;
