import Image from 'next/image';

const IndonesiaMap = () => {
    return (
        <div className='mt-[-400px] sm:mt-[-500px] md:mt-[-600px] lg:mt-[-720px] opacity-25'>
            <Image className='w-full' src="/background/indonesia.svg" alt="Map of Indonesia" width={600} height={400} />
        </div>
    )
}

export default IndonesiaMap;