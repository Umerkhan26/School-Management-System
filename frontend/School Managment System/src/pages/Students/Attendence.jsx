import { useState } from "react";
import Sidebar from "./Sidebar";
import { Form, Button, Table, Row, Col, Modal } from "react-bootstrap";
import { IoChevronDown } from "react-icons/io5"; // Importing the chevron down icon
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

const AttendanceSection = () => {
  const initialAttendanceData = {
    "Class 1": [
      { regNo: "001", name: "John ", status: "Present" },
      { regNo: "002", name: "Jane ", status: "Absent" },
      { regNo: "003", name: "JFoster ", status: "Absent" },
      { regNo: "004", name: "Thor ", status: "Absent" },
      { regNo: "005", name: "Warner ", status: "Absent" },
      { regNo: "006", name: "Cummins ", status: "Absent" },
    ],
    "Class 2": [
      { regNo: "001", name: "Doe", status: "Present" },
      { regNo: "002", name: "Jeo", status: "Absent" },
      { regNo: "003", name: "Smith", status: "Absent" },
      { regNo: "004", name: "Pat", status: "Absent" },
      { regNo: "005", name: "Starc", status: "Absent" },
      { regNo: "006", name: "Peter", status: "Absent" },
      { regNo: "007", name: "Mc", status: "Absent" },
    ],
    "Class 3": [
      { regNo: "001", name: "Sam ", status: "Present" },
      { regNo: "002", name: "Lucy ", status: "Absent" },
      { regNo: "003", name: "Lucky ", status: "Absent" },
      { regNo: "004", name: "Larn ", status: "Absent" },
      { regNo: "005", name: "Jick", status: "Absent" },
      { regNo: "006", name: "Hulk ", status: "Absent" },
      { regNo: "007", name: "Spider ", status: "Absent" },
    ],
    "Class 4": [
      { regNo: "001", name: " Brown", status: "Present" },
      { regNo: "002", name: " Black", status: "Absent" },
      { regNo: "003", name: " Blachkl", status: "Absent" },
      { regNo: "004", name: " Blaho", status: "Absent" },
      { regNo: "005", name: " Blabi", status: "Absent" },
      { regNo: "006", name: " Blacksdd", status: "Absent" },
    ],
    "Class 5": [
      { regNo: "001", name: "Sam ", status: "Present" },
      { regNo: "002", name: "Wick", status: "Absent" },
      { regNo: "003", name: "Pick", status: "Absent" },
      { regNo: "004", name: "Sick", status: "Absent" },
      { regNo: "005", name: "Jick", status: "Absent" },
    ],
    "Class 6": [
      { regNo: "001", name: "Sam ", status: "Present" },
      { regNo: "002", name: "Wick", status: "Absent" },
      { regNo: "003", name: "Pick", status: "Absent" },
      { regNo: "004", name: "Sick", status: "Absent" },
      { regNo: "005", name: "Jick", status: "Absent" },
    ],
    // Add more initial data for other classes if needed
  };

  const [showAttendance, setShowAttendance] = useState(false);
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
  const [newStudent, setNewStudent] = useState({
    regNo: "",
    name: "",
    status: "",
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState("Class 1");

  const handleManageAttendance = () => {
    setShowAttendance(true);
  };

  const handleSaveChanges = () => {
    const updatedData = { ...attendanceData };
    updatedData[selectedClass] = updatedData[selectedClass].map((student) => ({
      ...student,
      editing: false, // Remove edit mode flag
    }));
    setAttendanceData(updatedData);
  };

  const handleSaveChangesLocally = () => {
    const updatedData = { ...attendanceData };
    updatedData[selectedClass] = updatedData[selectedClass].map((student) => ({
      ...student,
      editing: false, // Remove edit mode flag
    }));
    setAttendanceData(updatedData);
    setShowAttendance(false); // Navigate back to manage attendance form
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedData = { ...attendanceData };
    updatedData[selectedClass] = updatedData[selectedClass].map((item, i) =>
      i === index ? { ...item, status: newStatus } : item
    );
    setAttendanceData(updatedData);
  };

  const renderAttendanceRows = () => {
    return attendanceData[selectedClass].map((student, index) => (
      <tr key={index}>
        <td>{student.regNo}</td>
        <td>{student.name}</td>
        <td>
          {student.editing ? (
            <div style={{ position: "relative" }}>
              <Form.Control
                as="select"
                value={student.status}
                onChange={(e) => handleStatusChange(index, e.target.value)}
                style={{
                  paddingRight: "2rem", // Adjusting padding for icon space
                  position: "relative",
                }}
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </Form.Control>
              <IoChevronDown
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          ) : (
            student.status
          )}
        </td>
        <td>
          {student.editing && (
            <Button
              variant="success"
              onClick={() => handleSaveChanges()}
              className="mr-2"
            >
              Save
            </Button>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ display: "contents" }}>
          <div className="content">
            <h1 className="mb-3" style={{ color: "black" }}>
              Attendance
            </h1>
            <div
              className="input-group mb-3"
              style={{ width: "81%", marginLeft: "17px" }}
            >
              <input
                type="text"
                style={{
                  border: "1px solid black",
                  paddingLeft: "2.5rem",
                  borderRadius: "6px",
                }}
                className="form-control"
                placeholder="Search by class name or reg no"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <FaSearch
                style={{
                  position: "absolute",
                  left: "17px",
                  top: "40%",
                  transform: "translateY(-50%)",
                  fontSize: "16px",
                  color: "#ccc",
                }}
              />
            </div>

            {!showAttendance && (
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="selectDate">
                      <Form.Label style={{ color: "black" }}>
                        Select Date
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          as="select"
                          style={{
                            border: "1px solid black",
                            paddingRight: "2rem",
                          }}
                        >
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                        </Form.Control>
                        <IoChevronDown
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "72%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            fontSize: "22px",
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="selectMonth">
                      <Form.Label style={{ color: "black" }}>
                        Select Month
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          as="select"
                          style={{
                            border: "1px solid black",
                            paddingRight: "2rem",
                          }}
                        >
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                        </Form.Control>
                        <IoChevronDown
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "72%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            fontSize: "22px",
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="selectYear">
                      <Form.Label style={{ color: "black" }}>
                        Select Year
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          as="select"
                          style={{
                            border: "1px solid black",
                            paddingRight: "2rem",
                          }}
                        >
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                        </Form.Control>
                        <IoChevronDown
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "72%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            fontSize: "22px",
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="selectClass">
                      <Form.Label style={{ color: "black" }}>
                        Select Class
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          as="select"
                          value={selectedClass}
                          onChange={(e) => setSelectedClass(e.target.value)}
                          style={{
                            border: "1px solid black",
                            paddingRight: "2rem",
                          }}
                        >
                          <option value="Class 1">Class 1</option>
                          <option value="Class 2">Class 2</option>
                          <option value="Class 3">Class 3</option>
                          <option value="Class 4">Class 4</option>
                          <option value="Class 5">Class 5</option>
                          <option value="Class 6">Class 6</option>
                        </Form.Control>
                        <IoChevronDown
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "72%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            fontSize: "22px",
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  onClick={handleManageAttendance}
                  style={{
                    backgroundColor: "#2D80E1",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    border: "none",
                  }}
                >
                  Show Attendance
                </Button>
              </Form>
            )}

            {showAttendance && (
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Registration No</th>
                      <th>Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{renderAttendanceRows()}</tbody>
                </Table>

                <Button
                  onClick={handleSaveChangesLocally}
                  style={{
                    backgroundColor: "#2D80E1",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    border: "none",
                  }}
                >
                  Hide
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="regNo">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control
                type="text"
                value={newStudent.regNo}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, regNo: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={newStudent.name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={newStudent.status}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, status: e.target.value })
                }
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default AttendanceSection;
