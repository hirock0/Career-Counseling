import Feedback from "./Feedback";
import Comment from "./Comment";
const CommentsAndFeedBack = () => {
  return (
    <div className=" mt-5 flex   justify-between max-md:flex-col gap-5">
      <Comment />
      {/* -------------------------- */}
      {/* feed_back_start */}
      <Feedback />
    </div>
  );
};

export default CommentsAndFeedBack;
