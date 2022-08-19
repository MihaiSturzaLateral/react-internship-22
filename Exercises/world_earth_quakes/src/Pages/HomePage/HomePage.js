import React,{useEffect, useState} from 'react'
import './HomePage.css'
import ListComponent from '../../Components/ListComponent/ListComponent';
import MapComponent from '../../Components/MapComponent/MapComponent';

    function HomePage() {

        const [data, setData] = useState([]);
        const [timeFrame,setTimeFrame]=useState('hour');
        const [mg,setMg]=useState('all');

        function handleChangeMagnitude(event) {
            setMg(event.target.value);
        }
        
       
        useEffect(() =>{
            async function fetchData(){
                const response = await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mg}_${timeFrame}.geojson`);
                const result = await response.json();
                setData(result);
            }
            fetchData();
        },[mg,timeFrame]);

        return (
            <>
                <div className='buttonSection'>
                    <div className='navButtons'>
                       <button onClick={()=>{
                        setTimeFrame('hour');
                    }}>
                        Past Hour
                      </button>
                       <button onClick={()=>{
                            setTimeFrame('day');
                       }}>
                        Past Day
                        </button>
                       <button onClick={()=>{
                         setTimeFrame('week');
                       }}>
                        Past 7 Days</button>
                       <button onClick={()=>{
                        setTimeFrame('month');
                       }}>
                        Past 30 Days</button>
                    </div>
                    <div className='dropdown'>
                        <label>
                             Magnitude
                        
                        <select className='selectDropdown' value={mg} onChange={handleChangeMagnitude}>
                            <option value='all'>Any</option>
                            <option value='4.5'>4.5+</option>
                            <option value='2.5'>2.5+</option>
                            <option value='1'>1+</option>
                        </select>
                        </label>
                    </div>
                </div>
                
                <section className='homeImgScrollableList'>
                    <div className='homeMapImg'>

                       {data&& <MapComponent earthquakes={data}/> }

                    </div>
                    <div className='scrollable'>
                        
                       <div>
                            {data?.features?.map((el)=>{
                                const {ids,mag,title,detail}=el.properties;
                                
                                return(
                                    <div key={ids}>
                                    <ListComponent ids={ids} mag={mag} title={title} detail={detail}/>
                                    </div>
                                )
                            })}
                       </div>
                    </div>
                </section>
            </>
        );
    }  
export default HomePage;