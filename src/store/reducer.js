const initiaState = {
    age: 22
};

const reducer = (state = initiaState, action) => {
    const newState = {...state};

    if(action.type === 'AGE_UP') {
        newState.age++;
    }

    if(action.type === 'AGE_DOWN') {
        newState.age--;
    }

    return newState;
}

export default reducer; 