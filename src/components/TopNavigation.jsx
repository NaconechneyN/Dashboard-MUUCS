import profilePic from '../assets/images/profile-pic.jpg'

const TopNavigation = () => {
    return (
        <div className="topNavigation fc-dark">
            <nav className='topNavBar'>
                <ul className="topNavBar__items">
                    <li><i class="fa-solid fa-envelope"></i></li>
                    <li><i class="fa-solid fa-bell"></i></li>
                    <li>
                        <div>
                            <span>Alfredo</span><img src={profilePic} alt="profile-pic" />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default TopNavigation