

const MenuCard=(props)=>
{


    return(<div>

    <div className="flex relative text-center bg-slate-100 w-4/6 p-4 justify-evenly">
        <span className="bg-blue-500 w-5 p-4 "></span>
        <h2 className="relative top-1">{props.icon}</h2>
        <h2> {props.title} </h2>
    </div>
    
    </div>)
}

export default MenuCard;