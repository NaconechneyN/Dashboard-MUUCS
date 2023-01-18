import logo from '../assets/images/logo.jpeg'

const SideNavigation = () => {
    return (
        <div className="sideNavigation flex-column fc-light">
            <div className='sideNavigation__logo bottom_line'>
                {/* <img src={logo} alt="Muucs" /> */}
                <h1>Muucs</h1>
            </div>
            <div className='sideNavigation__data flex bottom_line'>
                <h3>Dashborad - Cursos</h3>
            </div>
            <div className='sideNavigation__data flex-column bottom_line'>
                <h3 className='sideNavigation__data-actions opacity-6'>Acciones</h3>
                <ul className='flex-column p-000'>
                    <li className='opacity-6'>
                        <div className='flex gap-100'>
                            <i class="fa-solid fa-users"></i>
                            <span>Usuarios</span>
                        </div>
                    </li>
                    <li  className='opacity-6'>
                        <div className='flex gap-100'>
                            <i class="fa-solid fa-book"></i>
                            <span>Cursos</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNavigation