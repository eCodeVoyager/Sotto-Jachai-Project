import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/router/routes.data";
import { Card, Checkbox, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="flex items-center justify-center min-h-screen ">
      <Card
        color="transparent"
        shadow={false}
        className="border p-6 rounded-lg border-gray-400 w-full"
      >
        <Typography variant="h4" className="text-gray-900">
          Create Your Account
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-muted-foreground"
        >
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input size="lg" placeholder="name@mail.com" />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input type="password" size="lg" placeholder="********" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <p className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </p>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 block md:w-full uppercase">sign up</Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to={routes.login} className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </section>
  );
};
export default Register;
