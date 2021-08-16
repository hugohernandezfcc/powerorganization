/**
 * @description       : 
 * @author            : hugo.hernandez@openenglish.com
 * @group             : 
 * @last modified on  : 06-28-2021
 * @last modified by  : hugo.hernandez@openenglish.com
 * Modifications Log 
 * Ver   Date         Author                           Modification
 * 1.0   06-23-2021   hugo.hernandez@openenglish.com   Initial Version
**/
public class Warning {

    public class Phones{
        public string label;
        public string value;
    }

    @AuraEnabled
    public static List<Contact> getContacts(Id recordId) {
 
        return [SELECT Id, FirstName, LastName, DoNotCall FROM Contact WHERE Id =: recordId ];
    }


    public static List<Phones> getPhoneNumbers(){
        String objectName = 'Contact';
        String fieldName = 'Phone';

        SObjectType r = ((SObject)(Type.forName('Schema.'+objectName).newInstance())).getSObjectType();
        DescribeSObjectResult d = r.getDescribe();
        System.debug(d.fields.getMap().get(fieldName).getDescribe().getType());
        return null;
    }
}