import { useState } from 'react';
import { Button } from './App';

export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=933372');

  const id = crypto.randomUUID;

  function handleAddFriend(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      id,
      name,
      image: `${image}? = ${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48?u=499476');
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />

      <label> 📺 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)} />
      <Button>Add Friend</Button>
    </form>
  );
}
