<template>
	<div v-if="show">
		<h5>无数据</h5>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				show:false
			}
		}
	}
</script>