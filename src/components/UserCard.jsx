import { sendRequest } from "../api/request";
import { REQUEST_STATUS } from "../utils/constants";

const UserCard = ({ user, getFeed }) => {
  const { photoUrl, firstName, about, age = 0, gender = "", _id } = user;

  const handleRequest = async (status) => {
    await sendRequest(status, _id);
    getFeed();
  };

  const defaultPhotoUrl = {
    male: "https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg",
    female:
      "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={photoUrl || defaultPhotoUrl[gender]} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName}</h2>
        <p>{`${age ? age : ""} ${gender}`}</p>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary"
            onClick={() => handleRequest(REQUEST_STATUS.IGNORED)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleRequest(REQUEST_STATUS.INTERESTED)}
          >
            Intersted
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
