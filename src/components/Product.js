import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function Product({ Product: { id, title, img, price } }) {
  const { url } = useRouteMatch();
  return (
    <Link key={id} to={`${url}/${id}`} className="group">
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
      </div>
    </Link>
  );
}
