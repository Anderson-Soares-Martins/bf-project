import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
  }, []);

  return (
    <>
      <div>
        <body>
          <h1>Home</h1>
        </body>
      </div>
    </>
  );
}

export default Home;
