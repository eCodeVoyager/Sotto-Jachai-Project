/* eslint-disable react-hooks/exhaustive-deps */
import { MyContentsIcon } from "@/components/common/Icons";
import PostsListing from "@/components/common/posts/PostsListing";
import { fetchUsersContents } from "@/redux/app/admin/fetchUsersContents";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminAllContents = () => {
  const dispatch = useDispatch();
  const { allContents } = useSelector((state) => state.adminContent);
  const verifiedContents = allContents.filter(
    (content) => content.status === "verified"
  );
  useEffect(() => {
    for (const content of verifiedContents) {
      if (content.keyId === undefined) {
        dispatch(fetchUsersContents());
        break;
      }
    }
  }, []);
  return (
    <section>
      <PostsListing
        contents={verifiedContents}
        title={"All Contents"}
        Icon={MyContentsIcon}
        limit={2}
      />
    </section>
  );
};
export default AdminAllContents;
