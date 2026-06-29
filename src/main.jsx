import React from "react"
import ReactDOM from "react-dom/client"

const arr=[{cloth:"tshirt",offer:"20-30%off"},{cloth:"shirt",offer:"20-40%off"},{cloth:"kurta",offer:"20-90%off"},{cloth:"jeans",offer:"4-6%off"},{cloth:"T-Shirt",offer:"20% OFF"},{cloth:"Shirt",offer:"35% OFF"},{cloth:"Jeans",offer:"50% OFF"},{cloth:"Hoodie",offer:"15% OFF"},{cloth:"Kurta",offer:"40% OFF"},{cloth:"Jacket",offer:"60% OFF"}];



function Card(props){
    return(
<div className="card" style={{border:"2px solid black",padding:"2px"}}>
    <img src="https://imgs.search.brave.com/AfSuwap_n2n0j9W5uxav7y-w3phFX2NnZKaC9EuUZOc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFNaFJSeDJYSUwu/X0FDLl9TUjE4MCwy/MzAuanBn" alt="" height="200px" width="200px" />
    <div style={{textAlign:"center"}}>
        <h2>{props.cloth}</h2>
        <h2>{props.offer}</h2>
        <h2>Shop Now</h2>
    </div>
</div>
    )
}

function Header(props){
    return(
        <div className="heading">
          <img  className="images" src="https://imgs.search.brave.com/WNSODtjL_DbEDsU9Y6GAhvoTVcnUCAQ2PcdNX5ct_FY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M4Lzkz/LzEyL2M4OTMxMjE5/MTVmNDE5NmY2YjBj/NDk5NmZjMDEyYThk/LmpwZw" alt="" height="80px" width="80px"/>
          <div className="options">
            <button className="but">Men</button>
            <button className="but">Women</button>
            <button className="but">Children</button>
            <button className="but">Kids</button>
            <button className="but">Home</button>
            <button className="but">Beauty</button>
          </div>
           <input className="search" type="text" placeholder="search here baby girl" />
           <div className="profile">
            <button className="pro">Profile</button>
            <button className="pro">Wislist</button>
            <button className="pro">Bag</button>
           </div>
        </div>
    )
}


function Footer(props){
    return (
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/8/dndfsB1V_65ecb385cb2e4af2b0313364aeae6da8.jpg" width="1500px"></img>
    )
}


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