import React, { Component } from "react";
import { connect } from "react-redux";
import { renderSteps } from "./employee-actions";
import { Table } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
export class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.renderSteps();
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <h1 style={{ marginLeft: "500px" }}>
          {" "}
          <FormattedMessage id="employee-management-system" />
        </h1>
        <br />
        <Table dark style={{ width: "100px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>
                <FormattedMessage id="employee-name" />
              </th>
              <th>
                <FormattedMessage id="employee-salary" />
              </th>
              <th>
                <FormattedMessage id="employee-age" />
              </th>
              <th>ProfileImage</th>
            </tr>
          </thead>
          {data !== undefined && (
            <tbody>
              {data.map((input) => (
                <tr>
                  <td>{input.id}</td>
                  <td>{input.employee_name}</td>
                  <td>{input.employee_salary}</td>
                  <td>{input.employee_age}</td>
                  <td>{input.profile_images}</td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
        {/* <Button>Test Data</Button> */}
      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  data: state.employeeInformation.json,
});
export const mapDispatchToProps = {
  renderSteps,
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);
