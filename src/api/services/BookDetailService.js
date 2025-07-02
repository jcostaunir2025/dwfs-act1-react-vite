import api from '../conf/ServerConf.js'

const getBookDetail = async (idLibro) => {
    try{
        const response = await api.post('/books-catalogue/libros/' + idLibro,
            {
                targetMethod: "GET"
            });
        return response.data;
    }catch (e) {
        console.error('Error al obtener todos los libros' + e);
        throw e;
    }
};

export default getBookDetail;