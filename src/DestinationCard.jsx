
import React from 'react';
function DestinationCard ({ name,image,location,description,price }) {
    return (
      <div className="border rounded-lg shadow-md p-4 max-w-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-gray-600">{location}</p>
        <p className="mt-2 text-sm">{description}</p>
        <p className="mt-2 font-semibold text-blue-600">{price}</p>
      </div>
    );
  };

  // export default DestinationCard;
  export default DestinationCard;