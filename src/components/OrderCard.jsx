import { XMarkIcon } from '@heroicons/react/20/solid';

export function OrderCard({ id, title, imageUrl, price, removeProduct }) {
    let renderXMarkIcon;
    if (removeProduct) renderXMarkIcon = <XMarkIcon onClick={() => removeProduct(id)} className='h-6 w-6 text-black cursor-pointer' />;

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    );
}
