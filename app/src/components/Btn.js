function Btn(props) {
    const handleBtnInput = (id) => {
        if (id < 15) {
            props.setInput(props.input + props.char)
        } else if (id === 15) { // clr btn
            props.setInput('')
        } else if (id === 16) { // enter btn
            props.computeAnswer(props.input)
        }
    }

    return (
        <button
            className={`char${props.id} char`}
            onClick={() => {handleBtnInput(props.id)}} // add char to screen onClick
        >
            {props.char}
        </button>
    )
}

export default Btn