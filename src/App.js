//import area

import React,{Component} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import './App.css'


//definetion area

class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        
                        <Route index element={<Home />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}






//export area
export default App;