<template>
	<div>
		<h1>Vuex:</h1>
		<h2>即将从父组件传过来{{count}}</h2>
		<button @click="changeCount(119)">110被改变了</button>
		<ul>
			<li v-for="(bboy, index) in arrInfo" :key="index">
				<strong>Name: </strong>{{bboy.name}} 
				<span>Age: </span>{{bboy.age}}
				<span>City</span>{{bboy.city}}
			</li>
		</ul>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	export default {
		props: ['count'],
		data() {
			return {
				    
				arrInfo: [
					{
						name: 'Hong10', age: 33, city: 'korea'
					},
					{
						name: 'Taisuke', age: 28, city: 'japan'
					},
					{
						name: 'Wing', age: 32, city: 'korea'
					}
				]
			}
		},
		methods: {
			...mapActions(['changeCount'])
		}
	}
</script>