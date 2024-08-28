import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { demoPost } from "@/data/posts.data";
import { RefreshCcw } from "lucide-react";
import { useRef, useState } from "react";

const Verification = () => {
  const [post, setPost] = useState(null);

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const key = inputRef.current.value;
    console.log(key);
    setPost(demoPost);
  };
  const handleReset = () => {
    inputRef.current.value = "";
    setPost(null);
    inputRef.current.focus();
  };
  return (
    <section>
      <Container>
        <div className="w-full sm:w-1/2 mx-auto h-screen flex items-center justify-center">
          <div className="w-full h-[90%] overflow-y-auto border border-gray-500 p-3 rounded-lg">
            <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 capitalize">
              Verify your infomation
            </h2>
            <form className="mt-3 lg:mt-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    ref={inputRef}
                    id="key"
                    placeholder="Enter post key"
                    className="placeholder:text-gray-400 text-base md:text-lg pe-10"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 -translate-y-1/2 z-10"
                    onClick={handleReset}
                  >
                    <RefreshCcw className="text-gray-700 size-5" />
                  </button>
                </div>
              </div>
              <Button className="mt-4 w-full">Verify</Button>
            </form>
            {/* post data */}
            {post && (
              <div className="mt-4 space-y-3">
                {post.caption && (
                  <p className="text-xs font-bold text-muted-foreground">
                    {post.caption}
                  </p>
                )}
                {post.image && (
                  <figure className="w-full">
                    <img
                      src={post.image}
                      alt="demo-post"
                      className="w-full object-contain"
                    />
                  </figure>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Verification;
