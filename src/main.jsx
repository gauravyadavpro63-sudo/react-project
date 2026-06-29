import React from "react"
import ReactDOM from "react-dom/client"

//header
// body
// footer


function Card(){
    return(
<div style={{border:"2px solid black",padding:"2px"}}>
    <img src="https://imgs.search.brave.com/AfSuwap_n2n0j9W5uxav7y-w3phFX2NnZKaC9EuUZOc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFNaFJSeDJYSUwu/X0FDLl9TUjE4MCwy/MzAuanBn" alt="" height="200px" width="200px" />
    <div style={{textAlign:"center"}}>
        <h2>T-Shirts</h2>
        <h2>40-80%off</h2>
        <h2>Shop Now</h2>
    </div>
</div>
    )
}



function App(){
return (
    // header

 <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   
    </div>
    // footer
)
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)