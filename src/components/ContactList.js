import { AiOutlineDelete, AiOutlineRedo } from 'react-icons/ai'
const ContactList = ({ users }) => {
	const renderedContactList = users.map(user => {
		return (
			<div className="contact" key={user.id}>
				<p>{user.name}</p>
				<p>{user.surname}</p>
				<p>{user.age}</p>
				<p>{user.phone}</p>
				<span className="text-xl cursor-pointer">
					<AiOutlineRedo />
				</span>
				<span className="text-red-500 text-xl cursor-pointer">
					<AiOutlineDelete />
				</span>
			</div>
		)
	})

	return <div className="contact-box">{renderedContactList}</div>
}

export default ContactList
