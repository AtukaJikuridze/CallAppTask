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
  const deleteItem = (index: number) => {
    axios
      .post("http://localhost:3002/deletePost", {
        deleteId: index,
      })
      .then((res: any) => {
        setData(res.data);
      });
  };
  const [data, setData] = useState<any>(null);
  const [dataActive, setDataActive] = useState<number | null>(null);

  return (
    <div className="App">
      <div className="data-main">
        <AppHeader />
        <div className="data-list">
          {data?.map((e: any, i: number) => (
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
//
