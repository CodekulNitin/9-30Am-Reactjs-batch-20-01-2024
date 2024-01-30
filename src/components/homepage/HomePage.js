import axios from "axios";
import React, { useEffect, useState } from "react";

function HomePage({loginInfo}) {
  const [getPostsData, setGetPostsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setGetPostsData(response.data);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  });

  return (
    <div className="pt-20">
      <h1>UserName: {loginInfo.userName}</h1>
      {getPostsData.map((list) => {
        return <h1 className="border p-1 rounded">{list.title}</h1>;
      })}
    </div>
  );
}

export default HomePage;
