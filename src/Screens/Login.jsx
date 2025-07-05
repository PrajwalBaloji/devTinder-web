import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/user";
import { login } from "../api/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const [emailId, setEmailId] = useState("prajwal@baloji.com");
  const [password, setPassword] = useState("prajwal@123");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login({ emailId, password });
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div
      className="flex items-center justify-center overflow-hidden"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          // type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
