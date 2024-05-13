class Студент {
    constructor(FirstName, LastName, year) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.year = year;
        this.оцінки = [];
        this.відвідування = new Array(25).fill(null);
        this.відвідуванняIndex = 0;
    }

    середній_бал() {
        if (this.оцінки.length === 0) return 0;
        return this.оцінки.reduce((sum, value) => sum + value, 0) / this.оцінки.length;
    }

    present() {
        if (this.відвідуванняIndex < 25) {
            this.відвідування[this.відвідуванняIndex++] = true;
        }
    }

    absent() {
        if (this.відвідуванняIndex < 25) {
            this.відвідування[this.відвідуванняIndex++] = false;
        }
    }

    summary() {
        const кількістьВідвідин = this.відвідування.filter(value => value === true).length;
        const кількістьЗанять = this.відвідування.filter(value => value !== null).length;
        const відвідуваність = кількістьЗанять ? кількістьВідвідин / кількістьЗанять : 0;
        const середнійБал = this.середній_бал();

        if (середнійБал > 90 && відвідуваність > 0.9) {
            return "Молодець!";
        } else if (середнійБал <= 90 || відвідуваність <= 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const students = [];
    const studentSelect = document.getElementById('studentSelect');
    const output = document.getElementById('output');

    document.getElementById('addStudentButton').addEventListener('click', () => {
        const FirstName = document.getElementById('FirstName').value;
        const LastName = document.getElementById('LastName').value;
        const year = parseInt(document.getElementById('year').value, 10);
        const новийСтудент = new Студент(FirstName, LastName, year);
        students.push(новийСтудент);
        const option = document.createElement('option');
        option.value = students.length - 1;
        option.textContent = `${FirstName} ${LastName}`;
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
                student.оцінки.push(grade);
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
