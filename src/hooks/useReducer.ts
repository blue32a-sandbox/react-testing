import { Reducer, useReducer } from 'react'

type FormValues = {
  name: string;
  age: number;
}
type ValuesReducerAction =
  { type: 'changed_name', newName: string }
  | { type: 'changed_age', newAge: number };
type FormValuesReducer = Reducer<FormValues, ValuesReducerAction>;
const reducer: FormValuesReducer = (state, action) => {
  const actionType = action.type;
  switch (actionType) {
    case 'changed_name': {
      return {...state, name: action.newName };
    }
    case 'changed_age': {
      return {...state, age: action.newAge };
    }
    default: {
      throw new Error();
    }
  }
}
export const useForm = (initValues: FormValues) => {
  const [values, dispatch] = useReducer<FormValuesReducer>(reducer, initValues);
  return { values, dispatch };
}
