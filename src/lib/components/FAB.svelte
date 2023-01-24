<script>
	import { Message, Messenger, Whatsapp } from '$lib/components/Icons';
</script>

<div class="floating-container">
	<button class="floating-button">
		<span class="block w-8 h-8">
			<Message />
		</span>
	</button>
	<div class="element-container">
		<button class="float-element inline-flex justify-center items-center w-10 h-10"
			><a href="https://m.me/aemers/" target="_blank" rel="noreferrer">
				<Messenger />
			</a></button
		>
		<button class="float-element inline-flex justify-center items-center w-12 h-12"
			><a href="https://whatsapp.com/" target="_blank" rel="noreferrer">
				<Whatsapp />
			</a></button
		>
	</div>
</div>

<style lang="postcss">
	@-webkit-keyframes come-in {
		0% {
			-webkit-transform: translatey(100px);
			transform: translatey(100px);
			opacity: 0;
		}
		30% {
			-webkit-transform: translateX(-50px) scale(0.4);
			transform: translateX(-50px) scale(0.4);
		}
		70% {
			-webkit-transform: translateX(0px) scale(1.2);
			transform: translateX(0px) scale(1.2);
		}
		100% {
			-webkit-transform: translatey(0px) scale(1);
			transform: translatey(0px) scale(1);
			opacity: 1;
		}
	}
	@keyframes come-in {
		0% {
			-webkit-transform: translatey(100px);
			transform: translatey(100px);
			opacity: 0;
		}
		30% {
			-webkit-transform: translateX(-50px) scale(0.4);
			transform: translateX(-50px) scale(0.4);
		}
		70% {
			-webkit-transform: translateX(0px) scale(1.2);
			transform: translateX(0px) scale(1.2);
		}
		100% {
			-webkit-transform: translatey(0px) scale(1);
			transform: translatey(0px) scale(1);
			opacity: 1;
		}
	}

	.floating-container {
		@apply fixed w-28 h-28 bottom-0 left-0 my-8 mx-6;
	}
	.floating-container:hover {
		height: 200px;
	}
	.floating-container:hover .floating-button {
		box-shadow: 0 10px 25px rgba(116, 67, 255, 0.4);
		-webkit-transform: translatey(5px);
		transform: translatey(5px);
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
	}
	.floating-container:hover .element-container .float-element {
		-webkit-animation: come-in 0.4s forwards 0.2s;
		animation: come-in 0.4s forwards 0.2s;
	}
	.floating-container .floating-button {
		@apply absolute inline-flex items-center justify-center w-16 h-16 bg-primary bottom-0 left-0 right-0 rounded-full m-auto text-white;
		z-index: 100;
		box-shadow: 0 10px 25px -5px rgba(116, 67, 255, 0.4);
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
	}
	.floating-container .float-element {
		@apply relative block rounded-full w-12 h-12 my-4 mx-auto text-white z-0 opacity-0;
		-webkit-transform: translateY(100px);
		transform: translateY(100px);
	}
</style>
