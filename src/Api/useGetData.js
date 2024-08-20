import baseUrl from "./baseURL";

const useGetData = async (url, parmas) => {
  const res = await baseUrl.get(url, parmas);
  console.log(res);
  return res.data;
};

const useGetDataToken = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("user").id}` },
  };
  const res = await baseUrl.get(url, config);
  console.log(config.headers);
  return res.data;
};

const useGetDataTokenToken = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.get(url, config);
  console.log(config.headers);
  return res.data;
};

export { useGetData, useGetDataToken, useGetDataTokenToken };
