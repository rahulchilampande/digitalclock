import { useState } from 'react';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();

  const [ctime, setCtime] = useState(time);
  const [cdate, setDate] = useState();
  const [cmonth, setMonth] = useState();
  const [cyear, setYear] = useState();

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  const Updatedate = () => {
    let date = new Date().getDate();
    setDate(date);
  };

  setInterval(Updatedate);

  const Updatemonth = () => {
    let month = new Date().getMonth() + 1;
    setMonth(month);
  };

  setInterval(Updatemonth);

  const Updateyear = () => {
    let year = new Date().getFullYear();
    setYear(year);
  };

  setInterval(Updateyear);

  return (
    <div className='App'>
      <h1>{ctime}</h1>
      <h2>
        {cdate}-{cmonth}-{cyear}
      </h2>

      <p className='asch'>#Created by Rahul Chilampande</p>
    </div>
  );
}

export default App;
