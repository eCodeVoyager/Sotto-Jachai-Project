import AuthForm from "@/components/common/Auth/AuthForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/router/routes.data";
import { Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Cookie from "js-cookie";
import AdminService from "@/services/AdminService";

const AdminRegister = () => {
  const navigate = useNavigate();
  return (
    <AuthForm
      title={"Create your Admin account"}
      subtitle={"Nice to meet you! Enter your details to register as a Admin"}
    >
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
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
          if (!values.name) {
            errors.name = "Name is required!";
          } else if (values.name.length < 3) {
            errors.name = "Name must be at least 3 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          AdminService.register(values)
            .then(({ data }) => {
              console.log(data);
              Cookie.set("token", data.token);
              toast.success("Admin Registration successful.");
              setSubmitting(false);
              navigate(routes.adminDashboard);
            })
            .catch((error) => {
              console.log("Error while Admin registering.");
              console.log(error);
              setSubmitting(false);
              toast.error(
                error.response?.data?.message ||
                  error.message ||
                  "Registration failed."
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
          <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <div>
                <Input
                  size="lg"
                  placeholder="Jon doe"
                  autoFocus="true"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p className="mt-1 text-red-500 text-sm">
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <div>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
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
            {/* <div className="mt-4">
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal ms-2"
                  >
                    I agree the
                    <p className="font-medium transition-colors hover:text-gray-900">
                      &nbsp;Terms and Conditions
                    </p>
                  </Typography>
                }
              />
            </div> */}
            <Button
              disabled={isSubmitting}
              className="mt-6 w-full uppercase flex justify-center"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : "sign up"}
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an admin account?{" "}
              <Link
                to={routes.adminLogin}
                className=" text-custom-100 underline font-semibold"
              >
                Sign In
              </Link>
            </Typography>
          </form>
        )}
      </Formik>
    </AuthForm>
  );
};
export default AdminRegister;
