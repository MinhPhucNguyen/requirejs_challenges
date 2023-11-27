/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2023 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 *
 */

define([
    'jquery',
], function ($) {
    'use strict';
    return function (widget) {
        $.widget('fisheyeAcademy.accordion', widget, {
            options: {
                active: [1] // Override option defaults
            },
            _create: function () { // Override method
                this._super(); // Call parent method
// Do something here…
            }
        });
        return $.fisheyeAcademy.accordion;
    };
});
