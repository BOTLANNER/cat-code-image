import { html, css, LitElement, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A cat image component for specific HTTP status codes.
 * 
 * 
 * @example
 * 
 * ```html
 * <b0t-cat-code-image label="Whoopsie" code="401"></b0t-cat-code-image>
 * ```
 * 
 * @element b0t-cat-code-image
 * 
 * @property {Number} [code=404] - The code to display an image for
 * @property {string} [label=''] - Additional text to display.
 * 
 * 
 * @cssprop --b0t-label-font-family - Text font family.
 * @cssprop --b0t-label-font-size - Text font size.
 * @cssprop --b0t-label-font-weight - Text font weight.
 * 
 */
@customElement('b0t-cat-code-image')
export class CatCodeImage extends LitElement {

	@property({ type: String, reflect: true }) label?: string;
	@property({ type: Number, reflect: true }) code: number = 404;

    // loaded: boolean = false;

	// ------------
	// CONSTRUCTORS
	// ------------

	/**
	 * Initialise the component.
	 */
	constructor() {

		super();
	}

	// ------------------
	// LIFECYCLE HANDLERS
	// ------------------

	// n/a

	// ----------------
	// PUBLIC FUNCTIONS
	// ----------------

	// n/a

	// --------------
	// EVENT HANDLERS
	// --------------

	// n/a

	// ----------------
	// HELPER FUNCTIONS
	// ----------------

	// n/a

	// -------------------
	// RENDERING TEMPLATES
	// -------------------

	/**
	 * The element style template.
	 * 
	 */
	static override get styles() {

		return [
			css`
				/* HOST */

				:host {
					display: inline-flex;
				}

				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					width: 100%;

					border-radius: 0px;
					padding: 10px;
					text-align: center;

					font-family: var(--b0t-label-font-family,Arial);
					font-size: var(--b0t-label-font-size,12px);
					font-weight: var(--b0t-label-font-weight,normal);
					
					cursor: pointer;
					user-select: none;

					transition: all 0.25s;
				}

                .code-image {
                    display: block;
                    -webkit-user-select: none;
                    margin: auto;
                    background-color: hsl(0, 0%, 90%);
                    transition: background-color 300ms;
                }
			`
		];
	}

	/**
	 * Apply changes to the element DOM when a property value changes.
	 * 
	 * @returns {TemplateResult} The updated DOM template.
	 */
	override render() {

        var imageSrc:string = `https://http.cat/${this.code}`

		// Generate the component template.
		return html`
			<div
				class="container">                
                <img class="code-image"
                    src="${imageSrc}">                    
				${this.label}
            </div>
		`;
	}
}
