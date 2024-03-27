
const initialState = {
    count: 0
};
const deleteRecord = (state, action) => {

    console.log(action);
    const newState = (state.data).filter((item) => { return item.id !== action.id })
    console.log(newState)

    return (
        {
            ...state,
        }
    )
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case "UPDATEDATA":
            return {
                ...state,
                data: action.data
            }
        case "DELETERECORDBYID":
            return deleteRecord(state, action);
        default:
            return state;
    }
};

export default counterReducer;