import { useState, useEffect } from "react";
import axios from "axios";

const Components = () => {
  const [components, setComponents] = useState([]); //Este hook va a guardar en un array todos los componentes.

  useEffect(() => {
    getComponents();
  }, []);

  async function getComponents() {
    try {
      const res = await axios.get("http://localhost:3000/api/components");
      setComponents(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {components.map(component => (
        <p key={component._id}>{component._id}</p>
      ))}
    </>
  );
};

export default Components;
