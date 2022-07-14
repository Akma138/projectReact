const api = "/api";

const getApi = async url => {
  const res = await fetch(`${api}${url}`);
  if (!res.ok) {
    throw new Error(`Error ${url}` + `,  ${res.status}`);
  }
  return res.json();
};

const getAll = async () => {
  const res = await getApi("/person");
  return getPerson(res)
};

getAll().then(res => console.log("res", res));
