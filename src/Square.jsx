const Square = (props) => {
    return (
        <button className="square" id={props.id} onClick={props.onClick}>
            {props.value}
        </button>
    )
}
export default Square