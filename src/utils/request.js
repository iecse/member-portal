import 'whatwg-fetch';
import { api } from 'Config/endpoints';

export default (route, data = null, endpoint = api) => {
  process.env.NODE_ENV === 'development' &&
    console.log(
      `Fetch: %c ${route} %c ${endpoint}`,
      'color: #66CC66',
      'color: #66FFFF'
    );
  process.env.NODE_ENV === 'development' && console.log(data);
  return fetch(
    endpoint + route,
    data && {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    }
  )
    .then(res => res.json())
    .then(data => {
      process.env.NODE_ENV === 'development' && console.table(data);
      return data;
    })
    .catch(console.log);
};
