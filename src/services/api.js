
import axios from 'axios';	
import Config from 'react-native-config';

class API{
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'credentials': 'same-origin',
        'charset': 'utf-8'
      },
    });
  }

  login = (email, password) => (
      this.api.post('/api/v1/login/', { email: email, password: password })
      .then(response => { 
        console.log(response)
        return response;
        }).catch(error => {
            console.log(error.response)
        })
  )
}

const api = new API();

export default api;
