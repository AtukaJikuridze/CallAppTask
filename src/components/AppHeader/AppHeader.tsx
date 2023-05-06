import "./AppHeader.css";
import CreateNew from "./CreateNew/CreateNew";

export default function AppHeader() {
  return (
    <div className="app-header">
      <h1>Callaps - task</h1>
      <button>Create new</button>
      <CreateNew />
    </div>
  );
}
