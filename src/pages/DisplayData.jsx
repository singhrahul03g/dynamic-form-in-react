import { useEffect, useState, createContext } from "react";
import DisplayPosts from "../components/DisplayPosts";
import App from "../App";

export  const PostContext = createContext()

function DisplayData() {

  const [data, setData] = useState([]);
 

  const getData = async () => {
    const apiData = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        return data.json();
      })

      setData(apiData)
      console.log(apiData,'api')
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <App/>
    <PostContext.Provider value={data}>
      <DisplayPosts/>
    </PostContext.Provider>
    </>
  );
}

export default DisplayData;
