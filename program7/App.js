import './App.css';
import { useState, useEffect } from 'react';

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
		const response = await fetch('http://127.0.0.1:8080/demo', {
			method: 'POST',
			body: JSON.stringify(form),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await response.data;
		console.log(data);
	}

	const getUsers = async () => {
		const response = await fetch('http://127.0.0.1:8080/data', {
			method: 'GET'
		});
		const data = await response.json();
		setUsers(data);
	}

	useEffect(() => {
		getUsers();
	}, [users]);

	return (
		<div>
			<h2>Personal Details</h2>
			<form onSubmit={handleSubmit} className='personal'>
				<span>USN : </span>
				<input type='text' name='usn' onChange={handleForm} /><br />
				<span>Name : </span>
				<input type='text' name='name' onChange={handleForm} /><br />
				<span>Sem : </span>
				<input type='number' name='sem' onChange={handleForm} /><br />
				<span>Year of Admission : </span>
				<input type='number' name='year' onChange={handleForm} /><br />
				<input type='submit' />
			</form>
			<div>
				<table>
					<tbody>
						{users.map((rows, k) => {
							return (<tr key={k}>
								<td>{rows.usn}</td>
								<td>{rows.name}</td>
								<td>{rows.sem}</td>
								<td>{rows.year}</td>
							</tr>)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default App;
