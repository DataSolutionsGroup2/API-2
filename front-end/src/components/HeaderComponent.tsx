interface Button {
    name: string;
    onClick: ()=>void;
}

interface HeaderProps {
    buttons: Button[];
}


const HeaderComponent = ({buttons} : HeaderProps) =>{

    return(
        <div className="flex bg-slate-200 p-4">
            {buttons.map((button, index) =>(
                <button
                    className="p-4 bg-blue-500 text-white hover:bg-blue-800 m-2 rounded-xl"
                    key={index} 
                    onClick={()=> {button.onClick()}}
                >{button.name}</button>
            ))}
        </div>
    )
}

export default HeaderComponent;