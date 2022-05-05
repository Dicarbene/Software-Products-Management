<script setup>
const props = defineProps({
  type: {
    type: String,
    default: '用户user'
  },
  repo: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>
            No.
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>
            1
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div>
                <div class="font-bold">Hart Hagerty</div>
                <div class="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br>
            <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>Purple</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>