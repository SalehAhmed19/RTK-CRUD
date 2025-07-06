import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import { showUser } from "../../RTK/Features/users/userSlice";

export default function AllPost() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, []);

  const users = useSelector((state) => state.userSlice.users);
  console.log(users);
  return (
    <div className="grid grid-cols-4 gap-10 my-10 p-5">
      {users.map((user) => (
        <Card key={user} name={user.name} email={user.email} id={user.id} />
      ))}
    </div>
  );
}
