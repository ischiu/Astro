<script>
	let count = 0;
	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}

	function reset() {
		count = 0;
	}
</script>

<div class="grid place-items-center gap-4">
	<h1 class="text-secondary">Contador: {count}</h1>
	<button class="p-2 bg-tertiary text-white rounded-lg" on:click={increment}>Incrementar</button>
    <button class="p-2 bg-tertiary text-white rounded-lg" on:click={reset}>Reiniciar</button>
	<button class="p-2 bg-tertiary text-white rounded-lg" on:click={decrement}>Decrementar</button>

</div>

<style>

</style>
