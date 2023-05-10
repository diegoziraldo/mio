import  ReactDOM  from "react-dom";
import './index.css';

const Title = ({texto}) => {
  return( 
  <>
    <h3 className="title">{texto}</h3>
    <h3 className="title2">{texto}</h3>
    
  </>
  )}

const app = (
  <div>
    <Title texto='Desarrollo util'></Title>
  </div>
)
const container = document.getElementById("root");

ReactDOM.render(app, container);