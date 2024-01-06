import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 10,
  duration: "10s",
};

const BASE_URL = __ENV.BASE_URL || "https://developer.uspto.gov/ds-api";

export default function () {
  let res;
  res = http.get(`${BASE_URL}/`);
  check(res, {
    "/ GET was 200": (r) => r.status === 200,
  });

  let dataset = 1; // Assign a random or predefined value
  let version = 1; // Assign a random or predefined value
  res = http.get(`${BASE_URL}/${dataset}/${version}/fields`);
  check(res, {
    "/{dataset}/{version}/fields GET was 200": (r) => r.status === 200,
  });

  dataset = 2; // Assign a random or predefined value
  version = 2; // Assign a random or predefined value
  res = http.post(`${BASE_URL}/${dataset}/${version}/records`);
  check(res, {
    "/{dataset}/{version}/records POST was 200": (r) => r.status === 200,
  });
}
