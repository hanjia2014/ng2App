import { AfterViewInit } from '@angular/core';
export class SortableBase implements AfterViewInit {
    SortableListId: string;
    IsNumberedList: boolean;
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
}