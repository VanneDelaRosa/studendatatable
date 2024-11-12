import React from "react";
import Table from "./Table";

import StudentItem from "./StudentItem";

const calculateAge = (birthDate) => {
  const birthDateCalc = new Date(birthDate);
  const today = new Date();
  return today.getFullYear() - birthDateCalc.getFullYear();
};

const StudentTable = ({ students }) => {
  const studentList = students.filter((student) => student.occupation === 1);

  return (
    <div className="student-table">
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Last Name</Table.ColumnHeader>
            <Table.ColumnHeader>First Name</Table.ColumnHeader>
            <Table.ColumnHeader>Course</Table.ColumnHeader>
            <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
            <Table.ColumnHeader>Age</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          {studentList.map((student, index) => (
            <StudentItem
              key={index}
              lastName={student.lastName}
              firstName={student.firstName}
              course={student.course}
              birthDate={student.birthDate}
              age={calculateAge(student.birthDate)}
            />
          ))}
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
};

export default StudentTable;
