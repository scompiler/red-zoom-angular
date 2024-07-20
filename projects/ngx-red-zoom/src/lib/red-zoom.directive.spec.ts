import { RedZoomDirective } from './red-zoom.directive';

describe('RedZoomDirective', () => {
    it('should create an instance', () => {
        // @ts-expect-error Doesn't matter for tests
        const directive = new RedZoomDirective(null, null, null, null);
        expect(directive).toBeTruthy();
    });
});
