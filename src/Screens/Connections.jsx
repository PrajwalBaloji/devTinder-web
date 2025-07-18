import { useDispatch, useSelector } from "react-redux";
import { addConnection, removeConnection } from "../redux/slice/connection";
import { getConnections } from "../api/user";
import { useEffect } from "react";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      dispatch(removeConnection());
      const connections = await getConnections();
      dispatch(addConnection(connections.data));
      //   console.log(connections.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length == 0)
    return (
      <>
        <h1 className="flex justify-center text-2xl my-10 text-green-300">
          No conections found
        </h1>
      </>
    );

  return (
    <div className=" text-center my-10">
      <h1 className="font-bold text-3xl text-pink-400">
        Connections ({connections.length})
      </h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoURL, age, gender, about } =
          connection;

        return (
          <div
            key={_id}
            className="flex items-center m-2 p-2  rounded-lg bg-base-300 w-1/2 mx-auto"
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
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
