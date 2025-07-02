import api from '../conf/ServerConf.js'

const createOrder = async (libros) => {
    try{
        const response = await api.post('/books-payments/orders',
            {
                "targetMethod": "POST",
                "body": {
                    "books" : libros
                }
            });
        return response.data;
    }catch (e) {
        console.error('Error al crear la orden' + e);
        throw e;
    }
};

export default createOrder;