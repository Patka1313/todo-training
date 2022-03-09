import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ 
    selector: 'lib-about-us-page', 
    templateUrl: './about-us.page.html', 
    //encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./about-us.page.scss']

})
export class AboutUsPage {
}
