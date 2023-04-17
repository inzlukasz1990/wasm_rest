// index.js

import init, * as wasm from "./wasm/rest_call_wasm.js";

(async () => {
  await init();
})();

async function request(method, url, data, token, content_type) {
  const lib = await wasm;
  return await lib.request(method, url, data, token, content_type);
}

async function get(url, token) {
  const lib = await wasm;
  return await lib.get(url, token);
}

async function post(url, data, token, content_type) {
  const lib = await wasm;
  return await lib.post(url, data, token, content_type);
}

async function put(url, data, token, content_type) {
  const lib = await wasm;
  return await lib.put(url, data, token, content_type);
}

async function deleteRequest(url, token) {
  const lib = await wasm;
  return await lib.delete(url, token);
}

const wasm_rest = {
  request,
  get,
  post,
  put,
  delete: deleteRequest,
};

export default wasm_rest;
