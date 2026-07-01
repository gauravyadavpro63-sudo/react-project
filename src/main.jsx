import React,{useState} from "react"
import ReactDOM from "react-dom/client"
import Card from "./component/card"
import Footer from "./component/footer"
import Header from "./component/header"
import arr from "./assets/data"

function App(){
let [filter,setfilter]=useState(arr);
function Sortarray(){
  let clone=[...filter];
  clone.sort((a,b)=>{
  return a.price-b.price;
  })
  setfilter(clone);
}

return (
    <>
   <Header/>
  
 <button onClick={Sortarray}>sort by price</button>
 <div className="middle" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
  {
    filter.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
  }
  </div>


  <Footer/>
    </>
)
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)