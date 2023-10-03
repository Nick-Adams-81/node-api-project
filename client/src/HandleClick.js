import { useEffect } from "react";

const HandleClick = async (input) => {
    await fetch(`http://localhost:5000/data/dallas cowboys/3`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

export default HandleClick;
