import "./darkmode.css";

function DarkModeBtn() {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}

export default DarkModeBtn;
