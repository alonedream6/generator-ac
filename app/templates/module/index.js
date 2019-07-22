/**
 * <%= componentName %> Component
 * @author <%= author %>
 * @date <%= date %>
 * @version 1.0.0
 */
import * as React from 'react';
// import { apiDefine, apiCancel } from '../../api/web';
// import { delayToDo, clearDelay } from '../../utils/tools';
import './style.less';
/**
 * props
 * @param
 * @function
 * @extends {PureComponent}
 */
export default class <%= componentName %> extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        //
    }
    render() {
        return <div className="<%= componentName %>"></div>;
    }
}