import { useContext, useState } from "react"
import { DataContext } from "../context"

const BoardTitle = (props) => {
    const { boardId, title} = props
    const { deleteBoard } = useContext(DataContext);
    const { changeBoardTitle } = useContext(DataContext)
    const [ text, setText ] = useState(title)
    const [ editText, setEditText ] = useState(false)

    const handleClickTitle = () => {
        setEditText(true)
    }

    const handleCloseInput = () => {
        setEditText(false)
        changeBoardTitle(boardId, text)
    }

    const handleChangeText = (event) => {
        setText(event.target.value)
    }

    const handleBoardDelete = () => {
        deleteBoard(boardId);
    };

    return (
        <div className="text-xl font-semibold leading-7 text-slate-50 m-2 p-2">
            {editText ? (
                <form onSubmit={handleCloseInput}>
                    <input 
                        autoFocus={true}
                        type="text" 
                        value={text}
                        onBlur={handleCloseInput}
                        onChange={handleChangeText}
                        className="
                            w-full 
                            bg-gray-700 
                            text-md 
                            text-slate-50 
                            focus:border-none
                            appearance-none 
                            border-none 
                            rounded"
                    />
                </form>
            ) : (
                <div className="flex justify-between items-start">
                    <h2 className="text-lg" onClick={handleClickTitle}>{text}</h2>
                    
                    <button
                        onClick={handleBoardDelete}
                        type="button"
                        className="text-slate-50 hover:text-gray-500"
                        >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    </button>                  
                </div>
            )}
        </div>
    )
}

export default BoardTitle

