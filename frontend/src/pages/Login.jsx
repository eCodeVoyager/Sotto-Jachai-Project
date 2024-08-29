import AuthForm from "@/components/common/Auth/AuthForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/router/routes.data";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthForm
      title={" Login to Your Account"}
      subtitle={"Welcome back! Enter your credential to login."}
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

        <Button className="mt-6 block w-full uppercase ">sign in</Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          No account?{" "}
          <Link
            to={routes.register}
            className=" text-custom-100 underline font-semibold"
          >
            Sign up
          </Link>
        </Typography>
      </form>
    </AuthForm>
  );
};
export default Login;
