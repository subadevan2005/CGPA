// Function to Generate Subject Fields
function generateFields() {
    let numSubjects = document.getElementById("numSubjects").value;
    let table = document.getElementById("subjectTable");

    // Reset the table
    table.innerHTML = `
        <tr>
            <th>Subject</th>
            <th>Grade</th>
            <th>Credits</th>
        </tr>
    `;

    for (let i = 1; i <= numSubjects; i++) {
        let row = table.insertRow();
        row.innerHTML = `
            <td>Subject ${i}</td>
            <td>
                <select class="grade">
                    <option value="10">O</option>
                    <option value="9">A+</option>
                    <option value="8">A</option>
                    <option value="7">B+</option>
                    <option value="6">B</option>
                    <option value="5">C</option>
                    <option value="0">U</option>
                </select>
            </td>
            <td><input type="number" class="credit" min="1" max="5" value="3"></td>
        `;
    }
}

// Function to Calculate CGPA
function calculateCGPA() {
    let grades = document.getElementsByClassName("grade");
    let credits = document.getElementsByClassName("credit");
    let totalGradePoints = 0, totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        let grade = parseFloat(grades[i].value);
        let credit = parseFloat(credits[i].value);

        if (isNaN(credit) || credit <= 0) {
            alert("Please enter valid credit values!");
            return;
        }

        totalGradePoints += grade * credit;
        totalCredits += credit;
    }

    let cgpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById("cgpaResult").innerText = cgpa;
}
