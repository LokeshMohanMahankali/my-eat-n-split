import logo from "./logo.svg";
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

export default function App() {
  return <Eatnsplit initialFriends={initialFriends} />;
}

function Eatnsplit({ initialFriends }) {
  return (
    <div className="App">
      <Listoffriends initialFriends={initialFriends} />
      <Splitabill />
      <AddFriend />
    </div>
  );
}

function Listoffriends({ initialFriends }) {
  console.log(initialFriends, "sjsjdfj");
  return (
    <div className="Listoffriends">
      {initialFriends.map((items) => (
        <Friends img={items.image} name={items.name} balance={items.balance} />
      ))}
    </div>
  );
}

function Friends({ img, name, balance }) {
  return (
    <div className="friends">
      <img src={img} alt={name} />
      <div className="name">
        <h4>{name}</h4>
        <p>{balance}</p>
      </div>
      <button className="select">select</button>
    </div>
  );
}

function AddFriend(params) {
  return (
    <div className="addfriends">
      <div className="friendname">
        <h4> 🧑‍🤝‍🧑 Friend name </h4>
        <input className="text" type="text"></input>
      </div>
      <div className="friendname">
        <h4> 🌅 Image URL </h4>
        <input className="text" type="text"></input>
      </div>
      <button className="add">Add</button>
    </div>
  );
}

function Splitabill() {
  return (
    <div className="splitabill">
      <h3> SPLIT A BILL WITH SARAH </h3>
      <div className="billdetails">
        <div>
          <label> 💰 Bill value </label>
          <input type="text"></input>
        </div>
        <div>
          <label> 🧍‍♀️ Your expense </label>
          <input type="text"></input>
        </div>
        <div>
          <label> 🧑‍🤝‍🧑 pn expense </label>
          <input type="text"></input>
        </div>
        <div>
          <label> 🤑 Who is paying the bill</label>
          <select>
            <option>You</option>
            <option>person</option>
          </select>
        </div>
      </div>
    </div>
  );
}
