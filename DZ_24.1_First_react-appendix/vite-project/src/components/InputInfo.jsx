import React from "react";

const InputInfo = () =>{
    return(
        <div className="form-group d-flex">
            <textarea
            className="form-control mt-5"
            style={{ minHeight: '100px' }}
            readOnly
        placeholder="
        <!DOCTYPE html>
<html lang= en >
<head>
    <meta charset= UTF-8 >
    <meta http-equiv= X-UA-Compatible  content= IE=edge >
    <meta name= viewport  content= width=device-width, initial-scale=1.0 >
    <title>Document</title>
</head>
<body>
    <script>
        let numbers = [1,2,3,4,5,4,3,21,2,4,5,6,7,7,22]
        let pairedNumber = numbers.filter(num => num % 2 === 0)
        console.log(pairedNumber)
    </script>
</body>
</html>"
          />
        </div>
    )
}
export default InputInfo;