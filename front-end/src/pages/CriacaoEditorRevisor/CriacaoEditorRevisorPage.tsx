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


const CriacaoEditorRevisorPage = () =>  {

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
        const validCpf = validateCPF(formData.cpf);
        const validAge = validateAge(formData.birthdate);
        if (validCpf && validAge) {
          console.log(formData); // Aqui você pode fazer algo com os dados do formulário
          // Por exemplo, enviar para um servidor via API
        }
    };

    const validateCPF = (cpf: string): boolean => {
        if (!cpf || cpf.length !== 11 || !/^\d+$/.test(cpf)) {
          setFormData(prevState => ({
            ...prevState,
            cpfError: 'CPF inválido'
          }));
          return false;
        }
        return true;
    };

    const validateAge = (birthdate: string): boolean => {
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
    };

    return(
        <div style={{ background: 'linear-gradient(to bottom, #f2f2f2, #999)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '400px', margin: 'auto', marginTop: 'center', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', backgroundColor: '#E6F0FF', color: 'black' }}>
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
                    <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Criar</button>
                </form>
            </div>
        </div>
    )
}

export default CriacaoEditorRevisorPage;