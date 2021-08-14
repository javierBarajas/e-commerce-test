import React from "react";
import Title from "./Title";

export default function Body({ title, content }) {
  return (
    <div className="bg-white">
      <div className="p-4">
        <Title Title={title} />

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {content}
        </div>
      </div>
    </div>
  );
}
