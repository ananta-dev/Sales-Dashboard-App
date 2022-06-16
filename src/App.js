import "./app.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import SalesByCustomer from "./pages/salesByCustomer/SalesByCustomer";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "./firebase/config";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
    const { authIsReady, user } = useAuthContext();

    return (
        <>
            <div className='App'>
                {authIsReady && (
                    <BrowserRouter>
                        <Topbar />
                        <div className='container'>
                            <Switch>
                                <Route exact path='/'>
                                    {!user && <Redirect to='/login' />}
                                    {user && (
                                        <>
                                            <Sidebar />
                                            <Home />
                                        </>
                                    )}
                                </Route>
                                <Route exact path='/sales-by-customer'>
                                    {!user && <Redirect to='/login' />}
                                    {user && (
                                        <>
                                            <Sidebar />
                                            <SalesByCustomer />
                                        </>
                                    )}
                                </Route>
                                <Route exact path='/login'>
                                    {user && <Redirect to='/' />}
                                    {!user && <Login />}
                                </Route>
                                <Route exact path='/signup'>
                                    {user && <Redirect to='/' />}
                                    {!user && <Signup />}
                                </Route>
                                <Route exact path='/users'>
                                    {!user && <Redirect to='/login' />}
                                    {user && (
                                        <>
                                            <Sidebar />
                                            <UserList />
                                        </>
                                    )}
                                </Route>
                                <Route exact path='/user/:userId'>
                                    {!user && <Redirect to='/login' />}
                                    {user && (
                                        <>
                                            <Sidebar />
                                            <User />
                                        </>
                                    )}
                                </Route>
                                <Route exact path='/newUser'>
                                    {!user && <Redirect to='/login' />}
                                    {user && (
                                        <>
                                            <Sidebar />
                                            <Home />
                                        </>
                                    )}
                                </Route>
                                <Route exact path='/products'>
                                    {!user && <Redirect to='/login' />}
                                    {user && (
                                        <>
                                            <Sidebar />
                                            <Home />
                                        </>
                                    )}
                                </Route>
                                <Route exact path='/product/:productId'>
                                    {!user && <Redirect to='/login' />}
                                    {user && (
                                        <>
                                            <Sidebar />
                                            <Home />
                                        </>
                                    )}
                                </Route>
                                <Route exact path='/newproduct'>
                                    {!user && <Redirect to='/login' />}
                                    {user && (
                                        <>
                                            <Sidebar />
                                            <Home />
                                        </>
                                    )}
                                </Route>
                            </Switch>
                        </div>
                    </BrowserRouter>
                )}
                <ReactQueryDevtools />
            </div>
        </>
    );
}

export default App;
