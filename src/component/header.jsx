

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

export default Header;