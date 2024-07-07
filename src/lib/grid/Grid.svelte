<script>
  export let name
  export let elements
  import '../../scss/base/_functions.scss'

  //   let showGreeting = false

  //   const handleClick = () => (showGreeting = true)
</script>

<section data-testid="grid" aria-label="Grid with elements">
  <h2>{name}</h2>

  {#if elements}
    <ul role="list" class="grid__inner">
      {#each elements as element}
        <li role="listitem">{element}</li>
      {/each}
    </ul>
  {/if}
</section>

<style scoped lang="scss">
  section {
    margin-top: var(--ms-spacing-lg);
    text-align: center;
  }

  .grid__inner {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--ms-spacing-xs);
    margin-top: var(--ms-spacing-sm);
  }

  .grid__inner li {
    padding: 1rem;
    // border: 1px solid var(--ms-color-border-primary-60);
    background-color: var(--ms-color-primary-60);
    border-radius: 5px;
  }
</style>
