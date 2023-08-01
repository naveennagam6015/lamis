import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Home.css';
import { nanoid } from "nanoid";
function Home() {
  const [name, setName] = useState("");
  const [list, setList] = useState([])


  const dataSubmit = (e) => {
    e.preventDefault()
    console.log(name);
    let data = {
      "firstName": name,
      id: nanoid()
    };

    if (name) {

      setList((text) => [...text, data]);
      setName("");
    }
    console.log(data.id)
  }

  function handleRemove(id) {
    console.log("before" + list)
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    console.log("new" + newList)
  };

  return (
    <>
      <div>
        <form onSubmit={dataSubmit}>
          <label className="form-label m-2">Name:</label>
          <input className="form-control m-2" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
          <button
            className="btn btn-primary m-2">Submit</button>
        </form>
        <ul>
          {
            list.map((a) => <li key={a.id} className="text-decoration-none bg-primary m-2 list text-white">{a.firstName}<i onClick={() => handleRemove(a.id)} className="bi bi-x rounded-circle icon"></i>
            </li>
            )
          }
        </ul>
      </div>
    </>
  )
}
export default Home;




