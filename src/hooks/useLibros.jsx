import { useState, useEffect } from 'react';
import { listalibros } from '../data/listalibros.js';

const useLibros = (inputsuggestion) => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);
    const books = listalibros;
    useEffect(() => {
        const fetchLibros = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                let librosSeleccionados = [];

                if (inputsuggestion !== undefined && inputsuggestion !== null) {
                    if (inputsuggestion.length === 0 || inputsuggestion === "todos") {
                        librosSeleccionados = libros.length > 0 ? libros : books;
                    } else if (inputsuggestion.length > 0) {
                        let seleccionadoId = parseInt(books.filter((item) => item.nombre.includes(inputsuggestion)).map((item) => item.id));
                        librosSeleccionados = books.map(item =>
                                item.id === seleccionadoId ? { ...item, isFiltered: !item.isFiltered }  : item
                        );
                    }
                }
                setLibros(librosSeleccionados);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchLibros().then(r => setTimeout(() => r, 2000));
    }, [inputsuggestion]);

    return { libros, loading };
};

export default useLibros;
