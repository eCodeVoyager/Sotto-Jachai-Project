import AuthForm from "@/components/common/Auth/AuthForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@material-tailwind/react";

const AdminLogin = () => {
  return (
    <AuthForm title={"Login to Admin Account"} subtitle={"Welcome back!"}>
      <form className="mt-8 mb-2 w-full sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input size="lg" placeholder="admin@mail.com" autofocus="true" />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input type="password" size="lg" placeholder="********" />
        </div>

        <Button className="mt-6 block w-full uppercase ">Log in</Button>
      </form>
    </AuthForm>
  );
};
export default AdminLogin;
