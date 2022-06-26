<template>
	<div id="styleguide-elements" class="section">
		<h1 class="align-center">Elements</h1>

		<!-- ATOMIC -->
		<div id="styleguide-elements-atomic" class="section">
			<h2>Atomic Design</h2>
			<p>
				<a
					href="https://medium.com/techwasti/atomic-design-for-web-component-bec382a3cf0e"
					class="link link-external"
					target="_blank"
					>Atomic Design</a
				>
				is the core principle of this website’s architecture. <br />•
				<b>Elements</b> (atoms) are the basic unmodifiable units. Ex:
				spacing, fonts or colors. <br />• <b>Components</b> (molecules) are
				made of Elements. Ex: a button is made of a font, a background color
				and a border radius. <br />• <b>Modules</b> (organisms) are sections
				of pages based on Elements and Components that can be re-used. Ex:
				Header, Footer. <br />• <b>The Website</b> (ecosystem) is composed
				of multiple Pages that are composed of different Modules, Components
				and Elements.
			</p>
			<!-- <br /> -->
			<!-- <p>BEM</p> -->

			<code>
				&lt;div id="
				<span class="class">view</span>"&gt; &lt;/div&gt; &nbsp;&nbsp;(with
				<span class="variable">_view.scss</span>) <br />&lt;div id="
				<span class="class">module</span>"&gt; &lt;/div&gt;
				&nbsp;&nbsp;(with <span class="variable">_module.scss</span>)
				<br />
				<br />&lt;div id=" <span class="class">view-block</span>" class="
				<span class="class">section</span>"&gt; &lt;/div&gt;
				<br />&nbsp;&nbsp; &lt;div class="
				<span class="class">view-block--modifier</span>" class="
				<span class="class">subsection</span>"&gt; &lt;/div&gt;
				<br />&lt;/div&gt;
			</code>
		</div>
		<!-- /ATOMIC -->

		<!-- BASELINE -->
		<div id="styleguide-elements-baseline" class="section">
			<h2>Baseline</h2>
			<p>
				<a
					href="https://zellwk.com/blog/why-vertical-rhythms/"
					class="link link-external"
					target="_blank"
					>Vertical Rythme</a
				>
				is based on an 8px baseline, genesis of all vertical spacing,
				margin, padding and line-heignt.
			</p>
			<code>
				<div
					v-for="baseline in data.styleguide.baselines"
					v-bind:key="baseline.id"
				>
					<span class="variable">$b{{ baseline.id }}</span
					>;
					<span class="comment">//{{ baseline.id }}px</span>
				</div>
			</code>
		</div>
		<!-- /BASELINE -->

		<!-- COLORS -->
		<div id="styleguide-elements-colors" class="section">
			<h2>Colors</h2>
			<p>
				<a
					href="https://webflow.com/blog/web-design-101-color-theory"
					class="link link-external"
					target="_blank"
					>Color Theory</a
				>
				is based on a
				<span v-if="(themeCurrent = themeLight)">HSB(260, 60, 100)</span>
				<span v-else>HSB(10,60,100)</span> primary color, genesis of all
				theme and messaging colors.
			</p>

			<!-- theme light -->
			<div v-if="(themeCurrent = themeLight)">
				<!-- color-primary -->
				<div class="subsection">
					<h3>Color Primary</h3>
					<ul>
						<li
							v-for="colorPrimary in data.styleguide.colors.light
								.colorPrimaries"
							v-bind:key="colorPrimary.id"
							class="swatch setting-shadow--motion"
						>
							<div
								class="swatch-color"
								v-bind:style="{ backgroundColor: colorPrimary.hex }"
							>
								<h5>${{ colorPrimary.id }}</h5>
							</div>
							<div class="swatch-info">
								<h6>{{ colorPrimary.hex }}</h6>
								<h6>{{ colorPrimary.hsb }}</h6>
								<h6>{{ colorPrimary.role }}</h6>
							</div>
						</li>
						<li class="swatch setting-shadow--motion">
							<div
								class="swatch-color"
								v-bind:style="{
									backgroundImage:
										'linear-gradient(' +
										data.styleguide.colors.light.colorPrimaryGradients
											.hex +
										')',
								}"
							>
								<h5>
									${{
										data.styleguide.colors.light.colorPrimaryGradients
											.id
									}}
								</h5>
							</div>
							<div class="swatch-info">
								<h6>
									{{
										data.styleguide.colors.light.colorPrimaryGradients
											.hex
									}}
								</h6>
								<h6>
									{{
										data.styleguide.colors.light.colorPrimaryGradients
											.hsb
									}}
								</h6>
								<h6>
									{{
										data.styleguide.colors.light.colorPrimaryGradients
											.role
									}}
								</h6>
							</div>
						</li>
					</ul>

					<ul>
						<li
							v-for="colorPrimaryShade in data.styleguide.colors.light
								.colorPrimaryShades"
							v-bind:key="colorPrimaryShade.id"
							class="swatch setting-shadow--motion"
						>
							<div
								class="swatch-color"
								v-bind:style="{
									backgroundColor: colorPrimaryShade.hex,
								}"
							>
								<h5>${{ colorPrimaryShade.id }}</h5>
							</div>
							<div class="swatch-info">
								<h6>{{ colorPrimaryShade.hex }}</h6>
								<h6>{{ colorPrimaryShade.hsb }}</h6>
								<h6>{{ colorPrimaryShade.role }}</h6>
							</div>
						</li>
					</ul>
					>
				</div>

				<!-- color-base -->
				<div class="subsection">
					<h3>Color Base</h3>
					<ul>
						<li
							v-for="colorBase in data.styleguide.colors.light
								.colorBases"
							v-bind:key="colorBase.id"
							class="swatch setting-shadow--motion"
						>
							<div
								class="swatch-color"
								v-bind:style="{ backgroundColor: colorBase.rgba }"
							>
								<h5>${{ colorBase.id }}</h5>
							</div>
							<div class="swatch-info">
								<h6>{{ colorBase.hex }}</h6>
								<h6>{{ colorBase.rgba }}</h6>
								<h6>{{ colorBase.role }}</h6>
							</div>
						</li>
					</ul>
				</div>

				<!-- color-messaging -->
				<div class="subsection">
					<h3>Color Messaging</h3>
					<ul>
						<li
							v-for="colorMessage in data.styleguide.colors.light
								.colorMessages"
							v-bind:key="colorMessage.id"
							class="swatch setting-shadow--motion"
						>
							<div
								class="swatch-color"
								v-bind:style="{ backgroundColor: colorMessage.hex }"
							>
								<h5>${{ colorMessage.id }}</h5>
							</div>
							<div class="swatch-info">
								<h6>{{ colorMessage.hex }}</h6>
								<h6>{{ colorMessage.hsb }}</h6>
								<h6>{{ colorMessage.role }}</h6>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- /theme light -->
			<!-- theme dark -->
			<div v-else>
				<!-- color-primary -->
				<div class="subsection">
					<h3>Color Primary</h3>
					<ul>
						<li
							v-for="colorPrimary in data.styleguide.colors.dark
								.colorPrimaries"
							v-bind:key="colorPrimary.id"
							class="swatch setting-shadow--motion"
						>
							<div
								class="swatch-color"
								v-bind:style="{ backgroundColor: colorPrimary.hex }"
							>
								<h5>${{ colorPrimary.id }}</h5>
							</div>
							<div class="swatch-info">
								<h6>{{ colorPrimary.hex }}</h6>
								<h6>{{ colorPrimary.hsb }}</h6>
								<h6>{{ colorPrimary.role }}</h6>
							</div>
						</li>
						<li class="swatch setting-shadow--motion">
							<div
								class="swatch-color"
								v-bind:style="{
									backgroundImage:
										'linear-gradient(' +
										data.styleguide.colors.dark.colorPrimaryGradients
											.hex +
										')',
								}"
							>
								<h5>
									${{
										data.styleguide.colors.dark.colorPrimaryGradients
											.id
									}}
								</h5>
							</div>
							<div class="swatch-info">
								<h6>
									{{
										data.styleguide.colors.dark.colorPrimaryGradients
											.hex
									}}
								</h6>
								<h6>
									{{
										data.styleguide.colors.dark.colorPrimaryGradients
											.hsb
									}}
								</h6>
								<h6>
									{{
										data.styleguide.colors.dark.colorPrimaryGradients
											.role
									}}
								</h6>
							</div>
						</li>
					</ul>

					<ul>
						<li
							v-for="colorPrimaryShade in data.styleguide.colors.dark
								.colorPrimaryShades"
							v-bind:key="colorPrimaryShade.id"
							class="swatch setting-shadow--motion"
						>
							<div
								class="swatch-color"
								v-bind:style="{
									backgroundColor: colorPrimaryShade.hex,
								}"
							>
								<h5>${{ colorPrimaryShade.id }}</h5>
							</div>
							<div class="swatch-info">
								<h6>{{ colorPrimaryShade.hex }}</h6>
								<h6>{{ colorPrimaryShade.hsb }}</h6>
								<h6>{{ colorPrimaryShade.role }}</h6>
							</div>
						</li>
					</ul>
				</div>

				<!-- color-base -->
				<div class="subsection">
					<h3>Color Base</h3>
					<ul>
						<li
							v-for="colorBase in data.styleguide.colors.dark.colorBases"
							v-bind:key="colorBase.id"
							class="swatch setting-shadow--motion"
						>
							<div
								class="swatch-color"
								v-bind:style="{ backgroundColor: colorBase.rgba }"
							>
								<h5>${{ colorBase.id }}</h5>
							</div>
							<div class="swatch-info">
								<h6>{{ colorBase.hex }}</h6>
								<h6>{{ colorBase.rgba }}</h6>
								<h6>{{ colorBase.role }}</h6>
							</div>
						</li>
					</ul>
				</div>

				<!-- color-messaging -->
				<div class="subsection">
					<h3>Color Messaging</h3>
					<ul>
						<li
							v-for="colorMessage in data.styleguide.colors.dark
								.colorMessages"
							v-bind:key="colorMessage.id"
							class="swatch setting-shadow--motion"
						>
							<div
								class="swatch-color"
								v-bind:style="{ backgroundColor: colorMessage.hex }"
							>
								<h5>${{ colorMessage.id }}</h5>
							</div>
							<div class="swatch-info">
								<h6>{{ colorMessage.hex }}</h6>
								<h6>{{ colorMessage.hsb }}</h6>
								<h6>{{ colorMessage.role }}</h6>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- /theme dark -->
		</div>
		<!-- /COLORS -->

		<!-- TEXTS -->
		<div id="styleguide-elements-texts" class="section">
			<h2>Texts</h2>

			<!-- h1 -->
			<div class="subsection">
				<h1>h1. Page Title</h1>
				<code>
					<span class="comment">
						//Source Sans Pro Regular / color-base
						<br />//font-size: 60px / line-height: 80px
					</span>
				</code>
			</div>

			<!-- h2 -->
			<div class="subsection">
				<h2>h2. Section Title</h2>
				<code>
					<span class="comment">
						//Source Sans Pro Regular / color-base
						<br />//font-size: 50px / line-height: 64px
					</span>
				</code>
			</div>

			<!-- h3 -->
			<div class="subsection">
				<h3>h3. Subsection Title</h3>
				<code>
					<span class="comment">
						//Source Sans Pro Regular / color-base
						<br />//font-size: 30px / line-height: 48px
					</span>
				</code>
			</div>

			<!-- p -->
			<div class="subsection">
				<p>
					p. Text,
					<b>p. Text (bold)</b>
				</p>
				<p class="color-base--description">
					p. Text,
					<b>p. Text (bold)</b>
				</p>
				<code>
					<span class="comment">
						//Source Sans Pro Regular, Bold / color-base,
						color-base--description
						<br />//font-size: 20px / line-height: 32px
					</span>
				</code>
			</div>

			<!-- h5 -->
			<div class="subsection">
				<h5>
					h5. Description,
					<b>h5. Description (bold)</b>
				</h5>
				<h5 class="color-base--description">
					h5. Description,
					<b>h5. Description (bold)</b>
				</h5>
				<code>
					<span class="comment">
						//Source Sans Pro Regular, Bold / color-base,
						color-base--description
						<br />//font-size: 16px / line-height: 24px
					</span>
				</code>
			</div>

			<!-- h6 -->
			<div class="subsection">
				<h6>h6. Legal</h6>
				<h6 class="color-base--description">h6. Legal</h6>
				<code>
					<span class="comment">
						//Source Sans Pro Regular / color-base,
						color-base--description
						<br />//font-size: 12px / line-height: 16px
					</span>
				</code>
			</div>

			<!-- code -->
			<div class="subsection">
				<h5 class="text-secondary">code</h5>
				<h5 class="text-secondary color-base--description">code</h5>
				<code>
					<span class="comment">
						//Courier Regular / color-base
						<br />//font-size: 16px / line-height: 24px
					</span>
				</code>
			</div>
		</div>
		<!-- /TEXTS -->

		<!-- SETTINGS -->
		<div id="styleguide-elements-settings" class="section">
			<h2>Settings</h2>

			<!-- setting-opacity -->
			<div class="subsection">
				<h3>Setting Opacity</h3>
				<ul>
					<li class="swatch setting-shadow--motion">
						<div class="swatch-color" style="opacity: 0.32">
							<h5>$setting-opacity--soft</h5>
						</div>
						<div class="swatch-info">
							<h6>α(0.32)</h6>
							<h6>component disabled</h6>
						</div>
					</li>
					<li class="swatch setting-shadow--motion">
						<div class="swatch-color" style="opacity: 0.96">
							<h5>$setting-opacity--strong</h5>
						</div>
						<div class="swatch-info">
							<h6>α(0.96)</h6>
							<h6>header & alerts backgound</h6>
						</div>
					</li>
				</ul>
			</div>

			<!-- setting-blur -->
			<div class="subsection">
				<h3>Setting Blur</h3>
				<ul>
					<li class="swatch setting-shadow--motion">
						<div class="swatch-color" style="blur: 8px">
							<h5>$setting-blur</h5>
						</div>
						<div class="swatch-info">
							<h6>$b8</h6>
							<h6></h6>
						</div>
					</li>
				</ul>
			</div>

			<!-- setting-border -->
			<div class="subsection">
				<h3>Setting Border</h3>
				<ul>
					<li class="swatch setting-shadow--motion">
						<div class="swatch-color swatch-border">
							<h5>$setting-border</h5>
						</div>
						<div class="swatch-info">
							<h6>1px solid</h6>
							<h6>color-base—background</h6>
						</div>
					</li>
				</ul>
			</div>

			<!-- setting-radius -->
			<div class="subsection">
				<h3>Setting Radius</h3>
				<ul>
					<li
						class="swatch setting-shadow--motion"
						style="border-radius: 4px 4px 0 0"
					>
						<div class="swatch-color" style="border-radius: 4px 4px 0 0">
							<h5>$setting-radius--soft</h5>
						</div>
						<div class="swatch-info">
							<h6>$b4</h6>
							<h6>components</h6>
						</div>
					</li>
					<li
						class="swatch setting-shadow--motion"
						style="border-radius: 8px 8px 0 0"
					>
						<div class="swatch-color" style="border-radius: 8px 8px 0 0">
							<h5>$setting-radius--strong</h5>
						</div>
						<div class="swatch-info">
							<h6>$b8</h6>
							<h6>component containers</h6>
						</div>
					</li>
					<li
						class="swatch setting-shadow--motion"
						style="border-radius: 256px 256px 0 0"
					>
						<div
							class="swatch-color"
							style="border-radius: 256px 256px 0 0"
						>
							<h5>$setting-radius--round</h5>
						</div>
						<div class="swatch-info">
							<h6>$b256</h6>
							<h6>round</h6>
						</div>
					</li>
				</ul>
			</div>

			<!-- setting-shadow -->
			<div class="subsection">
				<h3>Setting Shadow</h3>
				<ul>
					<li class="swatch setting-shadow--soft">
						<div class="swatch-color">
							<h5>$setting-shadow--soft</h5>
						</div>
						<div class="swatch-info">
							<h6>0 2px 4px α(0.12)</h6>
							<h6>0 2px 4px α(0.12)</h6>
						</div>
					</li>
					<li class="swatch setting-shadow--strong">
						<div class="swatch-color">
							<h5>$setting-shadow--strong</h5>
						</div>
						<div class="swatch-info">
							<h6>0 10px 20px α(0.20)</h6>
							<h6>0 5px 10px α(0.10)</h6>
						</div>
					</li>
					<li class="swatch setting-shadow--motion">
						<div class="swatch-color">
							<h5>$setting-shadow--motion</h5>
						</div>
						<div class="swatch-info">
							<h6>light to strong</h6>
							<h6>shadow motion</h6>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- /SETTINGS -->
	</div>
</template>

<script>
	import mixinThemeType from "/src/mixins/mixinThemeType.js";

	export default {
		mixins: [mixinThemeType],
	};
</script>
