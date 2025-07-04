import { useState, useEffect } from 'react';
import getAllBooks from "../api/services/BookService";

const useLibros = (page) => {
    const [loading, setLoading] = useState(false);
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const obtenerYFiltrar = async () => {
            setLoading(true);
            try {
                const data = await getAllBooks(page);
                setLibros(data);
            } catch (e) {
                console.error("Error al traer libros", e);
            } finally {
                setLoading(false);
            }
        };
        obtenerYFiltrar();
    }, [page]);

    return { libros, loading };
};

export default useLibros;
