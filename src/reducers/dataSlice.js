import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
	name: 'data',
	initialState: {
		list: [],
		details : {}
	},
	reducers: {
		setData: (state,action) => {
			state.list = action.payload
		},
		setDetails: (state,action) => {
			state.details = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setData, setDetails } = dataSlice.actions

export default dataSlice.reducer