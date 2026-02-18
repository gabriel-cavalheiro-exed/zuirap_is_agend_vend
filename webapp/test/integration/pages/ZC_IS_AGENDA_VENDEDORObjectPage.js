sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'br.com.gamma.zuirapisagendvend',
            componentId: 'ZC_IS_AGENDA_VENDEDORObjectPage',
            contextPath: '/ZC_IS_AGENDA_VENDEDOR'
        },
        CustomPageDefinitions
    );
});