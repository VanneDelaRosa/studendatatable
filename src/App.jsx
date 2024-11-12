import { useState } from "react";
import "./App.css";
import FilterStudentTable from "./components/FilterStudentTable";
import SearchBar from "./components/SearchBar";
import StudentTable from "./components/StudentTable";

const students = [
  {
    id: 1,
    lastName: "Dela Rosa",
    firstName: "Vanne",
    course: "IS",
    birthDate: "2003/10/18",
    occupation: 1,
  },
  {
    id: 2,
    lastName: "De Los Santos",
    firstName: "Elijah",
    course: "IS",
    birthDate: "2002/12/19",
    occupation: 1,
  },
  {
    id: 3,
    lastName: "Kogachi",
    firstName: "Hidemi",
    course: "IS",
    birthDate: "2002/08/17",
    occupation: 1,
  },
  {
    id: 4,
    lastName: "Canacan",
    firstName: "Ace",
    course: "IS",
    birthDate: "2002/05/20",
    occupation: 1,
  },
  {
    id: 5,
    lastName: "Silvosa",
    firstName: "Juliana",
    course: "IS",
    birthDate: "2003/01/16",
    occupation: 1,
  },
  {
    id: 6,
    lastName: "Mendrico",
    firstName: "Charles",
    course: "IS",
    birthDate: "2002/07/15",
    occupation: 1,
  },
  {
    id: 7,
    lastName: "Fernandez",
    firstName: "Vince",
    course: "IS",
    birthDate: "2003/04/14",
    occupation: 1,
  },
  {
    id: 8,
    lastName: "Reyes",
    firstName: "Ethan",
    course: "CS",
    birthDate: "2004/03/12",
    occupation: 1,
  },
  {
    id: 9,
    lastName: "Cruz",
    firstName: "Lucas",
    course: "DS",
    birthDate: "2001/11/23",
    occupation: 1,
  },
  {
    id: 10,
    lastName: "Villaneuva",
    firstName: "Mia",
    course: "IT",
    birthDate: "1999/12/31",
    occupation: 1,
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const filteredStudents = students.filter((student) => {
    const birthDate = new Date(student.birthDate);
    const calculatedAge = new Date().getFullYear() - birthDate.getFullYear();
    const min = new Date(minDate);
    const max = new Date(maxDate);

    const isAgeMatch = calculatedAge.toString() === query;

    return (
      (!minDate || birthDate >= min) &&
      (!maxDate || birthDate <= max) &&
      (student.lastName.toLowerCase().includes(query.toLowerCase()) ||
        student.firstName.toLowerCase().includes(query.toLowerCase()) ||
        student.course.toLowerCase().includes(query.toLowerCase()) ||
        student.birthDate.toLowerCase().includes(query.toLowerCase()) ||
        isAgeMatch)
    );
  });

  // Reset dates
  const clearDates = () => {
    setMinDate("");
    setMaxDate("");
  };

  return (
    <>
      <h1>Data Table</h1>
      <FilterStudentTable>
        <SearchBar
          query={query}
          setQuery={setQuery}
          minDate={minDate}
          setMinDate={setMinDate}
          maxDate={maxDate}
          setMaxDate={setMaxDate}
          clearDates={clearDates}
        />
        <StudentTable students={filteredStudents} />
      </FilterStudentTable>
    </>
  );
}

export default App;
