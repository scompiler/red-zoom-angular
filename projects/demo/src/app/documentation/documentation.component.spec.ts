import { TestBed } from '@angular/core/testing';
import { DocumentationComponent } from './documentation.component';

describe('DocumentationComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                DocumentationComponent,
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(DocumentationComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
