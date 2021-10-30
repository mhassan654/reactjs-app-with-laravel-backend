// * @Author: Muwonge Hassan Saava

// * @Email: hassansaava@gmail.com

// * @LinkedIn: https://www.linkedin.com/in/hassan-muwonge-4a4592144/

// * @Github: https://github.com/mhassan654

// * @GitLab: https://gitlab.com/hmuwonge

// * @Tel: +256-783-828977 / +256-704-348792
// * Web: https://muwongehassan.com

import axios from "axios";

const baseURL = "https://reactapi.muwongehassan.com/api/";

function request(url) {
  const headers = {
    Accept: "application/json",
  };
  const requestUrl = baseURL + url;

  return axios({
    method: "GET",
    url: requestUrl,
    headers,
  });
}

function postRequest(url, params) {
  const headers = {
    Accept: "application/json",
  };
  const requestUrl = baseURL + url;

  return axios({
    method: "POST",
    url: requestUrl,
    data: params,
    headers,
  });
}

export {request, postRequest};
