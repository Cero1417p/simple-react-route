import './App.css'
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/LayOut";
import { SubRouter } from './components/SubRouter';
import { NotFound } from './components/NotFound';


function Account() {
    return (
        <>
            <h1>Account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, cum eligendi eum illo ipsum libero maiores minima, 
                molestiae nam omnis pariatur praesentium quibusdam ut velit voluptatem. Ad mollitia quae quia.</p>
        </>
    );
}



function Profile() {
    return ( 
        <>
            <h1>Profile</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid dolor doloremque earum harum illo,
                incidunt iusto modi neque non qui rem temporibus ut veritatis voluptas! Consequuntur explicabo natus
                nostrum!</p>
        </>
    );
}


function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<h1>INDEX</h1>}/>
                    <Route path="home" element={<h1>Home</h1>}/>
                    <Route path="user/*" element={<SubRouter/>} />
        
                    <Route path="*" element={<NotFound/>}/>
                </Route>

            </Routes>
        </>
    );

}

export default App
