import { useState ,useEffect} from 'react'
import Digit from './Digit'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [digits, setDigits] = useState(Array(10).fill(0))
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setShowWelcome(true);
}, []);

  function handleClick(index) {
    let num = value;
    if(digits[index] === 0){
        num = num + (2 ** (digits.length-index-1))
        setValue(num)
        setDigits((prev) => {
          const newD = [...prev]
          newD[index]=1
          return newD
        })
    }else{
        num = num - (2 ** (digits.length-index-1))
        setValue(num)
        setDigits((prev) => {
          const newD = [...prev]
          newD[index]=0
          return newD
        })
    }
  }

  setDigits

  return (
    <div>
    {showWelcome && (
      <div className="welcome-screen" onClick={() => setShowWelcome(false)}>
        <h1>Welcome to my binary converter</h1>
        <p>Click to continue</p>
      </div>

    )}

    {!showWelcome && (
        <div className='layout'>
      <div className='decimal'>
        <h1>DECIMAL VALUE  :   {value}</h1>
      </div>
      <div className='digits'>
        {digits.map((digit,index) => (
          <Digit key={index} digit={digit} onClick={() => handleClick(index)}/>
        ))}
      </div>
    </div>
    )}
  </div>
  )
}

export default App
