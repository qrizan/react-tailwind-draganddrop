import { useContext, useState } from "react";
import { DataContext } from "../context";
import { Draggable } from "react-beautiful-dnd";
import TextareaAutosize from 'react-textarea-autosize';

const Card = (props) => {
    const { boardId, item, index } = props;
    const { changeCardText, deleteCard } = useContext(DataContext);
    const [ text, setText ] = useState(item.text);
    const [ editText, setEditText ] = useState(false);

    const handleClickText = () => {
        setEditText(true);
    };

    const handleCloseInput = () => {
        setEditText(false);
        changeCardText(boardId, item.id, index, text);
    };

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    const handleCardDelete = () => {
        deleteCard(boardId, item.id);
    };

    return (
        <Draggable draggableId={item.id} index={index}>
        {(provided) => (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="
                m-2 bg-gray-800 
                border border-solid 
                rounded border-gray-700 
                shadow-sm shadow-gray-850">
            <div className="p-4 text-sm text-slate-50">
                {editText ? (
                    <TextareaAutosize
                    className="
                            w-full bg-gray-800 
                            text-sm text-slate-50"
                        autoFocus={true}
                        type="text"
                        value={text}
                        onBlur={handleCloseInput}
                        onChange={handleChangeText}
                        ref={(input) => input && input.focus()}
                        onFocus={(e) =>
                            e.currentTarget.setSelectionRange(
                            e.currentTarget.value.length,
                            e.currentTarget.value.length
                        )}
                    />
                ) : (
                    <div className="flex justify-between">
                        <div onClick={handleClickText} className="break-anywhere text-sm">{text}</div>
                        <div onClick={handleCardDelete} className="cursor-pointer ml-2">
                            <svg
                                className="h-4 w-4 text-slate-50"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                <line x1="4" y1="7" x2="20" y2="7" />{" "}
                                <line x1="10" y1="11" x2="10" y2="17" />{" "}
                                <line x1="14" y1="11" x2="14" y2="17" />{" "}
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />{" "}
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
         )}
        </Draggable>

    );
};

export default Card;
