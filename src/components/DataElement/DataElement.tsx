import { useState } from "react";
import DataMoreInfo from "../DataMoreInfo/DataMoreInfo";
import "./DataElement.css";
interface dataTypes {
  id: number;
  name: string;
  phone: string;
  setDataActive: Function;
  dataActive: null | number;
  email: string;
  city: string;
  street: string;
  gender: string;
  deleteItem: Function;
}
export default function DataElement({
  id,
  name,
  phone,
  setDataActive,
  dataActive,
  email,
  street,
  city,
  gender,
  deleteItem,
}: dataTypes) {
  const moreInformation = () => {
    if (dataActive === id) {
      setDataActive(null);
    } else {
      setDataActive(id);
    }
  };
  return (
    <div className="data-element">
      <div className="data-basic-info">
        <h2 className="data-id">{id}</h2>
        <h2 className="data-name">{name}</h2>
        <p className="data-phone">({phone})</p>
        <button className="data-info-btn" onClick={() => moreInformation()}>
          More Information
        </button>
      </div>
      <DataMoreInfo
        activeData={dataActive}
        id={id}
        email={email}
        phone={phone}
        street={street}
        city={city}
        gender={gender}
        name={name}
        deleteItem={() => deleteItem(id)}
      />
    </div>
  );
}
