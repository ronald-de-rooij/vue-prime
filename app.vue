<template>
  <div class="card flex justify-content-center">
    <AutoComplete
      v-model="selectedCity"
      :suggestions="filteredCities"
      @complete="search"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      placeholder="Hint: type 'a'"
    >
      <template #optiongroup="slotProps">
        <div class="flex align-items-center country-item">
          <img
            :alt="slotProps.item.label"
            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`flag flag-${slotProps.item.code.toLowerCase()} mr-2`"
            style="width: 18px"
          />
          <div>{{ slotProps.item.label }}</div>
        </div>
      </template>
    </AutoComplete>
  </div>
</template>

<script setup>
import { FilterMatchMode, FilterService } from 'primevue/api'

const selectedCity = ref()
const filteredCities = ref()
const groupedCities = ref([
  {
    label: 'Germany',
    code: 'DE',
    items: [
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Frankfurt', value: 'Frankfurt' },
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' }
    ]
  },
  {
    label: 'USA',
    code: 'US',
    items: [
      { label: 'Chicago', value: 'Chicago' },
      { label: 'Los Angeles', value: 'Los Angeles' },
      { label: 'New York', value: 'New York' },
      { label: 'San Francisco', value: 'San Francisco' }
    ]
  },
  {
    label: 'Japan',
    code: 'JP',
    items: [
      { label: 'Kyoto', value: 'Kyoto' },
      { label: 'Osaka', value: 'Osaka' },
      { label: 'Tokyo', value: 'Tokyo' },
      { label: 'Yokohama', value: 'Yokohama' }
    ]
  }
])

function search(event) {
  let query = event.query
  let newFilteredCities = []

  for (let country of groupedCities.value) {
    let filteredItems = FilterService.filter(
      country.items,
      ['label'],
      query,
      FilterMatchMode.CONTAINS
    )
    if (filteredItems && filteredItems.length) {
      newFilteredCities.push({ ...country, ...{ items: filteredItems } })
    }
  }

  filteredCities.value = newFilteredCities
}
</script>
