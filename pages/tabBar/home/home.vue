<template>
	<view class="container">
		<homeHeader v-if="showHeader"></homeHeader>
	</view>
</template>

<script>
	import homeHeader from '../../../components/home/homeHeader.vue';
	export default {
		components:{
			homeHeader
		},
		data() {
			return {
				showHeader: true, // 是否显示自定义表头
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showHeader = false;
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
