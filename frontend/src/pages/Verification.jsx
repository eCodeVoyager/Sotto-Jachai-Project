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
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-royal-blue-600">
      <div className="w-full h-screen md:h-auto flex items-center justify-center">
        <div className="bg-white shadow-lg md:border p-6 md:p-8 rounded-lg border-gray-200 w-full md:w-96 transition-all duration-300">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Verify Your Information
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Enter the post key to verify the information.
          </p>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <Input
                  ref={inputRef}
                  id="key"
                  placeholder="Enter post key"
                  className="placeholder:text-gray-500 text-base pe-10 border border-gray-300 focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 -translate-y-1/2 z-10"
                  onClick={handleReset}
                >
                  <RefreshCcw className="text-gray-500 size-5 hover:text-teal-500 transition-colors" />
                </button>
              </div>
            </div>
            <Button className="block w-full uppercase bg-teal-600 text-white hover:bg-teal-700 transition-all">
              Verify
            </Button>
          </form>
          {post && (
            <div className="mt-6 space-y-3">
              {post.caption && (
                <p className="text-sm font-medium text-gray-800">
                  {post.caption}
                </p>
              )}
              {post.image && (
                <figure className="w-full">
                  <img
                    src={post.image}
                    alt="demo-post"
                    className="w-full object-contain rounded-lg shadow-md"
                  />
                </figure>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Verification;
