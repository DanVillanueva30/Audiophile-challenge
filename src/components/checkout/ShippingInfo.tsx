import { useFormContext } from "react-hook-form";
import FieldsetContainer from "./FieldsetContainer";
import ErrorMessage from "./ErrorMessage";


export default function ShippingInfo() {
    const { register, formState: {errors} } = useFormContext();
    return (
        <FieldsetContainer legendText="Shipping info">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                <div className="relative col-start-1 col-end-3">
                    <label htmlFor="address" className={`${errors.address ? 'text-red-500' : ''}`}>Your Address</label>
                    <ErrorMessage error={errors.address}/> 
                    <input 
                        type="text" 
                        id="address" 
                        placeholder="1137 Williams Avenue" 
                        className={`${errors.address ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`}
                        {...register('address', {required: 'Address is required'})}
                    />
                </div>
                <div className="relative">
                    <label htmlFor="zipCode" className={`${errors.zipCode ? 'text-red-500' : ''}`}>ZIP Code</label>
                    <ErrorMessage error={errors.zipCode}/> 
                    <input 
                        type="text" 
                        id="zipCode" 
                        placeholder="10001"
                        className={`${errors.zipCode ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`} 
                        {...register("zipCode", {required: "ZIP Code is required",})}
                    />
                </div>
                <div className="relative" >
                    <label htmlFor="city" className={`${errors.city ? 'text-red-500' : ''}`}>City</label>
                    <ErrorMessage error={errors.city}/> 
                    <input 
                        type="text" 
                        id="city" 
                        placeholder="New York" 
                        className={`${errors.city ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`}
                        {...register('city', { required: 'City is required' })}
                    />
                </div>
                <div className="relative">
                    <label htmlFor="country" className={`${errors.country ? 'text-red-500' : ''}`}>Country</label>
                    <ErrorMessage error={errors.country}/> 
                    <input 
                        type="text" 
                        id="country" 
                        placeholder="United States" 
                        className={`${errors.country ? `border-red-500 outline-red-500` : `border-[#cfcfcf] outline-primary`}`}
                        {...register('country', { required: 'Country is required' })}
                    />
                </div>
            </div>
        </FieldsetContainer>
    )
}
