import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ps-30k3.onrender.com/auth/resetPassword/" + token, {
        password,
      }, {
        headers : {
          Authorization : `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container1">
      <h1>Reset Password</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <input type="submit" value="Reset" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default ResetPassword;
