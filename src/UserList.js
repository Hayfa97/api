import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { Cards } from './Cards';


export const UserList = () => {
    const [listOfUSer, setListOfUSer]= useState([]);
    useEffect(() => {
        const fetchUser= async () => {
            try {
            const {data}= await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            console.log(data);
            setListOfUSer(data);
        } catch (error) {
            console.log(error)
        }
        
        };
        fetchUser();
    }, [])
    return (
        <div className='abc' style={{display:'flex', flexWrap:'wrap',justifyContent:'center',justifyContent:'space-arround' }}>
            {
              listOfUSer.map(
                  (userr,i)=> <Cards key={i} userr={userr}/>
              )
          }
        </div>
    )
}
