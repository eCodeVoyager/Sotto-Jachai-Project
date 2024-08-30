import AuthForm from "@/components/common/Auth/AuthForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/router/routes.data";
import AdminService from "@/services/AdminService";
import { Typography } from "@material-tailwind/react";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Cookie from "js-cookie";
import { Formik } from "formik";
const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <AuthForm title={"Login to Admin Account"} subtitle={"Welcome back!"}>
      {" "}
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required!";
          } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          AdminService.login(values)
            .then(({ data }) => {
              Cookie.set("token", data.token);
              toast.success("Admin Login successful.");
              navigate(routes.dashboard);
              setSubmitting(false);
            })
            .catch((error) => {
              console.log("Error while Admin Login.");
              console.log(error);
              setSubmitting(false);
              toast.error(
                error.response?.data?.message ||
                  error.message ||
                  "Login failed."
              );
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full md:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <div>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  autoFocus="true"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="mt-1 text-red-500 text-sm">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <div>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  size="lg"
                  placeholder="********"
                />
                <p className="mt-1 text-red-500 text-sm">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
            </div>

            <Button
              disabled={isSubmitting}
              className="mt-6 w-full uppercase flex justify-center"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : "sign in"}
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              No Account?{" "}
              <Link
                to={routes.adminRegister}
                className=" text-custom-100 underline font-semibold"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        )}
      </Formik>
    </AuthForm>
  );
};
export default AdminLogin;
