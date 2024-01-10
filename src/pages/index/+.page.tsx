export default Page;

import React from "react";
function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <button>Test</button>
        </li>
      </ul>
    </>
  );
}
