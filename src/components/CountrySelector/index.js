import './CountrySelector.css'
function CountrySelector({ country, handleOnChange }) {

    return (<div className="country">
        <ul className='list-country'>
            {
                country && country.map((ele) => {
                    return (
                        <li className='item' key={ele.prefCode}>
                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value={ele.prefCode} aria-label="..." onChange={(e) => {
                                handleOnChange(ele.prefCode, ele.prefName)
                            }} ></input> {ele.prefName}
                        </li>
                    )
                })
            }
        </ul>
    </div>);
}

export default CountrySelector;