import React from "react"
import ReactDOM from "react-dom/client"

//header
// body
// footer


function Card(props){
    return(
<div style={{border:"2px solid black",padding:"2px"}}>
    <img src="https://imgs.search.brave.com/AfSuwap_n2n0j9W5uxav7y-w3phFX2NnZKaC9EuUZOc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFNaFJSeDJYSUwu/X0FDLl9TUjE4MCwy/MzAuanBn" alt="" height="200px" width="200px" />
    <div style={{textAlign:"center"}}>
        <h2>{props.cloth}</h2>
        <h2>{props.offer}</h2>
        <h2>Shop Now</h2>
    </div>
</div>
    )
}

const arr=[{cloth:"tshirt",offer:"20-30%off"},{cloth:"shirt",offer:"20-40%off"},{cloth:"kurta",offer:"20-90%off"},{cloth:"jeans",offer:"4-6%off"},{cloth:"T-Shirt",offer:"20% OFF"},{cloth:"Shirt",offer:"35% OFF"},{cloth:"Jeans",offer:"50% OFF"},{cloth:"Hoodie",offer:"15% OFF"},{cloth:"Kurta",offer:"40% OFF"},{cloth:"Jacket",offer:"60% OFF"}];

function App(){
return (
    // header

 <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
  {
    arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
  
  }
    </div>
    // footer
)
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)