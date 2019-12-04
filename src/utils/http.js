import router from '../routes/index'
import Swal from 'sweetalert2'

export default class Http {

   methodGet(endpoint, token) {
    return new Promise((resolve) => {
      fetch(`${router.options.apiUrl}/${endpoint}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
      }).then(res => res.json())
        .then(json => {
          this.verifyData(json);
          return resolve(json)
        })
    })
  }

  methodPost(endpoint, token = '', data) {
    console.log(endpoint, token, data);
    return new Promise((resolve) => {
      fetch(`${router.options.apiUrl}/${endpoint}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(json => {
          this.verifyData(json);
          return resolve(json)
        })
    })
  }

  methodDelete(endpoint, token = '', id) {
    console.log(endpoint, token, id);
    return new Promise((resolve) => {
      fetch(`${router.options.apiUrl}/${endpoint}/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
      }).then(res => res.json())
        .then(json => {
          console.log(json);
          this.verifyData(json);
          return resolve(json)
        })
    })
  }

  methodUpdate(endpoint, token = '', data, id) {
    console.log(endpoint, token, data, id);
    return new Promise((resolve) => {
      fetch(`${router.options.apiUrl}/${endpoint}/${id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      }).then(res => res.json())
        .then(json => {
          console.log(json);
          this.verifyData(json);
          return resolve(json)
        })
    })
  }
  
  verifyData(json) {
    if (json.status === 401) {
      localStorage.removeItem('token');
      let error = 'Por favor, entre novamente!';
      if (json.err.name === 'TokenExpiredError') error = 'Sessão expirada!';

      Swal.fire({
        type: 'warning',
        title: `Erro ao autentizar! ${error}`,
      })
      router.replace('/')
    }
  }
}
