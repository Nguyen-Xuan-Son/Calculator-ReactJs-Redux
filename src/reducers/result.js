import * as actionsType from './../constants/index';

const initialResult = 0;

let calculation = '';
let value_1 = 0;
let value_2 = 0;

const myReducer = (state = initialResult, action) => {

    if (typeof action.value === 'number') {
        const convertNumberToString = action.value.toString();
        state += convertNumberToString;
        if (calculation) {
            state = 0;
            const convertNumberToString = action.value.toString();
            state += convertNumberToString;
        }
        if (calculation && value_1) {
            value_2 = Number(state);
        } else {
            value_1 = Number(state);
        }
        return Number(state);
    } else if (action.value === actionsType.AC) {
        return 0;
    } else if (action.value === actionsType.INPUT_SUBTRACTION_SYMBOL) {
        return -state;
    } else if (action.value === actionsType.INPUT_PERCENT) {
        return state/100;
    } else if (action.value === actionsType.INPUT_DIVISION && state) {
        calculation = actionsType.INPUT_DIVISION;
    } else if (action.value === actionsType.INPUT_MULTIPLICATION && state) {
        calculation = actionsType.INPUT_MULTIPLICATION;
    } else if (action.value === actionsType.INPUT_SUBTRACTION && state) {
        calculation = actionsType.INPUT_SUBTRACTION;
    } else if (action.value === actionsType.INPUT_SUMMATION && state) {
        calculation = actionsType.INPUT_SUMMATION;
    } else if (action.value === actionsType.CALCULATOR) {
        if (calculation === actionsType.INPUT_DIVISION) {
            return value_1/value_2;
        }
        if (calculation === actionsType.INPUT_MULTIPLICATION) {
            return value_1*value_2;
        }
        if (calculation === actionsType.INPUT_SUMMATION) {
            return value_1+value_2;
        }
        if (calculation === actionsType.INPUT_SUBTRACTION) {
            return value_1-value_2;
        }
    }

    return state;

}

export default myReducer;
