
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Components/ContactUs/ContactUs';
import AuthProvider from './Components/Context/AuthProvider';
import Departments from './Components/Departments/Departments';
import Doctor from './Components/Doctor/Doctor';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';




function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
            <Header></Header>
                <Switch>
                  <Route exact path = "/">
                    <Home></Home>
                  </Route>
                  <Route path = "/home">
                    <Home></Home>
                  </Route>
                  <Route path = "/signIn">
                    <LogIn></LogIn>
                  </Route>
                  <Route path = "/signUp">
                    <Register></Register>
                  </Route>
                  <PrivateRoute path = "/doctors">
                    <Doctors></Doctors>
                  </PrivateRoute>
                  <Route exact path = "/doctor">
                    <Doctor></Doctor>
                  </Route>
                  <PrivateRoute path = "/doctorDetails/:doctorId">
                    <DoctorDetails></DoctorDetails>
                  </PrivateRoute>
                  <Route path = "/departments">
                    <Departments></Departments>
                  </Route>
                  <PrivateRoute path = "/contactUs">
                    <ContactUs></ContactUs>
                  </PrivateRoute>
                  <Route path = "*">
                    <NotFound></NotFound>
                  </Route>
                </Switch> 
            <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
