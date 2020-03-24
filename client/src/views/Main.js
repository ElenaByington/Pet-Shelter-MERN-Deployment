import React from 'react'
import { Router } from '@reach/router';
import Form from '../components/Form';
import List from '../components/List';
import Detail from '../components/Detail';
import Edit from '../components/Edit';

export default () => {
    return (
        <Router>
            <Form path="/pets/new" />
            <List path="/" />
            <Detail path="/pets/:id" />
            <Edit path="pets/:id/edit" />
        </Router>
    )
}