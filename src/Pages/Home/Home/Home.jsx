import { useSelector } from "react-redux";

export default function Home() {
  const users = useSelector((state) => state.userSlice.users);
  return <div>{users.length}</div>;
}
