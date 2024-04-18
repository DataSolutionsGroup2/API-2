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

interface UserData {
  name: string;
  email: string;
  role: string;
  password: string;
}

interface ModalProps {
  onClose: () => void;
  onSave: (data: UserData) => void;
}

const CriacaoEdidorRevisorModal = ({ onClose, onSave }: ModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    cpf: "",
    birthdate: "",
    senha: "",
    senhaError: "",
    cpfError: "",
    ageError: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      password: formData.senha,
    };
    onSave(result);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="modal-inner bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full border-orange-500">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 modal-inner">
          <h2 className="text-center text-orange-700">Crie seu novo perfil</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex mb-4">
              <div className="flex-1 mr-4">
                <label htmlFor="name" className="block mb-1 text-black">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-3 py-2 rounded border border-orange-500 w-full"
                />
              </div>
              <div className="w-2" />
              <div className="flex-1">
                <label htmlFor="cpf" className="block mb-1 text-black">
                  CPF:
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="px-3 py-2 rounded border border-orange-500 w-full"
                />
                {formData.cpfError && (
                  <p className="text-red-500 mt-1">{formData.cpfError}</p>
                )}
              </div>
            </div>
            <div className="flex mb-4">
              <div className="flex-1 mr-4">
                <label htmlFor="email" className="block mb-1 text-black">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-2 rounded border border-orange-500 w-full"
                />
              </div>
              <div className="w-2" />
              <div className="flex-1">
                <label htmlFor="birthdate" className="block mb-1 text-black">
                  Data de Nascimento:
                </label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className="px-3 py-2 rounded border border-orange-500 w-3/4"
                />
                {formData.ageError && (
                  <p className="text-red-500 mt-1">{formData.ageError}</p>
                )}
              </div>
            </div>
            <div className="flex mb-4">
              <div className="flex-1 mr-4">
                <label htmlFor="senha" className="block mb-1 text-black">
                  Senha:
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  className="px-3 py-2 rounded border border-orange-500"
                />
                {formData.senhaError && (
                  <p className="text-red-500 mt-1">{formData.senhaError}</p>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="role" className="block mb-1 text-black">
                  Usuario:
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="px-3 py-2 rounded border border-orange-500 w-3/4"
                >
                  {" "}
                  <option value="editor">Editor</option>
                  <option value="manager">Gestor</option>
                  <option value="reader">Revisor</option>
                </select>
              </div>
            </div>
            <div className="flex justify-evenly">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Criar
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
              >
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CriacaoEdidorRevisorModal;
