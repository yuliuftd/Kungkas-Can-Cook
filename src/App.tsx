import "./App.css"
import { Theme } from "@radix-ui/themes"
import { Counter } from "./features/counter/Counter"
import Ingredients from "./features/ingredients/Ingredients"
import { Quotes } from "./features/quotes/Quotes"

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Quotes />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </span>
      </header> */}
      <h1 className="text-3xl font-bold py-4">Kungkas Can Cook</h1>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 p-4 bg-blue-200">
            <Ingredients />
          </div>
          <div className="w-full lg:w-1/2 p-4 bg-blue-200">Receipts:</div>
        </div>
      </div>
    </div>
  )
}

export default App
