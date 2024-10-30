import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

interface ErrorMessageProps {
    error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
}


export default function ErrorMessage({error}: ErrorMessageProps) {
    if (!error) return null;
    
    const errorMessage = typeof error.message === 'string' ? error.message : 'Error';

    return (
        <span className="text-red-600 text-sm absolute top-0 right-0">{errorMessage}</span>
    )
}
