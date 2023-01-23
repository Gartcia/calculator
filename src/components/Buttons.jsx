function Button(props){
    return(
    <button id={props.id} onClick={() => props.handleClick(props.number)} className={`fw-bolder border-0 btn d-flex justify-content-center align-items-center btn-${props.bg} col-${props.col} rounded-0`} style={{height:70}}>
        {props.number}
    </button>
    );
}

export default Button