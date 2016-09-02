import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ecrm-accordion-group',
    template: `<div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                      <a href="javascript:void(0)"  *ngIf="heading" (click)="isExpanded=!isExpanded">{{heading}}</a>
                      <ng-content select="[head]"></ng-content>
                      <div class="arrow" *ngIf="heading" >
                        <span class="glyphicon glyphicon-menu-down" *ngIf="isExpanded" (click)="isExpanded = false"></span>
                        <span class="glyphicon glyphicon-menu-up" *ngIf="!isExpanded" (click)="isExpanded = true"></span>
                      </div>
                      <div class="arrow" *ngIf="!heading" >
                        <span class="glyphicon glyphicon-menu-down" *ngIf="isExpanded" (click)="close()"></span>
                        <span class="glyphicon glyphicon-menu-up" *ngIf="!isExpanded" (click)="open()"></span>
                      </div>
                    </h4>
                  </div>
                  <div class="panel-collapse collapse in" [ngClass]="{'exp': isExpanded}" role="tabpanel">
                    <div class="panel-body">
                      <div>
                        <ng-content></ng-content>
                        <ng-content select="[body]"></ng-content>
                      </div>
                    </div>
                  </div>
                </div>`,

    styles: [`.collapse {
                .panel-body {
                    -webkit-transition: all 0.1s ease;
                    -moz-transition: all 0.1s ease;
                    -ms-transition: all 0.1s ease;
                    -o-transition: all 0.1s ease;
                    transition: all 0.1s ease;
                    max-height: 0px;
                    overflow-y: hidden;
                    padding: 0px;
                    > div {
                        margin: 10px 15px 10px 15px;
                    }
                }
                &.exp {
                    .panel-body {
                        max-height: 3000px;
                        -webkit-transition: all 0.5s ease;
                        -moz-transition: all 0.5s ease;
                        -ms-transition: all 0.5s ease;
                        -o-transition: all 0.5s ease;
                        transition: all 0.5s ease;
                        > div {
                            margin-bottom: 0xp;
                        }
                    }
                }
            }

            .arrow {
                float: right;
                position: absolute;
                right: 25px;
                margin-top: -15px;
                cursor: pointer;
            }`]
})
export class AccordionGroupCmp implements OnInit {

    @Output() arrowClick = new EventEmitter<boolean>();
    @Input() heading: string = '';
    @Input() isExpanded: boolean = true;

    open() {
        this.arrowClick.next(true);
    }

    close() {
        this.arrowClick.next(false);
    }

    constructor() { }

    ngOnInit() { }

}