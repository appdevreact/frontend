import React, { Component } from "react";
import { connect } from "react-redux";
import  {renderSteps}  from "./employee-actions";
import { Table } from 'reactstrap';
export class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.renderSteps();
  }

  render() {
    const { data } = this.props;
   console.log('>>>>>>>>.data>>>>>>>',data)
    return(
      <div>
<h1 style={{marginLeft:'500px'}}>Employee Management System</h1><br/>
<Table dark style={{width:'100px'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>EmployeeName</th>
          <th>EmployeeSalary</th>
          <th>EmployeeAge</th>
          <th>ProfileImage</th>
        </tr>
      </thead>
      {data!==undefined &&
      <tbody>
        
      {data.map(input => (
        <tr>
  
  <td >{input.id}</td>
  <td>{input.employee_name}</td>
  <td>{input.employee_salary}</td>
  <td>{input.employee_age}</td>
  <td>{input.profile_images}</td>  
         </tr>
         ))}
        </tbody>    }    
        </Table>
      </div>
    )}
  
}
export const mapStateToProps = state => ({
  data: state.employeeInformation.json
});
export const mapDispatchToProps = {
  renderSteps
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);
