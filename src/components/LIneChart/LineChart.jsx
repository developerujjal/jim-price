import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const LineChart = () => {

    const subMarks = [
        {"id": "S12345", "name": "John Doe", "math": 20, "english": 90, "bangla": 78, "science": 88},
        {"id": "S12346", "name": "Jane Smith", "math": 62, "english": 85, "bangla": 80, "science": 90},
        {"id": "S12347", "name": "Ali Ahmed", "math": 40, "english": 92, "bangla": 76, "science": 84},
        {"id": "S12348", "name": "Emily Johnson", "math": 51, "english": 89, "bangla": 82, "science": 95},
        {"id": "S12349", "name": "Michael Brown", "math": 37, "english": 80, "bangla": 85, "science": 79},
        {"id": "S12350", "name": "Sarah Davis", "math": 70, "english": 93, "bangla": 88, "science": 91},
        {"id": "S12351", "name": "David Wilson", "math": 84, "english": 86, "bangla": 79, "science": 82},
        {"id": "S12352", "name": "Linda Martinez", "math": 29, "english": 91, "bangla": 80, "science": 87},
        {"id": "S12353", "name": "James Garcia", "math": 65, "english": 78, "bangla": 84, "science": 76},
        {"id": "S12354", "name": "Jessica Rodriguez", "math": 92, "english": 94, "bangla": 90, "science": 93}
      ]
      
      

    return (
        <div>
            <div className='container'>
                <div>
                <LChart width={900} height={400} data={subMarks}>
                    <YAxis></YAxis>
                    <Line type="monotone" dataKey="math" stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey="english" stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey="bangla" stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey="science" stroke="#8884d8"></Line>
                    <CartesianGrid stroke="#ccc"></CartesianGrid>
                    <Tooltip></Tooltip>
                    <XAxis dataKey="name"></XAxis>
                </LChart>
                </div>
            </div>
        </div>
    );
};

export default LineChart;