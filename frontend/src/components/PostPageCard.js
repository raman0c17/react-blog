import React from "react";
import { BaseImage } from "./BaseImage";
import { Link } from "react-router-dom";

function PostPageCard(props) {
  const { post } = props;
  const { pageContent } = post;
  const dateStr = new Date(pageContent.lastPublishedAt).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={pageContent.url}>
        <BaseImage img={pageContent.headerImage} />
      </Link>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
          <Link to={pageContent.url}>{pageContent.title}</Link>
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          {pageContent.excerpt}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            {dateStr}
          </span>
          <Link
            to={pageContent.url}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-500"
          >
            Read more
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 10.707a1 1 0 01-1.414-1.414l6-6z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { PostPageCard };
