// Patient's information
const fields = [
  {
    label: "First Name",
    type: "text",
    placeholder: "Enter first name",
    id: "firstName"
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Enter last name",
    id: "lastName"
  },
  {
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    id: "age"
  },
  {
    label: "Gender",
    type: "select",
    id: "gender",
    options: ["Select gender", "Male", "Female", "Other"]
  }
];

const formFieldsContainer = document.getElementById("form-fields");

fields.forEach(field => {
  const col = document.createElement("div");
  col.className = "col-md-6";

  const label = `<label for="${field.id}" class="form-label">${field.label}</label>`;

  let input;
  if (field.type === "select") {
    input = `<select class="form-select bg-light border-0" id="${field.id}">
      ${field.options.map(opt => `<option>${opt}</option>`).join("")}
    </select>`;
  } else {
    input = `<input type="${field.type}" id="${field.id}" class="form-control bg-light border-0" placeholder="${field.placeholder}">`;
  }

  col.innerHTML = label + input;
  formFieldsContainer.appendChild(col);
});


// Health Matrix
const healthMetrics = [
  {
    label: "Blood Pressure (mmHg)",
    placeholder: "Systolic/Diastolic (e.g., 120/80)",
    id: "bloodPressure"
  },
  {
    label: "Heart Rate (bpm)",
    placeholder: "Enter heart rate",
    id: "heartRate"
  },
  {
    label: "Cholesterol (mg/dL)",
    placeholder: "Enter total cholesterol",
    id: "cholesterol"
  },
  {
    label: "HDL Cholesterol (mg/dL)",
    placeholder: "Enter HDL level",
    id: "hdlCholesterol"
  },
  {
    label: "LDL Cholesterol (mg/dL)",
    placeholder: "Enter LDL level",
    id: "ldlCholesterol"
  },
  {
    label: "Triglycerides (mg/dL)",
    placeholder: "Enter triglycerides level",
    id: "triglycerides"
  },
  {
    label: "Blood Glucose (mg/dL)",
    placeholder: "Enter fasting blood glucose",
    id: "bloodGlucose"
  },
  {
    label: "BMI",
    placeholder: "Enter BMI",
    id: "bmi"
  }
];

const healthFieldsContainer = document.getElementById("health-fields");

healthMetrics.forEach(metric => {
  const col = document.createElement("div");
  col.className = "col-md-6";

  const label = `<label for="${metric.id}" class="form-label">${metric.label}</label>`;
  const input = `<input type="text" id="${metric.id}" class="form-control bg-light border-0" placeholder="${metric.placeholder}">`;

  col.innerHTML = label + input;
  healthFieldsContainer.appendChild(col);
});

// Risk Factors
const riskData = [
  {
    label: "Smoking Status",
    description: "Select current smoking status",
    id: "smokingStatus",
    type: "select",
    options: ["Non-smoker", "Former smoker", "Current smoker"]
  },
  {
    label: "Diabetes",
    description: "Does the patient have diabetes?",
    id: "diabetes",
    type: "switch"
  },
  {
    label: "Family History of Heart Disease",
    description: "Immediate family members with heart disease",
    id: "heartHistory",
    type: "switch"
  },
  {
    label: "Physical Activity",
    description: "Regular exercise (>150 min/week)",
    id: "physicalActivity",
    type: "switch"
  }
];

const riskContainer = document.getElementById("risk-factors");

riskData.forEach(risk => {
  const wrapper = document.createElement("div");
  wrapper.className = "d-flex justify-content-between align-items-center mb-3";

  const labelSide = document.createElement("div");
  labelSide.innerHTML = `<div class="fw-semibold">${risk.label}</div>
                         <small class="text-muted">${risk.description}</small>`;

  const inputSide = document.createElement("div");

  if (risk.type === "switch") {
    inputSide.innerHTML = `
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="${risk.id}">
      </div>
    `;
  } else if (risk.type === "select") {
    const select = document.createElement("select");
    select.className = "form-select bg-light border-0";
    select.id = risk.id;

    const defaultOption = document.createElement("option");
    defaultOption.text = "Select";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    risk.options.forEach(opt => {
      const option = document.createElement("option");
      option.text = opt;
      select.appendChild(option);
    });

    inputSide.appendChild(select);
  }

  wrapper.appendChild(labelSide);
  wrapper.appendChild(inputSide);
  riskContainer.appendChild(wrapper);
});
