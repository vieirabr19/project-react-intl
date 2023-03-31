const API = 'http://localhost:500';

export const ApiServices = {
  get(endpoint){
    return fetch(`${API}/${endpoint}`, {
      method: 'GET'
    })
    .then(response => response.json());
  },
  post(endpoint, data){
    return fetch(`${API}/${endpoint}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json());
  },
  delete(endpoint, id){
    fetch(`${API}/${endpoint}/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json());
  }
};