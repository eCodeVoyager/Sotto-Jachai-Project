import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCcw } from "lucide-react";
import { useRef, useState } from "react";
const demoPost = {
  caption:
    "Prose is a form of written language that follows a natural flow of speech and grammatical structure, unlike poetry which often has a rhythmic pattern. It is the most common form of writing, used in novels, articles, essays, and everyday communication. Prose can be either fiction or nonfiction and varies in style, tone, and complexity. It is characterized by complete sentences and paragraphs rather than line breaks. Overall, prose is versatile, allowing for a wide range of expression and storytelling",
  image: "/demo-post.jpg",
};
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
              Verification your infomation
            </h2>
            <form className="mt-3 lg:mt-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="key"
                  className="font-medium text-lg text-gray-800"
                >
                  Key
                </label>
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
              <div className="mt-6 space-y-3">
                {post.caption && (
                  <p className="text-sm font-bold text-gray-600">
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
