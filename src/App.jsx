import './App.css'
import {Route, Routes} from "react-router-dom";
import {User} from "./components/user";
import {Layout} from "./components/LayOut";

const Home = () => {
    return (
        <h1>Home</h1>
    );
}

function Account() {
    return (
        <>
            <h1>Account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, cum eligendi eum illo ipsum libero maiores minima, molestiae nam omnis pariatur praesentium quibusdam ut velit voluptatem. Ad mollitia quae quia.</p>
        </>
    );
}

function NoMatch() {
    return (
        <h1>No route abialable</h1>
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

let activeStyle = {
    backgroundColor: "#04AA6D",
    color: "white"
};


function App() {
    return (
        <>
            <Routes>

                <Route element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="user" element={<User/>}>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="account" element={<Account/>}/>
                        <Route path="list1" element={<h1>List 1</h1>}/>
                        <Route path="list2" element={<h1>List 2</h1>}/>
                    </Route>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>

            </Routes>
        </>
    );

}

export default App
