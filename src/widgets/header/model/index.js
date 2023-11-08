/**
 * Модель скрипта описывает основную JS-логику.
 * Может служить как самостоятельным скриптом, так и отправной точкой для монтирования иных компонентов.
 */
export default class HeaderModel {

    static selector = "[data-js-header]";

    static instance = null

    constructor() {
        if (HeaderModel.instance) {
            return HeaderModel.instance;
        }

        this.node = document.querySelector(HeaderModel.selector);
        HeaderModel.instance = this;
    }

}
