function Digit({digit, onClick}) {
    return (
        <button className="digit" onClick={onClick}>
      {digit}
    </button>
    );
}

export default Digit;