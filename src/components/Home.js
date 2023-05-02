import {Data} from '../data'
import PostCard from './PostCard'
import MessageRoundedIcon from '@mui/icons-material/MessageRounded'
import { UseContext } from './context'

const Community = () =>{
    const posts = Data.map((data) => {
        return <PostCard data={data} key={data.id}/>
    })

    return(
        <main className='w-2/4 my-10 mx-auto '>
            <header>
                <h2 className='text-white text-2xl'>Hello Jane</h2>
                <p className='text-gray-500'>
                    How are you doing today? Would you like to share something
                    with the community today 👐{' '}
                </p>
            </header>
            <NewPost  />

            {posts}
        </main>

    )
}
const NewPost = () => {
    const { setIsModalOpen } = UseContext()

    return (
        <section
            onClick={() => setIsModalOpen(true)}
            className='bg-gray-800 rounded-md mt-5 p-3 w-full '
        >
            <div className='flex justify-between '>
                <div className='flex flex-row px-2'>
                    <div className='px-2'>
                        <p className='text-white'>Create post</p>
                    </div>
                </div>
            </div>
            <div className='bg-black rounded-md p-5 mx-2 mt-3 flex items-center'>
                <div className='pt-3'>
                    <i className='bg-gray-800 m-3 p-2 text-center text-white text-xl rounded-full '>
                        <MessageRoundedIcon />
                    </i>
                </div>
                <p className='text-gray-500 px-2'>How are you doing today?</p>
            </div>
            <div className='flex justify-end  '>
                <button className="bg-blue-500 px-8 py-2 text-white font-semibold rounded m-5">Post</button>
            </div>
        </section>
    )
}
export default Community