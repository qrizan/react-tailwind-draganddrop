import {createContext, useState} from "react";
import appReducer from "./reducers";

const initialState  = {
    boards: {},
    boardIds: []
}

export const DataContext = createContext()
export const DataProvider = (props) => {
    const [state, setState] = useState(initialState)

    const changeBoardTitle = (id, text) => {
        const payload = {
            type: "CHANGE_BOARD_TITLE",
            payload: { id, text },
        }

        setState(appReducer(state, payload))
    }

    const changeCardText = (boardId, cardId, index, text) => {
        const payload =  {
            type: "CHANGE_CARD_TEXT",
            payload: {boardId, cardId, index, text}
        }

        setState(appReducer(state, payload))
    }

    const deleteCard = (boardId, cardId) => {
        const payload =  {
            type: "DELETE_CARD",
            payload: {boardId, cardId}
        }

        setState(appReducer(state, payload))
    }

    const addCard = (boardId, text) => {
        const payload =  {
            type: "ADD_CARD",
            payload: {boardId, text}
        }

        setState(appReducer(state, payload))
    }    

    const addBoard = (text) => {
        const payload =  {
            type: "ADD_BOARD",
            payload: {text}
        }

        setState(appReducer(state, payload))
    }     

    const deleteBoard = (boardId) => {
        const payload =  {
            type: "DELETE_BOARD",
            payload: {boardId}
        }

        setState(appReducer(state, payload))
    }

    const updateDrag = (result) => {
        const { destination, source, draggableId, type } = result;

        if (!destination) return;

        // drag and drop board section
        if(type === "BOARD") {
            const payload =  {
                type: "DRAG_AND_DROP_BOARD",
                payload: {destination, source, draggableId}
            }
            setState(appReducer(state, payload)) 
        }else{
            // drag and drop card section

            const payload =  {
                type: "DRAG_AND_DROP_CARD",
                payload: {destination, source, draggableId}
            }
    

            setState(appReducer(state, payload)) 
        }
    }

    return(
        <DataContext.Provider value={{ 
                state, 
                changeBoardTitle, 
                changeCardText, 
                deleteCard, 
                addCard, 
                addBoard, 
                deleteBoard,
                updateDrag
            }}>
            {props.children}
        </DataContext.Provider>
    )
}    