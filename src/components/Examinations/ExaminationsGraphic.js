import {
  BarChart,
  Tooltip,
  CartesianGrid,
  Legend,
  YAxis,
  Bar,
  XAxis,
  LineChart,
  Line,
} from "recharts";

const ExaminationGraphic = (props) => {
  const data = props.items
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="locationId" />
      <XAxis
        dataKey="locationId"
        axisLine={false}
        tickLine={false}
        interval={0}
        height={1}
        scale="band"
        xAxisId="quarter"
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="positive" fill="#8884d8" />
      <Bar dataKey="negative" fill="#82ca9d" />
      <Bar dataKey="pending" fill="#ff0000" />
    </BarChart>
  );
};

export default ExaminationGraphic;
