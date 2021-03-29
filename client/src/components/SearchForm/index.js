import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search Plant Data</label>
                <input
                    onChange={props.onChange}
                    value={props.value}
                    term="search"
                    type="text"
                    className="form-control"
                />
                <button onClick={props.onClick} className="btn">Submit</button>
            </div>
        </form>
    )
}

export default SearchForm;