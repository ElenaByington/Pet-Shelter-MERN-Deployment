import React, { useEffect, useState } from 'react'
import { navigate, Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errMsg, setErrMsg] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + props.id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
            .catch(console.log)
    }, [props.id])

    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/' + props.id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res => {
                if (res.data.errors) {
                    setErrMsg(res.data.errors)
                }
                else {
                    navigate('/')
                }
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/">back to home</Link>
            <h1>Pet Shelter</h1>
            <h3>Edit {name}</h3>

            <form onSubmit={updatePet}>
                <p>
                    <label for="name">Pet Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    {errMsg.name ? <span className="text-danger">{errMsg.name.message}</span> : ""}
                </p>
                <p>
                    <label for="type">Pet Type: </label>
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)} />
                    {errMsg.type ? (<span className="text-danger">{errMsg.type.message}</span>) : ("")}
                </p>
                <p>
                    <label for="description">Description: </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    {errMsg.description ? (<span className="text-danger">{errMsg.description.message}</span>) : ("")}
                </p>
                <p>Skills {"("}optional{")"}</p>
                <p>
                    <label for="skill1">Skill 1: </label>
                    <input
                        type="text"
                        value={skill1}
                        onChange={(e) => setSkill1(e.target.value)} />
                </p>
                <p>
                    <label for="skill2">Skill 2: </label>
                    <input
                        type="text"
                        value={skill2}
                        onChange={(e) => setSkill2(e.target.value)} />
                </p>
                <p>
                    <label for="skill3">Skill 3: </label>
                    <input
                        type="text"
                        value={skill3}
                        onChange={(e) => setSkill3(e.target.value)} />
                </p>
                <button type="submit">Edit Pet</button>
            </form>
        </div>
    )
}