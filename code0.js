gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects3= [];
gdjs.NewSceneCode.GDPlayerObjects4= [];
gdjs.NewSceneCode.GDObstacleObjects1= [];
gdjs.NewSceneCode.GDObstacleObjects2= [];
gdjs.NewSceneCode.GDObstacleObjects3= [];
gdjs.NewSceneCode.GDObstacleObjects4= [];
gdjs.NewSceneCode.GDPlatformObjects1= [];
gdjs.NewSceneCode.GDPlatformObjects2= [];
gdjs.NewSceneCode.GDPlatformObjects3= [];
gdjs.NewSceneCode.GDPlatformObjects4= [];
gdjs.NewSceneCode.GDPlatform_95deepObjects1= [];
gdjs.NewSceneCode.GDPlatform_95deepObjects2= [];
gdjs.NewSceneCode.GDPlatform_95deepObjects3= [];
gdjs.NewSceneCode.GDPlatform_95deepObjects4= [];
gdjs.NewSceneCode.GDBackgroundObjects1= [];
gdjs.NewSceneCode.GDBackgroundObjects2= [];
gdjs.NewSceneCode.GDBackgroundObjects3= [];
gdjs.NewSceneCode.GDBackgroundObjects4= [];
gdjs.NewSceneCode.GDClockObjects1= [];
gdjs.NewSceneCode.GDClockObjects2= [];
gdjs.NewSceneCode.GDClockObjects3= [];
gdjs.NewSceneCode.GDClockObjects4= [];
gdjs.NewSceneCode.GDTextStartObjects1= [];
gdjs.NewSceneCode.GDTextStartObjects2= [];
gdjs.NewSceneCode.GDTextStartObjects3= [];
gdjs.NewSceneCode.GDTextStartObjects4= [];
gdjs.NewSceneCode.GDTextGameOverObjects1= [];
gdjs.NewSceneCode.GDTextGameOverObjects2= [];
gdjs.NewSceneCode.GDTextGameOverObjects3= [];
gdjs.NewSceneCode.GDTextGameOverObjects4= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObjectObjects3= [];
gdjs.NewSceneCode.GDNewObjectObjects4= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition4IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition4IsTrue_1 = {val:false};


gdjs.NewSceneCode.eventsList0x725c44 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.condition0IsTrue_1.val = false;
gdjs.NewSceneCode.condition1IsTrue_1.val = false;
gdjs.NewSceneCode.condition2IsTrue_1.val = false;
gdjs.NewSceneCode.condition3IsTrue_1.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.NewSceneCode.condition0IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
if( gdjs.NewSceneCode.condition1IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.NewSceneCode.condition2IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition3IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if( gdjs.NewSceneCode.condition3IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\jump.wav", false, 100, 1);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x725c44
gdjs.NewSceneCode.eventsList0x6cf73c = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlatformObjects3.createFrom(runtimeScene.getObjects("Platform"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlatformObjects3.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlatformObjects3[i].getX() <= -(64) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlatformObjects3[k] = gdjs.NewSceneCode.GDPlatformObjects3[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlatformObjects3.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlatformObjects3 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlatformObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlatformObjects3[i].setX(gdjs.NewSceneCode.GDPlatformObjects3[i].getX() + (448));
}
}}

}


{

gdjs.NewSceneCode.GDObstacleObjects3.createFrom(runtimeScene.getObjects("Obstacle"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDObstacleObjects3.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDObstacleObjects3[i].getX() < -(100) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDObstacleObjects3[k] = gdjs.NewSceneCode.GDObstacleObjects3[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDObstacleObjects3.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDObstacleObjects3 */
{for(var i = 0, len = gdjs.NewSceneCode.GDObstacleObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDObstacleObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.NewSceneCode.GDObstacleObjects3.createFrom(runtimeScene.getObjects("Obstacle"));
gdjs.NewSceneCode.GDPlatformObjects3.createFrom(runtimeScene.getObjects("Platform"));
gdjs.NewSceneCode.GDPlatform_95deepObjects3.createFrom(runtimeScene.getObjects("Platform_deep"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlatformObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlatformObjects3[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDObstacleObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDObstacleObjects3[i].addPolarForce(0, (( gdjs.NewSceneCode.GDPlatformObjects3.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects3[0].getAverageForce().getX()), 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlatform_95deepObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlatform_95deepObjects3[i].addPolarForce(180, (( gdjs.NewSceneCode.GDPlatformObjects3.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects3[0].getAverageForce().getX()), 0);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects2[k] = gdjs.NewSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlatformObjects2.createFrom(runtimeScene.getObjects("Platform"));
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].addPolarForce(0, -((( gdjs.NewSceneCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlatformObjects2[0].getAverageForce().getX())), 0);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x725c44(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0x6cf73c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.NewSceneCode.GDObstacleObjects2});gdjs.NewSceneCode.eventsList0x6cb0d4 = function(runtimeScene) {

{


{
gdjs.NewSceneCode.GDBackgroundObjects3.createFrom(runtimeScene.getObjects("Background"));
gdjs.NewSceneCode.GDClockObjects3.createFrom(runtimeScene.getObjects("Clock"));
{for(var i = 0, len = gdjs.NewSceneCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackgroundObjects3[i].returnVariable(gdjs.NewSceneCode.GDBackgroundObjects3[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDClockObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDClockObjects3[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDBackgroundObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDBackgroundObjects3[0].getVariables()).getFromIndex(0))));
}
}}

}


{

gdjs.NewSceneCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBackgroundObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBackgroundObjects2[i].getVariableNumber(gdjs.NewSceneCode.GDBackgroundObjects2[i].getVariables().getFromIndex(0)) >= (gdjs.RuntimeObject.getVariableNumber(gdjs.NewSceneCode.GDBackgroundObjects2[i].getVariables().getFromIndex(1))) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBackgroundObjects2[k] = gdjs.NewSceneCode.GDBackgroundObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBackgroundObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBackgroundObjects2 */
gdjs.NewSceneCode.GDObstacleObjects2.length = 0;

{for(var i = 0, len = gdjs.NewSceneCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackgroundObjects2[i].returnVariable(gdjs.NewSceneCode.GDBackgroundObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDObstacleObjects2Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + gdjs.random(100), 191, "");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6cb0d4
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.NewSceneCode.GDObstacleObjects1});gdjs.NewSceneCode.eventsList0x6c7a04 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDObstacleObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDTextGameOverObjects1.createFrom(runtimeScene.getObjects("TextGameOver"));
{runtimeScene.getVariables().get("state").setNumber(2);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].clearForces();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\133283__leszek-szary__game-over.wav", false, 100, 1);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDTextGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTextGameOverObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TimerGameOver");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6c7a04
gdjs.NewSceneCode.eventsList0x725494 = function(runtimeScene) {

{


gdjs.NewSceneCode.eventsList0x6cf73c(runtimeScene);
}


{


gdjs.NewSceneCode.eventsList0x6cb0d4(runtimeScene);
}


{


gdjs.NewSceneCode.eventsList0x6c7a04(runtimeScene);
}


}; //End of gdjs.NewSceneCode.eventsList0x725494
gdjs.NewSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDTextGameOverObjects1.createFrom(runtimeScene.getObjects("TextGameOver"));
gdjs.NewSceneCode.GDTextStartObjects1.createFrom(runtimeScene.getObjects("TextStart"));
{runtimeScene.getVariables().get("state").setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDTextStartObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTextStartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTextGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTextGameOverObjects1[i].hide();
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 0;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.condition0IsTrue_1.val = false;
gdjs.NewSceneCode.condition1IsTrue_1.val = false;
gdjs.NewSceneCode.condition2IsTrue_1.val = false;
gdjs.NewSceneCode.condition3IsTrue_1.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.NewSceneCode.condition0IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
if( gdjs.NewSceneCode.condition1IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.NewSceneCode.condition2IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition3IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if( gdjs.NewSceneCode.condition3IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDTextStartObjects1.createFrom(runtimeScene.getObjects("TextStart"));
{runtimeScene.getVariables().get("state").setNumber(1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDTextStartObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTextStartObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\sound\\background-music.wav", 0, true, 70, 1);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x725494(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 2;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "TimerGameOver");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("state").setNumber(3);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "TimerGameOver");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 3;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.condition0IsTrue_1.val = false;
gdjs.NewSceneCode.condition1IsTrue_1.val = false;
gdjs.NewSceneCode.condition2IsTrue_1.val = false;
gdjs.NewSceneCode.condition3IsTrue_1.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if( gdjs.NewSceneCode.condition0IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.popEndedTouch(runtimeScene);
if( gdjs.NewSceneCode.condition1IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.NewSceneCode.condition2IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition3IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if( gdjs.NewSceneCode.condition3IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "NewScene");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b6e18


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects3.length = 0;
gdjs.NewSceneCode.GDPlayerObjects4.length = 0;
gdjs.NewSceneCode.GDObstacleObjects1.length = 0;
gdjs.NewSceneCode.GDObstacleObjects2.length = 0;
gdjs.NewSceneCode.GDObstacleObjects3.length = 0;
gdjs.NewSceneCode.GDObstacleObjects4.length = 0;
gdjs.NewSceneCode.GDPlatformObjects1.length = 0;
gdjs.NewSceneCode.GDPlatformObjects2.length = 0;
gdjs.NewSceneCode.GDPlatformObjects3.length = 0;
gdjs.NewSceneCode.GDPlatformObjects4.length = 0;
gdjs.NewSceneCode.GDPlatform_95deepObjects1.length = 0;
gdjs.NewSceneCode.GDPlatform_95deepObjects2.length = 0;
gdjs.NewSceneCode.GDPlatform_95deepObjects3.length = 0;
gdjs.NewSceneCode.GDPlatform_95deepObjects4.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects3.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects4.length = 0;
gdjs.NewSceneCode.GDClockObjects1.length = 0;
gdjs.NewSceneCode.GDClockObjects2.length = 0;
gdjs.NewSceneCode.GDClockObjects3.length = 0;
gdjs.NewSceneCode.GDClockObjects4.length = 0;
gdjs.NewSceneCode.GDTextStartObjects1.length = 0;
gdjs.NewSceneCode.GDTextStartObjects2.length = 0;
gdjs.NewSceneCode.GDTextStartObjects3.length = 0;
gdjs.NewSceneCode.GDTextStartObjects4.length = 0;
gdjs.NewSceneCode.GDTextGameOverObjects1.length = 0;
gdjs.NewSceneCode.GDTextGameOverObjects2.length = 0;
gdjs.NewSceneCode.GDTextGameOverObjects3.length = 0;
gdjs.NewSceneCode.GDTextGameOverObjects4.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects3.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects4.length = 0;

gdjs.NewSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
