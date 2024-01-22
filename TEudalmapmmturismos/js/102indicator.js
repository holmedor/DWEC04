'use strict';

console.log("Peticiones AJAX: grupos");
////////////////////////////////////////////////////
        // Chart configuration
        var optionsChart = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
        class dataset {
            constructor(label, data) {
                this.label = label;
                this.data = data;
                this.backgroundColor = 'rgba(75, 192, 192, 0.2)';
                this.borderColor = 'rgba(75, 192, 192, 1)';
                this.borderWidth = 1;
            }
        }
        class dataChart {
            constructor(labels, datasets) {
                this.labels = labels;
                this.datasets = datasets;
            }
        }
////////////////////////////////////////////////////
var datos, total;
var desde = 0;
const intervalo = 10;
var url ="https://api.euskadi.eus/udalmap/indicators/102?lang=SPANISH"
function pedirDatos() {
    return new Promise(function (resolve, reject) {
        $.ajax({ //JQUERY
            url: url,
            success: function (data) {
                console.log('Pedir datos')

                //resuelve la promesa y va al then() de la función
                resolve(data)
            },
            error: function (error) {

                //rechaza la promesa y va al catch() de la función
                reject(error)
            }
        })
    })
}
/* */
function pintar(data) {
    data.entities.forEach(item => {
        var mylabels = [];
        var myvalues = [];
        let valores = item.years[0];
        for (var property in valores) {
            console.log("property: ", property);
            console.log(`${property}: ${valores[property]}`);
            mylabels.push(`${property}`);
            myvalues.push(`${valores[property]}`);
        }
        //        console.log("mylabels:", mylabels);
        //        console.log("myvalues:", myvalues);
        //        console.log(dataChart);
        //        console.log(dataChart['labels']);
        //        console.log(dataChart['datasets'][0]['data']);
        //const miDataSet = $('<div></div>').text("miDataSet: " + item.id + " " + " " + item.name + " " + myvalues + " " + mylabels);
        var myDataset = new dataset(item.name, myvalues);
        var myDataSets = [];
        myDataSets.push(myDataset);
        var myDataChart = new dataChart(mylabels, myDataSets);
        //        dataChart['datasets'][0]['label']="apinrel";
        //                dataChart['datasets']['data'].push(myvalues);
        //                dataChart['labels'] = mylabels;
        //                miDataChart.push(dataChart);
        //                console.log("dataChart: ", dataChart);
        //                console.log("miDataChart: ", miDataChart);
        //const listItem = $('<li></li>').text(item.id + " " + item.name + " " + mylabels + " " + myvalues + " " + dataChart.label);
        //dataList.append(listItem);
        //dataList.append(miDataSet);
        const ctx = document.getElementById(item.id).getContext('2d');
        //    if (myChart) {
        //        myChart.destroy();
        //    }
        new Chart(ctx, {
            type: 'line',
            data: myDataChart,
            options: optionsChart
        });
    });
}
/////////////////////////////////////
//////////MAIN///////////////
pedirDatos()
    .then(function (data) { //JS
        //cuando resuelve la promesa ejecuta este codigo
        datos = data
        console.log(datos)
        pintar(datos)
    })
    .catch(function (err) { //JS
        //cuando la promesa es rechazada ejecuta este código
        console.log(err)
    })

    /*
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sample Data',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
        }]
    */
//    grafico(dataChart,optionsChart);
    