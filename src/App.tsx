import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DataElement from "./components/DataElement/DataElement";

export default function App() {
  useEffect(() => {
    axios.get("http://localhost:3002/getPost").then((res: any) => {
      setData(res.data);
    });
  }, []);
  const deleteElement = (index: number) => {
    axios
      .post("http://localhost:3002/deletePost", {
        deleteId: index,
      })
      .then((res: any) => {
        setData(res.data);
      });
  };
  const [data, setData] = useState<any>(null);
  const [infoAvtive, setInfoActive] = useState<boolean>(true);
  const moreInformation = () => {
    console.log(true);
  };
  return (
    <div className="App">
      <div className="data-main">
        <div className="data-list">
          {data?.map((e: any, i: number) => (
            <DataElement
              key={i}
              id={e.id}
              name={e.name}
              phone={e.phone}
              moreInformation={() => moreInformation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
//
