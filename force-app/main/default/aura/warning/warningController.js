({
    init: function (component, event, helper) {
        var utilityAPI = component.find('utilitybar');


        component.set('v.phones', [
            {
                label: 'Phone',
                value:'(785) 241-6200'
            },
            {
                label: 'Mobile',
                value:'(785) 265-5350'
            }
        ]);


        utilityAPI.getAllUtilityInfo().then(function (response) {
            console.log(response);
            if (typeof response !== 'undefined') {
                component.set('v.hasUtilityBar', true);
                helper.helperMethod(component);
                
            } else {
                component.set('v.hasUtilityBar', false);
            }
        });
    },
    disableClickToDial: function (cmp, event, helper) {
        // clickToDialService is for internal use only.
        // Use sforce.opencti.disableClickToDial() in your org.
        // https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_disableclicktodial_lex.htm
        var clickToDialService = cmp.find("clickToDialService");
        clickToDialService.disable();
    },
    onTabCreated: function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
    
        if($A.util.isUndefinedOrNull(utilityAPI)){
            return;
        } else {
            
        }
    }
})