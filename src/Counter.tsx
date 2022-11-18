import { useState } from "react";
import { trackRender } from "./trackRender";

export default function Counter() {
  trackRender(Counter.name);
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}
