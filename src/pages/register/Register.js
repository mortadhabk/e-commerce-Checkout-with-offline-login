import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useForm } from "../../util/hooks";
import { useStyles } from "./scss/RegisterStyle";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import { RegisterApi } from "./use/thunk/RegisterApi";

function Register(props) {
  const error = useSelector((state) => state.Auth.error);
  const isLoading = useSelector((state) => state.Auth.isLoading);
  const token = useSelector((state) => state.Auth.token);

  console.log("token type : " + typeof token);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState();
  let history = useHistory();
  if (token) {
    history.push("/");
  }
  const classes = useStyles();
  const { onChange, onSubmit, values } = useForm(registerUser, {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function registerUser() {
    dispatch(RegisterApi(values));
  }

  return (
    <Container>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            {isLoading ? <CircularProgress className={classes.root} /> : ""}
            {error && !isLoading ? (
              <Alert severity="error" className={classes.root}>
                {error} ??? check it out!
              </Alert>
            ) : (
              <div></div>
            )}

            <form className={classes.form} noValidate onSubmit={onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="firstname"
                placeholder="firstname..."
                type="text"
                name="firstname"
                autoComplete="firstname"
                autoFocus
                value={values.firstname}
                onChange={onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="lastname"
                placeholder="lastname..."
                type="text"
                name="lastname"
                autoComplete="lastname"
                autoFocus
                value={values.lastname}
                onChange={onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                onChange={onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={onChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}></Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Register;
