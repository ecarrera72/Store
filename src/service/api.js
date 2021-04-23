// import FormData from 'form-data'
// import axios from 'axios';


// async function getToken() {
//     let form = new FormData();
//     form.append('username', 'tuga');
//     form.append('password', 'secretToken');

//     return await axios.get( 'http://localhost:8000/authToken/', { body: { username: "tuga" } });
// }


// export default getToken;
import axios from 'axios';
import FormData from 'form-data';
let data = new FormData();
data.append('username', 'tuga');
data.append('password', 'secretToken');

async function getAuthToken() {

    let config = {
        method: 'get',
        url: 'http://localhost:8000/authToken/',
        headers: { 
            ...data.getHeaders()
        },
        data : data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default getAuthToken;