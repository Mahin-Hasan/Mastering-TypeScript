import Box from "./components/Box"

function App() {

  return (
    <>
      <div>
          <Box 
          heading="haha" 
          count={21} 
          >
           {"This is a children"} 
           <button>This button is also passed as children</button>
            </Box>
           
      </div>
     
    </>
  )
}

export default App
