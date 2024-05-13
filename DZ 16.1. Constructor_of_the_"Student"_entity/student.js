class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
        this.attendanceIndex = 0;
    }

    averageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((sum, value) => sum + value, 0) / this.grades.length;
    }

    present() {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex++] = true;
        }
    }

    absent() {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex++] = false;
        }
    }

    summary() {
        const numVisits = this.attendance.filter(value => value === true).length;
        const numClasses = this.attendance.filter(value => value !== null).length;
        const attendanceRate = numClasses ? numVisits / numClasses : 0;
        const avgGrade = this.averageGrade();

        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Well done!";
        } else if (avgGrade <= 90 || attendanceRate <= 0.9) {
            return "Good, but can improve";
        } else {
            return "Needs significant improvement";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const students = [];
    const studentSelect = document.getElementById('studentSelect');
    const output = document.getElementById('output');

    document.getElementById('addStudentButton').addEventListener('click', () => {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const birthYear = parseInt(document.getElementById('birthYear').value, 10);
        const newStudent = new Student(firstName, lastName, birthYear);
        students.push(newStudent);
        const option = document.createElement('option');
        option.value = students.length - 1;
        option.textContent = `${firstName} ${lastName}`;
        studentSelect.appendChild(option);
    });

    document.getElementById('presentButton').addEventListener('click', () => {
        const student = students[studentSelect.value];
        if (student) student.present();
    });

    document.getElementById('absentButton').addEventListener('click', () => {
        const student = students[studentSelect.value];
        if (student) student.absent();
    });

    document.getElementById('addGradeButton').addEventListener('click', () => {
        const grade = parseInt(document.getElementById('grade').value, 10);
        if (!isNaN(grade)) {
            const student = students[studentSelect.value];
            if (student) {
                student.grades.push(grade);
                document.getElementById('grade').value = '';
            }
        }
    });

    document.getElementById('showSummaryButton').addEventListener('click', () => {
        const student = students[studentSelect.value];
        if (student) {
            output.textContent = student.summary();
        }
    });
});
