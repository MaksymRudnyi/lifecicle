import { Component } from '@angular/core';

import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { SpyParentComponent } from './spy.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        PeekABooParentComponent,
        SpyParentComponent
    ]
})
export class AppComponent { }


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */