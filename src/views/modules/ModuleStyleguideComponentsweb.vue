<template>
	<div id="styleguide-componentsweb" class="section">
		<h1 class="subsection align-center">Components Web</h1>

		<!-- BUTTONS -->
		<div id="styleguide-componentsweb-buttons" class="section">
			<h2>Buttons</h2>

			<!-- button-style -->
			<div class="subsection">
				<h3>Button Styles</h3>
				<button class="button button-primary--gradient">
					Button Primary Gradient
				</button>
				<br />
				<button class="button button-primary">Button Primary</button>
				<br />
				<button class="button button-base">Button Base</button>
				<br />
				<button class="button button-base">
					<icon-gael class="icon"></icon-gael>
				</button>
				<br />
				<button class="button button-base--ghost">Button Base Ghost</button>
				<br />
				<button class="button button-white--ghost">
					Button White Ghost
				</button>
				<br />
				<button class="button button-success">Button Succes</button>
				<br />
				<button class="button button-danger">Button Danger</button>

				<code>
					&lt;button class="
					<span class="class">button button-primary--gradient</span>"&gt;
					&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-primary</span>"&gt;
					&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-base</span>"&gt;
					&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-base</span>"&gt;
					<br />&nbsp;&nbsp; &lt;icon-gael class="
					<span class="class">icon</span>"&gt; &lt;/icon-gael&gt;
					<br />&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-base--ghost</span>"&gt;
					&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-white--ghost</span>"&gt;
					&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-success</span>"&gt;
					&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-danger</span>"&gt;
					&lt;/button&gt;
				</code>
			</div>

			<!-- button-sizes -->
			<div class="subsection">
				<h3>Button Sizes</h3>
				<button class="button button-base button-block">
					Button Block
				</button>
				<button class="button button-base button-small">
					Button Small
				</button>
				<br />
				<button class="button button-base button-mini">Button Mini</button>

				<code>
					&lt;button class="
					<span class="class">button button-base button-block</span>"&gt;
					&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-base button-small</span>"&gt;
					&lt;/button&gt; <br />&lt;button class="
					<span class="class">button button-base button-mini</span>"&gt;
					&lt;/button&gt;
				</code>
			</div>

			<!-- button-tags -->
			<div class="subsection">
				<h3>Button Tags</h3>
				<button
					id="styleguide-button-tag"
					class="button button-base--ghost button-tag"
					v-on:click="buttonActiveToggle()"
				>
					Button Base Ghost Tag
				</button>
				<br />
				<button
					id="styleguide-button-tag-small"
					class="button button-base--ghost button-small button-tag"
					v-on:click="buttonActiveToggle()"
				>
					Button Base Ghost Small Tag
				</button>
				<br />
				<button
					id="styleguide-button-tag-mini"
					class="button button-base--ghost button-mini button-tag"
					v-on:click="buttonActiveToggle()"
				>
					Button Base Ghost Mini Tag
				</button>

				<code>
					&lt;button class="
					<span class="class">button button-base--ghost button-tag</span
					>"&gt; &lt;/button&gt; <br />&lt;&lt;button class="
					<span class="class"
						>button button-base--ghost button-small button-tag</span
					>"&gt; &lt;/button&gt; <br />&lt;button class="
					<span class="class"
						>button button-base--ghost button-mini button-tag</span
					>"&gt; &lt;/button&gt;
				</code>
			</div>

			<!-- button-specials -->
			<div class="subsection">
				<h3>Button Specials</h3>
				<button class="button button-special button-base">
					<icon-gael class="icon"></icon-gael>
				</button>
				<button class="button button-special button-primary">
					<icon-gael class="icon"></icon-gael>
				</button>
				<button class="button button-special button-base--ghost">
					<icon-gael class="icon"></icon-gael>
				</button>
				<button class="button button-special button-white--ghost">
					<icon-gael class="icon"></icon-gael>
				</button>
				<br />
				<a class="display-inline-block">
					<button class="button button-special button-base">
						<icon-gael class="icon"></icon-gael>
					</button>
				</a>
				<br />
				<button class="button button-special button-base button-small">
					<icon-gael class="icon"></icon-gael>
				</button>

				<code>
					&lt;button class="
					<span class="class">button button-special button-base</span>"&gt;
					&lt;/button&gt;
					<br />
					&lt;button class="
					<span class="class">button button-special button-primary</span
					>"&gt; &lt;/button&gt;
					<br />
					&lt;button class="
					<span class="class"
						>button button-special button-base--ghost</span
					>"&gt; &lt;/button&gt;
					<br />
					&lt;button class="
					<span class="class"
						>button button-special button-white--ghost</span
					>"&gt; &lt;/button&gt;
					<br />
					&lt;a class="
					<span class="class">display-inline-block</span>"&gt;
					<br />
					&nbsp;&nbsp; &lt;button class="
					<span class="class">button button-special button-base</span>"&gt;
					&lt;/button&gt; <br />&lt;/a&gt;
					<br />
					&lt;button class="
					<span class="class"
						>button button-special button-base button-small</span
					>"&gt; &lt;/button&gt;
				</code>
			</div>

			<!-- button-states -->
			<div class="subsection">
				<h3>Button State</h3>
				<button class="button button-base" disabled>Button Disabled</button>
				<br />
				<button
					id="styleguide-button-base-active"
					class="button button-base button-active"
					v-on:click="buttonActiveToggle()"
				>
					Button Base Active
				</button>

				<code>
					&lt;button class="
					<span class="class">button button-primary</span>"
					<span class="variable">disabled</span>&gt; &lt;/button&gt;
					<br />&lt;button class="
					<span class="class">button button-base button-active</span>"&gt;
					&lt;/button&gt;
				</code>
			</div>

			<!-- links -->
			<div class="subsection">
				<h3>Links</h3>
				<a class="link link-base">Link Base</a>
				<br />
				<a class="link link-base link-bold">Link Base (bold)</a>
				<br />
				<a class="link link-primary">Link Primary</a>
				<br />
				<a class="link link-primary link-bold">Link Primary (bold)</a>
				<br />
				<a class="link link-white">Link White</a>
				<br />
				<a class="link link-white link-bold">Link White (bold)</a>
				<br />
				<a class="link link-external">Link External</a>
				<br />
				<a class="link link-external link-bold">Link External (bold)</a>
				<br />
				<br />
				<a class="link link-base link-small">Link Small</a>
				<br />
				<a class="link link-base link-mini">Link Mini</a>
				<br />
				<br />
				<a
					id="styleguide-link-active"
					class="link link-base link-active"
					v-on:click="linkActiveToggle()"
					>Link Active</a
				>

				<code>
					&lt;a class="
					<span class="class">link link-base</span>"&gt; &lt;/a&gt;
					<br />&lt;a class="
					<span class="class">link link-base link-bold</span>"&gt;
					&lt;/a&gt; <br />&lt;a class="
					<span class="class">link link-primary</span>"&gt; &lt;/a&gt;
					<br />&lt;a class="
					<span class="class">link link-primary link-bold</span>"&gt;
					&lt;/a&gt; <br />&lt;a class="
					<span class="class">link link-white</span>"&gt; &lt;/a&gt;
					<br />&lt;a class="
					<span class="class">link link-white link-bold</span>"&gt;
					&lt;/a&gt; <br />&lt;a class="
					<span class="class">link link-external</span>"&gt; &lt;/a&gt;
					<br />&lt;a class="
					<span class="class">link link-external link-bold</span>"&gt;
					&lt;/a&gt; <br />&lt;a class="
					<span class="class">link link-base link-small</span>"&gt;
					&lt;/a&gt; <br />&lt;a class="
					<span class="class">link link-base link-mini</span>"&gt;
					&lt;/a&gt; <br />&lt;a class="
					<span class="class">link link-base link-active</span>"&gt;
					&lt;/a&gt;
				</code>
			</div>
		</div>
		<!-- /BUTTONS -->

		<!-- FORMS -->
		<div id="styleguide-componentsweb-forms" class="section">
			<h2>Forms</h2>

			<!-- form-field -->
			<div class="subsection">
				<h3>Form Field</h3>
				<form id="styleguide-formsimple">
					<legend>Legend (form &lt; 4 fields)</legend>
					<input
						id="styleguide-formsimple-email"
						class="field"
						type="email"
						placeholder="Email*"
						required
					/>
					<textarea
						id="styleguide-formsimple-message"
						class="field"
						type="text"
						placeholder="Message*"
						required
					></textarea>
					<button
						type="submit"
						class="button button-block button-primary--gradient"
					>
						Submit
					</button>
				</form>
				<br />
				<br />
				<br />
				<form id="styleguide-form">
					<legend>Legend (form &gt; 3 fields)</legend>
					<label for="styleguide-form-name">Name</label>
					<input
						id="styleguide-form-name"
						class="field"
						type="text"
						placeholder="Name"
					/>
					<label for="styleguide-form-age">Age</label>
					<input
						id="styleguide-form-age"
						class="field"
						type="number"
						placeholder="Age"
					/>
					<label for="styleguide-form-date">Date</label>
					<input
						id="styleguide-form-date"
						class="field"
						type="date"
						min="2018-01-01"
						max="2019-12-31"
					/>
					<label for="styleguide-form-email">Email*</label>
					<input
						id="styleguide-form-email"
						class="field field-icon-email"
						type="email"
						placeholder="Email"
						required
					/>
					<label for="styleguide-form-password">Password*</label>
					<input
						id="styleguide-form-password"
						class="field field-icon-password"
						type="password"
						placeholder="Password"
						required
					/>
					<label>
						<span class="color-danger">Label with error message</span>
					</label>
					<input
						class="field field-error"
						type="text"
						placeholder="Error"
					/>
					<label>
						<span class="setting-opacity--soft">Label disabled</span>
					</label>
					<input
						class="field"
						type="text"
						placeholder="Disabled"
						disabled
					/>
					<label>Option selected: {{ styleguideOption }}</label>
					<select class="field" v-model="styleguideOption">
						<option value="Option 0" disabled selected>Options</option>
						<option value="Option 1">Option 1</option>
						<option value="Option 2">Option 2</option>
						<option value="Option 3" disabled>Option disabled</option>
					</select>
					<label>Label</label>
					<input
						class="field field-inline"
						type="text"
						placeholder="Inline"
					/>
					<input
						class="field field-inline"
						type="text"
						placeholder="Inline"
					/>
					<label for="form-message">Message*</label>
					<textarea
						id="styleguide-form-message"
						class="field field-icon-message"
						type="text"
						placeholder="Message"
						required
					></textarea>
					<button
						type="submit"
						class="button button-block button-primary--gradient"
					>
						Send Message
					</button>
				</form>
				<br />
				<br />
				<br />
				<form id="styleguide-formsearch">
					<label for="styleguide-formsearch-input">Search</label>
					<input
						id="styleguide-formsearch-input"
						class="field field-button field-icon-location"
						type="text"
						placeholder="Search"
					/>
					<button type="button" class="button button-primary">
						<icon-glass class="icon"></icon-glass>
					</button>
				</form>

				<code>code</code>
			</div>

			<!-- form-radio -->
			<div class="subsection">
				<h3>Selection Controls</h3>

				<form id="styleguide-formradio">
					<legend>Radio selected: {{ styleguideRadio }}</legend>
					<label class="radio">
						Radio 1
						<input
							type="radio"
							id="styleguide-radio1"
							value="Radio 1"
							v-model="styleguideRadio"
							checked
						/>
						<span></span>
					</label>
					<br />
					<label class="radio">
						Radio 2
						<input
							type="radio"
							id="styleguide-radio2"
							value="Radio 2"
							v-model="styleguideRadio"
						/>
						<span></span>
					</label>
					<br />
					<label class="radio radio-disabled">
						Radio disabled
						<input
							type="radio"
							id="styleguide-radio3"
							value="Radio 3"
							v-model="styleguideRadio"
							disabled
						/>
						<span></span>
					</label>
					<br />
					<br />
					<legend>Checkbox selected: {{ styleguideCheckbox }}</legend>
					<label class="checkbox">
						Checkbox 1
						<input
							type="checkbox"
							id="styleguide-checkbox1"
							value="Checkbox 1"
							v-model="styleguideCheckbox"
							checked
						/>
						<span></span>
					</label>
					<br />
					<label class="checkbox">
						Checkbox 2
						<input
							type="checkbox"
							id="styleguide-checkbox2"
							value="Checkbox 2"
							v-model="styleguideCheckbox"
						/>
						<span></span>
					</label>
					<br />
					<label class="checkbox checkbox-disabled">
						Checkbox disabled
						<input
							type="checkbox"
							id="styleguide-checkbox3"
							value="Checkbox 3"
							v-model="styleguideCheckbox"
							disabled
						/>
						<span></span>
					</label>
				</form>

				<code>code</code>
			</div>
		</div>
		<!-- /FORMS -->

		<!-- ICONS -->
		<div id="styleguide-componentsweb-icons" class="section">
			<h2>Icons</h2>

			<!-- icon-styles -->
			<div class="subsection">
				<h3>Icon Styles</h3>
				<icon-gael class="icon color-base"></icon-gael>
				<br />
				<icon-gael class="icon color-primary"></icon-gael>
				<br />
				<icon-gael class="icon color-white"></icon-gael>
				<br />

				<code>
					&lt;icon-gael class="
					<span class="class">icon color-base</span>"&gt;
					&lt;/icon-gael&gt; <br />&lt;icon-gael class="
					<span class="class">icon color-primary</span>"&gt;
					&lt;/icon-gael&gt; <br />&lt;icon-gael class="
					<span class="class">icon color-white</span>"&gt;
					&lt;/icon-gael&gt;
				</code>
			</div>

			<!-- icon-sizes -->
			<div class="subsection">
				<h3>Icon Sizes</h3>
				<icon-gael class="icon color-base icon-mini"></icon-gael>
				<br />
				<icon-gael class="icon color-base icon-small"></icon-gael>
				<br />
				<icon-gael class="icon color-base"></icon-gael>
				<br />
				<icon-gael class="icon color-base icon-big"></icon-gael>
				<br />

				<code>
					&lt;icon-gael class="
					<span class="class">icon color-base icon-mini</span>"&gt;
					&lt;/icon-gael&gt;
					<span class="comment">//12px</span>
					<br />&lt;icon-gael class="
					<span class="class">icon color-base icon-small</span>"&gt;
					&lt;/icon-gael&gt;
					<span class="comment">//16px</span>
					<br />&lt;icon-gael class="
					<span class="class">icon color-base</span>"&gt;
					&lt;/icon-gael&gt;
					<span class="comment">//20px</span>
					<br />&lt;icon-gael class="
					<span class="class">icon color-base icon-big</span>"&gt;
					&lt;/icon-gael&gt;
					<span class="comment">//30px</span>
				</code>
			</div>
		</div>
		<!-- /ICONS -->

		<!-- TOOLTIPS -->
		<div id="styleguide-componentsweb-tooltips" class="section">
			<h2>Tooltips</h2>
			<div class="tooltip">
				Tooltip
				<span class="tooltip-text">TooltipTooltipTooltipTooltip</span>
			</div>
			<code>code</code>
		</div>
		<!-- /TOOLTIPS -->
	</div>
</template>

<script>
	import IconGael from "/src/views/icons/IconGael.vue";
	import IconGlass from "/src/views/icons/IconGlass.vue";

	export default {
		data() {
			return {
				styleguideOption: "Option 0",
				styleguideRadio: "Radio 1",
				styleguideCheckbox: ["Checkbox 1"],
			};
		},
		components: {
			IconGael,
			IconGlass,
		},
		// functions
		methods: {
			// on:click
			// toggle .button-active
			buttonActiveToggle(e) {
				e.target.classList.toggle("button-active");
			},
			// on:click
			// toggle .link-active
			linkActiveToggle(e) {
				e.target.classList.toggle("link-active");
			},
		},
	};
</script>
