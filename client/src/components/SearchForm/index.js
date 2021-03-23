import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search Plant Data</label>
                <input
                    onChange={props}
                    value={props}
                    term="search"
                    type="text"
                    ClassName="form-control"
                />
                <button onClick={props} className="btn">Submit</button>
            </div>
        </form>
    )
}

export default SearchForm;