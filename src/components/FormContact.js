import { useState } from 'react'

const FormContact = ({ onCreate }) => {
	const [inputName, setInputName] = useState('')
	const [inputSurname, setInputSurname] = useState('')
	const [inputAge, setInputAge] = useState('')
	const [inputPhone, setInputPhone] = useState('')

	const changeName = event => {
		setInputName(event.target.value)
	}
	const changeSurname = event => {
		setInputSurname(event.target.value)
	}
	const changeAge = event => {
		setInputAge(event.target.value)
	}
	const changePhone = event => {
		setInputPhone(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault()
		const newContact = [{ name: inputName, surname: inputSurname, age: inputAge, phone: inputPhone }]
		onCreate(...newContact)
		setInputName('')
		setInputSurname('')
		setInputAge('')
		setInputPhone('')
	}

	return (
		<form onSubmit={submitHandler} className="formBox mt-5">
			<label>Imię:</label>
			<input onChange={changeName} value={inputName} type="text" />
			<label>Nazwisko:</label>
			<input onChange={changeSurname} value={inputSurname} type="text" />
			<label>Wiek:</label>
			<input onChange={changeAge} value={inputAge} type="number" />
			<label>Telefon:</label>
			<input onChange={changePhone} value={inputPhone} type="number" />
			<button className="button uppercase font-bold">Dodaj</button>
		</form>
	)
}

export default FormContact
