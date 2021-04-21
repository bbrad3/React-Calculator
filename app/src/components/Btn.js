function Btn(props) {
    const handleChar = (e) => {
        console.log(e.target.innerText);
    
    }

    return (
        <button
            className={`char${props.id} char`}
            onClick={handleChar} // add char to screen onClick
        >
            {props.char}
        </button>
    )
}

export default Btn