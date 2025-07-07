import { useForm } from "react-hook-form";
import InputText from "./FormComponents/InputText";
import SubmitButton from "./FormComponents/SubmitButton";
import { Toaster } from "react-hot-toast";

export default function Form({ title, onSubmit, user }) {
  const { register, handleSubmit } = useForm();
  console.log(user);
  // const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   if (data) {
  //     console.log(data);
  //     dispatch(createUser(data));
  //     toast("user added!");
  //   }
  //   reset();
  // };

  return (
    <div className="mx-auto p-5 bg-slate-100 rounded-lg">
      <h2 className="font-bold mb-5 text-2xl">{title}:</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <InputText
          register={register}
          type={"text"}
          placeholder={"Enter you name"}
          label={"Name"}
          name={"name"}
          user={user}
        />
        <InputText
          register={register}
          type={"email"}
          placeholder={"Enter you name"}
          label={"Email"}
          name={"email"}
          user={user}
        />
        <InputText
          register={register}
          type={"text"}
          placeholder={"Enter you name"}
          label={"Age"}
          name={"age"}
          user={user}
        />
        <div className="relative w-full group">
          <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100" />
          <select
            defaultValue={user && user.gender}
            {...register("gender")}
            className="peer w-full pl-6 pr-4 py-4 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent"
          >
            <option disabled value="Gender" className="text-gray-500">
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <SubmitButton />
      </form>
      <Toaster />
    </div>
  );
}
