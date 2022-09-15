import axios from 'axios';

export const post = async (url, body) => {
  return await http(url, 'post', body);
}

export const get = async (url, body) => {
  return await http(url, 'get', body);
}

const http = async (url, method, body) => {
  try {
    if(method === 'post' || method === 'delete' || method === 'put') {
      const json = await axios({
        url: `${process.env.REACT_APP_BASEURL}${url}`,
        data: body,
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        }
      })
      // const json = await axios[method](process.env.REACT_APP_BASEURL + url,
      // body,
      // {
      //   headers:{
      //     "Contents-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // })
      if(json?.data) {
        return json
      }
    } else {
      const json = await axios({
        url: `${process.env.REACT_APP_BASEURL}${url}`,
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        }
      })
      // const json = await axios[method](process.env.REACT_APP_BASEURL + url,
      // {
      //   headers:{
      //     "Contents-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // })
      if(json?.data) {
        return json.data
      }
    }
  } catch (e) {
    console.log('Error with HttpUtil: ',e);
  }
}