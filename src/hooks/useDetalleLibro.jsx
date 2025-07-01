import { useState, useEffect } from 'react';
import getBookDetail from "../api/services/BookDetailService.js";

const useDetalleLibro = (bookId) => {
    const [loading, setLoading] = useState(false);
    const [libro, setLibro] = useState({});

    useEffect(() => {
        const getBookDetailHook = async () => {
            setLoading(true);
            try {
                const data = await getBookDetail(bookId);
                setLibro(data);
            } catch (e) {
                console.error("Error al traer detalle del libro", e);
            } finally {
                setLoading(false);
            }
        };
        getBookDetailHook();
    }, [bookId]);

    return { libro, loading };
};

export default useDetalleLibro;
