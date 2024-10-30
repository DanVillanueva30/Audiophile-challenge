

export default function FieldsetContainer({children, legendText} : { children: React.ReactNode, legendText: string }) {
    return (
        <fieldset className="space-y-6">
            <legend className="uppercase text-primary font-bold">{legendText}</legend>
            {children}
        </fieldset>
    )
}
