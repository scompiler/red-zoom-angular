import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleN05 } from './example-n05';

describe('ExampleN05', () => {
    let component: ExampleN05;
    let fixture: ComponentFixture<ExampleN05>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleN05]
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleN05);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
