import AuthForm from "@/components/common/Auth/AuthForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/router/routes.data";
import { Checkbox, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthForm
      title={"Create your account"}
      subtitle={"Nice to meet you! Enter your details to register."}
    >
      <form className="mt-8 mb-2 w-full sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input size="lg" placeholder="name@mail.com" autofocus="true" />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input type="password" size="lg" placeholder="********" />
        </div>
        <div className="mt-4">
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
        </div>
        <Button className="mt-6 block w-full uppercase ">sign up</Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to={routes.login}
            className=" text-custom-100 underline font-semibold"
          >
            Sign In
          </Link>
        </Typography>
      </form>
    </AuthForm>
  );
};
export default Register;
