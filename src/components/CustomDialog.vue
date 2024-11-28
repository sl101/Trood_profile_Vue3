<template>
  <dialog ref="dialog">
    <form method="dialog" v-bind:class="dialogClass">
      <p>{{ message }}</p>
      <button
        class="close_dialog"
        type="button"
        @click="closeDialog"
      >
        Close
      </button>
    </form>
  </dialog>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String, 
    required: true,
  },
});

const emit = defineEmits(["closed"]);

const dialog = ref(null);
const dialogClass = ref("");

watch(
  () => props.type,
  (newType) => {
    dialogClass.value = newType;
  },
  { immediate: true }
);

const showDialog = () => {
  dialog.value?.showModal();
};

const closeDialog = () => {
  dialog.value?.close();
  emit("closed");
};

defineExpose({
  showDialog,
});

</script>

<style scoped>
dialog {
  margin: auto;
  width: 70%;
	font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
	color: var(--neutral-white);
  opacity: 0;
  scale: 1.05;
  border-radius: 12px;
}

dialog[open] {
	border: 2px solid var(--neutral-white);
  opacity: 1;
  scale: 1;
}

dialog form {
  width: 100%;
  background-color: var(--neutral-light);
  padding: 20px 40px;
  color: var(--black-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: all 0s ease-in-out;
}

dialog .success {
	background-color: var(--success);
}

dialog .error {
	background-color: var(--error);
}

.close_dialog {
  align-self: end;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
	border: 1px solid var(--neutral-white);
	color: var(--neutral-white);
  transition: background-color var(--transition);
}

.close_dialog:hover {
  background-color: var(--neutral-dark);
  border-color: var(--neutral-dark);
  color: var(--neutral-light);
}
</style>
