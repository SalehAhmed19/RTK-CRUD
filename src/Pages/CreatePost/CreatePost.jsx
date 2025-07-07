import { useDispatch } from "react-redux";
import Form from "../../components/Form/Form";
import { createUser } from "../../RTK/Features/users/userSlice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { reset } = useForm();
  const onSubmit = (data) => {
    if (data) {
      // console.log(data);
      dispatch(createUser(data));
      toast.success("user added!");
      navigate("/posts");
    }
    reset();
  };
  return (
    <div className="w-1/2 mx-auto">
      <Form title={"Create Post"} onSubmit={onSubmit} />
    </div>
  );
}
