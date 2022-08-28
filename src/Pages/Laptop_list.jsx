import axios from "axios";
import { useState, useEffect } from "react";
export function Laptop_list() {
  const [position, setPosition] = useState("");
  useEffect(() => {
    axios.get("https://pcfy.redberryinternship.ge/api/positions").then((resp) => {
      setPosition(resp.data);
     
      });
  }, []);
  console.log (position);
  return <h1>s</h1>;
}
