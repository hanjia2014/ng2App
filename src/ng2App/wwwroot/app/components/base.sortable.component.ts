import { AfterViewInit } from '@angular/core';
import { ITogglable } from '../services/app.interfaces';

export class SortableBase implements AfterViewInit, ITogglable {
    SortableListId: string;
    IsNumberedList: boolean;
    isExpand: boolean;
    spinner: Spinner = new Spinner({ radius: 10 });

    constructor() {
        this.IsNumberedList = true;
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