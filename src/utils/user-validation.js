const validate = {
  validate(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const token = localStorage.getItem('token');
                
        fetch(`${url}/users/token`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          },
        }).then(res => res.json())
          .then(json => {
            if (json.authorized) resolve('Autenticado!')
            reject('Usuário inválido!')
          })
          .catch(err => {
            reject(err)
          })
      }
      catch (err) {
        reject(err);
      }
    });
  },
}

export default validate.validate


