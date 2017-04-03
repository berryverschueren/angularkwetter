import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHashtagComponent } from './my-hashtag-component.component';

describe('MyHashtagComponent', () => {
	let component: MyHashtagComponent;
	let fixture: ComponentFixture<MyHashtagComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MyHashtagComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MyHashtagComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
