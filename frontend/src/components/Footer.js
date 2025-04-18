import React from "react";

function Footer() {
  return (
    <footer
      className="mt-auto py-7 bg-white border-t border-opacity-75 border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-500">
      <div className="container mx-auto">
        <p className="m-0 text-center text-blue-700 hover:underline dark:text-gray-400">
          Built by{" "}
          <a href="https://www.ideasbird.com/">raman@ideasbird.com</a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
