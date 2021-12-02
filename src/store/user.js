import {createSlice} from '@reduxjs/toolkit'



// const [getDataLogin, {loading :loadDataUser, error:errDataUser, data: dataUser}]=useLazyQuery(LOGIN_DATA)

export const LoginUser = createSlice({
	name: "dataUserLogin",
	initialState: {
		userId: -1,
		lastName: "",
        firstName:""
	},
	reducers: {
		login: (state, action) => {
			state.userId = action.payload.userId;
			state.firstName = action.payload.username;
            state.lastName = action.payload.username;

		},
	},
});



export const {login}= LoginUser.actions;
export default LoginUser.reducer;