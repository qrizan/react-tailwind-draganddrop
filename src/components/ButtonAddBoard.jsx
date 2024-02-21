const ButtonAddBoard = (props) => {
    const { setFormBoard } = props

    return (
        <button
        onClick={() => setFormBoard(true)}
        className="
            text-sm 
            font-semibold                 
            px-3.5 py-2.5 
            bg-indigo-600 text-white 
            hover:bg-indigo-500 rounded-md 
            focus-visible:outline focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
        + Add new board
        </button>    
    )

}

export default ButtonAddBoard