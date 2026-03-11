sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.alice.disbcompiler.zdisbcompiler',
            componentId: 'xALICExEK_C_A_DISBCOMP_HDRList',
            contextPath: '/xALICExEK_C_A_DISBCOMP_HDR'
        },
        CustomPageDefinitions
    );
});