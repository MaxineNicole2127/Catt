import { useGlobalContext } from "./context";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Cats from "./components/Cats";
import NavBar from "./components/NavBar";
import DropDown from "./components/DropDown"; 
import Breeds from "./components/Breeds";
import Saved from "./components/Saved";
import Modal from "./components/Modal";

function App() {
    const { displayBreed } = useGlobalContext(); 
    return (
        <main>
            <Router>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<><DropDown/><Cats/></>}></Route>
                    <Route path="/breeds" element={<><Breeds/>{displayBreed && <Modal/>}</>}></Route>
                    <Route path="/saved" element={<Saved/>}></Route>
                </Routes>
            </Router>
        </main>


        
    )
}

export default App;

{/*
        <main>
            <NavBar/>
            <DropDown/>
            <Cats/>
        </main>
        */}