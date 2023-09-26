import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../components/LocalStorage/LocalStorage";


const Statistics = () => {
    let totalDonation = useLoaderData();
    let yourDonation = getDataFromLS();

    if(yourDonation.length >12){
        yourDonation.length = 12;
    }

    const data = [
        ["title", "Donation"],
        ["Your Donation", yourDonation.length],
        ["Total Donation", totalDonation.length-yourDonation.length],
       
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
                height={"600px"}
            />
        </div>
    );
};

export default Statistics;