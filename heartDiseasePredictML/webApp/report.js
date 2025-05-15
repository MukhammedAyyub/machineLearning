// Report
const reportData = {
  name: "John Smith",
  age: 58,
  gender: "Male",
  riskLevel: {
    level: "Moderate Risk",
    percent: "15%",
    description: "15% chance of developing heart disease in the next 10 years"
  },
  riskFactors: {
    count: 3,
    details: [
      "High blood pressure",
      "Elevated LDL cholesterol",
      "Family history"
    ]
  }
};

function renderReport(data) {
  const container = document.getElementById("reportContainer");

  container.innerHTML = `
    <p class="text-muted mb-4">${data.name} • ${data.age} years • ${data.gender}</p>

    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <div class="card-custom shadow-sm">
          <div class="card-icon">⚠️</div>
          <h6 class="text-uppercase text-muted mb-1">Risk Level</h6>
          <h5 class="fw-bold">${data.riskLevel.level}</h5>
          <p class="text-muted">${data.riskLevel.description}</p>
          <div class="d-flex gap-2">
            <button class="btn btn-purple">View Details</button>
            <button class="btn btn-outline-secondary">Print Report</button>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card-custom shadow-sm">
          <div class="card-icon">📊</div>
          <h6 class="text-uppercase text-muted mb-1">Risk Factors</h6>
          <h5 class="fw-bold">${data.riskFactors.count} Key Factors</h5>
          <p class="text-muted">${data.riskFactors.details.join(", ")}</p>
          <button class="btn btn-purple">See All Factors</button>
        </div>
      </div>
    </div>
  `;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderReport(reportData);
});


// Risk Report BreakDown
document.addEventListener("DOMContentLoaded", () => {
  renderReport();
  renderChart();
});

function renderReport() {
  const container = document.getElementById("reportContainer");

  container.innerHTML = `
    <div class="container py-4">
      <h2 class="mb-1 fw-bold">Heart Disease Risk Assessment Results</h2>
      <p class="text-muted">John Smith • 58 years • Male</p>

      <div class="row mb-4">
        <div class="col-md-6">
          <div class="p-4 bg-light rounded-4 shadow-sm">
            <div class="mb-3">
              <span class="d-inline-block fs-3">⚠️</span>
            </div>
            <small class="text-uppercase text-muted">Risk Level</small>
            <h5 class="fw-bold">Moderate Risk</h5>
            <p class="text-muted mb-3">15% chance of developing heart disease in the next 10 years</p>
            <button class="btn btn-primary btn-sm me-2">View Details</button>
            <button class="btn btn-outline-primary btn-sm">Print Report</button>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-4 bg-light rounded-4 shadow-sm">
            <div class="mb-3">
              <span class="d-inline-block fs-3">📈</span>
            </div>
            <small class="text-uppercase text-muted">Risk Factors</small>
            <h5 class="fw-bold">3 Key Factors</h5>
            <p class="text-muted mb-3">High blood pressure, elevated LDL cholesterol, and family history</p>
            <button class="btn btn-primary btn-sm">See All Factors</button>
          </div>
        </div>
      </div>

      <h5 class="fw-semibold mb-3">Risk Score Breakdown</h5>
      <canvas id="riskChart" height="150"></canvas>
    </div>
  `;
}

function renderChart() {
  const ctx = document.getElementById("riskChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Blood Pressure", "Cholesterol", "Age", "Smoking", "Diabetes", "Family History"],
      datasets: [{
        label: "Risk Contribution (%)",
        data: [75, 63, 55, 0, 0, 40],
        backgroundColor: "#6a0dad"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.parsed.y}%`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 20 }
        },
        x: {
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45
          }
        }
      }
    }
  });
}

// Health Matrix Summary
const healthMetrics = [
  { icon: "bi-heart-pulse", label: "Blood Pressure", value: "145/92 mmHg", status: "Above Target" },
  { icon: "bi-activity", label: "Heart Rate", value: "78 bpm", status: "Normal" },
  { icon: "bi-droplet", label: "Total Cholesterol", value: "215 mg/dL", status: "Borderline High" },
  { icon: "bi-droplet-half", label: "LDL Cholesterol", value: "142 mg/dL", status: "Above Target" },
  { icon: "bi-droplet-fill", label: "HDL Cholesterol", value: "38 mg/dL", status: "Below Target" },
  { icon: "bi-capsule", label: "Triglycerides", value: "165 mg/dL", status: "Borderline High" },
  { icon: "bi-thermometer-half", label: "Blood Glucose", value: "102 mg/dL", status: "Prediabetic Range" },
  { icon: "bi-person", label: "BMI", value: "27.4", status: "Overweight" },
];

const recommendations = [
  {
    title: "Lifestyle Modifications",
    desc: "Diet, exercise, and stress management plan",
    icon: "bi-stars"
  },
  {
    title: "Medication Review",
    desc: "Consider blood pressure and cholesterol medications",
    icon: "bi-capsule"
  },
  {
    title: "Follow-up Testing",
    desc: "Schedule lipid panel and glucose test in 3 months",
    icon: "bi-calendar2-check"
  },
];

const actions = [
  { text: "Schedule Follow-up", class: "btn btn-primary", href: "#" },
  { text: "Email Report", class: "btn btn-outline-secondary", href: "#" },
  { text: "Back to Dashboard", class: "btn btn-outline-secondary", href: "#" },
];

const app = document.getElementById("app");

// Health Metrics Summary
const metricsSection = document.createElement("div");
metricsSection.className = "mb-5";

const title = document.createElement("h5");
title.className = "mb-4";
title.textContent = "Health Metrics Summary";
metricsSection.appendChild(title);

healthMetrics.forEach((metric) => {
  const row = document.createElement("div");
  row.className = "d-flex justify-content-between align-items-center py-2 border-bottom";

  const left = document.createElement("div");
  left.className = "d-flex align-items-center gap-2";
  left.innerHTML = `<i class="bi ${metric.icon} text-muted"></i> <strong>${metric.label}</strong>`;

  const center = document.createElement("div");
  center.textContent = metric.value;

  const right = document.createElement("div");
  right.className = "text-end text-muted";
  right.textContent = metric.status;

  row.appendChild(left);
  row.appendChild(center);
  row.appendChild(right);
  metricsSection.appendChild(row);
});

app.appendChild(metricsSection);

// Recommendations
const recSection = document.createElement("div");
recSection.className = "mb-5";

const recTitle = document.createElement("h5");
recTitle.className = "mb-4";
recTitle.textContent = "Recommendations";
recSection.appendChild(recTitle);

recommendations.forEach((rec) => {
  const card = document.createElement("div");
  card.className = "d-flex justify-content-between align-items-center p-3 mb-3 bg-light rounded shadow-sm";

  const left = document.createElement("div");
  left.className = "d-flex align-items-start gap-3";
  left.innerHTML = `
    <i class="bi ${rec.icon} fs-4 text-primary"></i>
    <div>
      <div class="fw-semibold">${rec.title}</div>
      <small class="text-muted">${rec.desc}</small>
    </div>
  `;

  const arrow = document.createElement("i");
  arrow.className = "bi bi-chevron-right text-muted";

  card.appendChild(left);
  card.appendChild(arrow);
  recSection.appendChild(card);
});

app.appendChild(recSection);

// Action Buttons
const buttonSection = document.createElement("div");
buttonSection.className = "d-flex gap-2";

actions.forEach((action) => {
  const btn = document.createElement("a");
  btn.href = action.href;
  btn.className = action.class;
  btn.textContent = action.text;
  buttonSection.appendChild(btn);
});

app.appendChild(buttonSection);