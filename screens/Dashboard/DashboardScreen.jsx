import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CardLayout from "@/layouts/CardLayout";
import GridLayout from "@/layouts/GridLayout";
import useAuth from "@/hooks/useAuth";
import CardProfileSection from "@/sections/Dashboard/CardProfileSection";

ChartJS.register(ArcElement, Tooltip, Legend);

function DashboardScreen() {
  const { data_user } = useAuth();

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderColor: "rgba(255, 255, 255, 1)",
        hoverBorderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 4,
        // weight: 5,
        borderRadius: 4,
        // circumference: 180,
        rotation: 270,
        radius: 140, // Tamaño de la grafica
      },
    ],
  };

  return (
    <>
      <section className="dashboard__kpis m-6 xl:m-10">
        <GridLayout>
          <CardLayout custom="row-span-2">
            <CardProfileSection />
          </CardLayout>
          <CardLayout custom="row-span-2">
            <Doughnut data={data} />
          </CardLayout>
          <CardLayout>hola 3</CardLayout>
          <CardLayout>hola 4</CardLayout>
          <CardLayout>hola 5</CardLayout>
        </GridLayout>
      </section>
    </>
  );
}

export default DashboardScreen;
