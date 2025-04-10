import React from "react";
import { StreamField } from "./StreamField/StreamField";
import { BaseImage } from "./BaseImage";
import { CommentList } from "./CommentList";

function PostDetail(props) {
  const { pageContent } = props;
  const dateStr = new Date(pageContent.lastPublishedAt).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main role="main" className="w-full px-4 py-8">
      <article className="mb-4">
        <header className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {pageContent.title}
          </h1>
          <div className="text-gray-600 dark:text-gray-400">
            Published on {dateStr}
          </div>
          <BaseImage img={pageContent.headerImage} />
        </header>
        <div className="prose lg:prose-lg dark:prose-dark">
          <StreamField value={pageContent.body} />
        </div>
      </article>

      <CommentList {...props} />
    </main>
  );
}

export { PostDetail };
