import { Component, Input, Output, EventEmitter, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'date-picker',
    template: `<div class="input-group date" id="{{id}}">
                    <input type="text" [(ngModel)]="selectedDate" class="form-control" id="{{id}}-dateValue" >
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                </div>`,
    styles: [],
    directives: [],
    providers: []
})
export class DatePickerComponent implements AfterViewInit {
    @Input()
    id: string;
    @Input()
    IncludeTime: boolean;
    @Output()
    onValueChange = new EventEmitter<Date>();

    selectedDate: string;

    ngAfterViewInit() {
        var options = {
            pick12HourFormat: true,
            pickTime: this.IncludeTime,
        };
        
        $("#" + this.id).datetimepicker(options).on("change", (e: any) => {
            var date = e.delegateTarget.children[0].value;

            this.onValueChange.next(new Date(date));
        });
    }
    constructor() {
        
    }
}