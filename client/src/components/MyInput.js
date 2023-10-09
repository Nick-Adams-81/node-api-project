const MyInput = ({ input, setInput }) => {
  return (
    <div style={{ backgroundColor: "#ECDEEA" }}>
      <h1 style={{ marginLeft: "600px", marginTop: "20px", fontSize: "50px" }}>
        <span style={{ color: "green" }}>S</span>
        <span style={{ color: "red" }}>P</span>
        <span style={{ color: "#C1CB4F" }}>O</span>
        <span style={{ color: "blue" }}>O</span>
        <span style={{ color: "orange" }}>F</span>
        <span style={{ color: "purple" }}>L</span>
        <span style={{ color: "#C1CB4F" }}>E</span>
      </h1>
      <div style={{ marginLeft: "470px", marginBottom: "45px" }}>
        <input
          style={{ width: "50%", height: "35px" }}
          type="text"
          id="user-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MyInput;
