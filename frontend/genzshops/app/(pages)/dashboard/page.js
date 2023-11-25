import DataSaverOnTwoToneIcon from '@mui/icons-material/DataSaverOnTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
export default function Dashboard() {
    return (
        <>
            <h1 className="font-bold text-[2rem] md:text-[3rem] text-[--bg-intro-text] w-full relative">
                Dashboard
            </h1>
            <section>
                <div className='w-full h-min'>
                    <div className="flex items-center justify-start border-2 p-4 mb-2">
                        <DataSaverOnTwoToneIcon />
                        <p className='mx-2'>Add or remove products</p>
                    </div>
                    <div className="flex items-center justify-start border-2 p-4 mb-2">
                        <CategoryTwoToneIcon />
                        <p className='mx-2'>Add or remove Categories</p>
                    </div>
                    <div className="flex items-center justify-start border-2 p-4 mb-2">
                        <StorefrontTwoToneIcon />
                        <p className='mx-2'>View Orders</p>
                    </div>
                </div>
            </section>
        </>
    )
}