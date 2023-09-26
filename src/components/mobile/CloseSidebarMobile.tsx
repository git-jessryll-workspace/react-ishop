import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { AppContextType } from "../../types/app";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CloseSidebarMobile() {
    const {toggleOpenMenu: setOpen} = useContext(AppContext) as AppContextType
  return (
    <div className="flex px-4 pb-2 pt-5 justify-end">
      <button
        type="button"
        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
        onClick={() => setOpen(false)}
      >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Close menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
