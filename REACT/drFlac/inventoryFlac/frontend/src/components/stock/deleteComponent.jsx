import { useState, useEffect } from "react";
import axios from "axios";

function DeleteComponent() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    getComponents();
  }, []);

  const getComponents= async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/components");
      setComponents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/components/${id}`);
      getComponents();
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {components.map((component) => (
        <div key={component.id}>
          <button className="btn btn-danger" onClick={() => deleteUser(component._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default DeleteComponent;