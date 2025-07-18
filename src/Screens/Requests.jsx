import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../redux/slice/request";
import { getRequestsRecieved } from "../api/user";
import { useState } from "react";
import { REVIEW_STATUS } from "../utils/constants";
import { reviewRequest } from "../api/request";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);
  console.log({ requests });

  const handleReviewRequest = async (status, _id) => {
    try {
      await reviewRequest(status, _id);
      dispatch(removeRequest(_id));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRequests = async () => {
    try {
      const requests = await getRequestsRecieved();

      dispatch(addRequests(requests.data));
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests.length == 0)
    return (
      <>
        <h1 className="flex justify-center text-2xl my-10 text-green-300">
          No Requests found
        </h1>
      </>
    );

  return (
    <div className=" text-center my-10">
      <h1 className="font-bold text-3xl text-pink-400 p-4">
        Requests ({requests.length})
      </h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoURL, age, gender, about } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className="flex justify-between items-center m-2 p-2  rounded-lg bg-base-300 w-2/3 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-14 h-14 rounded-full object-contain"
                src={photoURL}
              />
            </div>
            <div className="text-left m-4 p-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="">
              <button
                className="btn btn-secondary mx-2"
                onClick={() =>
                  handleReviewRequest(REVIEW_STATUS.ACCEPTED, request._id)
                }
              >
                Accept
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() =>
                  handleReviewRequest(REVIEW_STATUS.REJECTED, request._id)
                }
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
