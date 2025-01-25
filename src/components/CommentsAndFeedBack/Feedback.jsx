import { useState } from "react";

import { IoMdSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../ContextApi/ContextApi";
const Feedback = () => {
  const { loggedUser } = useAppContext();
  const [feedbackFlag, setFeedbackFlag] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFeedback = (feedText) => {
    const feedbackObj = {
      userImg: loggedUser.photoURL,
      feedback: feedText.feedback,
      date: new Date().toLocaleDateString(),
    };
    setFeedbacks([feedbackObj, ...feedbacks]);
    reset();
  };
  return (
    <div className=" w-1/2 bg-zinc-200  rounded-md shadow-md  p-5  max-md:w-full">
      <div className=" flex flex-col justify-center">
        <button
          onClick={() => {
            setFeedbackFlag(!feedbackFlag);
          }}
          className=" text-white bg-cyan-500 h-12 rounded-gl shadow-lg"
        >
          Feedback
        </button>
        {/* ------- */}
        <div className={`${!feedbackFlag ? "hidden" : "block"} mt-5`}>
          <form onSubmit={handleSubmit((data) => onFeedback(data))}>
            <textarea
              name="feedback"
              placeholder="feedback"
              {...register("feedback", { required: "Need to fill it." })}
              className=" outline-none w-full h-20 p-2"
            ></textarea>
            {errors.feedback && (
              <h1 className=" text-sm text-red-600 pl-2">
                {errors.feedback.message}
              </h1>
            )}
            <button type="submit" className=" mt-2 text-blue-300">
              <IoMdSend size={30} />
            </button>
          </form>

          <div className="divider"></div>
          <div className="h-60 overflow-y-scroll overflowHideScroll ">
            <ul>
              {feedbacks.length == 0 ? (
                <h1>No feed backs</h1>
              ) : (
                feedbacks.map((item, index) => (
                  <li
                    key={index}
                    className=" flex justify-between gap-3 border-b border-slate-400 py-4"
                  >
                    <div className=" flex gap-4">
                      <img
                        src={item.userImg}
                        alt={loggedUser?.displayName}
                        className=" w-10 h-10 rounded-full"
                      />
                      <p className=" text-sm ">{item.feedback}</p>
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

export default Feedback;
