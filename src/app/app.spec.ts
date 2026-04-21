import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { AppComponent } from './app';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should render <main> landmark', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        expect(fixture.nativeElement.querySelector('main')).toBeTruthy();
    });

    it('should render <nav> element', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        expect(fixture.nativeElement.querySelector('nav')).toBeTruthy();
    });

    it('should render <footer> element', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        expect(fixture.nativeElement.querySelector('footer')).toBeTruthy();
    });

    it('should render all section ids', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        const ids = ['inicio', 'sobre', 'servicos', 'clientes', 'contato'];
        for (const id of ids) {
            const el = fixture.nativeElement.querySelector(`#${id}`);
            expect(el, `#${id} should exist`).toBeTruthy();
        }
    });
});
