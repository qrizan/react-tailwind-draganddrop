import { useContext, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DataContext } from "./context";
import Header from "./components/Header";
import Board from "./components/Board";
import FormAddBoard from "./components/FormAddBoard";
import "./App.css";

const App = () => {
    const { state, updateDrag } = useContext(DataContext);
    const [formBoard, setFormBoard] = useState(false);
    const handleDragEnd = (result) => {
        updateDrag(result);
    };

    return (
        <>
            <Header setFormBoard={setFormBoard} />
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="app" type="BOARD" direction="horizontal">
                {(provided) => (
                    <div 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                        className="xl:flex lg:flex md:flex sm:flex-none xl:p-4 lg:p-4 md:p-4 sm:p-1 xs:p-1">
                        {state.boardIds.map((id, index) => {
                            const data = state.boards[id];
                            return <Board key={id} data={data} index={index}/>;
                        })}
                        {provided.placeholder}
                        {formBoard ? <FormAddBoard setFormBoard={setFormBoard} /> : null}
                    </div>
                )}
                </Droppable>
            </DragDropContext>
        </>
    );
};

export default App;
