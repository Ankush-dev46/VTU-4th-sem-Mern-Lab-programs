import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
	const [form, setForm] = useState({});
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
		window.alert(data);
	}

	return (
		<div>
			<h2>User Authentication</h2>
			<form onSubmit={handleSubmit} className='personal'>
				<span>User Name : </span>
				<input type='text' name='uname' onChange={handleForm} /><br />
				<span>Password : </span>
				<input type='password' name='pass' onChange={handleForm} /><br />
				<input type='submit' />
			</form>
		</div>
	)
}

export default App;
