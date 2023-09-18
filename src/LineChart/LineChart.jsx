import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Alice', math: 90, physics: 85, chemistry: 88 },
        { id: 2, name: 'Bob', math: 85, physics: 78, chemistry: 90 },
        { id: 3, name: 'Charlie', math: 78, physics: 80, chemistry: 85 },
        { id: 4, name: 'David', math: 92, physics: 89, chemistry: 92 },
        { id: 5, name: 'Emma', math: 88, physics: 91, chemistry: 84 },
        { id: 6, name: 'Frank', math: 76, physics: 75, chemistry: 79 },
        { id: 7, name: 'Grace', math: 95, physics: 96, chemistry: 94 },
        { id: 8, name: 'Hannah', math: 82, physics: 87, chemistry: 88 },
        { id: 9, name: 'Isaac', math: 89, physics: 84, chemistry: 90 },
        { id: 10, name: 'Jessica', math: 93, physics: 88, chemistry: 92 },
      ];
      
      
    return (
        <div>
            
            <LChart width={800} height={400} data={studentData}> 
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Line dataKey={'math'} stroke='red'></Line>
            <Line dataKey={'physics'} stroke='green'></Line>
            <Line dataKey={'chemistry'} stroke='black'></Line>

            </LChart>
            
        </div>
    );
};

export default LineChart;