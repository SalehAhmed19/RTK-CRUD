import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ViewModal({ id, setId }) {
  const users = useSelector((state) => state.userSlice.users);
  const user = users.filter((user) => user.id === id);
  // console.log(user);

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setId(id);
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        // className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"data-ripple-light="true"
        type="button"
        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
      >
        View
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
              {/* <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black"
              >
                Payment successful
              </DialogTitle> */}
              <div>
                <div className="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md" />
                  <div className="p-6 relative z-10">
                    <p className="text-xl font-semibold text-gray-800">
                      {user[0].name}
                    </p>
                    <p className="mt-2 text-gray-600">{user[0].email}</p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
