import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResturantDetails = () => {
  const apiUrl = "https://strapi-demo-app-217n.onrender.com";
  const [resturant, setResturant] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${apiUrl}/api/restaurants/${id}?populate=*`);
      const { data } = await res.json();
      setResturant(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="max-w-md ml-auto mr-auto mt-12 flex flex-col gap-4 shadow-md">
        <div>
          <img
            src={resturant?.attributes?.coverPhoto?.data.attributes?.url}
            className="h-56 w-full"
          />
        </div>
        <div className="p-6 flex flex-col gap-3">
          <h2 className="flex">
            <span className="mr-auto">Name:</span>
            <span>{resturant?.attributes?.name}</span>
          </h2>
          <div className="flex">
            <span className="mr-auto">open hours:</span>
            <span>{resturant?.attributes?.openingHours}</span>
          </div>
          <div className="flex">
            <span className="mr-auto">stablished:</span>
            <span>{resturant?.attributes?.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
