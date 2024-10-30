import ErrorMessage from "./ErrorMessage";
import FieldsetContainer from "./FieldsetContainer";
import { useFormContext } from "react-hook-form";

export default function BillingDetails() {

    const { register, formState: {errors} } = useFormContext();
    return (
        <FieldsetContainer legendText="Billing details">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                <div className="relative">
                    <label  htmlFor="name" className={`${errors.name ? 'text-red-500' : ''}`}>Name</label>
                    <ErrorMessage error={errors.name}/>
                    <input 
                        type="text"
                        id="name" 
                        placeholder="Alexei Ward"
                        className={`${errors.name ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`}
                        {...register('name', { required: 'Name is required' })}
                    />
                </div>
                <div className="relative">
                    <label  htmlFor="email" className={`${errors.email ? 'text-red-500' : ''}`}>Email</label>
                    <ErrorMessage error={errors.email}/>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="alexei@mail.com"
                        className={`${errors.email ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                </div>
                <div className="relative">
                    <label  htmlFor="phone" className={`${errors.phone ? 'text-red-500' : ''}`}>Phone Number</label>
                    <ErrorMessage error={errors.phone}/>
                    <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+1 202-555-0136"
                        className={`${errors.phone ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`}
                        {...register('phone', { required: 'Phone number is required' })} 
                    />
                </div>
            </div>
        </FieldsetContainer>
    )
}
