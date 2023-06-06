import { useForm } from 'react-hook-form';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function FormLogin() {
  const schema = yup
    .object({
      email: yup.string().required('Email is required').email('Email is not valid'),
      password: yup.string().min(4).max(16).required('Password is required'),
    })
    .required();

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLoginForm = (data) => {
    console.log(data);
  };

  const watchLoginId = watch('email');

  return (
    <form onSubmit={handleSubmit(handleLoginForm)}>
      {/* Email */}
      <div>
        <label className="font-normal cursor-text">Email</label>
        <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('email')} />
          <small className="text-[#F6465D]">{errors.email?.message}</small>

          {!!watchLoginId && (
            <button
              type="button"
              className=" w-5  text-[#B7BDC6] dark:text-[#5e6673] pr-5 absolute right-0 top-1/2 translate-y-[-46%] "
              onClick={() => setValue('email', '')}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
        </div>
      </div>
      {/* password */}
      <div>
        <label className="font-normal cursor-text">Password</label>
        <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input
            className="w-full h-full px-3 outline-none bg-transparent mb-[2px]"
            autoComplete="off"
            type="password"
            {...register('password')}
          />
          <small className="text-[#F6465D]">{errors.password?.message}</small>
        </div>
      </div>
      {/* button */}
      <Button
        type="submit"
        primary
        className={'w-full justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor mt-2'}
      >
        Log In
      </Button>
    </form>
  );
}

export default FormLogin;
