import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  userId: null,
  email: null,
  token: null,
};

const reducers = {
  setAuthentication: (state, action) => {
    // const data = action.payload;
  },
};

const signInSlice = createSlice({
  name: 'login',
  initialState,
  reducers,
});

const { actions, reducer } = signInSlice;

export const { setAuthentication } = actions;

// HERE all useSelector
/*
- EXAMPLE: 
export const selectEmail((state) => state.login.email)
- USE IT LIKE THIS:
const email = useSelector(selectEmail);
*/

export default reducer;
