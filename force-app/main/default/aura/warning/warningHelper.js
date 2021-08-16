({
    helperMethod : function(component) {
        
        var utilityAPI = component.find("utilitybar");
        utilityAPI.getAllUtilityInfo().then(function(response) {
                console.log('response>>');
                console.log(response);
                // var data = JSON.parse(JSON.stringify(response));
                for (var i = 0; i < response.length; i++) {
                    if (response[i].utilityLabel == "Phone") {
                        
                        var action = component.get("c.getContacts");
                        console.log('recordId');
                        console.log(component.get('v.recordId'));
                        
                        action.setParams({
                            recordId: component.get('v.recordId')
                        });
                        action.setCallback(this, function(r) {
                            var state = r.getState();
                            console.log('--state----');
                            console.log(state);

                            if (state === "SUCCESS") {
                                console.log('showToast');
                                
        
                                

                                console.log(r.getReturnValue());
                                var contact = r.getReturnValue()[0];
                                console.log('......____......');
                                console.log(contact);
                                if(contact.DoNotCall){
                                    var toastEvent = $A.get("e.force:showToast");
                                    toastEvent.setParams({
                                        type: 'warning',
                                        message: 'The "Do Not Call" field is checked in the Contact'
                                    });
                                    toastEvent.fire();
                                    console.log('testing...');
                                    utilityAPI.minimizeUtility({
                                        utilityId: '252:0'
                                    });
                                    component.set('v.enabledClictoDial', false);
                                }else{
                                    component.set('v.enabledClictoDial', true);
                                }
                            }
                        });
                        $A.enqueueAction(action);


                    }
                }
            }).catch(function(error) {
                console.log('minimize utility bar error: ' + error);
            });
    }
})