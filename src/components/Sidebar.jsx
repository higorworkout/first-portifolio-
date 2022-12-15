import Avatar from '../img/eu.jpg'
import '../styles/components/sideBar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
    return (
        <>
        <aside id="sidebar">
            <img src={Avatar} alt="My photo" />
            <p className="title">Front-End Developer</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download currículo</a>

        </aside>
        </>
    )
}

export default Sidebar