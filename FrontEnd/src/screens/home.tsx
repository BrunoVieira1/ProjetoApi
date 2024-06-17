import { Component } from "react";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import { Api } from "../services/api/axios-config";

interface Entry {
  id: number;
  id_produto: number;
  qtde: number;
  valor_unitario: number;
  data_entrada: string;
}

function get() {
  console.log("teste");
  /* async function getProductEntry() {
    try {
      setTimeout(async () => {
        const entryData = await Api.get("/entradaProdutos", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setEntry(entryData.data.produtosEntry);
        console.log(entryData.data.produtosEntry);
      }, 1000);
    } catch (e) {
      console.error("erro", e);
    }
  }
  useEffect(() => {
    getProductEntry();
  }, []);
  const [entry, setEntry] = useState<Entry[]>([]); */
}

class Home extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

get();

export default Home;
