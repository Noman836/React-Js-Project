
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sample from '../Sample';
import Row from 'react-bootstrap/Row';
// import Button from './Button'
export const Home = () => {
    return (
        <>
            <div className='head'>
                <span><h2>Sector App</h2></span>
               <Link className="title-site" to="/MyForm">Add Record</Link>
            </div>
            <Row className='card-body-container'>
            <Sample />   
            <Sample /> 
            <Sample /> 
            </Row>
        </>
    )
};