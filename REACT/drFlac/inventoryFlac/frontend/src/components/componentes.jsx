import { useState, useEffect} from "react";
import axios from "axios";

const Components = () => {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        getComponents();
      }, []);

    async function getComponents() {
        const res = await axios.get("http://localhost:3000/api/components");
        setComponents(res.data);
      }

      return(
        <>
            <p>{components}</p>
            <p>s</p>
        </>
      )

}

export default Components;