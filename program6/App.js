import {useEffect,useState} from 'react';
import './App.css';
function App()
{
  const [data,setData]=useState(null);
  const fetchData=async()=>{
    try{
      const response=await fetch('https://freetestapi.com/api/v1/birds');
      const apiData=await response.json();
      console.log(apiData);
      setData(apiData)
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
    },[]);
    return (
      <div className='App'>
        {data && (<table>
          <tr>
            {Object.keys(data[0]).map((keys)=>{
              return(<th>{keys}</th>)
            })}
          </tr>
          {data.map((rowData)=>{
            return(<tr>{Object.values(rowData).map((cellData)=>{
              return(<td>{cellData}</td>)
            })}</tr>)
          })}
        </table>)}
      </div>
    );
}
export default App;
