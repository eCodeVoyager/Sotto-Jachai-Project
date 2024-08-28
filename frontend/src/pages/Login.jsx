import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/icons/google.svg";
const Login = () => {
  return (
    <section>
      <Container>
        <div className="w-full sm:w-1/2 mx-auto flex items-center justify-center h-[400px]">
          <div className="w-full  border border-gray-500 p-3 rounded-lg text-center">
            <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 capitalize">
              Login or create an account
            </h2>
            <Button variant="ghost" className="border border-gray-400 mt-6 ">
              <img src={GoogleIcon} alt="GoogleIcon" className="size-8" />
              <span className="text-gray-900 font-medium">
                Continue to Google
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Login;
