import "./DataElement.css";
interface dataTypes {
  id: number;
  name: string;
  phone: string;
}
export default function DataElement({ id, name, phone }: dataTypes) {
  const moreInformation = () => {
    console.log(true);
  };
  return (
    <div className="data-element">
      <h2 className="data-id">{id}</h2>
      <h2 className="data-name">{name}</h2>
      <p className="data-phone">({phone})</p>
      <button className="data-more-info" onClick={() => moreInformation()}>
        More Information
      </button>
    </div>
  );
}
