"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const getData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>我是 page.js</h1>
      {data.map((data, i) => {
        return <h3 key={i}>{data.title}</h3>;
      })}
    </div>
  );
};

export default Dashboard;
