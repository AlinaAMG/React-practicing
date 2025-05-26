import { Button } from './App';


export function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = selectedFriend && selectedFriend.id === friend.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}&#8364;
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}&#8364;
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even</p>}
      <Button onClick={() => onSelect(friend)}>
        {selectedFriend && friend.id === selectedFriend.id ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
