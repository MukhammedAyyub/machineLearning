const ctx = document.getElementById('riskChart').getContext('2d');
    const riskChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['0–10%', '11–20%', '21–30%', '31–40%', '41–50%', '51–60%', '61–70%', '71–80%', '81–90%', '91–100%'],
        datasets: [{
          label: 'Patients',
          data: [32, 27, 17, 13, 9, 8, 6, 4, 2, 2],
          backgroundColor: '#000000',
          borderRadius: 5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    