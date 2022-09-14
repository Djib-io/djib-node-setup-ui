import React, { useState } from "react";
import Box from "../components/Box";
import Container from "../components/Container";
import Header from "../components/Header";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";
function Login() {
  const navigate=useNavigate()
  const [responseError, setResponseError] = useState("");
  const {
    register,
    handleSubmit,
    
    setFocus,

    formState: { errors },
  } = useForm();
  const dataPost = async (resdata) => {
    try {
      const res = await axios.post(
        "http://167.235.133.112:3045/api/login",
        resdata
      );
      localStorage.setItem("djibtoken", res.data.data);
      navigate("/")
    } catch (error) {
      error.response.status === 401
        ? setResponseError("Invalid Credential.")
        : setResponseError(
            `An error ocurred, status code: ${error.response.status}`
          );
    }
  };
  const onSubmit = async (data) => {
    dataPost(data);
  };
  React.useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  return (
    <Container>
      <Header />
      <div className="box-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={"flex flex-col gap-4"}>
            <h1 className="text-3xl text-slate-700 font-medium text-center mt-4 mb-4 w-96">
              Login
            </h1>
            <div className={"flex flex-col gap-1"}>
              <p className="text-sm text-slate-400">Username</p>
              <Input
                type="text"
                placeHolder={"enter the username..."}
                {...register("username", { required: true })}
              />
            </div>
            <div className={"flex flex-col gap-1 mb-5"}>
              <p className="text-sm text-slate-400">Password</p>
              <Input
                type="password"
                placeholder={"••••••••"}
                {...register("password", { required: true }) }
              />
            </div>
            {errors.username || errors.password || responseError ? (
              <>
                <div
                  className="bg-warning-700 border-l-4 border-warning-600 text-warning-800 p-4"
                  role="alert"
                >
                  <p className="font-bold">Be Warned</p>
                  {errors.username ? (
                    <p>Username shouldnt be empty.</p>
                  ) : errors.password ? (
                    <p>Password shouldnt be empty.</p>
                  ) : responseError ? (
                    <p>{responseError}</p>
                  ) : null}
                </div>
              </>
            ) : null}

            <Input type="submit" />
          </Box>
        </form>
      </div>
    </Container>
  );
}

export default Login;
