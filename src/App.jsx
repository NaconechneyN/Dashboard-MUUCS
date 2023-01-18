import TopNavigation from './components/TopNavigation'
import SideNagation from './components/SideNavigation'
import Main from './components/main/Main'
import Footer from './components/Footer'

const App = () => {

    return (
        <div className="app">
            <div className="app__sideNav">
                <SideNagation />
            </div>
            <div className="app__content">
                <TopNavigation />
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App;