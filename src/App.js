import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Signin from "./auth/Signin";
import { useAuth } from "./auth/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
// import BackgroundImage from "./images/background.png";

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      color: "black",
    },
    a: {
      textDecoration: "none",
      color: "black",
      '&:hover': {
        textDecoration: "none",
      }
    },
    li: {
      textDecoration: "none"
    },
  },

  wrapper: {
    // backgroundImage: `url(${BackgroundImage})`,
    backgroundImage: "linear-gradient(to right, #f7dadf, #D4D3DD)",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  const { isLoggedIn } = useAuth();
  return (
    <div className={classes.wrapper}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute
            restricted={true}
            component={Signin}
            path="/signin"
            exact
          />
        </Switch>
      </Router>
    </div>
  );

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    );
  }

  function PublicRoute({ component: Component, restricted, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn && restricted ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

export default App;
