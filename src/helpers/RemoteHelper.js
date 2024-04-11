
const API_URL = "http://127.0.0.1:3009/api/v1";

   export  async function sendPostToServer( body, bearerToken) {

       return await fetch(API_URL, {
           method: 'POST',
           headers: {'Accept': 'application/json',
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${bearerToken}`
           },
           body: body
       }).then(response => response.json())
           .then((json) => {
               return json
           })
           .catch((error) => console.error(error))
    }

     export  async function sendGetToServer( bearerToken) {

         return await fetch(API_URL, {
             method: 'GET',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${bearerToken}`
             }
         }).then(response => response.json())
             .then((json) => {
                 return json
             })
             .catch((error) => console.error(error))
     }
