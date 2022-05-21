import React from "react";
import {Label, Input} from "reactstrap";
import PropTypes from "prop-types";

const ViewController = ({view,changeView}) =>(
    <div className="d-flex" >
        <Label for='list-view' className="mr-4" >
            <Input
                type="radio"
                name="view"
                id="list-view"
                value="list"
                onChange={changeView}
                className="d-inline-block"
                checked={view === "list"}
            />
            List View
        </Label>
        <Label for='table-view' className="mr-4" >
            <Input
                type="radio"
                name="view"
                id="table-view"
                value="table"
                onChange={changeView}
                className="d-inline-block"
                checked={view === "table"}
            />
            Table View
        </Label>
    </div>
)

ViewController.prototype = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
}
export default ViewController;