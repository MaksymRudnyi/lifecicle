import { Component } from '@angular/core';

import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { SpyParentComponent } from './spy.component';

import { OnChangesComponent, OnChangesParentComponent} from './on-changes.component'

import {AfterContentParentComponent} from './after-content.component'

import { AfterViewParentComponent } from './after-view.component';

import { DoCheckParentComponent } from './do-check.component';

import { CounterParentComponent } from './counter.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        PeekABooParentComponent,
        SpyParentComponent,
        OnChangesParentComponent,
        AfterContentParentComponent,
        AfterViewParentComponent,
        DoCheckParentComponent,
        CounterParentComponent
    ]
})
export class AppComponent { }


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */