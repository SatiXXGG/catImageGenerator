

function button(clickFunction, title) {
    return (
        <button onClick={clickFunction} className="px-5 mx-2 py-2 outline-1 outline bg-black text-white hover:scale-105 hover:bg-white hover:outline-black hover:text-black transition-all rounded-2xl active:bg-neutral-800 active:text-white ">{title}</button>
    )
}

export default button