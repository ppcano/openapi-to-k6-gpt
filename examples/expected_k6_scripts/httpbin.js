import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 10,
  duration: "10s",
};

const BASE_URL = __ENV.BASE_URL || "https://httpbin.org";

export default function () {
  let res;
  res = http.get(`${BASE_URL}/`);
  check(res, { "/ was 200": (r) => r.status === 200 });

  const humanTimestamp = "2023-01-01T00:00:00Z";
  res = http.get(`${BASE_URL}/when/${humanTimestamp}`);
  check(res, { "/when/{humanTimestamp} was 200": (r) => r.status === 200 });

  const machineTimestamp = 1577836800;
  res = http.get(`${BASE_URL}/parse/${machineTimestamp}`);
  check(res, { "/parse/{machineTimestamp} was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/get`);
  check(res, { "/get was 200": (r) => r.status === 200 });

  res = http.del(`${BASE_URL}/delete`);
  check(res, { "/delete was 200": (r) => r.status === 200 });

  res = http.post(`${BASE_URL}/post`, JSON.stringify({}));
  check(res, { "/post was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/ip`);
  check(res, { "/ip was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/user-agent`);
  check(res, { "/user-agent was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/headers`);
  check(res, { "/headers was 200": (r) => r.status === 200 });

  let delay = 1;
  res = http.get(`${BASE_URL}/delay/${delay}`);
  check(res, { "/delay/{delay} was 200": (r) => r.status === 200 });

  let username = "user1";
  let password = "pass1";
  res = http.get(`${BASE_URL}/basic-auth/${username}/${password}`);
  check(res, { "/basic-auth/{username}/{password} was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/hidden-basic-auth/${username}/${password}`);
  check(res, { "/hidden-basic-auth/{username}/{password} was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/bearer`);
  check(res, { "/bearer was 200": (r) => r.status === 200 });

  let status = 200;
  res = http.get(`${BASE_URL}/status/${status}`);
  check(res, { "/status/{status} was 200": (r) => r.status === 200 });

  res = http.post(`${BASE_URL}/status/${status}`, JSON.stringify({}));
  check(res, { "/status/{status} was 200": (r) => r.status === 200 });

  res = http.del(`${BASE_URL}/status/${status}`);
  check(res, { "/status/{status} was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/xml`);
  check(res, { "/xml was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/html`);
  check(res, { "/html was 200": (r) => r.status === 200 });

  const imageFormat = "png";
  res = http.get(`${BASE_URL}/image/${imageFormat}`);
  check(res, { "/image/{imageFormat} was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/image`);
  check(res, { "/image was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/cache`);
  check(res, { "/cache was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/cookies`);
  check(res, { "/cookies was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/cookies/set`);
  check(res, { "/cookies/set was 200": (r) => r.status === 200 });

  res = http.get(`${BASE_URL}/cookies/delete`);
  check(res, { "/cookies/delete was 200": (r) => r.status === 200 });
}
