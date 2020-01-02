//state global
const initialState = {
  popup: false,
  isLogin: false,
  isLoading: false,
  user: "Roby"
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_POPUP") {
    return {
      ...state,
      popup: action.value
    };
  }
  if (action.type === "CHANGE_ISLOGIN") {
    return {
      ...state,
      isLogin: action.value
    };
  }
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value
    };
  }
  if (action.type === "CHANGE_LOADING") {
    return {
      ...state,
      isLoading: action.value
    };
  }
  return state;
};
//reducer adalah kumpulan instruksi untuk merubah store
//state adalah state yang akan menjadi value kita ketika kita membuat state global

export default reducer;
