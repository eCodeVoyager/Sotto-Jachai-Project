import { useState } from "react";
import ReactPaginate from "react-paginate";
import PostCard from "./PostCard";
import { demoPost } from "@/data/posts.data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [demoPost, demoPost, demoPost, demoPost, demoPost, demoPost];
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((post) => <PostCard post={post} key={post.caption} />)}
    </>
  );
}
const PostsPaginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log();
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ChevronRight className="text-text" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<ChevronLeft className="text-text" />}
        renderOnZeroPageCount={null}
        nextClassName="size-10 border border-gray-600 rounded-full flex items-center justify-center"
        previousClassName="size-10 border border-gray-600 rounded-full flex items-center justify-center"
        containerClassName="flex gap-2 justify-center mt-8"
        pageLinkClassName="size-10 border border-gray-600 rounded-full flex items-center justify-center"
        activeClassName="bg-custom-100 text-white rounded-full border-transparent"
      />
    </>
  );
};
export default PostsPaginate;
