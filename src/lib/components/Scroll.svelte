<div class="flex flex-col items-center justify-center">
	<div class="mouse" />
	<p class="text text-xs md:text-sm font-medium mt-4 ml-4">Scroll down...</p>
</div>

<style lang="postcss">
	.mouse {
		width: 31px;
		height: 50px;
		position: relative;
		text-align: center;
		background: #7443ff linear-gradient(transparent 0%, transparent 50%, #7443ff 50%, #7443ff 100%);
		background-size: 100% 200%;
		border-radius: 100px;
		animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
	}
	.mouse:before,
	.mouse:after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
	}
	.mouse:before {
		width: 25px;
		height: 44px;
		background-color: #fff;
		border-radius: 100px;
	}
	.mouse:after {
		background-color: #7443ff;
		width: 6px;
		height: 6px;
		border-radius: 100%;
		animation: trackBallSlide 5s linear infinite;
	}
	.text {
		letter-spacing: 2px;
		color: #7443ff;
		animation: colorText 5s ease-out infinite, nudgeText 5s ease-out infinite;
	}

	@keyframes colorSlide {
		0% {
			background-position: 0% 100%;
		}
		20% {
			background-position: 0% 0%;
		}
		21% {
			background-color: #232323;
		}
		29.99% {
			background-color: #7443ff;
			background-position: 0% 0%;
		}
		30% {
			background-color: #232323;
			background-position: 0% 100%;
		}
		50% {
			background-position: 0% 0%;
		}
		51% {
			background-color: #232323;
		}
		59% {
			background-color: #7443ff;
			background-position: 0% 0%;
		}
		60% {
			background-color: #232323;
			background-position: 0% 100%;
		}
		80% {
			background-position: 0% 0%;
		}
		81% {
			background-color: #232323;
		}
		90%,
		100% {
			background-color: #7443ff;
		}
	}

	@keyframes colorText {
		21% {
			color: #232323;
		}
		30% {
			color: #7443ff;
		}
		51% {
			color: #232323;
		}
		60% {
			color: #7443ff;
		}
		81% {
			color: #232323;
		}
		90% {
			color: #7443ff;
		}
	}

	@keyframes trackBallSlide {
		0% {
			opacity: 1;
			transform: scale(1) translateY(-10px);
		}
		6% {
			opacity: 1;
			transform: scale(0.9) translateY(5px);
		}
		14% {
			opacity: 0;
			transform: scale(0.4) translateY(40px);
		}
		15%,
		19% {
			opacity: 0;
			transform: scale(0.4) translateY(-20px);
		}
		28%,
		29.99% {
			opacity: 1;
			transform: scale(1) translateY(-10px);
		}
		30% {
			opacity: 1;
			transform: scale(1) translateY(-10px);
		}
		36% {
			opacity: 1;
			transform: scale(0.9) translateY(5px);
		}
		44% {
			opacity: 0;
			transform: scale(0.4) translateY(40px);
		}
		45%,
		49% {
			opacity: 0;
			transform: scale(0.4) translateY(-10px);
		}
		58%,
		59.99% {
			opacity: 1;
			transform: scale(1) translateY(-10px);
		}
		60% {
			opacity: 1;
			transform: scale(0.9) translateY(-10px);
		}
		66% {
			opacity: 1;
			transform: scale(0.9) translateY(5px);
		}
		74% {
			opacity: 0;
			transform: scale(0.4) translateY(20px);
		}
		75%,
		79% {
			opacity: 0;
			transform: scale(0.4) translateY(-10px);
		}
		88%,
		100% {
			opacity: 1;
			transform: scale(1) translateY(-10px);
		}
	}
	@keyframes nudgeMouse {
		0% {
			transform: translateY(0);
		}
		20% {
			transform: translateY(8px);
		}
		30% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
		60% {
			transform: translateY(0);
		}
		80% {
			transform: translateY(8px);
		}
		90% {
			transform: translateY(0);
		}
	}
	@keyframes nudgeText {
		0% {
			transform: translateY(0);
		}
		20% {
			transform: translateY(2px);
		}
		30% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(2px);
		}
		60% {
			transform: translateY(0);
		}
		80% {
			transform: translateY(2px);
		}
		90% {
			transform: translateY(0);
		}
	}
</style>
