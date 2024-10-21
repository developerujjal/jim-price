import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis,YAxis, Tooltip } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const allData = data.data.data;
                const phoneWithFakeData = allData.map((item) => {
                    const obj = {
                        name: item.phone_name,
                        price: parseInt(item.slug.split('-')[1])
                    }
                    return obj;
                })

                setPhones(phoneWithFakeData)
            })
    }, [])


    console.log(phones)
    return (
        <div>
            <div className="container">
                    <BarChart width={1200} height={600} data={phones}>
                        <YAxis></YAxis>
                        <Bar dataKey='price' fill="#8884d8"></Bar>
                        <XAxis dataKey='name'></XAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
            </div>
        </div>
    );
};

export default Phones;