import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DataElement from "./components/DataElement/DataElement";
import AppHeader from "./components/AppHeader/AppHeader";

export default function App() {
  useEffect(() => {
    axios.get("http://localhost:3002/getPost").then((res: any) => {
      setData(res.data);
    });
  }, []);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [data, setData] = useState<any>(null);
  const [dataActive, setDataActive] = useState<number | null>(null);

  const [createActive, setCreateActive] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<number | null>(null);
  const unicalId = () => {
    if (Boolean(isUpdate)) {
      return isUpdate;
    }

    for (let i = 0; i < data?.length; i++) {
      if (data?.filter((e: any) => e.id === i).length === 0) return i;
    }
    return data?.length + 1;
  };

  const deleteItem = (index: number) => {
    axios
      .post("http://localhost:3002/deletePost", {
        deleteId: index,
      })
      .then((res: any) => {
        setData(res.data);
      });
    setDataActive(null);
  };
  const createItem = (e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:3002/createItem", {
        id: unicalId(),
        name,
        email,
        phone,
        gender,
        address: {
          street,
          city,
        },
      })
      .then((res: any) => {
        setData(res.data);
      });
    setCity("");
    setName("");
    setEmail("");
    setStreet("");
    setPhone("");
    setCreateActive(false);
    setIsUpdate(null);
  };
  const update = (
    eCity: string,
    ePhone: string,
    eName: string,
    eGender: string,
    eStreet: string,
    eEmail: string,
    eId: number
  ) => {
    setCity(eCity);
    setPhone(ePhone);
    setName(eName);
    setGender(eGender);
    setStreet(eStreet);
    setEmail(eEmail);
    setDataActive(null);
    setCreateActive(true);
    setIsUpdate(eId);
  };

  return (
    <div className="App">
      <div className="data-main">
        <AppHeader
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
          setCreateActive={setCreateActive}
          createActive={createActive}
        />
        <div className="data-list">
          {data?.map((e: any, i: number) => {
            return (
              <DataElement
                key={i}
                id={e.id}
                name={e.name}
                phone={e.phone}
                setDataActive={setDataActive}
                dataActive={dataActive}
                email={e.email}
                city={e.address.city}
                street={e.address.street}
                gender={e.gender}
                deleteItem={() => deleteItem(e.id)}
                update={() =>
                  update(
                    e.address.city,
                    e.phone,
                    e.name,
                    e.gender,
                    e.address.street,
                    e.email,
                    e.id
                  )
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
//
