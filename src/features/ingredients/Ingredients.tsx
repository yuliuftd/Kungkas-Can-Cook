import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addIngredients, removeIngredients } from "./ingredientsSlice"
import { Button } from "@radix-ui/themes"

const Ingredients = () => {
  const ingredients = useAppSelector(state => state.ingredients)
  const [currenIngredients, setCurrentIngredients] = useState()
  const [currentQuantity, setCurrentQuantity] = useState(0)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Current Ingredienst in Pantry:</h1>
      <ul>
        {ingredients.map(x => (
          <li key={x.name}>
            {x.name} -- {x.quantity}
          </li>
        ))}
      </ul>
      <div>
        <Button
          onClick={() =>
            dispatch(addIngredients({ name: "salt", quantity: 3 }))
          }
        >
          Add
        </Button>
        &nbsp;
        <Button
          onClick={() =>
            dispatch(removeIngredients({ name: "salt", quantity: 3 }))
          }
        >
          Remove
        </Button>
      </div>
    </div>
  )
}

export default Ingredients
