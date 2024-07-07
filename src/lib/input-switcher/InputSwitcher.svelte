<svelte:options customElement="input-switcher" />

<script>
  export let name = 'theme-mode'
  export let nameOn = 'On'
  export let nameOff = 'Off'
  export let eventToSend = 'theme-change'
  export let initialState = false
  export let ariaLabelOn = 'Switch to light theme'
  export let ariaLabelOff = 'Switch to dark theme'

  let state = initialState
</script>

<div
  class="theme-switcher"
  style="display: flex; align-items: center; gap: 20px"
>
  <div style="display: flex; align-items: center;">
    <input
      aria-label={state ? ariaLabelOff : ariaLabelOn}
      class="switch square"
      id={name}
      checked={state}
      {name}
      on:change={() => {
        state = !state
        // send event to parent
        dispatchEvent(new CustomEvent(eventToSend, { detail: state }))
      }}
      type="checkbox"
    />

    <label for={name}>
      {#if state}
        <span>{nameOn}</span>
      {:else}
        <span>{nameOff}</span>
      {/if}
    </label>
  </div>
</div>

<style>
  input[type='checkbox'].switch {
    background-image: -webkit-linear-gradient(left, #d4d4d4 50%, #b2b1b1 50%);
    background-size: 150% 100%;
    background-position: 16px 0;
    cursor: pointer;
    padding-right: 16px;
    position: relative;
    width: 32px;
    height: 12px;
    border: 1px solid #979797;
    border-radius: 10px;
    box-shadow:
      inset 0 1px 0px 0 rgba(0, 0, 0, 0.051),
      0px 1px 0px 0px rgba(255, 255, 255, 0.75);
    -webkit-appearance: none;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    -ms-transition: 0.2s;
    transition: 0.2s;
    margin-right: 12px;
  }

  /* // add hover state */
  input[type='checkbox'].switch:hover {
    outline: none;
    box-shadow: 0 0 1px 2px #5e9ed6;
  }

  input[type='checkbox'].switch:after {
    content: '';
    display: block;
    height: 16px;
    width: 16px;
    right: -2px;
    top: -4px;
    z-index: 4;
    border: 1px solid #969696;
    border-radius: 10px;
    background-color: #f7f7f7;
    background-image: -webkit-linear-gradient(top, #f7f7f7, #eee);
    background-image: -moz-linear-gradient(top, #f7f7f7, #eee);
    background-image: -ms-linear-gradient(top, #f7f7f7, #eee);
    background-image: -o-linear-gradient(top, #f7f7f7, #eee);
    background-image: linear-gradient(top, #f7f7f7, #eee);
    box-shadow:
      inset 0 1px 2px rgba(255, 255, 255, 1),
      0 1px 1px rgba(0, 0, 0, 0.12);
    left: -1px;
    position: relative;
  }

  input[type='checkbox'].switch:checked {
    background-position: 16px 0;
    padding-left: 14px;
    padding-right: 0;
    border: 1px solid #7a7a7a;
  }

  input[type='checkbox'].switch.square {
    border-radius: 2px;
    width: 34px;
  }
  input[type='checkbox'].switch.square:after {
    border-radius: 3px;
    top: -10px;
    width: 17px;
    height: 14px;
    left: -1px;
  }
  input[type='checkbox'].switch.square:checked {
    padding-left: 15px;
  }
  input[type='checkbox'].switch.square:before {
    content: '|||';
    display: block;
    z-index: 5;
    height: 7px;
    width: 8px;
    overflow: hidden;
    text-shadow:
      -1px -1px 0px white,
      0px -1px #5e5e5e;
    position: relative;
    left: 4px;
    font-size: 13px;
    color: #bbb;
    top: 1px;
  }
</style>
