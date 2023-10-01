import { NgIf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CardActionsComponent } from './card-actions.component';

describe('CardActionsComponent', () => {
    let component: CardActionsComponent;
    let fixture: ComponentFixture<CardActionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardActionsComponent, RouterTestingModule, MatButtonModule, NgIf, RouterLink]
        }).compileComponents();

        fixture = TestBed.createComponent(CardActionsComponent);
        component = fixture.componentInstance;
    });

    it('should show show issues button if issues are hided', () => {
        component.isIssuesRoute = false;

        fixture.detectChanges();

        const element = fixture.debugElement.query(By.css('.show-issues-bt'));
        const text = element.nativeElement.textContent;

        expect(text).toContain('Show issues');
    });

    it('should show hide issues button if issues are present', () => {
        component.isIssuesRoute = true;

        fixture.detectChanges();

        const element = fixture.debugElement.query(By.css('.show-issues-bt'));
        const text = element.nativeElement.textContent;

        expect(text).toContain('Hide issues');
    });
});
