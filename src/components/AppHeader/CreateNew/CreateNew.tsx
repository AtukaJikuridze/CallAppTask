import "./CreateNew.css";

interface createTypes {
  createActive: boolean;
  setCreateActive: Function;
  setName: Function;
  setEmail: Function;
  setCity: Function;
  setStreet: Function;
  setPhone: Function;
  setGender: Function;
  createItem: Function;
  name: string;
  email: string;
  city: string;
  street: string;
  phone: string;
}

export default function CreateNew({
  createActive,
  setCreateActive,
  setName,
  setEmail,
  setGender,
  setCity,
  setPhone,
  setStreet,
  createItem,

  name,
  email,
  city,
  street,
  phone,
}: createTypes) {
  const setState = (value: string, state: Function) => {
    state(value);
  };
  const cancel = (e: any) => {
    e.preventDefault();
    setCreateActive(false);
  };
  console.log();

  return (
    <div className={`create-new ${createActive ? "active" : ""}`}>
      <h2>Add New Caller</h2>
      <form onSubmit={(e) => createItem(e)}>
        <label>
          Enter Name{" "}
          <input
            value={name}
            type="text"
            required
            onChange={(e) => setState(e.target.value, setName)}
          />
        </label>

        <label>
          Enter email{" "}
          <input
            value={email}
            required
            type="email"
            onChange={(e) => setState(e.target.value, setEmail)}
          />
        </label>

        <label>
          Enter street
          <input
            value={street}
            type="text"
            required
            onChange={(e) => setState(e.target.value, setStreet)}
          />
        </label>
        <label>
          Enter city
          <input
            value={city}
            type="text"
            required
            onChange={(e) => setState(e.target.value, setCity)}
          />
        </label>
        <label>
          Enter phone
          <input
            value={phone}
            type="text"
            required
            onChange={(e) => setState(e.target.value, setPhone)}
          />
        </label>
        <label>
          Enter gender
          <select onChange={(e) => setState(e.target.value, setGender)}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <div className="create-buttons">
          <button type="submit" className="submit">
            Submit
          </button>
          <button onClick={(e) => cancel(e)} className="cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
