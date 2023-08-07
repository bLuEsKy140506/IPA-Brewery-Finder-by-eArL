import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BreweryAPI } from "../../api";

// the outside "thunk creator" function
export const fetchBrewery = createAsyncThunk("Brewery/fetchAll", () =>
  BreweryAPI.fetchAll()
);
export const deleteBrewery = createAsyncThunk("Brewery/delete", (id) => {
  // Brewery: return a call  to corresponding API method i.e. BreweryAPI.fetchAll()
  BreweryAPI.deleteOne(id);
});
// export const updateBrewery = createAsyncThunk("Brewery/update", (id) => {
//   // console.log(id);
//   BreweryAPI.updateOne(id);
//   // Brewery: return a call  to corresponding API method i.e. BreweryAPI.fetchAll()
// });
export const addBrewery = createAsyncThunk("Brewery/add", (Brewery) => {
  BreweryAPI.createOne(Brewery);
});

const initialState = [];

const BrewerysSlice = createSlice({
  name: "brewery",
  initialState,
  reducers: {
    add(state, action) {
      state = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrewery.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });

    builder.addCase(deleteBrewery.fulfilled, (state, action) => {
      const index = state.findIndex(
        (Brewery) => Brewery.id === action.meta.arg
      );
      if (index !== -1) state.splice(index, 1);
    });

    builder.addCase(addBrewery.fulfilled, (state, action) => {
      state.push(action.meta.arg);
    });

    // builder.addCase(updateBrewery.fulfilled, (state, action) => {
    //   // console.log(state, action.meta.arg);
    //   return state.map((data) => {
    //     if (data.id === action.meta.arg.id) {
    //       //if match then change the variables based on the user inputs
    //       return action.meta.arg;
    //     } else {
    //       //no change of the object
    //       return data;
    //     }
    //   });
    // });
  },
});

export const { add } = BrewerysSlice.actions;
export default BrewerysSlice.reducer;
