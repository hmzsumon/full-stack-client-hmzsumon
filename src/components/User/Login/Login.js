import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<div className='h-screen bg-gray-100 flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-8 '>
				<div className='max-w-md w-full space-y-8 bg-white p-8 rounded shadow'>
					<div>
						<h2 className=' text-center text-3xl font-extrabold text-gray-900'>
							Sign in to your account
						</h2>
					</div>
					<form className='mt-8 space-y-6' action='#' method='POST'>
						<input type='hidden' name='remember' defaultValue='true' />
						<div className='rounded-md shadow-sm -space-y-px'>
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
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
									autoComplete='current-password'
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Password'
								/>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<input
									id='remember-me'
									name='remember-me'
									type='checkbox'
									className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
								/>
								<label
									htmlFor='remember-me'
									className='ml-2 block text-sm text-gray-900'
								>
									Remember me
								</label>
							</div>

							<div className='text-sm'>
								<Link
									href='#'
									className='font-medium text-indigo-600 hover:text-indigo-500'
								>
									Forgot your password?
								</Link>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
									<LockClosedIcon
										className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
										aria-hidden='true'
									/>
								</span>
								Sign in
							</button>
							<p className='text-center mt-2'>
								Don’t have an account?{' '}
								<Link
									to='/register'
									className='text-indigo-600 hover:text-indigo-500'
								>
									Create an account
								</Link>
							</p>
						</div>
					</form>
				</div>
				<div class='flex flex-col space-y-5 mt-5'>
					<span class='flex items-center justify-center space-x-2'>
						<span class='h-px bg-gray-400 w-40'></span>
						<span class='font-normal text-gray-500'>or login with</span>
						<span class='h-px bg-gray-400 w-40'></span>
					</span>
					<div class='flex flex-col space-y-4'>
						<a
							href='#'
							class='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none'
						>
							<span>
								<svg
									class='w-5 h-5 text-gray-800 fill-current group-hover:text-white'
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
						</a>
						<a
							href='#'
							class='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none'
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
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
