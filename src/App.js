import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AppPage from "./components/appPage";
import LoginPage from "./components/FrontPage";
import MainDashboard from "./components/mainDashboard";

const routes = [
  { path: "/", component: LoginPage, exact: true },
  { path: "/apps", component: AppPage, exact: true },
  { path: "/dashboard", component: MainDashboard, exact: true },
];

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((n) => (
            <Route
              key={n.path}
              exact={n.exact}
              path={n.path}
              element={<n.component />}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
