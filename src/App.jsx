import {useContext} from "react";
import {GlobalContext, GlobalProvider} from "./context/GlobalContext.jsx";
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router";
import Landing from "./components/Landing.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import LibroDetalle from "./components/LibroDetalle.jsx";
import Libro from "./components/Libro.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";


function AppContent() {
    const { darkMode, usuario } = useContext(GlobalContext);

    return (
        <div id="app-div" className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header user={usuario}/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/libros/:titulo" element={<Landing />} />
                <Route path="/libros/:titulo/:lid" element={<Libro />} />
                <Route path="/libros/:titulo/detalle/:lid" element={<LibroDetalle />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <GlobalProvider>
            <AppContent />
        </GlobalProvider>
    );
}

export default App;