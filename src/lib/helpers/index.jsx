export function getOrderStatus(status) {
    switch (status) {
        case 'PLACED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-white-600 bg-sky-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'CONFIRMED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'SHIPPED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-yellow-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'OUT_FOR_DELIVERY':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-teal-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'DELIVERED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-white-600 bg-green-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-white-600 bg-red-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
    }
}
