import { createContext, useReducer } from "react";

export const FormContext = createContext();

const initialState = {

}

const reducer = (state, action) => {
    switch (action.type) {
        case "set-data": {
            console.log(action)
            return {
                ...action.formData,
            }
        }
        case "clear-data": {
            return {

            }
        }
        default:
            throw new Error(`unrecognized action ${action.type}`);
    }
};

export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const receiveNewFormData = (data) => {
        dispatch({
            type: "set-data",
            formData: data
        })
    }

    const clearFormData = (data) => {
        dispatch({
            type: "clear-data",
            formData: data
        })
    }

    return (
        <FormContext.Provider value={{ state, action: { receiveNewFormData, clearFormData } }}>
            {children}
        </FormContext.Provider>
    )
}