
import { useEffect } from "react";

const HandleClick = (input) => {
    useEffect(() => {
        fetch(`http:/localhost:5000/data/${input}` , {
          method: "POST",
          headers: {
            "content-type": "application/json"
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
      }, [])
}

export default HandleClick