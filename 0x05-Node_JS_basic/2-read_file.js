const fs = require('fs');

function countStudents(fileName) {
  const dataObject = [];
  let data;
  try {
    data = fs.readFileSync(fileName, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const dataParse = data.split('\n');
  const dataHeaders = dataParse[0].split(',');
  const dataValue = dataParse.splice(1);

  for (let i = 0; i < dataValue.length; i += 1) {
    const dat = dataValue[i].split(',');
    const object = {};

    for (let j = 0; j < dat.length; j += 1) {
      object[dataHeaders[j].trim()] = dat[j].trim();
    }
    dataObject.push(object);
  }

  const validStudents = dataObject.filter((student) => student.age > 0);
  const noOfStuds = validStudents.length;
  console.log(`Number of students: ${noOfStuds}`);

  let csData = [];
  const csStudents = dataObject.filter((student) => student.field === 'CS');
  const noOfStudsCS = csStudents.length;
  csData = csStudents.map((obj) => obj.firstname).join(', ');
  console.log(`Number of studdents in CS: ${noOfStudsCS}. List: ${csData}`);

  let sweData = [];
  const swe = dataObject.filter((student) => student.field === 'SWE');
  const noOfstdSWE = swe.length;
  sweData = swe.map((obj) => obj.firstname).join(', ');
  console.log(`Number of studdents in CS: ${noOfstdSWE}. List: ${sweData}`);
}

module.exports = countStudents;
