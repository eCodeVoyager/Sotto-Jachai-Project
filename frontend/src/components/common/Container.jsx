import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 lg:px-0", className)}>
      {children}
    </div>
  );
};
export default Container;
