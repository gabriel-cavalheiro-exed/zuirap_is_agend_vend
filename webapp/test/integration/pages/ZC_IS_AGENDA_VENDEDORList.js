sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'br.com.gamma.zuirapisagendvend',
            componentId: 'ZC_IS_AGENDA_VENDEDORList',
            contextPath: '/ZC_IS_AGENDA_VENDEDOR'
        },
        CustomPageDefinitions
    );
});