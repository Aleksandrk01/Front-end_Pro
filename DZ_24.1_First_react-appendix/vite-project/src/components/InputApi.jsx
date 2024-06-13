import React from "react";

const InputApi = () =>{
    return(
        <form>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            id="inputField"
            placeholder="Введіть значення"
          />
           <button type="submit" className="btn btn-primary button">
          Get Info
        </button>
        </div>
       
        </form>
    )
}

export default InputApi;