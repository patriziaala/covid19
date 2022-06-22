import {
  BarChart,
  Tooltip,
  CartesianGrid,
  Legend,
  YAxis,
  Bar,
  XAxis
} from "recharts";

const ExaminationGraphic = (props) => {
  const data = props.items
  return (
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{ top: 25, right: 30, left: 20, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="locationId" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="positive" fill="#ff0000" />
      <Bar dataKey="negative" fill="#82ca9d" />
      <Bar dataKey="pending" fill="#8884d8" />
    </BarChart>
    
  );
};

export default ExaminationGraphic;
