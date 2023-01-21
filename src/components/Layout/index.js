import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';


const Layout = () =>{
    const [currentNavItem, setCurrentNavItem] = useState('Home');
    const [navSelected, setNavSelected] =useState('About');

    return (
        <>
        <main className="background">
            <Header 
            currentNavItem={currentNavItem} 
            setCurrentNavItem={setCurrentNavItem}
            navSelected={navSelected}
            setNavSelected={setNavSelected}
            />
          
         
           
                <Outlet/>
          
              
            
        </main>
        </>
    );
}

export default Layout;