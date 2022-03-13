import axios from 'axios';

export const apiURL = "https://booking-restaurant.test/api/";
export const redirectAfterLogin = "/panel";

const initAxios = () => {
  let ax = axios.create({
    baseURL: apiURL,
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + localStorage.getItem("userToken")
    },
    timeout: 3000,
  });

  ax.interceptors.response.use(
    (res) => {

      return res;
    },
    (err) => {

      if(err.response.status === 401){//"Unauthenticated"
        window.location.href = '/login';
        // localStorage.clear();
        console.log('Your\'re not login');
      }

      console.log('error from interceptors', err.response);

      return Promise.reject(err);
    }
  );

  return ax;
};

export const get = (url) => {
  const axios = initAxios();
  return axios.get(url);
};

export const post = (url, params = {}) => {
  const axios = initAxios();
  return axios.post(url, params);
};

export const destroy = (url, params = {}) => {
  const axios = initAxios();
  return axios.delete(url, params);
};

//
export const listOfBears = (page = 1, numberItemsPerPage = 80) => {
  return axios.get( apiURL + `get-the-list-of-drinks?itemsPerPage=${numberItemsPerPage}&page=${page}`);
  // return axios.get(`https://api.punkapi.com/v2/beers?per_page=${numberItemsPerPage}&page=${page}`);
};

export const aRandomMeal = ()=>{
  return axios.get(apiURL + 'get-a-random-meal');
  // return axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
}