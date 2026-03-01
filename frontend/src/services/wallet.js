
import api from '../lib/axios.js';

 export const balance = async () => {

  try {
     const response = await api.get('api/wallet/balance')
     return response.data
  } catch (error) {
         if (error.response?.status === 401) return null;
    throw error;
  }

    
}


export const transactions = async () => {

    try {

        const response = await api.get('/api/transactions')
        return response.data
    } catch(error){

         if (error.response?.status === 401) return null;
    throw error;

    }
}