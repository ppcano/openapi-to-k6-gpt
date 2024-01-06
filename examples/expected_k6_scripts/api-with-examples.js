import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 10,
  duration: "10s",
};

const BASE_URL = __ENV.BASE_URL || "http://example.com:8080";

export default function () {
  let res;

  // List API versions
  res = http.get(`${BASE_URL}/`);
  check(res, {"/ was 200": (r) => r.status === 200});

  // Show API version details
  res = http.get(`${BASE_URL}/v2`);
  check(res, {"/v2 was 200": (r) => r.status === 200});
}