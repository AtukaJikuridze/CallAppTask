import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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

  return (
    <div className="App">
      <div className="data-list">
        {data?.map((e: any, i: number) => (
          <div className="data-element">
            <h1>{e.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
//
