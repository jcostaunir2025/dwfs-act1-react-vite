import {GlobalContext} from "../context/GlobalContext.jsx";
import {useLocation, useNavigate} from "react-router";
import {useContext, useEffect, useState} from "react";

const Libro = ({ libro, titulo, libros }) => {
    const navigate = useNavigate();
    const { cartItems, booklist } = useContext(GlobalContext);
    let libroid = -1;
    const location  = useLocation();
    const [newlibros, setnewlibros] = useState([libros]);

    if(location.state !== undefined && location.state !== null) {
        libroid = parseInt(location.state.id);
    }

    useEffect(() => {
        const syncLibros = async () => {

            try {
                if (cartItems.length > 0) {
                    libros.forEach((product) => {
                        let existingItem = cartItems.find((item) => item.id === product.id);

                        if (existingItem && existingItem.id === libroid) {
                            product.cantidad = booklist.find((b) => b.id === product.id).cantidad - existingItem.cantidad;
                        }
                    })
                    const newlibros = [...libros];
                    setnewlibros(newlibros);
                }

            } catch (error) {
                console.log(error);
            }
        };

        syncLibros().then(r => setTimeout(() => r, 2000));
    }, [libros]);

    const handleDetalleLibroClick = (id) => {
        navigate(`/libros/${titulo}/detalle/${id}`, {state:{datalibro: libro, libros:libros}});
    };

    return (
        <div className="Libro">
            <h2>{libro.nombre}</h2>
            <p><strong>Codigo:</strong> {libro.id}</p>
            <p><strong>Cantidad:</strong> {libro.cantidad}</p>
            <div className="disponibles">
                <button onClick={() => {handleDetalleLibroClick(libro.id)}}>Ver Detalle Libro</button>
            </div>
        </div>
    );
};

export default Libro;