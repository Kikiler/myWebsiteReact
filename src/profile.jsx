import pic from "./assets/myPic.jpg"
function currentAge() {
    let today = new Date(); // month are 0 indexed btw meaning may is the 4 (nonsense)
    if(4 < today.getMonth())
        return today.getFullYear() - 2005;
    else if(today.getMonth() == 4 && 26 <= today.getDate())
        return today.getFullYear() - 2005;
    else
        return today.getFullYear() - 2005 - 1;
}
function Profile() {
    return (
        <div> 
           <div className="profile">
            <img  className="myPic" src={pic} alt="picture element" />
            <table className="personalInfoTable">
                <caption className="personalInfoCaption">Personal information</caption>
                <tbody>
                    <tr>
                        
                        <td className="personalInfoCell">
                            Full Name
                        </td>
                        <td className="personalInfoCell">
                            Killian Evouna
                        </td>
                    </tr>
                    <tr>
                        <td className="personalInfoCell">
                            Nationality
                        </td>
                        <td className="personalInfoCell">
                            Belgian
                        </td>
                    </tr>
                    <tr>
                        <td className="personalInfoCell">
                            Born in
                        </td>
                        <td className="personalInfoCell">
                            Woluwe-Saint-Lambert(Brussels)
                        </td>
                    </tr>
                    <tr>
                        <td className="personalInfoCell">
                            Birth date
                        </td>
                        <td className="personalInfoCell">
                            26 May 2005 ({currentAge()})
                        </td>
                    </tr>
                    <tr>
                        <td className="personalInfoCell">
                            Mail
                        </td>
                        <td className="personalInfoCell">
                            <a href="mailto:">Alanevouna@gmail.com</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="personalInfoCell">
                            Phone number
                        </td>
                        <td className="personalInfoCell">
                            <a href="tel:+32 470 29 35 63" title="call me with your phone">
                                        +32 470 29 35 63
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div> 
        <div className="content">
            <h2><center><u>Contents</u></center></h2>
        <ol className="contentList">
            <li className="listItem"><a href="#">Studies 📚</a></li>
            <li className="listItem"><a href="#">Hobbies and interests ⚽️ </a></li>
            <li className="listItem"><a href="#">Skills 💻</a></li>
            <li className="listItem"><a href="#">Languages 🈴</a></li>
            <li className="listItem"><a href="#"> Projects 📈</a></li>
        </ol> 
        </div>   
        </div>
        
    );
}

export default Profile