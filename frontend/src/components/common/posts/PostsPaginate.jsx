import { useState } from "react";
import ReactPaginate from "react-paginate";
import PostCard from "./PostCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Items({ currentItems }) {
  return (
    currentItems &&
    currentItems.map((post) => <PostCard post={post} key={post._id} />)
  );
}
const PostsPaginate = ({ contents, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = contents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(contents.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % contents.length;
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
