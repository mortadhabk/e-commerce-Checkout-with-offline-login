import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useForm } from "../../../../util/hooks";
import { ChangepasswordApi } from "./use/thunk/ChangepasswordApi";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  infored: {
    color: "red",
  },
  infogreen: {
    color: "green",
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  load: {
    size: "2px!important",
  },
  wrapper: {
    display: "flex",
    margin: theme.spacing(2),
    position: "relative",
  },
  buttonProgress: {
    color: "green",
    position: "absolute",
    top: 5,
    left: 20,
  },
}));

const ChangePassword = () => {
  let history = useHistory();
  const success = useSelector((state) => state.Account.success) || null;
  const error = useSelector((state) => state.Account.error) || null;
  const isLoading = useSelector((state) => state.Account.isLoading) || null;
  const dispatch = useDispatch();
  const classes = useStyles();
  const { onChange, onSubmit, values } = useForm(saveChangepassword, {
    currentpassword: "",
    newpassword: "",
  });

  function saveChangepassword() {
    console.log("value" + values);
    dispatch(ChangepasswordApi(values));
  }
  return (
    <div className="sectiondashboard">
      <div className={classes.infored}>{error ? error : ""}</div>
      <div className={classes.infogreen}>{success ? success : ""}</div>

      <h5>Change Your Password : </h5>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <div>
          <TextField
            id="currentpassword"
            label="Current Password"
            type="password"
            autoComplete="current-password"
            name="currentpassword"
            onChange={onChange}
          />
        </div>
        <div>
          <TextField
            id="newpassword"
            label="newPassword"
            type="password"
            autoComplete="current-password"
            name="newpassword"
            onChange={onChange}
          />
        </div>
        <div className={classes.wrapper}>
          <Button type="submit" variant="contained">
            Save
          </Button>
          {isLoading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
