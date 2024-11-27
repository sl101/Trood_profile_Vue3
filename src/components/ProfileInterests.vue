<template>
<ul class="content">
			<h4 class="title">{{title}}</h4>
		
				<li v-for="item in items" :key={item} class="interest">
					<span>{{item}}</span>
					<CircleButton 
					text="+" 
					@click="removeInterest(item)"
					content="btn_remove" />
				</li>
		
				<CircleButton 
				v-if="items.length<10 && !is_adding" 
				text="+" 
				@click="setIsAdding" />
					
				<div v-else class="add_interest">
					<input
						type="text"
						v-model="new_item"
						maxLength="30"/>
					<CircleButton 
					text="+" 
					@click="addInterest" 
					content="btn_add" />
					<CircleButton 
					text="-" 
					@click="cancelInterest" 
					content="btn_cancel" />
				</div>
		</ul>
</template>

<script setup>
import { defineProps, computed, ref, watch } from "vue";
import { useProfileStore } from "@/stores/profile";
import CircleButton from "./CircleButton.vue"

const emit = defineEmits(["update_form_data", "update_errors"]);
const profileStore = useProfileStore();

const new_item = ref("");
const is_adding = ref(false)

const items = computed(() => profileStore.profile_data[props.entity]);

const props = defineProps({
  title: String,
  entity: String,
});


const setIsAdding =()=>{
	is_adding.value = true
}

const removeInterest =(item)=>{
	const updated_items = items.value.filter((i) => i !== item);
  profileStore.updateProfileField(props.entity, updated_items);
}

const addInterest = () => {
	profileStore.validation_errors[props.entity] = null;
  if (new_item.value.trim() !== "" && items.value.length < 10) {
		const updated_items = [...items.value, new_item.value.trim()];
    profileStore.updateProfileField(props.entity, updated_items);
    new_item.value = ""; 
    is_adding.value = false;
  }
};

const cancelInterest =()=>{
	is_adding.value = false;
	new_item.value = "";
}

defineExpose({
  cancelInterest,
});

watch(
  () => profileStore.validation_errors[props.entity],
  (newError) => {
    emit("update_errors", newError);
  },
  { immediate: true,  deep: true } 
);

</script>

<style scoped>
.content {
	width: 100%;
	min-height: 29px;
	margin-top: 24px;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: center;
	gap: 16px;
	color: var(--gray-medium);
}

.title {
	flex-shrink: 0;
	font-weight: 400;
}

.interest {
	min-width: 60px;
	position: relative;
	z-index: 20;
	font-size: 16px;
	padding: 4px 16px;
	border: 1px solid var(--gray-medium);
	border-radius: 100px;
	color: var(--gray-medium);
	cursor: pointer;
}

.add_button {
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	border-radius: 50%;
	border: 1px solid transparent;
	color: var(--gray-medium);
	cursor: pointer;
	outline: none;
	transition: color var(--transition), border-color var(--transition),
		background-color var(--transition);
}

.add_button:hover {
	border-color: var(--gray-medium);
	background-color: var(--brand-secondary);
}

.add_button:focus {
	border-color: var(--gray-medium);
}

.interest:hover button {
	opacity: 1;
	visibility: visible;
}

.add_interest {
	width: 90px;
	position: relative;
	z-index: 20;
	font-size: 16px;
	padding: 4px 10px;
	border: 1px solid var(--gray-medium);
	border-radius: 100px;
	color: var(--gray-medium);
	background-color: transparent;
	outline: none;
}

.add_interest input {
	width: 100%;
	background-color: transparent;
	outline: none;
	border: none;
}
</style>