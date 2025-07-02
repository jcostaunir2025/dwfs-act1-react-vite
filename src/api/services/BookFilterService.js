import api from '../conf/ServerConf.js'

const getFilteredBooks = async (filters, page) => {

    try{
        const response = await api.post('/books-catalogue/librosagg',getPayload(filters, page));
        return response.data;
    }catch (e) {
        console.error('Error al obtener todos los libros' + e);
        throw e;
    }
};

function getPayload(filters, page = 1) {
    console.log("filters ---> ", filters);
    let newDateFrom = filters.dateFrom !== undefined ? filters.dateFrom.toISOString().slice(0, 10) : "";
    let newDateto = filters.dateTo !== undefined ? filters.dateTo.toISOString().slice(0, 10) : "";
    let newMinPrice = filters.minPrice !== undefined ? filters.minPrice : "";
    let newMaxPrice = filters.maxPrice !== undefined ? filters.maxPrice : "";
    let newFilter = {
        fechapubValues : filters.fechapubValues !== undefined ? filters.fechapubValues : concatenarCon(newDateFrom, newDateto, "/"),
        precioValues : filters.precioValues !== undefined ? filters.precioValues : concatenarCon(newMinPrice, newMaxPrice, "-"),
        titulo : filters.titulo !== undefined ? filters.titulo : ""
    };

    const queryParams = {
        page: [page]
    };

    for (const [key, value] of Object.entries(newFilter)) {
        if (value !== null && value !== undefined && value !== "") {
            queryParams[key] = [value];
        }
    }
    console.log("queryParams ---> ", queryParams);
    return {
        targetMethod: "GET",
        queryParams
    };
}

function concatenarCon(valor1, valor2, comodin) {
    const v1 = valor1?.trim() || "";
    const v2 = valor2?.trim() || "";

    if (!v1 && !v2) {
        return "";
    }

    return `${v1}${comodin}${v2}`;
}

export default getFilteredBooks;