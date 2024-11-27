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

import { useProfileStore } from "@/stores/profile";

const profileStore = useProfileStore();
const errors = profileStore.validation_errors;

const form_data  = profileStore.formInputs;

const input_fields =  [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "lastname", type: "text", placeholder: "Lastname" },
  { name: "job_title", type: "text", placeholder: "Job Title" },
  { name: "phone", type: "text", placeholder: "Phone" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "address", type: "text", placeholder: "Address" },
  { name: "experience", type: "text", placeholder: "Experience" },
];

const emit = defineEmits(['update_form_data']);
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