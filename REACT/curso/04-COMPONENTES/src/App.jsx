import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";

import './App.css';
import styles from './App.css';

const App = () => (
    <div className={styles.estilos}>
    <VideoList title='Curso React'>
        <VideoItem
            title='Component'
            duration={2760}  
            uploadDate={new Date(2022,2,25)}
            description='Componentes en react'  
        ></VideoItem>
        <VideoItem 
            title='Use State'
            duration={3145}  
            uploadDate={new Date(2022,5,25)}
            description='Como utilizar estados en react'
        ></VideoItem>
    </VideoList>
        <VideoList title='Curso Node'>
        <VideoItem
            title='Video1'
            duration={2760}  
            uploadDate={new Date(2022,2,25)}
            description='Introduccion al backend'  
        ></VideoItem>
    </VideoList>    
    <VideoList title='Curso de next'/>

    </div>
);

export default App;