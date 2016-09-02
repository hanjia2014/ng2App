﻿import { Component, Input, Output, EventEmitter, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'select2',
    template: `<input id="{{id}}"/>`,
    styles: [],
    providers: []
})
export class Select2Component implements AfterViewInit {
    @Input()
    multiple: boolean;
    @Input()
    data: any;
    @Input()
    id: string;
    @Output() selected = new EventEmitter();

    ngAfterViewInit() {
        var options = {
            placeholder: "Please select",
            dropdownAutoWidth: true,
            allowClear: true,
            data: this.data,
            multiple: this.multiple,
            maximumInputLength: 30
        };
        $("#" + this.id).select2(options).on("change", (e: any) => {
            this.selected.next(e.val);
        });

    }
    constructor() {
        
    }
}