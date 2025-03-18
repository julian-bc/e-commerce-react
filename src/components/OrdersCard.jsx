import { ChevronRightIcon } from '@heroicons/react/20/solid';

export function OrdersCard({ date, totalPrice, totalProducts }) {
    return (
        <div className='flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4'>
            <div className='flex flex-col'>
                <span className='font-light'>{date}</span>
                <span className='font-light'>{totalProducts} articles</span>
            </div>
        
            <div className='flex items-center gap-2'>
                <span className='font-medium text-2xl'>{totalPrice}</span>
                <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
            </div>
        </div>
    );
}
