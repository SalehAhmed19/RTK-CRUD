import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../../RTK/Features/users/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, []);

  const users = useSelector((state) => state.userSlice.users);
  return <div>{users.length}</div>;
}
