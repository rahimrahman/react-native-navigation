import React, { Component } from "react";
import LayoutComponent from "./LayoutComponent";
import LayoutNode from "./LayoutNode";
import store from './LayoutStore';
const { connect } = require('remx');

interface Props {
    layoutNode: LayoutNode;
    isVisible: boolean;
}

export const Stack = connect()(class extends Component<Props> {
    render() {
        const children = store.getters.getLayoutChildren(this.props.layoutNode.nodeId);
        return children.map((child, i) => {
            return <LayoutComponent layoutNode={child} isVisible={(this.props.isVisible && i === children.length - 1)} />
        })
    }
});