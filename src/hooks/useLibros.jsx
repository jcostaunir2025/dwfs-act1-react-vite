import { useState, useEffect } from 'react';
import { listalibros } from '../data/listalibros.js';

const useLibros = (inputsuggestion) => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLibros = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                let librosSeleccionados = [];

                if (inputsuggestion !== undefined && inputsuggestion !== null) {
                    if (inputsuggestion.length === 0 || inputsuggestion === "todos") {
                        librosSeleccionados = listalibros;
                    } else if (inputsuggestion.length > 0) {
                        librosSeleccionados = listalibros.filter(x => x.nombre.includes(inputsuggestion));
                    }
                }

                setLibros(librosSeleccionados);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchLibros();
    }, [inputsuggestion]);

    return { libros, loading };
};

export default useLibros;
