import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import InfoPage from "./component/Page/InfoPage";
import LoginPage from "./component/Page/LoginPage";
import RegisterPage from "./component/Page/RegisterPage";
import RedirectPage from "./component/Page/RedirectPage";
import HomePage from "./component/Page/HomePage/HomePage";

import {AuthProvider} from "./component/context/AuthContext";
import RequireAuthRoute from "./component/LoginStatus/RequireAuthRoute";
import RedirectIfNotLoggedInRoute from "./component/LoginStatus/RedirectIfNotLoggedInRoute";

function App() {
    return (
        <AuthProvider>
        <Router basename={"/"}>
            <Routes>
                <Route element={<RedirectIfNotLoggedInRoute><HomePage/></RedirectIfNotLoggedInRoute>} path='/'></Route>
                <Route element={<RedirectIfNotLoggedInRoute><InfoPage/></RedirectIfNotLoggedInRoute>} path='/event'></Route>
                <Route element={<RequireAuthRoute><LoginPage/></RequireAuthRoute>} path='/login'></Route>
                <Route element={<RequireAuthRoute><RegisterPage/></RequireAuthRoute>} path='/register'></Route>
                <Route element={<RedirectPage/>}  path='/redirect'></Route>
            </Routes>
        </Router>
            </AuthProvider>
    );
}

export default App;
