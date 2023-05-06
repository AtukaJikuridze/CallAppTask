import "./DataMoreInfo.css";
interface dataInfoTypes {
  activeData: number | null;
  id: number;
  email: string;
  phone: string;
  street: string;
  city: string;
  gender: string;
  name: string;
  deleteItem: Function;
}

export default function DataMoreInfo({
  activeData,
  id,
  email,
  phone,
  street,
  city,
  gender,
  name,
  deleteItem,
}: dataInfoTypes) {
  return (
    <div className={`data-more-info ${activeData === id ? "activeData" : ""}`}>
      <div className="info-flex">
        <div className="info">
          <h3>Email : {email}</h3>
          <p>Phone : {phone}</p>
        </div>
        <div className="info">
          <h3>Adress </h3>
          <p>Street: {street}</p>
          <p>City: {city}</p>
        </div>
        <div className="info">
          <h3>Gender : {gender}</h3>
          <p>Name : {name}</p>
        </div>
      </div>
      <div className="info-buttons">
        <button className="delete" onClick={() => deleteItem(id)}>
          Delete
        </button>
        <button className="change">Change</button>
      </div>
    </div>
  );
}
