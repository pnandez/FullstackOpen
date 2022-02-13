import axios from "axios";

const baseURL = "/persons" 

const getAll = () => {
  return axios.get(baseURL)
    .then(response => response.data)
}

const create = newObject => {
  return axios.post(baseURL, newObject)
      .then(response =>response.data)
}

const update = (id,newObject) => {
  const finalURL = baseURL + '/' + id
  return axios.put(finalURL, newObject)
  .then(response => response.data)
}

const deletePerson = id => {
  const finalURL = baseURL + '/' + id
  return axios.delete(finalURL)
  .then(response => response.data)
}

export default {getAll,create,update, deletePerson}

