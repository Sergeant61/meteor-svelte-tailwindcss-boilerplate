<script>
  //* Routes
  import { Route, router } from 'tinro'

  import PublicLayout from './public/layouts/PublicLayout.svelte'
  import DashboardLayout from './dashboard/layouts/DashboardLayout.svelte'
</script>

<PublicLayout />

<Route path="/dashboard/*">
  <DashboardLayout />
</Route>
