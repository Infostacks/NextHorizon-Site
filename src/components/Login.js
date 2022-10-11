import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Joi from "joi-browser";
import _ from "lodash";
import LogInCard from "./AuthProvider/LoginCard";
import SignUpCard from "./AuthProvider/SignUpCard";
import ResetPassCard from "./AuthProvider/ResetPassCard";
import styles from "../utils/GlobalStyles";

const Login = () => {
  const [setIsAnimating] = useState(false);
  const [authType, setAuthType] = useState(2);
  const [confirmPassError, setConfirmPassError] = useState(false);
  const [errors, setErrors] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [logInFormData, setLogInFormData] = useState(_.omit(formData, ["confirmPassword"]));
  const [resetPassFormData, setResetPassFormData] = useState(
    _.omit(formData, ["password", "confirmPassword"]),
  );

  const showCardTitleText = () => {
    // show title card Text
    if (authType === 1) {
      return "Sign Up for new Account";
    } else if (authType === 2) {
      return "Log In to your Account";
    } else {
      return "Enter Email to reset password";
    }
  };

  const showSubmitBtnText = () => {
    // show Submit button text
    if (authType === 1) {
      return "Sign Up";
    } else if (authType === 2) {
      return "Log In";
    } else {
      return "Reset Password";
    }
  };

  const showChangeCardBtnText = () => {
    // show Change Card button text
    if (authType === 1 || authType === 3) {
      return "Log In";
    } else {
      return "Sign Up";
    }
  };

  const changeAuthCard = () => {
    // show Change Card button text
    if (authType === 1 || authType === 3) {
      return setAuthType(2); // if (login/resetPass then change to signup)
    } else {
      return setAuthType(1);
    }
  };

  const showAuthComponents = () => {
    // show auth components
    if (authType === 1) {
      return (
        <SignUpCard
          onChange={handleChange}
          valueEmail={formData.email}
          valuePass={formData.password}
          valueConfPass={formData.confirmPassword}
        />
      );
    } else if (authType === 2) {
      return (
        <LogInCard
          onChange={handleChange}
          valueEmail={logInFormData.email}
          valuePass={logInFormData.password}
        />
      );
    } else {
      return <ResetPassCard onChange={handleChange} valueEmail={resetPassFormData.email} />;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrors(null);
      setConfirmPassError(false);
    }, 3000);
  }, [errors, confirmPassError]);

  const signUpSchema = {
    // Joi schema for validation
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .label("Password did not match"),
  };

  const signInSchema = {
    // Joi schema for validation
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
  };

  const resetPassSchema = {
    // Joi schema for validation
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
  };

  const validate = () => {
    // Validation function for Joi schema
    let options = { abortEarly: false }; // abortEarly: false = return all errors

    let schemaValidation;
    let cardData;
    if (authType === 1) {
      schemaValidation = signUpSchema;
      cardData = formData;
    } else if (authType === 2) {
      schemaValidation = signInSchema;
      cardData = logInFormData;
      console.log("in validaiton: ", schemaValidation);
    } else {
      schemaValidation = resetPassSchema;
      cardData = resetPassFormData;
    }

    console.log("in validaiton: ", authType);

    let { error } = Joi.validate(cardData, schemaValidation, options); // error = Joi error object
    if (!error) return null; // if no error, return null

    let errors = []; // if error, create an empty array of errors

    for (let item of error.details) {
      // loop through error.details and push each error to the errors array
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleSubmit = async () => {
    // Function to handle submit
    setErrors(null);
    let data = validate(); // Validation function call
    console.log("data: ", data);
    if (data) {
      // If validation fails
      setErrors(data);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    } else {
      // If validation passes
      try {
        if (authType === 1) {
          if (formData.password !== formData.confirmPassword) {
            setConfirmPassError(true);
          } else {
            console.log("sign up method called");
            // await signUp(formData.email, formData.password);
            alert("Successfully Signed Up. authType Now!");
            setAuthType(2);
            resetForm();
          }
        } else if (authType === 2) {
          console.log("sign in method called");
          //   await signIn(logInFormData.email, logInFormData.password);
        } else {
          //   await resetPassword(resetPassFormData.email);
        }
      } catch (err) {
        // If sign in fails
        console.log(err);
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1500);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (authType === 1) {
      setFormData({ ...formData, [name]: value });
    } else if (authType === 2) {
      setLogInFormData({ ...logInFormData, [name]: value });
    } else {
      setResetPassFormData({ ...resetPassFormData, [name]: value });
    }
  };

  const resetForm = () => {
    setConfirmPassError(false);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex flex-col items-center w-screen bg-opacity-90 bg-slate-700 overflow-x-hidden">
      <section className={`flex justify-center flex-col items-center w-full bg-no-repeat bg-cover`}>
        <div className="xl:w-3/4 lg:w-3/4 w-5/6 flex xl:flex-row lg:flex-row md:flex-col flex-col items-center justify-center min-h-screen pb-10 pt-20">
          {/* Left Side Logo  */}
          <div className="xl:w-1/3 lg:w-1/3 h-full w-full flex flex-col gap-5 items-center justify-center text-white">
            <motion.span
              variants={{
                hidden: {
                  opacity: 1,
                },
                visible: {
                  y: [25, -25],
                  color: "#DCE1E9",
                  transition: {
                    y: {
                      yoyo: Infinity,
                      duration: 1.5,
                      delay: 1.5,
                      ease: "easeOut",
                    },
                  },
                },
                removed: {
                  opacity: 1,
                },
              }}
              initial="hidden"
              animate="visible">
              <BsFillCloudLightningRainFill className="w-32 h-32" />
            </motion.span>
            <h1 id="logoFont" className="text-3xl font-bold drop-shadow-2xl tracking-wider">
              Next Horizon
            </h1>
          </div>

          {/* LogIn Card  */}
          <div className="xl:w-2/3 lg:w-2/3 w-full h-full flex justify-center items-center py-5">
            <motion.div
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 3,
              }}
              exit={{
                opacity: 0,
              }}>
              {/* temp code  */}
              <div
                id="SignUp"
                className="flex justify-center items-center flex-col xl:bg-white lg:bg-white xl:shadow-lg lg:shadow-lg xl:rounded-[3rem]">
                <div className="flex items-start p-5 flex-col">
                  <div className="mt-10 mb-5 flex gap-3 flex-col">
                    <h2 className="text-xs text-slate-400">Welcom to Next Horizon</h2>
                    <h1 className="text-2xl text-slate-600 font-semibold" id="logoFont">
                      {showCardTitleText()}
                    </h1>
                  </div>

                  <div className="flex flex-col items-start gap-5 mb-5">
                    {/* place code here */}
                    <div className="flex flex-col gap-3 w-full justify-center">
                      {showAuthComponents()}
                      <span
                        style={{
                          display: confirmPassError ? "block" : "none",
                          color: "red",
                          fontSize: "12px",
                          alignSelf: "flex-end",
                          marginRight: "5px",
                        }}>
                        *Confirm Password is not same!
                      </span>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className={styles.buttonRedOutline}>
                        {showSubmitBtnText()}
                      </button>
                      {/* show more button */}
                      <div>or</div>

                      <button
                        className={`rounded-sm pl-2 pr-2 pt-1 pb-1 text-sm hover:underline text-${styles.redPrimary}`}
                        onClick={() => {
                          changeAuthCard();
                          resetForm();
                        }}>
                        {showChangeCardBtnText()}
                      </button>
                    </div>

                    {authType !== 3 && (
                      <button
                        className={`rounded-sm pl-2 pr-2 pt-1 pb-1 text-sm hover:underline text-${styles.redPrimary}`}
                        onClick={() => setAuthType(3)}>
                        Forgot password?
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
