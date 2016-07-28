export class SortableBase {
    SortableListId: string;

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
                }
            });
        })(jQuery);
    }
}