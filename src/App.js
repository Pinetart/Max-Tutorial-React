import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/profile">
              <UserProfile />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
