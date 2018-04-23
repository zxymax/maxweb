<template>
	<div>
		<button @click="showNum">clickMe</button>
		<h1>{{num}}</h1>
		<h6>{{count}}</h6>
		<h1>Home page is here</h1>
		<list :count="count"></list>
	</div>

</template>

<script>
	import List from '@/components/List'
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				num: 10
			}
		},
		methods: {
			showNum() {
				this.num = 100
			}
		},
		computed: {
			...mapGetters(['count'])
		},
		components: {
			'list': List
		}
	}
</script>
<style scoped>
	div{
		border: 2px solid red;
		margin: 10px;
	}
</style>