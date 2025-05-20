import { TestBed } from '@angular/core/testing';
import { CodeComponent } from './code.component';

describe('CodeComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CodeComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(CodeComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
