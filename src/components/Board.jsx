import { useState } from "react"
import { Draggable } from "react-beautiful-dnd";
import BoardTitle from "./BoardTitle";
import ButtonAddCard from "./ButtonAddCard";
import BoardCard from "./BoardCard";
import FormAddCard from "./FormAddCard";

const Board = ({ data, index }) => {
  const [ newCard, setNewCard ] = useState(false)

  return (
    <Draggable draggableId={data.id} index={index}>
        {(provided) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}

            className="
                m-2 bg-gray-700 
                xl:w-80 lg:w-80 md:w-80 
                sm:w-full xs:w-full
                h-full 
                border border-solid 
                rounded-md border-gray-800 shadow-md 
                shadow-gray-850"
            >
            <BoardTitle boardId={data.id} title={data.title} />
            <BoardCard data={data} />
            { newCard ? (
                <FormAddCard boardId={data.id} newCard={newCard} setNewCard={setNewCard}/>
            ) : (
                <ButtonAddCard setNewCard={setNewCard}/>
            )
            }

            </div>
        )}
    </Draggable>
  );
};

export default Board;
