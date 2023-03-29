import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4cc63a4a722a447c896dc24587d77aa1",
  },
});
