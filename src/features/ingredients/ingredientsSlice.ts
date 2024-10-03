import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface Ingredient {
  name: string
  quantity: number
}
export type IngredientsSliceState = Ingredient[]

const initialState: IngredientsSliceState = []

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    addIngredients: (state, action: PayloadAction<Ingredient>) => {
      let comingIngredient = action.payload
      let existingIngredient = state.find(x => x.name === comingIngredient.name)
      // if ingredient exists, change the quantity
      if (existingIngredient) {
        existingIngredient.quantity += comingIngredient.quantity
      } else {
        state.push(comingIngredient)
      }
      //if not exists, add it to ingredients array
    },
    removeIngredients: (state, action: PayloadAction<Ingredient>) => {
      let removingIngredient = action.payload
      let existingIngredient = state.find(
        x => x.name === removingIngredient.name,
      )
      //   if ingredient exists and stock not less that needed
      if (
        existingIngredient &&
        existingIngredient.quantity >= removingIngredient.quantity
      ) {
        existingIngredient.quantity -= removingIngredient.quantity
        if (existingIngredient.quantity === 0) {
          const index = state.findIndex(x => x.name === removingIngredient.name)
          if (index !== -1) state.splice(index, 1)
        }
      }
    },
  },
})

export const { addIngredients, removeIngredients } = ingredientsSlice.actions
