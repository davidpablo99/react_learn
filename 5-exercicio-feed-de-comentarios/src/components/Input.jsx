export default function Input({id, label, value, setValue, type}){
    return(
        <div>
            <label htmlFor={id}>{label}
            <br />
            <input 
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={(e)=> setValue(e.target.value)}
            />
            </label>
        </div>
    )
}