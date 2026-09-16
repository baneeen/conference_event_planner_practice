// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'Breakfast', cost: 50, selected: false },
    { name: 'High Tea', cost: 25, selected: false },
    { name: 'Lunch', cost: 65, selected: false },
    { name: 'Dinner', cost: 70, selected: false },
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        // Destructure both properties out of action.payload
        const { index, numberOfPeople } = action.payload; 
        
        if (state[index]) {
            state[index].selected = !state[index].selected;
            
            // If numberOfPeople was passed, save it directly onto the item object
            if (numberOfPeople !== undefined) {
                state[index].quantity = numberOfPeople; 
            }
        }
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
