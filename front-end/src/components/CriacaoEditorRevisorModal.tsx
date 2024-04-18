import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    role: string;
    cpf: string;
    birthdate: string;
    senha: string;
    senhaError: string;
    cpfError: string;
    ageError: string;
  }

  interface UserData{
        name: string,
        email: string,
        role: string,
        password: string
  }

  interface ModalProps {
    onClose: () => void;
    onSave: (data: UserData) => void;
  }


const CriacaoEdidorRevisorModal = ({onClose, onSave}: ModalProps) =>{

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        role: '',
        cpf: '',
        birthdate: '',
        senha: '',
        senhaError: '',
        cpfError: '',
        ageError: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //const validCpf = validateCPF(formData.cpf);
        //const validAge = validateAge(formData.birthdate);
        //if (validCpf && validAge) {
            const result = {
                name: formData.name,
                email: formData.email,
                role: formData.role,
                password: formData.senha
            }
            onSave(result)
            onClose()
        //};
    }

    /*const validateCPF = (cpf: string): boolean => {
        if (!cpf || cpf.length !== 11 || !/^\d+$/.test(cpf)) {
          setFormData(prevState => ({
            ...prevState,
            cpfError: 'CPF inválido'
          }));
          return false;
        }
        return true;
    };*/

    /*const validateAge = (birthdate: string): boolean => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        if (age < 18) {
          setFormData(prevState => ({
            ...prevState,
            ageError: 'É necessário ter pelo menos 18 anos de idade.'
          }));
          return false;
        }
        return true;
    };*/

    return(
        
            <div className="absolute inset-0 bg-gray-500 opacity-75 flex justify-center items-center">
                <div className="modal-inner bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 modal-inner">
                    <h2 style={{ textAlign: 'center', color: '#007bff' }}>Crie seu novo perfil</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column'}}>
                    <div style={{ display: 'flex', marginBottom: '15px' }}>
                        <div style={{ flex: 1, marginRight: '10px' }}>
                            <label htmlFor="name" style={{ marginBottom: '5px', color: 'black' }}>Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', width: '100%' }} />
                        </div>
                        {/* CPf */}
                        <div style={{ padding: '5px', borderRadius: '5px', width: '2%' }}/>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="cpf" style={{ marginBottom: '5px', color: 'black' }}>CPF:</label>
                            <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', width: '100%' }} />
                            {formData.cpfError && <p style={{ color: 'red', marginTop: '5px' }}>{formData.cpfError}</p>}
                        </div>
                    </div>
                    {/* //Email */}
                    <div style={{ display: 'flex', marginBottom: '15px' }}>
                        <div style={{ flex: 1, marginRight: '10px' }}>
                            <label htmlFor="email" style={{ marginBottom: '5px', color: 'black' }}>Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', width: '100%' }} />
                        </div>
                        <div style={{ padding: '5px', borderRadius: '5px', width: '2%' }}/>
                        {/* Data de Nascimento */}
                        <div style={{ flex: 1 }}>
                            <label htmlFor="birthdate" style={{ marginBottom: '5px', color: 'black' }}>Data de Nascimento:</label>
                            <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', width: '70%' }} />
                            {formData.ageError && <p style={{ color: 'red', marginTop: '5px' }}>{formData.ageError}</p>}
            
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '15px' }}>
                        <div style={{ flex: 1, marginRight: '10px' }}>
                            <label htmlFor="senha" style={{ marginBottom: '5px', color: 'black' }}>Senha:</label>
                            <div></div>
                            <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px' }} />
                            {formData.senhaError && <p style={{ color: 'red', marginTop: '5px' }}>{formData.senhaError}</p>}
                        </div>
        
                        <div style={{ flex: 1 }}>
                            <label htmlFor="role" style={{ marginBottom: '5px', color: 'black' }}>Role:</label>
                            <div></div>
                            <select id="role" name="role" value={formData.role} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px',width: '70%'}}>
                                <option value="">Select...</option>
                                <option value="editor">Editor</option>
                                <option value="manager">Manager</option>
                                <option value="reader">Reader</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Criar</button>
                    <button onClick={onClose} style={{ padding: '10px', backgroundColor: '#ff0000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Voltar</button>
                    </div>  
                    
                </form>
                    </div>
                </div>
            </div>
    )
}

export default CriacaoEdidorRevisorModal;