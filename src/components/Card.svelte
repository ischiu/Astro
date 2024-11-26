<script>
	export let href, title, body;
	console.log(href, title, body);
	</script>
	
	<li class="list-none flex p-[1px] bg-primary bg-none bg-[length:400%] rounded-[7px] bg-[100%] transition-[background-position] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
		<a href={href} class="w-full no-underline leading-[1.4] p-[calc(1.5rem-1px)] rounded-[8px] text-white bg-primary opacity-80 hover:bg-secondary hover:opacity-100 hover:bg-[position:0]">
			<h2 class="m-0 text-xl transition-colors duration-600">
				{title}
				<span>&rarr;</span>
			</h2>
			<p class="mt-2 mb-0">
				{body}
			</p>
		</a>
	</li>