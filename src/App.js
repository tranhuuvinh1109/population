
import './App.css';
import Chart from './components/Chart';
import CountrySelector from './components/CountrySelector';
import { useEffect, useState } from 'react'
import { getAllCountry, getPopulationOfTheCountry } from './api';
function App() {
  const [countries, setCountries] = useState([]);
  const [checkeCountry, setCheckeCountry] = useState([])
  const [clickedCountry, setClickedCountry] = useState()
  const [options, setOptions] = useState([])

  useEffect(() => {
    getAllCountry()
      .then(
        (res) => {
          console.log(res);
          setCountries(res.data.result);
        })
      .catch(
        (err) => {
          console.log(err);
        })



  }, [])

  useEffect(() => {
    const hanldeGetData = async () => {
      if (checkeCountry.filter(e => e.prefCode === clickedCountry.prefCode).length > 0) {
        const res = await getPopulationOfTheCountry(clickedCountry.prefCode, clickedCountry.prefName)

        setOptions((pre) => [...pre, res])

      } else {
        setOptions((pre) =>
          pre.filter(
            (option) => option.prefCode !== clickedCountry.prefCode
          )

        )
      }

    }
    hanldeGetData()

  }, [checkeCountry, clickedCountry])



  const handleOnChange = (id, name) => {
    // const value = e.target.valu
    console.log(id, name);
    setClickedCountry({
      prefCode: id,
      prefName: name
    });
    setCheckeCountry((pre) => {
      if (checkeCountry.filter(e => e.prefCode === id).length > 0) {
        return checkeCountry.filter((item) => item.prefCode !== id)
      } else {
        return [...pre, {
          prefCode: id,
          prefName: name
        }]
      }

    })
    console.log('s', checkeCountry);
  }



  return (
    <div className="App">
      <CountrySelector country={countries} checkeCountry={checkeCountry} handleOnChange={handleOnChange} />
      <Chart data={options} />
    </div>
  );
}

export default App;
