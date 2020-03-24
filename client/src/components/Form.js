import React, { useState } from 'react'
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

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new', {
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
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Pet Name: </label><br />
                    <input
                        type="text"
                        name="name" value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                    {errMsg.name ? (<span className="text-danger">{errMsg.name.message}</span>) : ("")}
                </p>
                <p>
                    <label>Type: </label><br />
                    <input
                        type="text"
                        name="type" value={type}
                        onChange={(e) => { setType(e.target.value) }} />
                    {errMsg.type ? (<span className="text-danger">{errMsg.type.message}</span>) : ("")}
                </p>
                <p>
                    <label>Description: </label><br />
                    <input
                        type="text"
                        name="description" value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                    {errMsg.description ? (<span className="text-danger">{errMsg.description.message}</span>) : ("")}
                </p>
                <p>Skills {"("}optional{")"}</p>
                <p>
                    <label>Skill 1: </label><br />
                    <input
                        type="text"
                        name="skill1" value={skill1}
                        onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 2: </label><br />
                    <input
                        type="text"
                        name="skill2" value={skill2}
                        onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 3: </label><br />
                    <input
                        type="text"
                        name="skill3" value={skill3}
                        onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <button type="submit">Add Pet</button>
            </form>
        </div >
    )
}