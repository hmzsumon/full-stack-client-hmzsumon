import { LockClosedIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [avatarPreview, setAvatarPreview] = useState('/Profile.png');

	const registerDataChange = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setAvatarPreview(reader.result);
			}
		};

		reader.readAsDataURL(e.target.files[0]);
	};
	console.log(avatarPreview);
	return (
		<>
			<div className='h-auto bg-gray-100 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 '>
				<div className='max-w-md w-full space-y-8 bg-white p-8 rounded shadow'>
					<div>
						<h2 className=' text-center text-3xl font-extrabold text-gray-900'>
							Create your account
						</h2>
					</div>
					<form className='mt-8 space-y-6' action='#' method='POST'>
						<input type='hidden' name='remember' defaultValue='true' />
						<div className='rounded-md shadow-sm -space-y-px'>
							<div>
								<label htmlFor='email-address' className='sr-only'>
									Name
								</label>
								<input
									id='email-address'
									name='name'
									type='name'
									autoComplete='name'
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Enter Name'
								/>
							</div>
							<div>
								<label htmlFor='email-address' className='sr-only'>
									Email address
								</label>
								<input
									id='email-address'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Email address'
								/>
							</div>
							<div>
								<label htmlFor='password' className='sr-only'>
									Password
								</label>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='true'
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Password'
								/>
							</div>
							<div>
								<label htmlFor='password' className='sr-only'>
									Password
								</label>
								<input
									id='confirmPassword'
									name='confirmPassword'
									type='confirmPassword'
									autoComplete='true'
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Confirm Password'
								/>
							</div>
						</div>
						<div
							id='registerImage'
							className='flex justify-around items-center'
						>
							<img
								src={avatarPreview}
								alt='Avatar Preview'
								className='nline-block h-10 w-10 rounded-full ring-2 ring-white'
							/>

							<div class='flex  items-center justify-center bg-grey-lighter'>
								<label className='w-60 flex justify-evenly items-center px-1 py-2 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white'>
									<svg
										className='w-8 h-8'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
									>
										<path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
									</svg>
									<p className='text-base leading-normal'>Select a file</p>
									<input
										type='file'
										name='avatar'
										accept='image/*'
										onChange={registerDataChange}
										class='hidden'
									/>
								</label>
							</div>
						</div>
						<div>
							<button
								type='submit'
								className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Create your account
							</button>
							<p className='text-center mt-2'>
								Already have an account?{' '}
								<Link
									to='/login'
									className='text-indigo-600 hover:text-indigo-500'
								>
									Login
								</Link>
							</p>
						</div>
					</form>
				</div>
				<div className='flex flex-col space-y-5 mt-5'>
					<span className='flex items-center justify-center space-x-2'>
						<span className='h-px bg-gray-400 w-40'></span>
						<span className='font-normal text-gray-500'>or login with</span>
						<span className='h-px bg-gray-400 w-40'></span>
					</span>
					<div class='flex flex-col space-y-4'>
						<Link
							href='#'
							className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none'
						>
							<span>
								<svg
									className='w-5 h-5 text-gray-800 fill-current group-hover:text-white'
									viewBox='0 0 16 16'
									version='1.1'
									aria-hidden='true'
								>
									<path
										fill-rule='evenodd'
										d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
									></path>
								</svg>
							</span>
							<span class='text-sm font-medium text-gray-800 group-hover:text-white'>
								Github
							</span>
						</Link>
						<Link
							href='#'
							className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none'
						>
							<span>
								<svg
									class='text-blue-500 group-hover:text-white'
									width='20'
									height='20'
									fill='currentColor'
								>
									<path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'></path>
								</svg>
							</span>
							<span class='text-sm font-medium text-blue-500 group-hover:text-white'>
								Twitter
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
