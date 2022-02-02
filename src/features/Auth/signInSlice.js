import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    id: null,
    name: null,
    email: null,
  },

  auth: {
    token: null,
    expirationTime: null,
  },
};

const reducers = {
  setAuthentication: (state, action) => {
    // const payload = action.payload;
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
