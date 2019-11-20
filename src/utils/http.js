import router from '../routes/index'
import Swal from 'sweetalert2'

export default class Http {

   methodGet(endpoint, token) {
    return new Promise((resolve, reject) => {
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

  verifyData(json) {
    if (json.status === 401) {
      localStorage.removeItem('token');
      Swal.fire({
        type: 'warning',
        title: 'Erro ao autentizar! Por favor, entre novamente!',
      })
      router.replace('/')
    }
  }
}

