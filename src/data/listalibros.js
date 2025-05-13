import libro1 from '../assets/image/libro1.png';
import libro2 from '../assets/image/libro2.png';
import libro3 from '../assets/image/libro3.png';

export const listalibros = [
    {
        id: 1,
        nombre: "La La Land",
        autor: "Laura Flores",
        categoria: "novelas",
        cantidad: 10,
        precio:20,
        image : libro1,
        isFiltered: false,
    },
    {
        id: 2,
        nombre: "La odisea",
        autor: "Jorge Navas",
        categoria: "novelas",
        cantidad: 5,
        precio:21,
        image : libro2,
        isFiltered: false,
    },
    {
        id: 3,
        nombre: "The outsider",
        autor: "John Smith",
        categoria: "cienciaficcion",
        cantidad: 4,
        precio:15,
        image : libro3,
        isFiltered: false,
    },
    {
        id: 4,
        nombre: "Historia de Italia",
        autor: "Andrea Ianone",
        categoria: "historia",
        cantidad: 3,
        precio:12,
        image : libro1,
        isFiltered: false,
    },
    {
        id: 5,
        nombre: "Noche de Verano",
        autor: "Isabel Linares",
        categoria: "novelas",
        cantidad: 2,
        precio:14,
        image : libro2,
        isFiltered: false,
    },
    {
        id: 6,
        nombre: "Domina tu mente",
        autor: "Pedro Castilla",
        categoria: "psicologia",
        cantidad: 12,
        precio:20,
        image : libro3,
        isFiltered: false,
    },
    {
        id: 7,
        nombre: "Solo para tus ojos",
        autor: "JJ Benitez",
        categoria: "cienciaficcion",
        cantidad: 5,
        precio:16,
        image : libro1,
        isFiltered: false,
    },
    {
        id: 8,
        nombre: "Leyes para ser feliz",
        autor: "Carlos Girona",
        categoria: "psicologia",
        cantidad: 3,
        precio:25,
        image : libro2,
        isFiltered: false,
    }
];

export const booklist = [
    {
        id: 1,
        cantidad: 10
    },
    {
        id: 2,
        cantidad: 5
    },
    {
        id: 3,
        cantidad: 4
    },
    {
        id: 4,
        cantidad: 3
    },
    {
        id: 5,
        cantidad: 2
    },
    {
        id: 6,
        cantidad: 12
    },
    {
        id: 7,
        cantidad: 5
    },
    {
        id: 8,
        cantidad: 3
    }
];

export const suggestions = ["todos", "La La Land", "La odisea", "The outsider", "Historia de Italia",
    "Noche de Verano", "Domina tu mente", "Solo para tus ojos", "Leyes para ser feliz" ];
