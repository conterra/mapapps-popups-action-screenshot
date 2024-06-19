/*
 * Copyright (C) 2023 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import html2canvas from "./html2canvas.min";
import {jsPDF} from "./jspdf.umd.min.js";
import esriConfig from "esri/config";

export default class PopupsScreenshotActionFactory {

    createAction() {
        const i18n = this._i18n.get().ui;
        const properties = this._properties;
        const that = this;
        return {
            id: "screenshot_action",
            type: "button",
            title: i18n.takeScreenshot,
            className: properties.iconClass,
            async trigger() {
                const element = document.querySelector(".esri-popup__content-node");
                const proxyUrl = esriConfig.request.proxyUrl;
                const html2canvasOptions = properties.html2canvasOptions;
                if (!html2canvasOptions.proxy) {
                    html2canvasOptions.proxy = proxyUrl;
                }
                const canvasElement = await html2canvas(element, html2canvasOptions || {});
                that.#downloadFile(properties.fileFormat, canvasElement);
            }
        };
    }

    #downloadFile(format, canvasElement) {
        switch (format) {
            case "pdf":
                this.#downloadPDF(canvasElement);
                break;
            case "png":
                this.#downloadPNG(canvasElement);
                break;
            default:
                this.#downloadPDF(canvasElement);
        }
    }

    #downloadPDF(canvasElement) {
        const doc = new jsPDF();
        doc.addImage(canvasElement, "JPEG", 10, 10);
        const fileName = this._properties.fileName + ".pdf";
        doc.save(fileName);
    }

    #downloadPNG(canvasElement) {
        const downloadURL = canvasElement.toDataURL();
        const imgURL = document.createElement("a");
        imgURL.setAttribute("href", downloadURL);
        const fileName = this._properties.fileName + ".png";
        imgURL.setAttribute("download", fileName);
        imgURL.style.display = "none";
        document.body.appendChild(imgURL);
        imgURL.click();
        document.body.removeChild(imgURL);
    }

    getTypes() {
        return [this._properties.id];
    }

}
