import React, { useState } from "react";
import Box from "../components/Box";
import Container from "../components/Container";
import Header from "../components/Header";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SetUserPass() {
  const [responseError, setResponseError] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("UserName is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 10 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, setFocus, formState } =
    useForm(formOptions);
  const { errors } = formState;
  const dataPost = async (resdata) => {
    const { username, password } = resdata;
    try {
      const res = await axios.post(
        "http://167.235.133.112:3045/api/info/set-password",
        {
          token: localStorage.getItem("djibtoken"),
          username: username,
          password: password,
        }
      );
      if (res.data.data.status === -1) {
        setResponseError(`Wrong Payload`);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setResponseError(
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
            <h1 className="text-3xl text-slate-700 font-medium text-center mt-4 mb-4">
              Set Username & Password
            </h1>

            <div className={"flex flex-col gap-1"}>
              <p className="text-sm text-slate-400">Username</p>
              <Input
                type="text"
                {...register("username")}
                placeHolder={"Example"}
              />
            </div>

            <div className={"flex flex-col gap-1"}>
              <p className="text-sm text-slate-400">Password</p>
              <Input
                type="password"
                placeHolder={"••••••••"}
                {...register("password")}
              />
            </div>

            <div className={"flex flex-col gap-1 mb-8"}>
              <p className="text-sm text-slate-400">Confirm password</p>
              <Input
                type="password"
                placeHolder={"••••••••"}
                {...register("confirmPassword")}
              />
            </div>

            {errors.username ||
            errors.password ||
            errors.confirmPassword ||
            responseError ? (
              <>
                <div
                  className="bg-warning-700 border-l-4 border-warning-600 text-warning-800 p-4"
                  role="alert"
                >
                  <p className="font-bold">Be Warned</p>
                  {errors.username ? (
                    <p>Username shouldnt be empty.</p>
                  ) : errors.password ? (
                    <p>{errors.password.message}</p>
                  ) : errors.confirmPassword ? (
                    <p>{errors.confirmPassword.message}</p>
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

export default SetUserPass;
