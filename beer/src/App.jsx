import { useEffect, useState } from 'react'
import Itemview from './components/Itemview';


export default function App() {


  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => { getData() }, [])

  const getData = async () => {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?per_page=15`);
    const data = await response.json();
    setData(data);
    setFilteredData(data)
    console.log(filteredData)
  }

  function filterSmall() {
    const filtered_content = data.filter(item => {
      return item.latitude <= 44;
    })
    setFilteredData(filtered_content);
  }

  function filterLarge() {
    const filtered_content = data.filter(item => {
      return item.latitude > 44;
    })
    setFilteredData(filtered_content);
  }

  function resetFilter() {
    setFilteredData(data)
  }





  return (
    <div className="App">

      <div>
        <h1>Brewery Data: CLick to filter </h1>
        <button onClick={filterLarge}> Lat greater than 40 Only</button>
        <br />
        <button onClick={filterSmall}> Lat smaller than 40 Only</button>
        <br />
        <button onClick={resetFilter}> All </button>
      </div>

      <div>
        {filteredData.map(item => (
            <Itemview name={item.name} type={item.brewery_type} state={item.state} id={item.id} />
        ))
        }


      </div>
    </div>
  )
}




