import { useState, useEffect } from "react";
import axios from "axios";

import ComponentInput from './inputComponents'


const Components = () => {
  const [components, setComponents] = useState([]); //This hook will save all the components in an array.

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
    <ComponentInput />
    <div className="row">
    {components.map((component) => (
      <div className="col-md-4" key={component._id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{component.name}</h5>
            <p className="card-text">{component.description}</p>
            <p className="card-text">{component.category}</p>
            <p className="card-text">{component.brand}</p>
            <p className="card-text">{component.infoProvider}</p>
            <p className="card-text">{component.stock} unid.</p>
          </div>
        </div>
      </div>
    ))}
  </div>
    </>
  );
};

export default Components;
