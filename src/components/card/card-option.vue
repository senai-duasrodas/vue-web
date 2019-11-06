<template>
	<div class="root-card-option-component">
		<div class="card-option shadow">
			<div class="card-wrapper">
				<div class="icon-card">
					<i :class="icon" class="fa-3x"></i>
				</div>
				<div class="text-card">
					<span>{{ title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		title: { type: String, default: '' },
		icon: { type: String, default: '' }
	}
}
</script>

<style lang="scss">
.root-card-option-component {
	.card-option {
		position: relative;
		background-color: #f8f9fa !important;
		width: 300px;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 2px;
		margin-left:40px;
		.card-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10px;
			div {
				margin: 10px;
			}
		}
	}
	.fa-pencil-alt {
		color: red;
	}
	.slide-fade-enter-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-active {
    transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>