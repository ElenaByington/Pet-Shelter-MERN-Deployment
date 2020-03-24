import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const [pet, setPet] = useState({});
    const [like, setLike] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + props.id)
            .then(res => {
                setPet(res.data)
                console.log(res)
            })
            .catch(err => console.log("Error: ", err))
    }, [props.id])

    const handleDelete = deleteId => {
        axios.delete('http://localhost:8000/api/pets/' + deleteId)
            .then(res => {
                navigate('/')
                console.log(res)
                setLike(true)
            })
            .catch(err => console.log(err));
    }

    const handleLike = _id => {
        pet.like += 1;
        axios.put('http://localhost:8000/api/pets/' + props.id, pet)
            .then(res => { setLike(true) })
            .catch(err => console.log("Error: ", err));
    }

    return (
        <div>
            <Link to="/">back to home</Link>
            <h1>Pet Shelter</h1>
            <h3>Details about: {pet.name}</h3>
            <button onClick={e => handleDelete(pet._id)}>Delete</button>
            <p>Pet type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills: {pet.skill1} {pet.skill2} {pet.skill3}</p>

            <button onClick={e => { handleLike(pet._id) }} disabled={like}>{like === true ? "Liked!" : "Like"} {pet.name}</button>
            <p>{pet.like} like{"("}s{")"}</p>
        </div>
    )
}