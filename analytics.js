
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ["North", "South", "East", "West"],
                datasets: [{
                    label: "Sales Revenue ($)",
                    data: [15000, 12000, 9000, 7500], // Sales revenue for each region
        
        borderWidth: 1,

        backgroundColor: ['#4B0082', '#6A5ACD', '#C3B1E1', '#7851A9', '#3D0066'],
        borderColor: '#F8F6FF',
      }]
    },
    
    options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top"
                    },
                    title: {
                        display: true,
                        text: "Sales Revenue by Region ($)"
                    }
                }
            }
  });

  
  const ctx1 = document.getElementById("salesChart").getContext("2d");

  const salesChart = new Chart(ctx1, {
      type: "bar",
      data: {
          labels: ["Online Store", "Physical Store", "Mobile App"],
          datasets: [{
              label: "Number of Transactions",
              data: [1200, 950, 780], // Sample sales data
             backgroundColor: ['#4B0082', '#6A5ACD', '#C3B1E1', '#7851A9', '#3D0066'],
        borderColor: '#F8F6FF',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: "Transactions"
                  }
              },
              x: {
                  title: {
                      display: true,
                      text: "Sales Channels"
                  }
              }
          }
      }
  });