import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

const BoardCard = ({ data }) => {
    return (
        <Droppable droppableId={data.id}>
        {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
            {data.cards.map((card, index) => {
                return (
                <Card key={card.id} boardId={data.id} item={card} index={index} />
                );
            })}
            {provided.placeholder}
            </div>
        )}
        </Droppable>
    );
};

export default BoardCard;
