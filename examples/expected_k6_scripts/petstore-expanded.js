import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 10,
  duration: "10s",
};

const BASE_URL = __ENV.BASE_URL || "https://petstore.swagger.io/v2";

export default function () {
  let id = 1;
  let res;
  res = http.get(`${BASE_URL}/pets`);
  check(res, { '/pets was 200': (r) => r.status === 200 });

  res = http.post(`${BASE_URL}/pets`);
  check(res, { '/pets was 200': (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/pets/${id}`);
  check(res, { '/pets/{id} was 200': (r) => r.status === 200 });

  res = http.del(`${BASE_URL}/pets/${id}`);
  check(res, { '/pets/{id} was 204': (r) => r.status === 204 });
}
