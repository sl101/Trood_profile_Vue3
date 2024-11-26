<template>
  <input
    :value="modelValue"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :class="['input', error ? 'error_input' : '']"
    @input="$emit('update:modelValue', $event.target.value)" 
    v-bind="$attrs"
  />
	<span v-if="error" class="message">{{ error }}</span>
</template>

<script setup>
const props = defineProps({
	modelValue: String,
  type: String,
	name: String,
  placeholder: String,
	error:String
});

defineEmits(['update:modelValue']); 
</script>

<style scoped>
.input {
	font-family: var(--roboto);
	width: 100%;
	padding: 20px 18px;
	border: 1px solid var(--gray-dark);
	border-radius: 12px;
	background-color: transparent;
	color: var(--neutral-black);
	outline: none;
}

.error_input {
	border-color: var(--error);
}

.message {
	color: var(--error);
}
</style>