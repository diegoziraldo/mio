import { useState, useEffect } from "react";
import axios from "axios";

const Components = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    getComponents();
  }, []);

  async function getComponents() {
    const res = await axios.get("http://localhost:3000/api/components");
    setComponents(res.data);
    console.log(res.data);
  }

  return (
    <>
      <p>{components[0]._id}</p>
      <p>hola</p>

    </>
  );
};

export default Components;