
//Reducer in TypeScript

import { useReducer } from "react"

type StateType = {
  count: number
}

type ActionType =
  | { type: "Increment", payload: number }
  | { type: "Deccrement", payload: number }


const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload }
    case "Deccrement":
      return { count: state.count - action.payload }
    default:
      return state;
  }
}

const initialState: StateType = {
  count: 0
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = (): void => {
    dispatch({
      type: "Increment",
      payload: 1,
    })
  }
  const decrement = (): void => {
    dispatch({
      type: "Deccrement",
      payload: 1,
    })
  }

  return (
    <>
      <div>
        <h1>check</h1>
        <p>Count: {state.count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App



//explored context by using theme
// import { ReactNode, createContext, useState } from "react";
// import Box2 from "./components/Box2";


// type ThemeType = "light" | "dark";

// interface ThemeContextType {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }
// export const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   toggleTheme: () => { }
// })
// //need to make a component or else the context will not re render
// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<ThemeType>("light")

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"))
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// function App() {
//   return (
//     <>
//       <div>
//         <ThemeProvider>
//           <div>Test</div>
//           <Box2/>
//         </ThemeProvider>
//       </div>
//     </>
//   )
// }

// export default App




//usage of hooks
// import { FormEvent, useState } from "react"
// // import Box from "./components/Box"

// function App() {
//   interface Person {
//     name: string,
//     age: number
//   }

//   // const [user, setUser] = useState<Person>({
//   //   name: "",
//   //   age: 0
//   // })
//   //cleaner way
//   const [user, setUser] = useState<Person>()

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     console.log(user);
//   }

//   return (
//     <>
//       <div>
//         {/* <Box
//           heading="haha"
//         >
//           {"This is a children"}
//           <button>This button is also passed as children</button>
//         </Box> */}
//         {/* <Box label="Search" value={val} setter={setVal} /> */}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="number"
//             placeholder="Age"
//             value={user?.age || ""} //fix uncontrolled behavior error
//             onChange={(e) => setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))}
//           // onChange={(e) => setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))} | use this const [user, setUser] = useState<Person>()
//           />
//           <input
//             placeholder="Name"
//             type="text"
//             value={user?.name || ""}
//             onChange={(e) => setUser((previous) => ({ ...previous!, name: e.target.value }))}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//     </>
//   )
// }

// export default App
