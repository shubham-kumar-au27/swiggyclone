import React, { lazy ,Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client'
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import ContactPage from './components/Contact';
import ErrorComponent from './components/Error';
import RestaurantMenu from './components/Menu';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
// import Grocery from './components/GroceryList';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

//chunking----
//Code Splitting--
//Dynamic Bundling--
//Lazy Loading--
//on demand Loading--
const Grocery = lazy(()=> import("./components/GroceryList"));

const AppComponent = ()=>{
    const [userName,setuserName] = useState();
    
    //authentication---
    useEffect(()=>{
        //make an api call and send user and password---
        const data = {
            name:"Shubham Kumar",

        }
        setuserName(data.name)

    },[])
    return (
    <>
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
            <div className='app'>
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>

    </Provider>
    
    </>

    )
 
    }

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppComponent/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },{
                path:'/contact',
                element:<ContactPage/>,
        
            },{
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            },{
                path:'/grocery',
                element:<Suspense fallback={<h1>loading...</h1>} ><Grocery/></Suspense>
            },{
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement:<ErrorComponent/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>)




