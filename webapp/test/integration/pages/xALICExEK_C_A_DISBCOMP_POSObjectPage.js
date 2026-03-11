sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.alice.disbcompiler.zdisbcompiler',
            componentId: 'xALICExEK_C_A_DISBCOMP_POSObjectPage',
            contextPath: '/xALICExEK_C_A_DISBCOMP_HDR/_Positions'
        },
        CustomPageDefinitions
    );
});