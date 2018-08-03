import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'Home',
    template: `
    <AppBar class="action-bar" title="test">
        <ActionItem ios.systemIcon="16" ios.position="right" text="delete" android.position="popup">
        </ActionItem>
    </AppBar>
    <ScrollView>
    <MaterialCard margin="20" rippleColor="green" borderRadius="10">
    <StackLayout horizontalAlignment="center">
        <FloatingActionButton src="res://ic_action_add" backgroundColor="blue" (tap)="onTap('fab', $event)">
        </FloatingActionButton>
		<MaterialButton borderRadius="10" fontSize="20" text="raised button" backgroundColor="blue" (tap)="onTap('mbutton1', $event)"></MaterialButton>
        <MaterialButton borderRadius="10" color="red" text="text button" rippleColor="green" variant="text" (tap)="onTap('mbutton2', $event)">
        <FormattedString>
        <Span text="Words " color="#006600" ></Span>
        <Span text="with " color="#990000" fontAttributes="Bold"></Span>
        </FormattedString>
        </MaterialButton>
		<MaterialButton text="flat button \n test" rippleColor="red" backgroundColor="yellow" variant="flat" (tap)="onTap('mbutton3', $event)"></MaterialButton>
		<MaterialButton text="outline button" color="black"  width="200" className="buttonYellow" variant="outline" (tap)="onTap('mbutton4', $event)"></MaterialButton>
		<MaterialButton className="falseFAb" text="+" color="white"   verticalAlign="center" backgroundColor="green" (tap)="onTap('mbutton5', $event)"></MaterialButton>
		<MaterialTextField #textField1 helperText="help me!" width="250" backgroundColor="orange"  placeholderColor="green" keyboardType="datetime" hint="i am an hint" returnKeyType="next" (focus)="onFocus('textfield1',$event)" 
        (blur)="onBlur('textfield1',$event)"  (textChange)="onTextChange('textfield1',$event)"></MaterialTextField>
        <MaterialTextField #textField2 backgroundColor="green" maxLength="10"  hint="hint me"  (returnPress)="returnPress(textField2.text,$event)"></MaterialTextField>
        <StackLayout height="200"></StackLayout>
        </StackLayout></MaterialCard></ScrollView>`
})
export class HomeComponent implements OnInit {

    ngOnInit() {}
    onTap(command, e) {
        console.log('onTap', command);
    }
    onFocus(command, e) {
        console.log('onFocus', command);
    }
    onBlur(command, e) {
        console.log('onBlur', command);
    }
    returnPress(command, e) {
        console.log('returnPress', command);
        // e.object.blur();
    }
    onTextChange(command, e) {
        console.log('onTextChange', command);
    }
}