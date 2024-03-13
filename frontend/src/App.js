import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ReadingActivity from "./component/ReadingActivity";
import LoginUI from "./component/LoginUI";
import RegisterUI from "./component/RegisterUI";
import {AuthProvider} from "./component/context/AuthContext";
import PrivateRouteInLoginStatus from "./component/context/PrivateRouteInLoginStatus";
import PrivateRouteNotInLoginStatus from "./component/context/PrivateRouteNotInLoginStatus";

function App() {
    return (
        <AuthProvider>
        <Router>
            <Routes>

                <Route element={<PrivateRouteNotInLoginStatus><ReadingActivity/></PrivateRouteNotInLoginStatus>} path=''></Route>
                <Route element={<PrivateRouteInLoginStatus><LoginUI/></PrivateRouteInLoginStatus>} path='/login'></Route>
                <Route element={<PrivateRouteInLoginStatus><RegisterUI/></PrivateRouteInLoginStatus>} path='/register'></Route>

            </Routes>
        </Router>
            </AuthProvider>
    );
}

export default App;
