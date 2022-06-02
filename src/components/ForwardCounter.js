import { useState, useEffect } from "react";

import Card from "./Card";

const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
