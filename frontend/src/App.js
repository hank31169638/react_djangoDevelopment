import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ReadingActivity from "./component/ReadingActivity";
import LoginPageContent from "./component/LoginPageContent";
import LoginUI from "./component/LoginUI";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<ReadingActivity/>} patxh='/info'></Route>
                <Route element={<LoginUI/>} path=''></Route>
                </Routes>
        </Router>
    );
}
export default App;
