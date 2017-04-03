import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInloggenComponent } from './my-inloggen-component.component';

describe('MyInloggenComponent', () => {
	let component: MyInloggenComponent;
	let fixture: ComponentFixture<MyInloggenComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MyInloggenComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MyInloggenComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
