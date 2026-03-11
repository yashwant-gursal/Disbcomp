sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/alice/disbcompiler/zdisbcompiler/test/integration/pages/xALICExEK_C_A_DISBCOMP_HDRList",
	"com/alice/disbcompiler/zdisbcompiler/test/integration/pages/xALICExEK_C_A_DISBCOMP_HDRObjectPage",
	"com/alice/disbcompiler/zdisbcompiler/test/integration/pages/xALICExEK_C_A_DISBCOMP_POSObjectPage"
], function (JourneyRunner, xALICExEK_C_A_DISBCOMP_HDRList, xALICExEK_C_A_DISBCOMP_HDRObjectPage, xALICExEK_C_A_DISBCOMP_POSObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/alice/disbcompiler/zdisbcompiler') + '/test/flp.html#app-preview',
        pages: {
			onThexALICExEK_C_A_DISBCOMP_HDRList: xALICExEK_C_A_DISBCOMP_HDRList,
			onThexALICExEK_C_A_DISBCOMP_HDRObjectPage: xALICExEK_C_A_DISBCOMP_HDRObjectPage,
			onThexALICExEK_C_A_DISBCOMP_POSObjectPage: xALICExEK_C_A_DISBCOMP_POSObjectPage
        },
        async: true
    });

    return runner;
});

