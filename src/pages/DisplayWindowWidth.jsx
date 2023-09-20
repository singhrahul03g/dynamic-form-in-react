import useWindowWidth from "../customHooks/useWindowWidth"


function DisplayWindowWidth() {

    const windowWidth = useWindowWidth();

    return (
      <>
    
    <div>
      <h4>Window Width Detection with React Custom Hook</h4>
      <p>Width: {windowWidth}</p>
    </div>
         
      </>
    )
  }
  
  export default DisplayWindowWidth
  