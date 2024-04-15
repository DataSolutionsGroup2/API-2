import { useState } from "react"
import HeaderComponent from "../../components/HeaderComponent"
import CriacaoEdidorRevisorModal from "../../components/CriacaoEditorRevisorModal";


interface userInterface  {
    name: string,
    password:string,
    email: string,
    role: string
}

const GestorPage = () => {
    const [openModal, setOpenModal] = useState(false);
 
    const [userData, setUserData] = useState<userInterface[]>([]);

    const handleModal = ()=>{
        setOpenModal(!openModal);
    }

    const handleSaveUser = (data: userInterface) =>{
        setUserData(prevData => [...prevData, data])
        console.log(userData)
    }

    const buttons = [
        {
            name: 'Criar Revisor/Editor',
            onClick: handleModal
        },
        {
            name: 'Pesquisar',
            onClick: ()=> console.log('Apertei botao 2')
        },
    ]

    return(
        <div>
            <HeaderComponent buttons={buttons}/>
            {openModal && <CriacaoEdidorRevisorModal onClose={handleModal} onSave={handleSaveUser}/>}
            
            {
                userData && 
                <div>
                    {userData.map((user, index) => (
                        <div key={index}>
                            <span>{user.name}</span>
                            <span>{user.email}</span>
                            <span>{user.role}</span>
                        </div>
                    ))}
                </div>            }
        </div>
    )
}

export default GestorPage;