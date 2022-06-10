import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../context/authContext";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyALDEpKwjthdMLNHloMHoQvf0FNLKt-7Oo";
  const { token } = useContext(AuthContext);
  const fetchChangePassword = async (url, enteredNewPassword, idToken) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          idToken,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        alert("Successful password change");
        const data = await response.json();
        console.log(data);
      } else {
        console.log(url, enteredNewPassword, token);
        const data = await response.json();
        console.log(data);
        throw new Error("Password change failed");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    fetchChangePassword(url, enteredNewPassword, token);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          minLength="7"
          id="new-password"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
