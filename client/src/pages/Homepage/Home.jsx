// import { useEffect, useState } from "react";
import "./Home.css";
// import axios from "axios";

const Home = () => {
  // const [data, setData] = useState([]);
  // const [searchWord, setSearchWord] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const API = "http://localhost:3000/api/course";

  //     try {
  //       const response = await axios(API);
  //       const result = await response.data;
  //       setData(result);
  //       console.log("Result:", result);
  //     } catch (err) {
  //       console.error("Error", err);
  //     }
  //   };
  //   fetchData();
  // }, [searchWord]);


  

  return (
    <div>
      <input
        type="text"
        // value={searchWord}
        // onChange={(e) => setSearchWord(e.target.value)}
      />
      <div>
        {/* {data.map((course) => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <hr />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
