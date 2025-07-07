import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import { showUser } from "../../RTK/Features/users/userSlice";
import Loader from "../../components/Loading/Loading";

export default function AllPost() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  const { users, isLoading, searchData } = useSelector(
    (state) => state.userSlice
  );
  console.log(searchData);
  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-4 gap-10 my-10 p-5">
        {users &&
          users
            .filter((user) => {
              if (searchData.length === 0) {
                return user;
              } else {
                return user.name
                  .toLowerCase()
                  .includes(searchData.search.toLowerCase());
              }
            })
            .map((user) => (
              <Card
                key={user.id}
                name={user.name}
                email={user.email}
                id={user.id}
              />
            ))}
      </div>
    </>
  );
}
