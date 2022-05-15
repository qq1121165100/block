import { extend } from 'umi-request';

// const requestApi = extend({
//   prefix: 'https://blockchain.info/rawblcok/00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa',
//   timeout: 10000,
//   mode: 'cors',
// });
// export default requestApi;

const requestApi = extend({
  prefix: 'https://blockchain.info/rawblock',
  timeout: 10000,
  mode: 'cors',
});
export default requestApi;
