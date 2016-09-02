import { AfterViewInit } from '@angular/core';
import { ITogglable } from '../services/app.interfaces';

export class SortableBase implements AfterViewInit, ITogglable {
    SortableListId: string;
    AccordionId: string;
    IsAccordion: boolean;
    IsNumberedList: boolean;
    isExpand: boolean;
    spinner: Spinner = new Spinner({ radius: 10 });

    constructor() {
        this.IsNumberedList = true;
    }
    private AccordionConfig() {
        var eleId = '#' + this.AccordionId;

        (function ($: any) {
            var accordion = $(eleId);

            accordion
                .accordion({
                    header: "> div > h3"
                })
                .sortable({
                    axis: "y",
                    handle: "h3",
                    stop: (event: any, ui: any) => {
                        // IE doesn't register the blur when sorting
                        // so trigger focusout handlers to remove .ui-state-focus
                        ui.item.children("h3").triggerHandler("focusout");

                        // Refresh accordion to handle new order
                        $(this).accordion("refresh");
                    }
                });
        });
    }

    public SortableConfig() {
        var eleId = '#' + this.SortableListId;

        (function ($: any) {
            var panelList = $(eleId);

            panelList.sortable({
                // Only make the .panel-heading child elements support dragging.
                // Omit this to make then entire <li>...</li> draggable.
                placeholder: "sortable-hightlight",
                handle: '.panel-heading',
                update: function () {
                    $('.panel', panelList).each(function (index: any, elem: any) {
                        var $listItem = $(elem),
                            newIndex = $listItem.index();

                        // Persist the new indices.
                    });
                },
                start: function (e: any, ui: any) {
                    ui.placeholder.height(ui.item.height());
                }
            });
        })(jQuery);
    }
    ngAfterViewInit() {
        this.SortableConfig();
        this.AccordionConfig();
    }

    toggle(e: any) {
        e.preventDefault();

        this.isExpand = !this.isExpand;
        var eleId = "#" + this.SortableListId;
        $(eleId).toggle("fade", {
            direction: 'up'
        }, 500);
    }

    toggleItemOfBusiness(e: any, id: number) {
        e.preventDefault();

        this.isExpand = !this.isExpand;
        var eleId = "#" + this.SortableListId;
        $(eleId).toggle("fade", {
            direction: 'up'
        }, 500);
    }
}