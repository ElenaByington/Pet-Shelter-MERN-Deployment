import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [allPets, setAllPets] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setAllPets(res.data))
            .catch(console.log);
    }, []);

    return (
        <div>
            <Link to="/pets/new">add a pet to the shelter</Link>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPets.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><Link to={`/pets/${pet._id}`}>details</Link>{" "}<Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}