import { useState } from "react";
import "./AppHeader.css";
import CreateNew from "./CreateNew/CreateNew";
interface createTypes {
  setName: Function;
  setEmail: Function;
  setCity: Function;
  setStreet: Function;
  setPhone: Function;
  setGender: Function;
  createItem: Function;
  setCreateActive: Function;
  createActive: boolean;
  name: string;
  email: string;
  city: string;
  street: string;
  phone: string;
}
export default function AppHeader({
  setName,
  setEmail,
  setGender,
  setCity,
  setPhone,
  setStreet,
  createItem,
  setCreateActive,
  createActive,
  name,
  email,
  city,
  street,
  phone,
}: createTypes) {
  return (
    <div className="app-header">
      <h1>Callaps - task</h1>
      <button className="create" onClick={() => setCreateActive(true)}>
        Create new
      </button>
      <CreateNew
        createActive={createActive}
        setCreateActive={setCreateActive}
        setName={setName}
        setEmail={setEmail}
        setCity={setCity}
        setStreet={setStreet}
        setPhone={setPhone}
        setGender={setGender}
        createItem={(e: any) => createItem(e)}
        name={name}
        email={email}
        city={city}
        street={street}
        phone={phone}
      />
    </div>
  );
}
