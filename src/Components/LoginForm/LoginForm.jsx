import React from "react";
import { useState, useEffect } from "react";
import "./LoginForm.css";
import axios from "axios";
import { ContextData } from "../../ContextData/ContextData";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
export default function LoginForm() {
  let [apiError, setapiError] = useState(null);
  let [isLoading, setisLoading] = useState(false);
  let [validationError, setvalidationError] = useState([]);
  let { saveUser } = useContext(ContextData);
  console.log(saveUser);
  let Navigate = useNavigate();
  let [user, setUser] = useState({
    uid: "",
    password: "",
  });
  function GetDataUser(e) {
    console.log(e.target.name);
    let currentUser = { ...user };
    currentUser[e.target.name] = e.target.value;
    setUser(currentUser);
    console.log(currentUser);
    vaildation();
  }
  async function userLogin(e) {
    e.preventDefault();
    if (vaildation()) {
      setisLoading(true);
      let { data } = await axios.post(
        `https://e.micronano.online/api/login`,
        user
      );
      console.log(data);
      if (data.message == "Login success") {
        console.log("hiiii");
        localStorage.setItem("token", data.token);
        setisLoading(false);
        setapiError(null);
        Navigate("/homestudent");
        saveUser();
      } else {
        setapiError(data.message);
        setisLoading(false);
      }
    }
  }
  function vaildation() {
    let schema = Joi.object({
      uid: Joi.string()
        .required()
        .messages({ "string.empty": "من فضلك ادخل الكود الخاص بك" }),
      password: Joi.string()
        .required()
        .messages({ "string.empty": "من فضلك ادخل كلمة السرالخاصة بك" }),
    });
    let res = schema.validate(user, { abortEarly: false });
    console.log(res);

    if (res.error) {
      setvalidationError(res.error.details);
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <div class="header-content-login ">
        <div className="container ">
          <div className="row ">
            <div className="form">
              <form onSubmit={(e) => userLogin(e)}>
                <div class="form-group">
                  <FaUserGraduate className="icon-input" />
                  <input
                    type="text"
                    onChange={(e) => GetDataUser(e)}
                    className="noborder-input "
                    placeholder="ادخل الكود الخاص بك"
                    name="uid"
                  />
                </div>
                <div className="parent-validation-error">
                  <div
                    className={
                      validationError.filter(
                        (ele) => ele.context.label == "uid"
                      )[0]
                        ? "text-danger api-validation-erorr"
                        : ""
                    }
                  >
                    {
                      validationError.filter(
                        (ele) => ele.context.label == "uid"
                      )[0]?.message
                    }
                  </div>
                </div>
                <div class="form-group ">
                  <RiLockPasswordFill className="icon-input" />
                  <input
                    type="password"
                    onChange={(e) => GetDataUser(e)}
                    className="noborder-input "
                    placeholder="من فضلك ادخل كلمة السر"
                    name="password"
                  />
                </div>
                <div className="parent-validation-error">
                  <div
                    className={
                      validationError.filter(
                        (ele) => ele.context.label == "password"
                      )[0]
                        ? "text-danger api-validation-erorr"
                        : ""
                    }
                  >
                    {
                      validationError.filter(
                        (ele) => ele.context.label == "password"
                      )[0]?.message
                    }
                  </div>
                </div>
                <div className="parent-api-error">
                  {apiError && (
                    <div className=" api-erorr mt-1 text-danger">
                      {apiError}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn login-btn w-100 mt-3 p-2">
                  {isLoading ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    "تسجيل الدخول"
                  )}{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}