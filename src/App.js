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

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: "none",
      color: "#000",
      '&:hover': {
        textDecoration: "none",
        color: "#4c95dd",
      }
    },
    li: {
      textDecoration: "none"

    },
  },

  wrapper: {
    background: theme.palette.gradient.background,
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
