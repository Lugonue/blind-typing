import axios from "axios";

 const fetchText = async () => {
  const { data } = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=1');
  return data.join(' ');
}

export default fetchText;