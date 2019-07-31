/**
 * @author <%= author %>
 * @date <%= date %>
 * @version 1.0.0
 */
import React from 'react';
import <%= componentName %> from '../../packages/template/<%= componentName %>';

const templateName = '<%= componentName %>';
const page = () => {
    const pageIndex = getPageIndex();
    const data = window.dataList[templateName];
    if (!data) return null;
    return (
        <<%= componentName %> />
    );
};
export { page, templateName };