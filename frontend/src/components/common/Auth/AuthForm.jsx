import AuthIllustration from "@/components/common/AuthIllustration";
import { Card, Typography } from "@material-tailwind/react";
const AuthForm = ({ title, subtitle, children }) => {
  return (
    <>
      <section className="flex justify-center md:justify-between min-h-screen px-4 md:px-0">
        <div className="flex items-center justify-center flex-col gap-4 md:flex-[.4] h-screen md:h-auto relative">
          <figure>
            <img
              className="w-[180px] md:w-[200px]"
              src="/images/logo.svg"
              alt="logo"
            />
          </figure>
          <Card
            color="transparent"
            shadow={false}
            className="md:border md:p-10 md:border-gray-400 md:rounded-xl w-full md:w-auto flex justify-center md:block md:h-auto "
          >
            <Typography variant="h4" className="text-gray-900">
              {title}
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal text-muted-foreground"
            >
              {subtitle}
            </Typography>
            {children}
          </Card>
          <div className="absolute bottom-4">
            <p>
              {/* copy right text start */}
              <span className="text-gray-600 text-base font-medium">
                &copy; {new Date().getFullYear()} All rights reserved.
              </span>
            </p>
          </div>
        </div>
        <AuthIllustration />
      </section>
    </>
  );
};
export default AuthForm;
