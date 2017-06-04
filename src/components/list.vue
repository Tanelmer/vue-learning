<template>
	<div id='list'>
		<h1>List</h1>
		<p>{{con}}</p>
		<p>{{info}}</p>
		<ul id="list-from">
			<li v-for="item in items" style="list-style: none">
				{{item.msg}}
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
/* eslint-disable */
	// var list = new Vue({
	// 	el:'#list-from',
	// 	data:{
	// 		items:[
	// 			{detail:'1. router-view不显示，因为base没配置，然后找不到组件模板所以对应的路由tab没显示。'},
	// 			{detail:'2. 点击后的class我以为是要手动去设置，找了半天设置的地方，然后发现router里面已经做了这个事情，点击之后的会自动多出两个class'},
	// 			{detail:'3. 收获呢就是vue快入门了吧~~然后它这一套脚手架还没完全搞懂，还有那个热加载的玩意，还是要继续刚代码啊'}
	// 		]
	// 	}
	// });
	export default{
		data () {
			return{
				con:'这里是List，请注意',
				info:'说说感受吧',
				items:[
					{msg:'1. router-view不显示，因为base没配置，然后找不到组件模板所以对应的路由tab没显示。'},
					{msg:'2. 点击后的class我以为是要手动去设置，找了半天设置的地方，然后发现router里面已经做了这个事情，点击之后的会自动多出两个class'},
					{msg:'3. 收获呢就是vue快入门了吧~~然后它这一套脚手架还没完全搞懂，还有那个热加载的玩意，还是要继续刚代码啊'}
				]
			}
		}
	}
/* eslint-enable */
</script>