const ButtonAddCard = (props) => {
    const { setNewCard } = props
    
    return (
        <button
            onClick={() => setNewCard(true)}
            className="
                text-gray-400
                text-sm 
                font-semibold                 
                px-3 py-2 pb-3
                hover:text-gray-50"
            >
            + Add card
        </button>    
    )
}

export default ButtonAddCard