import axios from "axios";

const myApi = axios.create({
  baseURL: "https://tk-news.onrender.com/",
});

export const getArticles = () => {
  return myApi.get(`/api/articles`).then((res) => {
    return res.data.articles;
  });
};
