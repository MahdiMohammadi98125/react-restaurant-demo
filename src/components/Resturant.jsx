import React from "react";
import { Link } from "react-router-dom";

const Resturant = ({ resturant }) => {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center gap-6 ">
        {resturant.map((res) => (
          <Link to={`/home/${res.id}`} className="shadow-md" key={res.id}>
            <div className=" w-[420px]   pt-0 justify-center cursor-pointer">
              <div className="">
                <img
                  src={res.attributes.coverPhoto.data.attributes.url}
                  key={res.id}
                  className="w-full h-64"
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h1 className="text-xl font-bold mt-2">
                  {res.attributes.name}
                </h1>
                <p className="text-base">{res.attributes.description}</p>
                <div className="flex font-bold">
                  <span className="mr-2">average price:</span>
                  <span>{res.attributes.avgPrice}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resturant;
