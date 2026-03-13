const initialState = {
  students: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((_, i) => i !== action.payload),
      };

    case "UPDATE_STUDENT":
      const updated = state.students.map((item, i) =>
        i === action.payload.index
          ? { subject: action.payload.subject, marks: action.payload.marks }
          : item
      );

      return {
        ...state,
        students: updated,
      };

    default:
      return state;
  }
};

export default reducer;