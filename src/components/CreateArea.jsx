import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	const [showForm, setShowForm] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: '',
			content: '',
		});
		event.preventDefault();
	}

	function handleClick() {
		setShowForm(true);
	}

	return (
		<div>
			<form className="create-note">
				{showForm && (
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				)}
				<textarea
					onClick={handleClick}
					name="content"
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows={showForm ? 3 : 1}
				/>
				<Zoom in={true}>
					<button onClick={submitNote}>
						<AddIcon />
					</button>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
