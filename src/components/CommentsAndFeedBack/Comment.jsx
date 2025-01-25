import { useState } from "react";

import { IoMdSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../ContextApi/ContextApi";
const Comment = () => {
  const { loggedUser } = useAppContext();
  const [commentFlag, setCommentFlag] = useState(false);
  const [comments, setComments] = useState([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onComment = (commentText) => {
    const commentObj = {
      userImg: loggedUser.photoURL,
      comment: commentText.comment,
      date: new Date().toLocaleDateString(),
    };
    setComments([commentObj, ...comments]);
    reset();
  };

  return (
    <div className=" w-1/2 bg-zinc-200  rounded-md shadow-md  p-5  max-md:w-full">
      <div className=" flex flex-col justify-center">
        <button
          onClick={() => {
            setCommentFlag(!commentFlag);
          }}
          className="text-white bg-green-500 h-12 rounded-gl shadow-lg"
        >
          Comment
        </button>
        <div className={`${!commentFlag ? "hidden" : "block"} mt-5`}>
          <form onSubmit={handleSubmit((data) => onComment(data))}>
            <textarea
              name="comment"
              placeholder="Comment"
              {...register("comment", { required: "Need to fill it." })}
              className=" outline-none w-full h-20 p-2"
            ></textarea>
            {errors.comment && (
              <h1 className=" text-sm text-red-600 pl-2">
                {errors.comment.message}
              </h1>
            )}
            <button type="submit" className=" mt-2 text-blue-300">
              <IoMdSend size={30} />
            </button>
          </form>

          <div className="divider"></div>
          <div className="h-60 overflow-y-scroll overflowHideScroll ">
            <ul>
              {comments.length == 0 ? (
                <h1>No comments</h1>
              ) : (
                comments.map((item, index) => (
                  <li
                    key={index}
                    className=" flex gap-3 justify-between  border-b border-slate-400 py-4"
                  >
                    <div className=" flex gap-4">
                      <img
                        src={item.userImg}
                        alt={loggedUser?.displayName}
                        className=" w-10 h-10 rounded-full"
                      />
                      <p className=" text-sm ">{item.comment}</p>
                    </div>
                    <p className=" text-xs">{item.date}</p>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
