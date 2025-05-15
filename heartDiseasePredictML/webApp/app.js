const assessments = [
  {
    name: "John Doe",
    age: 58,
    gender: "Male",
    risk: { level: "High", percent: 78, class: "text-danger" },
    date: "Oct 15, 2023"
  },
  {
    name: "Jane Smith",
    age: 45,
    gender: "Female",
    risk: { level: "Low", percent: 12, class: "text-success" },
    date: "Oct 14, 2023"
  },
  {
    name: "Robert Johnson",
    age: 62,
    gender: "Male",
    risk: { level: "Medium", percent: 45, class: "text-warning" },
    date: "Oct 12, 2023"
  },
  {
    name: "Maria Garcia",
    age: 51,
    gender: "Female",
    risk: { level: "Medium", percent: 38, class: "text-warning" },
    date: "Oct 10, 2023"
  },
  {
    name: "David Wilson",
    age: 67,
    gender: "Male",
    risk: { level: "High", percent: 82, class: "text-danger" },
    date: "Oct 8, 2023"
  }
];

const tableBody = document.getElementById("assessment-table-body");

assessments.forEach(person => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><i class="bi bi-person"></i> ${person.name}</td>
    <td>${person.age}</td>
    <td>${person.gender}</td>
    <td class="${person.risk.class} fw-semibold">${person.risk.level} Risk (${person.risk.percent}%)</td>
    <td>${person.date}</td>
    <td>
      <i class="bi bi-eye me-2" style="cursor:pointer;"></i>
      <i class="bi bi-pencil-square" style="cursor:pointer;"></i>
    </td>
  `;
  tableBody.appendChild(tr);
});


const riskAnalyticsData = [
  {
    title: "Top Risk Factors",
    icon: "bi-activity",
    items: [
      "High Blood Pressure",
      "High Cholesterol",
      "Smoking",
      "Diabetes",
      "Obesity"
    ]
  },
  {
    title: "Age Distribution",
    icon: "bi-graph-up",
    items: [
      "30–45: 22%",
      "46–60: 38%",
      "61–75: 32%",
      "Over 75: 8%"
    ]
  }
];

const analyticsContainer = document.getElementById("risk-analytics");

riskAnalyticsData.forEach(card => {
  const col = document.createElement("div");
  col.className = "col-md-6";

  const cardDiv = document.createElement("div");
  cardDiv.className = "p-4 rounded shadow-sm bg-light";

  const icon = `<i class="bi ${card.icon} fs-4 me-2 text-primary"></i>`;
  const title = `<h6 class="fw-semibold mb-3">${icon}${card.title}</h6>`;

  let list = "<ol class='mb-0 ps-3'>";
  card.items.forEach(item => {
    list += `<li>${item}</li>`;
  });
  list += "</ol>";

  cardDiv.innerHTML = title + list;
  col.appendChild(cardDiv);
  analyticsContainer.appendChild(col);
});
