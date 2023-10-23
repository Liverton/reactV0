import "./TextField.css"

const TextField = (props) => {

    /*const placeholderModified = `${props.placeholder}...`*/

    return (
        <div className="text-field">
            <label>{props.label}</label>
            {/* <input placeholder={placeholderModified} /> */}
            <input value={props.value} />
        </div>
    )
}

export default TextField