import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Audio } from  'react-loader-spinner';

const Phone = () => {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map(phone =>{
            const obj = {
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])

            }
            return obj;
        })
        setPhones(phoneWithFakeData);
        setLoading(false);
        
    }
       )

    },[])

    
    
    return (
     <div>
        {
            loading && <div>
             <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
             />
            </div>

        }

        
        <h2 className="text-4xl font-bold mt-8">Phones: {phones.length}</h2>
        <BarChart
          width={1200}
          height={600}
          data={phones}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
         
        </BarChart>
            
     </div>
    );
};

export default Phone;