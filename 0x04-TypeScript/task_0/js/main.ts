interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Selena',
  lastName: 'Quintanilla',
  age: 24,
  location: 'El paso',
};

const student2: Student = {
  firstName: 'Dua',
  lastName: 'Lipa',
  age: 27,
  location: 'London',
};

// create the table
const $table = document.createElement('table');

const studentsList: Student[] = [student1, student2];

// add header of table
const $trHeader = $table.insertRow(); //Create a new row
const keysOfStudent = Object.keys(student1);
keysOfStudent.forEach((headerTable: string) => {
  const $td = $trHeader.insertCell();
  $td.innerText = headerTable;
});

studentsList.forEach((student: Student) => {
  const $tr = $table.insertRow(); //Create a new row
  keysOfStudent.forEach((key: keyof typeof student) => {
    const $td = $tr.insertCell();
    if (student.hasOwnProperty(key)) {
      $td.innerText = student[key] as string;
    }
  });
});

document.body.appendChild($table);
