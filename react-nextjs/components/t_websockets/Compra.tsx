// MensajeChat
export interface CompraProps {
    nombre: string;
    valor: number;
}
export default function (props: CompraProps){
    const {nombre, valor} = props
    return (<>
        {
                <p className='text-right'>
                    {valor}<strong>:{nombre}</strong>
                </p>
        }
    </>)
}
