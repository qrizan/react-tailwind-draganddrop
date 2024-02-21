import { useState, useContext } from "react"
import { DataContext } from "../context"
import TextareaAutosize from 'react-textarea-autosize';

const FormAddCard = (props) => {
    const { boardId, setNewCard } = props
    const { addCard } = useContext(DataContext)
    const [ text, setText ] = useState("")

    const handleInputText = (event) => {
        setText(event.target.value)
    }

    const handleAddCard = () => {
        if(text){
            addCard(boardId, text)
            setText("")    
        }
    }

    const handleClose = () => {
        setNewCard(false)
        setText("")   
    }

    return (
        <div className="px-2">
            <TextareaAutosize 
                className="
                    w-full bg-gray-800 
                    text-sm text-slate-50 
                    p-4"
                autoFocus={true} 
                type="text" 
                value={text}
                placeholder="Enter card text"
                onBlur={handleClose}
                onChange={handleInputText}
            />

            <div className="flex items-center justify-between pt-4 pb-2 pl-2 pr-2">        
                <button 
                    className="
                        text-gray-400 
                        text-sm font-semibold 
                        hover:text-gray-50" 
                    onMouseDown={handleClose}>
                    Cancel
                </button>                
                <button 
                    className="
                        text-gray-400 
                        text-sm 
                        font-semibold 
                        hover:text-gray-50 pb-1" 
                    onMouseDown={handleAddCard}>
                    Save card
                </button>
            </div>
        </div>
    )         

}

export default FormAddCard