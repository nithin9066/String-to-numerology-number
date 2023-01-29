import { useState } from "react";

function App() {
  const [output, setOutput] = useState(0);
  const numberOfAlpha = [
    ["a","j","s"],
    ["b","k","t"],
    ["c","l","u"],
    ["d","m","v"],
    ["e","n","w"],
    ["f","o","x"],
    ["g","p","y"],
    ["h","q","z"],
    ["i","r"],
  ];

  function stringToNumerology(e)
  {
    var out = 0;
    var numbers = '';
    const input = (e.target.value).toLowerCase();
    for(var i = 0; i<input.length; i++)
    {
    for(var j = 0; j<numberOfAlpha.length; j++){
        if(numberOfAlpha[j].includes(input[i]))
        {
          out += j + 1;
        }
        else if(parseInt(input[i]))
        {
          numbers += input[i];
          break;
        }
      }
    }
    console.log(out);
    out = out.toString()+numbers;
    var outp = 0;
    console.log(out);
    outp = makeSingleDigit(out);
    setOutput(outp);
  }

  function makeSingleDigit(out)
  {
    var result = 0;
    for(var i = 0; i<out.length; i++)
    {
      result += parseInt(out[i]);
    }
    if(result < 10)
    {
      return result;
    }
    else
    {
      
      return makeSingleDigit(result.toString())
    }
  }
  return (
    <div className="lg:h-screen grid place-items-center" style={{ backgroundImage: `url('background.svg')` }}>
      <div className="w-96 bg-sky-400/60 p-10 rounded-xl space-y-10 shadow-xl">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="font-medium text-white">Enter You String:</label>
          <input className="px-3 py-2 rounded-md border outline-none" placeholder="Enter String" type="text" onChange={stringToNumerology} />
        </div>
        <div className="flex flex-col items-center gap-3 justify-center">
          {
            output ?
            <>
            <h5 className="font-bold text-white uppercase">Numerology number</h5>
            <h4 className="font-bold text-sky-500 grid place-items-center h-14 rounded-full w-14 text-xl bg-white">{output}</h4>
            </>
            : ''
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
