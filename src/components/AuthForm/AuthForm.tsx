import { FC } from "react";
import { useFormik } from "formik";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "components/Logo/Logo";
import { Button, FormInput, Heading, Text } from "components/UI";
import { authFormConfig } from "constants/constants";
import styles from "./AuthForm.module.css";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const { values, handleBlur, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: authFormConfig[type].schema,
  });
  const isLogin = type === "login";
  const hasEmailError = errors.email && errors.email !== "";
  const hasPasswordError = errors.password && errors.password !== "";
  const hasConfirmPasswordError =
    errors.confirmPassword && errors.confirmPassword !== "";
  return (
    <div className={styles.auth}>
      <Logo size="l" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <header className={styles.form__header}>
          <Heading color="dark-grey">{authFormConfig[type].heading}</Heading>
          <Text color="grey">{authFormConfig[type].headingText}</Text>
        </header>

        <div className={styles.form__content}>
          <div className={styles.form__input}>
            <label htmlFor="email">
              <Text size="s" color={hasEmailError ? "danger" : "dark-grey"}>
                {authFormConfig[type].emailLabel}
              </Text>
            </label>
            <FormInput
              icon={<HiOutlineMail size={13} />}
              type="email"
              id="email"
              placeholder={authFormConfig[type].emailPlaceholder}
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          <div className={styles.form__input}>
            <label htmlFor="password">
              <Text size="s" color={hasPasswordError ? "danger" : "dark-grey"}>
                {authFormConfig[type].passwordLabel}
              </Text>
            </label>
            <FormInput
              icon={<IoIosLock size={13} />}
              type="password"
              id="password"
              placeholder={authFormConfig[type].passwordPlaceholder}
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.password}
            />
          </div>

          {!isLogin && (
            <div className={styles.form__input}>
              <label htmlFor="confirmPassword">
                <Text
                  size="s"
                  color={hasConfirmPasswordError ? "danger" : "dark-grey"}
                >
                  Confirm Password
                </Text>
              </label>
              <FormInput
                icon={<IoIosLock size={13} />}
                type="password"
                id="confirmPassword"
                placeholder="At least 8 characters"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            </div>
          )}

          {!isLogin && (
            <Text color="grey">
              Password must contain at least 8 characters
            </Text>
          )}

          <Button type="submit">{authFormConfig[type].buttonText}</Button>

          <footer className={styles.form__footer}>
            <Text color="grey">{authFormConfig[type].footerText}</Text>
            <Text color="primary">
              <Link to={authFormConfig[type].footerLink}>
                {authFormConfig[type].footerLinkText}
              </Link>
            </Text>
          </footer>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
