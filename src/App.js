import { useState } from "react";
import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
// Button using children prop
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

/////////////////////////////////////////////////////// App functions
export default function App() {
  const [friend, setFriend] = useState(true);

  // Addfriend button
  function handleaddfriend() {
    setFriend(() => !friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friendlist />
        {friend && <AddFriend />}
        <Button onClick={handleaddfriend}>
          {!friend === true ? "Add-Friend" : "Close"}
        </Button>
      </div>
      <Splitabill />
    </div>
  );
}

/////////////////////////////////////////////////////// friendslist

function Friendlist() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li className="selected">
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you own {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          you own {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          you own {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      <Button>Select</Button>
    </li>
  );
}

/////////////////////////////////////////////////////// Addfriend

function AddFriend(params) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    // for reload
    e.preventDefault();
    // kept id on a variable
    const id = crypto.randomUUID();
    // create newfriend object

    //
    if (!name || !image) return;

    const newfriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    // console.log(newfriend);
    console.log("sucess--submit", newfriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label> 🧑‍🤝‍🧑 Friend name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label> 🌅 Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <Button>ADD</Button>
    </form>
  );
}

//////////////////////////////////////////////////////splite bill

function Splitabill() {
  return (
    <form className="form-split-bill">
      <h2> SPLIT A BILL WITH SARAH </h2>
      <label> 💰 Bill value </label>
      <input type="text"></input>
      <label> 🧍‍♀️ Your expense </label>
      <input type="text"></input>
      <label> 🧑‍🤝‍🧑 pn expense </label>
      <input type="text"></input>
      <label> 🤑 Who is paying the bill</label>
      <select>
        <option>You</option>
        <option>person</option>
      </select>
      <Button>Splitabill</Button>
    </form>
  );
}
