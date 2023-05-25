import { get, post } from './axios'
/**
 * 接口api
 */
// XXXget接口
export const add = (params: any) => { return get("/api/add", params) };
// XXXpost接口
export const login = (params: any) => { return post("/api/login", params) };