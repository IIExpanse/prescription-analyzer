import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];

const RenderLineChart = () => {
    const data = [
        { name: 'Янв.', uv: 150, pv: 2400, amt: 2600 },
        { name: 'Фев.', uv: 120, pv: 2400, amt: 2700 },
        { name: 'Мар.', uv: 120, pv: 2400, amt: 2800 },
        { name: 'Апр.', uv: 130, pv: 2400, amt: 2900 },
        { name: 'Май', uv: 125, pv: 2400, amt: 2900 },
        { name: 'Июн.', uv: 80, pv: 2400, amt: 2900 },
        { name: 'Июл.', uv: 60, pv: 2400, amt: 2900 },
        { name: 'Авг.', uv: 60, pv: 2400, amt: 2900 },
        { name: 'Сен.', uv: 60, pv: 2400, amt: 2900 },
        { name: 'Окт.', uv: 90, pv: 2400, amt: 2900 },
        { name: 'Ноя.', uv: 90, pv: 2400, amt: 2900 },
        { name: 'Дек.', uv: 80, pv: 2400, amt: 2900 },
    ];

    return (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#1EB4FF" />
            <CartesianGrid stroke="#B3E6FF" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
}
export default RenderLineChart;