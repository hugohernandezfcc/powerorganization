/**
 * @description       : 
 * @author            : hugodhm@icloud.com
 * @group             : 
 * @last modified on  : 08-16-2021
 * @last modified by  : hugodhm@icloud.com
**/
trigger mainTriggerOnAccount on Account (before insert, before update, before delete, after insert, after update, after delete, after undelete){
    new MainTriggerOnAccount().run();
}