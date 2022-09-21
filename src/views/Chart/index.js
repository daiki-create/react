import { Chart, registerables } from "chart.js"
import { Line } from "react-chartjs-2"
import Header from '../../components/Header'

Chart.register(...registerables)

const Graph = () => {
  const labels = [
    "baby",
    "小学生",
    "中学生",
    "高校生",
    "大学生",
    "20代前半",
  ]
  const data = {
    labels: labels,
    datasets: [
      {
        label: "人生",
        data: [200, 50, 80, 60, 70, 90],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    responsive: false,
  }

  return (
    <>
    <Header />
    <Line height={300} width={400} data={data} options={options} />
    </>
  )
}

export default Graph