import { useState, useEffect } from 'react';
import getFilteredBooks from "../api/services/BookFilterService";

const useFiltrarLibros = (filters, page) => {
    const [loading, setLoading] = useState(false);
    const [libros, setLibros] = useState(null);

    useEffect(() => {
        const obtenerYFiltrar = async () => {
            setLoading(true);
            try {
                const data = await getFilteredBooks(filters, page);
                setLibros(data);
            } catch (e) {
                console.error("Error al traer libros filtrados", e);
            } finally {
                setLoading(false);
            }
        };
        obtenerYFiltrar();
    }, [filters, page]);

    return { libros, loading };
};

export default useFiltrarLibros;