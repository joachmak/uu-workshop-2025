import React from "react";
import {TMarketplacePosting} from "@/app/db/db-crud";


const MarketplacePosting: React.FC<TMarketplacePosting> = ({
  imageUrl,
  title,
  description,
  price,
  date,
}) => {
  return (
    <article className="border border-gray-200 rounded-lg p-4 max-w-xs shadow-sm bg-white" tabIndex={0}>
      <img
        src={imageUrl}
        alt={`This is an image of a ${title}`}
        className="w-[300px] h-[300px] object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-3 mb-1">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-base">
          {price}kr
        </span>
        <span className="text-gray-400 text-sm">{date.toLocaleString("NO-nb")}</span>
      </div>
    </article>
  );
};

export default MarketplacePosting; 