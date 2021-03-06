/*
@license
IBM Confidential - OCO Source Materials - (C) COPYRIGHT IBM CORP. 2015-2018 - The source code for this program is not published or otherwise divested of its trade secrets, irrespective of what has been deposited with the U.S. Copyright Office.
*/
import "../@polymer/iron-flex-layout/iron-flex-layout.js";

import { addDomStyleModule, addCustomStyle } from "../tricore-util/tricore-util.js";

const tristylesFonts = `
<dom-module id="tristyles-fonts">
	<template>
		<style>

		/*
		* Helvetica Neue Light
		* To use, set "font-weight: 100 | 200 | 300;"
		*/
		@font-face {
			font-family: "Helvetica Neue";
			src: url('HelveticaNeue/helvetica-neue-light.woff2') format('woff2'),
					url('HelveticaNeue/helvetica-neue-light.woff') format('woff');
			font-weight: 100;
		}

		/*
		* Helvetica Neue Roman
		* Default ("font-weight: normal | 400;")
		*/
		@font-face {
			font-family: "Helvetica Neue";
			src: url('HelveticaNeue/helvetica-neue-roman.woff2') format('woff2'),
					url('HelveticaNeue/helvetica-neue-roman.woff') format('woff');
			font-weight: 400;
		}

		/*
		* Helvetica Neue Medium
		* To use, set "font-weight: 500;"
		*/
		@font-face {
			font-family: "Helvetica Neue";
			src: url('HelveticaNeue/helvetica-neue-medium.woff2') format('woff2'),
					url('HelveticaNeue/helvetica-neue-medium.woff') format('woff');
			font-weight: 500;
		}

		/*
		* Helvetica Neue Bold
		* To use, set "font-weight: bold | 600 | 700 | 800 | 900;"
		*/
		@font-face {
			font-family: "Helvetica Neue";
			src: url('HelveticaNeue/helvetica-neue-bold.woff2') format('woff2'),
					url('HelveticaNeue/helvetica-neue-bold.woff') format('woff');
			font-weight: 900;
		}
		
		</style>
	</template>
</dom-module>
`;

addDomStyleModule(tristylesFonts, "triplat-theme/triplat-theme.js");

const tristylesTheme = `
<dom-module id="tristyles-theme">
	<template>
		<style>

			/*
			* a (link tag) / class="tri-link"
			*/
			 a:not(.tri-disable-theme) {
				text-decoration: none;
				color: var(--tri-primary-color);
			}
			 .tri-link {
				cursor: pointer;
				color: var(--tri-primary-color);
			}
			 a:not(.tri-disable-theme).underline,
			 .tri-link.underline {
				text-decoration: underline;
			}
			 a:not(.tri-disable-theme):hover,
			 .tri-link:hover {
				text-decoration: underline;
			}
			/* footer */
			 a:not(.tri-disable-theme).footer,
			 a:not(.tri-disable-theme)[footer],
			 .tri-link.footer,
			 .tri-link[footer] {
				color: var(--ibm-blue-30);
			}

			/*
			* class="tri-h#" / class="tri-fine-print"
			* (<h#> and <small> elements are avoided here, since these elements have preset browser settings that we don't want)
			*/
			 .tri-h1 {
				font-size: 36px;
				font-weight: 100;
			}
			 .tri-h2 {
				font-size: 22px;
			}
			 .tri-h3 {
				font-size: 18px;
			}
			 .tri-fine-print {
				font-size: 12px;
				color: var(--ibm-gray-100);
			}

			/*
			* iron-icon
			*/
			/* primary */
			 iron-icon:not(.tri-disable-theme)[primary],
			 iron-icon:not(.tri-disable-theme).primary {
				color: var(--tri-primary-color);
			}
			/* secondary */
			 iron-icon:not(.tri-disable-theme)[secondary],
			 iron-icon:not(.tri-disable-theme).secondary {
				color: var(--tri-secondary-color);
			}
			/* info */
			 iron-icon:not(.tri-disable-theme)[info],
			 iron-icon:not(.tri-disable-theme).info {
				color: var(--tri-info-color);
			}
			/* success */
			 iron-icon:not(.tri-disable-theme)[success],
			 iron-icon:not(.tri-disable-theme).success {
				color: var(--tri-success-color);
			}
			/* warning */
			 iron-icon:not(.tri-disable-theme)[warning],
			 iron-icon:not(.tri-disable-theme).warning {
				color: var(--tri-warning-color);
			}
			/* major-warning */
			 iron-icon:not(.tri-disable-theme)[major-warning],
			 iron-icon:not(.tri-disable-theme).major-warning {
				color: var(--tri-major-warning-color);
			}
			/* danger */
			 iron-icon:not(.tri-disable-theme)[danger],
			 iron-icon:not(.tri-disable-theme).danger {
				color: var(--tri-danger-color);
			}
			/* error */
			 iron-icon:not(.tri-disable-theme)[error],
			 iron-icon:not(.tri-disable-theme).error {
				color: var(--tri-error-color);
			}
			/* footer */
			 iron-icon:not(.tri-disable-theme)[footer],
			 iron-icon:not(.tri-disable-theme).footer {
				color: var(--tri-footer-color);
			}

			/*
			* label
			*/
			 label:not(.tri-disable-theme) {
				color: var(--tri-primary-content-label-color);
			}

			/*
			* paper-button
			*/
			/* default */
			 paper-button:not(.tri-disable-theme) {
				@apply --layout-vertical;
				@apply --layout-center-center;
				font-family: var(--tri-font-family);
				font-weight: 400;
				border-radius: 0px;
				text-align: center;
				text-transform: none;
				width: auto;
				margin: 0 5px;
				@apply --tri-primary-button;
				
			}
			/* default hover */
			 paper-button:not(.tri-disable-theme):hover {
				@apply --tri-primary-button-hover;
			}
			/* default pressed */
			 paper-button:not(.tri-disable-theme)[pressed] {
				@apply --tri-primary-button-press;
			}
			/* primary-outline */
			 paper-button:not(.tri-disable-theme)[primary-outline],
			 paper-button:not(.tri-disable-theme).primary-outline {
				@apply --tri-primary-outline-button;
			}
			/* primary-outline hover */
			 paper-button:not(.tri-disable-theme)[primary-outline]:hover,
			 paper-button:not(.tri-disable-theme).primary-outline:hover {
				@apply --tri-primary-outline-button-hover;
			}
			/* primary-outline pressed */
			 paper-button:not(.tri-disable-theme)[primary-outline][pressed],
			 paper-button:not(.tri-disable-theme).primary-outline[pressed] {
				@apply --tri-primary-outline-button-press;
			}
			/* secondary */
			 paper-button:not(.tri-disable-theme)[secondary],
			 paper-button:not(.tri-disable-theme).secondary {
				@apply --tri-secondary-button;
			}
			/* secondary hover */
			 paper-button:not(.tri-disable-theme)[secondary]:hover,
			 paper-button:not(.tri-disable-theme).secondary:hover {
				@apply --tri-secondary-button-hover;
			}
			/* secondary pressed */
			 paper-button:not(.tri-disable-theme)[secondary][pressed],
			 paper-button:not(.tri-disable-theme).secondary[pressed] {
				@apply --tri-secondary-button-press;
			}
			/* secondary disabled */
			 paper-button:not(.tri-disable-theme)[secondary][disabled],
			 paper-button:not(.tri-disable-theme).secondary[disabled] {
				@apply --tri-secondary-button-disabled;
			}
			/* info */
			 paper-button:not(.tri-disable-theme)[info],
			 paper-button:not(.tri-disable-theme).info {
				@apply --tri-info-button;
			}
			/* info hover */
			 paper-button:not(.tri-disable-theme)[info]:hover,
			 paper-button:not(.tri-disable-theme).info:hover {
				@apply --tri-info-button-hover;
			}
			/* info pressed */
			 paper-button:not(.tri-disable-theme)[info][pressed],
			 paper-button:not(.tri-disable-theme).info[pressed] {
				@apply --tri-info-button-press;
			}
			/* info-outline */
			 paper-button:not(.tri-disable-theme)[info-outline],
			 paper-button:not(.tri-disable-theme).info-outline {
				@apply --tri-info-outline-button;
			}
			/* info-outline hover */
			 paper-button:not(.tri-disable-theme)[info-outline]:hover,
			 paper-button:not(.tri-disable-theme).info-outline:hover {
				@apply --tri-info-outline-button-hover;
			}
			/* info-outline pressed */
			 paper-button:not(.tri-disable-theme)[info-outline][pressed],
			 paper-button:not(.tri-disable-theme).info-outline[pressed] {
				@apply --tri-info-outline-button-press;
			}
			/* success */
			 paper-button:not(.tri-disable-theme)[success],
			 paper-button:not(.tri-disable-theme).success {
				@apply --tri-success-button;
			}
			/* success hover */
			 paper-button:not(.tri-disable-theme)[success]:hover,
			 paper-button:not(.tri-disable-theme).success:hover {
				@apply --tri-success-button-hover;
			}
			/* success pressed */
			 paper-button:not(.tri-disable-theme)[success][pressed],
			 paper-button:not(.tri-disable-theme).success[pressed] {
				@apply --tri-success-button-press;
			}
			/* success-outline */
			 paper-button:not(.tri-disable-theme)[success-outline],
			 paper-button:not(.tri-disable-theme).success-outline {
				@apply --tri-success-outline-button;
			}
			/* success-outline hover */
			 paper-button:not(.tri-disable-theme)[success-outline]:hover,
			 paper-button:not(.tri-disable-theme).success-outline:hover {
				@apply --tri-success-outline-button-hover;
			}
			/* success-outline pressed */
			 paper-button:not(.tri-disable-theme)[success-outline][pressed],
			 paper-button:not(.tri-disable-theme).success-outline[pressed] {
				@apply --tri-success-outline-button-press;
			}
			/* warning */
			 paper-button:not(.tri-disable-theme)[warning],
			 paper-button:not(.tri-disable-theme).warning {
				@apply --tri-warning-button;
			}
			/* warning hover */
			 paper-button:not(.tri-disable-theme)[warning]:hover,
			 paper-button:not(.tri-disable-theme).warning:hover {
				@apply --tri-warning-button-hover;
			}
			/* warning pressed */
			 paper-button:not(.tri-disable-theme)[warning][pressed],
			 paper-button:not(.tri-disable-theme).warning[pressed] {
				@apply --tri-warning-button-press;
			}
			/* warning-outline */
			 paper-button:not(.tri-disable-theme)[warning-outline],
			 paper-button:not(.tri-disable-theme).warning-outline {
				@apply --tri-warning-outline-button;
			}
			/* warning-outline hover */
			 paper-button:not(.tri-disable-theme)[warning-outline]:hover,
			 paper-button:not(.tri-disable-theme).warning-outline:hover {
				@apply --tri-warning-outline-button-hover;
			}
			/* warning-outline pressed */
			 paper-button:not(.tri-disable-theme)[warning-outline][pressed],
			 paper-button:not(.tri-disable-theme).warning-outline[pressed] {
				@apply --tri-warning-outline-button-press;
			}
			/* major-warning */
			 paper-button:not(.tri-disable-theme)[major-warning],
			 paper-button:not(.tri-disable-theme).major-warning {
				@apply --tri-major-warning-button;
			}
			/* major-warning hover */
			 paper-button:not(.tri-disable-theme)[major-warning]:hover,
			 paper-button:not(.tri-disable-theme).major-warning:hover {
				@apply --tri-major-warning-button-hover;
			}
			/* major-warning pressed */
			 paper-button:not(.tri-disable-theme)[major-warning][pressed],
			 paper-button:not(.tri-disable-theme).major-warning[pressed] {
				@apply --tri-major-warning-button-press;
			}
			/* major-warning-outline */
			 paper-button:not(.tri-disable-theme)[major-warning-outline],
			 paper-button:not(.tri-disable-theme).major-warning-outline {
				@apply --tri-major-warning-outline-button;
			}
			/* major-warning-outline hover */
			 paper-button:not(.tri-disable-theme)[major-warning-outline]:hover,
			 paper-button:not(.tri-disable-theme).major-warning-outline:hover {
				@apply --tri-major-warning-outline-button-hover;
			}
			/* major-warning-outline pressed */
			 paper-button:not(.tri-disable-theme)[major-warning-outline][pressed],
			 paper-button:not(.tri-disable-theme).major-warning-outline[pressed] {
				@apply --tri-major-warning-outline-button-press;
			}
			/* danger */
			 paper-button:not(.tri-disable-theme)[danger],
			 paper-button:not(.tri-disable-theme).danger {
				@apply --tri-danger-button;
			}
			/* danger hover */
			 paper-button:not(.tri-disable-theme)[danger]:hover,
			 paper-button:not(.tri-disable-theme).danger:hover {
				@apply --tri-danger-button-hover;
			}
			/* danger pressed */
			 paper-button:not(.tri-disable-theme)[danger][pressed],
			 paper-button:not(.tri-disable-theme).danger[pressed] {
				@apply --tri-danger-button-press;
			}
			/* danger-outline */
			 paper-button:not(.tri-disable-theme)[danger-outline],
			 paper-button:not(.tri-disable-theme).danger-outline {
				@apply --tri-danger-outline-button;
			}
			/* danger-outline hover */
			 paper-button:not(.tri-disable-theme)[danger-outline]:hover,
			 paper-button:not(.tri-disable-theme).danger-outline:hover {
				@apply --tri-danger-outline-button-hover;
			}
			/* danger-outline pressed */
			 paper-button:not(.tri-disable-theme)[danger-outline][pressed],
			 paper-button:not(.tri-disable-theme).danger-outline[pressed] {
				@apply --tri-danger-outline-button-press;
			}
			/* footer */
			 paper-button:not(.tri-disable-theme)[footer],
			 paper-button:not(.tri-disable-theme).footer {
				@apply --tri-footer-button;
			}
			/* footer hover */
			 paper-button:not(.tri-disable-theme)[footer]:hover,
			 paper-button:not(.tri-disable-theme).footer:hover {
				@apply --tri-footer-button-hover;
			}
			/* footer pressed */
			 paper-button:not(.tri-disable-theme)[footer][pressed],
			 paper-button:not(.tri-disable-theme).footer[pressed] {
				@apply --tri-footer-button-press;
			}
			/* footer secondary */
			 paper-button:not(.tri-disable-theme)[footer-secondary],
			 paper-button:not(.tri-disable-theme).footer-secondary {
				@apply --tri-footer-secondary-button;
			}
			/* footer secondary hover */
			 paper-button:not(.tri-disable-theme)[footer-secondary]:hover,
			 paper-button:not(.tri-disable-theme).footer-secondary:hover {
				@apply --tri-footer-secondary-button-hover;
			}
			/* footer secondary pressed */
			 paper-button:not(.tri-disable-theme)[footer-secondary][pressed],
			 paper-button:not(.tri-disable-theme).footer-secondary[pressed] {
				@apply --tri-footer-secondary-button-press;
			}
			/* footer danger */
			 paper-button:not(.tri-disable-theme)[footer-danger],
			 paper-button:not(.tri-disable-theme).footer-danger {
				@apply --tri-footer-danger-button;
			}
			/* footer danger hover */
			 paper-button:not(.tri-disable-theme)[footer-danger]:hover,
			 paper-button:not(.tri-disable-theme).footer-danger:hover {
				@apply --tri-footer-danger-button-hover;
			}
			/* footer danger pressed */
			 paper-button:not(.tri-disable-theme)[footer-danger][pressed],
			 paper-button:not(.tri-disable-theme).footer-danger[pressed] {
				@apply --tri-footer-danger-button-press;
			}
			/* footer disabled */
			 paper-button:not(.tri-disable-theme)[footer][disabled],
			 paper-button:not(.tri-disable-theme)[footer-secondary][disabled],
			 paper-button:not(.tri-disable-theme)[footer-danger][disabled],
			 paper-button:not(.tri-disable-theme).footer[disabled],
			 paper-button:not(.tri-disable-theme).footer-secondary[disabled],
			 paper-button:not(.tri-disable-theme).footer-danger[disabled] {
				@apply --tri-footer-button-disabled;
			}
			/* default disabled */
			 paper-button:not(.tri-disable-theme)[disabled] {
				@apply --tri-disabled-button;
			}

			/*
			* paper-checkbox
			*/
			 paper-checkbox:not(.tri-disable-theme) {
				font-family: var(--tri-font-family);
			}

			/*
			* paper-icon-button
			*/
			/* primary */
			 paper-icon-button:not(.tri-disable-theme)[primary],
			 paper-icon-button:not(.tri-disable-theme).primary {
				color: var(--tri-primary-icon-button-color);
			}
			/* primary hover */
			 paper-icon-button:not(.tri-disable-theme)[primary]:hover,
			 paper-icon-button:not(.tri-disable-theme).primary:hover {
				color: var(--tri-primary-icon-button-hover-color);
			}
			/* primary press */
			 paper-icon-button:not(.tri-disable-theme)[primary][pressed],
			 paper-icon-button:not(.tri-disable-theme).primary[pressed] {
				color: var(--tri-primary-icon-button-press-color);
			}
			/* secondary */
			 paper-icon-button:not(.tri-disable-theme)[secondary],
			 paper-icon-button:not(.tri-disable-theme).secondary {
				color: var(--tri-secondary-icon-button-color);
			}
			/* secondary hover */
			 paper-icon-button:not(.tri-disable-theme)[secondary]:hover,
			 paper-icon-button:not(.tri-disable-theme).secondary:hover {
				color: var(--tri-secondary-icon-button-hover-color);
			}
			/* secondary press */
			 paper-icon-button:not(.tri-disable-theme)[secondary][pressed],
			 paper-icon-button:not(.tri-disable-theme).secondary[pressed] {
				color: var(--tri-secondary-icon-button-press-color);
			}
			/* info */
			 paper-icon-button:not(.tri-disable-theme)[info],
			 paper-icon-button:not(.tri-disable-theme).info {
				color: var(--tri-info-icon-button-color);
			}
			/* info hover */
			 paper-icon-button:not(.tri-disable-theme)[info]:hover,
			 paper-icon-button:not(.tri-disable-theme).info:hover {
				color: var(--tri-info-icon-button-hover-color);
			}
			/* info press */
			 paper-icon-button:not(.tri-disable-theme)[info][pressed],
			 paper-icon-button:not(.tri-disable-theme).info[pressed] {
				color: var(--tri-info-icon-button-press-color);
			}
			/* success */
			 paper-icon-button:not(.tri-disable-theme)[success],
			 paper-icon-button:not(.tri-disable-theme).success {
				color: var(--tri-success-icon-button-color);
			}
			/* success hover */
			 paper-icon-button:not(.tri-disable-theme)[success]:hover,
			 paper-icon-button:not(.tri-disable-theme).success:hover {
				color: var(--tri-success-icon-button-hover-color);
			}
			/* success press */
			 paper-icon-button:not(.tri-disable-theme)[success][pressed],
			 paper-icon-button:not(.tri-disable-theme).success[pressed] {
				color: var(--tri-success-icon-button-press-color);
			}
			/* warning */
			 paper-icon-button:not(.tri-disable-theme)[warning],
			 paper-icon-button:not(.tri-disable-theme).warning {
				color: var(--tri-warning-icon-button-color);
			}
			/* warning hover */
			 paper-icon-button:not(.tri-disable-theme)[warning]:hover,
			 paper-icon-button:not(.tri-disable-theme).warning:hover {
				color: var(--tri-warning-icon-button-hover-color);
			}
			/* warning press */
			 paper-icon-button:not(.tri-disable-theme)[warning][pressed],
			 paper-icon-button:not(.tri-disable-theme).warning[pressed] {
				color: var(--tri-warning-icon-button-press-color);
			}
			/* major-warning */
			 paper-icon-button:not(.tri-disable-theme)[major-warning],
			 paper-icon-button:not(.tri-disable-theme).major-warning {
				color: var(--tri-major-warning-icon-button-color);
			}
			/* major-warning hover */
			 paper-icon-button:not(.tri-disable-theme)[major-warning]:hover,
			 paper-icon-button:not(.tri-disable-theme).major-warning:hover {
				color: var(--tri-major-warning-icon-button-hover-color);
			}
			/* major-warning press */
			 paper-icon-button:not(.tri-disable-theme)[major-warning][pressed],
			 paper-icon-button:not(.tri-disable-theme).major-warning[pressed] {
				color: var(--tri-major-warning-icon-button-press-color);
			}
			/* danger */
			 paper-icon-button:not(.tri-disable-theme)[danger],
			 paper-icon-button:not(.tri-disable-theme).danger {
				color: var(--tri-danger-icon-button-color);
			}
			/* danger hover */
			 paper-icon-button:not(.tri-disable-theme)[danger]:hover,
			 paper-icon-button:not(.tri-disable-theme).danger:hover {
				color: var(--tri-danger-icon-button-hover-color);
			}
			/* danger press */
			 paper-icon-button:not(.tri-disable-theme)[danger][pressed],
			 paper-icon-button:not(.tri-disable-theme).danger[pressed] {
				color: var(--tri-danger-icon-button-press-color);
			}
			/* error */
			 paper-icon-button:not(.tri-disable-theme)[error],
			 paper-icon-button:not(.tri-disable-theme).error {
				color: var(--tri-error-icon-button-color);
			}
			/* error hover */
			 paper-icon-button:not(.tri-disable-theme)[error]:hover,
			 paper-icon-button:not(.tri-disable-theme).error:hover {
				color: var(--tri-error-icon-button-hover-color);
			}
			/* error press */
			 paper-icon-button:not(.tri-disable-theme)[error][pressed],
			 paper-icon-button:not(.tri-disable-theme).error[pressed] {
				color: var(--tri-error-icon-button-press-color);
			}
			/* footer */
			 paper-icon-button:not(.tri-disable-theme)[footer],
			 paper-icon-button:not(.tri-disable-theme).footer {
				color: var(--tri-footer-icon-button-color);
			}
			/* footer hover */
			 paper-icon-button:not(.tri-disable-theme)[footer]:hover,
			 paper-icon-button:not(.tri-disable-theme).footer:hover {
				color: var(--tri-footer-icon-button-hover-color);
			}
			/* footer press */
			 paper-icon-button:not(.tri-disable-theme)[footer][pressed],
			 paper-icon-button:not(.tri-disable-theme).footer[pressed] {
				color: var(--tri-footer-icon-button-press-color);
			}
			/* disabled */
			 paper-icon-button:not(.tri-disable-theme)[disabled],
			 paper-icon-button:not(.tri-disable-theme).disabled {
				/*opacity: var(--tri-button-disabled-opacity);*/
				color: var(--tri-disabled-icon-button-color);
			}

			/*
			* paper-item
			*/
			 paper-item:not(.tri-disable-theme) {
				font-family: var(--tri-font-family);
			}

			/*
			* paper-radio-button
			*/
			 paper-radio-button:not(.tri-disable-theme) {
				font-family: var(--tri-font-family);
			}

			/*
			* paper-toast
			*/
			 paper-toast:not(.tri-disable-theme) {
				font-family: var(--tri-font-family);
			}

			/*
			* table
			*/
			 div.tri-table:not(.tri-disable-theme),
			 div[tri-table]:not(.tri-disable-theme) {
				display: table;
				background-color: var(--tri-primary-content-background-color);
				border-collapse: collapse;
				border-spacing: 0;
				color: var(--tri-primary-content-color);
				font-size: 14px;
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-thead,
			 div[tri-table]:not(.tri-disable-theme) > div[tri-thead] {
				display: table-header-group;
				background-color: var(--tri-primary-content-background-color);
				color: var(--tri-primary-color);
				border-bottom: 1px solid var(--tri-primary-content-accent-color);
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-thead > div.tri-tr,
			 div[tri-table]:not(.tri-disable-theme) > div[tri-thead] > div[tri-tr] {
				display: table-row;
				background-color: var(--tri-primary-content-background-color);
				color: var(--tri-primary-color);
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-thead div.tri-th,
			 div[tri-table]:not(.tri-disable-theme) > div[tri-thead] div[tri-th] {
				display: table-cell;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				line-height: 30px;
				padding: 5px 10px 5px 0px;
				text-align: left;
				min-width: 100px;
				font-weight: bold;
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-thead div.tri-th::before,
			 div[tri-table]:not(.tri-disable-theme) > div[tri-thead] div[tri-th]::before {
				border-left: 1px solid var(--tri-primary-content-accent-color);
				content: "";
				font-size: 18px;
				padding-right: 10px;
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-thead div.tri-th:first-child::before,
			 div[tri-table]:not(.tri-disable-theme) > div[tri-thead] div[tri-th]:first-child::before {
				border-left: none !important;
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-tbody,
			 div[tri-table]:not(.tri-disable-theme) > div[tri-tbody] {
				display: table-row-group;
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr,
			 div[tri-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr] {
				display: table-row;
				border-bottom: 1px solid var(--tri-primary-content-accent-color);
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr:nth-child(odd),
			 div[tri-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr]:nth-child(odd) {
				background-color: var(--tri-body-background-color);
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr:nth-child(even),
			 div[tri-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr]:nth-child(even) {
				background-color: var(--tri-primary-content-background-color);
			}
			 div.tri-table[clickable-rows]:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr:hover,
			 div[tri-table][clickable-rows]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr]:hover {
				cursor: pointer;
				background-color: var(--tri-primary-content-accent-color);
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr[selected],
			 div[tri-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr][selected] {
				background-color: var(--tri-primary-light-color) !important;
			}
			 div.tri-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr > div.tri-td,
			 div[tri-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr] > div[tri-td] {
				display: table-cell;
				vertical-align: middle;
				height: 45px;
				padding: 10px;
				min-width: 100px;
				/*position: relative;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;*/
			}
			/* div.tri-table:not(.tri-disable-theme) > tbody > tr > td > div:after,
			 div[tri-table]:not(.tri-disable-theme) > tbody > tr > td > div:after {
				content: '...';
				text-align: right;
				bottom: 0;
				right: 0;
				width: 25%;
				display: block;
				position: absolute;
				height: 14px;
				background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 75%);
			}*/

			/*
			* table - fixed header (requires defining your own column widths by wrapping tri-th's and tri-td's in <div>s with widths specified using --layout-flex-#)
			*/
			 div.tri-fixed-table:not(.tri-disable-theme),
			 div[tri-fixed-table]:not(.tri-disable-theme) {
				@apply --layout-vertical;
				background-color: var(--tri-primary-content-background-color);
				color: var(--tri-primary-content-color);
				font-size: 14px;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-thead,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-thead] {
				@apply --layout-vertical;
				background-color: var(--tri-primary-content-background-color);
				color: var(--tri-primary-color);
				border-bottom: 1px solid var(--tri-primary-content-accent-color);
				min-height: 0;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-thead > div.tri-tr,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-thead] > div[tri-tr] {
				@apply --layout-horizontal;
				background-color: var(--tri-primary-content-background-color);
				color: var(--tri-primary-color);
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-thead div.tri-th,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-thead] div[tri-th] {
				@apply --layout-horizontal;
				@apply --layout-center;
				/*white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;*/
				line-height: 30px;
				height: 30px;
				padding: 5px 10px 5px 0px;
				text-align: left;
				min-width: 0;
				font-weight: bold;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-thead div.tri-th > span.tri-th-label,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-thead] div[tri-th] > span[tri-th-label] {
				flex-shrink: 1;
				/*white-space: nowrap;*/
				overflow: hidden;
				/*text-overflow: ellipsis;*/
				min-width: 0;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-thead > div.tri-tr > div,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-thead] > div[tri-tr] > div {
				min-width: 100px;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-thead div.tri-th::before,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-thead] div[tri-th]::before {
				border-left: 1px solid var(--tri-primary-content-accent-color);
				content: "";
				font-size: 18px;
				padding-right: 10px;
				height: 20px;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-thead > div.tri-tr > div.tri-th:first-child::before,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-thead] > div[tri-tr] > div[tri-th]:first-child::before {
				border-left: none !important;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-thead > div.tri-tr > div:first-child > div.tri-th::before,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-thead] > div[tri-tr] > div:first-child > div[tri-th]::before {
				border-left: none !important;
			}
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-tbody] {
				@apply --layout-vertical;
				@apply --layout-flex;
				@apply --layout-scroll;
				min-height: 0;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr] {
				@apply --layout-horizontal;
				border-bottom: 1px solid var(--tri-primary-content-accent-color);
				flex-shrink: 0;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr:nth-child(odd),
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr]:nth-child(odd) {
				background-color: var(--tri-body-background-color);
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr:nth-child(even),
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr]:nth-child(even) {
				background-color: var(--tri-primary-content-background-color);
			}
			 div.tri-fixed-table[clickable-rows]:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr:hover,
			 div[tri-fixed-table][clickable-rows]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr]:hover {
				cursor: pointer;
				background-color: var(--tri-primary-content-accent-color);
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr[selected],
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr][selected] {
				background-color: var(--tri-primary-light-color) !important;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr div.tri-td,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr] div[tri-td] {
				@apply --layout-horizontal;
				@apply --layout-center;
				height: 45px;
				padding: 10px;
			}
			 div.tri-fixed-table:not(.tri-disable-theme) > div.tri-tbody > div.tri-tr > div,
			 div[tri-fixed-table]:not(.tri-disable-theme) > div[tri-tbody] > div[tri-tr] > div {
				min-width: 100px;
				overflow: hidden;
				/*position: relative;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;*/
			}

			[hidden] {
				display: none !important;
			}

		
		</style>
	</template>
</dom-module>
`;

addDomStyleModule(tristylesTheme, "triplat-theme/triplat-theme.js");

const customStyle0 = `
<custom-style>
	<style is="custom-style" include="tristyles-fonts">

		html {
			/*
			 * IBM Colors
			 */
			--ibm-blue-10: rgb(192, 230, 255);
			--ibm-blue-20: rgb(124, 199, 255);
			--ibm-blue-30: rgb(90, 170, 250);
			--ibm-blue-40: rgb(85, 150, 230);
			--ibm-blue-50: rgb(61, 112, 178); /*modified to fix accessibility issues*/
			--ibm-blue-60: rgb(50, 92, 128);
			--ibm-blue-70: rgb(38, 74, 96);
			--ibm-blue-80: rgb(29, 54, 73);
			--ibm-blue-90: rgb(21, 41, 53);
			--ibm-blue-100: rgb(1, 2, 5);
	
			--ibm-green-10: rgb(200, 240, 143);
			--ibm-green-20: rgb(180, 224, 81);
			--ibm-green-30: rgb(140, 210, 17);
			--ibm-green-40: rgb(90, 167, 0);
			--ibm-green-50: rgb(75, 132, 0);
			--ibm-green-60: rgb(45, 102, 10);
			--ibm-green-70: rgb(20, 77, 20);
			--ibm-green-80: rgb(10, 60, 2);
			--ibm-green-90: rgb(12, 40, 8);
			--ibm-green-100: rgb(1, 2, 0);
	
			--ibm-teal-10: rgb(167, 250, 230);
			--ibm-teal-20: rgb(110, 237, 216);
			--ibm-teal-30: rgb(65, 214, 195);
			--ibm-teal-40: rgb(0, 180, 160);
			--ibm-teal-50: rgb(0, 133, 113);
			--ibm-teal-60: rgb(0, 109, 93);
			--ibm-teal-70: rgb(0, 84, 72);
			--ibm-teal-80: rgb(0, 60, 50);
			--ibm-teal-90: rgb(1, 43, 34);
			--ibm-teal-100: rgb(0, 2, 2);
	
			--ibm-purple-10: rgb(238, 210, 255);
			--ibm-purple-20: rgb(215, 170, 255);
			--ibm-purple-30: rgb(186, 143, 247);
			--ibm-purple-40: rgb(175, 110, 232);
			--ibm-purple-50: rgb(152, 85, 212);
			--ibm-purple-60: rgb(115, 64, 152);
			--ibm-purple-70: rgb(86, 47, 114);
			--ibm-purple-80: rgb(65, 35, 86);
			--ibm-purple-90: rgb(49, 26, 65);
			--ibm-purple-100: rgb(3, 1, 3);
	
			--ibm-magenta-10: rgb(255, 210, 255);
			--ibm-magenta-20: rgb(255, 158, 238);
			--ibm-magenta-30: rgb(255, 113, 212);
			--ibm-magenta-40: rgb(255, 60, 160);
			--ibm-magenta-50: rgb(219, 39, 128);
			--ibm-magenta-60: rgb(166, 38, 110);
			--ibm-magenta-70: rgb(124, 28, 88);
			--ibm-magenta-80: rgb(96, 17, 70);
			--ibm-magenta-90: rgb(58, 11, 46);
			--ibm-magenta-100: rgb(4, 1, 2);
	
			--ibm-red-10: rgb(255, 210, 221);
			--ibm-red-20: rgb(255, 165, 180);
			--ibm-red-30: rgb(255, 125, 135);
			--ibm-red-40: rgb(255, 80, 80);
			--ibm-red-50: rgb(231, 29, 50);
			--ibm-red-60: rgb(173, 22, 37);
			--ibm-red-70: rgb(140, 16, 28);
			--ibm-red-80: rgb(110, 10, 30);
			--ibm-red-90: rgb(76, 10, 23);
			--ibm-red-100: rgb(4, 0, 1);
	
			--ibm-orange-10: rgb(255, 215, 145);
			--ibm-orange-20: rgb(255, 165, 115);
			--ibm-orange-30: rgb(255, 120, 50);
			--ibm-orange-40: rgb(255, 80, 3);
			--ibm-orange-50: rgb(215, 65, 8);
			--ibm-orange-60: rgb(165, 55, 37);
			--ibm-orange-70: rgb(135, 42, 15);
			--ibm-orange-80: rgb(109, 18, 15);
			--ibm-orange-90: rgb(67, 16, 11);
			--ibm-orange-100: rgb(3, 1, 0);
	
			--ibm-yellow-10: rgb(253, 232, 118);
			--ibm-yellow-20: rgb(253, 214, 0);
			--ibm-yellow-30: rgb(239, 193, 0);
			--ibm-yellow-40: rgb(190, 155, 0);
			--ibm-yellow-50: rgb(140, 115, 0);
			--ibm-yellow-60: rgb(115, 95, 0);
			--ibm-yellow-70: rgb(87, 74, 0);
			--ibm-yellow-80: rgb(60, 50, 0);
			--ibm-yellow-90: rgb(40, 30, 0);
			--ibm-yellow-100: rgb(2, 1, 0);
	
			--ibm-gray-10: rgb(224, 224, 224);
			--ibm-gray-20: rgb(199, 199, 199);
			--ibm-gray-30: rgb(174, 174, 174);
			--ibm-gray-40: rgb(149, 149, 149);
			--ibm-gray-50: rgb(119, 118, 119); /* not a typo... IBM Design has this gray with *slightly* less green value than red and blue */
			--ibm-gray-60: rgb(90, 90, 90);
			--ibm-gray-70: rgb(70, 70, 70);
			--ibm-gray-80: rgb(50, 50, 50);
			--ibm-gray-90: rgb(18, 18, 18);
			--ibm-gray-100: rgb(0, 0, 0);
	
			--ibm-cool-gray-10: rgb(223, 233, 233);
			--ibm-cool-gray-20: rgb(200, 210, 210);
			--ibm-cool-gray-30: rgb(174, 184, 184);
			--ibm-cool-gray-40: rgb(149, 159, 159);
			--ibm-cool-gray-50: rgb(109, 119, 119);
			--ibm-cool-gray-60: rgb(88, 100, 100);
			--ibm-cool-gray-70: rgb(60, 70, 70);
			--ibm-cool-gray-80: rgb(45, 55, 55);
			--ibm-cool-gray-90: rgb(13, 17, 17);
			--ibm-cool-gray-100: rgb(0, 2, 3);
	
			--ibm-warm-gray-10: rgb(233, 224, 224);
			--ibm-warm-gray-20: rgb(208, 199, 199);
			--ibm-warm-gray-30: rgb(184, 174, 174);
			--ibm-warm-gray-40: rgb(158, 148, 148);
			--ibm-warm-gray-50: rgb(125, 115, 115);
			--ibm-warm-gray-60: rgb(100, 90, 90);
			--ibm-warm-gray-70: rgb(80, 70, 70);
			--ibm-warm-gray-80: rgb(60, 50, 50);
			--ibm-warm-gray-90: rgb(26, 19, 20);
			--ibm-warm-gray-100: rgb(3, 0, 0);
	
			--ibm-neutral-1: rgb(253, 253, 253);
			--ibm-neutral-2: rgb(249, 249, 249);
			--ibm-neutral-3: rgb(244, 244, 244);
			--ibm-neutral-4: rgb(236, 236, 236);
	
			--ibm-cool-neutral-1: rgb(251, 253, 253);
			--ibm-cool-neutral-2: rgb(249, 249, 251);
			--ibm-cool-neutral-3: rgb(240, 242, 244);
			--ibm-cool-neutral-4: rgb(236, 240, 242);
	
			--ibm-warm-neutral-1: rgb(253, 251, 251);
			--ibm-warm-neutral-2: rgb(253, 251, 251);
			--ibm-warm-neutral-3: rgb(247, 245, 245);
			--ibm-warm-neutral-4: rgb(242, 238, 238);
	
			/*
			 * Theme Colors
			 */
			--tri-primary-dark-color: var(--ibm-blue-80);
			--tri-primary-color: var(--ibm-blue-50);
			--tri-primary-light-color: var(--ibm-blue-10);
	
			--tri-primary-color-10: var(--ibm-blue-10);
			--tri-primary-color-20: var(--ibm-blue-20);
			--tri-primary-color-30: var(--ibm-blue-30);
			--tri-primary-color-40: var(--ibm-blue-40);
			--tri-primary-color-50: var(--ibm-blue-50);
			--tri-primary-color-60: var(--ibm-blue-60);
			--tri-primary-color-70: var(--ibm-blue-70);
			--tri-primary-color-80: var(--ibm-blue-80);
			--tri-primary-color-90: var(--ibm-blue-90);
			--tri-primary-color-100: var(--ibm-blue-100);
	
			--tri-secondary-color: var(--ibm-gray-50);
			--tri-info-color: var(--ibm-blue-30);
			--tri-success-color: var(--ibm-green-30);
			--tri-warning-color: var(--ibm-yellow-30);
			--tri-major-warning-color: var(--ibm-orange-40);
			--tri-danger-color: var(--ibm-orange-50);
			--tri-error-color: var(--ibm-red-50);
	
			--tri-disabled-dark-color: rgba(0,0,0,0.3); /* note: will not appear on black background */
			--tri-disabled-light-color: rgba(255,255,255,0.3); /* note: will not appear on white background */
	
			/*
			 * Overwriting Polymer's theme variables
			 */
			--primary-text-color: var(--tri-primary-content-color);
			--primary-background-color: var(--tri-primary-content-background-color);
			--secondary-text-color: var(--tri-primary-content-label-color);
			--disabled-text-color: var(--tri-disabled-light-color);
			--divider-color: var(--tri-primary-content-accent-color);
			--error-color: var(--tri-error-color);
			--primary-color: var(--tri-primary-color);
			--light-primary-color: var(--tri-primary-light-color);
			--dark-primary-color: var(--tri-primary-dark-color);
			--accent-color: var(--tri-primary-color);
			--light-accent-color: var(--tri-primary-light-color);
			--dark-accent-color: var(--tri-primary-dark-color);
			
			/*
			 * Font
			 */
			--tri-font-family: "Helvetica Neue", Helvetica, Arial, Roboto;
			font-family: var(--tri-font-family);
			font-size: 14px;
			color: var(--tri-primary-content-color);
	
			/*
			 * General Content
			 */
			/* body */
			--tri-body-background-color: var(--ibm-neutral-4);
			/* header */
			--tri-header-background-color: var(--tri-primary-dark-color);
			--tri-header-color: white;
			/* footer */
			--tri-footer-background-color: var(--ibm-gray-70);
			--tri-footer-color: white;
			--tri-footer-button: {
				border: 2px solid white;
				padding: var(--tri-button-2px-border-padding);
				background-color: var(--ibm-blue-50);
				color: white;
			};
			--tri-footer-button-hover: {
				background-color: var(--ibm-blue-30);
				color: white;
			};
			--tri-footer-button-press: {
				background-color: var(--ibm-blue-70);
				color: white;
			};
			--tri-footer-secondary-button: {
				border: 2px solid white;
				padding: var(--tri-button-2px-border-padding);
				background-color: var(--tri-footer-background-color);
				color: white;
			};
			--tri-footer-secondary-button-hover: {
				background-color: var(--ibm-blue-50);
				color: white;
			};
			--tri-footer-secondary-button-press: {
				background-color: var(--ibm-blue-70);
				color: white;
			};
			--tri-footer-danger-button: {
				border: 1px solid white;
				padding: var(--tri-button-1px-border-padding);
				background-color: var(--tri-footer-background-color);
				color: white;
			};
			--tri-footer-danger-button-hover: {
				background-color: var(--ibm-orange-30);
				color: white;
			};
			--tri-footer-danger-button-press: {
				background-color: var(--tri-danger-color);
				color: white;
			};
			--tri-footer-button-disabled: {
				border-color: var(--ibm-gray-60);
				background-color: var(--ibm-gray-70);
				color: var(--ibm-gray-40);
			};
			--tri-footer-icon-button-color: var(--ibm-blue-30);
			--tri-footer-icon-button-hover-color: var(--ibm-blue-50);
			--tri-footer-icon-button-press-color: var(--ibm-blue-10);
			/* primary content */
			--tri-primary-content-background-color: white;
			--tri-primary-content-color: var(--ibm-gray-70);
			--tri-primary-content-accent-color: var(--ibm-gray-10);
			--tri-primary-content-label-color: var(--ibm-gray-50);
	
			/*
			 * Buttons
			 */
			/*--tri-button-disabled-opacity: 0.4;*/
			--tri-button-padding: 12px 24px;
			--tri-button-1px-border-padding: 11px 23px; /* subtracting the 1px border from the default padding */
			--tri-button-2px-border-padding: 10px 22px; /* subtracting the 2px border from the default padding */
			--tri-button-3px-border-padding: 9px 21px; /* subtracting the 3px border from the default padding */
			/* primary */
			--tri-primary-button: {
				padding: var(--tri-button-padding);
				background-color: var(--ibm-blue-50);
				color: white;
			};
			--tri-primary-button-hover: {
				background-color: var(--ibm-blue-30);
				color: white;
			};
			--tri-primary-button-press: {
				background-color: var(--ibm-blue-70);
				color: white;
			};
			/* primary-outline */
			--tri-primary-outline-button: {
				border: 2px solid var(--ibm-blue-50);
				padding: var(--tri-button-2px-border-padding);
				background-color: white;
				color: var(--ibm-blue-50);
			};
			--tri-primary-outline-button-hover: {
				border: none;
				padding: var(--tri-button-padding);
				background-color: var(--ibm-blue-50);
				color: white;
			};
			--tri-primary-outline-button-press: {
				background-color: var(--ibm-blue-70);
				color: white;
			};
			/* secondary */
			--tri-secondary-button: {
				border: 2px solid var(--ibm-gray-50);
				padding: var(--tri-button-2px-border-padding);
				background-color: white;
				color: var(--ibm-gray-50);
			};
			--tri-secondary-button-hover: {
				border: none;
				padding: var(--tri-button-padding);
				background-color: var(--ibm-gray-50);
				color: white;
			};
			--tri-secondary-button-press: {
				background-color: var(--ibm-gray-70);
				color: white;
			};
			--tri-secondary-button-disabled: {
				border: 1px solid var(--ibm-gray-10);
				padding: var(--tri-button-1px-border-padding);
				background-color: transparent;
				color: var(--ibm-gray-30);
			};
			/* info */
			--tri-info-button: {
				padding: var(--tri-button-padding);
				background-color: var(--ibm-blue-30);
				color: white;
			};
			--tri-info-button-hover: {
				background-color: var(--ibm-blue-20);
				color: white;
			};
			--tri-info-button-press: {
				background-color: var(--ibm-blue-40);
				color: white;
			};
			/* info-outline */
			--tri-info-outline-button: {
				border: 2px solid var(--ibm-blue-30);
				padding: var(--tri-button-2px-border-padding);
				background-color: white;
				color: var(--ibm-blue-30);
			};
			--tri-info-outline-button-hover: {
				border: none;
				padding: var(--tri-button-padding);
				background-color: var(--ibm-blue-30);
				color: white;
			};
			--tri-info-outline-button-press: {
				background-color: var(--ibm-blue-40);
				color: white;
			};
			/* success */
			--tri-success-button: {
				padding: var(--tri-button-padding);
				background-color: var(--ibm-green-30);
				color: white;
			};
			--tri-success-button-hover: {
				background-color: var(--ibm-green-20);
				color: white;
			};
			--tri-success-button-press: {
				background-color: var(--ibm-green-50);
				color: white;
			};
			/* success-outline */
			--tri-success-outline-button: {
				border: 2px solid var(--ibm-green-30);
				padding: var(--tri-button-2px-border-padding);
				background-color: white;
				color: var(--ibm-green-30);
			};
			--tri-success-outline-button-hover: {
				border: none;
				padding: var(--tri-button-padding);
				background-color: var(--ibm-green-30);
				color: white;
			};
			--tri-success-outline-button-press: {
				background-color: var(--ibm-green-50);
				color: white;
			};
			/* warning */
			--tri-warning-button: {
				padding: var(--tri-button-padding);
				background-color: var(--ibm-yellow-30);
				color: white;
			};
			--tri-warning-button-hover: {
				background-color: var(--ibm-yellow-20);
				color: white;
			};
			--tri-warning-button-press: {
				background-color: var(--ibm-yellow-40);
				color: white;
			};
			/* warning-outline */
			--tri-warning-outline-button: {
				border: 2px solid var(--ibm-yellow-30);
				padding: var(--tri-button-2px-border-padding);
				background-color: white;
				color: var(--ibm-yellow-30);
			};
			--tri-warning-outline-button-hover: {
				border: none;
				padding: var(--tri-button-padding);
				background-color: var(--ibm-yellow-30);
				color: white;
			};
			--tri-warning-outline-button-press: {
				background-color: var(--ibm-yellow-40);
				color: white;
			};
			/* major-warning */
			--tri-major-warning-button: {
				padding: var(--tri-button-padding);
				background-color: var(--ibm-orange-40);
				color: white;
			};
			--tri-major-warning-button-hover: {
				background-color: var(--ibm-orange-20);
				color: white;
			};
			--tri-major-warning-button-press: {
				background-color: var(--ibm-orange-60);
				color: white;
			};
			/* major-warning-outline */
			--tri-major-warning-outline-button: {
				border: 2px solid var(--ibm-orange-40);
				padding: var(--tri-button-2px-border-padding);
				background-color: white;
				color: var(--ibm-orange-40);
			};
			--tri-major-warning-outline-button-hover: {
				border: none;
				padding: var(--tri-button-padding);
				background-color: var(--ibm-orange-40);
				color: white;
			};
			--tri-major-warning-outline-button-press: {
				background-color: var(--ibm-orange-60);
				color: white;
			};
			/* danger */
			--tri-danger-button: {
				padding: var(--tri-button-padding);
				background-color: var(--ibm-orange-50);
				color: white;
			};
			--tri-danger-button-hover: {
				background-color: var(--ibm-orange-30);
				color: white;
			};
			--tri-danger-button-press: {
				background-color: var(--ibm-orange-70);
				color: white;
			};
			/* danger-outline */
			--tri-danger-outline-button: {
				border: 1px solid var(--ibm-gray-30);
				padding: var(--tri-button-1px-border-padding);
				background-color: white;
				color: var(--ibm-orange-50);
			};
			--tri-danger-outline-button-hover: {
				border: none;
				padding: var(--tri-button-padding);
				background-color: var(--ibm-orange-50);
				color: white;
			};
			--tri-danger-outline-button-press: {
				background-color: var(--ibm-orange-70);
				color: white;
			};
			/* disabled */
			--tri-disabled-button: {
				border: 2px solid var(--ibm-gray-10);
				padding: var(--tri-button-2px-border-padding);
				background-color: transparent;
				color: var(--ibm-gray-30);
			};
	
			/*
			 * Icon Buttons
			 */
			/* primary */
			--tri-primary-icon-button-color: var(--ibm-blue-50);
			--tri-primary-icon-button-hover-color: var(--ibm-blue-30);
			--tri-primary-icon-button-press-color: var(--ibm-blue-70);
			/* secondary */
			--tri-secondary-icon-button-color: var(--ibm-gray-50);
			--tri-secondary-icon-button-hover-color: var(--ibm-gray-30);
			--tri-secondary-icon-button-press-color: var(--ibm-gray-70);
			/* info */
			--tri-info-icon-button-color: var(--ibm-blue-30);
			--tri-info-icon-button-hover-color: var(--ibm-blue-20);
			--tri-info-icon-button-press-color: var(--ibm-blue-40);
			/* success */
			--tri-success-icon-button-color: var(--ibm-green-30);
			--tri-success-icon-button-hover-color: var(--ibm-green-20);
			--tri-success-icon-button-press-color: var(--ibm-green-50);
			/* warning */
			--tri-warning-icon-button-color: var(--ibm-yellow-30);
			--tri-warning-icon-button-hover-color: var(--ibm-yellow-20);
			--tri-warning-icon-button-press-color: var(--ibm-yellow-40);
			/* major-warning */
			--tri-major-warning-icon-button-color: var(--ibm-orange-40);
			--tri-major-warning-icon-button-hover-color: var(--ibm-orange-20);
			--tri-major-warning-icon-button-press-color: var(--ibm-orange-60);
			/* danger */
			--tri-danger-icon-button-color: var(--ibm-orange-50);
			--tri-danger-icon-button-hover-color: var(--ibm-orange-30);
			--tri-danger-icon-button-press-color: var(--ibm-orange-70);
			/* error */
			--tri-error-icon-button-color: var(--ibm-red-50);
			--tri-error-icon-button-hover-color: var(--ibm-red-30);
			--tri-error-icon-button-press-color: var(--ibm-red-70);
			/* disabled */
			--tri-disabled-icon-button-color: var(--ibm-gray-30);
	
			/*
			 * paper-button
			 */		
			--paper-button-flat-keyboard-focus: {
				outline: 3px double var(--ibm-gray-50);
			}
	
			/*
			 * paper-checkbox
			 */
			--paper-checkbox-unchecked-color: var(--tri-primary-color);
			--paper-checkbox-unchecked-ink-color: var(--tri-primary-color);
			--paper-checkbox-checked-color: var(--tri-primary-color);
			--paper-checkbox-checked-ink-color: var(--tri-primary-color);
			--paper-checkbox-label-color: var(--tri-primary-content-color);
	
			/*
			 * paper-dialog
			 */
			--paper-dialog: {
				font-family: var(--tri-font-family);
			};
			--paper-dialog-title: {
				font-family: var(--tri-font-family);
			};
	
			/*
			 * paper-icon-button
			 */
			--paper-icon-button-disabled-text: var(--tri-disabled-dark-color);
	
			/*
			 * paper-input
			 */
			--paper-input-container-color: var(--tri-primary-content-label-color);
			--paper-input-container-input-color: var(--tri-primary-content-color);
			--paper-input-container-focus-color: var(--tri-primary-color);
			--paper-input-container-invalid-color: var(--tri-error-color);
			--paper-input-container-input: {
				font-family: var(--tri-font-family);
			};
			--paper-input-container-label: {
				font-family: var(--tri-font-family);
			};
	
			/*
			 * paper-item
			 */
			--paper-item: {
				font-family: var(--tri-font-family);
			};
			--paper-item-disabled-color: var(--tri-disabled-dark-color);
			--triplat-select-input-paper-item: {
				font-family: var(--tri-font-family);
			};
			
			/*
			 * paper-radio-button
			 */
			--paper-radio-button-unchecked-color: var(--tri-primary-color);
			--paper-radio-button-unchecked-ink-color: var(--tri-primary-color);
			--paper-radio-button-checked-color: var(--tri-primary-color);
			--paper-radio-button-checked-ink-color: var(--tri-primary-color);
			--paper-radio-button-label-color: var(--tri-primary-content-color);
			
			/*
			 * paper-spinner
			 */
			--paper-spinner-layer-1-color: var(--tri-primary-color);
			--paper-spinner-layer-2-color: var(--tri-secondary-color);
			--paper-spinner-layer-3-color: var(--tri-primary-color);
			--paper-spinner-layer-4-color: var(--tri-secondary-color);
	
			/*
			 * paper-toolbar
			 */
			--paper-toolbar-height: 50px;
			--paper-toolbar-sm-height: 50px;
			--paper-toolbar-background: var(--tri-header-background-color);
			--paper-toolbar-color: var(--tri-header-color);
			--paper-toolbar-title: {
				font-family: var(--tri-font-family);
			};
			--paper-toolbar-content: {
				padding: 0 0 0 0;
			};
	
			/*
			 * paper-tooltip
			 */
			--paper-tooltip: {
				font-family: var(--tri-font-family);
				font-size: 14px;
			};
		}
	
	</style>
</custom-style>
`;

addCustomStyle(customStyle0);