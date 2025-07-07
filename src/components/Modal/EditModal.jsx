import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Form from "../Form/Form";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../RTK/Features/users/userSlice";
import { useNavigate } from "react-router-dom";

export default function EditModal({ id, setId }) {
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { reset } = useForm();
  const users = useSelector((state) => state.userSlice.users);
  const user = users.find((usr) => usr.id === id);
  const dispatch = useDispatch();

  // console.log(user);

  function open() {
    setId(id);
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSubmit = (data) => {
    const combinedData = {
      id: id,
      ...data,
    };
    console.log(combinedData);
    // setUpdatedData(data);
    // console.log(updatedData);
    dispatch(updateUser(combinedData));
    reset();
    setIsOpen(false);
    toast.success("User info updated!");
    navigate("/posts");
  };

  return (
    <>
      <Button
        onClick={open}
        // className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"data-ripple-light="true"
        type="button"
        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
      >
        Edit
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <Form title={"Update"} onSubmit={onSubmit} user={user} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Toaster />
    </>
  );
}
