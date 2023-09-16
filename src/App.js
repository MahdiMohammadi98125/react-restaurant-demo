import "./App.css";
import { useEffect, useState } from "react";
import Resturant from "./components/Resturant";

const apiUrl = "https://strapi-demo-app-217n.onrender.com";
function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${apiUrl}/api/restaurants?populate=*`);
      const { data } = await res.json();
      setResturant(data);
    };

    fetchData();
  }, []);

  const [resturant, setResturant] = useState([]);
  return (
    <div className=" m-10">
      <Resturant resturant={resturant} />
    </div>
  );
}

export default App;
