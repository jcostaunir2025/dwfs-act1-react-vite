import { useState, useEffect } from 'react';
import { listalibros } from '../data/listalibros.js';

const useLibros = (categoria) => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);

    /*useEffect(() => {
        const fetchLibros = () => {
            setLoading(true);
                let librosSeleccionados = [];
                if (categoria === 'novelas') {
                } else if (categoria === 'cienciaficcion') {
                    librosSeleccionados = libros.filter(x => x.categoria === 'cienciaficcion');
                } else if (categoria === 'historia') {
                    librosSeleccionados = libros.filter(x => x.categoria === 'historia');
                } else if (categoria === 'psicologia') {
                    librosSeleccionados = libros.filter(x => x.categoria === 'psicologia');
                }
                setLibros(librosSeleccionados);
            }
            setLoading(false);
        fetchLibros();
    }, [categoria]);*/

    useEffect(() => {
        const fetchLibros = async () => {
            setLoading(true);
            try {
                // Simulación de retardo
                await new Promise(resolve => setTimeout(resolve, 2000));
                let librosSeleccionados = [];
                if (categoria === 'novelas') {
                    librosSeleccionados = listalibros.filter(x => x.categoria === 'novelas');
                } else if (categoria === 'cienciaficcion') {
                    librosSeleccionados = listalibros.filter(x => x.categoria === 'cienciaficcion');
                } else if (categoria === 'historia') {
                    librosSeleccionados = listalibros.filter(x => x.categoria === 'historia');
                } else if (categoria === 'psicologia') {
                    librosSeleccionados = listalibros.filter(x => x.categoria === 'psicologia');
                } else if (categoria === 'todas'){
                    librosSeleccionados = listalibros;
                }

                setLibros(librosSeleccionados);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchLibros();
    }, [categoria]);

    return { libros, loading };
};

export default useLibros;
