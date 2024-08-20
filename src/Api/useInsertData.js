import baseUrl from "./baseURL";

const useInsertData = async (url, parmas) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  console.log(res);
  return res;
};

const useInsertDataUser = async (url, parmas) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user").id}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  console.log(res);
  return res;
};

export { useInsertData, useInsertDataUser };
