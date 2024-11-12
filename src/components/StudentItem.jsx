import React from "react";
import Table from "./Table";
import "../index.css";


const StudentItem = ({ lastName, firstName, course, birthDate, age }) => {
  return (
    <Table.Row className="student-item">
      <Table.Column className="studentColumnItem">{lastName}</Table.Column>
      <Table.Column className="studentColumnItem">{firstName}</Table.Column>
      <Table.Column className="studentColumnItem">{course}</Table.Column>
      <Table.Column className="studentColumnItem">{birthDate}</Table.Column>
      <Table.Column className="studentColumnItem">{age}</Table.Column>
    </Table.Row>
  );
};

export default StudentItem;
