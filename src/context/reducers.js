import { v4 as uuidv4 } from "uuid";

const appReducer = (state, action) => {
    const { type, payload } = action;

  switch (type) {
    case "CHANGE_BOARD_TITLE": {
        const { id, text } = payload;

        const item = state.boards[id];
        item.title = text;

        const newstate = {
            ...state,
            boards: {
            ...state.boards,
            [id]: item,
            },
        };

        return newstate;
    }

    case "CHANGE_CARD_TEXT": {
        const { boardId, cardId, index, text } = payload;
        const item = state.boards[boardId];
        const card = item.cards.find((item) => item.id === cardId);
        card.text = text;
        item.cards.splice(index, 1, card);

        const newstate = {
            ...state,
            boards: {
            ...state.boards,
            [boardId]: item,
            },
        };

        return newstate;
    }

    case "DELETE_CARD": {
        const { boardId, cardId } = payload;

        const item = state.boards[boardId];
        const newCard = item.cards.filter((card) => card.id !== cardId);
        item.cards = newCard;
        const newstate = {
            ...state,
            boards: {
            ...state.boards,
            [boardId]: item,
            },
        };

        return newstate;
    }

    case "ADD_CARD": {
        const { boardId, text } = payload;

        const item = state.boards[boardId];

        const newCard = {
            id: `card-${uuidv4()}`,
            text: text,
        };
        item.cards = [...item.cards, newCard];

        const newstate = {
            ...state,
            boards: {
                ...state.boards,
                [boardId]: item,
            },
        };

        return newstate;
    }
    case "ADD_BOARD": {
        const { text } = payload;

        const id = `board-${uuidv4()}`;
        const newBoard = {
            id,
            title: text,
            cards: [],
        };

        const newstate = {
            boards: {
                ...state.boards,
                [id]: newBoard,
            },
            boardIds: [...state.boardIds, id],
        };

        return newstate;
    }

    case "DELETE_BOARD": {
        const { boardId } = payload;

        delete state.boards[boardId];
        const newBoard = state;
        const newBoardIds = state.boardIds.filter((item) => item !== boardId);

        const newstate = {
            ...state,
            newBoard,
            boardIds: newBoardIds,
        };

        return newstate;
    }

    case "DRAG_AND_DROP_BOARD": {
        const { destination, source, draggableId } = payload;

        const boards = state.boardIds;
        boards.splice(source.index, 1); // remove board from source
        boards.splice(destination.index, 0, draggableId); // add board to destination
        const newstate = {
            ...state,
            listIds: boards,
        };

        return newstate;
    }

    case "DRAG_AND_DROP_CARD": {
        const { destination, source, draggableId } = payload;

        const sourceBoard = state.boards[source.droppableId];
        const destinationBoard = state.boards[destination.droppableId];
        
        // update data card
        const draggingCard = sourceBoard.cards.find(
            (card) => card.id === draggableId
        ); 

        sourceBoard.cards.splice(source.index, 1); // remove index card from source board
        destinationBoard.cards.splice(destination.index, 0, draggingCard); // add new data card to destination board

        let newstate = {};

        if (sourceBoard === destinationBoard) {
            newstate = {
            ...state,
            lists: {
                ...state.lists,
                [sourceBoard.id]: destinationBoard,
            },
            };
        } else {
            newstate = {
            ...state,
            lists: {
                ...state.lists,
                [sourceBoard.id]: sourceBoard,
                [destinationBoard.id]: destinationBoard,
            },
            };
        }
        return newstate;
    }

    default:
      return state;
  }
};

export default appReducer;
