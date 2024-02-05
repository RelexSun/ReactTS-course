import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1aec2bfe08b44cbfb50c41df52639877",
  },
});
