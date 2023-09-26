import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../components/LocalStorage/LocalStorage";


const Statistics = () => {
    const totalDonation = useLoaderData();
    const yourDonation = getDataFromLS();

    const data = [
        ["title", "Donation"],
        ["Your Donation", yourDonation.length],
        ["Total Donation", totalDonation.length],
       
    ];
    const options = {
        legend: { position: "bottom"},
      };

    return (
        <div>
            <Chart
                data={data}
                chartType="PieChart"
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default Statistics;