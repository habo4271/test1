import { LightningElement, track, api } from 'lwc';
export default class DynamicCtor extends LightningElement {
    @track customCtor = undefined;

    async loadCtor() {
        // note, using `x-` prefix instead of `x/` because these are
        // handled by `registerForLoad`
        const ctor = await import('x-ctor');
        this.customCtor = { constructor: ctor, attrs: { style: 'color: red' } };
    }
    async loadAlter() {
        // note, using `x-` prefix instead of `x/` because these are
        // handled by `registerForLoad`
        const alter = await import('x-alter');
        this.customCtor = { constructor: alter, attrs: { style: 'color: red' } };
    }

    @api enableCtor() {
        this.loadCtor();
    }
    @api enableAlter() {
        this.loadAlter();
    }
    @api disableAll() {
        this.customCtor = null;
    }
}
