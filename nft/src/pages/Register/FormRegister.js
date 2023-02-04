import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    email: yup.string().required('Email is required').email('Email is not valid'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
    password: yup.string().min(4).max(16).required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Confirm Password must match')
      .required('Confirm Password is required'),
  })
  .required();

function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleLoginForm = (data) => {};

  return (
    <form onSubmit={handleSubmit(handleLoginForm)}>
      {/* Email*/}
      <div>
        <label className="font-normal cursor-text">Email</label>
        <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('email')} />
          <small className="text-[#F6465D]"> {errors.email?.message}</small>
        </div>
      </div>
      {/* Phone */}
      <div>
        <label className="font-normal cursor-text">Phone Number</label>
        <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('phone')} />
          <small className="text-[#F6465D]">{errors.phone?.message}</small>
        </div>
      </div>
      {/* password */}
      <div>
        <label className="font-normal cursor-text">Password</label>
        <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input
            className="w-full h-full px-3 outline-none bg-transparent mb-[2px]"
            autoComplete="off"
            {...register('password')}
          />
          <small className="text-[#F6465D]">{errors.password?.message}</small>
        </div>
      </div>
      {/* confirm password */}
      <div>
        <label className="font-normal cursor-text">Confirm password</label>
        <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
          <input
            className="w-full h-full px-3 outline-none bg-transparent mb-[2px]"
            autoComplete="off"
            {...register('confirmPassword')}
          />
          <small className="text-[#F6465D]">{errors.confirmPassword?.message}</small>
        </div>
      </div>
      {/* button */}
      <Button
        type="submit"
        primary
        className={'w-full justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor mt-2'}
      >
        Register
      </Button>
    </form>
  );
}

export default FormRegister;
