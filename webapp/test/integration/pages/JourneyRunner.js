sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/gamma/zuirapisagendvend/test/integration/pages/ZC_IS_AGENDA_VENDEDORList",
	"br/com/gamma/zuirapisagendvend/test/integration/pages/ZC_IS_AGENDA_VENDEDORObjectPage"
], function (JourneyRunner, ZC_IS_AGENDA_VENDEDORList, ZC_IS_AGENDA_VENDEDORObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/gamma/zuirapisagendvend') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_IS_AGENDA_VENDEDORList: ZC_IS_AGENDA_VENDEDORList,
			onTheZC_IS_AGENDA_VENDEDORObjectPage: ZC_IS_AGENDA_VENDEDORObjectPage
        },
        async: true
    });

    return runner;
});

