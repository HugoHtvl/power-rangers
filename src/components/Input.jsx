import { useState } from "react";
import "./Input.css";

const Input = () => {
  const [chicken, setChicken] = useState("");
  const handleChange = (e) => {
    setChicken(e.target.value);
  };

  return (
    <section className="chicken">
      <h2>Hello, {chicken}</h2>
      <input
        type="text"
        id="inputChicken"
        value={chicken}
        onChange={handleChange}
      />
    </section>
  );
};

export default Input;
