import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFeed } from "../api/user";
import { addFeed } from "../redux/slice/feed";
import UserCard from "../components/UserCard";

const Feed = () => {
  console.log("In feed screen");

  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    try {
      const feed = await getUserFeed();
      dispatch(addFeed(feed.data));
      // console.log(feed);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return (
      <h1 className=" flex justify-center m-52 text-3xl">No more users!!!!</h1>
    );
  return (
    feed && (
      <div className="flex flex-col items-center gap-4 my-5">
        feed
        {feed &&
          feed.map((user) => (
            <UserCard key={user._id} user={user} getFeed={getFeed} />
          ))}
        {/* <UserCard user={feed[0]} /> */}
      </div>
    )
  );
};

export default Feed;
