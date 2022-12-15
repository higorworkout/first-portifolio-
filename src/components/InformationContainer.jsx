import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/InformationContainer.sass'

function InformationContainer() {
    return <section id='information-container'>
        <div className="infor-card">
            <AiFillPhone id="phone-icon" />
            <div>
               <h3>Telefone</h3>
               <p>(61)98382-6945</p>
            </div>
        </div>
        <div className="infor-card">
            <AiOutlineMail id="email-icon" />
            <div>
               <h3>E-mail</h3>
               <p>higor.15nwa@gmail.com</p>
            </div>
        </div>
        <div className="infor-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
               <h3>Localização</h3>
               <p>Brasilia</p>
            </div>
        </div>
    </section>
}


export default InformationContainer