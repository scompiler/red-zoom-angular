import {Component, viewChild, ViewContainerRef} from '@angular/core';
import packageJson from '../../../ngx-red-zoom/package.json';
import { render } from 'github-buttons';
import {ExampleN01} from './example-n01/example-n01';
import {ExampleN02} from './example-n02/example-n02';
import {ExampleN03} from './example-n03/example-n03';
import {ExampleN04} from './example-n04/example-n04';
import {ExampleN05} from './example-n05/example-n05';
import {ExampleN06} from './example-n06/example-n06';
import {ExampleN07} from './example-n07/example-n07';
import {ExampleN08} from './example-n08/example-n08';
import {Documentation} from './documentation/documentation';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports: [
        ExampleN01,
        ExampleN02,
        ExampleN03,
        ExampleN04,
        ExampleN05,
        ExampleN06,
        ExampleN07,
        ExampleN08,
        Documentation,
    ],
    styleUrl: './app.scss'
})
export class App {
    protected readonly buttons = viewChild.required('buttons', {read: ViewContainerRef})

    protected readonly version = packageJson.version;

    protected readonly year = new Date().getFullYear();

    ngOnInit(): void {
        const buttons = this.buttons().element.nativeElement as Comment;

        render({
            href: 'https://github.com/scompiler/red-zoom-angular',
            'aria-label': 'Star scompiler/red-zoom-angular on GitHub',
            'data-size': 'large',
            'data-show-count': 'true',
            'data-text': 'Star',
        }, function(el) {
            buttons.parentNode?.insertBefore(el, buttons);
        });
    }
}
