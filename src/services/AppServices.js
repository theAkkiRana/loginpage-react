const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'Access-Control-Allow-Origin': 'https://demo-api.vercel.app',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': true
};



const AppServices = {
    addUser : async (user) => {
        try {   
            const response = await fetch('https://demo-api.vercel.app/users', {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(user)
                });
            if (!response.ok) {
                throw new Error('Data coud not be uploaded!')
            } else {
                return response.json();
            }
        } catch(error) {
            console.log(error);
            return error;
        } 
    },
    fetchUsers : async () => {
        try {
            const response = await fetch('https://demo-api.vercel.app/users')
            if (!response.ok) {
              throw new Error('Data coud not be fetched!')
            } else {
              return response.json()
            }
        }catch(error){
            return error;
        }    
    }
}
export default AppServices;