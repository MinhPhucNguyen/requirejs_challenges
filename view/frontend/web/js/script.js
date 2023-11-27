/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2023 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 *
 */

require([
    'jquery',
    'Magento_Ui/js/modal/modal'
], function ($, modal) {
    var options = {
        type: 'popup',
        responsive: true,
        innerScroll: true,
        buttons: [
            {
                text: $.mage.__('Accept'),
                class: 'accept_btn',
                click: function () {
                    this.closeModal();
                }
            },
            {
                text: $.mage.__('Cancel'),
                class: 'cancel_btn',
                click: function () {
                    this.closeModal();
                }
            }
        ]
    };

    var popup = modal(options, $('#popup-modal'));
    
    $("#test_btn").on('click', function () {
        // alert("This is Test JS");
        $("#popup-modal").modal("openModal");
    });

    $(".accept_btn").on('click', function () {
        alert("Success");
    });
})
