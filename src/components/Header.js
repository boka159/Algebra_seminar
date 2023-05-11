const Header = (props) => {
    // !! - ispred props.username pretvara vrijednost u boolean vrijednost
const isLoggedIn = !!props.username;

    return (
    <>
    {isLoggedIn && 
    <div className="App-header">
        <button className='sidebar-btn' onClick={props.toggleSidebar}>Sidebar</button>
        <h1>{props.username}'s Chat Room</h1>
        <div></div>
    </div>}

    {!isLoggedIn && <div className="App-header">
        <div></div>
          <h1>Chat Application</h1>
        <div></div>
      </div>}
    </>
    )
}

export default Header;