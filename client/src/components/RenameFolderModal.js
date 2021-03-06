import Modal from "./Modal";
import { updateFolderNameDispatch } from "../redux/actions/projectActions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "preact/hooks";

const RenameFolderModal = ({ showModal, setShowModal, folder }) => {
    const dispatch = useDispatch();
    const [folderName, setFolderName] = useState("");

    const closeModal = () => {
        setFolderName("");
        setShowModal(false);
    };

    useEffect(() => {
        setFolderName(folder.name);
    }, [folder.name]);

    const onChange = ({ target }) => {
        setFolderName(target.value);
    };

    const onClick = () => {
        dispatch(updateFolderNameDispatch(folder, folderName));
        setFolderName("");
        setShowModal(false);
    };

    return (
        <Modal show={showModal}>
            <div className="p-5">
                <div
                    onClick={closeModal}
                    className="absolute top-0 right-0 p-2 m-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div class="font-bold text-3xl py-3">Rename Folder</div>
                <div class="flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div class="relative flex-grow w-full">
                        <label
                            for="full-name"
                            class="leading-7 text-sm text-gray-600"
                        >
                            Folder Name
                        </label>
                        <input
                            type="text"
                            name="full-name"
                            value={folderName}
                            onInput={onChange}
                            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <button
                        onClick={onClick}
                        class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 transition-colors rounded text-lg"
                    >
                        Rename
                    </button>
                </div>
            </div>
        </Modal>
    );
};
export default RenameFolderModal;
