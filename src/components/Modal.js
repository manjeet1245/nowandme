import {Modal} from '@mui/material'
import {Fade} from '@mui/material'
import { UseContext } from './context'
import { LoginStart } from './Login'
import Signup from './SignUp'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '500px',
    boxShadow: 24,
    p: 4,
    
}

export default function TransitionsModal() {
    const { isModalOpen, setIsModalOpen, isLoginOpen } = UseContext()
    const handleClose = () => setIsModalOpen(false)

    return (
        <div>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={isModalOpen}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={isModalOpen}>
                    <div style={style}>
                        {isLoginOpen ? <LoginStart/> : <Signup/>}
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}