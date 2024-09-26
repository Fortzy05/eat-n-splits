import Friend from "./Friend";


export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul className="list">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          key={friend.id}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
