/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2023 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 *
 */

var config = {
    'map': {
        '*': {
            "theme/script": "Tigren_JavascriptInitExample/js/script",
            "modal/example": "Tigren_JavascriptInitExample/js/modal-example",
            'mage/accordion': "Tigren_JavascriptInitExample/js/accordion-mixin"
        }
    },
    'deps': [
        'modal/example'
    ],
    'shim': {
        'modal/example': {
            deps: ['jquery']
        }
    },
}
