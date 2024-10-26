<script lang="ts">
  interface Role {
    title: string
    span: string
  }

  interface Props {
    company: string
    roles: Role[]
    description: string
  }

  let {company, roles, description}: Props = $props()
</script>

<div class="card hoverable">
  <div class="card-content">
    <p class="title">{company}</p>
    <p class="subtitle">
      {#each roles as { title, span }}
        {title}<span class="small"><br />{span}</span><br />
      {/each}
    </p>
    <p>
      {description}
    </p>
  </div>
</div>

<style lang="scss">
  .small {
    font-size: small;
    margin-top: 0%;
  }
</style>
