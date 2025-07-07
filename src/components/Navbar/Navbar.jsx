import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../RTK/Features/users/userSlice";

export default function Navbar() {
  const users = useSelector((state) => state.userSlice.users);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const onSubmit = (data) => {
    // console.log(data);
    setSearch(data);
    console.log(search);
    // dispatch()
  };

  useEffect(() => {
    dispatch(searchData(search));
  }, [search]);
  return (
    <div className="p-5 flex items-center gap-5">
      <Link to="/">
        <h3 className="font-bold text-2xl uppercase">RTK Crud</h3>
      </Link>
      <ul className="flex gap-5 text-[#787878]">
        <li className="cursor-pointer">
          <Link to="/create-post">Create Post</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/posts">
            All Users{" "}
            <span className="p-2 bg-blue-900 text-white rounded-lg font-bold">
              {users.length}
            </span>
          </Link>
        </li>
      </ul>
      <Search onSubmit={onSubmit} />
    </div>
  );
}
