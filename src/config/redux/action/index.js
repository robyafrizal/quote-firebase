export const actionUserName = () => dispatch => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Roby Afrizal Palmendha" });
  }, 2000);
};

//Sama saja dengan :
// const actionUserName = () => {
//   return dispatch => {
//     setTimeout(() => {
//       return dispatch({ type: "CHANGE_USER", value: "Roby Afrizal Palmendha" });
//     }, 2000);
//   };
// };
