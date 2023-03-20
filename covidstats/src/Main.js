import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Main(){

    const[coviddata, setcoviddata]=useState([])

    useEffect(()=>{
        axios.get('https://api.covid19api.com/summary').then(res=>{
            console.log(res.data)
            setcoviddata(res.data.Countries)
        }).catch(err=>{console.log(err)})
    },[coviddata])

    const tabledata=coviddata.map(obj=>{
        return <tr> 
            <td>{obj.Country}</td>
            <td>{obj.TotalConfirmed}</td>
            <td>{obj.TotalConfirmed- obj.TotalRecovered}</td>
            <td>{obj.TotalRecovered}</td>
            <td>{obj.TotalDeaths}</td>
        </tr>
    })

   return(
        <div>
            <h1 className='m-5' style={{backgroundColor:'black' , color:'white'}}>CovidStats</h1>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <table id='mytable' className='table table-bordered'>
                        <tbody>
                        <tr>
                            <th>Country</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                        </tbody>

                        <tbody>
                            {tabledata}
                        </tbody>
    
                    </table>
                </div>
            </div>
        </div>
    )
}