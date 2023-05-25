<template>
	<div class="login-box">
		<div class="login-logo">
			<img style="width: 100px; height: 100px;" src="../../../static/images/vite.svg" alt="">
			<h1 class="mb-0 ml-2 text-3xl font-bold">Antd Admin</h1>
		</div>
		<a-form layout="horizontal" :model="state.formInline" @submit.prevent="handleSubmit">
			<a-form-item>
				<a-input v-model:value="state.formInline.username" size="large" placeholder="admin">
					<template #prefix><user-outlined /></template>
				</a-input>
			</a-form-item>
			<a-form-item>
				<a-input v-model:value="state.formInline.password" size="large" type="password" placeholder="123456"
					autocomplete="new-password">
					<template #prefix><lock-outlined /></template>
				</a-input>
			</a-form-item>

			<a-form-item>
				<a-button type="primary" html-type="submit" size="large" :loading="state.loading" block>
					登录
				</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import router from '../../router/index';
import { message, Modal } from 'ant-design-vue';
import { useCounterStore } from '../../store/index'
import { login } from '../../api/api'
const counterStore = useCounterStore()

const state = reactive({
	loading: false,
	captcha: '',
	formInline: {
		username: '',
		password: '',
		verifyCode: '',
		captchaId: '',
	},
});


const setCaptcha = async () => {
};
setCaptcha();

const handleSubmit = async () => {
	const { username, password } = state.formInline;
	if (username.trim() == '' || password.trim() == '') {
		return message.warning('用户名或密码不能为空！');
	}

	message.loading('登录中...', 0);
	state.loading = true;
	console.log(state.formInline);
	//模拟接口
	login({
		username: "admin",
		pwd: "123456"
	}).then(res => {
		console.log(res);
	})
	const err = username.trim() == 'admin' || password.trim() == '123456'
	if (err) {
		localStorage.setItem('username', 'admin');
		counterStore.login_status = true
		message.success('登录成功！');
		router.push('/')
	} else {
		Modal.error({
			title: () => '提示',
			content: () => "登录失败",
		});
		setCaptcha();
	}
	state.loading = false;
	message.destroy();
};
</script>

<style scoped>
.login-box {
	display: flex;
	width: 100vw;
	height: 100vh;
	padding-top: 240px;
	background: url('../../static/images/login.svg');
	background-size: 100%;
	flex-direction: column;
	align-items: center;
}

.login-logo {
	display: flex;
	margin-bottom: 30px;
	align-items: center;
}

.svg-icon {
	font-size: 48px;
}

:deep(.ant-form) {
	width: 400px;
}

.ant-col {
	width: 100%;
}

.ant-form-item-label {
	padding-right: 6px;
}
</style>
