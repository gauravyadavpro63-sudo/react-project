import React from "react"
import ReactDOM from "react-dom/client"
import Card from "./component/card"
import Footer from "./component/footer"
import Header from "./component/header"
import arr from "./assets/data"

function App(){
return (
    <>
   <Header/>
  

 <div className="middle" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
  {
    arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
  }
  </div>


  <Footer/>
    </>
)
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)