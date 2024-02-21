import { useState, useContext } from "react";
import { DataContext } from "../context";

const FormAddBoard = (props) => {
  const { setFormBoard } = props;
  const { addBoard } = useContext(DataContext);
  const [text, setText] = useState("");

  const handleClose = () => setFormBoard(false);

  const handleInputText = (event) => {
    setText(event.target.value);
  };

  const handleAddBoard = () => {
    if (text) {
      addBoard(text);
      setText("");
    }
  };

  return (
        <div className="
            m-2 bg-gray-700 
            xl:w-80 lg:w-80 md:w-80 
            sm:w-full xs:w-full
            h-full 
            border border-solid 
            rounded-md border-gray-900 
            shadow-md shadow-gray-850">
            <div className="text-lg font-semibold leading-7 text-slate-50 m-4">
                <input
                    className="
                        w-full 
                        bg-gray-700 
                        text-md 
                        text-slate-50 
                        focus:border-none
                        appearance-none 
                        border-none 
                        rounded"
                    autoFocus={true}
                    type="text"
                    value={text}
                    placeholder="Enter board title"
                    onBlur={handleClose}
                    onChange={handleInputText}
                    maxLength={32}
                    />
                </div>
            <div className="flex justify-between p-1">
                <button className="
                    text-gray-400
                    text-sm                 
                    font-semibold                 
                    px-3 pb-2
                    hover:text-gray-50" 
                onClick={handleClose}>Cancel</button>
                <button className="
                    text-gray-400
                    text-sm                 
                    font-semibold                 
                    px-3 pb-3
                    hover:text-gray-50" 
                onMouseDown={handleAddBoard}>Save board</button>
            </div>
        </div>
  );
};

export default FormAddBoard;
