export default Page;

import React from "react";

function Page() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Welcome</h1>
      This page is
      <ul>
        <li>Rendered to HTML.</li>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <li>Hydrated on the client.</li>
        {count > 0 && <li>Re-rendered on the client.</li>}
        Count: {count}
      </ul>
    </>
  );
}
