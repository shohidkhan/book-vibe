import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <title>Find Books - Home</title>
      <Banner />
      <Books data={data} />
    </div>
  );
};

export default Home;
