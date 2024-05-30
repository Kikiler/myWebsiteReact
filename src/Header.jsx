import busanPic from "./assets/image.png"
function Header() {
    return( <header className="mainHeader">
        <div className="headerDiv">
            <img src={busanPic} alt="picture of busan" className="busanPicture" />
        </div>
    </header> )
}

export default Header;