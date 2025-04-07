import { requestCtx } from ".";

export function loginApi() {
  return requestCtx.get({ url: "/", data: {}, showLoading: true });
}
export function loginApi2() {
  return requestCtx.get({ url: "/2", data: {}, showLoading: true });
}
export function loginApi3() {
  return requestCtx.get({ url: "/3", data: {}, showLoading: true });
}
