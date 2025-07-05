import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
          <Link to="/posts">All Post</Link>
        </li>
      </ul>
    </div>
  );
}
