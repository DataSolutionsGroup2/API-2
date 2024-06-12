
export default function MenuRevisor() {
    return (
        <div>
            <nav className="bg-white border-gray-200 bg-gradient-to-r from-[#3241F0] to-[#818380] bg-[length:500%_10%]">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=FFFFFF" className="h-11" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Revisor</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="/" className="text-sm  text-white hover:underline">Desconectar</a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/GraficosRevisor" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Gráficos</a>
                            </li>
                            <li>
                                <a href="/Revisor" className="text-gray-900 dark:text-white hover:underline">Tabela</a>
                            </li>
                            <li>
                                <a href="/apontamentorevisor" className="text-gray-900 dark:text-white hover:underline">Apontamentos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
