import Swal from 'sweetalert2';

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	},
});

const makeToast = (result) => {
	let type = result.success
		? 'success'
		: result.failure
		? 'info'
		: result.invalid
		? 'warning'
		: result.error
		? 'error'
		: 'info';
	Toast.fire({
		icon: type,
		title: result.message,
	});
};

export default makeToast;
