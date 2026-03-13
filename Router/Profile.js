import Login from "./Login";
import Footer from "./Footer";

function Profile(){
    return(
        <div className="pro">
        <header className="header">profile<Login/></header>
        <div className="conatiner">This is profile page</div>
        <Footer/>
        </div>
    )

}
export default Profile;