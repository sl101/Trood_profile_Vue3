<template>
<ul  class="list">
  <li v-for="field in input_fields" :key="field.name">
    <InputField
      v-model="form_data[field.name]"
      :type="field.type"
      :name="field.name"
      :placeholder="field.placeholder"
      :error = "errors[field.name]"
      @input="handleInputChange(field.name, $event)"
    />
  </li>
</ul>

</template>

<script setup>
import InputField from "./InputField.vue"

const props = defineProps({
  input_fields: Array,
  form_data: Object,
  errors: Object
});
  //console.log("🚀 ~ errors:", props.errors[])


const emit = defineEmits(['update_form_data']);

// Обработчик изменения значения поля
const handleInputChange = (field_name, event) => {
  emit('update_form_data', { name: field_name, value: event.target.value });
};
</script>

<style scoped>
input{
	border:1px solid black;
}
.list {
	width: 100%;
	margin-top: 28px;
	display: flex;
	flex-direction: column;
	gap: 28px;
}
</style>