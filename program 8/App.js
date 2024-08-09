import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [form, setForm] = useState({});
	const [users, setUsers] = useState([]);

	const handleForm = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios('http://127.0.0.1:8080/demo', {
			method: 'POST',
			data: JSON.stringify(form),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await response.data;
		console.log(data);
	}

	const getUsers = async () => {
		const response = await axios('http://127.0.0.1:8080/data', {
			method: 'get'
		});
		const data = await response.data;
		setUsers(data);
	}

	useEffect(() => {
		getUsers();
	}, [users]);

	return (
		<div>
			<h2>Fruit Price</h2>
			<form onSubmit={handleSubmit} className='personal'>
				<span>Fruit Name : </span>
				<input type='text' name='fname' onChange={handleForm} /><br />
				<span>Price : </span>
				<input type='number' name='price' onChange={handleForm} /><br />
				<input type='submit' />
			</form>
			<div>
				<table>
					<tbody>
						{users.map((rows, k) => {
							return (<tr key={k}>
								<td>{rows.fname}</td>
								<td>{rows.price}</td>
							</tr>)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default App;
