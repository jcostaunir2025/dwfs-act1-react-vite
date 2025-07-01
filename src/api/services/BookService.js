import api from '../conf/ServerConf.js'

const getAllBooks = async (page) => {
    try{
        const response = await api.post('/libros',
            {
                targetMethod: "GET",
                "queryParams": {
                    "page":[page]
                }
            });
        return response.data;
    }catch (e) {
        console.error('Error al obtener todos los libros' + e);
        throw e;
    }
};

export default getAllBooks;