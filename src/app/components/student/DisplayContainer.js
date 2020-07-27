import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveData } from "../../actions/actions.js";
import { Table } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
export class DisplayContainer extends Component {
  componentDidMount() {
    this.props.retrieveData();
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
        <Table dark style={{ width: "500px", marginLeft: "500px" }}>
          <thead>
            <tr>
              <th>
                <FormattedMessage id="userId" />
              </th>
              <th>
                <FormattedMessage id="id" />
              </th>
              <th>
                <FormattedMessage id="title" />
              </th>
              <th>
                <FormattedMessage id="completed" />
              </th>
            </tr>
          </thead>
          {data !== undefined && (
            <tbody>
              {data.map((input) => (
                <tr>
                  <td>{input.userId}</td>
                  <td>{input.id}</td>
                  <td>{input.title}</td>
                  <td>{input.completed}</td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  data: state.dataInformation.json,
});
export const mapDispatchToProps = {
  retrieveData,
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);
